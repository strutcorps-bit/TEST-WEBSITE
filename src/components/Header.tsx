import { Search, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const navLinks = [
  { label: "Find a Home",     to: "/find-a-home",     tooltip: "Search communities by location" },
  { label: "Why D.R. Horton", to: "/our-story",        tooltip: "Learn what sets us apart" },
  { label: "Buying Process",  to: "/buying-process",   tooltip: "Step-by-step homebuying guide" },
  { label: "My Account",      to: "/account",          tooltip: "Sign in or create an account" },
];

const filterOptions = [
  { id: "home-type", defaultLabel: "Home Type: All",  options: ["Single Family", "Townhome", "55+ Active Adult"] },
  { id: "beds",      defaultLabel: "Beds: Any",        options: ["2+", "3+", "4+"] },
  { id: "price",     defaultLabel: "Price: Any",       options: ["Under $300k", "$300k – $400k", "$400k+"] },
];

export default function Header() {
  const navigate = useNavigate();

  return (
    <TooltipProvider delayDuration={250}>
      <header className="sticky top-0 z-50">

        {/* ══ TOP BAR ══════════════════════════════════════════════════ */}
        <div style={{ background: "var(--header-bg)", height: "var(--header-h)" }}>
          <div
            className="flex items-center h-full mx-auto"
            style={{ maxWidth: 1400, padding: "0 3.2rem", gap: "1.6rem" }}
          >
            {/* Logo */}
            <Link
              to="/"
              className="flex-shrink-0 no-underline flex flex-col leading-none"
              style={{ gap: "0.3rem" }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2.8rem",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "#ffffff",
                  lineHeight: 1,
                }}
              >
                D.R. Horton
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1,
                  fontWeight: 500,
                }}
              >
                America's Builder&#8480;
              </span>
            </Link>

            {/* Thin red divider */}
            <div
              className="flex-shrink-0 self-stretch"
              style={{ width: 1, background: "rgba(200,16,46,0.4)", margin: "1.6rem 0.8rem" }}
            />

            {/* Nav links */}
            <nav className="flex items-center ml-auto" style={{ gap: "0.8rem" }}>
              {navLinks.map(({ label, to, tooltip }) => (
                <Tooltip key={label}>
                  <TooltipTrigger asChild>
                    <Button variant="nav" size="default" asChild>
                      <Link to={to} className="no-underline">{label}</Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" sideOffset={8}>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "1.2rem" }}>{tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </nav>

            {/* Search */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                navigate("/find-a-home");
              }}
              className="flex items-stretch flex-shrink-0 overflow-hidden"
              style={{ borderRadius: "0.8rem", height: "4.6rem", boxShadow: "0 0 0 1px rgba(255,255,255,0.08)" }}
            >
              <input
                type="text"
                name="q"
                placeholder="City, state, or zip code..."
                className="border-0 outline-none"
                style={{
                  fontSize: "1.4rem",
                  padding: "0 1.8rem",
                  width: "24rem",
                  color: "var(--text)",
                  background: "#fff",
                  fontFamily: "var(--font-body)",
                }}
              />
              <Button
                type="submit"
                variant="nav"
                size="icon"
                className="rounded-none rounded-r-[0.8rem] flex-shrink-0 w-[5.2rem]"
                style={{ background: "var(--red)", height: "100%" }}
                aria-label="Search"
              >
                <Search size={18} strokeWidth={2.5} />
              </Button>
            </form>
          </div>
        </div>

        {/* ══ SUB-NAV ══════════════════════════════════════════════════ */}
        <div
          style={{
            background: "var(--subnav-bg)",
            height: "var(--subnav-h)",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            borderBottom: "1px solid rgba(255,255,255,0.04)",
          }}
        >
          <div
            className="flex items-center justify-between h-full mx-auto"
            style={{ maxWidth: 1400, padding: "0 3.2rem" }}
          >
            {/* Breadcrumb */}
            <nav className="flex items-center" style={{ gap: "0.4rem" }}>
              {[
                { label: "Home",            to: "/" },
                { label: "New Homes in NC", to: "/find-a-home" },
              ].map((crumb, i) => (
                <span key={crumb.label} className="flex items-center" style={{ gap: "0.4rem" }}>
                  {i > 0 && (
                    <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "1.6rem", lineHeight: 1 }}>›</span>
                  )}
                  <Button variant="subnav" size="sm" asChild>
                    <Link to={crumb.to} className="no-underline">{crumb.label}</Link>
                  </Button>
                </span>
              ))}
              <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "1.6rem", lineHeight: 1 }}>›</span>
              <Button
                variant="subnav"
                size="sm"
                asChild
                className="cursor-default"
                style={{ color: "white", fontWeight: 700, borderColor: "rgba(200,16,46,0.5)" } as React.CSSProperties}
              >
                <Link to="/find-a-home" className="no-underline">Wilmington, NC</Link>
              </Button>
            </nav>

            {/* Filters */}
            <div className="flex items-center" style={{ gap: "0.8rem" }}>
              {filterOptions.map(({ id, defaultLabel, options }) => (
                <Button key={id} variant="subnav" size="sm" asChild className="gap-0 pr-[1rem]">
                  <label className="cursor-pointer flex items-center">
                    <select
                      id={id}
                      className="bg-transparent border-0 outline-none cursor-pointer"
                      style={{
                        color: "rgba(255,255,255,0.85)",
                        fontSize: "1.25rem",
                        fontWeight: 500,
                        appearance: "none",
                        padding: "0 0.4rem 0 1.4rem",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      <option style={{ background: "#111", color: "white" }}>{defaultLabel}</option>
                      {options.map((opt) => (
                        <option key={opt} style={{ background: "#111", color: "white" }}>{opt}</option>
                      ))}
                    </select>
                    <ChevronDown size={12} strokeWidth={2.5} className="flex-shrink-0" style={{ color: "rgba(255,255,255,0.45)" }} />
                  </label>
                </Button>
              ))}
              <Button variant="subnav" size="sm" asChild className="gap-[0.5rem]">
                <Link to="/find-a-home" className="no-underline">
                  More Filters
                  <ChevronDown size={12} strokeWidth={2.5} />
                </Link>
              </Button>
            </div>
          </div>
        </div>

      </header>
    </TooltipProvider>
  );
}
