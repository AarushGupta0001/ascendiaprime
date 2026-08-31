"use client";

import { usePathname } from "next/navigation";

export default function FooterMap() {
  const pathname = usePathname();

  if (pathname !== "/") {
    return null;
  }

  return (
    <section className="footer-map-section relative" aria-label="Office location map">
      <div className="footer-map-embed relative">
        <iframe
          loading="lazy"
          src="https://maps.google.com/maps?q=51.480348,0.180362&t=m&z=17&output=embed&iwloc=near"
          title="Ascendia Prime Media Ltd, Unit 13e, First Floor Office, 27 Town Square, Erith, Kent, United Kingdom, DA8 1SE"
          aria-label="Ascendia Prime Media Ltd, Unit 13e, First Floor Office, 27 Town Square, Erith, Kent, United Kingdom, DA8 1SE"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[320px] md:h-[360px] block border-0"
        />


        {/* Floating Office Card */}
        <div className="absolute top-4 left-4 z-20 bg-[#0b132b]/95 backdrop-blur-md border border-white/10 text-white rounded-xl p-3.5 sm:p-4 shadow-[0_8px_30px_rgba(0,0,0,0.6)] max-w-[340px] hidden sm:block">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-red-500/15 border border-red-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <div>
              <div className="text-xs font-bold text-white tracking-wide">Ascendia Prime Media Ltd</div>
              <div className="text-[11px] text-slate-300 leading-snug mt-1">
                Unit 13e, First Floor Office, 27 Town Square, Erith, Kent, United Kingdom, DA8 1SE
              </div>
              <a
                href="https://maps.google.com/?q=27+Town+Square,+Erith+DA8+1SE,+UK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#3F8BF9] hover:underline mt-2.5"
              >
                Open in Google Maps
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
