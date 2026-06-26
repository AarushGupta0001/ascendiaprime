"use client";

import Script from "next/script";

export default function SplineScript() {
  return (
    <Script
      src="https://unpkg.com/@splinetool/viewer@latest/build/spline-viewer.js"
      type="module"
      strategy="lazyOnload"
    />
  );
}
