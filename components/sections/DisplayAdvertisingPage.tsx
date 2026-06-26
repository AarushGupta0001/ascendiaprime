"use client";

import "@/styles/display-advertising.css";

import ContactForm from "@/components/forms/ContactForm";

import PageRevealEffects from "@/components/effects/PageRevealEffects";

export default function DisplayAdvertisingPage() {
  return (
    <PageRevealEffects>
      <div style={{ position: "fixed", top: "0", left: "0", width: "100vw", height: "100vh", backgroundColor: "#020617", zIndex: "-9999", pointerEvents: "none" }}></div>
<div id="display-master">
  <div id="contact-modal" className="fixed inset-0 z-[100] hidden items-center justify-center p-4 sm:p-6 opacity-0 transition-opacity duration-300">
    <div className="absolute inset-0 bg-[#020617]/80 backdrop-blur-md modal-close-overlay cursor-pointer"></div>
    <div className="relative w-full max-w-2xl bg-[#101930] border border-[#7469F8]/30 rounded-3xl p-8 sm:p-12 shadow-[0_0_50px_rgba(116,105,248,0.2)] transform scale-95 transition-transform duration-300 popup-content overflow-y-auto max-h-[90vh]">
      <button className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors modal-close-btn bg-white/5 hover:bg-white/10 p-2 rounded-full cursor-pointer z-50" type="button" aria-label="Close form">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-white mb-3">Lets talk growth</h3>
        <p className="text-slate-400 text-sm">Fill out the form below and our team will get back to you shortly.</p>
      </div>
      <div className="w-full text-left">
        <ContactForm />
      </div>
    </div>
  </div>

  <main className="relative z-10">
    <section className="min-h-[90vh] flex items-center py-28 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-14 items-center w-full">
        <div className="lg:col-span-6 reveal-up">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#3F8BF9]/30 bg-[#3F8BF9]/10 text-[#3F8BF9] text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#E057D8] animate-pulse"></span>
            Programmatic Branding & Awareness
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-[4.8rem] font-black leading-[1.05] text-white tracking-tight mb-6">
            Display Advertising for <span className="text-gradient-brand">Meaningful Brand Visibility</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-xl mb-10 leading-relaxed">
            AscendiaPrime helps brands build visual presence across relevant digital environments through display campaigns planned around audience context, creative consistency, frequency control, and transparent media delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="open-contact-modal btn-glow w-full sm:w-auto" type="button">Explore Media Solutions</button>
            <button className="open-contact-modal btn-glow secondary w-full sm:w-auto" type="button">Start a Conversation</button>
          </div>
        </div>

        <div className="lg:col-span-6 reveal-up">
          <div className="device-stage">
            <div className="hub-spine"></div>
            <div className="display-line line-desktop"></div>
            <div className="display-line line-content"></div>
            <div className="display-line line-commerce"></div>
            <div className="display-line line-mobile"></div>
            <div className="display-line line-app"></div>
            <div className="display-line line-audience"></div>

            <div className="display-label label-desktop">Desktop<br />Display</div>
            <div className="display-label label-content">Content Page<br />Banner</div>
            <div className="display-label label-commerce">Commerce<br />Media</div>
            <div className="display-label label-mobile">Mobile<br />Display</div>
            <div className="display-label label-app">In-App<br />Display</div>
            <div className="display-label label-audience">Audience<br />Signals</div>

            <div className="display-node">
              <img className="display-logo" src="/images/logos/ascendiaprime-logo.png" alt="AscendiaPrime"  />
              <strong>AscendiaPrime</strong>
            </div>

            <div className="display-card desktop-card">
              <div className="screen-inner">
                <div className="screen-nav"><span>Home</span><span>World</span><span>Business</span><span>Tech</span></div>
                <div className="news-title">Market rally boosts investor confidence to highest level in years</div>
                <div className="ad-banner desktop-ad"></div>
                <div className="top-stories">
                  <div className="story-thumb"></div>
                  <div className="story-thumb"></div>
                  <div className="story-thumb"></div>
                </div>
              </div>
            </div>

            <div className="display-card content-card">
              <div className="screen-inner">
                <div className="content-image"></div>
                <div className="screen-lines">
                  <div className="screen-line"></div>
                  <div className="screen-line mid"></div>
                </div>
                <div className="ad-banner content-ad"></div>
              </div>
            </div>

            <div className="display-card commerce-card">
              <div className="screen-inner">
                <div className="commerce-top">
                  <div className="product-image"></div>
                  <div>
                    <div className="screen-line mid"></div>
                    <div className="rating">★★★★★</div>
                    <div className="price">$199.99</div>
                    <div className="add-cart">Add to Cart</div>
                  </div>
                </div>
                <div className="ad-banner commerce-ad"></div>
              </div>
            </div>

            <div className="display-card phone-card mobile-card">
              <div className="screen-inner">
                <div className="screen-lines">
                  <div className="screen-line"></div>
                  <div className="screen-line mid"></div>
                  <div className="screen-line short"></div>
                </div>
                <div className="ad-banner phone-ad"></div>
                <div className="screen-lines">
                  <div className="screen-line"></div>
                  <div className="screen-line mid"></div>
                </div>
              </div>
            </div>

            <div className="display-card phone-card app-card">
              <div className="screen-inner">
                <div className="screen-lines">
                  <div className="screen-line short"></div>
                  <div className="screen-line"></div>
                </div>
                <div className="ad-banner phone-ad"></div>
                <div className="screen-lines">
                  <div className="screen-line"></div>
                  <div className="screen-line mid"></div>
                  <div className="screen-line short"></div>
                </div>
              </div>
            </div>

            <div className="signal-orbit">
              <div className="signal-icon sig-location"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10.5h.01"/></svg></div>
              <div className="signal-icon sig-users"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11a4 4 0 1 0-8 0m8 0a4 4 0 1 1 4 4m-4-4a4 4 0 0 0-4 4m-6 4a6 6 0 0 1 12 0M18 19a4 4 0 0 0-3-3.87"/></svg></div>
              <div className="signal-icon sig-cart"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h2l2.5 12h10L20 8H7M9 20h.01M17 20h.01"/></svg></div>
              <div className="signal-icon sig-chart"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 19h16M7 16v-5M12 16V6M17 16v-8"/></svg></div>
              <div className="signal-icon sig-screen"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5h16v11H4zM9 20h6"/></svg></div>
              <div className="signal-icon sig-search"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21-4.3-4.3M10.8 18a7.2 7.2 0 1 1 0-14.4 7.2 7.2 0 0 1 0 14.4Z"/></svg></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="pb-20 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-5 reveal-up">
        <div className="glass-card glass-card-hover theme-blue rounded-3xl p-6">
          <div className="text-[#3F8BF9] font-bold tracking-widest text-xs uppercase mb-3">Audience-Relevant Reach</div>
          <p className="text-slate-200 leading-relaxed">Reach users across digital environments aligned with campaign goals and audience context.</p>
        </div>
        <div className="glass-card glass-card-hover theme-purple rounded-3xl p-6">
          <div className="text-[#AB57F3] font-bold tracking-widest text-xs uppercase mb-3">Creative Visibility</div>
          <p className="text-slate-200 leading-relaxed">Support brand recall, product awareness, and message consistency through visual formats.</p>
        </div>
        <div className="glass-card glass-card-hover theme-pink rounded-3xl p-6">
          <div className="text-[#E057D8] font-bold tracking-widest text-xs uppercase mb-3">Controlled Media Delivery</div>
          <p className="text-slate-200 leading-relaxed">Manage placements, frequency, pacing, and reporting visibility across display activity.</p>
        </div>
      </div>
    </section>

    <section className="py-24 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-20 reveal-up">
          <div className="lg:col-span-5">
            <div className="text-[#3F8BF9] font-bold tracking-widest text-sm uppercase mb-4">Strategic Display Planning</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">Display Works Best When Visibility Has <span className="text-gradient-brand">Context</span></h2>
          </div>
          <div className="lg:col-span-7 text-slate-200 text-lg leading-relaxed space-y-5">
            <p>Display advertising is not simply about placing banners across the web. Its value comes from showing the right creative in the right environment, with the right frequency, to audiences that are more likely to notice, remember, and engage.</p>
            <p>AscendiaPrime approaches display media with structure, combining audience planning, placement relevance, creative alignment, and delivery monitoring to help brands build awareness with greater control.</p>
          </div>
        </div>

        <div className="text-center mb-14 max-w-4xl mx-auto reveal-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Display Advertising <span className="text-gradient-brand">Capabilities</span></h2>
          <p className="text-[#AB57F3] text-lg leading-relaxed">A focused display media approach designed to build visibility, improve recall, and support controlled campaign delivery.</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 reveal-up">
          <div className="glass-card glass-card-hover theme-blue rounded-3xl p-7"><h3 className="text-2xl font-bold text-white mb-3">Audience Planning</h3><p className="text-slate-300 leading-relaxed">Define audience groups based on geography, interests, behaviours, context, and campaign objectives.</p></div>
          <div className="glass-card glass-card-hover theme-indigo rounded-3xl p-7"><h3 className="text-2xl font-bold text-white mb-3">Contextual Placement Strategy</h3><p className="text-slate-300 leading-relaxed">Align display activity with relevant content categories, environments, and audience moments.</p></div>
          <div className="glass-card glass-card-hover theme-purple rounded-3xl p-7"><h3 className="text-2xl font-bold text-white mb-3">Banner & Responsive Formats</h3><p className="text-slate-300 leading-relaxed">Support standard, responsive, animated, and rich display formats across digital placements.</p></div>
          <div className="glass-card glass-card-hover theme-pink rounded-3xl p-7"><h3 className="text-2xl font-bold text-white mb-3">Frequency & Pacing Control</h3><p className="text-slate-300 leading-relaxed">Manage exposure, campaign pacing, and delivery rhythm to avoid excessive repetition.</p></div>
          <div className="glass-card glass-card-hover theme-blue rounded-3xl p-7"><h3 className="text-2xl font-bold text-white mb-3">Creative Message Alignment</h3><p className="text-slate-300 leading-relaxed">Ensure display creative, offer, CTA, and landing experience follow a consistent campaign story.</p></div>
          <div className="glass-card glass-card-hover theme-indigo rounded-3xl p-7"><h3 className="text-2xl font-bold text-white mb-3">Reporting & Optimization</h3><p className="text-slate-300 leading-relaxed">Review delivery, placements, reach, clicks, engagement, and media signals for ongoing improvement.</p></div>
        </div>
      </div>
    </section>

    <section className="py-24 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12 max-w-4xl mx-auto reveal-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Display Environments <span className="text-gradient-brand">We Support</span></h2>
          <p className="text-[#7469F8] text-lg">Display activity can be structured across different placements, devices, and media environments depending on the campaign objective.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-24 reveal-up">
          <span className="chip">Desktop Display</span><span className="chip">Mobile Display</span><span className="chip">In-App Display</span><span className="chip">Responsive Display Units</span><span className="chip">Rich Media Units</span><span className="chip">Contextual Placements</span><span className="chip">Prospecting Campaigns</span><span className="chip">Awareness Campaigns</span><span className="chip">Geo-Targeted Campaigns</span><span className="chip">Frequency-Controlled Delivery</span>
        </div>

        <div className="text-center mb-20 max-w-4xl mx-auto reveal-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How We Build Display <span className="text-gradient-brand">Advertising Campaigns</span></h2>
          <p className="text-[#7469F8] text-lg">A structured process to plan, activate, monitor, and refine display media with better visibility.</p>
        </div>
        <div className="vertical-timeline reveal-up">
          <div className="vertical-timeline-item"><div className="timeline-content left"><h3>Define the Media Objective</h3><p>Clarify the brand goal, audience, geography, creative direction, budget, and awareness expectation.</p></div><div className="timeline-number">01</div></div>
          <div className="vertical-timeline-item"><div className="timeline-number">02</div><div className="timeline-content right"><h3>Map Audience and Context</h3><p>Identify audience segments, content categories, devices, placements, and media environments.</p></div></div>
          <div className="vertical-timeline-item"><div className="timeline-content left"><h3>Align Creative and Formats</h3><p>Review banner sizes, responsive formats, creative message, CTA direction, and landing page consistency.</p></div><div className="timeline-number">03</div></div>
          <div className="vertical-timeline-item"><div className="timeline-number">04</div><div className="timeline-content right"><h3>Launch With Delivery Controls</h3><p>Activate campaigns with pacing, frequency, placement review, and brand-safety considerations.</p></div></div>
          <div className="vertical-timeline-item"><div className="timeline-content left"><h3>Monitor Media Signals</h3><p>Review impressions, reach, clicks, viewability, frequency, placement quality, and engagement movement.</p></div><div className="timeline-number">05</div></div>
          <div className="vertical-timeline-item"><div className="timeline-number">06</div><div className="timeline-content right"><h3>Optimize Delivery and Visibility</h3><p>Refine audience targeting, inventory mix, creative rotation, frequency, and pacing based on campaign signals.</p></div></div>
        </div>
      </div>
    </section>

    <section className="py-24 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="glass-card theme-indigo rounded-[2rem] p-8 md:p-12 lg:p-16 reveal-up">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-[#E057D8] font-bold tracking-widest text-sm uppercase mb-4">Visibility, Quality & Media Control</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">Built for <span className="text-gradient-brand">Brand-Safe Visibility</span></h2>
              <div className="text-slate-200 text-lg leading-relaxed space-y-5">
                <p>Display campaigns should create reach without becoming uncontrolled media exposure. Advertisers need clarity on where ads appear, how often users are exposed, and which placements contribute to campaign movement.</p>
                <p>AscendiaPrime supports display activity with placement review, delivery monitoring, frequency management, and reporting visibility, helping brands build awareness with greater confidence.</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-slate-200">Audience and placement alignment</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-slate-200">Creative format review</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-slate-200">Frequency and pacing control</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-slate-200">Brand safety considerations</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-slate-200">Placement quality monitoring</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-slate-200">Delivery and engagement reporting</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-slate-200 sm:col-span-2">Optimization based on media signals</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-8 reveal-up">
        <div className="glass-card theme-purple rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-white mb-6">Display Advertising Use Cases</h2>
          <div className="flex flex-wrap gap-3">
            <span className="chip">Brand Awareness</span><span className="chip">Product Visibility</span><span className="chip">Audience Prospecting</span><span className="chip">Seasonal Campaigns</span><span className="chip">Geo-Targeted Reach</span><span className="chip">Commerce Promotions</span><span className="chip">Event Visibility</span><span className="chip">Market Expansion</span><span className="chip">Always-On Brand Presence</span>
          </div>
        </div>
        <div className="glass-card theme-pink rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-white mb-6">Best-Fit Campaign Scenarios</h2>
          <div className="space-y-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-slate-200">New product or collection launches</div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-slate-200">E-commerce brands building recall before sale periods</div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-slate-200">Brands entering new markets or geographies</div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-slate-200">Seasonal promotions and limited-time offers</div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-slate-200">Awareness support before retargeting or performance activation</div>
          </div>
        </div>
      </div>
    </section>

    <section className="relative z-10 py-24 px-6 lg:px-12" style={{ background: "linear-gradient(to bottom, rgba(2, 6, 23, 0.2), rgba(15, 23, 42, 0.78))" }}>
      <div className="max-w-4xl mx-auto reveal-up">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">FAQ Section</h2>
        <div className="space-y-4">
          <div className="faq-item glass-card theme-blue rounded-3xl px-6 py-2 md:px-8 md:py-3 text-left"><button className="faq-button" type="button"><span>What is display advertising?</span><svg className="w-6 h-6 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg></button><div className="faq-answer">Display advertising uses visual ad formats such as banners, responsive ads, and rich media units to help brands reach audiences across websites, apps, and digital placements.</div></div>
          <div className="faq-item glass-card theme-indigo rounded-3xl px-6 py-2 md:px-8 md:py-3 text-left"><button className="faq-button" type="button"><span>How does display advertising support brand awareness?</span><svg className="w-6 h-6 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg></button><div className="faq-answer">It keeps a brand visible across relevant digital environments, helping support recognition, recall, product discovery, and consideration.</div></div>
          <div className="faq-item glass-card theme-purple rounded-3xl px-6 py-2 md:px-8 md:py-3 text-left"><button className="faq-button" type="button"><span>Can display advertising be targeted?</span><svg className="w-6 h-6 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg></button><div className="faq-answer">Yes. Display campaigns can be planned around audience signals, geography, device type, context, behaviour, interests, and campaign objectives.</div></div>
          <div className="faq-item glass-card theme-pink rounded-3xl px-6 py-2 md:px-8 md:py-3 text-left"><button className="faq-button" type="button"><span>How do you maintain placement quality?</span><svg className="w-6 h-6 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg></button><div className="faq-answer">We support display campaigns with placement review, brand-safety considerations, frequency control, and delivery monitoring based on the campaign setup.</div></div>
          <div className="faq-item glass-card theme-blue rounded-3xl px-6 py-2 md:px-8 md:py-3 text-left"><button className="faq-button" type="button"><span>Is display advertising only for awareness?</span><svg className="w-6 h-6 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg></button><div className="faq-answer">Display is commonly used for awareness and prospecting, but it can also support traffic, promotional visibility, retargeting, and mid-funnel engagement depending on strategy.</div></div>
          <div className="faq-item glass-card theme-indigo rounded-3xl px-6 py-2 md:px-8 md:py-3 text-left"><button className="faq-button" type="button"><span>Do advertisers get visibility into display campaign performance?</span><svg className="w-6 h-6 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg></button><div className="faq-answer">Yes. Advertisers can receive reporting visibility across impressions, clicks, reach, frequency, placement quality, engagement movement, and optimization signals depending on the campaign setup.</div></div>
        </div>
      </div>
    </section>

    <section className="relative z-10 py-32 px-6 lg:px-12" style={{ background: "linear-gradient(to bottom, rgba(15, 23, 42, 0.85), rgba(0, 0, 0, 1))" }}>
      <div className="max-w-4xl mx-auto text-center reveal-up">
        <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6">Ready to Build Visibility Across <span className="text-gradient-brand">Digital Media?</span></h2>
        <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">Let's explore how AscendiaPrime can help your brand reach relevant audiences through display advertising built around visibility, control, and media quality.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="open-contact-modal btn-glow w-full sm:w-auto" type="button">Explore Media Solutions</button>
          <button className="open-contact-modal btn-glow secondary w-full sm:w-auto" type="button">Start a Conversation</button>
        </div>
      </div>
    </section>
  </main>
</div>
    </PageRevealEffects>
  );
}
