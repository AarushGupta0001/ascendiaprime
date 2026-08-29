"use client";

import { useState } from "react";
import "@/styles/conversion-led-growth.css";

import ConversionIntelligenceLoop from "@/components/conversion-led-growth/ConversionIntelligenceLoop";
import LazyParticleCanvas from "@/components/effects/LazyParticleCanvas";
import PageRevealEffects from "@/components/effects/PageRevealEffects";

const capabilities = [
  {
    number: "01",
    title: "Landing-page alignment",
    text: "Check whether the page continues the promise made by the advert, partner or campaign—and gives each audience a relevant reason to stay.",
  },
  {
    number: "02",
    title: "Journey and form friction",
    text: "Find the unnecessary steps, unclear choices and reassurance gaps that make interested visitors hesitate or leave.",
  },
  {
    number: "03",
    title: "Tracking and event integrity",
    text: "Confirm that the actions being reported are firing correctly, carrying the right values and representing a meaningful outcome.",
  },
  {
    number: "04",
    title: "Prioritised experimentation",
    text: "Turn observations into a practical sequence of changes, with a clear hypothesis, success measure and reason for testing each one.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Define the outcome",
    text: "Agree what a qualified action means for the campaign—not simply what is easiest to count.",
  },
  {
    number: "02",
    title: "Validate the signals",
    text: "Review the tracking, events and available journey data before drawing conclusions.",
  },
  {
    number: "03",
    title: "Map the journey",
    text: "Connect the campaign promise, landing experience, decision points and completion path.",
  },
  {
    number: "04",
    title: "Diagnose the friction",
    text: "Separate message, confidence, usability and measurement issues instead of treating every drop-off alike.",
  },
  {
    number: "05",
    title: "Prioritise the change",
    text: "Rank improvements by evidence, likely influence, effort and commercial relevance.",
  },
  {
    number: "06",
    title: "Measure and learn",
    text: "Review the quality of the outcome and feed the evidence into the next campaign decision.",
  },
];

const deliverables = [
  "A focused review of the priority landing pages and conversion paths",
  "An annotated journey map showing where intent is being weakened",
  "Tracking and event issues that may be distorting performance",
  "A prioritised improvement backlog with a reason behind every action",
  "A practical measurement plan for evaluating both volume and quality",
];

const useCases = [
  "Paid traffic is growing, but completed actions are not keeping pace.",
  "Visitors reach the form, basket or enquiry stage and leave before finishing.",
  "Campaign messaging performs well, but the landing experience feels disconnected.",
  "Conversion reporting cannot be fully trusted across platforms or partners.",
  "A new market, offer or audience requires a more relevant post-click journey.",
  "The team has many optimisation ideas but no evidence-led order of priority.",
];

const sectors = [
  "E-commerce & retail",
  "Lead generation",
  "Travel & hospitality",
  "Subscription services",
  "Education & lifestyle",
  "Professional services",
];

