"use client";

import Link from "next/link";
import { useState } from "react";

type NewsItem = {
  id: string;
  category: "Event" | "Press Release" | "Partnership" | "Insights";
  title: string;
  date: string;
  location?: string;
  summary: string;
  tag: string;
};

const NEWS_ITEMS: NewsItem[] = [
  {
    id: "affiliate-summit-2026",
    category: "Event",
    title: "Ascendia Prime to Keynote at Global Affiliate & Performance Summit",
    date: "November 14, 2026",
    location: "London, UK",
    summary:
      "Join our leadership team as we discuss next-generation programmatic attribution and high-intent acquisition architectures for modern brands.",
    tag: "Upcoming Event",
  },
  {
    id: "ecosystem-expansion",
    category: "Press Release",
    title: "Ascendia Prime Expands Global Partner Ecosystem Across North America & EMEA",
    date: "October 02, 2026",
    summary:
      "Announcing direct performance integrations with leading DSP and affiliate networks to provide unmatched full-funnel clarity and publisher reach.",
    tag: "Corporate Update",
  },
  {
    id: "omnichannel-growth-guide",
    category: "Insights",
    title: "Navigating High-Intent Acquisition: The 2026 Media Buying Playbook",
    date: "September 18, 2026",
    summary:
      "A deep dive into why deterministic intent signals and cross-channel retargeting outperform traditional siloed marketing models.",
    tag: "Growth Report",
  },
  {
    id: "adtech-roundtable",
    category: "Event",
    title: "Executive Roundtable: Transparent Attribution in Modern Ad Tech",
    date: "December 05, 2026",
    location: "Virtual & In-Person",
    summary:
      "An exclusive gathering of digital growth executives discussing privacy-first tracking, zero-markup media buying, and sustainable scale.",
    tag: "Executive Forum",
  },
  {
    id: "brand-protection-framework",
    category: "Partnership",
    title: "Strategic ORM & Brand Safety Framework Unveiled for Enterprise Advertisers",
    date: "August 24, 2026",
    summary:
      "New enterprise-grade brand safety protocols designed to safeguard reputation across programmatic, native, and social channels simultaneously.",
    tag: "Product Update",
  },
  {
    id: "q4-performance-trends",
    category: "Insights",
    title: "Q4 Performance Marketing Benchmark: Maximising ROAS in Competitive Verticals",
    date: "August 10, 2026",
    summary:
      "Key metrics, vertical benchmarks, and strategic levers for scaling paid search, social, and CTV spend effectively during peak season.",
    tag: "Market Intel",
  },
];

export default function NewsAndEventsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Event", "Press Release", "Partnership", "Insights"];

  const filteredNews =
    activeFilter === "All"
      ? NEWS_ITEMS
      : NEWS_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050b21] px-6 pb-24 pt-36 text-white md:px-12">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-[#3F8BF9]/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-96 w-96 translate-x-1/2 rounded-full bg-[#AB57F3]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* Header */}
        <header className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#3F8BF9]">
            Stay Connected
          </p>
          <h1 className="text-[2.25rem] sm:text-5xl lg:text-[3.1rem] xl:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-white">
            News &amp; <span className="bg-gradient-to-r from-[#3F8BF9] to-[#AB57F3] bg-clip-text text-transparent">Events</span>
          </h1>
          <p className="mt-4 text-[1.05rem] md:text-[1.1rem] leading-relaxed text-slate-300 font-light">
            Stay up to date with the latest industry insights, corporate announcements, and upcoming summits from the Ascendia Prime team.
          </p>
        </header>

        {/* Filter Pills */}
        <div className="mb-10 flex flex-wrap gap-2.5 sm:gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-gradient-to-r from-[#3F8BF9] to-[#AB57F3] text-white shadow-[0_0_15px_rgba(63,139,249,0.4)]"
                  : "border border-white/10 bg-[#0b132b]/60 text-slate-300 hover:border-white/20 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredNews.map((item) => (
            <article
              key={item.id}
              className="case-study-card group flex flex-col justify-between p-6 sm:p-8"
            >
              <div>
                <div className="mb-4 flex items-center justify-between gap-2">
                  <span className="inline-block rounded-full bg-[#3F8BF9]/10 px-3 py-1 text-xs font-semibold text-[#3F8BF9]">
                    {item.category}
                  </span>
                  <span className="text-xs text-slate-400">{item.date}</span>
                </div>

                <h2 className="mb-3 text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-[#3F8BF9]">
                  {item.title}
                </h2>

                {item.location && (
                  <p className="mb-3 flex items-center gap-1.5 text-xs font-medium text-[#AB57F3]">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {item.location}
                  </p>
                )}

                <p className="text-sm font-light leading-relaxed text-slate-400">
                  {item.summary}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-4">
                <span className="text-xs font-medium text-slate-500">{item.tag}</span>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#3F8BF9] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white"
                >
                  Learn More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="case-study-card mt-16 p-8 text-center md:p-12">
          <h3 className="text-2xl font-bold text-white md:text-3xl">
            Want to meet us at an upcoming event?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-slate-300">
            Our team is always keen to discuss new partnership opportunities and performance marketing strategies.
          </p>
          <div className="mt-6">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#3F8BF9] via-[#7469F8] to-[#AB57F3] px-8 py-3.5 font-medium text-white shadow-[0_0_20px_rgba(63,139,249,0.4)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(63,139,249,0.6)] hover:-translate-y-0.5"
            >
              Get in Touch
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
