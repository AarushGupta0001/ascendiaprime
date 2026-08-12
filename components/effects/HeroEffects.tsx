"use client";

import { useEffect } from "react";

function easeOutQuart(t: number) {
  return 1 - Math.pow(1 - t, 4);
}

function formatNumber(num: number, isFloat: boolean, decimals = 1) {
  if (isFloat) return num.toFixed(decimals);
  return Math.floor(num).toLocaleString("en-US");
}

function animateMetric(
  id: string,
  startVal: number,
  targetVal: number,
  durationMs: number,
  type: "float1" | "float2" | "int",
) {
  const element = document.getElementById(id);
  if (!element) return;

  let startTimestamp: number | null = null;
  const isFloat = type === "float1" || type === "float2";
  const decimals = type === "float2" ? 2 : 1;

  const step = (timestamp: number) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / durationMs, 1);
    const eased = easeOutQuart(progress);
    const currentVal = startVal + eased * (targetVal - startVal);
    element.innerText = formatNumber(currentVal, isFloat, decimals);

    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      window.setInterval(() => {
        const varianceBase = isFloat
          ? type === "float2"
            ? 0.05
            : 0.2
          : targetVal > 1000
            ? 15
            : 3;
        const variance = (Math.random() - 0.5) * varianceBase;
        let newVal = targetVal + variance;
        const bounds = isFloat
          ? type === "float2"
            ? 0.15
            : 0.8
          : targetVal > 1000
            ? 50
            : 10;
        newVal = Math.max(targetVal - bounds, Math.min(targetVal + bounds, newVal));
        element.innerText = formatNumber(newVal, isFloat, decimals);
      }, 2000 + Math.random() * 1500);
    }
  };

  window.requestAnimationFrame(step);
}

/**
 * Hero metric counters and scroll parallax — ported from live ascendiaprime.com
 */
export default function HeroEffects() {
  useEffect(() => {
    const heroContent = document.getElementById("hero-content-left");
    const heroVisuals = document.getElementById("hero-visuals-right");

    let heroTicking = false;

    const onScroll = () => {
      if (heroTicking) return;
      heroTicking = true;

      window.requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        const heroEl = document.getElementById("home-hero");
        const heroHeight = heroEl ? heroEl.offsetHeight : window.innerHeight;

        // Content remains 100% intact while in screen.
        // Fading/blurring only begins in final exit phase (after scrolling 50% of hero height) as it leaves screen.
        const fadeStart = heroHeight * 0.5;
        const fadeDistance = heroHeight * 0.5;

        let progress = 0;
        if (scrolled > fadeStart) {
          progress = Math.min(1, (scrolled - fadeStart) / fadeDistance);
        }

        if (heroContent) {
          const contentOpacity = 1 - progress;
          const contentBlur = progress * 8;
          heroContent.style.opacity = String(contentOpacity);
          heroContent.style.filter = progress > 0 ? `blur(${contentBlur}px)` : "none";
          heroContent.style.transform = `translate3d(0, ${scrolled * 0.1}px, 0)`;
        }

        if (heroVisuals) {
          const visualOpacity = 1 - progress;
          const visualBlur = progress * 10;
          const visualScale = 1 + scrolled * 0.0003;
          heroVisuals.style.opacity = String(visualOpacity);
          heroVisuals.style.filter = progress > 0 ? `blur(${visualBlur}px)` : "none";
          heroVisuals.style.transform = `translate3d(0, ${scrolled * 0.08}px, 0) scale(${visualScale})`;
        }

        heroTicking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    const metricTimer = window.setTimeout(() => {
      animateMetric("val-roas", 1.0, 4.23, 2500, "float2");
      animateMetric("val-conv", 0.0, 32.5, 2200, "float1");
      animateMetric("val-traffic", 100, 1242, 3000, "int");
      animateMetric("val-signals", 0, 125, 2000, "int");
    }, 500);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(metricTimer);
    };
  }, []);

  return null;
}
