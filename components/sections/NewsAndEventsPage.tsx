"use client";

import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";
import { UPCOMING_EVENTS, UpcomingEvent } from "@/data/upcomingEvents";
import { EVENT_ARTICLES } from "@/data/eventArticles";
import EventConversationModal from "@/components/news-and-events/EventConversationModal";
import ArticleDetailsModal from "@/components/news-and-events/ArticleDetailsModal";

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
  // Carousel State & Logic
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const dragDistanceRef = useRef(0);

  // Event Modal Popup State
  const [selectedEvent, setSelectedEvent] = useState<UpcomingEvent | null>(null);

  // Article Popup Modal State
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  // Start Conversation Modal State
  const [isConversationModalOpen, setIsConversationModalOpen] = useState(false);
  const [conversationPreselectedEvent, setConversationPreselectedEvent] = useState<string>("Select an event");

  // Lock body scroll when event modal is open
  useEffect(() => {
    if (selectedEvent) {
      document.body.classList.add("modal-open");
      document.documentElement.classList.add("modal-open");
    } else if (!selectedArticleId && !isConversationModalOpen) {
      document.body.classList.remove("modal-open");
      document.documentElement.classList.remove("modal-open");
    }

    return () => {
      if (!selectedArticleId && !isConversationModalOpen) {
        document.body.classList.remove("modal-open");
        document.documentElement.classList.remove("modal-open");
      }
    };
  }, [selectedEvent, selectedArticleId, isConversationModalOpen]);

  // Handle escape key to close event modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedEvent) {
        setSelectedEvent(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedEvent]);

  const updateScrollState = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const firstCard = el.querySelector<HTMLElement>(".event-carousel-card");
    if (firstCard) {
      const cardWidth = firstCard.offsetWidth + 20; // width + gap
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(index, 0), UPCOMING_EVENTS.length - 1));
    }
  }, []);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollToCard = (index: number) => {
    const el = carouselRef.current;
    if (!el) return;

    const firstCard = el.querySelector<HTMLElement>(".event-carousel-card");
    if (firstCard) {
      const cardWidth = firstCard.offsetWidth + 20; // width + gap
      el.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollPrev = () => {
    const el = carouselRef.current;
    if (!el) return;
    const firstCard = el.querySelector<HTMLElement>(".event-carousel-card");
    const cardWidth = firstCard ? firstCard.offsetWidth + 20 : 380;
    el.scrollBy({ left: -cardWidth, behavior: "smooth" });
  };

  const scrollNext = () => {
    const el = carouselRef.current;
    if (!el) return;
    const firstCard = el.querySelector<HTMLElement>(".event-carousel-card");
    const cardWidth = firstCard ? firstCard.offsetWidth + 20 : 380;
    el.scrollBy({ left: cardWidth, behavior: "smooth" });
  };

  // Mouse Drag to Scroll
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = carouselRef.current;
    if (!el) return;
    setIsDragging(true);
    startXRef.current = e.pageX - el.offsetLeft;
    scrollLeftRef.current = el.scrollLeft;
    dragDistanceRef.current = 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const el = carouselRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startXRef.current) * 1.3;
    dragDistanceRef.current = Math.abs(x - startXRef.current);
    el.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleCardClick = (event: UpcomingEvent) => {
    if (dragDistanceRef.current < 6) {
      setSelectedEvent(event);
    }
  };

  const handleKeyDownCarousel = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollNext();
    }
  };

  const featuredArticle = EVENT_ARTICLES[0];
  const rightArticle1 = EVENT_ARTICLES[1];
  const rightArticle2 = EVENT_ARTICLES[2];
  const activeArticle = EVENT_ARTICLES.find((a) => a.id === selectedArticleId) || null;

  return (
    <div className="relative min-h-screen bg-[#020617] text-white selection:bg-[#3F8BF9] selection:text-white overflow-x-clip">
      
      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 md:px-12 pt-28 sm:pt-32 md:pt-36 pb-24">
        
        {/* ========================================================================= */}
        {/* 1. HERO SECTION                                                           */}
        {/* ========================================================================= */}
        <header className="mb-12 sm:mb-14 md:mb-16 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight tracking-tight text-white mb-4">
            NEWS &amp;{" "}
            <span className="bg-gradient-to-r from-[#3F8BF9] via-[#7469F8] to-[#AB57F3] bg-clip-text text-transparent">
              EVENTS
            </span>
          </h1>
          
          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-light">
            Stay up to date with the latest industry insights, corporate announcements, and upcoming events from the Ascendia Prime team.
          </p>
        </header>

        {/* ========================================================================= */}
        {/* 2. UPCOMING EVENTS HORIZONTAL CAROUSEL (INDUSTRY CALENDAR)                */}
        {/* ========================================================================= */}
        <section 
          className="mb-16 sm:mb-20 md:mb-24 relative"
          aria-label="Upcoming Events Showcase"
        >
          {/* Section Header with Top-Right Controls */}
          <div className="flex items-end justify-between gap-4 mb-6 border-b border-white/10 pb-5">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3F8BF9] mb-1.5">
                INDUSTRY CALENDAR
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                UPCOMING{" "}
                <span className="bg-gradient-to-r from-[#3F8BF9] to-[#AB57F3] bg-clip-text text-transparent">
                  EVENTS
                </span>
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm font-light mt-1 max-w-xl">
                Meet us where the performance marketing community comes together.
              </p>
            </div>

            {/* Top-Right Navigation Arrows */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                type="button"
                onClick={scrollPrev}
                disabled={!canScrollLeft}
                aria-label="Previous event"
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border transition-all duration-300 cursor-pointer ${
                  canScrollLeft
                    ? "border-white/20 bg-[#0b1330] text-white hover:border-[#3F8BF9] hover:bg-[#3F8BF9]/20 hover:scale-105 active:scale-95"
                    : "border-white/5 bg-[#0b1330]/40 text-slate-600 cursor-not-allowed opacity-40"
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={scrollNext}
                disabled={!canScrollRight}
                aria-label="Next event"
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border transition-all duration-300 cursor-pointer ${
                  canScrollRight
                    ? "border-white/20 bg-[#0b1330] text-white hover:border-[#3F8BF9] hover:bg-[#3F8BF9]/20 hover:scale-105 active:scale-95"
                    : "border-white/5 bg-[#0b1330]/40 text-slate-600 cursor-not-allowed opacity-40"
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Horizontally Scrollable Compact Cards */}
          <div
            ref={carouselRef}
            tabIndex={0}
            onKeyDown={handleKeyDownCarousel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            role="region"
            aria-roledescription="carousel"
            aria-label="Upcoming Events Carousel"
            className={`flex gap-5 sm:gap-6 overflow-x-auto pb-3 pt-1 snap-x snap-mandatory scroll-smooth focus:outline-none focus-visible:ring-1 focus-visible:ring-[#3F8BF9]/50 rounded-2xl ${
              isDragging ? "cursor-grabbing select-none" : "cursor-grab"
            }`}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {UPCOMING_EVENTS.map((event) => (
              <article
                key={event.id}
                onClick={() => handleCardClick(event)}
                className="event-carousel-card group relative flex flex-col justify-between rounded-2xl bg-[#0b1330]/85 border border-[#3F8BF9]/20 hover:border-[#7469F8]/60 transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_32px_rgba(116,105,248,0.2)] hover:-translate-y-1 snap-start flex-shrink-0 overflow-hidden w-[82vw] max-w-[340px] sm:w-[350px] md:w-[380px] lg:w-[410px] cursor-pointer"
              >
                {/* 1. Top Image Banner (16:9 contained at top) */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900 flex-shrink-0">
                  <img
                    src={event.image}
                    alt={event.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1330]/90 via-transparent to-transparent opacity-60" />
                </div>

                {/* 2. Card Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Top Row: Date & Category */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#3F8BF9]">
                        {event.dateLabel}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#7469F8]/20 text-[#AB57F3] border border-[#7469F8]/30 uppercase tracking-wide">
                        {event.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#3F8BF9] transition-colors leading-snug line-clamp-2 mb-1.5">
                      {event.title}
                    </h3>

                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mb-3">
                      <svg className="w-3.5 h-3.5 text-[#AB57F3] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="truncate">{event.location}</span>
                    </div>

                    {/* Short Description */}
                    <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed line-clamp-3 mb-4">
                      {event.description}
                    </p>
                  </div>

                  {/* 3. Bottom CTA Link */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-slate-500">
                      {event.sourceName}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedEvent(event);
                      }}
                      className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#3F8BF9] group-hover:text-white transition-colors cursor-pointer bg-transparent border-0 p-0"
                    >
                      <span>View Details</span>
                      <svg className="w-3.5 h-3.5 text-[#3F8BF9] group-hover:text-white transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Subtle Progress Indicator Dots */}
          <div className="mt-4 flex items-center justify-center gap-1.5" role="tablist" aria-label="Event slide indicators">
            {UPCOMING_EVENTS.map((event, idx) => (
              <button
                key={event.id}
                type="button"
                role="tab"
                aria-selected={activeIndex === idx}
                aria-label={`Go to slide ${idx + 1}: ${event.title}`}
                onClick={() => scrollToCard(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === idx
                    ? "w-6 bg-gradient-to-r from-[#3F8BF9] to-[#AB57F3]"
                    : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. EVENT INSIGHTS & GUIDES SECTION (FROM ASCENDIA PRIME)                  */}
        {/* ========================================================================= */}
        <section 
          className="mb-16 sm:mb-20 md:mb-24"
          aria-label="Event Insights and Guides"
        >
          {/* Section Header */}
          <div className="mb-8 border-b border-white/10 pb-5">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3F8BF9] mb-1.5">
              FROM ASCENDIA PRIME
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Event Insights &amp;{" "}
              <span className="bg-gradient-to-r from-[#3F8BF9] via-[#7469F8] to-[#AB57F3] bg-clip-text text-transparent">
                Guides
              </span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-light mt-2 max-w-2xl leading-relaxed">
              Practical perspectives from Ascendia Prime for advertisers, publishers and technology partners navigating the performance marketing ecosystem.
            </p>
          </div>

          {/* 2-Column Editorial Grid: Large Featured Left Card + 2 Stacked Right Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* LEFT COLUMN: Visually Dominant Featured Article Card */}
            <div className="lg:col-span-7 flex">
              <article
                onClick={() => setSelectedArticleId(featuredArticle.id)}
                className="group relative w-full flex flex-col justify-between rounded-3xl p-6 sm:p-8 md:p-10 transition-all duration-300 cursor-pointer overflow-hidden border bg-[#0b1330]/90 border-[#3F8BF9]/25 hover:border-[#3F8BF9]/60 hover:bg-[#0e1940] shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:shadow-[0_16px_44px_rgba(63,139,249,0.2)] hover:-translate-y-1"
              >
                {/* Background Glow Element */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-[#3F8BF9]/10 blur-3xl pointer-events-none group-hover:bg-[#3F8BF9]/20 transition-all" />

                <div className="relative z-10">
                  {/* Category Pill & Read Time */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3F8BF9]/15 border border-[#3F8BF9]/30 text-xs font-bold uppercase tracking-wider text-[#3F8BF9]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3F8BF9]" />
                      {featuredArticle.category}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {featuredArticle.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-white group-hover:text-[#3F8BF9] transition-colors leading-tight mb-3">
                    {featuredArticle.title}
                  </h3>

                  {/* Meta */}
                  <div className="text-xs text-slate-400 font-medium mb-4 flex items-center gap-2">
                    <span className="text-[#AB57F3]">✦</span>
                    <span>{featuredArticle.meta}</span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-6">
                    {featuredArticle.description}
                  </p>
                </div>

                {/* Bottom CTA */}
                <div className="relative z-10 pt-5 border-t border-white/10 flex items-center justify-between mt-auto">
                  <span className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#3F8BF9] group-hover:text-white transition-colors">
                    <span>{featuredArticle.ctaText}</span>
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#3F8BF9]/15 border border-[#3F8BF9]/30 flex items-center justify-center text-[#3F8BF9] group-hover:bg-[#3F8BF9] group-hover:text-white transition-all duration-300 group-hover:translate-x-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </article>
            </div>

            {/* RIGHT COLUMN: Two Smaller Articles Stacked Vertically */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Right Card 1 */}
              <article
                onClick={() => setSelectedArticleId(rightArticle1.id)}
                className="group relative flex-1 flex flex-col justify-between rounded-3xl p-6 sm:p-7 transition-all duration-300 cursor-pointer overflow-hidden border bg-[#0b1330]/90 border-[#7469F8]/25 hover:border-[#7469F8]/60 hover:bg-[#0e1940] shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_32px_rgba(116,105,248,0.2)] hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#7469F8]/20 border border-[#7469F8]/35 text-[11px] font-bold uppercase tracking-wider text-[#AB57F3]">
                      {rightArticle1.category}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {rightArticle1.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#3F8BF9] transition-colors leading-snug mb-2.5">
                    {rightArticle1.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light mb-4 line-clamp-3">
                    {rightArticle1.description}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-semibold text-[#3F8BF9] group-hover:text-white transition-colors">
                    {rightArticle1.ctaText}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#3F8BF9] group-hover:bg-[#3F8BF9] group-hover:text-white transition-all duration-300 group-hover:translate-x-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </article>

              {/* Right Card 2 */}
              <article
                onClick={() => setSelectedArticleId(rightArticle2.id)}
                className="group relative flex-1 flex flex-col justify-between rounded-3xl p-6 sm:p-7 transition-all duration-300 cursor-pointer overflow-hidden border bg-[#0b1330]/90 border-[#AB57F3]/25 hover:border-[#AB57F3]/60 hover:bg-[#0e1940] shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_32px_rgba(171,87,243,0.2)] hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#AB57F3]/20 border border-[#AB57F3]/35 text-[11px] font-bold uppercase tracking-wider text-[#AB57F3]">
                      {rightArticle2.category}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {rightArticle2.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#3F8BF9] transition-colors leading-snug mb-2.5">
                    {rightArticle2.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light mb-4 line-clamp-3">
                    {rightArticle2.description}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-semibold text-[#3F8BF9] group-hover:text-white transition-colors">
                    {rightArticle2.ctaText}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#3F8BF9] group-hover:bg-[#3F8BF9] group-hover:text-white transition-all duration-300 group-hover:translate-x-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </article>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. LATEST NEWS & INSIGHTS (Vertical 3-Column Grid)                        */}
        {/* ========================================================================= */}
        <section aria-label="Latest News and Insights" className="mb-16 sm:mb-20 md:mb-24">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-white/10 pb-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3F8BF9] mb-1">
                EDITORIAL &amp; RELEASES
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                LATEST{" "}
                <span className="bg-gradient-to-r from-[#3F8BF9] via-[#7469F8] to-[#AB57F3] bg-clip-text text-transparent">
                  NEWS &amp; INSIGHTS
                </span>
              </h2>
            </div>
            
            <span className="text-xs text-slate-400 font-light">
              Showing {NEWS_ITEMS.length} articles
            </span>
          </div>

          {/* 3-Column Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {NEWS_ITEMS.map((item) => (
              <article
                key={item.id}
                className="case-study-card group flex flex-col justify-between p-6 rounded-2xl bg-[#0b1330]/80 border border-[#3F8BF9]/15 hover:border-[#3F8BF9]/50 hover:bg-[#0e1940]/90 transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_32px_rgba(63,139,249,0.2)] hover:-translate-y-1"
              >
                <div>
                  <div className="mb-3.5 flex items-center justify-between gap-2">
                    <span className="inline-block rounded-full bg-[#3F8BF9]/10 border border-[#3F8BF9]/25 px-2.5 py-0.5 text-xs font-semibold text-[#3F8BF9]">
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-400 font-light">{item.date}</span>
                  </div>

                  <h3 className="mb-2.5 text-base sm:text-lg font-bold leading-snug text-white transition-colors duration-300 group-hover:text-[#3F8BF9]">
                    {item.title}
                  </h3>

                  {item.location && (
                    <p className="mb-2.5 flex items-center gap-1.5 text-xs font-medium text-[#AB57F3]">
                      <svg className="h-3.5 w-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{item.location}</span>
                    </p>
                  )}

                  <p className="text-xs sm:text-sm font-light leading-relaxed text-slate-300">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-3.5">
                  <span className="text-xs font-medium text-slate-500">{item.tag}</span>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#3F8BF9] group-hover:text-[#AB57F3] transition-all duration-300 no-underline"
                  >
                    <span>Read More</span>
                    <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. "ATTENDING AN EVENT FEATURED HERE?" SECTION (GRADIENT CTA BANNER)       */}
        {/* ========================================================================= */}
        <section 
          aria-label="Event Conversation CTA"
          className="relative rounded-3xl p-8 sm:p-12 md:p-16 text-center bg-gradient-to-r from-[#1b3a8c] via-[#4338ca] to-[#6b21a8] border border-[#7469F8]/40 shadow-[0_25px_60px_rgba(0,0,0,0.5)] overflow-hidden"
        >
          {/* Subtle Decorative Geometric Circles */}
          <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-[#AB57F3]/25 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Heading */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
              Attending an Event Featured Here?
            </h3>

            {/* Supporting Text */}
            <p className="text-blue-100 text-sm sm:text-base font-light leading-relaxed mb-8 max-w-xl mx-auto">
              Tell us which event you are planning to attend and what kind of partnership or growth opportunity you would like to explore.
            </p>

            {/* Action Button */}
            <button
              type="button"
              onClick={() => {
                setConversationPreselectedEvent("Select an event");
                setIsConversationModalOpen(true);
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm sm:text-base text-slate-900 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(255,255,255,0.4)] hover:bg-slate-100 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer border border-white/40"
            >
              <span>Start a Conversation</span>
              <svg className="w-4 h-4 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </section>

      </div>

      {/* ========================================================================= */}
      {/* 6. ARTICLE DETAILS POPUP MODAL                                            */}
      {/* ========================================================================= */}
      <ArticleDetailsModal
        article={activeArticle}
        onClose={() => setSelectedArticleId(null)}
        onSelectArticle={(id) => setSelectedArticleId(id)}
        onOpenConversation={() => {
          setIsConversationModalOpen(true);
          setConversationPreselectedEvent("Select an event");
        }}
      />

      {/* ========================================================================= */}
      {/* 7. EVENT CONVERSATION MODAL (START A CONVERSATION DIALOG)                  */}
      {/* ========================================================================= */}
      <EventConversationModal
        isOpen={isConversationModalOpen}
        onClose={() => setIsConversationModalOpen(false)}
        preselectedEvent={conversationPreselectedEvent}
      />

      {/* ========================================================================= */}
      {/* 8. SEPARATE EVENT DETAILS POPUP MODAL                                     */}
      {/* ========================================================================= */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="event-modal-title"
        >
          {/* Backdrop overlay */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            onClick={() => setSelectedEvent(null)}
          />

          {/* Modal Container */}
          <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0b1330] border border-[#3F8BF9]/35 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.7)] text-white p-6 sm:p-8 md:p-10 animate-fadeIn">
            
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedEvent(null)}
              aria-label="Close event details"
              className="modal-close-btn absolute top-5 right-5 z-20"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* 2-Column Modal Layout (Image on Left / Basic Info on Right) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
              
              {/* Left Column: Big Event Image & Details Badge */}
              <div className="md:col-span-6 flex flex-col gap-4">
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/15 bg-slate-900 shadow-lg">
                  <img
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1330]/80 via-transparent to-transparent opacity-60" />
                  
                  {/* Floating Date Badge on Image */}
                  <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#020617]/90 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase tracking-wider shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3F8BF9]" />
                    {selectedEvent.dateLabel}
                  </div>
                </div>

                {/* Event Highlights List */}
                {selectedEvent.highlights && selectedEvent.highlights.length > 0 && (
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#3F8BF9] mb-2.5 flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-[#3F8BF9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Event Focus
                    </div>
                    <ul className="space-y-2">
                      {selectedEvent.highlights.map((highlight, i) => (
                        <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                          <span className="text-[#AB57F3] mt-0.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Right Column: Basic Info & Actions */}
              <div className="md:col-span-6 flex flex-col justify-between">
                <div>
                  {/* Category Pill */}
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#7469F8]/20 text-[#AB57F3] border border-[#7469F8]/30 text-xs font-bold uppercase tracking-wider mb-3">
                    {selectedEvent.category}
                  </div>

                  {/* Title */}
                  <h2 id="event-modal-title" className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight leading-snug">
                    {selectedEvent.title}
                  </h2>

                  {/* Location & Venue */}
                  <div className="space-y-1.5 mb-5 text-sm text-slate-300">
                    <div className="flex items-center gap-2 text-[#3F8BF9] font-medium">
                      <svg className="w-4 h-4 text-[#3F8BF9] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{selectedEvent.location}</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{selectedEvent.dateLabel}</span>
                    </div>
                  </div>

                  {/* Long Description */}
                  <p className="text-slate-300 text-sm font-light leading-relaxed mb-6">
                    {selectedEvent.longDescription || selectedEvent.description}
                  </p>
                </div>

                {/* Modal Action Buttons */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                  <a
                    href={selectedEvent.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#3F8BF9] via-[#7469F8] to-[#AB57F3] shadow-[0_0_20px_rgba(63,139,249,0.35)] hover:shadow-[0_0_35px_rgba(171,87,243,0.5)] transition-all duration-300 no-underline hover:-translate-y-0.5"
                  >
                    <span>Visit Official Website</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      const eventName = selectedEvent.title;
                      setSelectedEvent(null);
                      setConversationPreselectedEvent(
                        [
                          "Affilifest North 2026",
                          "DMEXCO 2026",
                          "Advertising Week New York 2026",
                          "PI LIVE Europe 2026",
                          "Affiliate World Asia 2026",
                          "Affiliate Summit West 2027",
                        ].find((e) => eventName.toLowerCase().includes(e.split(" ")[0].toLowerCase())) ||
                          "Another event"
                      );
                      setIsConversationModalOpen(true);
                    }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-slate-300 border border-white/15 bg-white/5 hover:border-white/30 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
                  >
                    <span>Meet Us at Event</span>
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
