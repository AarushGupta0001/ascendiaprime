"use client";

import { useContactModal } from "@/components/forms/ContactModalProvider";
import PpcDecisionConsole from "@/components/PpcDecisionConsole";
import "@/styles/ppc.css";

const proofPoints = [
  { metric: "Intent-Led Targeting", label: "Search behaviour, audience signals & platform intent" },
  { metric: "Spend Efficiency", label: "Budget control & wasted spend elimination" },
  { metric: "Performance Visibility", label: "Attribution across spend, CPA, ROAS & conversions" },
  { metric: "Cross-Platform Scale", label: "Google Ads, Meta, YouTube & retargeting growth" },
] as const;

const principles = [
  ["01", "Start with intent", "Match keyword intent, search behaviour, audience segmentation, and channel mechanics before ad spend begins."],
  ["02", "Align pages & tracking", "Connect ad messaging, landing page experience, conversion events, and server-side attribution before scaling spend."],
  ["03", "Put budget behind what works", "Scale top-performing ad groups, creatives, and bidding strategies while actively eliminating underperforming placements."],
] as const;

const capabilities = [
  ["search", "Google Ads Management", "Capture high-intent searchers across Google Search, Shopping, Performance Max, Display, and YouTube campaigns aligned with business goals."],
  ["grid", "Meta Ads Management", "Run Facebook and Instagram campaigns built around audience segmentation, creative angle testing, funnel strategy, and conversion-led growth."],
  ["target", "Paid Search Strategy", "Build keyword, intent, and competitor-led search campaigns designed to reach users actively looking for relevant products or services."],
  ["social", "Paid Social Campaigns", "Engage audiences across social platforms through creative-led campaigns focused on awareness, traffic, qualified leads, and sales."],
  ["shield", "Tracking & Landing Page Alignment", "Connect ad messaging, landing page experience, conversion events, and reporting visibility so campaign performance can be measured properly."],
  ["chart", "Continuous Optimization", "Continuously optimize audiences, keywords, creatives, bids, budgets, placements, CPA, ROAS, and conversion quality."],
] as const;

const bestFitCampaigns = [
  "Lead Generation",
  "E-commerce Sales",
  "Brand Search Protection",
  "Competitor Keyword Targeting",
  "Product Launches",
  "Geo-Specific Acquisition",
  "High-Ticket Inquiries",
  "Retargeting & Reactivation",
] as const;

const channels = [
  "Google Search Ads",
  "Google Shopping",
  "Performance Max",
  "YouTube Ads",
  "Meta Ads",
  "Facebook & Instagram",
  "Microsoft Ads",
  "Display Retargeting",
  "Lead Gen Campaigns",
  "Paid Social",
] as const;

const processSteps = [
  ["01", "Understand the growth objective", "We begin by analyzing your business model, target customer profile, unit economics, conversion goals, and target CAC/ROAS."],
  ["02", "Map audience and intent", "We define high-converting search keywords, audience segments, funnel stages, and platform behaviours that guide campaign architecture."],
  ["03", "Structure campaign setup", "We build tight campaign hierarchies, responsive ad creatives, tracking pixels, conversion actions, and landing page flows before launch."],
  ["04", "Launch with controlled spend", "Campaigns go live with deliberate budget allocation, allowing early conversion and cost signals to be verified before scaling."],
  ["05", "Review performance signals", "We monitor search terms, CTR, CPC, CPA, ROAS, creative performance, and audience response to identify high-leverage opportunities."],
  ["06", "Optimize and scale", "We expand budget into top-performing keywords, audiences, and ad formats while systematically trimming wasted spend."],
] as const;

