"use client";

import "@/styles/connected-tv.css";

import ContactForm from "@/components/forms/ContactForm";

import PageRevealEffects from "@/components/effects/PageRevealEffects";

export default function ConnectedTvPage() {
  return (
    <PageRevealEffects>
      <div style={{ position: "fixed", top: "0", left: "0", width: "100vw", height: "100vh", backgroundColor: "#020617", zIndex: "-9999", pointerEvents: "none" }}></div>
<div id="ctv-master">
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
            Connected TV Advertising Through <span className="text-gradient-brand">Strategic Media Access</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-xl mb-10 leading-relaxed">
            AscendiaPrime helps brands explore and activate Connected TV opportunities through partner-led media access, audience planning, creative alignment, and controlled delivery across suitable streaming-led environments where available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="open-contact-modal btn-glow w-full sm:w-auto" type="button">Explore CTV Opportunities</button>
            <button className="open-contact-modal btn-glow secondary w-full sm:w-auto" type="button">Start a Conversation</button>
          </div>
        </div>

        <div className="lg:col-span-6 reveal-up">
          <div className="ctv-visual">
            <div className="ctv-visual-title">
              <h3>Premium Screen Reach</h3>
              <p>Strategic CTV opportunities, activated through partner-led media access and smart planning.</p>
              <span></span>
            </div>

            <div className="ctv-path path-left-top"></div>
            <div className="ctv-path path-left-mid"></div>
            <div className="ctv-path path-left-bottom"></div>
            <div className="ctv-path path-right-top"></div>
            <div className="ctv-path path-right-mid"></div>
            <div className="ctv-path path-right-bottom"></div>
            <div className="partner-path"></div>

            <div className="tv-backlight"></div>
            <div className="tv-frame">
              <div className="tv-screen">
                <div className="tv-creative">
                  <span>Ad 0:15</span>
                  <img className="tv-brand-logo" src="/images/logos/brand-logo.png" alt="Your Brand"  />
                  <p>Story. Connection. Impact.</p>
                </div>
                <div className="continue-row">
                  <strong>Continue Watching</strong>
                  <div className="thumbs">
                    <div className="thumb"></div>
                    <div className="thumb"></div>
                    <div className="thumb"></div>
                    <div className="thumb"></div>
                    <div className="thumb"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ctv-console"></div>

            <div className="ctv-feature left feature-audience">
              <div className="ctv-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 11a4 4 0 1 0-8 0m8 0a4 4 0 1 1 4 4m-4-4a4 4 0 0 0-4 4m-6 4a6 6 0 0 1 12 0M18 19a4 4 0 0 0-3-3.87"/></svg></div>
              <h4>Audience Reach</h4>
              <p>Connect with the right audiences in premium viewing environments.</p>
            </div>
            <div className="ctv-feature left feature-market">
              <div className="ctv-icon purple"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 10.5h.01"/></svg></div>
              <h4>Market Focus</h4>
              <p>Target the right markets and households with greater relevance.</p>
            </div>
            <div className="ctv-feature left feature-household">
              <div className="ctv-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 10.5 12 3l9 7.5M5 9.5V21h14V9.5M9 21v-6h6v6"/></svg></div>
              <h4>Household Signals</h4>
              <p>Use household-level signals to reach real people, not just devices.</p>
            </div>

            <div className="ctv-feature right feature-streaming">
              <div className="ctv-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M7 4h10v3H7zM5 7h14v13H5zM10 11l5 3-5 3z"/></svg></div>
              <h4>CTV & Streaming</h4>
              <p>Access suitable connected TV and streaming-led placements where available.</p>
            </div>
            <div className="ctv-feature right feature-safe">
              <div className="ctv-icon purple"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 3 5 6v5c0 4.5 3 8.4 7 10 4-1.6 7-5.5 7-10V6zM9 12l2 2 4-5"/></svg></div>
              <h4>Brand Safe</h4>
              <p>Deliver your message in brand-safe, high-quality content environments.</p>
            </div>
            <div className="ctv-feature right feature-impact">
              <div className="ctv-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 19h16M7 16v-5M12 16V6M17 16v-8"/></svg></div>
              <h4>Measurable Impact</h4>
              <p>Track delivery, completion signals, reach, and campaign visibility.</p>
            </div>

            <div className="partner-node"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="m8 12 2.5 2.5c.8.8 2.1.8 2.9 0L16 12M3 12l4-4 4 4-4 4zm18 0-4-4-4 4 4 4z"/></svg></div>
            <div className="partner-copy">
              <h4>Partner-Led Media Access</h4>
              <p>Connecting brands to premium CTV opportunities through trusted partners and programmatic buying routes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="pb-20 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-5 reveal-up">
        <div className="glass-card glass-card-hover theme-blue rounded-3xl p-6">
          <div className="text-[#3F8BF9] font-bold tracking-widest text-xs uppercase mb-3">Premium Screen Presence</div>
          <p className="text-slate-200 leading-relaxed">Support brand visibility in large-screen, high-attention viewing environments.</p>
        </div>
        <div className="glass-card glass-card-hover theme-purple rounded-3xl p-6">
          <div className="text-[#AB57F3] font-bold tracking-widest text-xs uppercase mb-3">Partner-Led Media Access</div>
          <p className="text-slate-200 leading-relaxed">Explore suitable CTV opportunities through relevant media partners and programmatic buying routes.</p>
        </div>
        <div className="glass-card glass-card-hover theme-pink rounded-3xl p-6">
          <div className="text-[#E057D8] font-bold tracking-widest text-xs uppercase mb-3">Controlled Delivery Planning</div>
          <p className="text-slate-200 leading-relaxed">Align audience, creative, frequency, pacing, and reporting expectations before campaign activation.</p>
        </div>
      </div>
    </section>

    <section className="py-24 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-20 reveal-up">
          <div className="lg:col-span-5">
            <div className="text-[#3F8BF9] font-bold tracking-widest text-sm uppercase mb-4">Strategic CTV Planning</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">CTV Brings Brand Visibility Into <span className="text-gradient-brand">Streaming-Led Moments</span></h2>
          </div>
          <div className="lg:col-span-7 text-slate-200 text-lg leading-relaxed space-y-5">
            <p>Connected TV gives brands the opportunity to appear in high-attention viewing environments where audiences are increasingly consuming content through smart TVs, streaming apps, and internet-connected screens.</p>
            <p>For advertisers, the value of CTV is not only the screen size. It is the ability to plan awareness activity with audience relevance, creative suitability, media access, delivery control, and reporting visibility. AscendiaPrime helps brands evaluate and activate CTV as part of a broader programmatic and awareness strategy, depending on campaign goals, geography, budget, and available inventory.</p>
          </div>
        </div>

        <div className="text-center mb-14 max-w-4xl mx-auto reveal-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Connected TV Advertising <span className="text-gradient-brand">Capabilities</span></h2>
          <p className="text-[#AB57F3] text-lg leading-relaxed">A premium media approach designed to help brands evaluate, plan, and activate CTV opportunities with greater clarity.</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 reveal-up">
          <div className="glass-card glass-card-hover theme-blue rounded-3xl p-7"><h3 className="text-2xl font-bold text-white mb-3">CTV Opportunity Planning</h3><p className="text-slate-300 leading-relaxed">Review campaign objectives, audience fit, market scope, creative assets, and media requirements.</p></div>
          <div className="glass-card glass-card-hover theme-indigo rounded-3xl p-7"><h3 className="text-2xl font-bold text-white mb-3">Partner-Led Media Access</h3><p className="text-slate-300 leading-relaxed">Explore suitable CTV and streaming-led opportunities through relevant media partners and buying routes.</p></div>
          <div className="glass-card glass-card-hover theme-purple rounded-3xl p-7"><h3 className="text-2xl font-bold text-white mb-3">Audience & Market Alignment</h3><p className="text-slate-300 leading-relaxed">Plan activity around audience signals, geography, household context, and campaign suitability.</p></div>
          <div className="glass-card glass-card-hover theme-pink rounded-3xl p-7"><h3 className="text-2xl font-bold text-white mb-3">Creative Suitability Review</h3><p className="text-slate-300 leading-relaxed">Align video creative, duration, message, and format with large-screen viewing behaviour.</p></div>
          <div className="glass-card glass-card-hover theme-blue rounded-3xl p-7"><h3 className="text-2xl font-bold text-white mb-3">Frequency & Pacing Guidance</h3><p className="text-slate-300 leading-relaxed">Support controlled exposure through frequency planning, budget pacing, and delivery rhythm.</p></div>
          <div className="glass-card glass-card-hover theme-indigo rounded-3xl p-7"><h3 className="text-2xl font-bold text-white mb-3">Reporting & Delivery Visibility</h3><p className="text-slate-300 leading-relaxed">Review impressions, reach, completion signals, delivery quality, and campaign-level reporting.</p></div>
        </div>
      </div>
    </section>

    <section className="py-24 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12 max-w-4xl mx-auto reveal-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">CTV Formats & Media <span className="text-gradient-brand">Environments</span></h2>
          <p className="text-[#7469F8] text-lg">CTV opportunities may vary based on geography, campaign budget, targeting requirements, creative assets, and inventory availability.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-8 reveal-up">
          <span className="chip">Connected TV</span><span className="chip">OTT-Style Environments</span><span className="chip">Streaming Video</span><span className="chip">Smart TV Inventory</span><span className="chip">Large-Screen Video</span><span className="chip">Premium Video Placements</span><span className="chip">Audience-Based Delivery</span><span className="chip">Geo-Targeted Reach</span><span className="chip">Frequency-Controlled Campaigns</span><span className="chip">Completion Signal Reporting</span><span className="chip">Cross-Screen Awareness Support</span>
        </div>
        <p className="text-center text-slate-400 text-sm max-w-3xl mx-auto mb-24 reveal-up">CTV inventory and platform access may vary by market, media partner, campaign requirements, budget, and availability.</p>

        <div className="text-center mb-20 max-w-4xl mx-auto reveal-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How We Approach Connected TV <span className="text-gradient-brand">Campaigns</span></h2>
          <p className="text-[#7469F8] text-lg">A structured process to evaluate, plan, activate, and review CTV activity with better media visibility.</p>
        </div>
        <div className="vertical-timeline reveal-up">
          <div className="vertical-timeline-item"><div className="timeline-content left"><h3>Define the Awareness Objective</h3><p>Understand the brand goal, target audience, market, video asset, budget, and screen-reach expectation.</p></div><div className="timeline-number">01</div></div>
          <div className="vertical-timeline-item"><div className="timeline-number">02</div><div className="timeline-content right"><h3>Assess Media Fit and Availability</h3><p>Review suitable CTV opportunities based on geography, audience, inventory access, and campaign requirements.</p></div></div>
          <div className="vertical-timeline-item"><div className="timeline-content left"><h3>Align Audience and Creative</h3><p>Match audience planning, creative duration, message, format, and viewing context with the campaign objective.</p></div><div className="timeline-number">03</div></div>
          <div className="vertical-timeline-item"><div className="timeline-number">04</div><div className="timeline-content right"><h3>Coordinate Media Activation</h3><p>Work through relevant media partners or programmatic buying routes to activate suitable CTV placements where available.</p></div></div>
          <div className="vertical-timeline-item"><div className="timeline-content left"><h3>Monitor Delivery Signals</h3><p>Review impressions, reach, completion signals, frequency movement, delivery quality, and campaign reporting.</p></div><div className="timeline-number">05</div></div>
          <div className="vertical-timeline-item"><div className="timeline-number">06</div><div className="timeline-content right"><h3>Refine Future Media Planning</h3><p>Use campaign insights to improve audience focus, creative direction, pacing, and screen-level reach planning.</p></div></div>
        </div>
      </div>
    </section>

    <section className="py-24 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="glass-card theme-indigo rounded-[2rem] p-8 md:p-12 lg:p-16 reveal-up">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-[#E057D8] font-bold tracking-widest text-sm uppercase mb-4">Premium Reach, Brand Safety & Delivery Control</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">Built for High-Attention <span className="text-gradient-brand">Media Planning</span></h2>
              <div className="text-slate-200 text-lg leading-relaxed space-y-5">
                <p>CTV campaigns require thoughtful planning because the screen experience is different from standard web or mobile placements. Advertisers need confidence that their message appears in suitable viewing environments, reaches the intended audience, and follows a controlled delivery approach.</p>
                <p>AscendiaPrime supports CTV planning with audience alignment, creative suitability review, partner coordination, frequency guidance, brand-safety considerations, and campaign reporting visibility.</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-slate-200">Audience and geography alignment</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-slate-200">Media partner and inventory suitability</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-slate-200">Creative format review</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-slate-200">Frequency and pacing guidance</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-slate-200">Brand safety considerations</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-slate-200">Completion and delivery reporting</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-slate-200 sm:col-span-2">Cross-screen awareness support</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-12 reveal-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How Connected TV Fits Into the <span className="text-gradient-brand">Media Mix</span></h2>
          <p className="text-slate-300 text-lg">CTV works best when used as a premium awareness layer that supports brand recall, video storytelling, and broader cross-screen media planning.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 reveal-up">
          <div className="glass-card theme-purple rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-white mb-6">Strategic Role of CTV</h3>
            <div className="flex flex-wrap gap-3">
              <span className="chip">Premium Awareness Layer</span><span className="chip">Large-Screen Brand Storytelling</span><span className="chip">Streaming-Led Audience Reach</span><span className="chip">Upper-Funnel Media Support</span><span className="chip">Cross-Screen Campaign Extension</span><span className="chip">Market or Product Launch Visibility</span><span className="chip">Brand Recall and Consideration</span><span className="chip">Pre-Retargeting Awareness Support</span>
            </div>
          </div>
          <div className="glass-card theme-pink rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-white mb-6">Planning Considerations</h3>
            <div className="space-y-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-slate-200">Is the audience reachable through streaming-led environments?</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-slate-200">Does the campaign have strong video creative?</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-slate-200">Is the objective awareness, recall, or consideration?</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-slate-200">Is the geography suitable for available CTV inventory?</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-slate-200">Does the budget support premium video delivery?</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-slate-200">Should CTV support a wider display, video, or retargeting plan?</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-slate-200">How will frequency, pacing, and reporting be reviewed?</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="relative z-10 py-24 px-6 lg:px-12" style={{ background: "linear-gradient(to bottom, rgba(2, 6, 23, 0.2), rgba(15, 23, 42, 0.78))" }}>
      <div className="max-w-4xl mx-auto reveal-up">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">FAQ Section</h2>
        <div className="space-y-4">
          <div className="faq-item glass-card theme-blue rounded-3xl px-6 py-2 md:px-8 md:py-3 text-left"><button className="faq-button" type="button"><span>What is Connected TV advertising?</span><svg className="w-6 h-6 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg></button><div className="faq-answer">Connected TV advertising allows brands to deliver video ads through internet-connected television environments such as smart TVs, streaming devices, and OTT-style media placements.</div></div>
          <div className="faq-item glass-card theme-indigo rounded-3xl px-6 py-2 md:px-8 md:py-3 text-left"><button className="faq-button" type="button"><span>Does AscendiaPrime own CTV inventory?</span><svg className="w-6 h-6 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg></button><div className="faq-answer">AscendiaPrime does not position itself as a CTV inventory owner. We support advertisers by helping them explore and activate suitable CTV opportunities through relevant media partners, programmatic buying routes, and available inventory sources where applicable.</div></div>
          <div className="faq-item glass-card theme-purple rounded-3xl px-6 py-2 md:px-8 md:py-3 text-left"><button className="faq-button" type="button"><span>How is CTV different from traditional TV advertising?</span><svg className="w-6 h-6 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg></button><div className="faq-answer">Traditional TV is usually planned around broad audience estimates. CTV can support more audience-led planning, geography-based delivery, frequency control, and digital-style reporting depending on campaign setup and inventory access.</div></div>
          <div className="faq-item glass-card theme-pink rounded-3xl px-6 py-2 md:px-8 md:py-3 text-left"><button className="faq-button" type="button"><span>How is CTV different from standard video advertising?</span><svg className="w-6 h-6 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg></button><div className="faq-answer">Standard video ads often appear on web, mobile, or social environments. CTV appears on larger screen viewing environments, which can support stronger attention and premium brand visibility.</div></div>
          <div className="faq-item glass-card theme-blue rounded-3xl px-6 py-2 md:px-8 md:py-3 text-left"><button className="faq-button" type="button"><span>Can CTV campaigns be targeted?</span><svg className="w-6 h-6 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg></button><div className="faq-answer">CTV campaigns can be planned around audience signals, geography, household context, content environments, and inventory availability depending on the campaign requirements.</div></div>
          <div className="faq-item glass-card theme-indigo rounded-3xl px-6 py-2 md:px-8 md:py-3 text-left"><button className="faq-button" type="button"><span>What can advertisers measure in CTV campaigns?</span><svg className="w-6 h-6 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg></button><div className="faq-answer">Measurement may include impressions, reach, frequency, completion signals, delivery quality, audience response, and campaign-level reporting, depending on the media partner and campaign setup.</div></div>
          <div className="faq-item glass-card theme-purple rounded-3xl px-6 py-2 md:px-8 md:py-3 text-left"><button className="faq-button" type="button"><span>Is CTV suitable only for large brands?</span><svg className="w-6 h-6 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg></button><div className="faq-answer">No. CTV can support both established brands and growing advertisers when the campaign has a clear audience, geography, video asset, budget, and awareness objective.</div></div>
        </div>
      </div>
    </section>

    <section className="relative z-10 py-32 px-6 lg:px-12" style={{ background: "linear-gradient(to bottom, rgba(15, 23, 42, 0.85), rgba(0, 0, 0, 1))" }}>
      <div className="max-w-4xl mx-auto text-center reveal-up">
        <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6">Ready to Explore Connected TV as Part of Your <span className="text-gradient-brand">Media Strategy?</span></h2>
        <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">Let's explore how AscendiaPrime can help your brand assess and activate Connected TV opportunities through suitable media access, audience planning, and controlled awareness delivery.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="open-contact-modal btn-glow w-full sm:w-auto" type="button">Explore CTV Opportunities</button>
          <button className="open-contact-modal btn-glow secondary w-full sm:w-auto" type="button">Start a Conversation</button>
        </div>
      </div>
    </section>
  </main>
</div>
    </PageRevealEffects>
  );
}
