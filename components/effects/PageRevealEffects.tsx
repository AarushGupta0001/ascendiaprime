"use client";

import { useEffect, useRef, type ReactNode } from "react";

type PageRevealEffectsProps = {
  children: ReactNode;
};

const REVEAL_CONFIGS = [
  { classes: ["fade-in-up", "fade-in-left", "fade-in-right", "scale-in", "feature-row"], activeClass: "is-visible", rootMargin: "0px 0px -50px 0px" },
  { classes: ["fade-up-element"], activeClass: "in-view", rootMargin: "0px 0px -40px 0px" },
  { classes: ["reveal-up", "smm-reveal", "seo-reveal", "inf-reveal", "hero-animate"], activeClass: "active", rootMargin: "0px 0px -50px 0px" },
  { classes: ["rv"], activeClass: "in-view", rootMargin: "0px 0px -40px 0px" },
] as const;

function collectElements(container: HTMLElement, classNames: readonly string[]): Element[] {
  const elements: Element[] = [];
  const seen = new Set<Element>();

  for (const className of classNames) {
    const matches = container.getElementsByClassName(className);
    for (let i = 0; i < matches.length; i++) {
      const element = matches[i];
      if (!seen.has(element)) {
        seen.add(element);
        elements.push(element);
      }
    }
  }

  return elements;
}

/**
 * Activates scroll-reveal animations scoped to page content.
 */
export default function PageRevealEffects({ children }: PageRevealEffectsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.classList.add("js-hydrated");

    const container = containerRef.current;
    if (!container) return;

    const observers: IntersectionObserver[] = [];

    REVEAL_CONFIGS.forEach(({ classes, activeClass, rootMargin }) => {
      const elements = collectElements(container, classes);
      if (elements.length === 0) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(activeClass);
            }
          });
        },
        { threshold: 0.1, rootMargin },
      );

      elements.forEach((el) => observer.observe(el));
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
