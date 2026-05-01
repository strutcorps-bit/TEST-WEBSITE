import { ArrowRight, BedDouble, Bath, Maximize2 } from "lucide-react";
import { Link } from "react-router-dom";
import { GradientBackground } from "@/components/ui/gradient-backgrounds";

interface Community {
  id: number;
  slug: string;
  name: string;
  city: string;
  zip: string;
  price: string;
  beds: string;
  baths: string;
  sqft: string;
  plans: number;
  badge?: string;
  badgeStyle?: React.CSSProperties;
  imgSeed: string;
}

const communities: Community[] = [
  { id: 1,  slug: "riverlights",                      name: "Riverlights",                    city: "Wilmington",   zip: "28412", price: "$289,990", beds: "3–5", baths: "2–3", sqft: "1,456–2,814", plans: 8,  badge: "Now Selling",   badgeStyle: { background: "var(--red)" },  imgSeed: "drh-house1" },
  { id: 2,  slug: "compass-pointe",                    name: "Compass Pointe",                  city: "Leland",       zip: "28451", price: "$314,990", beds: "3–4", baths: "2–3", sqft: "1,615–2,440", plans: 5,  badge: "Move-in Ready", badgeStyle: { background: "#1f6b3a" },     imgSeed: "drh-house2" },
  { id: 3,  slug: "waterford-of-the-carolinas",        name: "Waterford of the Carolinas",      city: "Wilmington",   zip: "28405", price: "$349,990", beds: "3–5", baths: "2–4", sqft: "1,820–3,100", plans: 11,                                                                    imgSeed: "drh-house3" },
  { id: 4,  slug: "sunset-reach",                      name: "Sunset Reach",                    city: "Wilmington",   zip: "28409", price: "$379,990", beds: "3–4", baths: "2–3", sqft: "1,750–2,650", plans: 6,  badge: "Coming Soon",   badgeStyle: { background: "#8a5500" },     imgSeed: "drh-house4" },
  { id: 5,  slug: "mallory-creek-plantation",          name: "Mallory Creek Plantation",        city: "Leland",       zip: "28451", price: "$267,990", beds: "3–5", baths: "2–3", sqft: "1,389–2,622", plans: 9,  badge: "Now Selling",   badgeStyle: { background: "var(--red)" },  imgSeed: "drh-house5" },
  { id: 6,  slug: "aberdeen",                          name: "Aberdeen",                        city: "Leland",       zip: "28451", price: "$299,990", beds: "3–4", baths: "2–3", sqft: "1,500–2,200", plans: 4,                                                                    imgSeed: "drh-house6" },
  { id: 7,  slug: "the-landing-at-monkey-junction",    name: "The Landing at Monkey Junction",  city: "Wilmington",   zip: "28412", price: "$319,990", beds: "3–5", baths: "2–3", sqft: "1,621–2,814", plans: 7,  badge: "Move-in Ready", badgeStyle: { background: "#1f6b3a" },     imgSeed: "drh-house7" },
  { id: 8,  slug: "tidewater-at-sunset-harbour",       name: "Tidewater at Sunset Harbour",     city: "Sunset Beach", zip: "28468", price: "$337,990", beds: "3–4", baths: "2–3", sqft: "1,700–2,500", plans: 5,                                                                    imgSeed: "drh-house8" },
  { id: 9,  slug: "the-reserve-at-pine-valley",        name: "The Reserve at Pine Valley",      city: "Wilmington",   zip: "28412", price: "$359,990", beds: "4–5", baths: "3–4", sqft: "2,100–3,200", plans: 3,  badge: "Now Selling",   badgeStyle: { background: "var(--red)" },  imgSeed: "drh-house9" },
  { id: 10, slug: "hanover-townhomes",                 name: "Hanover Townhomes",               city: "Wilmington",   zip: "28403", price: "$249,990", beds: "2–3", baths: "2–3", sqft: "1,250–1,850", plans: 2,                                                                    imgSeed: "drh-house10" },
];

