import { Link } from "react-router-dom";
import { MapPin, LayoutTemplate, Palette, CreditCard, HardHat, Key, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const S = { fontFamily: "var(--font-body)" } as const;
const D = { fontFamily: "var(--font-display)" } as const;

const steps = [
  {
    num: "01", Icon: MapPin,
    title: "Explore Communities",
    duration: "1–2 Weeks",
    body: "Begin by browsing our communities across North Carolina. Use our interactive map to find the right location, neighborhood type, and price range for your family. Schedule tours with our on-site New Home Specialists who will guide you through every available homesite.",
  },
  {
    num: "02", Icon: LayoutTemplate,
    title: "Choose Your Floor Plan",
    duration: "1–2 Weeks",
    body: "Select the floor plan that best fits how your family lives. Our portfolio ranges from cozy two-bedroom townhomes to expansive five-bedroom single-family residences. Every plan is designed by architects who understand how modern families move through a home.",
  },
  {
    num: "03", Icon: Palette,
    title: "Personalize Your Home",
    duration: "2–4 Weeks",
    body: "Visit one of our Design Centers and work with a professional interior designer to curate your home's finishes. Choose from curated selections of flooring, cabinetry, countertops, fixtures, and more — all coordinated to ensure a cohesive, beautiful result.",
  },
  {
    num: "04", Icon: CreditCard,
    title: "Secure Your Financing",
    duration: "2–4 Weeks",
    body: "Our preferred lending partner DHI Mortgage offers competitive rates and a seamless financing experience tailored specifically for new construction. With in-house processing and a dedicated loan officer, we minimize surprises and keep your closing on schedule.",
  },
  {
    num: "05", Icon: HardHat,
    title: "Watch It Take Shape",
    duration: "4–8 Months",
    body: "Enjoy the remarkable experience of watching your home rise from the ground up. We provide regular construction updates and milestone walk-throughs, so you're never left wondering about your home's progress. Our construction teams adhere to rigorous quality standards at every phase.",
  },
  {
    num: "06", Icon: Key,
    title: "Welcome Home",
    duration: "Closing Day",
    body: "At your pre-closing orientation, we'll walk you through every feature and system in your new home. Then it's time for closing, key handover, and the beginning of your next chapter. Our warranty team remains available to support you long after moving day.",
  },
];

const faqs = [
  {
    q: "How long does the buying process take?",
    a: "From initial community visit to closing, the process typically takes 6–10 months for a new construction home. Move-in ready homes can close in as few as 30 days.",
  },
  {
    q: "Do I need a real estate agent?",
    a: "You're welcome to work with a buyer's agent — we cooperate with all licensed real estate professionals. Our on-site New Home Specialists are also available to guide you through the process at no additional cost.",
  },
  {
    q: "What is included in a D.R. Horton home?",
    a: "All homes come with our smart home technology package, Energy Star® certification, and an industry-leading 10-year structural warranty. Standard features include quartz countertops, stainless appliances, and luxury vinyl flooring in most communities.",
  },
  {
    q: "Can I make changes after signing a contract?",
    a: "Design selections are made early in the process and can be adjusted before your design center appointment. Structural changes after contract signing may be limited depending on the stage of construction.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{ borderBottom: "1px solid var(--border-warm)", paddingBottom: open ? "2rem" : "2rem", marginBottom: "0" }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", background: "none", border: "none", padding: "2rem 0", cursor: "pointer", textAlign: "left", gap: "2rem" }}
      >
        <span style={{ ...S, fontSize: "1.5rem", fontWeight: 600, color: "var(--text)" }}>{q}</span>
        <ChevronDown size={18} strokeWidth={2} style={{ color: "var(--text-muted)", flexShrink: 0, transform: open ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }} />
      </button>
      {open && (
        <p style={{ ...S, fontSize: "1.4rem", color: "var(--text-muted)", lineHeight: 1.8, margin: "0 0 0.4rem" }}>{a}</p>
      )}
    </div>
  );
}

