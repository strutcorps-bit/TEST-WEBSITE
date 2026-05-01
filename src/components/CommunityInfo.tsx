export default function CommunityInfo() {
  return (
    <section style={{ background: "#fff", borderTop: "1px solid var(--border-warm)" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "7rem 2.4rem" }}>

        {/* Eyebrow */}
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.1rem",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--red)",
            marginBottom: "1.6rem",
          }}
        >
          Wilmington, North Carolina
        </div>

        {/* Headline */}
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "3.6rem",
            fontWeight: 600,
            lineHeight: 1.18,
            letterSpacing: "-0.02em",
            color: "var(--text)",
            margin: "0 0 1.2rem",
            maxWidth: "22ch",
          }}
        >
          Find Your Ideal Home in the Cape Fear Region
        </h2>

        {/* Italic sub-headline */}
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.8rem",
            fontStyle: "italic",
            fontWeight: 400,
            color: "var(--text-muted)",
            margin: "0 0 4rem",
          }}
        >
          Built by America's most trusted homebuilder.
        </p>

        {/* Thin red accent rule */}
        <div style={{ width: "4.8rem", height: "0.25rem", background: "var(--red)", marginBottom: "4rem", borderRadius: "10rem" }} />

        {/* Body paragraphs */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.2rem", alignItems: "start" }}>
          {[
            "D.R. Horton brings quality craftsmanship and thoughtful design to every community in the greater Wilmington area. Whether you're searching for an entry-level townhome or a spacious single-family residence on the Intracoastal Waterway, our portfolio spans a range of lifestyles and price points — with the same commitment to excellence throughout.",
            "Wilmington, NC ranks among the Southeast's most desirable coastal destinations. With direct access to Wrightsville Beach and Carolina Beach, a vibrant Historic Downtown, top-rated schools across New Hanover, Brunswick, and Pender counties, and a thriving culinary and arts scene, the Cape Fear region offers a quality of life that few markets can match.",
          ].map((text, i) => (
            <p
              key={i}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.5rem",
                lineHeight: 1.8,
                color: "var(--text-muted)",
                margin: 0,
                fontWeight: 400,
              }}
            >
              {text}
            </p>
          ))}
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2.4rem",
            marginTop: "5.6rem",
            paddingTop: "4rem",
            borderTop: "1px solid var(--border-warm)",
          }}
        >
          {[
            { value: "47",    label: "Communities" },
            { value: "312",   label: "Homes Available" },
            { value: "10yr",  label: "Structural Warranty" },
          ].map(({ value, label }) => (
            <div key={label}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "4rem",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  color: "var(--text)",
                  lineHeight: 1,
                  marginBottom: "0.6rem",
                }}
              >
                {value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
