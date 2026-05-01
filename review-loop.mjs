// review-loop.mjs — Automated Screenshot → Evaluate → Fix Loop
// ─────────────────────────────────────────────────────────────
// Drops a structured prompt into a file that Claude Code reads,
// triggering it to: screenshot → analyze → fix → repeat.
//
// Usage:
//   node review-loop.mjs                        (2 rounds, localhost:3000)
//   node review-loop.mjs --rounds 4             (4 rounds)
//   node review-loop.mjs --url http://localhost:5173
//   node review-loop.mjs --rounds 3 --reference ./reference.png
//   node review-loop.mjs --once                 (single shot, no loop)
//
// How it works:
//   1. Takes a screenshot via screenshot.mjs
//   2. Writes a REVIEW_PROMPT.md file with the screenshot path + checklist
//   3. Claude Code reads REVIEW_PROMPT.md and evaluates the design
//   4. Claude Code edits the source files to fix issues
//   5. Repeats for the specified number of rounds
// ─────────────────────────────────────────────────────────────

import { execSync, spawn } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ─── Parse CLI args ──────────────────────────────────────────
const args = process.argv.slice(2);
const get = (flag, fallback) => {
  const i = args.indexOf(flag);
  return i !== -1 && args[i + 1] ? args[i + 1] : fallback;
};
const hasFlag = (flag) => args.includes(flag);

const URL         = get("--url", "http://localhost:3000");
const ROUNDS      = hasFlag("--once") ? 1 : parseInt(get("--rounds", "2"), 10);
const REFERENCE   = get("--reference", null);
const PROMPT_FILE = path.join(__dirname, "REVIEW_PROMPT.md");
const SCREENSHOT_SCRIPT = path.join(__dirname, "screenshot.mjs");
const SCREENSHOTS_DIR   = path.join(__dirname, "temporary screenshots");

// ─── Helpers ─────────────────────────────────────────────────
const log = (msg) => console.log(`\n[review-loop] ${msg}`);
const sep = () => console.log("─".repeat(60));

function getLatestScreenshot() {
  if (!fs.existsSync(SCREENSHOTS_DIR)) return null;
  const files = fs.readdirSync(SCREENSHOTS_DIR)
    .filter((f) => f.endsWith(".png"))
    .map((f) => ({
      name: f,
      time: fs.statSync(path.join(SCREENSHOTS_DIR, f)).mtimeMs,
    }))
    .sort((a, b) => b.time - a.time);
  return files.length > 0 ? path.join(SCREENSHOTS_DIR, files[0].name) : null;
}

function takeScreenshot(label) {
  log(`Taking screenshot (label: ${label})...`);
  try {
    execSync(`node "${SCREENSHOT_SCRIPT}" ${URL} ${label}`, {
      stdio: "inherit",
      cwd: __dirname,
    });
    return getLatestScreenshot();
  } catch (err) {
    console.error(`Screenshot failed: ${err.message}`);
    console.error(`Make sure the dev server is running at ${URL}`);
    process.exit(1);
  }
}

function writeReviewPrompt(round, screenshotPath, totalRounds) {
  const relativePath = path.relative(__dirname, screenshotPath).replace(/\\/g, "/");
  const referenceSection = REFERENCE
    ? `## Reference Image\n- Reference: \`${REFERENCE}\`\n- Screenshot: \`${relativePath}\`\n- **Compare pixel-by-pixel.** List every visible difference.\n`
    : `## Screenshot to Evaluate\n- File: \`${relativePath}\`\n- Read this image now using the Read/View tool.\n`;

  const isLastRound = round === totalRounds;

  const prompt = `# Design Review — Round ${round} of ${totalRounds}

${referenceSection}
## Your Task
You are a senior UI/UX designer reviewing this screenshot for quality issues.

### Step 1 — Read the screenshot
Use your image reading tool to open and examine: \`${relativePath}\`

### Step 2 — Evaluate against this checklist
Check every item below and note specific issues with exact details:

**Layout & Spacing**
- [ ] Consistent padding/margin — no cramped or overflowing sections
- [ ] Correct alignment — elements line up on a clear grid
- [ ] Responsive — no horizontal scroll or broken layouts
- [ ] Z-index — nothing hidden behind other elements unexpectedly

**Typography**
- [ ] Font pairing — heading and body use DIFFERENT fonts
- [ ] Heading size hierarchy is clear (H1 > H2 > H3 > body)
- [ ] Line height on body text is ≥ 1.6
- [ ] Letter spacing on large headings is tight (≤ -0.02em)
- [ ] No text overflow or truncation issues

**Color & Contrast**
- [ ] Text contrast passes WCAG AA (≥ 4.5:1 ratio)
- [ ] Brand colors are consistent — no stray default Tailwind blues/indigos
- [ ] Backgrounds have depth — not plain flat white/black
- [ ] Hover states visible on all interactive elements

**Visual Quality**
- [ ] Shadows are layered and color-tinted — not flat shadow-md
- [ ] Images have gradient overlays — no raw unstyled images
- [ ] Gradients/textures add depth — not plain solid backgrounds
- [ ] Borders and dividers are subtle — not harsh black lines
- [ ] Border-radius is consistent throughout

**Interactions & States**
- [ ] Every button has a visible hover state
- [ ] Links have hover styles
- [ ] Focus rings visible for keyboard navigation
- [ ] Active/pressed states on clickable elements

**Components**
- [ ] Cards have consistent height and alignment
- [ ] Navigation items are evenly spaced
- [ ] Forms (if any) have proper labels and input styles
- [ ] No broken or placeholder content visible

### Step 3 — Fix all issues found
For each issue:
1. State what's wrong: e.g., "Card padding is 8px but should be 24px"
2. Edit the source file directly to fix it
3. Be specific about the CSS/class change made

### Step 4 — Confirm fixes
After editing, state: "Round ${round} complete. Fixed: [list of fixes]"

${isLastRound
  ? `### Final Round — Polish Pass
This is the LAST round. After fixing issues, do a final polish:
- Tighten any spacing that feels off
- Ensure the design has a strong, memorable visual identity
- Verify the overall page feels cohesive and professional
- Write a final summary: "Design review complete. The page is production-ready."`
  : `### Next Round
After fixing, the loop will take a new screenshot for Round ${round + 1}.`}

---
*Generated by review-loop.mjs — Round ${round}/${totalRounds}*
`;

  fs.writeFileSync(PROMPT_FILE, prompt, "utf-8");
  log(`Review prompt written → REVIEW_PROMPT.md`);
}

