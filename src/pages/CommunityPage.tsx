import { useParams, Link, Navigate } from "react-router-dom";
import { MapPin, BedDouble, Bath, Maximize2, ArrowLeft, ArrowRight, Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCommunity, getAllCommunities } from "@/data/communities";
import type { FloorPlan, Community } from "@/data/communities";

const S = { fontFamily: "var(--font-body)" } as const;
const D = { fontFamily: "var(--font-display)" } as const;

function PlanCard({ plan }: { plan: FloorPlan }) {
  return (
    <div
      className="card-lift"
      style={{ background: "#fff", borderRadius: "1.2rem", overflow: "hidden", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 4px 16px rgba(0,0,0,0.07)" }}
    >
      <div style={{ height: "18rem", overflow: "hidden" }}>
        <img src={`https://picsum.photos/seed/${plan.imgSeed}/400/240`} alt={plan.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div style={{ padding: "2rem 2.2rem 2.4rem" }}>
        <div style={{ ...D, fontSize: "1.9rem", fontWeight: 600, color: "var(--text)", marginBottom: "1.2rem" }}>{plan.name}</div>
        <div style={{ display: "flex", gap: "1.6rem", marginBottom: "1.6rem" }}>
          {[
            { Icon: BedDouble, value: `${plan.beds} bd` },
            { Icon: Bath,      value: `${plan.baths} ba` },
            { Icon: Maximize2, value: `${plan.sqft.toLocaleString()} sf` },
          ].map(({ Icon, value }) => (
            <div key={value} style={{ display: "flex", alignItems: "center", gap: "0.4rem", ...S, fontSize: "1.25rem", color: "var(--text-muted)" }}>
              <Icon size={13} strokeWidth={1.8} />
              {value}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "1.4rem", borderTop: "1px solid var(--border-warm)" }}>
          <span style={{ ...D, fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text)" }}>{plan.price}</span>
          <Button variant="nav" size="sm">View Details</Button>
        </div>
      </div>
    </div>
  );
}

export default function CommunityPage() {
  const { slug } = useParams<{ slug: string }>();
  const community = slug ? getCommunity(slug) : undefined;

  if (!community) return <Navigate to="/find-a-home" replace />;

  const related = getAllCommunities().filter((c: Community) => c.slug !== community.slug).slice(0, 3);

  return (
    <div style={{ background: "var(--warm-bg)" }}>

      {/* ── Breadcrumb ────────────────────────────────────────────────── */}
      <div style={{ background: "#fff", borderBottom: "1px solid var(--border-warm)", padding: "1.4rem 3.2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", gap: "0.6rem", ...S, fontSize: "1.3rem", color: "var(--text-muted)" }}>
          <Link to="/" className="no-underline" style={{ color: "var(--red)" }}>Home</Link>
          <span>›</span>
          <Link to="/find-a-home" className="no-underline" style={{ color: "var(--red)" }}>Find a Home</Link>
          <span>›</span>
          <Link to="/find-a-home" className="no-underline" style={{ color: "var(--red)" }}>Wilmington, NC</Link>
          <span>›</span>
          <span style={{ color: "var(--text)", fontWeight: 600 }}>{community.name}</span>
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <div style={{ position: "relative", height: "48rem", overflow: "hidden" }}>
        <img
          src={`https://picsum.photos/seed/${community.imgSeed}/1600/700`}
          alt={community.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.2) 55%, transparent 100%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "4rem 3.2rem" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            {community.badge && (
              <div style={{ display: "inline-block", background: community.badgeColor, color: "#fff", ...S, fontSize: "1.1rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", padding: "0.4rem 1.2rem", borderRadius: "10rem", marginBottom: "1.4rem" }}>
                {community.badge}
              </div>
            )}
            <h1 style={{ ...D, fontSize: "5rem", fontWeight: 700, letterSpacing: "-0.025em", color: "#fff", margin: "0 0 0.8rem", lineHeight: 1.1 }}>
              {community.name}
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "rgba(255,255,255,0.7)" }}>
              <MapPin size={15} strokeWidth={2} />
              <span style={{ ...S, fontSize: "1.5rem" }}>{community.city}, {community.state} {community.zip}</span>
              <span style={{ margin: "0 0.8rem", opacity: 0.4 }}>·</span>
              <span style={{ ...D, fontSize: "2rem", color: "#fff", fontWeight: 600 }}>Starting From {community.priceFrom}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Content ──────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "5.6rem 3.2rem", display: "grid", gridTemplateColumns: "1fr 38rem", gap: "5.6rem", alignItems: "start" }}>

        {/* Left: Details */}
        <div>
          {/* Key stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.6rem", background: "#fff", borderRadius: "1.2rem", padding: "2.8rem", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 4px 16px rgba(0,0,0,0.07)", marginBottom: "4rem" }}>
            {[
              { Icon: BedDouble, label: "Bedrooms",   value: community.beds },
              { Icon: Bath,      label: "Bathrooms",  value: community.baths },
              { Icon: Maximize2, label: "Square Feet", value: `${community.sqftMin.toLocaleString()}–${community.sqftMax.toLocaleString()}` },
              { Icon: ArrowRight, label: "Floor Plans", value: `${community.plans} Plans` },
            ].map(({ Icon, label, value }) => (
              <div key={label} style={{ textAlign: "center" }}>
                <Icon size={20} strokeWidth={1.6} style={{ color: "var(--red)", margin: "0 auto 0.8rem" }} />
                <div style={{ ...D, fontSize: "1.8rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.3rem" }}>{value}</div>
                <div style={{ ...S, fontSize: "1.15rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)" }}>{label}</div>
              </div>
            ))}
          </div>

          {/* Description */}
          <div style={{ marginBottom: "4rem" }}>
            <div style={{ ...S, fontSize: "1.1rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--red)", marginBottom: "1rem" }}>About This Community</div>
            <h2 style={{ ...D, fontSize: "2.8rem", fontWeight: 600, letterSpacing: "-0.02em", color: "var(--text)", margin: "0 0 2rem" }}>A Place Worth Coming Home To</h2>
            <p style={{ ...S, fontSize: "1.5rem", color: "var(--text-muted)", lineHeight: 1.85, margin: 0 }}>{community.description}</p>
          </div>

          {/* Amenities */}
          <div style={{ background: "#fff", borderRadius: "1.2rem", padding: "3.2rem", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 4px 16px rgba(0,0,0,0.07)", marginBottom: "4rem" }}>
            <div style={{ ...S, fontSize: "1.1rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--red)", marginBottom: "1rem" }}>Community Amenities</div>
            <h3 style={{ ...D, fontSize: "2.2rem", fontWeight: 600, color: "var(--text)", margin: "0 0 2.4rem" }}>Resort-Style Living</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }}>
              {community.amenities.map((amenity) => (
                <div key={amenity} style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                  <div style={{ width: "2rem", height: "2rem", background: "rgba(200,16,46,0.08)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Check size={11} strokeWidth={2.5} style={{ color: "var(--red)" }} />
                  </div>
                  <span style={{ ...S, fontSize: "1.35rem", color: "var(--text-muted)" }}>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div style={{ borderRadius: "1.2rem", overflow: "hidden", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 4px 16px rgba(0,0,0,0.07)" }}>
            <div style={{ ...S, fontSize: "1.1rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--red)", padding: "2rem 2.4rem 0", background: "#fff" }}>Location</div>
            <div style={{ ...D, fontSize: "1.9rem", fontWeight: 600, color: "var(--text)", padding: "0.4rem 2.4rem 2rem", background: "#fff" }}>{community.city}, {community.state}</div>
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-78.3%2C33.75%2C-77.65%2C34.45&layer=mapnik"
              title="Location map"
              style={{ width: "100%", height: "28rem", border: 0, display: "block" }}
              loading="lazy"
            />
          </div>
        </div>

        {/* Right: Sticky contact card */}
        <div style={{ position: "sticky", top: "calc(var(--top-offset) + 2.4rem)" }}>
          <div style={{ background: "#fff", borderRadius: "1.6rem", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 8px 40px rgba(0,0,0,0.1)", overflow: "hidden" }}>
            <div style={{ background: "var(--red)", padding: "2.8rem 2.8rem 2.4rem" }}>
              <div style={{ ...S, fontSize: "1.1rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: "0.4rem" }}>Pricing From</div>
              <div style={{ ...D, fontSize: "3.4rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.025em" }}>{community.priceFrom}</div>
              <div style={{ ...S, fontSize: "1.35rem", color: "rgba(255,255,255,0.65)", marginTop: "0.2rem" }}>{community.plans} floor plans available</div>
            </div>
            <div style={{ padding: "2.8rem" }}>
              <div style={{ ...D, fontSize: "2rem", fontWeight: 600, color: "var(--text)", marginBottom: "2.4rem" }}>Schedule a Tour</div>
              {[
                { label: "Your Name",     type: "text",  placeholder: "Jane Smith" },
                { label: "Email Address", type: "email", placeholder: "you@example.com" },
                { label: "Phone Number",  type: "tel",   placeholder: "(555) 000-0000" },
              ].map(({ label, type, placeholder }) => (
                <div key={label} style={{ marginBottom: "1.4rem" }}>
                  <label style={{ ...S, fontSize: "1.15rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--text-muted)", display: "block", marginBottom: "0.5rem" }}>{label}</label>
                  <input type={type} placeholder={placeholder} style={{ width: "100%", border: "1.5px solid var(--border-warm)", borderRadius: "0.8rem", padding: "1.1rem 1.4rem", fontSize: "1.4rem", fontFamily: "var(--font-body)", outline: "none", color: "var(--text)", background: "#FAFAF8" }} />
                </div>
              ))}
              <Button variant="nav" size="lg" style={{ width: "100%", justifyContent: "center", marginTop: "0.8rem", background: "var(--red)", boxShadow: "0 4px 16px rgba(200,16,46,0.3)" }}>
                Request Information
              </Button>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.6rem", marginTop: "2rem" }}>
                <Phone size={14} style={{ color: "var(--text-muted)" }} />
                <span style={{ ...S, fontSize: "1.3rem", color: "var(--text-muted)" }}>Or call <a href="tel:+18005551234" style={{ color: "var(--red)", textDecoration: "none", fontWeight: 600 }}>1-800-555-1234</a></span>
              </div>
            </div>
          </div>

          {/* Back link */}
          <Link to="/find-a-home" className="no-underline" style={{ display: "flex", alignItems: "center", gap: "0.6rem", ...S, fontSize: "1.3rem", color: "var(--text-muted)", marginTop: "2rem", justifyContent: "center", transition: "color 0.15s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--red)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            <ArrowLeft size={14} /> Back to all communities
          </Link>
        </div>

      </div>

      {/* ── Floor Plans ───────────────────────────────────────────────── */}
      <div style={{ background: "#fff", borderTop: "1px solid var(--border-warm)", padding: "7rem 3.2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ ...S, fontSize: "1.1rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--red)", marginBottom: "1rem" }}>Available Plans</div>
          <h2 style={{ ...D, fontSize: "3.2rem", fontWeight: 600, letterSpacing: "-0.02em", color: "var(--text)", margin: "0 0 4rem" }}>Floor Plans</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2.4rem" }}>
            {community.floorPlans.map((plan) => <PlanCard key={plan.name} plan={plan} />)}
          </div>
        </div>
      </div>

      {/* ── Related Communities ───────────────────────────────────────── */}
      <div style={{ background: "var(--warm-bg)", borderTop: "1px solid var(--border-warm)", padding: "7rem 3.2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ ...S, fontSize: "1.1rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--red)", marginBottom: "1rem" }}>You Might Also Like</div>
          <h2 style={{ ...D, fontSize: "3.2rem", fontWeight: 600, letterSpacing: "-0.02em", color: "var(--text)", margin: "0 0 4rem" }}>Explore More Communities</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2.4rem" }}>
            {related.map((c: Community) => (
              <Link
                key={c.slug}
                to={`/community/${c.slug}`}
                className="no-underline card-lift"
                style={{ borderRadius: "1.2rem", overflow: "hidden", background: "#fff", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 4px 16px rgba(0,0,0,0.07)", display: "block" }}
              >
                <div style={{ position: "relative", height: "18rem", overflow: "hidden" }}>
                  <img src={`https://picsum.photos/seed/${c.imgSeed}/400/240`} alt={c.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)" }} />
                  <div style={{ position: "absolute", bottom: "1.2rem", left: "1.6rem", ...S, fontSize: "1.1rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)" }}>{c.city}, {c.state}</div>
                </div>
                <div style={{ padding: "1.8rem 2rem 2rem" }}>
                  <div style={{ ...D, fontSize: "1.8rem", fontWeight: 600, color: "var(--text)", marginBottom: "0.6rem" }}>{c.name}</div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ ...D, fontSize: "1.9rem", fontWeight: 700, color: "var(--text)" }}>{c.priceFrom}</div>
                    <div style={{ ...S, fontSize: "1.2rem", color: "var(--red)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>View →</div>
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
