"use client";

import { useState } from "react";
import "@/styles/conversion-led-growth.css";

import ConversionIntelligenceLoop from "@/components/conversion-led-growth/ConversionIntelligenceLoop";
import LazyParticleCanvas from "@/components/effects/LazyParticleCanvas";
import PageRevealEffects from "@/components/effects/PageRevealEffects";
import { useContactModal } from "@/components/forms/ContactModalProvider";

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
  const { openContactModal } = useContactModal();
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
        style={{ width: "100%", position: "relative", overflowX: "clip" }}
      >
        <LazyParticleCanvas
          id="warp-canvas"
          className="fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none opacity-40"
        />

        <div className="relative z-10 w-full text-slate-300">
          {/* =================================================================
              1. HERO SECTION
              ================================================================= */}
          <section className="clg-hero-section relative min-h-screen flex flex-col justify-center px-6 lg:px-12 overflow-hidden" id="top">
            <div className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-12 gap-10 xl:gap-14 items-center relative z-10 py-6 lg:py-8">
              <div className="lg:col-span-6 clg-hero-copy">
                <div className="clg-eyebrow hero-animate" style={{ animationDelay: "0.1s" }}>
                  Post-click conversion &amp; journey optimisation
                </div>

                <h1 className="hero-animate text-[2.25rem] sm:text-5xl lg:text-[3.1rem] xl:text-[3.5rem] font-bold leading-[1.1] text-white tracking-tight mb-6" style={{ animationDelay: "0.2s" }}>
                  Turn more of the traffic you already pay for into{" "}
                  <span className="text-gradient-brand">qualified action.</span>
                </h1>

                <p className="hero-animate text-[1.05rem] md:text-[1.1rem] text-slate-300 max-w-xl mb-8 leading-relaxed font-light" style={{ animationDelay: "0.3s" }}>
                  AscendiaPrime identifies where campaign journeys lose intent—from message mismatch and weak reassurance to form friction and broken tracking—then helps teams prioritise, implement and measure the improvements that matter.
                </p>

                <div className="hero-animate flex flex-wrap gap-4 items-center mb-8" style={{ animationDelay: "0.4s" }}>
                  <button
                    className="clg-btn-primary button button-primary inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:py-4 rounded-full font-bold text-base text-white transition-all shadow-[0_10px_25px_-5px_rgba(116,105,248,0.5)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    type="button"
                    onClick={() => openContactModal()}
                  >
                    Start a Conversation
                    <ArrowIcon />
                  </button>
                </div>

                <ul className="hero-animate flex flex-nowrap items-center gap-3 sm:gap-4 lg:gap-3 xl:gap-5 text-[11px] sm:text-xs xl:text-[13px] text-slate-300 font-medium whitespace-nowrap overflow-x-auto" style={{ animationDelay: "0.5s" }}>
                  <li className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                    <span className="clg-trust-icon shrink-0"><CheckIcon /></span>
                    Landing and funnel review
                  </li>
                  <li className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                    <span className="clg-trust-icon shrink-0"><CheckIcon /></span>
                    Tracking and event validation
                  </li>
                  <li className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                    <span className="clg-trust-icon shrink-0"><CheckIcon /></span>
                    Testable optimisation roadmap
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-6 relative w-full flex flex-col items-center lg:items-end justify-center hero-animate lg:-mt-6 xl:-mt-10" style={{ animationDelay: "0.55s" }}>
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
            <div className="max-w-[1240px] mx-auto w-full">
              <div className="clg-eyebrow mb-4">
                The post-click performance layer
              </div>
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                <div className="lg:col-span-5 clg-sticky-heading">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] text-white tracking-tight m-0">
                    The click creates an opportunity. The journey decides what happens next.
                  </h2>
                </div>

                <div className="lg:col-span-7 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
                  <p className="text-xl sm:text-2xl font-semibold text-white leading-snug m-0">
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
            </div>
          </section>

          {/* =================================================================
              4. WHAT WE ASSESS (CAPABILITIES)
              ================================================================= */}
          <section className="clg-section py-24 px-6 lg:px-12 relative z-10" id="capabilities">
            <div className="max-w-[1240px] mx-auto w-full">
              <div className="mb-14">
                <div className="clg-eyebrow mb-4">
                  What we assess
                </div>
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  <h2 className="lg:col-span-7 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] text-white tracking-tight m-0">
                    Four connected areas behind stronger conversion journeys.
                  </h2>
                  <p className="lg:col-span-5 text-base sm:text-lg text-slate-300 leading-relaxed font-light m-0">
                    We look beyond isolated page elements to understand how acquisition, experience and measurement work together.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {capabilities.map((item) => (
                  <article key={item.number} className="clg-capability-card group p-7 rounded-2xl flex flex-col justify-between relative overflow-hidden">
                    <div>
                      <span className="text-xs font-mono font-bold text-slate-500 block mb-6">{item.number}</span>
                      <div className="clg-card-icon w-12 h-12 rounded-xl mb-6 flex items-center justify-center text-[#3F8BF9] border border-[#3F8BF9]/30 bg-[#3F8BF9]/10">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#3F8BF9] shadow-[0_0_8px_#3F8BF9]" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#38BDF8] transition-colors">{item.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed font-light">{item.text}</p>
                    </div>
                    <div className="clg-card-accent-line" />
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* =================================================================
              5. SIGNAL MAP / FLOWCHART (CAMPAIGN PROMISE TO QUALIFIED OUTCOME)
              ================================================================= */}
          <section className="clg-section clg-signals-section py-24 px-6 lg:px-12 relative z-10" id="signals">
            <div className="max-w-[1240px] mx-auto w-full">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="clg-eyebrow justify-center mb-4">
                  Read the journey as one system
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] text-white tracking-tight mb-6">
                  Connect the campaign promise to the quality of the outcome.
                </h2>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
                  Individual metrics rarely explain the whole problem. We bring the important signals into one decision path so teams can see what is happening before, during and after the conversion.
                </p>
              </div>

              <div className="vertical-timeline" aria-label="Campaign promise to qualified outcome flowchart">
                <div className="vertical-timeline-item">
                  <div className="timeline-content left">
                    <small className="text-[11px] font-bold uppercase tracking-widest text-[#3F8BF9] block mb-1.5">Before the click</small>
                    <h3>Campaign promise</h3>
                    <p>Audience, source, offer and message.</p>
                  </div>
                  <div className="timeline-number">01</div>
                  <div className="hidden lg:block" />
                </div>

                <div className="vertical-timeline-item">
                  <div className="hidden lg:block" />
                  <div className="timeline-number">02</div>
                  <div className="timeline-content right">
                    <small className="text-[11px] font-bold uppercase tracking-widest text-[#7469F8] block mb-1.5">After the click</small>
                    <h3>Visitor behaviour</h3>
                    <p>Attention, progression, hesitation and exit.</p>
                  </div>
                </div>

                <div className="vertical-timeline-item">
                  <div className="timeline-content left">
                    <small className="text-[11px] font-bold uppercase tracking-widest text-[#AB57F3] block mb-1.5">At the decision</small>
                    <h3>Conversion friction</h3>
                    <p>Relevance, reassurance, usability and effort.</p>
                  </div>
                  <div className="timeline-number">03</div>
                  <div className="hidden lg:block" />
                </div>

                <div className="vertical-timeline-item">
                  <div className="hidden lg:block" />
                  <div className="timeline-number">04</div>
                  <div className="timeline-content right">
                    <small className="text-[11px] font-bold uppercase tracking-widest text-[#10B981] block mb-1.5">After the action</small>
                    <h3>Measured quality</h3>
                    <p>Event accuracy and commercial relevance.</p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
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
            </div>
          </section>

          {/* =================================================================
              6. HOW ASCENDIAPRIME WORKS (APPROACH — 2-COLUMN STICKY SCROLLING LAYOUT MATCHING AFFILIATE)
              ================================================================= */}
          <section className="clg-section clg-approach-section py-24 px-6 lg:px-12 relative z-10" id="approach">
            <div className="max-w-[1240px] mx-auto w-full">
              <div className="clg-approach-layout">
                <div className="clg-approach-sticky">
                  <div className="clg-eyebrow">
                    How AscendiaPrime works
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] text-white tracking-tight mb-6">
                    A clear route from observation to action.
                  </h2>
                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light mb-6">
                    The aim is not to produce a long list of opinions. It is to give your team a defensible order of priority.
                  </p>
                </div>

                <div className="clg-approach-cards">
                  {processSteps.map((item) => (
                    <article key={item.number} className="clg-approach-card">
                      <span className="clg-process-badge">{item.number}</span>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-sm text-slate-300 leading-relaxed font-light">{item.text}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* =================================================================
              7. DELIVERABLES (WHAT YOUR TEAM RECEIVES)
              ================================================================= */}
          <section className="clg-section clg-deliverables-section py-24 px-6 lg:px-12 relative z-10" id="deliverables">
            <div className="max-w-[1240px] mx-auto w-full">
              <div className="clg-eyebrow mb-4">
                A useful output—not a generic audit
              </div>
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                <div className="lg:col-span-5">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] text-white tracking-tight mb-6 m-0">
                    What your team receives.
                  </h2>
                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 font-light">
                    The review is designed to support decisions across marketing, analytics, content, design and development. Every recommendation is connected to an observed issue and a measurable next step.
                  </p>

                  <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#38BDF8] block mb-1">Collaborative format</span>
                    <p className="text-sm text-slate-300 font-light leading-relaxed">
                      Delivered as working documentation, prioritised tickets or direct working sessions with your team and partners.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <ol className="clg-deliverables-list space-y-4">
                    {deliverables.map((item, index) => (
                      <li key={item} className="clg-deliverable-item p-5 rounded-2xl flex items-start gap-4">
                        <span className="clg-deliverable-index">0{index + 1}</span>
                        <span className="text-base text-slate-200 font-medium leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </section>

          {/* =================================================================
              8. QUALITY & MEASUREMENT SAFEGUARDS
              ================================================================= */}
          <section className="clg-section py-24 px-6 lg:px-12 relative z-10" id="quality">
            <div className="max-w-[1240px] mx-auto w-full">
              <div className="clg-eyebrow mb-4">
                Measurement with commercial context
              </div>
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                <div className="lg:col-span-5">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] text-white tracking-tight mb-6 m-0">
                    More conversions only matter when they are meaningful.
                  </h2>
                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
                    Volume alone can hide poor-quality leads, low-value orders, duplicate events or attribution problems. We therefore assess the measurement behind the outcome—not only the number shown in a dashboard.
                  </p>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <article className="clg-quality-card p-6 rounded-xl flex items-start gap-5">
                    <span className="clg-quality-icon text-[#10B981]"><CheckIcon /></span>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1.5">Event verified</h3>
                      <p className="text-sm text-slate-400 font-light">The action fires where expected and carries the required information.</p>
                    </div>
                  </article>

                  <article className="clg-quality-card p-6 rounded-xl flex items-start gap-5">
                    <span className="clg-quality-icon text-[#10B981]"><CheckIcon /></span>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1.5">Quality reviewed</h3>
                      <p className="text-sm text-slate-400 font-light">The result reflects the lead, order or action the business actually values.</p>
                    </div>
                  </article>

                  <article className="clg-quality-card p-6 rounded-xl flex items-start gap-5">
                    <span className="clg-quality-icon text-[#10B981]"><CheckIcon /></span>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1.5">Decision informed</h3>
                      <p className="text-sm text-slate-400 font-light">The evidence is clear enough to guide the next campaign or journey change.</p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>

          {/* =================================================================
              9. WHEN THIS IS USEFUL (CENTERED HEADER & FULL-WIDTH ALIGNED LAYOUT)
              ================================================================= */}
          <section className="clg-section py-24 px-6 lg:px-12 relative z-10" id="fit">
            <div className="max-w-[1240px] mx-auto w-full">
              <div className="text-center max-w-3xl mx-auto mb-14">
                <div className="clg-eyebrow justify-center mb-4">
                  When this is useful
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] text-white tracking-tight">
                  Built for moments where traffic and outcomes stop moving together.
                </h2>
              </div>

              {/* Use Cases Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4.5 mb-8">
                {useCases.map((item) => (
                  <div key={item} className="p-5 sm:p-6 rounded-2xl border border-slate-800/90 bg-gradient-to-br from-slate-900/80 to-slate-950/90 backdrop-blur-xl flex items-start gap-3.5 hover:border-slate-700 transition-all">
                    <span className="text-[#AB57F3] mt-1 shrink-0"><ArrowIcon /></span>
                    <span className="text-sm sm:text-[0.95rem] text-slate-300 leading-relaxed font-light">{item}</span>
                  </div>
                ))}
              </div>

              {/* Sectors Box Below — Matching Alignment */}
              <aside className="p-8 sm:p-10 rounded-2xl border border-slate-800/90 bg-slate-900/80 backdrop-blur-md">
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-5">
                    <small className="text-xs font-bold uppercase tracking-widest text-[#E057D8] block mb-2">Relevant across</small>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">Different journeys. The same need for clarity.</h3>
                    <p className="text-sm text-slate-400 leading-relaxed font-light">
                      Scope is shaped around the campaign, available data and action that matters to your business.
                    </p>
                  </div>

                  <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {sectors.map((item) => (
                      <span key={item} className="clg-sector-badge justify-center text-center w-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </section>

          {/* =================================================================
              10. FREQUENTLY ASKED QUESTIONS
              ================================================================= */}
          <section className="clg-section clg-faq-section py-24 px-6 lg:px-12 relative z-10" id="faq">
            <div className="max-w-[1240px] mx-auto w-full">
              <div className="clg-eyebrow mb-4">
                Frequently asked questions
              </div>
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                <div className="lg:col-span-5 clg-sticky-heading">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] text-white tracking-tight mb-6 m-0">
                    Useful answers before we begin.
                  </h2>
                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
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
            </div>
          </section>

          {/* =================================================================
              11. FINAL CTA SECTION (CLEAN & SEAMLESS, NO BOX OR STRIP)
              ================================================================= */}
          <section className="clg-final-cta-section relative py-24 sm:py-28 px-6 lg:px-12 overflow-hidden text-center" id="contact">
            <div className="max-w-[840px] mx-auto relative z-10">
              <div className="clg-eyebrow justify-center mb-4">
                Where intent becomes measurable growth
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15] tracking-tight mb-6">
                Find out where valuable campaign intent is being lost.
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 font-light">
                Start with one priority campaign, landing page or conversion path. We will help you establish what can be assessed, where the evidence points and what the next useful action should be.
              </p>

              <div className="flex flex-wrap gap-4 items-center justify-center mb-8">
                <button
                  type="button"
                  className="clg-btn-primary button button-primary inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:py-4 rounded-full font-bold text-base text-white transition-all shadow-[0_10px_25px_-5px_rgba(116,105,248,0.5)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  onClick={() => openContactModal()}
                >
                  Start a Conversation
                  <ArrowIcon />
                </button>
              </div>

              <small className="text-xs text-slate-400 block font-light">
                No fixed uplift promises. No generic checklist. A focused, evidence-led conversation.
              </small>
            </div>
          </section>
        </div>
      </div>
    </PageRevealEffects>
  );
}