function waitForClaudeToFix(round) {
  // Write a sentinel file that signals Claude Code to process the prompt
  const sentinelPath = path.join(__dirname, ".review-pending");
  fs.writeFileSync(sentinelPath, `round-${round}`, "utf-8");

  log(`Waiting for Claude Code to process REVIEW_PROMPT.md...`);
  log(`→ Claude Code: open REVIEW_PROMPT.md and follow the instructions inside.`);

  // Poll until Claude removes the sentinel or user confirms
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      if (!fs.existsSync(sentinelPath)) {
        clearInterval(interval);
        log("Claude signaled completion. Proceeding to next round...");
        resolve();
      }
    }, 2000);

    // Safety timeout — move on after 5 minutes regardless
    setTimeout(() => {
      clearInterval(interval);
      if (fs.existsSync(sentinelPath)) fs.unlinkSync(sentinelPath);
      log("Timeout reached — moving to next round.");
      resolve();
    }, 300_000);
  });
}

function cleanupSentinel() {
  const p = path.join(__dirname, ".review-pending");
  if (fs.existsSync(p)) fs.unlinkSync(p);
}

// ─── Main Loop ───────────────────────────────────────────────
(async () => {
  sep();
  console.log(`
  ██████╗ ███████╗██╗   ██╗██╗███████╗██╗    ██╗    ██╗      ██████╗  ██████╗ ██████╗ 
  ██╔══██╗██╔════╝██║   ██║██║██╔════╝██║    ██║    ██║     ██╔═══██╗██╔═══██╗██╔══██╗
  ██████╔╝█████╗  ██║   ██║██║█████╗  ██║ █╗ ██║    ██║     ██║   ██║██║   ██║██████╔╝
  ██╔══██╗██╔══╝  ╚██╗ ██╔╝██║██╔══╝  ██║███╗██║    ██║     ██║   ██║██║   ██║██╔═══╝ 
  ██║  ██║███████╗ ╚████╔╝ ██║███████╗╚███╔███╔╝    ███████╗╚██████╔╝╚██████╔╝██║     
  `);
  sep();
  log(`Starting review loop`);
  log(`URL: ${URL}`);
  log(`Rounds: ${ROUNDS}`);
  if (REFERENCE) log(`Reference: ${REFERENCE}`);
  sep();

  // Verify screenshot.mjs exists
  if (!fs.existsSync(SCREENSHOT_SCRIPT)) {
    console.error(`\n❌ screenshot.mjs not found at: ${SCREENSHOT_SCRIPT}`);
    console.error(`   Make sure screenshot.mjs is in the same folder as review-loop.mjs\n`);
    process.exit(1);
  }

  for (let round = 1; round <= ROUNDS; round++) {
    sep();
    log(`ROUND ${round} of ${ROUNDS}`);
    sep();

    // 1. Take screenshot
    const screenshotPath = takeScreenshot(`round${round}`);
    if (!screenshotPath) {
      console.error("Could not find screenshot. Aborting.");
      process.exit(1);
    }
    log(`Screenshot saved: ${path.basename(screenshotPath)}`);

    // 2. Write review prompt for Claude Code
    writeReviewPrompt(round, screenshotPath, ROUNDS);

    // 3. Wait for Claude Code to process and fix
    await waitForClaudeToFix(round);

    // Small buffer between rounds for file writes to settle
    await new Promise((r) => setTimeout(r, 1500));
  }

  // Final screenshot after all rounds
  sep();
  log("All rounds complete. Taking final screenshot...");
  const finalPath = takeScreenshot("final");
  log(`Final screenshot: ${path.basename(finalPath)}`);

  // Write a completion summary
  const summary = `# Review Loop Complete ✅

## Summary
- Rounds completed: ${ROUNDS}
- URL reviewed: ${URL}
- Final screenshot: \`${path.relative(__dirname, finalPath).replace(/\\/g, "/")}\`
${REFERENCE ? `- Reference used: \`${REFERENCE}\`` : ""}

## Next Steps
- Open \`temporary screenshots/\` to compare before/after screenshots
- If satisfied, run \`npm run build\` to create the production build
- Deploy the \`dist/\` folder to your hosting provider

*Review loop finished at ${new Date().toLocaleString()}*
`;

  fs.writeFileSync(path.join(__dirname, "REVIEW_COMPLETE.md"), summary, "utf-8");
  cleanupSentinel();

  sep();
  log("Review loop finished! Check REVIEW_COMPLETE.md for the summary.");
  sep();
})();
