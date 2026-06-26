"use client";

import "@/styles/video-native-ads.css";

import ContactForm from "@/components/forms/ContactForm";

import PageRevealEffects from "@/components/effects/PageRevealEffects";

export default function VideoNativeAdsPage() {
  return (
    <PageRevealEffects>
      <div style={{ position: "fixed", top: "0", left: "0", width: "100vw", height: "100vh", backgroundColor: "#020617", zIndex: "-9999", pointerEvents: "none" }}></div>
<div id="vn-master">
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
            Video & Native Ads Built for <span className="text-gradient-brand">Attention and Context</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-xl mb-10 leading-relaxed">
            AscendiaPrime helps brands build awareness and engagement through video and native ad formats designed to fit naturally within content environments, audience journeys, and media moments that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="open-contact-modal btn-glow w-full sm:w-auto" type="button">Explore Media Solutions</button>
            <button className="open-contact-modal btn-glow secondary w-full sm:w-auto" type="button">Start a Conversation</button>
          </div>
        </div>

        <div className="lg:col-span-6 reveal-up">
          <div className="attention-visual">
            <div className="format-label video-label">
              <svg fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 4.2A1 1 0 0 0 4.8 5v10a1 1 0 0 0 1.5.86l8.5-5a1 1 0 0 0 0-1.72l-8.5-5Z"/></svg>
              Video
            </div>
            <div className="format-label native-label">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"/></svg>
              Native
            </div>
            <div className="connector-line"></div>
            <div className="context-path"></div>
            <div className="attention-kicker">Attention</div>
            <div className="context-kicker">Context</div>
            <div className="format-card video-card">
              <div className="video-frame"><div className="play-button"></div></div>
              <div className="video-controls">
                <div className="control-play"></div>
                <div className="progress-bar"></div>
                <div className="video-time">0:15 / 1:00</div>
                <div className="speaker-icon"></div>
                <div className="fullscreen-icon"></div>
              </div>
            </div>
            <div className="attention-node">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15.75 7.5a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a7.5 7.5 0 0 1 15 0v.25H4.5v-.25Z"/></svg>
            </div>
            <div className="format-card native-card">
              <div className="native-top">
                <div className="native-avatar"></div>
                <div className="native-top-lines">
                  <div className="native-line long"></div>
                  <div className="native-line mid"></div>
                </div>
                <div className="native-dots">...</div>
              </div>
              <div className="sponsored"><span className="sponsored-star"></span> Sponsored</div>
              <div className="native-image"></div>
              <div className="native-copy-lines">
                <div className="native-line"></div>
                <div className="native-line long"></div>
                <div className="native-line short"></div>
              </div>
              <div className="native-cta-row">
                <div className="native-line mid"></div>
                <div className="native-arrow">&rarr;</div>
              </div>
              <div className="native-footer">
                <div className="native-small-avatar"></div>
                <div className="native-footer-lines">
                  <div className="native-line long"></div>
                  <div className="native-line mid"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="pb-20 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-5 reveal-up">
        <div className="glass-card glass-card-hover theme-blue rounded-3xl p-6">
          <div className="text-[#3F8BF9] font-bold tracking-widest text-xs uppercase mb-3">Storytelling Formats</div>
          <p className="text-slate-200 leading-relaxed">Use motion and content-led formats to communicate brand messages with more depth.</p>
        </div>
        <div className="glass-card glass-card-hover theme-purple rounded-3xl p-6">
          <div className="text-[#AB57F3] font-bold tracking-widest text-xs uppercase mb-3">Contextual Discovery</div>
          <p className="text-slate-200 leading-relaxed">Reach users inside media environments where content attention is already active.</p>
        </div>
        <div className="glass-card glass-card-hover theme-pink rounded-3xl p-6">
          <div className="text-[#E057D8] font-bold tracking-widest text-xs uppercase mb-3">Engagement-Led Delivery</div>
          <p className="text-slate-200 leading-relaxed">Support awareness and consideration through formats built for attention and relevance.</p>
        </div>
      </div>
    </section>

    <section className="py-24 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-20 reveal-up">
          <div className="lg:col-span-5">
            <div className="text-[#3F8BF9] font-bold tracking-widest text-sm uppercase mb-4">Strategic Format Planning</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">Attention Works Best When the Format Fits the <span className="text-gradient-brand">Moment</span></h2>
          </div>
          <div className="lg:col-span-7 text-slate-200 text-lg leading-relaxed space-y-5">
            <p>Some brand messages need more than a standard banner. They need motion, story, context, or a placement that feels aligned with the way users are already consuming content.</p>
            <p>Video and native advertising help brands earn attention inside media environments rather than interrupting the experience. AscendiaPrime supports these campaigns with audience planning, placement alignment, creative format guidance, and delivery visibility across relevant digital channels.</p>
          </div>
        </div>

        <div className="text-center mb-14 max-w-4xl mx-auto reveal-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Video & Native Advertising <span className="text-gradient-brand">Capabilities</span></h2>
          <p className="text-[#AB57F3] text-lg leading-relaxed">A media approach designed to help brands improve attention, content discovery, and contextual engagement.</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 reveal-up">
          <div className="glass-card glass-card-hover theme-blue rounded-3xl p-7"><h3 className="text-2xl font-bold text-white mb-3">Video Ad Placements</h3><p className="text-slate-300 leading-relaxed">Activate video formats across relevant in-stream, out-stream, social, and programmatic environments.</p></div>
          <div className="glass-card glass-card-hover theme-indigo rounded-3xl p-7"><h3 className="text-2xl font-bold text-white mb-3">Native Content Placements</h3><p className="text-slate-300 leading-relaxed">Place brand messages within content-led environments where users are already engaged.</p></div>
          <div className="glass-card glass-card-hover theme-purple rounded-3xl p-7"><h3 className="text-2xl font-bold text-white mb-3">Short-Form Video Support</h3><p className="text-slate-300 leading-relaxed">Adapt message formats for quick storytelling across mobile and social viewing moments.</p></div>
          <div className="glass-card glass-card-hover theme-pink rounded-3xl p-7"><h3 className="text-2xl font-bold text-white mb-3">Contextual Alignment</h3><p className="text-slate-300 leading-relaxed">Match placements with relevant content categories, audience interests, and campaign objectives.</p></div>
          <div className="glass-card glass-card-hover theme-blue rounded-3xl p-7"><h3 className="text-2xl font-bold text-white mb-3">Creative Format Guidance</h3><p className="text-slate-300 leading-relaxed">Align story, message, aspect ratio, CTA, and format with the media environment.</p></div>
          <div className="glass-card glass-card-hover theme-indigo rounded-3xl p-7"><h3 className="text-2xl font-bold text-white mb-3">Engagement Monitoring</h3><p className="text-slate-300 leading-relaxed">Review delivery, attention signals, clicks, completion rate, placement quality, and audience response.</p></div>
        </div>
      </div>
    </section>

    <section className="py-24 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12 max-w-4xl mx-auto reveal-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Formats & Media Environments <span className="text-gradient-brand">We Support</span></h2>
          <p className="text-[#7469F8] text-lg">Video and native media can be planned across content-led environments, publisher feeds, video placements, recommendation units, and programmatic inventory depending on campaign objectives and available media access.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-8 reveal-up">
          <span className="chip">In-Stream Video</span><span className="chip">Out-Stream Video</span><span className="chip">Short-Form Video</span><span className="chip">Social Video Placements</span><span className="chip">Mobile Video Inventory</span><span className="chip">Native Content Ads</span><span className="chip">In-Feed Sponsored Placements</span><span className="chip">Publisher-Native Feeds</span><span className="chip">Content Recommendation Units</span><span className="chip">Sponsored Article-Style Placements</span><span className="chip">Contextual Native Placements</span>
        </div>
        <p className="text-center text-slate-400 text-sm max-w-3xl mx-auto mb-24 reveal-up">Platform and inventory access may vary based on campaign geography, budget, targeting requirements, and media availability.</p>

        <div className="text-center mb-20 max-w-4xl mx-auto reveal-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How We Build Video & Native <span className="text-gradient-brand">Campaigns</span></h2>
          <p className="text-[#7469F8] text-lg">A structured process to align story, format, placement, and audience attention.</p>
        </div>
        <div className="vertical-timeline reveal-up">
          <div className="vertical-timeline-item"><div className="timeline-content left"><h3>Define the Brand Message</h3><p>Understand the campaign story, target audience, market, awareness goal, and desired engagement.</p></div><div className="timeline-number">01</div></div>
          <div className="vertical-timeline-item"><div className="timeline-number">02</div><div className="timeline-content right"><h3>Select the Right Format Mix</h3><p>Identify whether video, native, or a combined format approach best suits the campaign objective.</p></div></div>
          <div className="vertical-timeline-item"><div className="timeline-content left"><h3>Align Creative With Context</h3><p>Review creative assets, message flow, aspect ratios, CTA direction, and placement suitability.</p></div><div className="timeline-number">03</div></div>
          <div className="vertical-timeline-item"><div className="timeline-number">04</div><div className="timeline-content right"><h3>Activate Across Relevant Media</h3><p>Launch campaigns across suitable video and native inventory with controlled delivery.</p></div></div>
          <div className="vertical-timeline-item"><div className="timeline-content left"><h3>Monitor Attention Signals</h3><p>Review impressions, viewability, completion rate, clicks, placement quality, and audience response.</p></div><div className="timeline-number">05</div></div>
          <div className="vertical-timeline-item"><div className="timeline-number">06</div><div className="timeline-content right"><h3>Optimize Creative and Placement</h3><p>Refine formats, messages, inventory, pacing, and targeting based on media performance signals.</p></div></div>
        </div>
      </div>
    </section>

    <section className="py-24 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="glass-card theme-indigo rounded-[2rem] p-8 md:p-12 lg:p-16 reveal-up">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-[#E057D8] font-bold tracking-widest text-sm uppercase mb-4">Context, Brand Safety & Attention Quality</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">Built Around <span className="text-gradient-brand">Contextual Attention</span></h2>
              <div className="text-slate-200 text-lg leading-relaxed space-y-5">
                <p>Video and native campaigns perform best when the message fits the environment. Advertisers need confidence that their media appears in relevant content spaces, follows suitable format standards, and supports the brand experience rather than disrupting it.</p>
                <p>AscendiaPrime supports video and native media with placement alignment, creative format review, brand safety considerations, and delivery reporting to help brands understand how attention is being created.</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-slate-200">Video and native format alignment</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-slate-200">Contextual placement review</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-slate-200">Brand safety considerations</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-slate-200">Viewability and engagement reporting</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-slate-200">Frequency and pacing control</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-slate-200">Creative performance insights</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-slate-200 sm:col-span-2">Placement quality monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-12 reveal-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">When Video & Native Formats <span className="text-gradient-brand">Make More Sense</span></h2>
          <p className="text-slate-300 text-lg">Some campaigns need more than visibility. They need a format that can explain, demonstrate, educate, or blend naturally into the user's content experience.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 reveal-up">
          <div className="glass-card theme-purple rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-white mb-6">Best-Fit Campaign Objectives</h3>
            <div className="flex flex-wrap gap-3">
              <span className="chip">Brand Storytelling</span><span className="chip">Product Education</span><span className="chip">Launch Communication</span><span className="chip">Content Discovery</span><span className="chip">Audience Engagement</span><span className="chip">Consideration Building</span><span className="chip">Thought Leadership</span><span className="chip">Mid-Funnel Awareness</span><span className="chip">Market Entry Campaigns</span>
            </div>
          </div>
          <div className="glass-card theme-pink rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-white mb-6">Best-Fit Media Moments</h3>
            <div className="space-y-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-slate-200">When the product needs explanation before action</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-slate-200">When static banners are not enough to communicate value</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-slate-200">When users are consuming content and open to discovery</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-slate-200">When video assets can build stronger recall</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-slate-200">When storytelling matters more than immediate response</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="relative z-10 py-24 px-6 lg:px-12" style={{ background: "linear-gradient(to bottom, rgba(2, 6, 23, 0.2), rgba(15, 23, 42, 0.78))" }}>
      <div className="max-w-4xl mx-auto reveal-up">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">FAQ Section</h2>
        <div className="space-y-4">
          <div className="faq-item glass-card theme-blue rounded-3xl px-6 py-2 md:px-8 md:py-3 text-left"><button className="faq-button" type="button"><span>What are video and native ads?</span><svg className="w-6 h-6 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg></button><div className="faq-answer">Video ads use motion-led creative formats, while native ads are designed to appear naturally within content environments such as feeds, articles, or recommendation placements.</div></div>
          <div className="faq-item glass-card theme-indigo rounded-3xl px-6 py-2 md:px-8 md:py-3 text-left"><button className="faq-button" type="button"><span>How do video and native ads support brand awareness?</span><svg className="w-6 h-6 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg></button><div className="faq-answer">They help brands communicate with more context, story, and attention than standard display formats, supporting awareness, engagement, and consideration.</div></div>
          <div className="faq-item glass-card theme-purple rounded-3xl px-6 py-2 md:px-8 md:py-3 text-left"><button className="faq-button" type="button"><span>What is the difference between native ads and display ads?</span><svg className="w-6 h-6 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg></button><div className="faq-answer">Display ads are visual units placed across websites and apps, while native ads are designed to match the content environment more naturally, such as in-feed or sponsored content placements.</div></div>
          <div className="faq-item glass-card theme-pink rounded-3xl px-6 py-2 md:px-8 md:py-3 text-left"><button className="faq-button" type="button"><span>Can video and native ads support performance goals?</span><svg className="w-6 h-6 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg></button><div className="faq-answer">Yes. While they are often used for awareness and engagement, they can also support traffic, consideration, retargeting, and lead generation depending on campaign strategy.</div></div>
          <div className="faq-item glass-card theme-blue rounded-3xl px-6 py-2 md:px-8 md:py-3 text-left"><button className="faq-button" type="button"><span>How are video and native campaigns measured?</span><svg className="w-6 h-6 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg></button><div className="faq-answer">Measurement can include impressions, clicks, viewability, completion rate, engagement, placement quality, audience response, and downstream campaign impact.</div></div>
          <div className="faq-item glass-card theme-indigo rounded-3xl px-6 py-2 md:px-8 md:py-3 text-left"><button className="faq-button" type="button"><span>Are native ads clearly marked as sponsored?</span><svg className="w-6 h-6 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg></button><div className="faq-answer">Native placements should follow platform and publisher guidelines, including proper disclosure where required.</div></div>
        </div>
      </div>
    </section>

    <section className="relative z-10 py-32 px-6 lg:px-12" style={{ background: "linear-gradient(to bottom, rgba(15, 23, 42, 0.85), rgba(0, 0, 0, 1))" }}>
      <div className="max-w-4xl mx-auto text-center reveal-up">
        <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6">Ready to Build Attention Through <span className="text-gradient-brand">Better Media Formats?</span></h2>
        <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">Let's explore how AscendiaPrime can help your brand use video and native advertising to improve awareness, engagement, and contextual visibility.</p>
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
