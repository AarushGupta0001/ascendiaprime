"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

type EcosystemCard = {
  id: string;
  position: "top" | "upper-left" | "upper-right" | "left" | "right" | "lower-left" | "lower-right";
  title: string;
  description: string;
  icon: ReactNode;
};

const ECOSYSTEM_CARDS: EcosystemCard[] = [
  {
    id: "content-strategy",
    position: "upper-left",
    title: "Content Strategy",
    description: "Creating intent-driven content that algorithms reward.",
    icon: (
      <svg className="seo-eco-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    id: "performance-tracking",
    position: "upper-right",
    title: "Performance Tracking",
    description: "Continuous A/B testing and technical monitoring.",
    icon: (
      <svg className="seo-eco-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    id: "keyword-strategy",
    position: "left",
    title: "Keyword Strategy",
    description: "Targeting high-intent search terms that generate revenue.",
    icon: (
      <svg className="seo-eco-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    id: "authority-building",
    position: "right",
    title: "Authority Building",
    description: "Securing high-authority backlinks to boost domain trust.",
    icon: (
      <svg className="seo-eco-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    id: "local-seo",
    position: "lower-right",
    title: "Local SEO",
    description: "Dominating local map packs and driving regional footfall.",
    icon: (
      <svg className="seo-eco-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: "mobile-indexing",
    position: "lower-left",
    title: "Mobile Indexing",
    description: "Optimizing core web vitals for flawless mobile performance.",
    icon: (
      <svg className="seo-eco-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
];

type BranchPath = {
  id: string;
  d: string;
  length: number;
};

function getAnchorPoint(
  rect: DOMRect,
  containerRect: DOMRect,
  position: EcosystemCard["position"],
  isCenter: boolean,
) {
  const relLeft = rect.left - containerRect.left;
  const relTop = rect.top - containerRect.top;
  const cx = relLeft + rect.width / 2;
  const cy = relTop + rect.height / 2;

  if (isCenter) {
    return { x: cx, y: cy };
  }

  switch (position) {
    case "top":
      return { x: cx, y: relTop + rect.height };
    case "upper-left":
    case "left":
    case "lower-left":
      return { x: relLeft + rect.width, y: cy };
    case "upper-right":
    case "right":
    case "lower-right":
      return { x: relLeft, y: cy };
    default:
      return { x: cx, y: cy };
  }
}

function buildBranchPath(
  start: { x: number; y: number },
  end: { x: number; y: number },
  position: EcosystemCard["position"],
) {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const bend = Math.min(Math.abs(dx), Math.abs(dy)) * 0.35 + 24;

  let cp1x = start.x;
  let cp1y = start.y;
  let cp2x = end.x;
  let cp2y = end.y;

  switch (position) {
    case "top":
      cp1x = start.x;
      cp1y = start.y - bend;
      cp2x = end.x;
      cp2y = end.y + bend * 0.4;
      break;
    case "upper-left":
    case "left":
    case "lower-left":
      cp1x = start.x - bend * 0.5;
      cp1y = start.y;
      cp2x = end.x + bend * 0.35;
      cp2y = end.y;
      break;
    case "upper-right":
    case "right":
    case "lower-right":
      cp1x = start.x + bend * 0.5;
      cp1y = start.y;
      cp2x = end.x - bend * 0.35;
      cp2y = end.y;
      break;
  }

  const d = `M ${start.x} ${start.y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${end.x} ${end.y}`;
  return { d };
}

export default function SeoEcosystemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const desktopRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [branchPaths, setBranchPaths] = useState<BranchPath[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const updateBranchPaths = useCallback(() => {
    const container = desktopRef.current;
    const center = centerRef.current;
    if (!container || !center || window.innerWidth < 1024) {
      setBranchPaths([]);
      return;
    }

    const containerRect = container.getBoundingClientRect();
    const centerRect = center.getBoundingClientRect();
    const start = getAnchorPoint(centerRect, containerRect, "top", true);

    const paths = ECOSYSTEM_CARDS.map((card) => {
      const el = cardRefs.current[card.id];
      if (!el) return null;

      const cardRect = el.getBoundingClientRect();
      const end = getAnchorPoint(cardRect, containerRect, card.position, false);
      const branch = buildBranchPath(start, end, card.position);
      const probe = document.createElementNS("http://www.w3.org/2000/svg", "path");
      probe.setAttribute("d", branch.d);

      return {
        id: card.id,
        d: branch.d,
        length: probe.getTotalLength(),
      };
    }).filter((path): path is BranchPath => path !== null);

    setBranchPaths(paths);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const syncLayout = () => {
      setIsDesktop(mq.matches);
      if (mq.matches) {
        requestAnimationFrame(updateBranchPaths);
      } else {
        setBranchPaths([]);
      }
    };

    syncLayout();
    mq.addEventListener("change", syncLayout);
    window.addEventListener("resize", updateBranchPaths);

    return () => {
      mq.removeEventListener("change", syncLayout);
      window.removeEventListener("resize", updateBranchPaths);
    };
  }, [updateBranchPaths]);

  useEffect(() => {
    if (!isDesktop) return;

    const container = desktopRef.current;
    if (!container) return;

    const observer = new ResizeObserver(() => updateBranchPaths());
    observer.observe(container);
    return () => observer.disconnect();
  }, [isDesktop, updateBranchPaths]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        requestAnimationFrame(updateBranchPaths);
        observer.disconnect();
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [updateBranchPaths]);

  return (
    <section
      ref={sectionRef}
      className={`seo-ecosystem-section w-full relative z-10 py-16 lg:py-24 px-6 ${isVisible ? "is-visible" : ""}`}
      style={{ background: "linear-gradient(to bottom, rgba(20, 18, 54, 0.9) 0%, rgba(30, 20, 60, 0.9) 100%)" }}
      aria-label="SEO ecosystem services"
    >
      <svg className="seo-eco-defs" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="seoBranchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3F8BF9" />
            <stop offset="50%" stopColor="#7469F8" />
            <stop offset="100%" stopColor="#AB57F3" />
          </linearGradient>
          <filter id="seoBranchGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Desktop branching layout */}
      <div ref={desktopRef} className="seo-ecosystem-desktop max-w-[1280px] mx-auto relative">
        {isDesktop && branchPaths.length > 0 && (
          <svg className="seo-eco-branches" aria-hidden="true" focusable="false">
            {branchPaths.map((path, index) => (
              <g key={path.id}>
                <path
                  className="seo-eco-branch-glow"
                  d={path.d}
                  style={{
                    ["--branch-length" as string]: `${path.length}`,
                    ["--branch-delay" as string]: `${0.15 + index * 0.12}s`,
                  }}
                />
                <path
                  className="seo-eco-branch"
                  d={path.d}
                  style={{
                    ["--branch-length" as string]: `${path.length}`,
                    ["--branch-delay" as string]: `${0.15 + index * 0.12}s`,
                  }}
                />
              </g>
            ))}
          </svg>
        )}

        <div
          ref={centerRef}
          className="seo-ecosystem-center seo-reveal water-card glass-card theme-emerald hover-target"
          data-water-theme="dark"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 drop-shadow-[0_0_15px_rgba(0,0,0,0.8)] leading-tight relative z-20">
            Grow Your Business with <br />
            <span className="text-gradient-growth">Proven SEO</span>
          </h2>
          <div className="relative z-20">
            <p className="text-base md:text-lg text-white font-medium leading-relaxed mb-4">
              Enhancing search visibility, boosting qualified visitors, and optimizing return on investment are the goals of our company&apos;s SEO services.
            </p>
            <p className="text-sm md:text-base text-[#dbeafe] leading-relaxed">
              Ascendia Prime is a reputable SEO service provider that uses values, scalable, and performance-focused SEO tactics to help companies conquer competitive marketplaces.
            </p>
          </div>
        </div>

        {ECOSYSTEM_CARDS.map((card, index) => (
          <div
            key={card.id}
            ref={(el) => {
              cardRefs.current[card.id] = el;
            }}
            className={`seo-ecosystem-card seo-eco-card-reveal glass-card theme-teal water-card hover-target`}
            data-position={card.position}
            data-water-theme="dark"
            style={{ ["--reveal-delay" as string]: `${0.35 + index * 0.12}s` }}
          >
            <div className="seo-eco-card-inner relative z-20">
              <div className="seo-eco-icon-wrap">{card.icon}</div>
              <h3 className="seo-eco-card-title">{card.title}</h3>
              <p className="seo-eco-card-desc">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile / tablet vertical timeline */}
      <div className="seo-ecosystem-mobile max-w-xl mx-auto">
        <div className="seo-eco-mobile-hub seo-reveal water-card glass-card theme-emerald hover-target" data-water-theme="dark">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-5 leading-tight relative z-20">
            Grow Your Business with <br />
            <span className="text-gradient-growth">Proven SEO</span>
          </h2>
          <div className="relative z-20">
            <p className="text-base text-white font-medium leading-relaxed mb-4">
              Enhancing search visibility, boosting qualified visitors, and optimizing return on investment are the goals of our company&apos;s SEO services.
            </p>
            <p className="text-sm text-[#dbeafe] leading-relaxed">
              Ascendia Prime is a reputable SEO service provider that uses values, scalable, and performance-focused SEO tactics to help companies conquer competitive marketplaces.
            </p>
          </div>
        </div>

        <div className="seo-eco-mobile-tree">
          {ECOSYSTEM_CARDS.map((card, index) => (
            <div
              key={card.id}
              className="seo-eco-mobile-item seo-eco-card-reveal"
              style={{ ["--reveal-delay" as string]: `${0.25 + index * 0.1}s` }}
            >
              <div className="seo-eco-mobile-connector" aria-hidden="true">
                <svg viewBox="0 0 4 48" preserveAspectRatio="none" className="seo-eco-mobile-line">
                  <line x1="2" y1="0" x2="2" y2="48" />
                </svg>
              </div>
              <div className="seo-ecosystem-card glass-card theme-teal water-card hover-target" data-water-theme="dark">
                <div className="seo-eco-card-inner relative z-20">
                  <div className="seo-eco-icon-wrap">{card.icon}</div>
                  <h3 className="seo-eco-card-title">{card.title}</h3>
                  <p className="seo-eco-card-desc">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