const faqs = [
  ["What are Google, Meta and PPC ads?", "Google, Meta and PPC ads are paid media campaigns that help advertisers reach relevant audiences across search, social, display, shopping, video, and retargeting placements."],
  ["How do you plan paid media campaigns?", "We begin with the advertiser’s objectives, audience profile, target market, budget, campaign model, conversion goals, and tracking requirements before building the campaign structure."],
  ["Can paid media campaigns support both leads and sales?", "Yes. Paid media campaigns can be structured for lead generation, e-commerce sales, product promotion, sign-ups, retargeting, or other measurable actions depending on the campaign objective."],
  ["Do advertisers get visibility into campaign performance?", "Yes. Advertisers can get reporting visibility across spend, clicks, conversions, CPA, ROAS, audience response, and optimization insights."],
  ["How do you reduce wasted spend in PPC campaigns?", "We focus on audience relevance, keyword quality, negative targeting, creative testing, landing page alignment, budget monitoring, and continuous optimization."],
  ["How quickly can a PPC campaign be launched?", "Depending on account readiness, tracking setup, and creative assets, campaigns can typically be configured, tested, and launched within 5 to 10 business days."],
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ascendiaprime.com/#organization",
      name: "Ascendia Prime Media Ltd",
      url: "https://ascendiaprime.com/",
    },
    {
      "@type": "Service",
      "@id": "https://ascendiaprime.com/ppc/#service",
      name: "Google, Meta & PPC Management Services",
      serviceType: "Paid media & search advertising",
      provider: { "@id": "https://ascendiaprime.com/#organization" },
      areaServed: "Worldwide",
      description: "Performance-led Google Ads, Meta Ads, and PPC campaign management focused on audience intent, spend efficiency, and measurable ROI.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://ascendiaprime.com/" },
        { "@type": "ListItem", position: 2, name: "PPC Management", item: "https://ascendiaprime.com/ppc/" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

function Icon({ name }: { name: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...common}>
      {name === "search" && (
        <>
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </>
      )}
      {name === "grid" && (
        <>
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
        </>
      )}
      {name === "target" && (
        <>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="3.5" />
          <path d="M12 2v3M22 12h-3M12 22v-3M2 12h3" />
        </>
      )}
      {name === "social" && (
        <>
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </>
      )}
      {name === "shield" && (
        <>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </>
      )}
      {name === "chart" && (
        <>
          <path d="M4 19.5h16M5.5 17l4.2-5 3.2 2.5L19 7" />
          <path d="M15.5 7H19v3.5" />
        </>
      )}
    </svg>
  );
}

