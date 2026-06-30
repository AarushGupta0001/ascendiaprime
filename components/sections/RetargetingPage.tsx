"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import "@/styles/retargeting.css";

import ContactForm from "@/components/forms/ContactForm";

import PageRevealEffects from "@/components/effects/PageRevealEffects";
import FaqSection from "@/components/sections/FaqSection";

const MATRIX_ITEMS = [
  { label: "Cart Abandoners", badge: "High" },
  { label: "Product Viewers", badge: "Mid" },
  { label: "Lead Form Starters", badge: "High" },
  { label: "CRM / First-Party", badge: "Match" },
  { label: "Frequency Cap", badge: "3x/Day" },
  { label: "Suppression Rules", badge: "Auto" },
  { label: "Sequential Flows", badge: "Active" },
  { label: "Placement Safe", badge: "100%" },
  { label: "Google Display & YT", badge: "Bidding" },
  { label: "Meta & Instagram", badge: "Dynamic" },
  { label: "Premium Publisher", badge: "Direct" },
  { label: "LinkedIn Network", badge: "B2B" },
] as const;

function isMatrixItemActive(index: number, cycleIndex: number) {
  const column = Math.floor(index / 4);
  const row = index % 4;
  const activeRow = (cycleIndex + column) % 4;
  return row === activeRow;
}

