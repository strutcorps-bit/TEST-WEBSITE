import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

/*
 * All h-[Xrem] / text-[Xrem] / px-[Xrem] values use the site's 62.5% root
 * font-size scale where 1rem = 10px, so Tailwind's built-in scale would render
 * at ~62% of intended size.
 */
const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-[0.6rem] whitespace-nowrap",
    "rounded-lg font-semibold tracking-[0.025em] transition-all duration-150",
    "outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow shadow-black/10 hover:bg-primary/90 active:scale-[0.97]",
        destructive:
          "bg-destructive text-destructive-foreground shadow shadow-black/10 hover:bg-destructive/90 active:scale-[0.97]",
        outline:
          "border border-input bg-background shadow shadow-black/5 hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow shadow-black/5 hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",

        // ── Header: full brand red on near-black — creates luxury contrast ──
        nav: [
          "bg-[#c8102e] text-white",
          "shadow-[0_2px_12px_rgba(200,16,46,0.35)]",
          "hover:bg-[#a50d27] hover:shadow-[0_4px_20px_rgba(200,16,46,0.5)]",
          "active:scale-[0.97] active:shadow-none",
        ].join(" "),

        // ── Sub-nav: ghost on near-black, white border ───────────────────
        subnav: [
          "bg-transparent text-white/85",
          "border border-white/[0.18]",
          "hover:bg-white/[0.10] hover:text-white hover:border-white/[0.32]",
          "active:scale-[0.97]",
        ].join(" "),
      },

      size: {
        sm:      "h-[3.6rem] rounded-lg px-[1.4rem] text-[1.3rem]",
        default: "h-[4.2rem] px-[2rem]   text-[1.45rem]",
        lg:      "h-[5rem]   rounded-lg px-[2.8rem] text-[1.6rem] tracking-[0.03em]",
        icon:    "h-[4.2rem] w-[4.2rem]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
