"use client";

import Link from "next/link";

import "@/styles/retargeting.css";

import ContactForm from "@/components/forms/ContactForm";

import PageRevealEffects from "@/components/effects/PageRevealEffects";

export default function RetargetingPage() {
  return (
    <PageRevealEffects>
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
        
      <div className="intent-loop" aria-label="Intent Re-Engagement Loop">
        <div className="loop-panel left">
          <h3>Audience Signals</h3>
          <span className="loop-chip">Product Viewers</span>
          <span className="loop-chip">Cart Abandoners</span>
          <span className="loop-chip">Lead Form Starters</span>
          <span className="loop-chip">Returning Visitors</span>
          <span className="loop-chip">High Engagement Visitors</span>
          <span className="loop-chip">CRM / First-Party Audiences</span>
        </div>
        <div className="loop-panel right">
          <h3>Delivery Controls</h3>
          <span className="loop-chip">Frequency Cap</span>
          <span className="loop-chip">Exclusions</span>
          <span className="loop-chip">Sequential Messaging</span>
          <span className="loop-chip">Placement Visibility</span>
          <span className="loop-chip">Audience Suppression</span>
          <span className="loop-chip">Smart Bidding &amp; Optimization</span>
        </div>
        <div className="signal-line left"></div>
        <div className="signal-line right"></div>
        <div className="loop-orbit"></div>
        <div className="loop-engine">
          <strong>AscendiaPrime</strong>
          <span>Retargeting Engine</span>
        </div>
        <div className="loop-node node-1" data-step="1">Website Visit</div>
        <div className="loop-node node-2" data-step="2">Product / Page Engagement</div>
        <div className="loop-node node-3" data-step="3">Audience Segment</div>
        <div className="loop-node node-4" data-step="4">Retargeting Message</div>
        <div className="loop-node node-5" data-step="5">Return Visit</div>
        <div className="loop-node node-6" data-step="6">Conversion</div>
        <div className="outcome-strip">
          <span>Recovery of Lost Opportunities</span>
          <span>Improved Conversion Rates</span>
          <span>Better Campaign Efficiency</span>
        </div>
        <div className="channel-dock">
          <h3>Delivery Channels</h3>
          <div className="channel-grid">
            <span className="channel-badge">f</span>
            <span className="channel-badge">IG</span>
            <span className="channel-badge">G</span>
            <span className="channel-badge">YT</span>
            <span className="channel-badge">in</span>
            <span className="channel-badge">+</span>
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

<section className="faq-section">
  <div className="wrap">
    <div className="section-header">
      <span className="t-eyebrow">Enquiries</span>
      <h2 className="t-section">Common Questions</h2>
    </div>
      
    <div className="faq-container">
      <div className="fq">
        <button className="fq-btn" aria-expanded="false" aria-controls="faq-1">What is a retargeting campaign? <span className="fq-icon">+</span></button>
        <div className="fq-body" id="faq-1">A retargeting campaign is a digital advertising strategy used to re-engage users who have previously visited a website, viewed a product, started a form, added items to cart, or shown interest without completing the desired action.</div>
      </div>
      <div className="fq">
        <button className="fq-btn" aria-expanded="false" aria-controls="faq-2">How does AscendiaPrime build retargeting audiences? <span className="fq-icon">+</span></button>
        <div className="fq-body" id="faq-2">We build audiences based on user behaviour, engagement depth, funnel stage, page activity, cart activity, form activity, and available first-party signals, depending on the advertiser's setup and campaign goals.</div>
      </div>
      <div className="fq">
        <button className="fq-btn" aria-expanded="false" aria-controls="faq-3">How do you avoid showing ads too often? <span className="fq-icon">+</span></button>
        <div className="fq-body" id="faq-3">We use frequency controls, audience exclusions, pacing, converted-user suppression, and segment-based messaging to reduce overexposure and keep retargeting activity more relevant.</div>
      </div>
      <div className="fq">
        <button className="fq-btn" aria-expanded="false" aria-controls="faq-4">Can retargeting support both e-commerce and lead generation? <span className="fq-icon">+</span></button>
        <div className="fq-body" id="faq-4">Yes. Retargeting can be used for cart recovery, product reminders, lead form recovery, offer reminders, sign-up completion, and other conversion-focused objectives.</div>
      </div>
      <div className="fq">
        <button className="fq-btn" aria-expanded="false" aria-controls="faq-5">Do advertisers get visibility into retargeting performance? <span className="fq-icon">+</span></button>
        <div className="fq-body" id="faq-5">Yes. Advertisers can receive reporting visibility across audience activity, placements, traffic movement, conversions, and optimization insights based on the campaign setup.</div>
      </div>
      <div className="fq">
        <button className="fq-btn" aria-expanded="false" aria-controls="faq-6">Is retargeting compliant with privacy expectations? <span className="fq-icon">+</span></button>
        <div className="fq-body" id="faq-6">Retargeting should be implemented with proper tracking alignment, platform policies, consent requirements where applicable, and agreed campaign guidelines. AscendiaPrime works with advertisers to align setup and execution responsibly.</div>
      </div>
    </div>
  </div>
</section>

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
      
    <div className="contact-container">
      <ContactForm />
    </div>
  </div>
</section>
    </PageRevealEffects>
  );
}