export default function RetargetingPage() {
  const [cycleIndex, setCycleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCycleIndex((prev) => prev + 1);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <PageRevealEffects>
      <div id="retargeting-master" className="page-master">
      <div className="hero">
  <div className="wrap">
    <div className="hero-grid">
      <div className="hero-content">
        <div className="hero-kicker">
          <span className="dot"></span>
          <span className="t-eyebrow">Performance Marketing &amp; Partner Growth</span>
        </div>
        <h1 className="t-mega">
          Retargeting Campaigns Built Around <span className="grad-text">Intent and Control</span>
        </h1>
        <p className="t-body">
          AscendiaPrime helps advertisers re-engage high-intent audiences through structured retargeting strategies built around audience behaviour, frequency control, transparent tracking, and measurable conversion recovery.
        </p>
        <div className="hero-ctas">
          <Link href="#contact" className="btn btn-fill">Submit Advertiser Enquiry</Link>
          <Link href="#contact" className="btn btn-ghost">Start a Conversation</Link>
        </div>
      </div>
        
      <div className="intent-matrix" aria-label="AscendiaPrime Retargeting Pipeline Optimizer">
        <div className="matrix-header">
          <div className="matrix-status">
            <span className="matrix-pulse-dot"></span>
            <span>AscendiaPrime Engine Active</span>
          </div>
          <span className="t-eyebrow matrix-version">Control Panel v4.1</span>
        </div>

        <div className="matrix-grid">
          <div className="matrix-col col-signals">
            <div className="matrix-col-title">
              <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Audience Signals
            </div>
            {MATRIX_ITEMS.slice(0, 4).map((item, index) => (
              <div
                key={item.label}
                className={`matrix-item${isMatrixItemActive(index, cycleIndex) ? " active-node" : ""}`}
              >
                <span>{item.label}</span>
                <span className="value-badge">{item.badge}</span>
              </div>
            ))}
          </div>

          <div className="matrix-col col-controls">
            <div className="matrix-col-title">
              <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              Delivery Controls
            </div>
            {MATRIX_ITEMS.slice(4, 8).map((item, index) => (
              <div
                key={item.label}
                className={`matrix-item${isMatrixItemActive(index + 4, cycleIndex) ? " active-node" : ""}`}
              >
                <span>{item.label}</span>
                <span className="value-badge">{item.badge}</span>
              </div>
            ))}
          </div>

          <div className="matrix-col col-channels">
            <div className="matrix-col-title">
              <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
              Recovery Channels
            </div>
            {MATRIX_ITEMS.slice(8, 12).map((item, index) => (
              <div
                key={item.label}
                className={`matrix-item${isMatrixItemActive(index + 8, cycleIndex) ? " active-node" : ""}`}
              >
                <span>{item.label}</span>
                <span className="value-badge">{item.badge}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="matrix-footer">
          <div className="matrix-stat-box">
            <h4>Recovery Performance</h4>
            <p>
              <span>+24.8%</span> Conversion Lift
            </p>
          </div>
          <div className="matrix-stat-box">
            <h4>Ad Fatigue Shield</h4>
            <p>Active Suppression</p>
          </div>
          <div className="matrix-stat-box">
            <h4>Tracking Accuracy</h4>
            <p>Server-Side Match</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<section className="proof-strip">
  <div className="wrap">
    <div className="proof-grid">
      <div className="proof-card">
        <h3>Intent-Based Segmentation</h3>
        <p>Audiences structured by behaviour, engagement depth, and funnel stage.</p>
      </div>
      <div className="proof-card">
        <h3>Controlled Re-Engagement</h3>
        <p>Frequency caps, exclusions, and message sequencing to avoid overexposure.</p>
      </div>
      <div className="proof-card">
        <h3>Transparent Performance Visibility</h3>
        <p>Reporting visibility across audience activity, placements, conversions, and campaign movement.</p>
      </div>
    </div>
  </div>
</section>

<section className="intro-section">
  <div className="wrap">
    <div className="split-section">
      <div>
        <span className="t-eyebrow">Strategic Retargeting</span>
        <h2 className="t-section">Re-Engagement Should Feel Relevant, Not Repetitive</h2>
      </div>
      <div className="split-copy">
        <p>Retargeting works best when it respects the user journey. A visitor who browsed a product, abandoned a cart, or started a form should not be treated the same way as someone who briefly landed on a page and left.</p>
        <p>At AscendiaPrime, we build retargeting campaigns around audience intent, timing, message relevance, and delivery control, helping brands reconnect with users where there is a genuine opportunity to bring them back.</p>
      </div>
    </div>
  </div>
</section>

<section className="services">
  <div className="wrap">
    <div className="section-header">
      <span className="t-eyebrow">Core Capabilities</span>
      <h2 className="t-section">Retargeting Growth Capabilities</h2>
      <p className="t-body">A structured approach to reconnect with high-intent users and improve conversion opportunities across the customer journey.</p>
    </div>
      
    <div className="rt-grid">
      <div className="rt-card">
        <div className="rt-icon"><svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M12 20l9-5-9-5-9 5 9 5z"/><path d="M12 12l9-5-9-5-9 5 9 5z"/><path d="M12 22v-7"/></svg></div>
        <h3 className="rt-title">Pixel &amp; Server-Side Setup</h3>
        <p className="rt-desc">Align tracking, tags, and events with campaign goals and reporting needs.</p>
      </div>
        
      <div className="rt-card">
        <div className="rt-icon"><svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg></div>
        <h3 className="rt-title">Audience Segmentation</h3>
        <p className="rt-desc">Build audience groups based on behaviour, engagement depth, and funnel stage.</p>
      </div>

      <div className="rt-card">
        <div className="rt-icon"><svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg></div>
        <h3 className="rt-title">Sequential Messaging</h3>
        <p className="rt-desc">Serve relevant messages based on where users are in the journey.</p>
      </div>

      <div className="rt-card">
        <div className="rt-icon"><svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M3 7h18"/><path d="M6 7v13h12V7"/><path d="M9 7a3 3 0 116 0"/></svg></div>
        <h3 className="rt-title">Dynamic Product Retargeting</h3>
        <p className="rt-desc">Reconnect users with products, categories, or offers they previously viewed.</p>
      </div>

      <div className="rt-card">
        <div className="rt-icon"><svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><path d="M12 8v4l3 3"/></svg></div>
        <h3 className="rt-title">Frequency &amp; Exclusion Control</h3>
        <p className="rt-desc">Manage exposure with frequency caps, exclusions, and converted-user suppression.</p>
      </div>

      <div className="rt-card">
        <div className="rt-icon"><svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 010 18"/><path d="M12 3a14 14 0 000 18"/></svg></div>
        <h3 className="rt-title">Cross-Channel Retargeting</h3>
        <p className="rt-desc">Re-engage audiences across relevant paid, programmatic, social, and publisher environments.</p>
      </div>
    </div>
  </div>
</section>

<section className="signals-section">
  <div className="wrap">
    <div className="section-header">
      <span className="t-eyebrow">Audience Signals</span>
      <h2 className="t-section">Audience Signals We Can Work With</h2>
      <p className="t-body">Retargeting becomes more effective when audience groups are built around real behaviour and clear intent signals.</p>
    </div>
    <div className="chip-wrap">
      <span className="chip">Website Visitors</span>
      <span className="chip">Product Viewers</span>
      <span className="chip">Cart Abandoners</span>
      <span className="chip">Checkout Drop-Offs</span>
      <span className="chip">Lead Form Starters</span>
      <span className="chip">Returning Users</span>
      <span className="chip">High-Engagement Visitors</span>
      <span className="chip">Category Viewers</span>
      <span className="chip">Offer Page Visitors</span>
      <span className="chip">Past Converters</span>
      <span className="chip">Lookalike Audiences</span>
      <span className="chip">CRM / First-Party Segments</span>
    </div>
  </div>
</section>

<section className="process-section">
  <div className="wrap">
    <div className="section-header">
      <span className="t-eyebrow">Process</span>
      <h2 className="t-section">How We Build Retargeting Campaigns</h2>
      <p className="t-body">A controlled process to define audiences, manage delivery, and optimize conversion recovery with better visibility.</p>
    </div>

    <div className="vertical-timeline">
      <div className="vertical-timeline-item">
        <div className="timeline-content left">
          <h3>Define the Retargeting Objective</h3>
          <p>Identify the campaign goal, conversion event, audience size, sales cycle, and key drop-off points.</p>
        </div>
        <div className="timeline-number">01</div>
      </div>
        
      <div className="vertical-timeline-item">
        <div className="timeline-number">02</div>
        <div className="timeline-content right">
          <h3>Align Tracking and Events</h3>
          <p>Review pixel, tag, server-side event, and conversion tracking requirements.</p>
        </div>
      </div>

      <div className="vertical-timeline-item">
        <div className="timeline-content left">
          <h3>Segment the Audience Journey</h3>
          <p>Group users by behaviour, engagement depth, intent level, and funnel stage.</p>
        </div>
        <div className="timeline-number">03</div>
      </div>

      <div className="vertical-timeline-item">
        <div className="timeline-number">04</div>
        <div className="timeline-content right">
          <h3>Build Message Sequences</h3>
          <p>Create messages based on user behaviour, from reminders to reassurance and offer-led recovery.</p>
        </div>
      </div>

      <div className="vertical-timeline-item">
        <div className="timeline-content left">
          <h3>Launch With Delivery Controls</h3>
          <p>Apply frequency caps, exclusions, pacing, placement visibility, and suppression rules.</p>
        </div>
        <div className="timeline-number">05</div>
      </div>

      <div className="vertical-timeline-item">
        <div className="timeline-number">06</div>
        <div className="timeline-content right">
          <h3>Optimize for Recovery and Quality</h3>
          <p>Monitor conversions, audience response, frequency, placements, and incremental value.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="trust-section">
  <div className="wrap">
    <div className="trust-panel">
      <div className="trust-copy">
        <span className="t-eyebrow">Transparency &amp; Control</span>
        <h2 className="t-section">Built for Responsible Re-Engagement</h2>
        <p>Retargeting requires trust. Advertisers need confidence that audience activity is managed responsibly, delivery is controlled, and campaign visibility is not treated as a black box.</p>
        <p>AscendiaPrime supports retargeting campaigns with clear implementation, source visibility, audience rules, reporting, and optimization review.</p>
      </div>
      <ul className="check-list">
        <li>Pixel, tag, and event alignment</li>
        <li>Audience rule definition</li>
        <li>Frequency and exclusion controls</li>
        <li>Converted-user suppression</li>
        <li>Placement and source visibility</li>
        <li>Reporting and validation support</li>
        <li>Compliance alignment</li>
      </ul>
    </div>
  </div>
</section>

<section className="usecase-section">
  <div className="wrap">
    <div className="usecase-grid">
      <div className="usecase-panel">
        <h3>Retargeting Use Cases</h3>
        <div className="chip-wrap">
          <span className="chip">Cart Abandonment Recovery</span>
          <span className="chip">Product View Retargeting</span>
          <span className="chip">Lead Form Recovery</span>
          <span className="chip">Checkout Drop-Off Recovery</span>
          <span className="chip">Offer Reminder Campaigns</span>
          <span className="chip">Cross-Sell and Upsell Retargeting</span>
          <span className="chip">Seasonal Promotion Retargeting</span>
          <span className="chip">High-Intent Visitor Re-Engagement</span>
          <span className="chip">CRM / First-Party Audience Activation</span>
        </div>
      </div>
      <div className="usecase-panel">
        <h3>Built for Multiple Verticals</h3>
        <div className="chip-wrap">
          <span className="chip">E-commerce &amp; D2C</span>
          <span className="chip">Fashion &amp; Lifestyle</span>
          <span className="chip">Beauty &amp; Wellness</span>
          <span className="chip">Health &amp; Supplements</span>
          <span className="chip">Technology &amp; Electronics</span>
          <span className="chip">Travel &amp; Hospitality</span>
          <span className="chip">Finance &amp; Insurance</span>
          <span className="chip">Education &amp; Lead Generation</span>
          <span className="chip">Subscription Brands</span>
          <span className="chip">B2B &amp; SaaS</span>
        </div>
      </div>
    </div>
  </div>
</section>

<FaqSection
  header={
    <div className="mb-12 text-center">
      <span className="t-eyebrow block mb-4">Enquiries</span>
      <h2 className="text-4xl md:text-5xl font-bold text-white">Common Questions</h2>
    </div>
  }
  items={[
    {
      question: "What is a retargeting campaign?",
      answer:
        "A retargeting campaign is a digital advertising strategy used to re-engage users who have previously visited a website, viewed a product, started a form, added items to cart, or shown interest without completing the desired action.",
    },
    {
      question: "How does AscendiaPrime build retargeting audiences?",
      answer:
        "We build audiences based on user behaviour, engagement depth, funnel stage, page activity, cart activity, form activity, and available first-party signals, depending on the advertiser's setup and campaign goals.",
    },
    {
      question: "How do you avoid showing ads too often?",
      answer:
        "We use frequency controls, audience exclusions, pacing, converted-user suppression, and segment-based messaging to reduce overexposure and keep retargeting activity more relevant.",
    },
    {
      question: "Can retargeting support both e-commerce and lead generation?",
      answer:
        "Yes. Retargeting can be used for cart recovery, product reminders, lead form recovery, offer reminders, sign-up completion, and other conversion-focused objectives.",
    },
    {
      question: "Do advertisers get visibility into retargeting performance?",
      answer:
        "Yes. Advertisers can receive reporting visibility across audience activity, placements, traffic movement, conversions, and optimization insights based on the campaign setup.",
    },
    {
      question: "Is retargeting compliant with privacy expectations?",
      answer:
        "Retargeting should be implemented with proper tracking alignment, platform policies, consent requirements where applicable, and agreed campaign guidelines. AscendiaPrime works with advertisers to align setup and execution responsibly.",
    },
  ]}
/>

<section className="contact-section" id="contact">
  <div className="wrap">
    <div className="contact-intro">
      <span className="t-eyebrow">Final CTA</span>
      <h2 className="t-section">Ready to Recover High-Intent Opportunities?</h2>
      <p>Let's explore how AscendiaPrime can help your brand re-engage interested users, improve conversion recovery, and scale retargeting with greater transparency and control.</p>
      <div className="contact-actions">
        <Link href="#contact" className="btn btn-fill">Submit Advertiser Enquiry</Link>
        <Link href="#contact" className="btn btn-ghost">Start a Conversation</Link>
      </div>
    </div>
      
    <div className="contact-container contact-form-shell relative p-6 md:p-10 rounded-[1.75rem]">
      <ContactForm variant="homepage" />
    </div>
  </div>
</section>
    </div>
    </PageRevealEffects>
  );
}
