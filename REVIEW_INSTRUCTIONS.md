# REVIEW_INSTRUCTIONS.md — Claude Code Review Loop Guide

## What Is This?
When `review-loop.mjs` runs, it:
1. Takes a screenshot of the live site
2. Writes a `REVIEW_PROMPT.md` file with the screenshot path + checklist
3. Creates a `.review-pending` file as a signal
4. Waits for you (Claude Code) to process the prompt and fix the code
5. Detects when `.review-pending` is deleted and moves to the next round

---

## Your Role in the Loop

When you see a `REVIEW_PROMPT.md` appear (or are asked to run a review), follow these steps **exactly**:

### Step 1 — Read the screenshot
```
Use the Read tool to open the PNG file listed in REVIEW_PROMPT.md
```
Do NOT skip this. You must actually see the image before evaluating.

### Step 2 — Evaluate
Go through every checklist item in `REVIEW_PROMPT.md`.
For each issue found, write:
```
❌ [Issue]: Card gap is 8px — should be 24px (ListingsPanel.tsx line 87)
```
For each item that passes:
```
✅ [Item]: Typography pairing — Playfair Display + Inter correctly applied
```

### Step 3 — Fix everything
Edit the actual source files. Be surgical:
- Fix one issue at a time
- State the exact change: `Changed gap-2 → gap-6 on card grid`
- Never make changes that break other things

### Step 4 — Signal completion
After all fixes are applied, **delete the `.review-pending` file**:
```bash
# Run this in the terminal to signal the loop to continue:
Remove-Item .review-pending
# or on Mac/Linux:
rm .review-pending
```
This tells `review-loop.mjs` to take the next screenshot and start Round 2.

---

## What to Look For (Priority Order)

### 🔴 Critical (fix immediately)
- Blank or white screen — component not rendering
- Broken layout — elements overlapping incorrectly
- Text unreadable — contrast too low
- JavaScript errors — check browser console

### 🟠 High (fix this round)
- Generic fonts (Arial, Inter, Roboto as primary heading font)
- Default Tailwind blue/indigo used as brand color
- Flat `shadow-md` with no color tint
- No hover states on buttons or links
- Images with no overlay or treatment
- Inconsistent spacing (random Tailwind steps)

### 🟡 Medium (fix if time allows)
- Line height below 1.6 on body text
- Letter spacing not tight on large headings
- Border radius inconsistent across components
- Dividers too harsh (solid black lines)
- Cards at different heights in a grid

### 🟢 Polish (final round only)
- Micro-animations on load/scroll
- Gradient depth and texture
- Subtle background patterns
- Hover transitions feel spring-like
- Overall page feels cohesive and memorable

---

## Evaluation Criteria per Element

### Buttons
```
✅ Has background color
✅ Has hover: state (darker/lighter)
✅ Has focus-visible: ring
✅ Has active: scale or press effect
✅ Cursor: pointer
✅ Transition on transform and opacity only (never transition-all)
```

### Cards
```
✅ Consistent padding (recommend: p-6 or 24px)
✅ Border subtle (gray-200 or similar, not black)
✅ Shadow layered with color tint (not shadow-md)
✅ Image has gradient overlay
✅ Hover lifts card (translateY + shadow increase)
✅ Border-radius consistent with rest of design
```

### Typography
```
✅ H1: display font, large (48px+), tight tracking (-0.03em)
✅ H2: display or semi-display, medium (32px+)
✅ Body: clean sans, 16px, line-height 1.7
✅ Labels: uppercase, wide tracking (0.08em), small (11-12px)
✅ Captions: muted color, smaller than body
```

### Navigation
```
✅ Brand logo present and prominent
✅ Nav links have hover states
✅ Mobile menu exists (hamburger on small screens)
✅ Sticky positioning works correctly
✅ No overflow on small viewports
```

### Images
```
✅ gradient overlay (from-black/60 at minimum)
✅ object-cover with defined height
✅ color treatment layer (mix-blend-multiply)
✅ No raw, unstyled img tags
```

---

## Common Fixes Reference

| Issue | Fix |
|---|---|
| Blank screen | Check console for JS errors, verify imports |
| Generic font | Add Google Fonts link to `<head>`, apply in CSS |
| Flat shadow | Replace with: `box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 10px 40px -10px rgba(BRAND,0.3)` |
| No hover state | Add `hover:` Tailwind classes or JS mouseenter/leave |
| Default blue | Search for `blue-` or `indigo-` in source, replace with brand color |
| transition-all | Replace with `transition-[transform,opacity]` |
| Cramped spacing | Increase padding from p-2/p-3 to p-5/p-6 minimum on cards |
| Low contrast | Darken text color or lighten background |
| No image overlay | Wrap img in relative div, add `absolute inset-0 bg-gradient-to-t from-black/60` |

---

## File Locations (update if your project differs)

```
project-root/
├── review-loop.mjs          ← runs the loop
├── screenshot.mjs           ← takes screenshots
├── serve.mjs                ← dev server
├── REVIEW_PROMPT.md         ← generated each round (read this)
├── REVIEW_COMPLETE.md       ← generated when loop finishes
├── REVIEW_INSTRUCTIONS.md   ← this file
├── .review-pending          ← delete this when your round is done
└── temporary screenshots/   ← all screenshots saved here
    ├── screenshot-1-round1.png
    ├── screenshot-2-round2.png
    └── screenshot-3-final.png
```

---

## Quick Command Reference

```powershell
# Start the loop (2 rounds by default)
node review-loop.mjs

# Custom number of rounds
node review-loop.mjs --rounds 4

# With a reference image to match
node review-loop.mjs --rounds 3 --reference ./design-reference.png

# Single screenshot + evaluation (no loop)
node review-loop.mjs --once

# Different port
node review-loop.mjs --url http://localhost:5173

# Signal loop to continue after fixes (run after your edits)
Remove-Item .review-pending   # Windows PowerShell
rm .review-pending            # Mac / Linux
```
