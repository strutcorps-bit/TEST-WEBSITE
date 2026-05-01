import { Link } from "react-router-dom";
import { Shield, Star, Home, Heart, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const S = { fontFamily: "var(--font-body)" } as const;
const D = { fontFamily: "var(--font-display)" } as const;

const stats = [
  { value: "47+",    label: "Years Building" },
  { value: "100+",   label: "Markets Served" },
  { value: "50",     label: "States" },
  { value: "1M+",    label: "Homes Delivered" },
];

const values = [
  { Icon: Shield, title: "Quality You Can Trust",   body: "Every D.R. Horton home is built to rigorous standards and backed by our industry-leading 10-year structural warranty." },
  { Icon: Star,   title: "Exceptional Value",       body: "We believe a quality home should be within reach. Our pricing delivers more — more space, more features, more life." },
  { Icon: Home,   title: "Community First",         body: "We don't just build houses. We design neighborhoods where generations of families grow, connect, and thrive." },
  { Icon: Heart,  title: "Built on Integrity",      body: "Since 1978, our word has been our bond. Every commitment we make — to homebuyers and communities alike — we keep." },
];

const milestones = [
  { year: "1978", event: "Donald R. Horton builds his first home in Fort Worth, Texas." },
  { year: "1991", event: "D.R. Horton expands to 10 markets across the American South." },
  { year: "1992", event: "The company goes public on the New York Stock Exchange." },
  { year: "1999", event: "Surpasses 10,000 homes closed in a single year for the first time." },
  { year: "2002", event: "Named America's largest homebuilder — a title held ever since." },
  { year: "2012", event: "Launches Express Homes, bringing quality construction to first-time buyers." },
  { year: "2018", event: "Celebrates the delivery of 500,000 homes across the United States." },
  { year: "2024", event: "Continues leading the industry with homes in over 100 markets nationwide." },
];

export default function OurStoryPage() {
  return (
    <div>

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <div style={{ position: "relative", height: "52rem", overflow: "hidden" }}>
        <img
          src="https://picsum.photos/seed/drh-story-hero/1600/800"
          alt="D.R. Horton community"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.4) 60%, transparent 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 3.2rem", width: "100%" }}>
            <div style={{ ...S, fontSize: "1.1rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--red)", marginBottom: "1.6rem" }}>
              Since 1978
            </div>
            <h1 style={{ ...D, fontSize: "5.6rem", fontWeight: 700, letterSpacing: "-0.025em", color: "#fff", margin: "0 0 1.6rem", lineHeight: 1.05, maxWidth: "14ch" }}>
              Building More Than Homes
            </h1>
            <p style={{ ...S, fontSize: "1.8rem", color: "rgba(255,255,255,0.65)", maxWidth: "45ch", fontWeight: 300, lineHeight: 1.6 }}>
              For nearly five decades, we've been crafting the places where America's families write their most cherished stories.
            </p>
          </div>
        </div>
      </div>

      {/* ── Stats ─────────────────────────────────────────────────────── */}
      <div style={{ background: "var(--red)", padding: "5rem 2.4rem" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem", textAlign: "center" }}>
          {stats.map(({ value, label }) => (
            <div key={label}>
              <div style={{ ...D, fontSize: "5rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1 }}>{value}</div>
              <div style={{ ...S, fontSize: "1.3rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginTop: "0.8rem" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Mission ───────────────────────────────────────────────────── */}
      <div style={{ background: "#fff", padding: "8rem 2.4rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8rem", alignItems: "center" }}>
          <div>
            <div style={{ ...S, fontSize: "1.1rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--red)", marginBottom: "1.6rem" }}>Our Mission</div>
            <h2 style={{ ...D, fontSize: "3.8rem", fontWeight: 600, letterSpacing: "-0.02em", color: "var(--text)", margin: "0 0 2.4rem", lineHeight: 1.15 }}>
              Making the American Dream Attainable
            </h2>
            <div style={{ width: "4rem", height: "0.25rem", background: "var(--red)", borderRadius: "10rem", marginBottom: "2.8rem" }} />
            <p style={{ ...S, fontSize: "1.5rem", color: "var(--text-muted)", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Donald R. Horton founded this company on a simple belief: every American family deserves a quality home in a community they love, at a price they can afford. That belief has guided every decision we've made for nearly half a century.
            </p>
            <p style={{ ...S, fontSize: "1.5rem", color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>
              From our first home in Fort Worth, Texas to over one million residences delivered across 50 states, our mission has never wavered. We build more than structures — we create the foundation for the lives our customers deserve.
            </p>
          </div>
          <div style={{ borderRadius: "1.6rem", overflow: "hidden", boxShadow: "0 24px 60px rgba(0,0,0,0.14)" }}>
            <img src="https://picsum.photos/seed/drh-mission/600/500" alt="Our mission" style={{ width: "100%", display: "block" }} />
          </div>
        </div>
      </div>

      {/* ── Values ────────────────────────────────────────────────────── */}
      <div style={{ background: "var(--warm-bg)", borderTop: "1px solid var(--border-warm)", padding: "8rem 2.4rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "5.6rem" }}>
            <div style={{ ...S, fontSize: "1.1rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--red)", marginBottom: "1rem" }}>What We Stand For</div>
            <h2 style={{ ...D, fontSize: "3.6rem", fontWeight: 600, letterSpacing: "-0.02em", color: "var(--text)", margin: 0 }}>Our Core Values</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2.4rem" }}>
            {values.map(({ Icon, title, body }) => (
              <div key={title} style={{ background: "#fff", borderRadius: "1.2rem", padding: "3.2rem", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                <div style={{ width: "4.8rem", height: "4.8rem", background: "rgba(200,16,46,0.08)", borderRadius: "1rem", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
                  <Icon size={22} strokeWidth={1.8} style={{ color: "var(--red)" }} />
                </div>
                <h3 style={{ ...D, fontSize: "2rem", fontWeight: 600, color: "var(--text)", margin: "0 0 1rem" }}>{title}</h3>
                <p style={{ ...S, fontSize: "1.4rem", color: "var(--text-muted)", lineHeight: 1.75, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Timeline ──────────────────────────────────────────────────── */}
      <div style={{ background: "#fff", padding: "8rem 2.4rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "5.6rem" }}>
            <div style={{ ...S, fontSize: "1.1rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--red)", marginBottom: "1rem" }}>Our Journey</div>
            <h2 style={{ ...D, fontSize: "3.6rem", fontWeight: 600, letterSpacing: "-0.02em", color: "var(--text)", margin: 0 }}>Milestones</h2>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 1, background: "var(--border-warm)", transform: "translateX(-50%)" }} />
            {milestones.map(({ year, event }, i) => (
              <div key={year} style={{ display: "flex", gap: "4rem", alignItems: "flex-start", marginBottom: "3.6rem", flexDirection: i % 2 === 0 ? "row" : "row-reverse" }}>
                <div style={{ flex: 1, textAlign: i % 2 === 0 ? "right" : "left" }}>
                  <div style={{ ...D, fontSize: "2rem", fontWeight: 700, color: "var(--red)", marginBottom: "0.4rem" }}>{year}</div>
                  <p style={{ ...S, fontSize: "1.4rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>{event}</p>
                </div>
                <div style={{ width: "1.4rem", height: "1.4rem", background: "var(--red)", borderRadius: "50%", flexShrink: 0, marginTop: "0.5rem", boxShadow: "0 0 0 4px rgba(200,16,46,0.15)" }} />
                <div style={{ flex: 1 }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Awards ────────────────────────────────────────────────────── */}
      <div style={{ background: "var(--warm-bg)", borderTop: "1px solid var(--border-warm)", padding: "7rem 2.4rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: "4rem", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <div style={{ ...S, fontSize: "1.1rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--red)", marginBottom: "1rem" }}>Recognition</div>
            <h2 style={{ ...D, fontSize: "3.2rem", fontWeight: 600, letterSpacing: "-0.02em", color: "var(--text)", margin: "0 0 1.6rem" }}>Award-Winning Builder</h2>
            <p style={{ ...S, fontSize: "1.5rem", color: "var(--text-muted)", lineHeight: 1.8, margin: "0 0 3.2rem" }}>
              D.R. Horton has been recognized by Builder Magazine as America's #1 homebuilder for over two decades. Our commitment to quality, value, and customer satisfaction continues to set the standard for the industry.
            </p>
            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
              {["Builder of the Year", "Energy Star Partner", "J.D. Power Recognition", "#1 in Volume"].map((award) => (
                <div key={award} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <Award size={15} style={{ color: "var(--red)", flexShrink: 0 }} />
                  <span style={{ ...S, fontSize: "1.3rem", color: "var(--text-muted)", fontWeight: 500 }}>{award}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ flexShrink: 0, borderRadius: "1.6rem", overflow: "hidden", width: "40rem", boxShadow: "0 16px 48px rgba(0,0,0,0.1)" }}>
            <img src="https://picsum.photos/seed/drh-awards/500/360" alt="Awards" style={{ width: "100%", display: "block" }} />
          </div>
        </div>
      </div>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <div style={{ background: "var(--header-bg)", padding: "7rem 2.4rem", textAlign: "center" }}>
        <div style={{ ...S, fontSize: "1.1rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--red)", marginBottom: "1.6rem" }}>Join Our Story</div>
        <h2 style={{ ...D, fontSize: "3.6rem", fontWeight: 700, letterSpacing: "-0.025em", color: "#fff", margin: "0 0 1.6rem" }}>Ready to Find Your Home?</h2>
        <p style={{ ...S, fontSize: "1.6rem", color: "rgba(255,255,255,0.5)", margin: "0 0 3.2rem", fontWeight: 300 }}>Browse hundreds of communities across North Carolina and beyond.</p>
        <Button variant="nav" size="lg" asChild>
          <Link to="/find-a-home" className="no-underline">Explore Communities</Link>
        </Button>
      </div>

    </div>
  );
}
