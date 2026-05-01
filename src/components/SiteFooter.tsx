import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";
import { footer as f } from "@/lib/links";

const ext = { target: "_blank", rel: "noopener noreferrer" };

const footerCols = [
  {
    heading: "Company",
    links: [
      { label: "About Us",           href: f.aboutUs },
      { label: "Careers",            href: f.careers },
      { label: "Investor Relations", href: f.investors },
      { label: "News & Press",       href: f.news },
    ],
  },
  {
    heading: "Homebuyers",
    links: [
      { label: "Find a Home",  href: f.findHome },
      { label: "DHI Mortgage", href: f.mortgage },
      { label: "Warranty",     href: f.warranty },
      { label: "My Account",   href: f.myAccount },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Buying Process",  href: f.buyingGuide },
      { label: "Design Centers",  href: f.designCenter },
      { label: "FAQs",            href: f.faq },
      { label: "Contact Us",      href: f.contact },
    ],
  },
];

const socialIcons = [
  { Icon: Facebook,  label: "Facebook",   href: "https://www.facebook.com/DRHorton/" },
  { Icon: Instagram, label: "Instagram",  href: "https://www.instagram.com/drhorton/" },
  { Icon: Twitter,   label: "X / Twitter",href: "https://twitter.com/drhorton" },
  { Icon: Youtube,   label: "YouTube",    href: "https://www.youtube.com/user/DRHortonInc" },
  { Icon: Linkedin,  label: "LinkedIn",   href: "https://www.linkedin.com/company/d.r.-horton" },
];

const legalLinks = [
  { label: "Privacy Policy",              href: f.privacy },
  { label: "Terms of Use",               href: f.terms },
  { label: "Accessibility",              href: f.accessibility },
  { label: "Do Not Sell My Personal Information", href: f.doNotSell },
];

export default function SiteFooter() {
  return (
    <footer style={{ background: "#0D0D0D" }}>

      {/* Main */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div
          className="flex items-start mx-auto"
          style={{ maxWidth: 1200, padding: "5.6rem 2.4rem", gap: "6rem" }}
        >
          {/* Brand */}
          <div className="flex-shrink-0" style={{ maxWidth: "20rem" }}>
            <a href="https://www.drhorton.com" {...ext} className="no-underline">
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2.6rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  marginBottom: "0.6rem",
                }}
              >
                D.R. Horton
              </div>
            </a>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "2.4rem",
              }}
            >
              America's Builder&#8480;
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.3rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.7, margin: 0 }}>
              The nation's largest homebuilder, delivering quality residences since 1978.
            </p>
          </div>

          {/* Link columns */}
          <div className="flex flex-1" style={{ gap: "5rem" }}>
            {footerCols.map((col) => (
              <div key={col.heading}>
                <h5
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.9)",
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    margin: "0 0 1.8rem",
                  }}
                >
                  {col.heading}
                </h5>
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                  {col.links.map(({ label, href }) => (
                    <li key={label} style={{ marginBottom: "1rem" }}>
                      <a
                        href={href}
                        {...ext}
                        className="no-underline transition-colors"
                        style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.4)", fontSize: "1.35rem" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social */}
          <div className="flex flex-col flex-shrink-0" style={{ gap: "1rem" }}>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.05rem",
                fontWeight: 700,
                color: "rgba(255,255,255,0.9)",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                marginBottom: "0.8rem",
              }}
            >
              Follow Us
            </div>
            {socialIcons.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                {...ext}
                aria-label={label}
                className="flex items-center no-underline transition-colors"
                style={{ gap: "1rem", color: "rgba(255,255,255,0.4)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
              >
                <div
                  style={{
                    width: "3.4rem",
                    height: "3.4rem",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={14} />
                </div>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "1.3rem" }}>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Legal */}
      <div style={{ background: "#080808" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2.4rem" }}>
          <p style={{ margin: "0 0 0.6rem", fontSize: "1.1rem", color: "rgba(255,255,255,0.22)", lineHeight: 1.7, fontFamily: "var(--font-body)" }}>
            © 2024 D.R. Horton, Inc. All rights reserved.&nbsp;&nbsp;
            {legalLinks.map(({ label, href }, i, arr) => (
              <span key={label}>
                <a
                  href={href}
                  {...ext}
                  className="no-underline transition-colors"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
                >
                  {label}
                </a>
                {i < arr.length - 1 && <span style={{ margin: "0 0.8rem", opacity: 0.2 }}>|</span>}
              </span>
            ))}
          </p>
          <p style={{ margin: 0, fontSize: "1.1rem", color: "rgba(255,255,255,0.18)", lineHeight: 1.7, fontFamily: "var(--font-body)" }}>
            Prices, plans, and availability subject to change without notice. Square footage is approximate. Images shown are for illustrative purposes only. Equal Housing Opportunity &#9816;
          </p>
        </div>
      </div>

    </footer>
  );
}
