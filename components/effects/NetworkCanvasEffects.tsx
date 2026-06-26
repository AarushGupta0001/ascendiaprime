"use client";

import { useEffect } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
};

/**
 * Background particle network for .network-canvas elements — ported from live site
 */
export default function NetworkCanvasEffects() {
  useEffect(() => {
    const canvases = document.querySelectorAll<HTMLCanvasElement>(".network-canvas");
    const cleanups: Array<() => void> = [];

    canvases.forEach((canvas) => {
      const context = canvas.getContext("2d");
      if (!context) return;
      const ctx = context;

      let width = 0;
      let height = 0;
      let particles: Particle[] = [];
      let isVisible = true;
      let animationFrameId = 0;

      const canvasObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            isVisible = entry.isIntersecting;
            if (isVisible) {
              animate();
            } else {
              cancelAnimationFrame(animationFrameId);
            }
          });
        },
        { threshold: 0 },
      );

      const parent = canvas.parentElement;
      if (parent) canvasObserver.observe(parent);

      function init() {
        width = canvas.offsetWidth;
        height = canvas.offsetHeight;
        canvas.width = width;
        canvas.height = height;
        particles = [];
        const numParticles = Math.floor((width * height) / 15000);
        for (let i = 0; i < numParticles; i++) {
          particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            radius: Math.random() * 1.5 + 0.5,
          });
        }
      }

      function animate() {
        if (!isVisible) return;

        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(148, 163, 184, 0.4)";
          ctx.fill();

          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx2 = p.x - p2.x;
            const dy2 = p.y - p2.y;
            const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
            if (dist2 < 100) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - dist2 / 100)})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }

        animationFrameId = requestAnimationFrame(animate);
      }

      const onResize = () => init();
      window.addEventListener("resize", onResize);
      init();

      cleanups.push(() => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener("resize", onResize);
        canvasObserver.disconnect();
      });
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return null;
}
