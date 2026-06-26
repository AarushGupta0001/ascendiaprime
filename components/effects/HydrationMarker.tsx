"use client";

import { useEffect } from "react";

/**
 * Marks the document as hydrated so scroll-reveal CSS can activate.
 */
export default function HydrationMarker() {
  useEffect(() => {
    document.documentElement.classList.add("js-hydrated");
  }, []);

  return null;
}
