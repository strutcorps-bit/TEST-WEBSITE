import { Heart, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function HeroBanner() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #a50d27 0%, #c8102e 45%, #9e0c24 100%)",
        padding: "3.6rem 3.2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(255,255,255,0.04) 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      <div className="flex items-center relative" style={{ maxWidth: 1400, margin: "0 auto", gap: "3.2rem" }}>
        <div style={{ flex: 1 }}>
          {/* Location pill */}
          <Link
            to="/find-a-home"
            className="no-underline inline-flex items-center"
            style={{
              gap: "0.5rem",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "10rem",
              padding: "0.5rem 1.2rem 0.5rem 0.9rem",
              marginBottom: "1.6rem",
            }}
          >
            <MapPin size={13} strokeWidth={2} style={{ color: "rgba(255,255,255,0.8)" }} />
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.15rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.85)",
              }}
            >
              Wilmington, North Carolina
            </span>
          </Link>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "4rem",
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
              color: "#ffffff",
              margin: "0 0 1.2rem",
              maxWidth: "18ch",
            }}
          >
            Discover Your New Home in Wilmington
          </h1>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.6rem",
              fontWeight: 300,
              color: "rgba(255,255,255,0.75)",
              margin: 0,
              letterSpacing: "0.01em",
            }}
          >
            47 communities &nbsp;&middot;&nbsp; 312 homes available
          </p>
        </div>

        {/* Save Search → account page */}
        <div className="flex-shrink-0 flex flex-col items-end" style={{ gap: "1.2rem" }}>
          <Button
            variant="nav"
            size="lg"
            asChild
            className="gap-[0.8rem]"
            style={{
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(8px)",
              border: "1.5px solid rgba(255,255,255,0.35)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            } as React.CSSProperties}
          >
            <Link to="/account" className="no-underline">
              <Heart size={17} strokeWidth={2} />
              Save This Search
            </Link>
          </Button>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.15rem",
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.03em",
            }}
          >
            Get alerts when new homes are listed
          </span>
        </div>
      </div>
    </div>
  );
}
