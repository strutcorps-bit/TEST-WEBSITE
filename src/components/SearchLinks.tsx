import { search } from "@/lib/links";

const ext = { target: "_blank", rel: "noopener noreferrer" };

const columns = [
  {
    heading: "Nearby Cities",
    links: [
      { label: "Leland, NC",        href: search.leland },
      { label: "Hampstead, NC",     href: search.hampstead },
      { label: "Bolivia, NC",       href: search.bolivia },
      { label: "Castle Hayne, NC",  href: search.castleHayne },
      { label: "Shallotte, NC",     href: search.shallotte },
      { label: "Surf City, NC",     href: search.surfCity },
    ],
  },
  {
    heading: "Home Types",
    links: [
      { label: "Single-Family Homes",  href: search.singleFamily },
      { label: "Townhomes",            href: search.townhomes },
      { label: "Move-in Ready",        href: search.moveInReady },
      { label: "55+ Active Adult",     href: search.active55Plus },
      { label: "Express Homes",        href: search.express },
    ],
  },
  {
    heading: "Price Ranges",
    links: [
      { label: "Under $275,000",       href: search.under275 },
      { label: "$275k – $350k",        href: search.range275_350 },
      { label: "$350k – $450k",        href: search.range350_450 },
      { label: "Over $450,000",        href: search.over450 },
    ],
  },
  {
    heading: "School Districts",
    links: [
      { label: "New Hanover County",   href: search.newHanover },
      { label: "Brunswick County",     href: search.brunswick },
      { label: "Pender County",        href: search.pender },
    ],
  },
];

export default function SearchLinks() {
  return (
    <section style={{ background: "var(--warm-bg)", borderTop: "1px solid var(--border-warm)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "6rem 2.4rem" }}>

        <div style={{ marginBottom: "4rem" }}>
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.1rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--red)",
              marginBottom: "1rem",
            }}
          >
            Explore More
          </div>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2.8rem",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "var(--text)",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Find Your Perfect Community
          </h3>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "3.2rem" }}>
          {columns.map((col) => (
            <div key={col.heading}>
              <h4
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--text)",
                  margin: "0 0 1.4rem",
                  paddingBottom: "1rem",
                  borderBottom: "1.5px solid var(--red)",
                }}
              >
                {col.heading}
              </h4>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {col.links.map(({ label, href }) => (
                  <li key={label} style={{ marginBottom: "0.9rem" }}>
                    <a
                      href={href}
                      {...ext}
                      className="no-underline transition-colors"
                      style={{ fontFamily: "var(--font-body)", fontSize: "1.4rem", fontWeight: 400, color: "var(--text-muted)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--red)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
