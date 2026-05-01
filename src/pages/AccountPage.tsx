import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Home, Bell, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";

const S = { fontFamily: "var(--font-body)" } as const;
const D = { fontFamily: "var(--font-display)" } as const;

export default function AccountPage() {
  const [tab, setTab]         = useState<"signin" | "create">("signin");
  const [showPass, setShowPass] = useState(false);

  return (
    <div style={{ minHeight: "100vh", display: "flex" }}>

      {/* ── Left panel: brand ─────────────────────────────────────────── */}
      <div
        style={{
          width: "42%",
          flexShrink: 0,
          background: "linear-gradient(160deg, #111 0%, #1a0007 60%, #2a0a14 100%)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "5.6rem 5.6rem",
        }}
      >
        <img
          src="https://picsum.photos/seed/drh-account-bg/800/1000"
          alt=""
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.15 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 80% at 20% 80%, rgba(200,16,46,0.25) 0%, transparent 70%)" }} />

        <div style={{ position: "relative" }}>
          <Link to="/" className="no-underline">
            <div style={{ ...D, fontSize: "2.6rem", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>D.R. Horton</div>
            <div style={{ ...S, fontSize: "1rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginTop: "0.3rem" }}>America's Builder&#8480;</div>
          </Link>
        </div>

        <div style={{ position: "relative" }}>
          <blockquote style={{ ...D, fontSize: "2.8rem", fontWeight: 500, fontStyle: "italic", color: "#fff", lineHeight: 1.35, margin: "0 0 3.2rem", opacity: 0.9 }}>
            "The best investment on earth is earth — and the home built upon it."
          </blockquote>
          <div style={{ display: "flex", gap: "3.2rem" }}>
            {[
              { Icon: Home,  text: "Save communities" },
              { Icon: Heart, text: "Track favorites" },
              { Icon: Bell,  text: "Get new-listing alerts" },
            ].map(({ Icon, text }) => (
              <div key={text} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.8rem" }}>
                <div style={{ width: "4.4rem", height: "4.4rem", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={18} strokeWidth={1.8} style={{ color: "rgba(255,255,255,0.75)" }} />
                </div>
                <span style={{ ...S, fontSize: "1.15rem", color: "rgba(255,255,255,0.45)", textAlign: "center" }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Right panel: form ─────────────────────────────────────────── */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fff",
          padding: "5.6rem 6.4rem",
        }}
      >
        <div style={{ width: "100%", maxWidth: 420 }}>

          {/* Tabs */}
          <div style={{ display: "flex", borderBottom: "2px solid var(--border-warm)", marginBottom: "4rem" }}>
            {(["signin", "create"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  flex: 1,
                  background: "none",
                  border: "none",
                  paddingBottom: "1.4rem",
                  cursor: "pointer",
                  ...S,
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: tab === t ? "var(--text)" : "var(--text-muted)",
                  borderBottom: tab === t ? "2px solid var(--red)" : "2px solid transparent",
                  marginBottom: "-2px",
                  transition: "all 0.15s",
                }}
              >
                {t === "signin" ? "Sign In" : "Create Account"}
              </button>
            ))}
          </div>

          {tab === "signin" ? (
            <>
              <h1 style={{ ...D, fontSize: "3.4rem", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text)", margin: "0 0 0.6rem" }}>
                Welcome Back
              </h1>
              <p style={{ ...S, fontSize: "1.45rem", color: "var(--text-muted)", margin: "0 0 3.6rem" }}>
                Sign in to access your saved homes and searches.
              </p>

              <div style={{ marginBottom: "2rem" }}>
                <label style={{ ...S, fontSize: "1.2rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-muted)", display: "block", marginBottom: "0.6rem" }}>Email Address</label>
                <input type="email" placeholder="you@example.com" style={{ width: "100%", border: "1.5px solid var(--border-warm)", borderRadius: "0.8rem", padding: "1.3rem 1.6rem", fontSize: "1.4rem", fontFamily: "var(--font-body)", outline: "none", color: "var(--text)", background: "#FAFAF8" }} />
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label style={{ ...S, fontSize: "1.2rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-muted)", display: "block", marginBottom: "0.6rem" }}>Password</label>
                <div style={{ position: "relative" }}>
                  <input type={showPass ? "text" : "password"} placeholder="••••••••" style={{ width: "100%", border: "1.5px solid var(--border-warm)", borderRadius: "0.8rem", padding: "1.3rem 4.8rem 1.3rem 1.6rem", fontSize: "1.4rem", fontFamily: "var(--font-body)", outline: "none", color: "var(--text)", background: "#FAFAF8" }} />
                  <button onClick={() => setShowPass(!showPass)} style={{ position: "absolute", right: "1.2rem", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)" }}>
                    {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div style={{ textAlign: "right", marginBottom: "3.2rem" }}>
                <a href="#" style={{ ...S, fontSize: "1.3rem", color: "var(--red)", textDecoration: "none", fontWeight: 500 }}>Forgot password?</a>
              </div>

              <Button variant="nav" size="lg" style={{ width: "100%", justifyContent: "center", background: "var(--red)", boxShadow: "0 4px 16px rgba(200,16,46,0.3)" }}>
                Sign In
              </Button>

              <div style={{ display: "flex", alignItems: "center", gap: "1.6rem", margin: "2.8rem 0" }}>
                <div style={{ flex: 1, height: 1, background: "var(--border-warm)" }} />
                <span style={{ ...S, fontSize: "1.2rem", color: "var(--text-light)" }}>or continue with</span>
                <div style={{ flex: 1, height: 1, background: "var(--border-warm)" }} />
              </div>

              {["Continue with Google", "Continue with Apple"].map((label) => (
                <button
                  key={label}
                  style={{ display: "block", width: "100%", border: "1.5px solid var(--border-warm)", borderRadius: "0.8rem", padding: "1.2rem", fontSize: "1.4rem", fontFamily: "var(--font-body)", background: "#fff", cursor: "pointer", color: "var(--text)", fontWeight: 500, marginBottom: "1rem", transition: "background 0.15s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#FAFAF8")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
                >
                  {label}
                </button>
              ))}
            </>
          ) : (
            <>
              <h1 style={{ ...D, fontSize: "3.4rem", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text)", margin: "0 0 0.6rem" }}>
                Create Your Account
              </h1>
              <p style={{ ...S, fontSize: "1.45rem", color: "var(--text-muted)", margin: "0 0 3.6rem" }}>
                Save homes, track communities, and get notified when new listings go live.
              </p>

              {[
                { label: "Full Name",      type: "text",     placeholder: "Jane Smith" },
                { label: "Email Address",  type: "email",    placeholder: "you@example.com" },
                { label: "Phone Number",   type: "tel",      placeholder: "(555) 000-0000" },
                { label: "Password",       type: "password", placeholder: "Min. 8 characters" },
              ].map(({ label, type, placeholder }) => (
                <div key={label} style={{ marginBottom: "1.8rem" }}>
                  <label style={{ ...S, fontSize: "1.2rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-muted)", display: "block", marginBottom: "0.6rem" }}>{label}</label>
                  <input type={type} placeholder={placeholder} style={{ width: "100%", border: "1.5px solid var(--border-warm)", borderRadius: "0.8rem", padding: "1.3rem 1.6rem", fontSize: "1.4rem", fontFamily: "var(--font-body)", outline: "none", color: "var(--text)", background: "#FAFAF8" }} />
                </div>
              ))}

              <Button variant="nav" size="lg" style={{ width: "100%", justifyContent: "center", background: "var(--red)", marginTop: "1.6rem", boxShadow: "0 4px 16px rgba(200,16,46,0.3)" }}>
                Create Account
              </Button>
              <p style={{ ...S, fontSize: "1.2rem", color: "var(--text-light)", marginTop: "1.6rem", textAlign: "center", lineHeight: 1.6 }}>
                By creating an account you agree to our <a href="#" style={{ color: "var(--red)" }}>Terms of Service</a> and <a href="#" style={{ color: "var(--red)" }}>Privacy Policy</a>.
              </p>
            </>
          )}

          {/* Saved homes placeholder */}
          <div style={{ marginTop: "4.8rem", paddingTop: "4rem", borderTop: "1px solid var(--border-warm)", textAlign: "center" }}>
            <Heart size={28} strokeWidth={1.5} style={{ color: "var(--border-warm)", marginBottom: "1.2rem" }} />
            <p style={{ ...S, fontSize: "1.35rem", color: "var(--text-light)", margin: "0 0 1.6rem" }}>Sign in to view your saved homes and search alerts.</p>
            <Link to="/find-a-home" style={{ ...S, color: "var(--red)", fontSize: "1.35rem", fontWeight: 600, textDecoration: "none" }}>Browse Communities →</Link>
          </div>

        </div>
      </div>
    </div>
  );
}
