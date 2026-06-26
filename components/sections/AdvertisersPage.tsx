"use client";

import "@/styles/advertisers.css";

import ContactForm from "@/components/forms/ContactForm";

import ParticleCanvas from "@/components/effects/ParticleCanvas";

import PageRevealEffects from "@/components/effects/PageRevealEffects";

export default function AdvertisersPage() {
  return (
    <PageRevealEffects>
      <div id="partners-master" style={{ width: "100%", position: "relative", color: "#cbd5e1", overflowX: "hidden", fontFamily: "'Poppins', sans-serif" }}>

    
    

    

    

    <ParticleCanvas id="warp-canvas" className="fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none opacity-50" />

    <div className="relative z-10 w-full text-slate-400">
        
        <section className="min-h-[85vh] flex flex-col justify-center pt-32 pb-20 px-6 lg:px-12 relative z-10">
            <div className="max-w-[1400px] mx-auto w-full text-center">
                <div className="hero-animate inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#3F8BF9]/20 bg-[#3F8BF9]/5 text-[#3F8BF9] text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-[#3F8BF9] animate-pulse"></span>
                    Advertiser Solutions
                </div>
                <h1 className="hero-animate text-5xl md:text-7xl font-black leading-[1.1] text-white tracking-tight mb-8">
                    Advertiser Growth, Built Around <br/>
                    <span className="text-gradient-smm drop-shadow-[0_0_15px_rgba(63,139,249,0.15)]">Performance and Clarity</span>
                </h1>
                <p className="hero-animate text-xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                    We help advertisers scale through a connected mix of performance marketing, publisher partnerships, programmatic media, retargeting, and digital growth solutions — built around audience intent, transparent execution, and measurable outcomes.
                </p>
                <div className="hero-animate flex flex-col sm:flex-row justify-center gap-6">
                    <button onClick={() => { document.getElementById('solutions-grid')?.scrollIntoView({ behavior: 'smooth' }); }} className="glow-btn text-white bg-gradient-to-r from-[#7469F8] to-[#AB57F3] px-10 py-5 rounded-2xl font-bold text-lg shadow-[0_0_20px_rgba(116,105,248,0.3)] hover:scale-105 transition-all">
                        Explore Growth Solutions
                    </button>
                    <button className="partner-popup-trigger border border-[#3F8BF9]/50 hover:border-[#3F8BF9] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#3F8BF9]/5 transition-all" data-partner-type="advertiser">
                        Submit Advertiser Enquiry
                    </button>
                </div>
            </div>
        </section>

        <section className="py-24 px-6 lg:px-12 relative z-10">
            <div className="max-w-[1200px] mx-auto text-center smm-reveal">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Built for Brands That <span className="text-gradient-smm">Need More Than Traffic</span></h2>
                <p className="text-lg text-slate-300 leading-relaxed max-w-5xl mx-auto mb-12">
                    Modern customer acquisition is not only about driving clicks. Brands need relevant audiences, quality traffic, transparent tracking, and performance partners who understand the full customer journey. We bring together media, partners, data, and technology to help advertisers scale with greater visibility and measurable direction.
                </p>
            </div>
        </section>

        <section id="solutions-grid" className="py-24 px-6 lg:px-12 relative z-10">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-16 text-center smm-reveal">
                    <h2 className="text-4xl font-bold text-white mb-4">Advertiser Growth Solutions</h2>
                    <p className="text-[#3F8BF9]">Focused solutions designed to help advertisers reach, convert, and scale through performance-led channels.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="smm-reveal" style={{ transitionDelay: "0.1s" }}>
                        <div className="solution-card">
                            <div className="w-12 h-12 bg-[#3F8BF9]/10 rounded-lg flex items-center justify-center text-[#3F8BF9] mb-6">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Customer Acquisition</h3>
                            <p className="text-sm text-slate-400">Reach relevant audiences and acquire customers through performance-led channels designed around measurable actions.</p>
                        </div>
                    </div>
                    <div className="smm-reveal" style={{ transitionDelay: "0.2s" }}>
                        <div className="solution-card">
                            <div className="w-12 h-12 bg-[#AB57F3]/10 rounded-lg flex items-center justify-center text-[#AB57F3] mb-6">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Publisher & Affiliate Growth</h3>
                            <p className="text-sm text-slate-400">Expand reach through trusted publishers, affiliates, and performance partners aligned with your campaign goals.</p>
                        </div>
                    </div>
                    <div className="smm-reveal" style={{ transitionDelay: "0.3s" }}>
                        <div className="solution-card">
                            <div className="w-12 h-12 bg-[#E057D8]/10 rounded-lg flex items-center justify-center text-[#E057D8] mb-6">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Retargeting & Recovery</h3>
                            <p className="text-sm text-slate-400">Re-engage high-intent users who have shown interest but have not yet completed the desired action.</p>
                        </div>
                    </div>
                    <div className="smm-reveal" style={{ transitionDelay: "0.4s" }}>
                        <div className="solution-card">
                            <div className="w-12 h-12 bg-[#3F8BF9]/10 rounded-lg flex items-center justify-center text-[#3F8BF9] mb-6">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 117.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.255-3.905 14.159 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Programmatic Media Reach</h3>
                            <p className="text-sm text-slate-400">Build visibility and demand through display, native, video, and DSP-led media buying across relevant inventory.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-24 px-6 lg:px-12 relative z-10">
            <div className="max-w-[1000px] mx-auto w-full flex flex-col items-center">
                <div className="mb-16 smm-reveal text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Performance-Led Approach <br/><span className="text-[#3F8BF9]">With Transparent Execution</span></h2>
                    <p className="text-slate-400">A structured process to launch, monitor, optimize, and scale campaigns with greater visibility.</p>
                </div>

                <div className="smm-reveal w-full max-w-[650px]">
                    <div className="step-node">
                        <h4 className="text-lg font-bold text-white mb-1">Step 01: Understand Campaign Goals</h4>
                        <p className="text-sm">We start by understanding your business objectives, audience, markets, KPIs, and growth expectations.</p>
                    </div>
                    <div className="step-node">
                        <h4 className="text-lg font-bold text-white mb-1">Step 02: Curate the Right Channel Mix</h4>
                        <p className="text-sm">We identify the right combination of affiliate, publisher, paid media, and programmatic channels.</p>
                    </div>
                    <div className="step-node">
                        <h4 className="text-lg font-bold text-white mb-1">Step 03: Full Tracking & Visibility</h4>
                        <p className="text-sm">Technical set-up on tracking, conversion attribution, flow reporting, and validation standards.</p>
                    </div>
                    <div className="step-node">
                        <h4 className="text-lg font-bold text-white mb-1">Step 04: Launch & Monitored Activity</h4>
                        <p className="text-sm">Campaigns are launched in a structured way with visibility on traffic quality and performance signals.</p>
                    </div>
                    <div className="step-node">
                        <h4 className="text-lg font-bold text-white mb-1">Step 05: Ongoing Optimization</h4>
                        <p className="text-sm">We monitor performance and optimize toward conversion quality, ROI, and long-term growth.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-24 px-6 lg:px-12 relative z-10">
            <div className="max-w-[1400px] mx-auto">
                <div className="text-center mb-16 smm-reveal">
                    <h2 className="text-4xl font-bold text-white mb-4">Why Brands Choose <span className="text-gradient-smm">Us</span></h2>
                    <p className="text-slate-400">A growth partner built around performance, transparency, and long-term value.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 smm-reveal">
                    <div className="compact-card">
                        <h4 className="text-white font-bold mb-2">Performance-First Thinking</h4>
                        <p className="text-xs text-slate-400">Campaigns built around measurable business outcomes.</p>
                    </div>
                    <div className="compact-card">
                        <h4 className="text-white font-bold mb-2">Partner-Led Scale</h4>
                        <p className="text-xs text-slate-400">Access to publishers, affiliates, creators, and sub-networks.</p>
                    </div>
                    <div className="compact-card">
                        <h4 className="text-white font-bold mb-2">Transparent Tracking</h4>
                        <p className="text-xs text-slate-400">Clear reporting, visibility, and validation across campaign activity.</p>
                    </div>
                    <div className="compact-card">
                        <h4 className="text-white font-bold mb-2">Full-Funnel Support</h4>
                        <p className="text-xs text-slate-400">Support across awareness, acquisition, and conversion.</p>
                    </div>
                    <div className="compact-card">
                        <h4 className="text-white font-bold mb-2">Flexible Campaign Models</h4>
                        <p className="text-xs text-slate-400">CPA, CPL, CPS, CPC, hybrid, and performance-led models.</p>
                    </div>
                    <div className="compact-card">
                        <h4 className="text-white font-bold mb-2">Long-Term Growth Focus</h4>
                        <p className="text-xs text-slate-400">Built for sustainable partnerships, not short-term spikes.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-24 px-6 lg:px-12 relative z-10">
            <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20">
                
                <div className="smm-reveal">
                    <h2 className="text-3xl font-bold text-white mb-6">Campaign Models <span className="text-[#AB57F3]">We Support</span></h2>
                    <p className="mb-8 text-sm">Flexible models aligned with your campaign goals, KPIs, and market strategy.</p>
                    <div className="flex flex-wrap gap-3">
                        <span className="model-badge">CPA Campaigns</span>
                        <span className="model-badge">CPL Campaigns</span>
                        <span className="model-badge">Lead Generation</span>
                        <span className="model-badge">CPS / E-commerce</span>
                        
                        <span className="model-badge">Retargeting Campaigns</span>
                        <span className="model-badge">Programmatic Awareness</span>
                        <span className="model-badge">Coupons & Promotional Campaigns</span>
                        <span className="model-badge">Product Feed Campaigns</span>
                        <span className="model-badge">Paid Media Support</span>
                    </div>
                </div>

                <div className="smm-reveal" style={{ transitionDelay: "0.2s" }}>
                    <h2 className="text-3xl font-bold text-white mb-6">Built for <span className="text-[#E057D8]">Growth Verticals</span></h2>
                    <p className="mb-8 text-sm">We support brands across performance-driven verticals where intent, timing and trust matter.</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-8 text-xs font-medium text-slate-300">
                        <div className="flex items-center gap-2"><span className="w-1 h-1 bg-[#E057D8] rounded-full"></span> E-Commerce & D2C</div>
                        <div className="flex items-center gap-2"><span className="w-1 h-1 bg-[#E057D8] rounded-full"></span> Fashion & Lifestyle</div>
                        <div className="flex items-center gap-2"><span className="w-1 h-1 bg-[#E057D8] rounded-full"></span> Beauty & Wellness</div>
                        <div className="flex items-center gap-2"><span className="w-1 h-1 bg-[#E057D8] rounded-full"></span> Technology & Electronics</div>
                        <div className="flex items-center gap-2"><span className="w-1 h-1 bg-[#E057D8] rounded-full"></span> Health & Supplements</div>
                        <div className="flex items-center gap-2"><span className="w-1 h-1 bg-[#E057D8] rounded-full"></span> Travel & Hospitality</div>
                        <div className="flex items-center gap-2"><span className="w-1 h-1 bg-[#E057D8] rounded-full"></span> Finance & Insurance</div>
                        <div className="flex items-center gap-2"><span className="w-1 h-1 bg-[#E057D8] rounded-full"></span> Education & Lead Generation</div>
                        <div className="flex items-center gap-2"><span className="w-1 h-1 bg-[#E057D8] rounded-full"></span> Subscription Brands</div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-24 px-6 lg:px-12 relative z-10">
            <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
                <div className="smm-reveal">
                    <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Visibility That Supports <br/><span className="text-[#3F8BF9]">Better Decisions</span></h2>
                    <p className="text-xl lg:text-2xl leading-relaxed mb-8 text-slate-300">
                        We believe performance growth should be measurable, transparent, and accountable. Our advertiser partnerships are supported by clear tracking, tech integration, and validation processes to help brands understand campaign performance and traffic quality.
                    </p>
                    <button className="partner-popup-trigger glow-btn bg-[#3F8BF9] text-white px-8 py-4 rounded-2xl font-bold shadow-[0_0_15px_rgba(63,139,249,0.3)] transition-all" data-partner-type="advertiser">
                        Start a Conversation
                    </button>
                </div>
                <div className="glass-base p-10 rounded-3xl smm-reveal" style={{ transitionDelay: "0.2s" }}>
                    <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                        <svg className="w-6 h-6 text-[#3F8BF9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        The Transparency Checklist
                    </h3>
                    <ul className="space-y-6 text-slate-300">
                        <li className="flex items-start gap-4"><span className="font-bold text-[#3F8BF9]">01</span> Conversion tracking alignment</li>
                        <li className="flex items-start gap-4"><span className="font-bold text-[#3F8BF9]">02</span> Campaign-level reporting</li>
                        <li className="flex items-start gap-4"><span className="font-bold text-[#3F8BF9]">03</span> Traffic source validation</li>
                        <li className="flex items-start gap-4"><span className="font-bold text-[#3F8BF9]">04</span> Partner performance review</li>
                        <li className="flex items-start gap-4"><span className="font-bold text-[#3F8BF9]">05</span> Optimization insights</li>
                        <li className="flex items-start gap-4"><span className="font-bold text-[#3F8BF9]">06</span> Transparent communication</li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="py-24 px-6 lg:px-12 relative z-10 text-center">
            <div className="max-w-4xl mx-auto smm-reveal">
                <h2 className="text-4xl font-bold text-white mb-8">Ready to Build a <span className="text-gradient-smm">Performance-Led Growth Partnership?</span></h2>
                <p className="mb-12">Let’s explore how we can support your customer acquisition, retargeting, partner growth, and media strategy with a performance-led approach.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button className="partner-popup-trigger glow-btn bg-[#7469F8] text-white px-10 py-4 rounded-full font-bold transition-all" data-partner-type="advertiser">
                        Submit Advertiser Enquiry
                    </button>
                    <a href="#" className="border border-white/20 text-white px-10 py-4 rounded-full font-bold hover:bg-white/5 transition-all" style={{ textDecoration: "none" }}>
                        Start a Conversation
                    </a>
                </div>
            </div>
        </section>

    </div> 

    <div id="partner-modal" className="partner-popup-overlay">
        <div className="partner-popup-content">
            <button id="close-modal" className="popup-close-btn">&times;</button>
            <h3 className="text-3xl font-bold text-white mb-8">Advertiser Inquiry</h3>
            <div className="relative z-20">
                <ContactForm />
            </div>
        </div>
    </div>

    
</div>
    </PageRevealEffects>
  );
}
