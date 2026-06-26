"use client";

import { useEffect } from "react";

export default function MarqueeLogoEffects() {
  useEffect(() => {
    document.querySelectorAll("#trusted-advertiser-marquee img").forEach((img) => {
      img.addEventListener("error", () => img.closest(".trusted-logo-tile")?.remove());
    });
    document.querySelectorAll(".network-logo-img").forEach((img) => {
      img.addEventListener("error", () => img.closest(".shrink-0")?.remove());
    });
  }, []);

  return null;
}
