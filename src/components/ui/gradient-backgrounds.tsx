import { cn } from "@/lib/utils";

// gradient-backgrounds.tsx — base variant (indigo)
export const Component = () => {
  return (
    <div className="min-h-screen w-full relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
        }}
      />
    </div>
  );
};

// demo.tsx — pink variant
export default function GradientDemo() {
  return (
    <div className="min-h-screen w-full bg-white relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #ec4899 100%)
          `,
          backgroundSize: "100% 100%",
        }}
      />
    </div>
  );
}

// ─── Reusable wrapper ────────────────────────────────────────────────────────

interface GradientBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  variant?: "indigo" | "pink" | "red" | "cream";
}

const gradients: Record<string, string> = {
  indigo: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
  pink:   "radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #ec4899 100%)",
  red:    "radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #c8102e 80%)",
  // Warm parchment — barely perceptible, adds richness without distraction
  cream:  "radial-gradient(ellipse 160% 110% at 50% 0%, #F8F6F2 40%, #E8DDD0 100%)",
};

export function GradientBackground({
  children,
  className,
  variant = "cream",
}: GradientBackgroundProps) {
  return (
    <div className={cn("relative w-full", className)}>
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: gradients[variant], backgroundSize: "100% 100%" }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
