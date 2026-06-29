"use client";

import { useEffect, useRef, type ReactNode } from "react";

type PageRevealEffectsProps = {
  children: ReactNode;
};

const REVEAL_SELECTORS = [
  { selector: ".fade-in-up, .fade-in-left, .fade-in-right, .scale-in, .feature-row", activeClass: "is-visible", rootMargin: "0px 0px -50px 0px" },
  { selector: ".fade-up-element", activeClass: "in-view", rootMargin: "0px 0px -40px 0px" },
  { selector: ".reveal-up, .smm-reveal, .seo-reveal, .inf-reveal, .hero-animate", activeClass: "active", rootMargin: "0px 0px -50px 0px" },
  { selector: ".rv", activeClass: "in-view", rootMargin: "0px 0px -40px 0px" },
] as const;

/**
 * Activates scroll-reveal animations scoped to page content.
 */
export default function PageRevealEffects({ children }: PageRevealEffectsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const activeClassByElement = new WeakMap<Element, string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const activeClass = activeClassByElement.get(entry.target);
          if (activeClass) {
            entry.target.classList.add(activeClass);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    for (const { selector, activeClass } of REVEAL_SELECTORS) {
      container.querySelectorAll(selector).forEach((el) => {
        activeClassByElement.set(el, activeClass);
        observer.observe(el);
      });
    }

    return () => observer.disconnect();
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