function CommunityCard({ c }: { c: Community }) {
  return (
    <Link
      to={`/community/${c.slug}`}
      className="card-lift no-underline flex flex-col overflow-hidden"
      style={{
        background: "#fff",
        borderRadius: "1.2rem",
        boxShadow: "0 4px 16px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.05)",
        border: "1px solid rgba(0,0,0,0.06)",
        color: "inherit",
      }}
    >
      {/* Photo */}
      <div style={{ position: "relative", height: "22rem", overflow: "hidden", flexShrink: 0 }}>
        <img
          src={`https://picsum.photos/seed/${c.imgSeed}/480/300`}
          alt={c.name}
          style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
        {/* Dark photo overlay gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(10,10,10,0.55) 0%, transparent 55%)",
            pointerEvents: "none",
          }}
        />

        {c.badge && (
          <span
            style={{
              position: "absolute",
              top: "1.2rem",
              left: "1.2rem",
              background: c.badgeStyle?.background ?? "var(--red)",
              color: "#fff",
              fontFamily: "var(--font-body)",
              fontSize: "1.1rem",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "0.35rem 1rem",
              borderRadius: "10rem",
              boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
            }}
          >
            {c.badge}
          </span>
        )}

        {/* City name over photo bottom */}
        <div
          style={{
            position: "absolute",
            bottom: "1.2rem",
            left: "1.6rem",
            fontFamily: "var(--font-body)",
            fontSize: "1.1rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.75)",
          }}
        >
          {c.city}, NC
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: "2rem 2.2rem 2.2rem", flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Community name */}
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "2rem",
            fontWeight: 600,
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
            color: "var(--text)",
            margin: "0 0 1.6rem",
          }}
        >
          {c.name}
        </h3>

        {/* Divider */}
        <div style={{ height: 1, background: "var(--border-warm)", marginBottom: "1.6rem" }} />

        {/* Price + specs row */}
        <div className="flex items-start justify-between" style={{ marginBottom: "1.4rem" }}>
          <div>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.05rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: "0.3rem",
              }}
            >
              Starting From
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.4rem",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--text)",
                lineHeight: 1,
              }}
            >
              {c.price}
            </div>
          </div>

          {/* Spec icons */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", alignItems: "flex-end" }}>
            {[
              { Icon: BedDouble, value: `${c.beds} bd` },
              { Icon: Bath,      value: `${c.baths} ba` },
              { Icon: Maximize2, value: `${c.sqft} sf` },
            ].map(({ Icon, value }) => (
              <div
                key={value}
                className="flex items-center"
                style={{ gap: "0.4rem", color: "var(--text-muted)", fontSize: "1.25rem" }}
              >
                <Icon size={13} strokeWidth={1.8} />
                <span style={{ fontWeight: 500 }}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Footer link */}
        <div
          className="flex items-center justify-between"
          style={{
            paddingTop: "1.4rem",
            borderTop: "1px solid var(--border-warm)",
            marginTop: "0.4rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.2rem",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "var(--red)",
            }}
          >
            {c.plans} Floor Plans
          </span>
          <ArrowRight size={16} strokeWidth={2} style={{ color: "var(--red)" }} />
        </div>
      </div>
    </Link>
  );
}

export default function ListingsPanel() {
  return (
    <GradientBackground variant="cream" className="flex-1 min-w-0">
      <div style={{ padding: "2.4rem 2.8rem" }}>

        {/* Toolbar */}
        <div
          className="flex items-center justify-between"
          style={{ marginBottom: "2.4rem", paddingBottom: "1.6rem", borderBottom: "1px solid var(--border-warm)" }}
        >
          <div>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.8rem",
                fontWeight: 500,
                fontStyle: "italic",
                color: "var(--text-muted)",
              }}
            >
              47 communities
            </span>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "1.3rem", color: "var(--text-light)", margin: "0 0.8rem" }}>
              in Wilmington, NC
            </span>
          </div>
          <div className="flex items-center" style={{ gap: "0.8rem", fontSize: "1.3rem", color: "var(--text-muted)" }}>
            <label htmlFor="sort" style={{ fontWeight: 500, letterSpacing: "0.02em" }}>Sort by</label>
            <select
              id="sort"
              style={{
                border: "1px solid var(--border-warm)",
                borderRadius: "0.6rem",
                padding: "0.6rem 1.2rem",
                fontSize: "1.3rem",
                background: "#fff",
                color: "var(--text)",
                fontFamily: "var(--font-body)",
                cursor: "pointer",
              }}
            >
              <option>Best Match</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2.4rem" }}>
          {communities.map((c) => (
            <CommunityCard key={c.id} c={c} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center" style={{ padding: "4rem 0 2rem", gap: "0.6rem" }}>
          {["‹", "1", "2", "3", "4", "5", "›"].map((label, i) => (
            <button
              key={i}
              disabled={label === "‹"}
              style={{
                minWidth: "4rem",
                height: "4rem",
                padding: "0 0.8rem",
                borderRadius: "0.8rem",
                border: label === "1" ? "none" : "1px solid var(--border-warm)",
                background: label === "1" ? "var(--red)" : "#fff",
                color: label === "1" ? "#fff" : "var(--text)",
                fontSize: "1.4rem",
                fontWeight: label === "1" ? 700 : 400,
                fontFamily: "var(--font-body)",
                opacity: label === "‹" ? 0.3 : 1,
                cursor: label === "‹" ? "not-allowed" : "pointer",
                transition: "all 0.15s",
                boxShadow: label === "1" ? "0 2px 8px rgba(200,16,46,0.35)" : "none",
              }}
            >
              {label}
            </button>
          ))}
        </div>

      </div>
    </GradientBackground>
  );
}