const faqs = [
  {
    q: "What does conversion-led growth mean?",
    a: "It means treating the post-click journey as part of campaign performance. We look at the connection between traffic source, landing experience, decision friction, tracking and outcome quality—then prioritise the changes most likely to improve the journey.",
  },
  {
    q: "Is this the same as a general website redesign?",
    a: "No. The work starts with a defined campaign or conversion path. A redesign may not be necessary; often the first opportunities are clearer message continuity, better reassurance, simpler actions or more reliable measurement.",
  },
  {
    q: "Can AscendiaPrime work with our existing media or development partners?",
    a: "Yes. The approach is designed to complement existing teams. We can provide the diagnosis, priorities and measurement logic, then work with the people responsible for media, content, analytics, design or development.",
  },
  {
    q: "What information is needed to begin?",
    a: "Usually the priority campaign, target audience, landing pages, desired actions and available performance or analytics information. We first confirm what can be assessed reliably and identify any measurement gaps.",
  },
  {
    q: "Do you guarantee a conversion uplift?",
    a: "No responsible optimisation programme should guarantee a fixed uplift before the journey and data have been reviewed. We provide clear hypotheses, controlled priorities and transparent measurement so decisions are based on evidence rather than assumptions.",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="w-4 h-4 shrink-0">
      <path
        d="M4 10h11M11 5l5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="w-4 h-4 shrink-0">
      <path
        d="m4 10 4 4 8-9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ConversionLedGrowthPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <PageRevealEffects>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100vw",
          height: "100vh",
          backgroundColor: "#020617",
          zIndex: "-9999",
          pointerEvents: "none",
        }}
      />

      <div
        id="cro-master"
        className="page-master antialiased text-white bg-[#020617] font-sans selection:bg-[#3F8BF9] selection:text-white"
        style={{ width: "100%", position: "relative", overflowX: "hidden" }}
      >
        <LazyParticleCanvas
          id="warp-canvas"
          className="fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none opacity-40"
        />

        <div className="relative z-10 w-full text-slate-300">
          {/* =================================================================
              1. HERO SECTION
              ================================================================= */}
          <section className="clg-hero-section relative min-h-[90vh] flex flex-col justify-center pb-16 pt-24 px-6 lg:px-12 overflow-hidden" id="top">
            <div className="clg-hero-glow glow-one" aria-hidden="true" />
            <div className="clg-hero-glow glow-two" aria-hidden="true" />

            <div className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-12 gap-12 lg:gap-14 items-center relative z-10">
              <div className="lg:col-span-6 clg-hero-copy">
                <div className="clg-eyebrow hero-animate" style={{ animationDelay: "0.1s" }}>
                  <span />
                  Post-click conversion &amp; journey optimisation
                </div>

                <h1 className="hero-animate text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold leading-[1.06] text-white tracking-tight mb-6" style={{ animationDelay: "0.2s" }}>
                  Turn more of the traffic you already pay for into{" "}
                  <span className="text-gradient-brand">qualified action.</span>
                </h1>

                <p className="hero-animate text-base sm:text-lg text-slate-300 max-w-xl mb-8 leading-relaxed font-normal" style={{ animationDelay: "0.3s" }}>
                  AscendiaPrime identifies where campaign journeys lose intent—from message mismatch and weak reassurance to form friction and broken tracking—then helps teams prioritise, implement and measure the improvements that matter.
                </p>

                <div className="hero-animate flex flex-wrap gap-4 items-center mb-8" style={{ animationDelay: "0.4s" }}>
                  <button
                    className="open-contact-modal clg-btn-primary inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-base text-white bg-gradient-to-r from-[#7469F8] via-[#AB57F3] to-[#E057D8] border border-[#AB57F3]/30 shadow-[0_0_20px_rgba(171,87,243,0.4)] hover:shadow-[0_0_30px_rgba(171,87,243,0.6)] hover:-translate-y-0.5 transition-all cursor-pointer"
                    type="button"
                  >
                    Request a Conversion Review
                    <ArrowIcon />
                  </button>

                  <a
                    href="#capabilities"
                    className="clg-btn-secondary inline-flex items-center gap-2 px-7 py-4 rounded-2xl font-semibold text-base text-slate-200 border border-slate-700/80 bg-slate-900/60 hover:bg-slate-800 hover:text-white transition-all"
                  >
                    See What We Assess
                  </a>
                </div>

                <ul className="hero-animate flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm text-slate-300 font-medium" style={{ animationDelay: "0.5s" }}>
                  <li className="flex items-center gap-2">
                    <span className="clg-trust-icon"><CheckIcon /></span>
                    Landing and funnel review
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="clg-trust-icon"><CheckIcon /></span>
                    Tracking and event validation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="clg-trust-icon"><CheckIcon /></span>
                    Testable optimisation roadmap
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-6 relative w-full flex flex-col items-center lg:items-end justify-center hero-animate" style={{ animationDelay: "0.55s" }}>
                <ConversionIntelligenceLoop />
                <p className="clg-disclaimer text-right text-xs text-slate-500 mt-2.5 w-full max-w-[735px]">
                  Illustrative diagnostic logic. Campaign setup, available signals and outcomes vary by advertiser.
                </p>
              </div>
            </div>
          </section>

          {/* =================================================================
              2. ASSURANCE RAIL / ENGAGEMENT PRINCIPLES
              ================================================================= */}
          <section className="clg-assurance-rail relative z-10" aria-label="Engagement principles">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5">
              <div className="clg-rail-grid">
                <span className="rail-label">Every engagement is built around</span>
                <div className="rail-item">
                  <span className="rail-dot" />
                  <b>Journey evidence</b>
                </div>
                <div className="rail-item">
                  <span className="rail-dot" />
                  <b>Verified tracking</b>
                </div>
                <div className="rail-item">
                  <span className="rail-dot" />
                  <b>Prioritised action</b>
                </div>
                <div className="rail-item">
                  <span className="rail-dot" />
                  <b>Commercial quality</b>
                </div>
              </div>
            </div>
          </section>

          {/* =================================================================
              3. STRATEGIC INTRODUCTION (THE POST-CLICK PERFORMANCE LAYER)
              ================================================================= */}
          <section className="clg-section clg-why-section py-24 px-6 lg:px-12 relative z-10" id="why">
            <div className="max-w-[1240px] mx-auto w-full grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-5 clg-sticky-heading">
                <div className="clg-eyebrow">
                  <span />
                  The post-click performance layer
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] text-white tracking-tight">
                  The click creates an opportunity. The journey decides what happens next.
                </h2>
              </div>

              <div className="lg:col-span-7 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
                <p className="text-xl sm:text-2xl font-semibold text-white leading-snug">
                  A campaign can reach the right audience and still lose the outcome after the click.
                </p>

                <p>
                  Sometimes the landing page makes a different promise. Sometimes the visitor cannot find enough reassurance to move forward. Sometimes the form asks for too much, too soon. And sometimes the action happens but the tracking does not record it correctly.
                </p>

                <p>
                  Conversion-led growth brings those moments into the performance conversation. It helps marketing, affiliate and commercial teams understand where intent is weakening—and what deserves attention first.
                </p>

                <div className="clg-human-note mt-8 p-6 rounded-2xl border-l-4 border-[#AB57F3] bg-gradient-to-r from-[#AB57F3]/15 to-slate-900/60 backdrop-blur-md">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#E057D8] block mb-2">Our view</span>
                  <strong className="text-base sm:text-lg text-white font-semibold leading-snug block">
                    Improvement starts by diagnosing the reason for friction, not by changing everything at once.
                  </strong>
                </div>
              </div>
            </div>
          </section>

          {/* =================================================================
              4. WHAT WE ASSESS (CAPABILITIES)
              ================================================================= */}
          <section className="clg-section py-24 px-6 lg:px-12 relative z-10 border-t border-slate-800/80 bg-slate-950/40" id="capabilities">
            <div className="max-w-[1240px] mx-auto w-full">
              <div className="grid lg:grid-cols-12 gap-8 items-end mb-14">
                <div className="lg:col-span-8">
                  <div className="clg-eyebrow">
                    <span />
                    What we assess
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] text-white tracking-tight">
                    Four connected areas behind stronger conversion journeys.
                  </h2>
                </div>
                <div className="lg:col-span-4">
                  <p className="text-base text-slate-400 leading-relaxed">
                    We look beyond isolated page elements to understand how acquisition, experience and measurement work together.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {capabilities.map((item) => (
                  <article key={item.number} className="clg-capability-card group p-7 rounded-2xl border border-slate-800/90 bg-slate-900/70 backdrop-blur-md hover:border-[#7469F8]/60 hover:bg-slate-800/90 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
                    <div>
                      <span className="text-xs font-mono font-bold text-slate-500 block mb-6">{item.number}</span>
                      <div className="clg-card-icon w-12 h-12 rounded-xl mb-6 flex items-center justify-center text-[#3F8BF9] border border-[#3F8BF9]/30 bg-[#3F8BF9]/10">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#3F8BF9] shadow-[0_0_8px_#3F8BF9]" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#38BDF8] transition-colors">{item.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.text}</p>
                    </div>
                    <div className="clg-card-accent-line" />
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* =================================================================
              5. SIGNAL MAP (CAMPAIGN PROMISE TO QUALIFIED OUTCOME)
              ================================================================= */}
          <section className="clg-section clg-signals-section py-24 px-6 lg:px-12 relative z-10 overflow-hidden" id="signals">
            <div className="max-w-[1240px] mx-auto w-full grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-5">
                <div className="clg-eyebrow">
                  <span />
                  Read the journey as one system
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] text-white tracking-tight mb-6">
                  Connect the campaign promise to the quality of the outcome.
                </h2>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
                  Individual metrics rarely explain the whole problem. We bring the important signals into one decision path so teams can see what is happening before, during and after the conversion.
                </p>
                <a
                  href="#approach"
                  className="inline-flex items-center gap-2 text-[#38BDF8] font-bold text-base hover:text-white transition-colors group"
                >
                  See how the review works
                  <span className="group-hover:translate-x-1 transition-transform">
                    <ArrowIcon />
                  </span>
                </a>
              </div>

              <div className="lg:col-span-7 relative">
                <div className="clg-signal-map relative pl-10 sm:pl-12 py-3" aria-label="Campaign promise to qualified outcome">
                  <div className="clg-signal-spine" aria-hidden="true">
                    <i style={{ top: "0%" }} />
                    <i style={{ top: "33%" }} />
                    <i style={{ top: "66%" }} />
                    <i style={{ top: "100%" }} />
                  </div>

                  <div className="space-y-4">
                    <article className="clg-signal-card p-5 sm:p-6 rounded-xl border border-slate-800/90 bg-slate-900/80 backdrop-blur-md flex items-center gap-5">
                      <span className="clg-signal-badge badge-1">01</span>
                      <div>
                        <small className="text-[10px] font-bold uppercase tracking-widest text-[#3F8BF9] block mb-1">Before the click</small>
                        <h3 className="text-lg font-bold text-white mb-1">Campaign promise</h3>
                        <p className="text-sm text-slate-400">Audience, source, offer and message.</p>
                      </div>
                    </article>

                    <article className="clg-signal-card p-5 sm:p-6 rounded-xl border border-slate-800/90 bg-slate-900/80 backdrop-blur-md flex items-center gap-5">
                      <span className="clg-signal-badge badge-2">02</span>
                      <div>
                        <small className="text-[10px] font-bold uppercase tracking-widest text-[#7469F8] block mb-1">After the click</small>
                        <h3 className="text-lg font-bold text-white mb-1">Visitor behaviour</h3>
                        <p className="text-sm text-slate-400">Attention, progression, hesitation and exit.</p>
                      </div>
                    </article>

                    <article className="clg-signal-card p-5 sm:p-6 rounded-xl border border-slate-800/90 bg-slate-900/80 backdrop-blur-md flex items-center gap-5">
                      <span className="clg-signal-badge badge-3">03</span>
                      <div>
                        <small className="text-[10px] font-bold uppercase tracking-widest text-[#AB57F3] block mb-1">At the decision</small>
                        <h3 className="text-lg font-bold text-white mb-1">Conversion friction</h3>
                        <p className="text-sm text-slate-400">Relevance, reassurance, usability and effort.</p>
                      </div>
                    </article>

                    <article className="clg-signal-card p-5 sm:p-6 rounded-xl border border-slate-800/90 bg-slate-900/80 backdrop-blur-md flex items-center gap-5">
                      <span className="clg-signal-badge badge-4">04</span>
                      <div>
                        <small className="text-[10px] font-bold uppercase tracking-widest text-[#10B981] block mb-1">After the action</small>
                        <h3 className="text-lg font-bold text-white mb-1">Measured quality</h3>
                        <p className="text-sm text-slate-400">Event accuracy and commercial relevance.</p>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =================================================================
              6. HOW ASCENDIAPRIME WORKS (APPROACH)
              ================================================================= */}
          <section className="clg-section py-24 px-6 lg:px-12 relative z-10 border-t border-slate-800/80 bg-slate-950/40" id="approach">
            <div className="max-w-[1240px] mx-auto w-full">
              <div className="grid lg:grid-cols-12 gap-8 items-end mb-14">
                <div className="lg:col-span-8">
                  <div className="clg-eyebrow">
                    <span />
                    How AscendiaPrime works
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] text-white tracking-tight">
                    A clear route from observation to action.
                  </h2>
                </div>
                <div className="lg:col-span-4">
                  <p className="text-base text-slate-400 leading-relaxed">
                    The aim is not to produce a long list of opinions. It is to give your team a defensible order of priority.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {processSteps.map((item) => (
                  <article key={item.number} className="clg-process-card p-8 rounded-2xl border border-slate-800/90 bg-slate-900/70 backdrop-blur-md hover:border-[#7469F8]/60 hover:bg-slate-800/90 transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <span className="clg-process-badge">{item.number}</span>
                      <h3 className="text-xl font-bold text-white mt-4 mb-3">{item.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* =================================================================
              7. DELIVERABLES (WHAT YOUR TEAM RECEIVES)
              ================================================================= */}
          <section className="clg-section clg-deliverables-section py-24 px-6 lg:px-12 relative z-10" id="deliverables">
            <div className="max-w-[1240px] mx-auto w-full grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-5">
                <div className="clg-eyebrow">
                  <span />
                  A useful output—not a generic audit
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] text-white tracking-tight mb-6">
                  What your team receives.
                </h2>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
                  The review is designed to support decisions across marketing, analytics, content, design and development. Every recommendation is connected to an observed issue and a measurable next step.
                </p>

                <div className="clg-deliverable-tag flex items-center gap-4 p-5 rounded-xl border border-[#10B981]/30 bg-[#10B981]/10 backdrop-blur-md">
                  <span className="clg-tag-icon text-[#10B981]">
                    <CheckIcon />
                  </span>
                  <span className="text-sm text-slate-300">
                    Clear enough to act on.<br />
                    <b className="text-white font-bold">Specific enough to brief.</b>
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7">
                <ol className="clg-deliverable-list space-y-4">
                  {deliverables.map((item, index) => (
                    <li key={item} className="p-5 sm:p-6 rounded-xl border border-slate-800/90 bg-slate-900/60 backdrop-blur-md flex items-center gap-5">
                      <span className="text-xs font-mono font-bold text-[#3F8BF9]">0{index + 1}</span>
                      <p className="text-base sm:text-lg text-slate-200 font-medium m-0">{item}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>

          {/* =================================================================
              8. QUALITY & MEASUREMENT SAFEGUARDS
              ================================================================= */}
          <section className="clg-section py-24 px-6 lg:px-12 relative z-10 border-t border-slate-800/80 bg-slate-950/40" id="quality">
            <div className="max-w-[1240px] mx-auto w-full grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-5">
                <div className="clg-eyebrow">
                  <span />
                  Measurement with commercial context
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] text-white tracking-tight mb-6">
                  More conversions only matter when they are meaningful.
                </h2>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                  Volume alone can hide poor-quality leads, low-value orders, duplicate events or attribution problems. We therefore assess the measurement behind the outcome—not only the number shown in a dashboard.
                </p>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <article className="clg-quality-card p-6 rounded-xl border border-slate-800/90 bg-slate-900/80 backdrop-blur-md flex items-start gap-5">
                  <span className="clg-quality-icon text-[#10B981]"><CheckIcon /></span>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1.5">Event verified</h3>
                    <p className="text-sm text-slate-400">The action fires where expected and carries the required information.</p>
                  </div>
                </article>

                <article className="clg-quality-card p-6 rounded-xl border border-slate-800/90 bg-slate-900/80 backdrop-blur-md flex items-start gap-5">
                  <span className="clg-quality-icon text-[#10B981]"><CheckIcon /></span>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1.5">Quality reviewed</h3>
                    <p className="text-sm text-slate-400">The result reflects the lead, order or action the business actually values.</p>
                  </div>
                </article>

                <article className="clg-quality-card p-6 rounded-xl border border-slate-800/90 bg-slate-900/80 backdrop-blur-md flex items-start gap-5">
                  <span className="clg-quality-icon text-[#10B981]"><CheckIcon /></span>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1.5">Decision informed</h3>
                    <p className="text-sm text-slate-400">The evidence is clear enough to guide the next campaign or journey change.</p>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* =================================================================
              9. WHEN THIS IS USEFUL (USE CASES & SECTORS)
              ================================================================= */}
          <section className="clg-section py-24 px-6 lg:px-12 relative z-10" id="fit">
            <div className="max-w-[1240px] mx-auto w-full grid lg:grid-cols-12 gap-12 lg:gap-14 items-start">
              <div className="lg:col-span-7">
                <div className="clg-eyebrow">
                  <span />
                  When this is useful
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] text-white tracking-tight mb-8">
                  Built for moments where traffic and outcomes stop moving together.
                </h2>

                <ul className="grid sm:grid-cols-2 gap-4">
                  {useCases.map((item) => (
                    <li key={item} className="p-4 rounded-xl border border-slate-800/80 bg-slate-900/60 flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                      <span className="text-[#AB57F3] mt-0.5"><ArrowIcon /></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <aside className="lg:col-span-5 p-8 rounded-2xl border border-slate-800/90 bg-slate-900/80 backdrop-blur-md">
                <small className="text-xs font-bold uppercase tracking-widest text-[#E057D8] block mb-2">Relevant across</small>
                <h3 className="text-2xl font-bold text-white mb-6">Different journeys. The same need for clarity.</h3>

                <div className="flex flex-wrap gap-2.5 mb-6">
                  {sectors.map((item) => (
                    <span key={item} className="clg-sector-badge">
                      {item}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-slate-400 pt-5 border-t border-slate-800 leading-relaxed">
                  Scope is shaped around the campaign, available data and action that matters to your business.
                </p>
              </aside>
            </div>
          </section>

          {/* =================================================================
              10. FREQUENTLY ASKED QUESTIONS
              ================================================================= */}
          <section className="clg-section clg-faq-section py-24 px-6 lg:px-12 relative z-10 border-t border-slate-800/80 bg-slate-950/50" id="faq">
            <div className="max-w-[1240px] mx-auto w-full grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-5 clg-sticky-heading">
                <div className="clg-eyebrow">
                  <span />
                  Frequently asked questions
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] text-white tracking-tight mb-6">
                  Useful answers before we begin.
                </h2>
                <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
                  Conversion work is most effective when the objective, evidence and responsibilities are clear from the outset.
                </p>
              </div>

              <div className="lg:col-span-7 clg-faq-list space-y-4">
                {faqs.map((item, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={item.q}
                      className={`clg-faq-card ${isOpen ? "open" : ""}`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(index)}
                        className="clg-faq-button"
                        aria-expanded={isOpen}
                      >
                        <div className="flex items-center gap-3.5 pr-2">
                          <span className="clg-faq-number">0{index + 1}</span>
                          <span className="font-bold text-white leading-snug">{item.q}</span>
                        </div>
                        <span className="clg-faq-icon" aria-hidden="true">
                          +
                        </span>
                      </button>
                      {isOpen && (
                        <div className="clg-faq-answer animate-fadeIn">
                          <p>{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* =================================================================
              11. FINAL CTA SECTION
              ================================================================= */}
          <section className="clg-final-cta-section relative py-28 px-6 lg:px-12 overflow-hidden text-center" id="contact">
            <div className="cta-orbit orbit-one" aria-hidden="true" />
            <div className="cta-orbit orbit-two" aria-hidden="true" />

            <div className="max-w-[920px] mx-auto relative z-10">
              <div className="clg-eyebrow justify-center mb-4">
                <span />
                Where intent becomes measurable growth
                <span />
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-6">
                Find out where valuable campaign intent is being lost.
              </h2>

              <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
                Start with one priority campaign, landing page or conversion path. We will help you establish what can be assessed, where the evidence points and what the next useful action should be.
              </p>

              <div className="flex flex-wrap gap-4 items-center justify-center mb-8">
                <button
                  type="button"
                  className="open-contact-modal inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-base text-white bg-gradient-to-r from-[#7469F8] via-[#AB57F3] to-[#E057D8] border border-[#AB57F3]/30 shadow-[0_0_20px_rgba(171,87,243,0.4)] hover:shadow-[0_0_30px_rgba(171,87,243,0.6)] hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  Request a Conversion Review
                  <ArrowIcon />
                </button>

                <a
                  href="#capabilities"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl font-semibold text-base text-slate-200 border border-slate-700 bg-slate-900/80 hover:bg-slate-800 hover:text-white transition-all"
                >
                  Review the scope
                </a>
              </div>

              <small className="text-xs text-slate-400 block">
                No fixed uplift promises. No generic checklist. A focused, evidence-led conversation.
              </small>
            </div>
          </section>
        </div>
      </div>
    </PageRevealEffects>
  );
}