export default function PpcPage() {
  const { openContactModal } = useContactModal();

  return (
    <div
      id="ppc-master"
      className="antialiased text-white bg-[#020617] font-sans selection:bg-[#3F8BF9] selection:text-white"
      style={{ width: "100%", position: "relative", overflowX: "clip" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ── Hero Section ── */}
      <section id="top" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Paid Media &amp; Performance Advertising</p>
          <h1>
            Paid Media Built Around Intent,
            <br />
            <span className="hero-gradient-blue">Efficiency</span> and{" "}
            <span className="hero-gradient-pink">Scale</span>
          </h1>
          <p className="hero-lede">
            We help advertisers plan, launch, and optimize Google, Meta, and PPC campaigns with a clear focus on audience intent, spend efficiency, conversion quality, and measurable business outcomes.
          </p>
          <div className="hero-actions">
            <button
              className="button button-primary cursor-pointer"
              type="button"
              onClick={() => openContactModal()}
              style={{ cursor: "pointer" }}
            >
              Start a Conversation <span aria-hidden="true">→</span>
            </button>
          </div>
          <div className="assurances">
            <span>High-intent targeting</span>
            <span>Spend efficiency</span>
            <span>Dedicated campaign management</span>
          </div>
        </div>

        <PpcDecisionConsole />
      </section>

      {/* ── Proof Strip ── */}
      <section className="proof-strip" aria-label="AscendiaPrime PPC proof points">
        {proofPoints.map((item) => (
          <div key={item.metric}>
            <strong>{item.metric}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      {/* ── Value Proposition (Fit Section) ── */}
      <section className="content-section fit-section">
        <div className="section-heading">
          <p className="section-kicker">Performance-First Paid Media</p>
          <h2>Paid media works best when every click has a purpose</h2>
          <p>
            Paid media is not just about increasing traffic. It is about reaching users with the right intent, placing the right message in front of them, and ensuring every campaign is connected to a measurable business objective.
          </p>
        </div>
        <div className="fit-grid">
          {principles.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Capabilities Grid (6 Cards) ── */}
      <section id="capabilities" className="content-section">
        <div className="section-heading centered">
          <p className="section-kicker">Full-Funnel Paid Advertising</p>
          <h2>Google, Meta &amp; PPC Growth Capabilities</h2>
          <p>
            A structured paid media approach designed to help advertisers capture demand, create engagement, and improve conversion outcomes.
          </p>
        </div>
        <div className="capability-grid">
          {capabilities.map(([icon, title, copy]) => (
            <article key={title}>
              <span className="feature-icon">
                <Icon name={icon} />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Best-Fit Campaigns & Formats ── */}
      <section className="content-section capability-section">
        <div className="capability-card">
          <p className="section-kicker">High-Impact Objectives</p>
          <h2>Best-Fit Campaigns</h2>
          <div className="tag-list">
            {bestFitCampaigns.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="capability-card">
          <p className="section-kicker">Multi-Platform Reach</p>
          <h2>Channels &amp; Formats</h2>
          <div className="tag-list vertical-tags">
            {channels.map((channel) => (
              <span key={channel}>{channel}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Section (6 Steps Flowchart) ── */}
      <section id="how-it-works" className="content-section process-section">
        <div className="section-heading centered">
          <p className="section-kicker">Structured Execution</p>
          <h2>How We Build Paid Media Campaigns</h2>
          <p>
            A structured process to plan, launch, monitor, and improve campaigns with greater clarity and cost efficiency.
          </p>
        </div>
        <div className="vertical-timeline">
          {processSteps.map(([number, title, copy], index) => {
            const isLeft = index % 2 === 0;
            return (
              <div className="vertical-timeline-item" key={number}>
                {isLeft ? (
                  <>
                    <div className="timeline-content left">
                      <h3>{title}</h3>
                      <p>{copy}</p>
                    </div>
                    <div className="timeline-number">{number}</div>
                  </>
                ) : (
                  <>
                    <div className="timeline-number">{number}</div>
                    <div className="timeline-content right">
                      <h3>{title}</h3>
                      <p>{copy}</p>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Governance & Controls ── */}
      <section className="content-section control-section">
        <div>
          <p className="section-kicker">Campaign Governance</p>
          <h2>Designed for Smarter Spend Decisions</h2>
          <p>
            Paid media can scale quickly, but without the right structure it can also create wasted spend. We support paid media campaigns with clear monitoring, performance review, and optimization insights.
          </p>
        </div>
        <ul>
          <li>
            <span>✓</span> Budget and spend monitoring with pace tracking
          </li>
          <li>
            <span>✓</span> Campaign-level performance and search term reviews
          </li>
          <li>
            <span>✓</span> Audience and keyword negative matching
          </li>
          <li>
            <span>✓</span> Creative variation and messaging testing
          </li>
          <li>
            <span>✓</span> Landing page and conversion event alignment
          </li>
          <li>
            <span>✓</span> CPA, ROAS, and conversion quality optimization
          </li>
        </ul>
      </section>

      {/* ── FAQ Section (2-Column Sticky Accordion Matching Affiliate) ── */}
      <section id="faq" className="content-section faq-section">
        <div className="section-heading">
          <p className="section-kicker">Commercial Questions</p>
          <h2>What advertisers usually need to know</h2>
          <p>
            Clear answers before activation help create stronger campaign setups and better long-term performance.
          </p>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary>
                {question}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── Contact / CTA Section (Centered Card Matching Affiliate) ── */}
      <section id="contact" className="contact-section">
        <div className="contact-content">
          <p className="section-kicker">Start with campaign fit</p>
          <h2>Tell us what you need your paid media to achieve</h2>
          <p>
            Share your target audience, platforms, monthly budget, and growth targets. We will review your current setup and outline actionable opportunities.
          </p>
        </div>
        <div className="contact-actions">
          <button
            type="button"
            className="button button-primary cursor-pointer"
            onClick={() => openContactModal()}
            style={{ cursor: "pointer" }}
          >
            Discuss your campaign <span aria-hidden="true">→</span>
          </button>
          <small>contact@ascendiaprime.com</small>
        </div>
      </section>
    </div>
  );
}
