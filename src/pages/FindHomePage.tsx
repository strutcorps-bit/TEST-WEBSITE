import { Search, MapPin, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getAllCommunities } from "@/data/communities";
import { ArrowRight, BedDouble, Bath } from "lucide-react";

const regions = [
  { name: "Greater Wilmington", communities: 47, imgSeed: "coastal-nc-1", slug: "wilmington" },
  { name: "Raleigh – Durham",   communities: 82, imgSeed: "raleigh-nc-1", slug: "raleigh" },
  { name: "Charlotte Metro",    communities: 63, imgSeed: "charlotte-nc-1", slug: "charlotte" },
  { name: "Brunswick Islands",  communities: 28, imgSeed: "brunswick-nc-1", slug: "brunswick" },
];

const S = { fontFamily: "var(--font-body)" } as const;
const D = { fontFamily: "var(--font-display)" } as const;

export default function FindHomePage() {
  const communities = getAllCommunities().slice(0, 6);

  return (
    <div style={{ background: "var(--warm-bg)" }}>

      {/* ── Hero / Search ─────────────────────────────────────────────── */}
      <div
        style={{
          background: "linear-gradient(135deg, #111111 0%, #1a1a1a 60%, #2a0a14 100%)",
          padding: "8rem 2.4rem 7rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse 70% 80% at 50% 100%, rgba(200,16,46,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ position: "relative", maxWidth: 760, margin: "0 auto" }}>
          <div style={{ ...S, fontSize: "1.1rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--red)", marginBottom: "1.6rem" }}>
            New Home Search
          </div>
          <h1 style={{ ...D, fontSize: "4.8rem", fontWeight: 700, letterSpacing: "-0.025em", color: "#fff", margin: "0 0 1.6rem", lineHeight: 1.1 }}>
            Where Would You Like to Call Home?
          </h1>
          <p style={{ ...S, fontSize: "1.7rem", color: "rgba(255,255,255,0.55)", margin: "0 0 4rem", fontWeight: 300 }}>
            Search over 400 communities across North Carolina and beyond.
          </p>

          {/* Search bar */}
          <div
            style={{
              display: "flex",
              background: "#fff",
              borderRadius: "1rem",
              overflow: "hidden",
              boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
              maxWidth: 640,
              margin: "0 auto",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", paddingLeft: "1.8rem", color: "var(--text-muted)" }}>
              <MapPin size={18} />
            </div>
            <input
              type="text"
              placeholder="City, state, community, or zip code..."
              style={{ flex: 1, border: 0, outline: "none", fontSize: "1.5rem", padding: "1.6rem 1.4rem", fontFamily: "var(--font-body)", color: "var(--text)" }}
            />
            <Button
              variant="nav"
              size="lg"
              className="rounded-none rounded-r-[1rem] flex-shrink-0"
              style={{ background: "var(--red)", paddingLeft: "2.4rem", paddingRight: "2.4rem" }}
            >
              <Search size={18} strokeWidth={2.5} />
              Search
            </Button>
          </div>

          {/* Quick links */}
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "2.4rem", flexWrap: "wrap" }}>
            {["Move-in Ready", "Under $300k", "3 Bedrooms", "Waterfront", "55+ Communities"].map((tag) => (
              <button
                key={tag}
                style={{ ...S, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)", borderRadius: "10rem", padding: "0.5rem 1.4rem", fontSize: "1.25rem", cursor: "pointer", transition: "all 0.15s" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Browse by Region ──────────────────────────────────────────── */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "7rem 2.4rem" }}>
        <div style={{ marginBottom: "4rem" }}>
          <div style={{ ...S, fontSize: "1.1rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--red)", marginBottom: "0.8rem" }}>North Carolina</div>
          <h2 style={{ ...D, fontSize: "3.2rem", fontWeight: 600, letterSpacing: "-0.02em", color: "var(--text)", margin: 0 }}>Browse by Region</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }}>
          {regions.map((r) => (
            <Link
              key={r.name}
              to="/find-a-home"
              className="no-underline card-lift"
              style={{ borderRadius: "1.2rem", overflow: "hidden", background: "#fff", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", display: "block" }}
            >
              <div style={{ position: "relative", height: "16rem", overflow: "hidden" }}>
                <img src={`https://picsum.photos/seed/${r.imgSeed}/400/220`} alt={r.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.6) 0%, transparent 60%)" }} />
              </div>
              <div style={{ padding: "1.6rem 1.8rem" }}>
                <div style={{ ...D, fontSize: "1.8rem", fontWeight: 600, color: "var(--text)", marginBottom: "0.4rem" }}>{r.name}</div>
                <div style={{ ...S, fontSize: "1.25rem", color: "var(--text-muted)" }}>{r.communities} communities</div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--red)", fontSize: "1.2rem", fontWeight: 600, marginTop: "1rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Explore <ChevronRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Featured Communities ──────────────────────────────────────── */}
      <div style={{ background: "#fff", borderTop: "1px solid var(--border-warm)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "7rem 2.4rem" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "4rem" }}>
            <div>
              <div style={{ ...S, fontSize: "1.1rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--red)", marginBottom: "0.8rem" }}>Wilmington Area</div>
              <h2 style={{ ...D, fontSize: "3.2rem", fontWeight: 600, letterSpacing: "-0.02em", color: "var(--text)", margin: 0 }}>Featured Communities</h2>
            </div>
            <Link to="/" style={{ ...S, color: "var(--red)", fontSize: "1.35rem", fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: "0.4rem" }}>
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2.4rem" }}>
            {communities.map((c) => (
              <Link
                key={c.slug}
                to={`/community/${c.slug}`}
                className="no-underline card-lift"
                style={{ borderRadius: "1.2rem", overflow: "hidden", background: "#fff", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 4px 16px rgba(0,0,0,0.07)", display: "flex", flexDirection: "column" }}
              >
                <div style={{ position: "relative", height: "20rem", overflow: "hidden" }}>
                  <img src={`https://picsum.photos/seed/${c.imgSeed}/400/260`} alt={c.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 55%)" }} />
                  {c.badge && (
                    <span style={{ position: "absolute", top: "1.2rem", left: "1.2rem", background: c.badgeColor, color: "#fff", fontSize: "1.05rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.3rem 1rem", borderRadius: "10rem" }}>
                      {c.badge}
                    </span>
                  )}
                  <div style={{ position: "absolute", bottom: "1.2rem", left: "1.6rem", ...S, fontSize: "1.1rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)" }}>
                    {c.city}, {c.state}
                  </div>
                </div>
                <div style={{ padding: "1.8rem 2rem 2rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ ...D, fontSize: "1.9rem", fontWeight: 600, color: "var(--text)", marginBottom: "1.4rem" }}>{c.name}</div>
                  <div style={{ height: 1, background: "var(--border-warm)", marginBottom: "1.4rem" }} />
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ ...S, fontSize: "1rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.2rem" }}>From</div>
                      <div style={{ ...D, fontSize: "2.1rem", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text)" }}>{c.priceFrom}</div>
                    </div>
                    <div style={{ display: "flex", gap: "1.2rem" }}>
                      <span style={{ ...S, fontSize: "1.2rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "0.3rem" }}><BedDouble size={13} /> {c.beds}</span>
                      <span style={{ ...S, fontSize: "1.2rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "0.3rem" }}><Bath size={13} /> {c.baths}</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "1.4rem", borderTop: "1px solid var(--border-warm)", marginTop: "1.4rem" }}>
                    <span style={{ ...S, fontSize: "1.2rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--red)" }}>{c.plans} Floor Plans</span>
                    <ArrowRight size={15} style={{ color: "var(--red)" }} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