export default function BuyingProcessPage() {
  return (
    <div>

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <div
        style={{
          background: "linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 50%, #2a0a14 100%)",
          padding: "8rem 2.4rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse 60% 70% at 50% 100%, rgba(200,16,46,0.2) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: 720, margin: "0 auto" }}>
          <div style={{ ...S, fontSize: "1.1rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--red)", marginBottom: "1.6rem" }}>Your Path Forward</div>
          <h1 style={{ ...D, fontSize: "5rem", fontWeight: 700, letterSpacing: "-0.025em", color: "#fff", margin: "0 0 1.6rem", lineHeight: 1.1 }}>
            Your Journey to a New Home
          </h1>
          <p style={{ ...S, fontSize: "1.7rem", color: "rgba(255,255,255,0.5)", margin: 0, fontWeight: 300, lineHeight: 1.6 }}>
            Six thoughtful steps designed to make your homebuying experience as smooth and exciting as the home you're building.
          </p>
        </div>
      </div>

      {/* ── Steps ─────────────────────────────────────────────────────── */}
      <div style={{ background: "var(--warm-bg)", padding: "8rem 2.4rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2.8rem" }}>
            {steps.map(({ num, Icon, title, duration, body }) => (
              <div
                key={num}
                style={{ background: "#fff", borderRadius: "1.4rem", padding: "3.6rem", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", position: "relative", overflow: "hidden" }}
              >
                {/* Step number watermark */}
                <div style={{ ...D, position: "absolute", top: "-1rem", right: "2rem", fontSize: "9rem", fontWeight: 800, color: "rgba(0,0,0,0.04)", lineHeight: 1, userSelect: "none" }}>{num}</div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "1.6rem", marginBottom: "2rem", position: "relative" }}>
                  <div style={{ width: "4.8rem", height: "4.8rem", background: "var(--red)", borderRadius: "1rem", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={22} strokeWidth={1.8} style={{ color: "#fff" }} />
                  </div>
                  <div>
                    <div style={{ ...S, fontSize: "1.1rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--red)", marginBottom: "0.3rem" }}>Step {num}</div>
                    <h3 style={{ ...D, fontSize: "2.2rem", fontWeight: 600, color: "var(--text)", margin: 0 }}>{title}</h3>
                  </div>
                </div>

                <p style={{ ...S, fontSize: "1.4rem", color: "var(--text-muted)", lineHeight: 1.8, margin: "0 0 2rem" }}>{body}</p>

                <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(200,16,46,0.06)", borderRadius: "10rem", padding: "0.5rem 1.2rem" }}>
                  <div style={{ width: "0.6rem", height: "0.6rem", background: "var(--red)", borderRadius: "50%" }} />
                  <span style={{ ...S, fontSize: "1.2rem", fontWeight: 600, color: "var(--red)" }}>{duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── DHI Mortgage ──────────────────────────────────────────────── */}
      <div style={{ background: "var(--header-bg)", padding: "7rem 2.4rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8rem", alignItems: "center" }}>
          <div>
            <div style={{ ...S, fontSize: "1.1rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--red)", marginBottom: "1.6rem" }}>Preferred Lender</div>
            <h2 style={{ ...D, fontSize: "3.6rem", fontWeight: 700, letterSpacing: "-0.025em", color: "#fff", margin: "0 0 2rem", lineHeight: 1.2 }}>
              Financing Made Simple with DHI Mortgage
            </h2>
            <p style={{ ...S, fontSize: "1.5rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, margin: "0 0 3.2rem" }}>
              DHI Mortgage is our preferred lending partner, offering in-house processing, dedicated loan officers, and competitive rates — all designed around the unique needs of new construction financing. Pre-qualify in minutes.
            </p>
            <div style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap" }}>
              {["Competitive Rates", "In-House Processing", "New Construction Specialists", "Quick Pre-Approval"].map((feature) => (
                <div key={feature} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{ width: "0.6rem", height: "0.6rem", background: "var(--red)", borderRadius: "50%", flexShrink: 0 }} />
                  <span style={{ ...S, fontSize: "1.3rem", color: "rgba(255,255,255,0.6)" }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "1.6rem", padding: "4rem", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div style={{ ...D, fontSize: "2.4rem", fontWeight: 600, color: "#fff", marginBottom: "2.4rem" }}>Get Pre-Qualified</div>
            {["Full Name", "Email Address", "Phone Number"].map((field) => (
              <input
                key={field}
                type="text"
                placeholder={field}
                style={{ display: "block", width: "100%", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "0.8rem", padding: "1.2rem 1.6rem", fontSize: "1.4rem", fontFamily: "var(--font-body)", background: "rgba(255,255,255,0.06)", color: "#fff", marginBottom: "1.2rem", outline: "none" }}
              />
            ))}
            <Button variant="nav" size="lg" className="w-full" style={{ width: "100%", justifyContent: "center" }}>
              Request Pre-Qualification
            </Button>
          </div>
        </div>
      </div>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <div style={{ background: "#fff", padding: "8rem 2.4rem" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "5.6rem" }}>
            <div style={{ ...S, fontSize: "1.1rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--red)", marginBottom: "1rem" }}>Common Questions</div>
            <h2 style={{ ...D, fontSize: "3.6rem", fontWeight: 600, letterSpacing: "-0.02em", color: "var(--text)", margin: 0 }}>Frequently Asked</h2>
          </div>
          <div style={{ borderTop: "1px solid var(--border-warm)" }}>
            {faqs.map((faq) => <FAQItem key={faq.q} {...faq} />)}
          </div>
        </div>
      </div>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <div style={{ background: "var(--red)", padding: "7rem 2.4rem", textAlign: "center" }}>
        <h2 style={{ ...D, fontSize: "3.6rem", fontWeight: 700, letterSpacing: "-0.025em", color: "#fff", margin: "0 0 1.4rem" }}>Ready to Begin Your Journey?</h2>
        <p style={{ ...S, fontSize: "1.6rem", color: "rgba(255,255,255,0.7)", margin: "0 0 3.2rem", fontWeight: 300 }}>Browse our communities in Wilmington, NC and find your perfect home today.</p>
        <Button
          size="lg"
          asChild
          style={{ background: "#fff", color: "var(--red)", fontWeight: 700 }}
        >
          <Link to="/find-a-home" className="no-underline">Find Your Home</Link>
        </Button>
      </div>

    </div>
  );
}
