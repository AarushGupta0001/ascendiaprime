"use client";

import "@/styles/dsp.css";

import ContactForm from "@/components/forms/ContactForm";

import PageRevealEffects from "@/components/effects/PageRevealEffects";

export default function DspPage() {
  return (
    <PageRevealEffects>
      <div style={{ position: "fixed", top: "0", left: "0", width: "100vw", height: "100vh", backgroundColor: "#020617", zIndex: "-9999", pointerEvents: "none" }}></div>
<div id="dsp-master">
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
            DSP-Led Media Buying With <span className="text-gradient-brand">Control and Clarity</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-xl mb-10 leading-relaxed">
            AscendiaPrime helps brands plan and activate programmatic media through DSP-led buying routes, audience strategy, inventory alignment, and controlled delivery across suitable digital environments where available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="open-contact-modal btn-glow w-full sm:w-auto" type="button">Start a Conversation</button>
          </div>
        </div>

        <div className="lg:col-span-6 reveal-up">
          <div className="dsp-visual">
            <div className="dsp-panel audience-panel">
              <h3>Audience Signals</h3>
              <div className="signal-list">
                <div className="signal-item"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 11a4 4 0 1 0-8 0m8 0a4 4 0 1 1 4 4m-4-4a4 4 0 0 0-4 4m-6 4a6 6 0 0 1 12 0"/></svg>Demographics</div>
                <div className="signal-item"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M20.8 8.6c0 5-8.8 10.4-8.8 10.4S3.2 13.6 3.2 8.6A4.6 4.6 0 0 1 12 6.7a4.6 4.6 0 0 1 8.8 1.9Z"/></svg>Interests & Behaviour</div>
                <div className="signal-item"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 10.5h.01"/></svg>Geography</div>
                <div className="signal-item"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 4h8v16H8zM10 18h4"/></svg>Device & Platform</div>
                <div className="signal-item"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 7v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>Time & Context</div>
              </div>
            </div>

            <div className="dsp-panel delivery-panel">
              <h3>Media Delivery</h3>
              <div className="signal-list">
                <div className="signal-item"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 6h16v12H4zM10 9l5 3-5 3z"/></svg>Display</div>
                <div className="signal-item"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 6h16v12H4zM10 9l5 3-5 3z"/></svg>Video</div>
                <div className="signal-item"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 5h16v14H4zM8 9h8M8 13h5"/></svg>Native</div>
                <div className="signal-item"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 3h6v18H9zM11 18h2"/></svg>Mobile & In-App</div>
                <div className="signal-item"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 7h16v10H4zM9 21h6"/></svg>CTV / OTT</div>
              </div>
            </div>

            <div className="flow-line flow-left"><span className="flow-dot"></span><span className="flow-dot"></span><span className="flow-dot"></span><span className="flow-dot"></span><span className="flow-dot"></span></div>
            <div className="flow-line flow-right"><span className="flow-dot"></span><span className="flow-dot"></span><span className="flow-dot"></span><span className="flow-dot"></span><span className="flow-dot"></span></div>
            <span className="hub-anchor-top"></span>
            <span className="hub-anchor-bottom"></span>
            <span className="hub-anchor-left"></span>
            <span className="hub-anchor-right"></span>
            <div className="dsp-arrow arrow-left">→</div>
            <div className="dsp-arrow arrow-right">→</div>

            <div className="callout-path path-pacing"></div>
            <div className="callout-path path-safety"></div>
            <div className="callout-path path-frequency"></div>
            <div className="callout-path path-quality"></div>

            <div className="control-callout callout-pacing">
              <div className="mini-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 6v12M9 9.5c0-1.4 1.3-2.5 3-2.5s3 1.1 3 2.5-1.3 2.5-3 2.5-3 1.1-3 2.5 1.3 2.5 3 2.5 3-1.1 3-2.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg></div>
              <div><h4>Budget Pacing</h4><p>Control spend and pacing across campaigns.</p></div>
            </div>
            <div className="control-callout callout-safety">
              <div className="mini-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 3 5 6v5c0 4.5 3 8.4 7 10 4-1.6 7-5.5 7-10V6zM9 12l2 2 4-5"/></svg></div>
              <div><h4>Brand Safety</h4><p>Apply suitability filters and safety controls.</p></div>
            </div>
            <div className="control-callout purple callout-frequency">
              <div className="mini-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 11a4 4 0 1 0-8 0m8 0a4 4 0 1 1 4 4m-4-4a4 4 0 0 0-4 4m-6 4a6 6 0 0 1 12 0"/></svg></div>
              <div><h4>Frequency Control</h4><p>Manage exposures to improve reach quality.</p></div>
            </div>
            <div className="control-callout purple callout-quality">
              <div className="mini-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 3 5 6v5c0 4.5 3 8.4 7 10 4-1.6 7-5.5 7-10V6zM9 12l2 2 4-5"/></svg></div>
              <div><h4>Placement Quality</h4><p>Review and prioritise quality environments.</p></div>
            </div>

            <div className="reporting-path-left"></div>
            <div className="reporting-path-right"></div>
            <div className="reporting-panel">
              <div className="reporting-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 19h16M7 16v-5M12 16V6M17 16v-8"/></svg></div>
              <div><h3>Reporting & Optimization</h3><p>Measure performance, analyse signals and optimise audience, inventory, bids and delivery.</p></div>
            </div>

            <div className="dsp-hub">
              <div className="hub-stack-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinejoin="round" strokeWidth="1.8" d="m12 4 8 4-8 4-8-4 8-4Z"/><path strokeLinejoin="round" strokeWidth="1.8" d="m4 12 8 4 8-4M4 16l8 4 8-4"/></svg></div>
              <strong>DSP-Led Buying Layer</strong>
              <span>Real-time decisions to deliver the right ad to the right user at the right price.</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="pb-20 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-5 reveal-up">
        <div className="glass-card glass-card-hover theme-blue rounded-3xl p-6"><div className="text-[#3F8BF9] font-bold tracking-widest text-xs uppercase mb-3">Audience-Led Planning</div><p className="text-slate-200 leading-relaxed">Build media activity around audience signals, geography, context, and campaign objectives.</p></div>
        <div className="glass-card glass-card-hover theme-purple rounded-3xl p-6"><div className="text-[#AB57F3] font-bold tracking-widest text-xs uppercase mb-3">Inventory Alignment</div><p className="text-slate-200 leading-relaxed">Identify suitable media environments across display, video, native, mobile, and CTV where available.</p></div>
        <div className="glass-card glass-card-hover theme-pink rounded-3xl p-6"><div className="text-[#E057D8] font-bold tracking-widest text-xs uppercase mb-3">Controlled Buying Approach</div><p className="text-slate-200 leading-relaxed">Support bidding, pacing, frequency, placement quality, and reporting visibility.</p></div>
      </div>
    </section>

    <section className="py-24 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-20 reveal-up">
          <div className="lg:col-span-5">
            <div className="text-[#3F8BF9] font-bold tracking-widest text-sm uppercase mb-4">Programmatic Buying Controls</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">Programmatic Buying Works Best With the <span className="text-gradient-brand">Right Controls</span></h2>
          </div>
          <div className="lg:col-span-7 text-slate-200 text-lg leading-relaxed space-y-5">
            <p>DSP-led buying gives advertisers access to programmatic media opportunities across multiple digital environments, but scale alone is not the objective.</p>
            <p>The real value comes from how the campaign is structured, which audiences are selected, where media is delivered, how buying logic is applied, how frequency is managed, and how performance signals are reviewed. AscendiaPrime helps brands approach DSP-led media buying with clearer planning, better visibility, and stronger delivery discipline.</p>
          </div>
        </div>

        <div className="text-center mb-14 max-w-4xl mx-auto reveal-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">A Practical Framework for <span className="text-gradient-brand">Programmatic Media Buying</span></h2>
          <p className="text-[#AB57F3] text-lg leading-relaxed">A structured approach to connect audience signals, inventory access, media strategy, delivery control, and campaign learning.</p>
        </div>

        <div className="framework-flow grid md:grid-cols-5 gap-6 reveal-up">
          <div className="framework-step glass-card theme-blue rounded-3xl p-6"><div className="framework-number">1</div><h3 className="text-xl font-bold text-white mb-3">Audience Signals</h3><p className="text-slate-300 text-sm leading-relaxed">We begin by understanding audience, geography, behaviour, campaign context, and media objective.</p></div>
          <div className="framework-step glass-card theme-indigo rounded-3xl p-6"><div className="framework-number">2</div><h3 className="text-xl font-bold text-white mb-3">Inventory & Media Access</h3><p className="text-slate-300 text-sm leading-relaxed">We review suitable programmatic inventory routes across available media opportunities.</p></div>
          <div className="framework-step glass-card theme-purple rounded-3xl p-6"><div className="framework-number">3</div><h3 className="text-xl font-bold text-white mb-3">Buying Strategy</h3><p className="text-slate-300 text-sm leading-relaxed">We align the campaign with the right buying approach for the campaign objective.</p></div>
          <div className="framework-step glass-card theme-pink rounded-3xl p-6"><div className="framework-number">4</div><h3 className="text-xl font-bold text-white mb-3">Delivery Controls</h3><p className="text-slate-300 text-sm leading-relaxed">We support pacing, frequency, placement review, brand safety, and budget discipline.</p></div>
          <div className="framework-step glass-card theme-blue rounded-3xl p-6"><div className="framework-number">5</div><h3 className="text-xl font-bold text-white mb-3">Reporting & Optimization</h3><p className="text-slate-300 text-sm leading-relaxed">We review delivery signals, audience response, inventory quality, and optimization opportunities.</p></div>
        </div>
      </div>
    </section>

    <section className="py-24 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-14 max-w-4xl mx-auto reveal-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What Advertisers Gain From <span className="text-gradient-brand">DSP-Led Buying</span></h2>
          <p className="text-[#7469F8] text-lg leading-relaxed">DSP-led media buying helps advertisers bring more structure, control, and visibility into programmatic media activity.</p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 reveal-up">
          <div className="glass-card glass-card-hover theme-blue rounded-3xl p-7"><h3 className="text-2xl font-bold text-white mb-3">Wider Media Access</h3><p className="text-slate-300 leading-relaxed">Access programmatic opportunities across different media environments through suitable buying routes.</p></div>
          <div className="glass-card glass-card-hover theme-indigo rounded-3xl p-7"><h3 className="text-2xl font-bold text-white mb-3">Audience-Led Planning</h3><p className="text-slate-300 leading-relaxed">Build campaigns around audience signals, geography, interests, context, and campaign objectives.</p></div>
          <div className="glass-card glass-card-hover theme-purple rounded-3xl p-7"><h3 className="text-2xl font-bold text-white mb-3">Better Delivery Discipline</h3><p className="text-slate-300 leading-relaxed">Support smarter pacing, frequency planning, budget control, and campaign delivery structure.</p></div>
          <div className="glass-card glass-card-hover theme-pink rounded-3xl p-7"><h3 className="text-2xl font-bold text-white mb-3">Improved Placement Oversight</h3><p className="text-slate-300 leading-relaxed">Review media environments, placement quality, suitability, and brand-safety considerations.</p></div>
          <div className="glass-card glass-card-hover theme-blue rounded-3xl p-7"><h3 className="text-2xl font-bold text-white mb-3">Flexible Strategy Options</h3><p className="text-slate-300 leading-relaxed">Adapt buying approach for awareness, prospecting, engagement, seasonal, or tailored media activity.</p></div>
          <div className="glass-card glass-card-hover theme-indigo rounded-3xl p-7"><h3 className="text-2xl font-bold text-white mb-3">Clearer Campaign Learning</h3><p className="text-slate-300 leading-relaxed">Use delivery signals, audience response, and inventory performance to improve future planning.</p></div>
        </div>
      </div>
    </section>

    <section className="py-24 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-12 reveal-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Media Strategies Aligned to <span className="text-gradient-brand">Campaign Goals</span></h2>
          <p className="text-slate-300 text-lg">Different programmatic campaigns require different buying approaches. We help advertisers align the media strategy with the audience stage, campaign timing, and desired outcome.</p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-5 reveal-up">
          <div className="glass-card glass-card-hover theme-blue rounded-3xl p-6"><h3 className="text-xl font-bold text-white mb-3">Awareness & Reach</h3><p className="text-slate-300 text-sm leading-relaxed">For brands looking to build visibility across relevant media environments and audience groups.</p></div>
          <div className="glass-card glass-card-hover theme-indigo rounded-3xl p-6"><h3 className="text-xl font-bold text-white mb-3">Prospecting</h3><p className="text-slate-300 text-sm leading-relaxed">For campaigns focused on reaching new audiences based on interest, context, geography, or market opportunity.</p></div>
          <div className="glass-card glass-card-hover theme-purple rounded-3xl p-6"><h3 className="text-xl font-bold text-white mb-3">Engagement & Consideration</h3><p className="text-slate-300 text-sm leading-relaxed">For advertisers looking to stay visible with users who may need more exposure before taking action.</p></div>
          <div className="glass-card glass-card-hover theme-pink rounded-3xl p-6"><h3 className="text-xl font-bold text-white mb-3">Seasonal & Promotional</h3><p className="text-slate-300 text-sm leading-relaxed">For product launches, sale windows, festive periods, or market-specific promotions.</p></div>
          <div className="glass-card glass-card-hover theme-blue rounded-3xl p-6"><h3 className="text-xl font-bold text-white mb-3">Tailored Media Activation</h3><p className="text-slate-300 text-sm leading-relaxed">For campaigns needing a customised mix of audience, inventory, creative, frequency, and reporting requirements.</p></div>
        </div>
      </div>
    </section>

    <section className="py-24 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-20 max-w-4xl mx-auto reveal-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How We Approach DSP-Led <span className="text-gradient-brand">Campaigns</span></h2>
          <p className="text-[#7469F8] text-lg">A structured process to plan, activate, monitor, and refine programmatic buying with greater media visibility.</p>
        </div>
        <div className="vertical-timeline reveal-up">
          <div className="vertical-timeline-item"><div className="timeline-content left"><h3>Define the Media Objective</h3><p>Understand the advertiser's awareness, reach, engagement, or consideration goal.</p></div><div className="timeline-number">01</div></div>
          <div className="vertical-timeline-item"><div className="timeline-number">02</div><div className="timeline-content right"><h3>Build Audience and Inventory Plan</h3><p>Map audience segments, markets, inventory types, brand-safety needs, and campaign environments.</p></div></div>
          <div className="vertical-timeline-item"><div className="timeline-content left"><h3>Structure the Buying Setup</h3><p>Align targeting rules, creatives, budgets, bid strategy, pacing, and frequency requirements.</p></div><div className="timeline-number">03</div></div>
          <div className="vertical-timeline-item"><div className="timeline-number">04</div><div className="timeline-content right"><h3>Activate Through Suitable Buying Routes</h3><p>Coordinate activation through relevant DSP-led routes, media partners, or programmatic access points where available.</p></div></div>
          <div className="vertical-timeline-item"><div className="timeline-content left"><h3>Monitor Delivery Signals</h3><p>Review spend, delivery, reach, frequency, placement quality, engagement, and inventory performance.</p></div><div className="timeline-number">05</div></div>
          <div className="vertical-timeline-item"><div className="timeline-number">06</div><div className="timeline-content right"><h3>Refine Buying Strategy</h3><p>Optimize targeting, bids, inventory sources, creative rotation, frequency, and budget allocation based on campaign signals.</p></div></div>
        </div>
      </div>
    </section>

    <section className="py-24 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="glass-card theme-indigo rounded-[2rem] p-8 md:p-12 lg:p-16 reveal-up">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-[#E057D8] font-bold tracking-widest text-sm uppercase mb-4">Transparency, Inventory Quality & Buying Control</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">Built for Programmatic Media <span className="text-gradient-brand">Accountability</span></h2>
              <div className="text-slate-200 text-lg leading-relaxed space-y-5">
                <p>Programmatic media gives advertisers scale, but scale without control can lead to poor media quality and wasted budget. Brands need better visibility into where media is delivered, how budgets are paced, and which inventory sources are contributing to the campaign.</p>
                <p>AscendiaPrime supports DSP-led buying with structured setup, inventory review, pacing guidance, frequency management, placement quality checks, and campaign reporting visibility.</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-slate-200">Audience and inventory alignment</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-slate-200">Buying route and setup review</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-slate-200">Bid and budget pacing guidance</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-slate-200">Frequency management</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-slate-200">Placement and brand-safety review</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-slate-200">Delivery and engagement reporting</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-slate-200 sm:col-span-2">Optimization based on buying signals</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="relative z-10 py-24 px-6 lg:px-12" style={{ background: "linear-gradient(to bottom, rgba(2, 6, 23, 0.2), rgba(15, 23, 42, 0.78))" }}>
      <div className="max-w-4xl mx-auto reveal-up">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">FAQ Section</h2>
        <div className="space-y-4">
          <div className="faq-item glass-card theme-blue rounded-3xl px-6 py-2 md:px-8 md:py-3 text-left"><button className="faq-button" type="button"><span>What is DSP-led media buying?</span><svg className="w-6 h-6 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg></button><div className="faq-answer">DSP-led media buying uses demand-side platforms or DSP-led buying routes to purchase digital advertising inventory programmatically across environments such as display, video, native, mobile, and CTV where available.</div></div>
          <div className="faq-item glass-card theme-indigo rounded-3xl px-6 py-2 md:px-8 md:py-3 text-left"><button className="faq-button" type="button"><span>Does AscendiaPrime own a DSP platform?</span><svg className="w-6 h-6 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg></button><div className="faq-answer">AscendiaPrime does not position itself as a DSP platform owner. We support advertisers with planning, campaign structuring, partner coordination, buying route alignment, reporting visibility, and optimization guidance.</div></div>
          <div className="faq-item glass-card theme-purple rounded-3xl px-6 py-2 md:px-8 md:py-3 text-left"><button className="faq-button" type="button"><span>Why should brands use DSP-led buying?</span><svg className="w-6 h-6 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg></button><div className="faq-answer">DSP-led buying can help advertisers access programmatic inventory, apply audience targeting, manage bids, control frequency, and review delivery across multiple media environments.</div></div>
          <div className="faq-item glass-card theme-pink rounded-3xl px-6 py-2 md:px-8 md:py-3 text-left"><button className="faq-button" type="button"><span>What campaign types can DSP-led buying support?</span><svg className="w-6 h-6 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg></button><div className="faq-answer">It can support awareness, prospecting, display, video, native, mobile, CTV opportunities where available, and cross-channel media delivery depending on campaign goals and inventory access.</div></div>
          <div className="faq-item glass-card theme-blue rounded-3xl px-6 py-2 md:px-8 md:py-3 text-left"><button className="faq-button" type="button"><span>How does AscendiaPrime support transparency in DSP-led campaigns?</span><svg className="w-6 h-6 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg></button><div className="faq-answer">We support advertisers with setup review, audience and inventory alignment, placement quality checks, pacing guidance, frequency management, campaign reporting, and optimization insights.</div></div>
          <div className="faq-item glass-card theme-indigo rounded-3xl px-6 py-2 md:px-8 md:py-3 text-left"><button className="faq-button" type="button"><span>Can advertisers control where media appears?</span><svg className="w-6 h-6 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg></button><div className="faq-answer">Campaigns can be structured with placement guidance, inclusion or exclusion requirements, brand-safety considerations, and inventory review depending on the buying route and available setup.</div></div>
          <div className="faq-item glass-card theme-purple rounded-3xl px-6 py-2 md:px-8 md:py-3 text-left"><button className="faq-button" type="button"><span>Is DSP-led buying only for large budgets?</span><svg className="w-6 h-6 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg></button><div className="faq-answer">Not always. DSP-led buying can be planned based on campaign goals, market size, audience strategy, media access, and budget. The key is to structure the campaign around clear objectives and control.</div></div>
        </div>
      </div>
    </section>

    <section className="relative z-10 py-32 px-6 lg:px-12" style={{ background: "linear-gradient(to bottom, rgba(15, 23, 42, 0.85), rgba(0, 0, 0, 1))" }}>
      <div className="max-w-4xl mx-auto text-center reveal-up">
        <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6">Ready to Bring More Control to <span className="text-gradient-brand">Programmatic Media?</span></h2>
        <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">Let's explore how AscendiaPrime can help your brand plan and activate DSP-led media buying with better audience alignment, inventory visibility, and delivery control.</p>
        <button className="open-contact-modal btn-glow w-full sm:w-auto" type="button">Start a Conversation</button>
      </div>
    </section>
  </main>
</div>
    </PageRevealEffects>
  );
}
