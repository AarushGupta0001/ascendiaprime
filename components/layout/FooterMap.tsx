"use client";

import { usePathname } from "next/navigation";

export default function FooterMap() {
  const pathname = usePathname();

  if (pathname !== "/") {
    return null;
  }

  return (
    <section className="footer-map-section" aria-label="Office location map">
      <div className="footer-map-embed">
        <iframe
          loading="lazy"
          src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=10&output=embed&iwloc=near"
          title="London Eye, London, United Kingdom"
          aria-label="London Eye, London, United Kingdom"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
