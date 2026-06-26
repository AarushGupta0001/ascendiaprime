"use client";

import "@/styles/conversion-led-growth.css";

import ContactForm from "@/components/forms/ContactForm";

import ParticleCanvas from "@/components/effects/ParticleCanvas";

import PageRevealEffects from "@/components/effects/PageRevealEffects";

import type { CSSProperties } from "react";

export default function ConversionLedGrowthPage() {
  return (
    <PageRevealEffects>
      <div style={{ position: "fixed", top: "0", left: "0", width: "100vw", height: "100vh", backgroundColor: "#020617", zIndex: "-9999", pointerEvents: "none" }}></div>

<div id="cro-master" style={{ width: "100%", position: "relative", color: "#cbd5e1", overflowX: "hidden", fontFamily: "'Poppins', sans-serif" }}>

    

    

    

    <ParticleCanvas id="warp-canvas" className="fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none opacity-50" />

    <div className="relative z-10 w-full text-slate-300" style={{ perspective: "2000px" }}>
        
        <section className="min-h-[90vh] flex flex-col justify-center pb-12 pt-24 px-6 lg:px-12 relative">
            <div className="grid lg:grid-cols-12 gap-12 items-center max-w-[1400px] mx-auto w-full">
                
                <div className="lg:col-span-6 relative z-20">
                    <div className="hero-animate inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#3F8BF9]/30 bg-[#3F8BF9]/10 text-[#3F8BF9] text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md" style={{ animationDelay: "0.1s" }}>
                        <span className="w-2 h-2 rounded-full bg-[#E057D8] animate-pulse"></span>
                        Performance Marketing & Partner Growth
                    </div>
                    <h1 className="hero-animate text-5xl md:text-6xl lg:text-[4.5rem] font-black leading-[1.05] text-white tracking-tight mb-6" style={{ animationDelay: "0.2s" }}>
                        Conversion-Led Growth for <br/>
                        <span className="text-gradient-smm drop-shadow-[0_0_15px_rgba(63,139,249,0.3)]">Stronger Campaign Outcomes</span>
                    </h1>
                    <p className="hero-animate text-lg text-slate-200 max-w-lg mb-10 leading-relaxed" style={{ animationDelay: "0.3s" }}>
                        AscendiaPrime helps advertisers improve the journey from click to conversion by aligning landing pages, messaging, tracking, and user experience with clear performance objectives.
                    </p>
                    <div className="hero-animate flex flex-col sm:flex-row gap-5 mb-16" style={{ animationDelay: "0.4s" }}>
                        <div className="magnetic-btn w-full sm:w-auto">
                            <button id="hero-cta-btn" className="open-contact-modal w-full text-white bg-gradient-to-r from-[#3F8BF9] via-[#7469F8] to-[#AB57F3] px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(63,139,249,0.4)] hover:shadow-[0_0_30px_rgba(63,139,249,0.6)] hover:-translate-y-0.5 transition-all" type="button">
                                Submit Advertiser Enquiry
                                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                            </button>
                        </div>
                        <button className="open-contact-modal w-full sm:w-auto text-white border border-[#AB57F3]/30 bg-gradient-to-r from-[#7469F8] via-[#AB57F3] to-[#E057D8] px-8 py-4 rounded-2xl font-bold text-lg shadow-[0_0_20px_rgba(171,87,243,0.4)] hover:shadow-[0_0_30px_rgba(171,87,243,0.6)] hover:-translate-y-0.5 transition-all" type="button">
                            Start a Conversation
                        </button>
                    </div>
                </div>

                <div className="hero-animate lg:col-span-6 relative w-full h-[680px] lg:h-[740px] flex items-center justify-center" style={{ animationDelay: "0.5s" }}>
                    <div className="neon-funnel-visual">
                        <div className="funnel-orbit"></div>
                        <div className="funnel-user" style={{ left: "18%", top: "18px", animationDelay: "0s" }}></div>
                        <div className="funnel-user" style={{ left: "30%", top: "42px", animationDelay: "0.7s" }}></div>
                        <div className="funnel-user" style={{ left: "43%", top: "8px", animationDelay: "1.3s" }}></div>
                        <div className="funnel-user" style={{ left: "55%", top: "38px", animationDelay: "2s" }}></div>
                        <div className="funnel-user" style={{ left: "68%", top: "16px", animationDelay: "2.6s" }}></div>
                        <div className="funnel-user" style={{ left: "79%", top: "48px", animationDelay: "3.2s" }}></div>
                        <div className="funnel-user" style={{ left: "37%", top: "72px", animationDelay: "3.8s" }}></div>
                        <div className="funnel-user" style={{ left: "62%", top: "78px", animationDelay: "4.4s" }}></div>
                        <div className="funnel-user" style={{ left: "24%", top: "88px", animationDelay: "1.8s" }}></div>
                        <div className="funnel-user" style={{ left: "50%", top: "104px", animationDelay: "2.9s" }}></div>
                        <div className="funnel-user" style={{ left: "72%", top: "96px", animationDelay: "4.9s" }}></div>
                        <div className="funnel-user" style={{ left: "86%", top: "72px", animationDelay: "5.4s" }}></div>

                        <div className="neon-stage stage-1" style={{ "--top": "96px", "--w": "90%", "--h": "138px", "--rgb": "63,139,249", "--delay": "0s", "--z": "5" } as CSSProperties}>
                            <div className="stage-content">
                                <div className="stage-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m6-6a4 4 0 11-8 0 4 4 0 018 0zm6 2a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></div>
                                <div className="stage-label"><strong>1.</strong><span>Campaign Traffic</span></div>
                            </div>
                        </div>

                        <div className="neon-stage stage-2" style={{ "--top": "260px", "--w": "70%", "--h": "116px", "--rgb": "63,139,249", "--delay": "0.45s", "--z": "4" } as CSSProperties}>
                            <div className="stage-content">
                                <div className="stage-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 5h16v14H4zM4 9h16M8 13h3m3 0h2m-8 3h8"></path></svg></div>
                                <div className="stage-label"><strong>2.</strong><span>Landing<br/>Experience</span></div>
                            </div>
                        </div>

                        <div className="neon-stage stage-3" style={{ "--top": "402px", "--w": "54%", "--h": "104px", "--rgb": "116,105,248", "--delay": "0.9s", "--z": "3" } as CSSProperties}>
                            <div className="stage-content">
                                <div className="stage-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zm-3-10l2 2 4-4"></path></svg></div>
                                <div className="stage-label"><strong>3.</strong><span>User<br/>Confidence</span></div>
                            </div>
                        </div>

                        <div className="neon-stage stage-4" style={{ "--top": "528px", "--w": "40%", "--h": "92px", "--rgb": "171,87,243", "--delay": "1.35s", "--z": "2" } as CSSProperties}>
                            <div className="stage-content">
                                <div className="stage-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 19V5m0 14h16M8 16l3-3 3 2 5-7"></path></svg></div>
                                <div className="stage-label"><strong>4.</strong><span>Action<br/>Intent</span></div>
                            </div>
                        </div>

                        <div className="neon-stage stage-5" style={{ "--top": "638px", "--w": "32%", "--h": "82px", "--rgb": "34,197,94", "--delay": "1.8s", "--z": "1" } as CSSProperties}>
                            <div className="stage-content">
                                <div className="stage-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m5-5l-2 7-6 6-4-4 6-6 6-3z"></path></svg></div>
                                <div className="stage-label"><strong>5.</strong><span>Conversion</span></div>
                            </div>
                        </div>

                        <div className="funnel-callout right" style={{ "--top": "154px", "--right": "-34px", "--rgb": "63,139,249", "--delay": "0.2s" } as CSSProperties}>
                            <svg className="callout-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 8v4l3 3m6-3a9 9 0 11-6.22-8.56M21 3l-5 5m0 0h4m-4 0V4"></path></svg>
                            Message<br/>Alignment
                        </div>
                        <div className="funnel-callout left" style={{ "--top": "306px", "--left": "-34px", "--rgb": "63,139,249", "--delay": "0.8s" } as CSSProperties}>
                            <svg className="callout-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 15l-3 6-3-12 12 3-6 3zm0 0l5 5"></path></svg>
                            CTA<br/>Clarity
                        </div>
                        <div className="funnel-callout right" style={{ "--top": "440px", "--right": "-20px", "--rgb": "116,105,248", "--delay": "1.4s" } as CSSProperties}>
                            <svg className="callout-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zm-3-10l2 2 4-4"></path></svg>
                            Trust<br/>Signals
                        </div>
                        <div className="funnel-callout left" style={{ "--top": "562px", "--left": "-10px", "--rgb": "171,87,243", "--delay": "2s" } as CSSProperties}>
                            <svg className="callout-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 19V5m0 14h16M7 15l3-4 4 3 4-7"></path></svg>
                            Funnel<br/>Friction
                        </div>

                        <div className="conversion-beam"></div>
                        <div className="conversion-target"></div>
                    </div>
                </div>
            </div>
        </section>

        <section className="pb-20 px-6 lg:px-12 relative z-10">
            <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-5 smm-reveal">
                <div className="proof-card rounded-3xl p-6">
                    <div className="text-[#3F8BF9] font-bold tracking-widest text-xs uppercase mb-3">Post-Click Alignment</div>
                    <p className="text-slate-200 leading-relaxed">Connect campaign messaging, landing pages, CTAs, and user intent.</p>
                </div>
                <div className="proof-card rounded-3xl p-6">
                    <div className="text-[#AB57F3] font-bold tracking-widest text-xs uppercase mb-3">Funnel Clarity</div>
                    <p className="text-slate-200 leading-relaxed">Identify where users hesitate, drop off, or fail to complete the action.</p>
                </div>
                <div className="proof-card rounded-3xl p-6">
                    <div className="text-[#E057D8] font-bold tracking-widest text-xs uppercase mb-3">Conversion Quality Focus</div>
                    <p className="text-slate-200 leading-relaxed">Optimize toward actions that create real value, not just traffic volume.</p>
                </div>
            </div>
        </section>

        <section className="py-24 px-6 lg:px-12 relative z-10">
            <div className="max-w-[1400px] mx-auto w-full">
                <div className="grid lg:grid-cols-12 gap-12 items-start mb-20 smm-reveal">
                    <div className="lg:col-span-5">
                        <div className="text-[#3F8BF9] font-bold tracking-widest text-sm uppercase mb-4">Strategic Conversion Review</div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">Performance Does Not End at the <span className="text-gradient-smm">Click</span></h2>
                    </div>
                    <div className="lg:col-span-7 text-slate-200 text-lg leading-relaxed space-y-5">
                        <p>A click creates the opportunity, but the post-click journey decides whether that opportunity becomes a lead, sale, sign-up, or enquiry.</p>
                        <p>When messaging, page experience, trust signals, and tracking are not aligned, even quality traffic can lose momentum. AscendiaPrime helps advertisers review and improve the journey after the click, so campaigns can work harder with the traffic already being generated.</p>
                    </div>
                </div>

                <div className="text-center mb-14 max-w-4xl mx-auto smm-reveal">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Conversion Growth <span className="text-gradient-dark">Capabilities</span></h2>
                    <p className="text-[#AB57F3] text-lg leading-relaxed">A focused approach to improving post-click journeys, reducing friction, and strengthening campaign outcomes.</p>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 smm-reveal" style={{ transitionDelay: "0.2s" }}>
                    <div className="capability-card rounded-3xl p-7">
                        <div className="w-12 h-12 rounded-2xl bg-[#3F8BF9]/10 border border-[#3F8BF9]/30 flex items-center justify-center mb-6 text-[#3F8BF9]">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Landing Page Alignment</h3>
                        <p className="text-slate-300 leading-relaxed">Match campaign messaging, offers, visuals, and CTAs with user intent.</p>
                    </div>
                    <div className="capability-card rounded-3xl p-7">
                        <div className="w-12 h-12 rounded-2xl bg-[#7469F8]/10 border border-[#7469F8]/30 flex items-center justify-center mb-6 text-[#7469F8]">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Funnel & Journey Review</h3>
                        <p className="text-slate-300 leading-relaxed">Identify drop-off points across landing pages, forms, carts, and checkout flows.</p>
                    </div>
                    <div className="capability-card rounded-3xl p-7">
                        <div className="w-12 h-12 rounded-2xl bg-[#AB57F3]/10 border border-[#AB57F3]/30 flex items-center justify-center mb-6 text-[#AB57F3]">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">CTA & Message Testing</h3>
                        <p className="text-slate-300 leading-relaxed">Review headlines, value propositions, CTAs, and page sections for clearer action.</p>
                    </div>
                    <div className="capability-card rounded-3xl p-7">
                        <div className="w-12 h-12 rounded-2xl bg-[#E057D8]/10 border border-[#E057D8]/30 flex items-center justify-center mb-6 text-[#E057D8]">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Trust Signal Optimization</h3>
                        <p className="text-slate-300 leading-relaxed">Strengthen confidence with reviews, proof points, security cues, and reassurance messaging.</p>
                    </div>
                    <div className="capability-card rounded-3xl p-7">
                        <div className="w-12 h-12 rounded-2xl bg-[#E057D8]/10 border border-[#E057D8]/30 flex items-center justify-center mb-6 text-[#E057D8]">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Tracking Event Alignment</h3>
                        <p className="text-slate-300 leading-relaxed">Ensure key actions and conversion events are properly connected for reporting visibility.</p>
                    </div>
                    <div className="capability-card rounded-3xl p-7">
                        <div className="w-12 h-12 rounded-2xl bg-[#3F8BF9]/10 border border-[#3F8BF9]/30 flex items-center justify-center mb-6 text-[#3F8BF9]">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Conversion Quality Insights</h3>
                        <p className="text-slate-300 leading-relaxed">Review user behaviour and campaign data to understand which actions create real value.</p>
                    </div>
                </div>

            </div>
        </section>

        <section className="py-24 px-6 lg:px-12 relative">
            <div className="max-w-[1200px] mx-auto w-full relative">
                <div className="text-center mb-12 max-w-4xl mx-auto smm-reveal">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Post-Click Signals <span className="text-gradient-dark">We Review</span></h2>
                    <p className="text-[#7469F8] text-lg">Conversion improvement starts by understanding how users behave once they land on the page.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mb-24 smm-reveal" style={{ transitionDelay: "0.15s" }}>
                    <span className="signal-chip rounded-full px-5 py-3 text-sm font-semibold">Landing Page Relevance</span>
                    <span className="signal-chip rounded-full px-5 py-3 text-sm font-semibold">Bounce Behaviour</span>
                    <span className="signal-chip rounded-full px-5 py-3 text-sm font-semibold">Scroll Depth</span>
                    <span className="signal-chip rounded-full px-5 py-3 text-sm font-semibold">CTA Interaction</span>
                    <span className="signal-chip rounded-full px-5 py-3 text-sm font-semibold">Form Starts</span>
                    <span className="signal-chip rounded-full px-5 py-3 text-sm font-semibold">Form Abandonment</span>
                    <span className="signal-chip rounded-full px-5 py-3 text-sm font-semibold">Cart Activity</span>
                    <span className="signal-chip rounded-full px-5 py-3 text-sm font-semibold">Checkout Drop-Offs</span>
                    <span className="signal-chip rounded-full px-5 py-3 text-sm font-semibold">Page Speed</span>
                    <span className="signal-chip rounded-full px-5 py-3 text-sm font-semibold">Device Experience</span>
                    <span className="signal-chip rounded-full px-5 py-3 text-sm font-semibold">Traffic Source Quality</span>
                    <span className="signal-chip rounded-full px-5 py-3 text-sm font-semibold">Conversion Events</span>
                </div>

                <div className="text-center mb-24 max-w-4xl mx-auto smm-reveal">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How We Improve the <span className="text-gradient-dark">Conversion Journey</span></h2>
                    <p className="text-[#7469F8] text-lg">A practical process to understand friction, improve clarity, and strengthen measurable outcomes.</p>
                </div>

                <div className="vertical-timeline smm-reveal">
                    <div className="vertical-timeline-item">
                        <div className="timeline-content left">
                            <h3>Review Campaign Objective</h3>
                            <p>Understand the campaign goal, traffic source, target audience, offer, and desired conversion action.</p>
                        </div>
                        <div className="timeline-number">01</div>
                    </div>
                    
                    <div className="vertical-timeline-item">
                        <div className="timeline-number">02</div>
                        <div className="timeline-content right">
                            <h3>Map the Post-Click Journey</h3>
                            <p>Review how users move from ad click to landing page, form, product page, cart, checkout, or enquiry.</p>
                        </div>
                    </div>

                    <div className="vertical-timeline-item">
                        <div className="timeline-content left">
                            <h3>Identify Friction Points</h3>
                            <p>Find where users hesitate, exit, abandon forms, drop from carts, or fail to complete the action.</p>
                        </div>
                        <div className="timeline-number">03</div>
                    </div>

                    <div className="vertical-timeline-item">
                        <div className="timeline-number">04</div>
                        <div className="timeline-content right">
                            <h3>Align Message and Experience</h3>
                            <p>Improve page relevance, CTA clarity, offer visibility, trust signals, and user flow.</p>
                        </div>
                    </div>

                    <div className="vertical-timeline-item">
                        <div className="timeline-content left">
                            <h3>Test and Validate Improvements</h3>
                            <p>Review changes through campaign data, user behaviour, A/B testing, or performance insights.</p>
                        </div>
                        <div className="timeline-number">05</div>
                    </div>

                    <div className="vertical-timeline-item">
                        <div className="timeline-number">06</div>
                        <div className="timeline-content right">
                            <h3>Optimize Toward Quality Outcomes</h3>
                            <p>Refine the journey based on conversion quality, CPA, ROAS, lead quality, or sales value.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <section className="py-24 px-6 lg:px-12 relative z-10">
            <div className="max-w-[1400px] mx-auto w-full">
                <div className="trust-panel rounded-[2rem] p-8 md:p-12 lg:p-16 smm-reveal">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="text-[#E057D8] font-bold tracking-widest text-sm uppercase mb-4">Experience, Trust & Measurement</div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">Built Around Clarity, Trust, and <span className="text-gradient-smm">Measurable Action</span></h2>
                            <div className="text-slate-200 text-lg leading-relaxed space-y-5">
                                <p>Conversion-led growth is not only about changing page elements. It is about understanding how users experience the journey, where confidence is lost, and which improvements can create a measurable lift in campaign performance.</p>
                                <p>AscendiaPrime connects campaign data, landing page experience, tracking events, and user behaviour insights to help advertisers make better post-click decisions.</p>
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-slate-200">Landing page and offer alignment</div>
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-slate-200">Funnel friction review</div>
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-slate-200">CTA and message clarity</div>
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-slate-200">Trust and reassurance signals</div>
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-slate-200">Tracking and event validation</div>
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-slate-200">Lead and conversion quality review</div>
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-slate-200 sm:col-span-2">Campaign performance insights</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative z-10 py-24 faq-section-ppc">
            <div className="max-w-4xl mx-auto px-6 lg:px-12 smm-reveal">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">FAQ Section</h2>
                
                <div className="space-y-4" id="faq-container">
                    <div className="faq-item trace-card relative theme-blue px-6 py-2 md:px-8 md:py-3 text-left">
                        <button className="faq-button text-white w-full select-none outline-none focus:outline-none -webkit-tap-highlight-color-transparent" type="button" aria-expanded="false">
                            <span>What is conversion-led growth?</span>
                            <svg className="w-6 h-6 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                        </button>
                        <div className="faq-answer text-[#cbd5e1]">
                            Conversion-led growth focuses on improving the journey after a user clicks, helping more visitors complete meaningful actions such as purchases, leads, sign-ups, enquiries, or other campaign goals.
                        </div>
                    </div>

                    <div className="faq-item trace-card relative theme-indigo px-6 py-2 md:px-8 md:py-3 text-left">
                        <button className="faq-button text-white w-full select-none outline-none focus:outline-none -webkit-tap-highlight-color-transparent" type="button" aria-expanded="false">
                            <span>How is this different from simply driving more traffic?</span>
                            <svg className="w-6 h-6 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                        </button>
                        <div className="faq-answer text-[#cbd5e1]">
                            Driving traffic increases volume. Conversion-led growth improves the experience after users arrive, helping advertisers make better use of existing campaign traffic.
                        </div>
                    </div>

                    <div className="faq-item trace-card relative theme-purple px-6 py-2 md:px-8 md:py-3 text-left">
                        <button className="faq-button text-white w-full select-none outline-none focus:outline-none -webkit-tap-highlight-color-transparent" type="button" aria-expanded="false">
                            <span>What areas do you review for conversion improvement?</span>
                            <svg className="w-6 h-6 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                        </button>
                        <div className="faq-answer text-[#cbd5e1]">
                            We review landing pages, forms, product pages, carts, checkout flows, CTAs, messaging, trust signals, tracking events, and user behaviour across the post-click journey.
                        </div>
                    </div>

                    <div className="faq-item trace-card relative theme-pink px-6 py-2 md:px-8 md:py-3 text-left">
                        <button className="faq-button text-white w-full select-none outline-none focus:outline-none -webkit-tap-highlight-color-transparent" type="button" aria-expanded="false">
                            <span>Can this support both e-commerce and lead generation campaigns?</span>
                            <svg className="w-6 h-6 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                        </button>
                        <div className="faq-answer text-[#cbd5e1]">
                            Yes. It can support e-commerce sales, cart recovery, lead form completion, enquiry generation, sign-ups, subscriptions, and other measurable actions.
                        </div>
                    </div>

                    <div className="faq-item trace-card relative theme-blue px-6 py-2 md:px-8 md:py-3 text-left">
                        <button className="faq-button text-white w-full select-none outline-none focus:outline-none -webkit-tap-highlight-color-transparent" type="button" aria-expanded="false">
                            <span>Do advertisers get visibility into conversion performance?</span>
                            <svg className="w-6 h-6 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                        </button>
                        <div className="faq-answer text-[#cbd5e1]">
                            Yes. Advertisers can receive reporting visibility across traffic sources, user actions, conversion events, campaign movement, and optimization insights based on the campaign setup.
                        </div>
                    </div>

                    <div className="faq-item trace-card relative theme-indigo px-6 py-2 md:px-8 md:py-3 text-left">
                        <button className="faq-button text-white w-full select-none outline-none focus:outline-none -webkit-tap-highlight-color-transparent" type="button" aria-expanded="false">
                            <span>Do you redesign the full website or only campaign pages?</span>
                            <svg className="w-6 h-6 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                        </button>
                        <div className="faq-answer text-[#cbd5e1]">
                            This depends on the requirement. In many cases, we focus first on campaign landing pages, forms, product pages, checkout flows, or key conversion paths before recommending wider website improvements.
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="target-audit-section" className="relative z-10 py-32 px-6 lg:px-12 overflow-visible border-t border-white/5" style={{ background: "linear-gradient(to bottom, rgba(15, 23, 42, 0.95) 0%, rgba(0, 0, 0, 1) 100%)" }}>
            <div className="max-w-4xl mx-auto text-center smm-reveal">
                <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6">Ready to Turn More Traffic Into <span className="text-gradient-smm">Meaningful Action?</span></h2>
                <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">Let's explore how AscendiaPrime can help your brand improve post-click journeys, reduce friction, and strengthen conversion outcomes with a clearer performance-led approach.</p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="open-contact-modal w-full sm:w-auto text-white bg-gradient-to-r from-[#3F8BF9] via-[#7469F8] to-[#AB57F3] px-8 py-4 rounded-2xl font-bold text-lg shadow-[0_0_20px_rgba(63,139,249,0.4)] hover:shadow-[0_0_30px_rgba(63,139,249,0.6)] hover:-translate-y-0.5 transition-all" type="button">
                        Submit Advertiser Enquiry
                    </button>
                    <button className="open-contact-modal w-full sm:w-auto text-white border border-[#AB57F3]/30 bg-gradient-to-r from-[#7469F8] via-[#AB57F3] to-[#E057D8] px-8 py-4 rounded-2xl font-bold text-lg shadow-[0_0_20px_rgba(171,87,243,0.4)] hover:shadow-[0_0_30px_rgba(171,87,243,0.6)] hover:-translate-y-0.5 transition-all" type="button">
                        Start a Conversation
                    </button>
                </div>
            </div>

        </section>

    </div> 

    <div id="conversation-modal" className="conversation-modal hidden opacity-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[#020617]/80 backdrop-blur-md modal-close-overlay cursor-pointer"></div>
        <div className="conversation-modal-panel popup-content modern-form-wrapper scale-95" role="dialog" aria-modal="true" aria-labelledby="conversation-modal-title" style={{ boxShadow: "0 0 40px rgba(171,87,243,0.25)" }}>
            <button className="modal-close-btn js-close-conversation" type="button" aria-label="Close conversation form">&times;</button>
            <h3 id="conversation-modal-title" className="text-3xl font-bold text-white mb-8 pr-10">Lets talk growth</h3>
            <ContactForm />
        </div>
    </div>

    
</div>
    </PageRevealEffects>
  );
}
