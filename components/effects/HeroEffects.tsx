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
    const ambientGlow = document.getElementById("ambient-glow");

    let heroTicking = false;

    const onScroll = () => {
      if (heroTicking) return;
      heroTicking = true;

      window.requestAnimationFrame(() => {
        const scrolled = window.scrollY;

        if (heroContent) {
          const contentOpacity = Math.max(0, 1 - scrolled / 400);
          const contentBlur = Math.min(10, scrolled * 0.02);
          heroContent.style.opacity = String(contentOpacity);
          heroContent.style.filter = `blur(${contentBlur}px)`;
          heroContent.style.transform = `translate3d(0, ${scrolled * 0.15}px, 0)`;
        }

        if (heroVisuals) {
          const visualOpacity = Math.max(0, 1 - scrolled / 500);
          const visualBlur = Math.min(20, scrolled * 0.03);
          const visualScale = 1 + scrolled * 0.0005;
          heroVisuals.style.opacity = String(visualOpacity);
          heroVisuals.style.filter = `blur(${visualBlur}px)`;
          heroVisuals.style.transform = `translate3d(0, ${scrolled * 0.1}px, 0) scale(${visualScale})`;
        }

        if (ambientGlow) {
          ambientGlow.style.transform = `translate3d(-50%, calc(-50% + ${scrolled * 0.4}px), 0)`;
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
