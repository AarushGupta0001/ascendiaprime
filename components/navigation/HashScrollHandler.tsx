"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { scrollToHash } from "@/lib/contact-routing";

export default function HashScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const timer = window.setTimeout(() => {
      scrollToHash(hash, "auto");
    }, 150);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}
