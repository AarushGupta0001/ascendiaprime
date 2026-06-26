"use client";

import Link from "next/link";

import "@/styles/about-us.css";

import ContactForm from "@/components/forms/ContactForm";

import ParticleCanvas from "@/components/effects/ParticleCanvas";

import PageRevealEffects from "@/components/effects/PageRevealEffects";

export default function AboutUsPage() {
  return (
    <PageRevealEffects>
      <div id="about-us-master" style={{ width: "100%", position: "relative", color: "#cbd5e1", fontFamily: "'Poppins', sans-serif" }}>

    <ParticleCanvas id="nexus-canvas" className="fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none opacity-50" />

    <div id="contact-modal" className="fixed inset-0 z-[100] hidden items-center justify-center p-4 sm:p-6 opacity-0 transition-opacity duration-300">
        <div className="absolute inset-0 bg-[#020617]/80 backdrop-blur-md modal-close-overlay cursor-pointer"></div>
        
        <div className="relative w-full max-w-2xl bg-[#0b111d] border border-[#7469F8]/30 rounded-3xl p-8 sm:p-12 shadow-[0_0_50px_rgba(116,105,248,0.2)] transform scale-95 transition-transform duration-300 popup-content overflow-y-auto max-h-[90vh]">
            
            <button className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors modal-close-btn bg-white/5 hover:bg-white/10 p-2 rounded-full cursor-pointer z-50">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            
            <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-3">Let's Talk Growth</h3>
                <p className="text-slate-400 text-sm">Fill out the form below and our team will get back to you shortly.</p>
            </div>
            
            <div className="w-full text-left">
                <ContactForm />
            </div>
        </div>
    </div>

    <div className="relative z-10 w-full" style={{ perspective: "1500px" }}>
        
        <section className="min-h-[90vh] flex flex-col justify-center pt-32 pb-20 px-6 lg:px-12 relative">
            <div className="ambient-glow"></div>
            
            <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-20">
                <div className="fade-up-element text-left">
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#AB57F3]/30 bg-[#AB57F3]/10 text-[#E057D8] text-xs font-bold uppercase tracking-widest mb-8">
                        <span className="w-2 h-2 rounded-full bg-[#E057D8] animate-ping"></span>
                        About AscendiaPrime
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-black leading-[1.1] text-white tracking-tight mb-8">
                        Built on Experience.<br/>
                        Driven by <span className="text-shimmer">Transparency.</span><br/>
                        Focused on Growth.
                    </h1>
                    
                    <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-light max-w-2xl">
                        AscendiaPrime was founded in January 2025 with a clear objective: to bring more transparency, accountability, and ethical business practices into performance marketing.<br /><br />
                        Built by experienced professionals with over 20 years of collective industry expertise across marketing, advertising, media, and performance-led growth, we help brands and partners scale through clear strategy, transparent execution, and measurable outcomes across global markets.
                    </p>
                    
                    <div>
                        <Link href="#services" className="inline-flex justify-center items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-[#7469F8] to-[#AB57F3] text-white font-bold text-lg transition-transform hover:scale-105 shadow-[0_0_20px_rgba(171,87,243,0.4)]">
                                Explore Our Growth Framework
                        </Link>
                    </div>
                </div>

                <div className="fade-up-element relative h-[400px] md:h-[550px] w-full rounded-3xl border border-white/10 bg-[#0b111d] flex flex-col items-center justify-end pb-12 overflow-hidden shadow-[0_0_50px_rgba(116,105,248,0.15)] group">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_90%)] z-0"></div>
                    
                    <div className="relative w-4/5 h-[60%] flex items-end justify-between gap-3 sm:gap-6 z-10 border-b border-white/10 px-4">
                        <div className="relative w-full bg-gradient-to-t from-[#3F8BF9]/10 to-[#3F8BF9] rounded-t-lg shadow-[0_0_20px_rgba(63,139,249,0.3)] animate-[growBar_3s_ease-out_infinite_alternate]" style={{ height: "40%" }}>
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]"></div>
                        </div>
                        <div className="relative w-full bg-gradient-to-t from-[#7469F8]/10 to-[#7469F8] rounded-t-lg shadow-[0_0_20px_rgba(116,105,248,0.3)] animate-[growBar_3s_ease-out_infinite_alternate]" style={{ height: "60%", animationDelay: "0.5s" }}>
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]"></div>
                        </div>
                        <div className="relative w-full bg-gradient-to-t from-[#AB57F3]/10 to-[#AB57F3] rounded-t-lg shadow-[0_0_20px_rgba(171,87,243,0.3)] animate-[growBar_3s_ease-out_infinite_alternate]" style={{ height: "80%", animationDelay: "1s" }}>
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]"></div>
                        </div>
                        <div className="relative w-full bg-gradient-to-t from-[#E057D8]/10 to-[#E057D8] rounded-t-lg shadow-[0_0_20px_rgba(224,87,216,0.3)] animate-[growBar_3s_ease-out_infinite_alternate]" style={{ height: "100%", animationDelay: "1.5s" }}>
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]"></div>
                        </div>
                    </div>

                    <div className="absolute top-[15%] left-[10%] w-16 h-16 rounded-full border border-[#3F8BF9]/40 bg-gradient-to-br from-[#3F8BF9]/20 to-transparent flex items-center justify-center levitate">
                        <div className="w-2 h-2 rounded-full bg-[#3F8BF9] animate-ping"></div>
                    </div>
                    <div className="absolute top-[30%] right-[10%] w-24 h-24 rounded-full border border-[#E057D8]/40 bg-gradient-to-tl from-[#E057D8]/20 to-transparent flex items-center justify-center levitate-delayed">
                        <div className="w-3 h-3 rounded-full bg-[#E057D8] animate-ping" style={{ animationDuration: "2s" }}></div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-24 px-6 lg:px-12 relative z-10">
            <div className="max-w-[1000px] mx-auto w-full text-center fade-up-element">
                <h2 className="text-sm font-bold text-[#3F8BF9] uppercase tracking-widest mb-4">Who We Are</h2>
                <h3 className="text-3xl md:text-5xl font-bold mb-10 leading-tight pb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#3F8BF9] to-[#AB57F3]">A Performance-Led Growth Partner for Modern Brands</h3>
                
                <p className="text-xl text-slate-300 leading-relaxed font-light mb-6">
                    We support global advertisers, publishers, and agencies through a unified ecosystem built around sustainable performance, active campaign transparency, and exceptional customer experiences.
                </p>
                <p className="text-xl text-slate-300 leading-relaxed font-light mb-6">
                    Our mission is to drive meaningful outcomes using precise audience strategies, robust stakeholder relationships, comprehensive reporting metrics, and continuous ecosystem optimization.
                </p>
                <p className="text-xl text-slate-300 leading-relaxed font-medium">
                    We ensure every partner receives complete campaign visibility and proactive operational support, establishing clear paths of communication and long-term ecosystem value.
                </p>
            </div>
        </section>

        <section className="py-24 px-6 lg:px-12 relative z-10">
            <div className="max-w-[1200px] mx-auto w-full fade-up-element">
                <div className="relative overflow-hidden rounded-3xl p-10 md:p-16 border border-[#AB57F3]/20 bg-gradient-to-br from-[#020617] to-[#0b111d] shadow-[0_0_50px_rgba(171,87,243,0.1)] text-center">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#7469F8]/10 rounded-full blur-[100px] pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E057D8]/10 rounded-full blur-[100px] pointer-events-none"></div>
                    
                    <div className="relative z-10">
                        <h2 className="text-sm font-bold text-[#E057D8] uppercase tracking-widest mb-4">Why We Started</h2>
                        <h3 className="text-3xl md:text-5xl font-bold mb-8 pb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#7469F8] to-[#AB57F3]">Created to Make Performance Marketing <span className="text-shimmer">More Transparent</span></h3>
                        
                        <div className="space-y-6 text-lg text-slate-300 font-light leading-relaxed max-w-4xl mx-auto">
                            <p>The digital performance space has evolved rapidly, but transparency, communication, and campaign visibility are still major concerns for many brands and partners. AscendiaPrime was created to address this gap.</p>
                            <p>Our objective is to offer a more thoughtful and accountable approach to growth — one where advertisers can understand how campaigns are performing, publishers receive the right support to scale effectively, and every activity is aligned with clear expectations, compliance, and measurable results.</p>
                            <div className="inline-block mt-6">
                                <p className="text-xl font-medium text-white border-l-4 border-r-4 border-[#3F8BF9] px-6 py-4 bg-[#3F8BF9]/5 rounded-xl">
                                    We are not here to operate as just another network. We are here to build a trusted performance ecosystem where growth is supported by strategy, ethics, visibility, and long-term value.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-24 px-6 lg:px-12 relative z-10">
            <div className="max-w-[1400px] mx-auto w-full">
                <div className="text-center mb-16 fade-up-element">
                    <h2 className="text-sm font-bold text-[#3F8BF9] uppercase tracking-widest mb-4">What We Stand For</h2>
                    <h3 className="text-4xl md:text-5xl font-bold pb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#AB57F3] to-[#E057D8]">Four Pillars of Our Approach</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="interactive-card fade-up-element">
                        <div className="card-icon-box text-[#3F8BF9] border-[#3F8BF9]/30 bg-[#3F8BF9]/10">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3 relative z-10">1. Transparency First</h4>
                        <p className="text-slate-400 text-sm leading-relaxed relative z-10">We believe visibility builds trust. Our approach is supported by clear reporting, tracking, traffic visibility, and open communication across campaign activity.</p>
                    </div>

                    <div className="interactive-card fade-up-element" style={{ transitionDelay: "0.1s" }}>
                        <div className="card-icon-box text-[#7469F8] border-[#7469F8]/30 bg-[#7469F8]/10">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3 relative z-10">2. Ethical Performance</h4>
                        <p className="text-slate-400 text-sm leading-relaxed relative z-10">We focus on compliant, quality-driven, and responsible growth practices that protect the interests of advertisers, publishers, and partners.</p>
                    </div>

                    <div className="interactive-card fade-up-element" style={{ transitionDelay: "0.2s" }}>
                        <div className="card-icon-box text-[#AB57F3] border-[#AB57F3]/30 bg-[#AB57F3]/10">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3 relative z-10">3. Dedicated Support</h4>
                        <p className="text-slate-400 text-sm leading-relaxed relative z-10">Our advertisers and partners receive dedicated account management, regular monitoring, and proactive support to improve campaign performance.</p>
                    </div>

                    <div className="interactive-card fade-up-element" style={{ transitionDelay: "0.3s" }}>
                        <div className="card-icon-box text-[#E057D8] border-[#E057D8]/30 bg-[#E057D8]/10">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3 relative z-10">4. Meaningful Growth</h4>
                        <p className="text-slate-400 text-sm leading-relaxed relative z-10">We focus on results that matter — quality traffic, conversions, campaign scale, stronger partnerships, and long-term business value.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-24 px-6 lg:px-12 relative z-10">
            <div className="max-w-[1400px] mx-auto w-full">
                <div className="text-center mb-16 fade-up-element">
                    <h2 className="text-sm font-bold text-[#E057D8] uppercase tracking-widest mb-4">How We Support Stakeholders</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="interactive-card fade-up-element p-8 md:p-12">
                        <h3 className="text-3xl font-bold text-white mb-6 text-center lg:text-left">For Advertisers</h3>
                        <p className="text-slate-300 mb-8 leading-relaxed text-center lg:text-left">We support advertisers with dedicated account management, real-time dashboard visibility, performance monitoring, reporting, and strategic guidance to help campaigns scale with confidence.</p>
                        
                        <h4 className="text-[#3F8BF9] font-bold mb-4 text-center lg:text-left">Key points:</h4>
                        <ul className="space-y-3 text-slate-400">
                            <li className="flex items-start gap-3"><span className="text-[#3F8BF9] mt-1">▹</span> Dedicated account manager</li>
                            <li className="flex items-start gap-3"><span className="text-[#3F8BF9] mt-1">▹</span> Dashboard and reporting visibility</li>
                            <li className="flex items-start gap-3"><span className="text-[#3F8BF9] mt-1">▹</span> Campaign monitoring and optimization</li>
                            <li className="flex items-start gap-3"><span className="text-[#3F8BF9] mt-1">▹</span> Transparent retargeting and source visibility</li>
                            <li className="flex items-start gap-3"><span className="text-[#3F8BF9] mt-1">▹</span> Strategy support for scaling objectives</li>
                        </ul>
                    </div>

                    <div className="interactive-card fade-up-element p-8 md:p-12" style={{ transitionDelay: "0.1s" }}>
                        <h3 className="text-3xl font-bold text-white mb-6 text-center lg:text-left">For Publishers & Partners</h3>
                        <p className="text-slate-300 mb-8 leading-relaxed text-center lg:text-left">We help publishers, affiliates, agencies, sub-networks, and media partners access relevant campaigns, maximize inventory utilization, and grow through timely support and faster payment processes.</p>
                        
                        <h4 className="text-[#AB57F3] font-bold mb-4 text-center lg:text-left">Key points:</h4>
                        <ul className="space-y-3 text-slate-400">
                            <li className="flex items-start gap-3"><span className="text-[#AB57F3] mt-1">▹</span> Campaign access and onboarding support</li>
                            <li className="flex items-start gap-3"><span className="text-[#AB57F3] mt-1">▹</span> Inventory utilization guidance</li>
                            <li className="flex items-start gap-3"><span className="text-[#AB57F3] mt-1">▹</span> Regular communication</li>
                            <li className="flex items-start gap-3"><span className="text-[#AB57F3] mt-1">▹</span> Timely and faster payments</li>
                            <li className="flex items-start gap-3"><span className="text-[#AB57F3] mt-1">▹</span> Long-term partnership focus</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-24 px-6 lg:px-12 relative z-10">
            <div className="max-w-[1200px] mx-auto w-full">
                <div className="text-center mb-16 fade-up-element">
                    <h2 className="text-sm font-bold text-[#7469F8] uppercase tracking-widest mb-4">Our Growth Ecosystem</h2>
                    <h3 className="text-4xl md:text-5xl font-bold mb-6 pb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#7469F8] to-[#3F8BF9]">A Connected Ecosystem for Scalable Growth</h3>
                    <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        AscendiaPrime brings together performance marketing, publisher partnerships, programmatic media, retargeting, and digital growth solutions into one connected framework. This ecosystem allows us to support brands at different stages of the customer journey — from awareness and engagement to acquisition, conversion, and retention.
                    </p>
                </div>

                <div className="flex flex-col gap-6">
                    <div className="interactive-card fade-up-element flex flex-col md:flex-row items-center gap-8 p-8 text-center md:text-left">
                        <div className="flex-shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br from-[#3F8BF9]/20 to-transparent border border-[#3F8BF9]/30 flex items-center justify-center text-3xl font-black text-[#3F8BF9]">01</div>
                        <div>
                            <h4 className="text-2xl font-bold text-white mb-3">Performance Marketing & Partner Growth</h4>
                            <p className="text-slate-400">Affiliate marketing, publisher partnerships, PPC, paid social, retargeting, and conversion-led growth.</p>
                        </div>
                    </div>

                    <div className="interactive-card fade-up-element flex flex-col md:flex-row items-center gap-8 p-8 text-center md:text-left" style={{ transitionDelay: "0.1s" }}>
                        <div className="flex-shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br from-[#AB57F3]/20 to-transparent border border-[#AB57F3]/30 flex items-center justify-center text-3xl font-black text-[#AB57F3]">02</div>
                        <div>
                            <h4 className="text-2xl font-bold text-white mb-3">Programmatic Branding & Awareness</h4>
                            <p className="text-slate-400">Display, video, native, CTV, and DSP-led media buying to help brands build visibility and reach relevant audiences.</p>
                        </div>
                    </div>

                    <div className="interactive-card fade-up-element flex flex-col md:flex-row items-center gap-8 p-8 text-center md:text-left" style={{ transitionDelay: "0.2s" }}>
                        <div className="flex-shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br from-[#E057D8]/20 to-transparent border border-[#E057D8]/30 flex items-center justify-center text-3xl font-black text-[#E057D8]">03</div>
                        <div>
                            <h4 className="text-2xl font-bold text-white mb-3">Digital, Creative & Web Solutions</h4>
                            <p className="text-slate-400">SEO, social media, influencer marketing, ORM, creative support, and web solutions designed to strengthen digital presence and customer experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-24 px-6 lg:px-12 relative z-10">
            <div className="max-w-[1400px] mx-auto w-full">
                <div className="text-center mb-20 fade-up-element">
                    <h2 className="text-sm font-bold text-[#3F8BF9] uppercase tracking-widest mb-4">Our Approach</h2>
                    <h3 className="text-4xl md:text-5xl font-bold pb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#E057D8] to-[#7469F8]">Simple 4-Step Process</h3>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    <div className="timeline-line hidden md:block"></div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative z-10">
                        
                        <div className="fade-up-element flex flex-col md:items-center md:text-center group pl-12 md:pl-0 relative">
                            <div className="absolute md:relative left-0 top-0 md:mb-6 w-16 h-16 rounded-full bg-[#020617] border-2 border-[#3F8BF9] text-[#3F8BF9] flex items-center justify-center text-xl font-bold group-hover:bg-[#3F8BF9] group-hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(63,139,249,0.5)]">
                                1
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-3 pt-2 md:pt-0">Understand</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">We begin by understanding the brand, campaign goals, audience, markets, KPIs, and growth expectations.</p>
                        </div>

                        <div className="fade-up-element flex flex-col md:items-center md:text-center group pl-12 md:pl-0 relative" style={{ transitionDelay: "0.1s" }}>
                            <div className="absolute md:relative left-0 top-0 md:mb-6 w-16 h-16 rounded-full bg-[#020617] border-2 border-[#7469F8] text-[#7469F8] flex items-center justify-center text-xl font-bold group-hover:bg-[#7469F8] group-hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(116,105,248,0.5)]">
                                2
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-3 pt-2 md:pt-0">Align</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">We define the right strategy, channel mix, partner ecosystem, and tracking requirements before scaling activity.</p>
                        </div>

                        <div className="fade-up-element flex flex-col md:items-center md:text-center group pl-12 md:pl-0 relative" style={{ transitionDelay: "0.2s" }}>
                            <div className="absolute md:relative left-0 top-0 md:mb-6 w-16 h-16 rounded-full bg-[#020617] border-2 border-[#AB57F3] text-[#AB57F3] flex items-center justify-center text-xl font-bold group-hover:bg-[#AB57F3] group-hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(171,87,243,0.5)]">
                                3
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-3 pt-2 md:pt-0">Activate</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">We launch campaigns with structured monitoring, transparent reporting, and clear communication across stakeholders.</p>
                        </div>

                        <div className="fade-up-element flex flex-col md:items-center md:text-center group pl-12 md:pl-0 relative" style={{ transitionDelay: "0.3s" }}>
                            <div className="absolute md:relative left-0 top-0 md:mb-6 w-16 h-16 rounded-full bg-[#020617] border-2 border-[#E057D8] text-[#E057D8] flex items-center justify-center text-xl font-bold group-hover:bg-[#E057D8] group-hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(224,87,216,0.5)]">
                                4
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-3 pt-2 md:pt-0">Optimize</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">We continuously review performance, identify growth opportunities, improve traffic quality, and scale campaigns with measurable direction.</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <section className="py-24 px-6 lg:px-12 relative z-10 mb-20">
            <div className="max-w-[1200px] mx-auto w-full fade-up-element">
                <div className="relative overflow-hidden rounded-[2.5rem] p-12 md:p-20 text-center border border-[#7469F8]/30 shadow-[0_0_80px_rgba(116,105,248,0.15)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0b111d] to-[#020617] z-0"></div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(63,139,249,0.15)_0%,transparent_70%)] pointer-events-none z-0"></div>
                    
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Growth With Visibility,<br/><span className="text-shimmer">Support, and Accountability</span></h2>
                        
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
                            We are building AscendiaPrime as a modern growth ecosystem — one where performance, transparency, customer experience, and ethical business practices work together to create meaningful outcomes for every stakeholder.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <button className="open-contact-modal inline-flex justify-center items-center px-8 py-4 rounded-2xl bg-white text-[#020617] font-bold text-lg transition-transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)] w-full sm:w-auto cursor-pointer">
                                Start a Conversation
                            </button>
                            
                            <Link href="/#split-services-wrapper" className="inline-flex justify-center items-center px-8 py-4 rounded-2xl border border-white/20 text-white font-bold text-lg hover:bg-white/5 transition-colors w-full sm:w-auto">
                                Explore Our Growth Framework
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    </div> 

    
</div>
    </PageRevealEffects>
  );
}
