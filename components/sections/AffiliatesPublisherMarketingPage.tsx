"use client";

import "@/styles/affiliates-publisher-marketing.css";

import ContactForm from "@/components/forms/ContactForm";

import ParticleCanvas from "@/components/effects/ParticleCanvas";

import PageRevealEffects from "@/components/effects/PageRevealEffects";

export default function AffiliatesPublisherMarketingPage() {
  return (
    <PageRevealEffects>
      <div id="page-master" style={{ width: "100%", position: "relative", color: "#3F8BF9", fontFamily: "'Poppins', sans-serif" }}>

    <ParticleCanvas id="nexus-canvas" className="fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none opacity-50" />

    <div id="contact-modal" className="fixed inset-0 z-[100] hidden items-center justify-center p-4 sm:p-6 opacity-0 transition-opacity duration-300">
        <div className="absolute inset-0 bg-[#0B1221]/80 backdrop-blur-md modal-close-overlay cursor-pointer"></div>
        
        <div className="relative w-full max-w-2xl bg-[#101930] border border-[#7469F8]/30 rounded-3xl p-8 sm:p-12 shadow-[0_0_50px_rgba(116,105,248,0.2)] transform scale-95 transition-transform duration-300 popup-content overflow-y-auto max-h-[90vh]">
            
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
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#AB57F3]/30 bg-[#AB57F3]/10 text-[#E057D8] text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-[#E057D8] animate-ping"></span>
                        Performance Marketing & Partner Growth
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.15] text-white tracking-tight mb-8">
                        Affiliate & Publisher Marketing for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3F8BF9] to-[#AB57F3]">Scalable Customer Acquisition</span>
                    </h1>
                    
                    <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-light max-w-2xl">
                        We help advertisers grow through trusted affiliate and publisher partnerships, connecting brands with relevant audiences, quality traffic sources, and measurable performance opportunities across global markets.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 mb-16">
                        <button className="open-contact-modal home-gradient-btn w-full sm:w-auto">
                            Submit Advertiser Enquiry
                        </button>
                        <button className="open-contact-modal home-gradient-btn secondary w-full sm:w-auto">
                            Start a Conversation
                        </button>
                    </div>
                </div>

                
                <div className="fade-up-element relative h-[600px] md:h-[700px] w-full flex items-center justify-center group z-10">
                    
                    
                    <div className="absolute inset-0 z-0 flex items-center justify-center opacity-60 mix-blend-screen pointer-events-none">
                        <svg viewBox="0 0 1000 1000" className="w-[120%] h-[120%]">
                            <circle cx="500" cy="500" r="380" stroke="rgba(116, 105, 248, 0.15)" strokeWidth="1.5" strokeDasharray="4 8" fill="none" />
                            <circle cx="500" cy="500" r="280" stroke="rgba(171, 87, 243, 0.15)" strokeWidth="1.5" strokeDasharray="4 8" fill="none" />
                            <ellipse cx="500" cy="500" rx="180" ry="380" stroke="rgba(63, 139, 249, 0.15)" strokeWidth="1.5" strokeDasharray="4 8" fill="none" />
                            <ellipse cx="500" cy="500" rx="380" ry="180" stroke="rgba(224, 87, 216, 0.15)" strokeWidth="1.5" strokeDasharray="4 8" fill="none" />
                        </svg>
                    </div>

                    
                    <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                        <defs>
                            <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="8" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                        </defs>
                        <g strokeWidth="2" fill="none" className="opacity-50">
                            
                            <path id="p1" d="M 220 150 C 350 150, 400 500, 500 500" stroke="#E057D8" />
                            <path id="p2" d="M 220 325 C 350 325, 400 500, 500 500" stroke="#E057D8" />
                            <path id="p3" d="M 220 500 C 350 500, 400 500, 500 500" stroke="#AB57F3" />
                            <path id="p4" d="M 220 675 C 350 675, 400 500, 500 500" stroke="#AB57F3" />
                            <path id="p5" d="M 220 850 C 350 850, 400 500, 500 500" stroke="#7469F8" />

                            
                            <path id="a1" d="M 500 500 C 600 500, 650 200, 780 200" stroke="#3F8BF9" />
                            <path id="a2" d="M 500 500 C 600 500, 650 400, 780 400" stroke="#3F8BF9" />
                            <path id="a3" d="M 500 500 C 600 500, 650 600, 780 600" stroke="#3F8BF9" />
                            <path id="a4" d="M 500 500 C 600 500, 650 800, 780 800" stroke="#3F8BF9" />
                        </g>

                        
                        <circle r="4" fill="#E057D8" filter="url(#neonGlow)"><animateMotion dur="3s" repeatCount="indefinite"><mpath href="#p1"/></animateMotion></circle>
                        <circle r="4" fill="#E057D8" filter="url(#neonGlow)"><animateMotion dur="2.5s" repeatCount="indefinite" begin="0.5s"><mpath href="#p2"/></animateMotion></circle>
                        <circle r="4" fill="#AB57F3" filter="url(#neonGlow)"><animateMotion dur="3.5s" repeatCount="indefinite"><mpath href="#p3"/></animateMotion></circle>
                        <circle r="4" fill="#AB57F3" filter="url(#neonGlow)"><animateMotion dur="2.8s" repeatCount="indefinite" begin="1s"><mpath href="#p4"/></animateMotion></circle>
                        <circle r="4" fill="#7469F8" filter="url(#neonGlow)"><animateMotion dur="3.2s" repeatCount="indefinite" begin="0.2s"><mpath href="#p5"/></animateMotion></circle>

                        
                        <circle r="4" fill="#3F8BF9" filter="url(#neonGlow)"><animateMotion dur="3s" repeatCount="indefinite"><mpath href="#a1"/></animateMotion></circle>
                        <circle r="4" fill="#3F8BF9" filter="url(#neonGlow)"><animateMotion dur="2.4s" repeatCount="indefinite" begin="0.7s"><mpath href="#a2"/></animateMotion></circle>
                        <circle r="4" fill="#3F8BF9" filter="url(#neonGlow)"><animateMotion dur="3.6s" repeatCount="indefinite" begin="0.3s"><mpath href="#a3"/></animateMotion></circle>
                        <circle r="4" fill="#3F8BF9" filter="url(#neonGlow)"><animateMotion dur="2.9s" repeatCount="indefinite" begin="1.2s"><mpath href="#a4"/></animateMotion></circle>
                    </svg>

                    
                    <div className="absolute left-0 top-0 h-full flex flex-col justify-between py-[5%] w-[35%] lg:w-[30%] z-10">
                        <p className="text-[10px] font-bold text-[#E057D8] tracking-widest uppercase ml-2 mb-2 hidden md:block">Publishers</p>
                        
                        <div className="bg-[#101930]/90 border border-white/10 rounded-xl p-2.5 flex items-center gap-3 backdrop-blur-md w-full shadow-lg relative left-0 transition-transform hover:translate-x-2">
                            <div className="w-8 h-8 rounded bg-[#E057D8]/20 text-[#E057D8] flex items-center justify-center shrink-0">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
                            </div>
                            <div>
                                <p className="text-[10px] text-slate-400 mb-0.5 whitespace-nowrap">Content Sites</p>
                                <p className="text-[11px] font-bold text-white">12,450+</p>
                            </div>
                        </div>

                        <div className="bg-[#101930]/90 border border-white/10 rounded-xl p-2.5 flex items-center gap-3 backdrop-blur-md w-full shadow-lg relative left-0 transition-transform hover:translate-x-2">
                            <div className="w-8 h-8 rounded bg-[#E057D8]/20 text-[#E057D8] flex items-center justify-center shrink-0">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                            </div>
                            <div>
                                <p className="text-[10px] text-slate-400 mb-0.5 whitespace-nowrap">Niche Blogs</p>
                                <p className="text-[11px] font-bold text-white">8,620+</p>
                            </div>
                        </div>

                        <div className="bg-[#101930]/90 border border-white/10 rounded-xl p-2.5 flex items-center gap-3 backdrop-blur-md w-full shadow-lg relative left-0 transition-transform hover:translate-x-2">
                            <div className="w-8 h-8 rounded bg-[#AB57F3]/20 text-[#AB57F3] flex items-center justify-center shrink-0">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
                            </div>
                            <div>
                                <p className="text-[10px] text-slate-400 mb-0.5 whitespace-nowrap">Comparators</p>
                                <p className="text-[11px] font-bold text-white">6,230+</p>
                            </div>
                        </div>

                        <div className="bg-[#101930]/90 border border-white/10 rounded-xl p-2.5 flex items-center gap-3 backdrop-blur-md w-full shadow-lg relative left-0 transition-transform hover:translate-x-2">
                            <div className="w-8 h-8 rounded bg-[#AB57F3]/20 text-[#AB57F3] flex items-center justify-center shrink-0">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </div>
                            <div>
                                <p className="text-[10px] text-slate-400 mb-0.5 whitespace-nowrap">Social Partners</p>
                                <p className="text-[11px] font-bold text-white">24,540+</p>
                            </div>
                        </div>

                        <div className="bg-[#101930]/90 border border-white/10 rounded-xl p-2.5 flex items-center gap-3 backdrop-blur-md w-full shadow-lg relative left-0 transition-transform hover:translate-x-2">
                            <div className="w-8 h-8 rounded bg-[#7469F8]/20 text-[#7469F8] flex items-center justify-center shrink-0">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <div>
                                <p className="text-[10px] text-slate-400 mb-0.5 whitespace-nowrap">Email Partners</p>
                                <p className="text-[11px] font-bold text-white">18,300+</p>
                            </div>
                        </div>
                    </div>

                    
                    <div className="absolute right-0 top-0 h-full flex flex-col justify-between py-[12%] w-[35%] lg:w-[30%] z-10">
                        <p className="text-[10px] font-bold text-[#3F8BF9] tracking-widest uppercase ml-2 mb-2 hidden md:block">Advertisers</p>

                        <div className="bg-[#101930]/90 border border-white/10 rounded-xl p-2.5 flex items-center gap-3 backdrop-blur-md w-full shadow-lg relative right-0 transition-transform hover:-translate-x-2">
                            <div className="w-8 h-8 rounded bg-[#3F8BF9]/20 text-[#3F8BF9] flex items-center justify-center shrink-0">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <div className="flex-1">
                                <p className="text-[10px] text-slate-400 mb-0.5 whitespace-nowrap">Finance</p>
                                <p className="text-[10px] text-slate-500 font-medium">ROAS <span className="text-white font-bold ml-1">6.3x</span></p>
                            </div>
                            <div className="absolute right-3 bottom-2 w-10">
                                <svg viewBox="0 0 40 15" className="w-full stroke-[#3F8BF9] fill-none" strokeWidth="1.5"><path d="M0 10 Q5 12, 10 8 T20 12 T30 5 T40 0"/></svg>
                            </div>
                        </div>

                        <div className="bg-[#101930]/90 border border-white/10 rounded-xl p-2.5 flex items-center gap-3 backdrop-blur-md w-full shadow-lg relative right-0 transition-transform hover:-translate-x-2">
                            <div className="w-8 h-8 rounded bg-[#3F8BF9]/20 text-[#3F8BF9] flex items-center justify-center shrink-0">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </div>
                            <div className="flex-1">
                                <p className="text-[10px] text-slate-400 mb-0.5 whitespace-nowrap">eCommerce</p>
                                <p className="text-[10px] text-slate-500 font-medium">ROAS <span className="text-white font-bold ml-1">5.8x</span></p>
                            </div>
                            <div className="absolute right-3 bottom-2 w-10">
                                <svg viewBox="0 0 40 15" className="w-full stroke-[#3F8BF9] fill-none" strokeWidth="1.5"><path d="M0 12 Q5 8, 10 10 T20 6 T30 8 T40 2"/></svg>
                            </div>
                        </div>

                        <div className="bg-[#101930]/90 border border-white/10 rounded-xl p-2.5 flex items-center gap-3 backdrop-blur-md w-full shadow-lg relative right-0 transition-transform hover:-translate-x-2">
                            <div className="w-8 h-8 rounded bg-[#3F8BF9]/20 text-[#3F8BF9] flex items-center justify-center shrink-0">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
                            </div>
                            <div className="flex-1">
                                <p className="text-[10px] text-slate-400 mb-0.5 whitespace-nowrap">SaaS</p>
                                <p className="text-[10px] text-slate-500 font-medium">ROAS <span className="text-white font-bold ml-1">7.1x</span></p>
                            </div>
                            <div className="absolute right-3 bottom-2 w-10">
                                <svg viewBox="0 0 40 15" className="w-full stroke-[#3F8BF9] fill-none" strokeWidth="1.5"><path d="M0 14 Q5 12, 10 10 T20 4 T30 6 T40 0"/></svg>
                            </div>
                        </div>

                        <div className="bg-[#101930]/90 border border-white/10 rounded-xl p-2.5 flex items-center gap-3 backdrop-blur-md w-full shadow-lg relative right-0 transition-transform hover:-translate-x-2">
                            <div className="w-8 h-8 rounded bg-[#3F8BF9]/20 text-[#3F8BF9] flex items-center justify-center shrink-0">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                            </div>
                            <div className="flex-1">
                                <p className="text-[10px] text-slate-400 mb-0.5 whitespace-nowrap">Travel</p>
                                <p className="text-[10px] text-slate-500 font-medium">ROAS <span className="text-white font-bold ml-1">4.9x</span></p>
                            </div>
                            <div className="absolute right-3 bottom-2 w-10">
                                <svg viewBox="0 0 40 15" className="w-full stroke-[#3F8BF9] fill-none" strokeWidth="1.5"><path d="M0 12 Q5 14, 10 10 T20 12 T30 4 T40 2"/></svg>
                            </div>
                        </div>
                    </div>

                    
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <div className="w-28 h-28 lg:w-36 lg:h-36 rounded-full border border-[#AB57F3]/40 bg-[#0B1221] shadow-[0_0_60px_rgba(171,87,243,0.4)] flex items-center justify-center relative">
                            
                            <div className="absolute inset-[-10px] rounded-full border border-[#AB57F3] animate-ping opacity-20" style={{ animationDuration: "3s" }}></div>
                            <div className="absolute inset-[-20px] rounded-full border border-[#7469F8] animate-ping opacity-10" style={{ animationDuration: "4s" }}></div>
                            
                            
                            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border-2 border-t-[#E057D8] border-r-[#AB57F3] border-b-[#7469F8] border-l-[#3F8BF9] flex items-center justify-center bg-[#101930] shadow-inner relative z-10">
                                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M21.5 19.5L12 3 2.5 19.5h3.6l5.9-10.2 5.9 10.2h3.6z M12 14.5l-2.6 4.5h5.2z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto w-full relative z-20 mt-16 fade-up-element">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
                    <div className="px-4 text-center md:text-left">
                        <h4 className="text-xl font-bold text-white mb-2">17,000+ Publisher Database</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">Across multiple verticals and global markets.</p>
                    </div>
                    <div className="px-4 pt-6 md:pt-0 text-center md:text-left">
                        <h4 className="text-xl font-bold text-white mb-2">Flexible Campaign Models</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">CPA, CPL, CPS, hybrid, coupon, content, and publisher-led opportunities.</p>
                    </div>
                    <div className="px-4 pt-6 md:pt-0 text-center md:text-left">
                        <h4 className="text-xl font-bold text-white mb-2">Transparent Tracking & Reporting</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">Dashboard visibility to support campaign monitoring, validation, and optimization.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-20 px-6 lg:px-12 relative z-10">
            <div className="max-w-[1400px] mx-auto w-full fade-up-element">
                <div className="text-center md:text-left mb-12">
                    <h2 className="text-sm font-bold text-[#3F8BF9] uppercase tracking-widest mb-4">Structure & Accountability</h2>
                    <h3 className="text-3xl md:text-5xl font-bold pb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#3F8BF9] to-[#AB57F3]">Partner-Led Growth With Structure</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                    <p className="text-xl text-slate-300 leading-relaxed font-light">
                        Affiliate and publisher marketing can be a powerful acquisition channel when it is managed with the right structure. For advertisers, the value is not only in reaching more users, but in working with partners who can influence discovery, consideration, and conversion in a measurable way.
                    </p>
                    <p className="text-xl text-slate-300 leading-relaxed font-light">
                        We help brands build partner-led campaigns with clear campaign terms, relevant traffic sources, tracking visibility, and ongoing performance review. This allows advertisers to scale responsibly while maintaining better control over quality, compliance, and outcomes.
                    </p>
                </div>
            </div>
        </section>

        <section className="py-24 px-6 lg:px-12 relative z-10">
            <div className="max-w-[1400px] mx-auto w-full">
                <div className="text-center mb-16 fade-up-element">
                    <h2 className="text-sm font-bold text-[#7469F8] uppercase tracking-widest mb-4">Core Capabilities</h2>
                    <h3 className="text-4xl md:text-5xl font-bold pb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#7469F8] to-[#E057D8]">Affiliate & Publisher Marketing</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="interactive-card fade-up-element">
                        <div className="card-icon-box text-[#3F8BF9] border-[#3F8BF9]/30 bg-[#3F8BF9]/10">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-3 relative z-10">Affiliate Marketing</h4>
                        <p className="text-slate-400 leading-relaxed relative z-10">We support performance-based affiliate campaigns where partners are rewarded for measurable actions such as sales, leads, registrations, or qualified conversions. Our focus is on matching the right partners with the right campaign objectives.</p>
                    </div>

                    <div className="interactive-card fade-up-element" style={{ transitionDelay: "0.1s" }}>
                        <div className="card-icon-box text-[#7469F8] border-[#7469F8]/30 bg-[#7469F8]/10">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-3 relative z-10">Publisher Partnerships</h4>
                        <p className="text-slate-400 leading-relaxed relative z-10">We help advertisers work with content publishers, review sites, comparison platforms, commerce media partners, and editorial-style environments that can reach users across different stages of the buying journey.</p>
                    </div>

                    <div className="interactive-card fade-up-element" style={{ transitionDelay: "0.2s" }}>
                        <div className="card-icon-box text-[#AB57F3] border-[#AB57F3]/30 bg-[#AB57F3]/10">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path></svg>
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-3 relative z-10">Coupon & Promotional Partners</h4>
                        <p className="text-slate-400 leading-relaxed relative z-10">For brands running offer-led activity, we support coupon, voucher, and promotional partners that can help engage high-intent users and support conversion opportunities within defined campaign guidelines.</p>
                    </div>

                    <div className="interactive-card fade-up-element" style={{ transitionDelay: "0.3s" }}>
                        <div className="card-icon-box text-[#E057D8] border-[#E057D8]/30 bg-[#E057D8]/10">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-3 relative z-10">Agency & Sub-Network Collaboration</h4>
                        <p className="text-slate-400 leading-relaxed relative z-10">We also work with agencies and sub-networks that manage niche publisher relationships, regional inventory, and vertical-specific traffic sources. This helps advertisers extend reach while keeping campaign execution aligned with agreed rules.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-20 px-6 lg:px-12 relative z-10 bg-gradient-to-b from-transparent via-[#101930]/30 to-transparent">
            <div className="max-w-[1000px] mx-auto w-full text-center fade-up-element">
                <h3 className="text-3xl md:text-5xl font-bold mb-6 pb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#AB57F3] to-[#3F8BF9]">Partner Channels That Support the Customer Journey</h3>
                <p className="text-xl text-slate-300 leading-relaxed font-light mb-12">
                    Different partner types play different roles in customer acquisition. Some help create awareness, some influence consideration, and others support users closer to conversion. We help advertisers identify the right channel mix based on campaign goals, vertical, geography, and performance model.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                    <span className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:border-[#3F8BF9]/50 hover:bg-[#3F8BF9]/10 transition-all cursor-default">Content Publishers</span>
                    <span className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:border-[#7469F8]/50 hover:bg-[#7469F8]/10 transition-all cursor-default">Coupon & Deal Sites</span>
                    <span className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:border-[#AB57F3]/50 hover:bg-[#AB57F3]/10 transition-all cursor-default">Review Platforms</span>
                    <span className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:border-[#E057D8]/50 hover:bg-[#E057D8]/10 transition-all cursor-default">Comparison Sites</span>
                    <span className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:border-[#3F8BF9]/50 hover:bg-[#3F8BF9]/10 transition-all cursor-default">eCommerce Media Partners</span>
                    <span className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:border-[#7469F8]/50 hover:bg-[#7469F8]/10 transition-all cursor-default">Email Partners</span>
                    <span className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:border-[#AB57F3]/50 hover:bg-[#AB57F3]/10 transition-all cursor-default">Niche Affiliates</span>
                    <span className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:border-[#E057D8]/50 hover:bg-[#E057D8]/10 transition-all cursor-default">Influencer-Led Publishers</span>
                    <span className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:border-[#3F8BF9]/50 hover:bg-[#3F8BF9]/10 transition-all cursor-default">Agencies</span>
                    <span className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:border-[#7469F8]/50 hover:bg-[#7469F8]/10 transition-all cursor-default">Sub-Networks</span>
                </div>
            </div>
        </section>

        <section className="py-24 px-6 lg:px-12 relative z-10">
            <div className="max-w-[1400px] mx-auto w-full">
                <div className="text-center mb-20 fade-up-element">
                    <h2 className="text-sm font-bold text-[#E057D8] uppercase tracking-widest mb-4">Our Process</h2>
                    <h3 className="text-4xl md:text-5xl font-bold pb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#E057D8] to-[#7469F8]">How We Build Campaigns</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 relative z-10">
                    
                    <div className="fade-up-element flex flex-col items-start group relative bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-[#3F8BF9]/40 transition-colors">
                        <div className="w-14 h-14 rounded-full bg-[#0B1221] border-2 border-[#3F8BF9] text-[#3F8BF9] flex items-center justify-center text-xl font-bold group-hover:bg-[#3F8BF9] group-hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(63,139,249,0.5)] mb-6">1</div>
                        <h4 className="text-xl font-bold text-white mb-3">Campaign Objective Review</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">We begin by understanding the advertiser’s goals, target markets, audience profile, commission model, KPIs, and campaign expectations.</p>
                    </div>

                    <div className="fade-up-element flex flex-col items-start group relative bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-[#7469F8]/40 transition-colors" style={{ transitionDelay: "0.1s" }}>
                        <div className="w-14 h-14 rounded-full bg-[#0B1221] border-2 border-[#7469F8] text-[#7469F8] flex items-center justify-center text-xl font-bold group-hover:bg-[#7469F8] group-hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(116,105,248,0.5)] mb-6">2</div>
                        <h4 className="text-xl font-bold text-white mb-3">Partner Strategy and Alignment</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">We identify suitable partner categories, traffic sources, promotional methods, and channel opportunities based on the campaign objective.</p>
                    </div>

                    <div className="fade-up-element flex flex-col items-start group relative bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-[#AB57F3]/40 transition-colors" style={{ transitionDelay: "0.2s" }}>
                        <div className="w-14 h-14 rounded-full bg-[#0B1221] border-2 border-[#AB57F3] text-[#AB57F3] flex items-center justify-center text-xl font-bold group-hover:bg-[#AB57F3] group-hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(171,87,243,0.5)] mb-6">3</div>
                        <h4 className="text-xl font-bold text-white mb-3">Tracking and Campaign Terms</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">We align tracking links, attribution flow, allowed traffic sources, restricted activity, coupon rules, validation process, and reporting requirements.</p>
                    </div>

                    <div className="fade-up-element flex flex-col items-start group relative bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-[#E057D8]/40 transition-colors" style={{ transitionDelay: "0.3s" }}>
                        <div className="w-14 h-14 rounded-full bg-[#0B1221] border-2 border-[#E057D8] text-[#E057D8] flex items-center justify-center text-xl font-bold group-hover:bg-[#E057D8] group-hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(224,87,216,0.5)] mb-6">4</div>
                        <h4 className="text-xl font-bold text-white mb-3">Controlled Partner Activation</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">Campaigns are activated with relevant partners in a structured way, allowing performance to be reviewed before wider scaling.</p>
                    </div>

                    <div className="fade-up-element flex flex-col items-start group relative bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-[#3F8BF9]/40 transition-colors" style={{ transitionDelay: "0.4s" }}>
                        <div className="w-14 h-14 rounded-full bg-[#0B1221] border-2 border-[#3F8BF9] text-[#3F8BF9] flex items-center justify-center text-xl font-bold group-hover:bg-[#3F8BF9] group-hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(63,139,249,0.5)] mb-6">5</div>
                        <h4 className="text-xl font-bold text-white mb-3">Performance Monitoring</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">We monitor clicks, conversions, traffic quality, partner contribution, conversion trends, and campaign movement to identify what is working.</p>
                    </div>

                    <div className="fade-up-element flex flex-col items-start group relative bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-[#7469F8]/40 transition-colors" style={{ transitionDelay: "0.5s" }}>
                        <div className="w-14 h-14 rounded-full bg-[#0B1221] border-2 border-[#7469F8] text-[#7469F8] flex items-center justify-center text-xl font-bold group-hover:bg-[#7469F8] group-hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(116,105,248,0.5)] mb-6">6</div>
                        <h4 className="text-xl font-bold text-white mb-3">Optimization and Scale</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">We scale activity through stronger partners, improved visibility, campaign insights, and optimization actions aligned with advertiser objectives.</p>
                    </div>

                </div>
            </div>
        </section>

        <section className="py-24 px-6 lg:px-12 relative z-10">
            <div className="max-w-[1200px] mx-auto w-full fade-up-element">
                <div className="relative overflow-hidden rounded-[2.5rem] p-10 md:p-16 border border-[#AB57F3]/30 bg-gradient-to-br from-[#101930] to-[#0B1221] shadow-[0_0_80px_rgba(171,87,243,0.15)]">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(171,87,243,0.1)_0%,transparent_70%)] pointer-events-none z-0"></div>
                    
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-sm font-bold text-[#E057D8] uppercase tracking-widest mb-4">Visibility, Quality & Control</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Built Around <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AB57F3] to-[#E057D8]">Transparency</span></h3>
                            <p className="text-lg text-slate-300 leading-relaxed font-light mb-6">
                                Affiliate and publisher growth should never feel like a black box. Advertisers need confidence that campaign activity is aligned with approved traffic sources, brand expectations, and measurable business goals.
                            </p>
                            <p className="text-lg text-slate-300 leading-relaxed font-light">
                                Our platform supports affiliate and publisher campaigns with transparent communication, campaign-level reporting, partner monitoring, and validation support. This helps advertisers understand where growth is coming from and how performance can be improved over time.
                            </p>
                        </div>
                        
                        <div className="bg-black/20 rounded-3xl p-8 border border-white/5">
                            <h4 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Key Focus Areas:</h4>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#3F8BF9]/20 flex items-center justify-center text-[#3F8BF9]">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <span className="text-slate-300 font-medium">Clear allowed traffic source guidelines</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#7469F8]/20 flex items-center justify-center text-[#7469F8]">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <span className="text-slate-300 font-medium">Campaign-level tracking and reporting</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#AB57F3]/20 flex items-center justify-center text-[#AB57F3]">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <span className="text-slate-300 font-medium">Partner activity monitoring</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#E057D8]/20 flex items-center justify-center text-[#E057D8]">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <span className="text-slate-300 font-medium">Traffic quality review</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#3F8BF9]/20 flex items-center justify-center text-[#3F8BF9]">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <span className="text-slate-300 font-medium">Conversion validation support</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#7469F8]/20 flex items-center justify-center text-[#7469F8]">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <span className="text-slate-300 font-medium">Transparent communication with advertisers and partners</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-24 px-6 lg:px-12 relative z-10">
            <div className="max-w-[1400px] mx-auto w-full fade-up-element">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    
                    <div className="interactive-card p-10 md:p-14">
                        <h3 className="text-3xl font-bold text-white mb-8">Campaign Models <span className="text-[#3F8BF9]">We Support</span></h3>
                        <ul className="space-y-4 text-lg text-slate-300 font-light">
                            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#3F8BF9]"></span> CPA Campaigns</li>
                            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#7469F8]"></span> CPL Campaigns</li>
                            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#AB57F3]"></span> CPS / E-commerce Campaigns</li>
                            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#E057D8]"></span> Lead Generation</li>
                            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#3F8BF9]"></span> Coupon Campaigns</li>
                            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#7469F8]"></span> Product Feed Campaigns</li>
                            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#AB57F3]"></span> Content Partnerships</li>
                            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#E057D8]"></span> Hybrid Models</li>
                            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#3F8BF9]"></span> Publisher Placements</li>
                        </ul>
                    </div>

                    <div className="interactive-card p-10 md:p-14">
                        <h3 className="text-3xl font-bold text-white mb-6">Built for Multiple <span className="text-[#E057D8]">Performance Verticals</span></h3>
                        <p className="text-slate-300 leading-relaxed font-light mb-8">
                            Our platform supports affiliate and publisher-led growth across multiple industries and global markets, helping brands adapt partner strategy based on audience behaviour, geography, and campaign goals.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg text-slate-300 font-light">
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-white/50"></span> E-commerce & D2C</li>
                                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-white/50"></span> Fashion & Lifestyle</li>
                                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-white/50"></span> Beauty & Wellness</li>
                                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-white/50"></span> Health & Supplements</li>
                                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-white/50"></span> Technology & Electronics</li>
                            </ul>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-white/50"></span> Travel & Hospitality</li>
                                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-white/50"></span> Finance & Insurance</li>
                                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-white/50"></span> Education & Lead Generation</li>
                                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-white/50"></span> Subscription Brands</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section className="py-24 px-6 lg:px-12 relative z-10">
            <div className="max-w-[1000px] mx-auto w-full fade-up-element">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-[#7469F8] uppercase tracking-widest mb-4">Got Questions?</h2>
                    <h3 className="text-4xl font-bold pb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#7469F8] to-[#E057D8]">Frequently Asked Questions</h3>
                </div>

                <div className="bg-[#101930]/80 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-10">
                    
                    <div className="faq-item cursor-pointer border-b border-white/10 py-6">
                        <div className="flex justify-between items-center gap-4">
                            <h4 className="text-xl font-bold text-white">What is affiliate and publisher marketing?</h4>
                            <svg className="faq-icon w-6 h-6 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                        <div className="faq-answer">
                            <p className="text-slate-400 mt-4 leading-relaxed font-light">Affiliate and publisher marketing is a performance-led approach where approved partners promote a brand and are rewarded for measurable actions such as sales, leads, registrations, or conversions.</p>
                        </div>
                    </div>

                    <div className="faq-item cursor-pointer border-b border-white/10 py-6">
                        <div className="flex justify-between items-center gap-4">
                            <h4 className="text-xl font-bold text-white">How can affiliate and publisher marketing help advertisers?</h4>
                            <svg className="faq-icon w-6 h-6 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                        <div className="faq-answer">
                            <p className="text-slate-400 mt-4 leading-relaxed font-light">It helps advertisers reach relevant audiences through trusted partner channels, support customer acquisition, improve campaign reach, and drive measurable outcomes based on defined campaign goals.</p>
                        </div>
                    </div>

                    <div className="faq-item cursor-pointer border-b border-white/10 py-6">
                        <div className="flex justify-between items-center gap-4">
                            <h4 className="text-xl font-bold text-white">What type of partners can be activated?</h4>
                            <svg className="faq-icon w-6 h-6 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                        <div className="faq-answer">
                            <p className="text-slate-400 mt-4 leading-relaxed font-light">Partner types may include content publishers, coupon and deal sites, review platforms, comparison sites, niche affiliates, commerce media partners, agencies, and sub-networks.</p>
                        </div>
                    </div>

                    <div className="faq-item cursor-pointer border-b border-white/10 py-6">
                        <div className="flex justify-between items-center gap-4">
                            <h4 className="text-xl font-bold text-white">Can advertisers control the type of traffic allowed?</h4>
                            <svg className="faq-icon w-6 h-6 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                        <div className="faq-answer">
                            <p className="text-slate-400 mt-4 leading-relaxed font-light">Yes. Campaign terms can define allowed traffic sources, restricted activity, coupon rules, promotional guidelines, geography, and validation requirements.</p>
                        </div>
                    </div>

                    <div className="faq-item cursor-pointer border-b border-white/10 py-6">
                        <div className="flex justify-between items-center gap-4">
                            <h4 className="text-xl font-bold text-white">Do advertisers get real-time performance visibility?</h4>
                            <svg className="faq-icon w-6 h-6 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                        <div className="faq-answer">
                            <p className="text-slate-400 mt-4 leading-relaxed font-light">Yes. We provide advertisers with dashboard access and reporting visibility to monitor campaign performance, conversions, traffic activity, and optimization insights. This helps brands make informed decisions and maintain better control over campaign performance.</p>
                        </div>
                    </div>

                    <div className="faq-item cursor-pointer py-6">
                        <div className="flex justify-between items-center gap-4">
                            <h4 className="text-xl font-bold text-white">What campaign models can we support?</h4>
                            <svg className="faq-icon w-6 h-6 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                        <div className="faq-answer">
                            <p className="text-slate-400 mt-4 leading-relaxed font-light">We can support CPA, CPL, CPS, hybrid, product feed, coupon-led, content partnership, and publisher placement models depending on advertiser objectives.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-24 px-6 lg:px-12 relative z-10 mb-20">
            <div className="max-w-[1200px] mx-auto w-full fade-up-element">
                <div className="relative overflow-hidden rounded-[2.5rem] p-12 md:p-20 text-center border border-[#7469F8]/30 shadow-[0_0_80px_rgba(116,105,248,0.15)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#101930] to-[#0B1221] z-0"></div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(63,139,249,0.15)_0%,transparent_70%)] pointer-events-none z-0"></div>
                    
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">Ready to Scale Through Trusted <br/><span className="text-shimmer">Affiliate & Publisher Partnerships?</span></h2>
                        
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
                            Let’s explore how we can help your brand reach relevant audiences, activate the right partner channels, and grow through transparent, performance-led execution.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <button className="open-contact-modal home-gradient-btn w-full sm:w-auto">
                                Submit Advertiser Enquiry
                            </button>
                            
                            <button className="open-contact-modal home-gradient-btn secondary w-full sm:w-auto">
                                Start a Conversation
                            </button>
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
