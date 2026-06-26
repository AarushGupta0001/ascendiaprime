"use client";

import type { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

type RevealProps = {
  children: ReactNode;
  className?: string;
  variant?: "fade-in-up" | "fade-in-left" | "fade-in-right" | "scale-in" | "fade-up-element" | "reveal-up" | "smm-reveal" | "seo-reveal" | "inf-reveal" | "hero-animate" | "rv";
  style?: React.CSSProperties;
  activeClass?: string;
};

const variantActiveClass: Record<NonNullable<RevealProps["variant"]>, string> = {
  "fade-in-up": "is-visible",
  "fade-in-left": "is-visible",
  "fade-in-right": "is-visible",
  "scale-in": "is-visible",
  "fade-up-element": "in-view",
  "reveal-up": "active",
  "smm-reveal": "active",
  "seo-reveal": "active",
  "inf-reveal": "active",
  "hero-animate": "active",
  rv: "in-view",
};

export default function Reveal({
  children,
  className = "",
  variant = "fade-in-up",
  style,
  activeClass,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });
  const active = activeClass ?? variantActiveClass[variant];

  return (
    <div
      ref={ref}
      className={`${variant} ${inView ? active : ""} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
}
