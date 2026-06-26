"use client";

import "@/styles/ppc.css";

import PageRevealEffects from "@/components/effects/PageRevealEffects";

export default function PpcPage() {
  return (
    <PageRevealEffects>
      <div style={{ position: "fixed", top: "0", left: "0", width: "100vw", height: "100vh", backgroundColor: "#020617", zIndex: "-9999", pointerEvents: "none" }}></div>


<div id="ppc-master" style={{ width: "100%", position: "relative", color: "#cbd5e1", overflowX: "hidden", fontFamily: "'Poppins', sans-serif" }}>

    
    

    

    

    
    <div className="absolute border-radius-full filter blur-[140px] opacity-10 w-[800px] h-[800px] bg-[#3F8BF9] top-[10%] left-[-200px] animate-pulse pointer-events-none"></div>
    <div className="absolute border-radius-full filter blur-[140px] opacity-10 w-[600px] h-[600px] bg-[#E057D8] top-[40%] right-[-150px] animate-pulse pointer-events-none" style={{ animationDelay: "1s" }}></div>

    
    <section className="relative z-10 pt-24 pb-12 overflow-hidden" style={{ background: "rgba(2, 6, 23, 0.9)" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 min-h-[75vh] flex flex-col lg:flex-row items-center justify-between mb-12">
            
            <div className="w-full lg:w-5/12 text-center lg:text-left z-20 reveal-up mb-16 lg:mb-0">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3F8BF9]/10 border border-[#3F8BF9]/30 text-[#cbd5e1] text-sm font-medium tracking-wide mb-8">
                    <span className="w-2 h-2 rounded-full bg-[#E057D8] animate-pulse"></span>
                    Performance Marketing & Partner Growth
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-8 leading-tight">
                    Paid Media Built Around Intent,
                    <br className="hidden md:block" />
                    <span className="text-gradient-brand">Efficiency and Scale</span>
                </h1>
                <p className="text-lg text-[#94a3b8] max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                    We help advertisers plan, launch, and optimize Google, Meta, and PPC campaigns with a clear focus on audience intent, spend efficiency, conversion quality, and measurable business outcomes.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                    <a href="#enquiry" className="btn-glow cursor-pointer w-full sm:w-auto">
                       Submit Advertiser Enquiry
                    </a>
                    <a href="#conversation" className="btn-glow btn-glow-secondary w-full sm:w-auto">
                       Start a Conversation
                    </a>
                </div>
            </div>

            
            <div className="w-full lg:w-7/12 relative flex items-center justify-center min-h-[500px] md:min-h-[600px] z-10 reveal-up mt-12 lg:mt-0">
                <div className="relative w-full max-w-[550px] aspect-square transform scale-75 sm:scale-100 flex items-center justify-center">
                    
                    
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50 z-0" viewBox="0 0 500 500">
                        <g strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            
                            <path d="M250,250 L120,100" stroke="#3F8BF9" strokeDasharray="4 4" className="animate-pulse" />
                            
                            <path d="M250,250 L380,100" stroke="#7469F8" strokeDasharray="4 4" className="animate-pulse" style={{ animationDelay: "0.2s" }} />
                            
                            <path d="M250,250 L80,250" stroke="#3F8BF9" strokeDasharray="4 4" className="animate-pulse" style={{ animationDelay: "0.4s" }} />
                            
                            <path d="M250,250 L420,250" stroke="#AB57F3" strokeDasharray="4 4" className="animate-pulse" style={{ animationDelay: "0.6s" }} />
                            
                            <path d="M250,250 L250,420" stroke="#E057D8" strokeDasharray="4 4" className="animate-pulse" style={{ animationDelay: "0.8s" }} />
                        </g>
                    </svg>

                    
                    <div className="relative z-20 w-44 h-44 rounded-full border border-[#7469F8]/40 bg-slate-950/80 backdrop-blur-md flex flex-col items-center justify-center shadow-[0_0_50px_rgba(116,105,248,0.25)] hover:shadow-[0_0_70px_rgba(116,105,248,0.4)] transition-shadow duration-500">
                        
                        <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-[#3F8BF9] via-[#AB57F3] to-[#E057D8]" style={{ WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude", padding: "2px" }}></div>
                        
                        <img src="/images/logos/ascendiaprime-logo.png" alt="Optimization Hub" className="h-10 w-auto mb-2 object-contain filter drop-shadow-[0_0_10px_rgba(63,139,249,0.5)]"  />
                        <span className="text-[10px] text-slate-300 font-medium tracking-widest uppercase text-center leading-tight"></span>
                        
                        <div className="absolute inset-0 rounded-full border border-[#3F8BF9] animate-ping opacity-20"></div>
                    </div>

                    
                    <div className="absolute top-[8%] left-0 md:-left-[5%] z-20 trace-card theme-blue p-3 w-40 animate-float-slow" style={{ borderRadius: "0.75rem" }}>
                        <div className="flex items-center gap-2 mb-2">
                            <svg className="w-3.5 h-3.5 text-[#3F8BF9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            <span className="text-[9px] text-white font-bold uppercase tracking-widest">Search Intent</span>
                        </div>
                        <div className="space-y-1.5">
                            <div className="h-5 bg-slate-800/80 rounded border border-slate-700/50 flex justify-between items-center px-2">
                                <span className="text-[8px] text-slate-400">High-intent kw</span>
                                <svg className="w-2 h-2 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <div className="h-5 bg-slate-800/80 rounded border border-slate-700/50 flex justify-between items-center px-2">
                                <span className="text-[8px] text-slate-400">Competitor terms</span>
                                <svg className="w-2 h-2 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                        </div>
                    </div>

                    
                    <div className="absolute top-[8%] right-0 md:-right-[5%] z-20 trace-card theme-indigo p-3 w-44 animate-float-medium" style={{ borderRadius: "0.75rem" }}>
                        <div className="flex items-center gap-2 mb-2">
                            <svg className="w-3.5 h-3.5 text-[#7469F8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>
                            <span className="text-[9px] text-white font-bold uppercase tracking-widest">Budget Split</span>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                            <div className="w-10 h-10 rounded-full border-[5px] border-[#3F8BF9] border-t-[#AB57F3] border-r-[#E057D8]"></div>
                            <div className="text-[8px] text-slate-300 space-y-1.5 w-[55%]">
                                <div className="flex items-center justify-between"><div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#3F8BF9]"></span> Google</div> <span className="font-bold">60%</span></div>
                                <div className="flex items-center justify-between"><div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#AB57F3]"></span> Meta</div> <span className="font-bold">30%</span></div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="absolute top-[45%] left-[-5%] md:-left-[15%] z-20 trace-card theme-purple p-3 w-40 animate-float-fast" style={{ borderRadius: "0.75rem" }}>
                         <div className="flex items-center gap-2 mb-2">
                            <svg className="w-3.5 h-3.5 text-[#AB57F3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                            <span className="text-[9px] text-white font-bold uppercase tracking-widest">Creative Test</span>
                        </div>
                        <div className="flex gap-2">
                            <div className="h-10 flex-1 bg-slate-800 rounded border border-[#AB57F3]/60 relative overflow-hidden flex items-center justify-center">
                                <span className="text-[6px] text-[#AB57F3] font-bold">A WINNER</span>
                            </div>
                            <div className="h-10 flex-1 bg-slate-800/50 rounded border border-slate-700"></div>
                        </div>
                        <div className="mt-2 text-[8px] text-[#E057D8] font-medium flex justify-between items-center">
                            <span>A/B Variations</span>
                            <span>↑ 24% CTR</span>
                        </div>
                    </div>

                    
                    <div className="absolute top-[45%] right-[-5%] md:-right-[15%] z-20 trace-card theme-pink p-3 w-44 animate-float-slow" style={{ borderRadius: "0.75rem" }}>
                        <div className="flex items-center gap-2 mb-3">
                            <svg className="w-3.5 h-3.5 text-[#E057D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                            <span className="text-[9px] text-white font-bold uppercase tracking-widest">Optimization</span>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="text-[8px] text-slate-300">Bid Strategy</span> 
                                <div className="w-5 h-2.5 bg-[#3F8BF9] rounded-full relative"><div className="w-2.5 h-2.5 bg-white rounded-full absolute right-0 shadow-sm"></div></div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-[8px] text-slate-300">Audience Expansion</span> 
                                <div className="w-5 h-2.5 bg-[#AB57F3] rounded-full relative"><div className="w-2.5 h-2.5 bg-white rounded-full absolute right-0 shadow-sm"></div></div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-[8px] text-slate-300">Negative Keywords</span> 
                                <div className="w-5 h-2.5 bg-[#E057D8] rounded-full relative"><div className="w-2.5 h-2.5 bg-white rounded-full absolute right-0 shadow-sm"></div></div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="absolute bottom-[2%] md:-bottom-[5%] w-[110%] left-[-5%] z-20 flex flex-col gap-3">
                        
                        <div className="trace-card theme-blue p-2.5 flex justify-between items-center w-full shadow-lg" style={{ borderRadius: "0.75rem" }}>
                            <div className="flex items-center gap-2 px-2">
                                <div className="w-5 h-5 rounded-full bg-[#3F8BF9]/20 flex items-center justify-center"><svg className="w-3 h-3 text-[#3F8BF9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg></div>
                                <span className="text-[8px] text-slate-300 hidden sm:block">Impressions</span>
                            </div>
                            <div className="text-[#3F8BF9]">→</div>
                            <div className="flex items-center gap-2 px-2">
                                <div className="w-5 h-5 rounded-full bg-[#7469F8]/20 flex items-center justify-center"><svg className="w-3 h-3 text-[#7469F8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path></svg></div>
                                <span className="text-[8px] text-slate-300 hidden sm:block">Clicks</span>
                            </div>
                            <div className="text-[#7469F8]">→</div>
                            <div className="flex items-center gap-2 px-2">
                                <div className="w-5 h-5 rounded-full bg-[#AB57F3]/20 flex items-center justify-center"><svg className="w-3 h-3 text-[#AB57F3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg></div>
                                <span className="text-[8px] text-slate-300 hidden sm:block">Landing Page</span>
                            </div>
                            <div className="text-[#AB57F3]">→</div>
                            <div className="flex items-center gap-2 px-2">
                                <div className="w-5 h-5 rounded-full bg-[#E057D8]/20 flex items-center justify-center"><svg className="w-3 h-3 text-[#E057D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></div>
                                <span className="text-[8px] text-slate-300 hidden sm:block">Conversions</span>
                            </div>
                        </div>
                        
                        
                        <div className="trace-card theme-indigo p-3 grid grid-cols-3 gap-2 w-full text-center shadow-lg" style={{ borderRadius: "0.75rem" }}>
                            <div className="border-r border-slate-700/50">
                                <p className="text-[8px] text-slate-400 uppercase tracking-wider mb-0.5">CPA</p>
                                <p className="text-sm font-bold text-[#3F8BF9]">$12.45 <span className="text-[8px] text-emerald-400 font-normal">↓ 18%</span></p>
                            </div>
                            <div className="border-r border-slate-700/50">
                                <p className="text-[8px] text-slate-400 uppercase tracking-wider mb-0.5">ROAS</p>
                                <p className="text-sm font-bold text-[#AB57F3]">5.42x <span className="text-[8px] text-emerald-400 font-normal">↑ 22%</span></p>
                            </div>
                            <div>
                                <p className="text-[8px] text-slate-400 uppercase tracking-wider mb-0.5">Conv.</p>
                                <p className="text-sm font-bold text-[#E057D8]">2,350 <span className="text-[8px] text-emerald-400 font-normal">↑ 28%</span></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </section>

    
    <section className="relative z-10 pb-16" style={{ background: "rgba(2, 6, 23, 0.9)" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal-up">
                
                <div className="trace-card theme-blue p-6 text-center md:text-left">
                    <h3 className="text-lg font-bold text-white mb-2">Intent-Led Targeting</h3>
                    <p className="text-sm text-slate-300">Campaigns structured around search behaviour, audience signals, and platform-level intent.</p>
                </div>
                
                <div className="trace-card theme-purple p-6 text-center md:text-left">
                    <h3 className="text-lg font-bold text-white mb-2">Spend Efficiency</h3>
                    <p className="text-sm text-slate-300">Media activity planned with clear budget control, campaign objectives, and optimization priorities.</p>
                </div>
                
                <div className="trace-card theme-pink p-6 text-center md:text-left">
                    <h3 className="text-lg font-bold text-white mb-2">Performance Visibility</h3>
                    <p className="text-sm text-slate-300">Reporting visibility across spend, clicks, conversions, CPA, ROAS, and campaign movement.</p>
                </div>

            </div>
        </div>
    </section>

    
    <section className="relative z-10 py-24" style={{ background: "linear-gradient(to bottom, rgba(2, 6, 23, 0.9) 0%, rgba(15, 23, 42, 0.9) 100%)" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start reveal-up">
                
                <div className="w-full lg:w-5/12">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        Paid Media Works Best When <span className="text-gradient-brand">Every Click Has a Purpose</span>
                    </h2>
                </div>

                <div className="w-full lg:w-7/12 space-y-6 text-[#cbd5e1] text-lg leading-relaxed">
                    <p>Paid media is not just about increasing traffic. It is about reaching users with the right intent, placing the right message in front of them, and ensuring every campaign is connected to a measurable business objective.</p>
                    <p>At our agency, we approach Google, Meta, and PPC campaigns with a performance-first mindset. From campaign structure and audience planning to tracking, landing page alignment, and ongoing optimization, our focus is to help advertisers reduce wasted spend and scale what is actually working.</p>
                </div>

            </div>
        </div>
    </section>

    
    <section className="relative z-10 py-24" style={{ background: "linear-gradient(to bottom, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.9) 100%)" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16 reveal-up">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Google, Meta & PPC Growth Capabilities</h2>
                <p className="text-[#cbd5e1] text-lg">A structured paid media approach designed to help advertisers capture demand, create engagement, and improve conversion outcomes.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                <div className="trace-card theme-blue p-8 text-left reveal-up">
                    <div className="w-10 h-10 mb-4 rounded-lg bg-[#3F8BF9]/10 flex items-center justify-center text-[#3F8BF9]">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Google Ads Management</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">Capture high-intent users through search, shopping, display, YouTube, and performance-led Google Ads campaigns aligned with business goals.</p>
                </div>

                <div className="trace-card theme-indigo p-8 text-left reveal-up" style={{ transitionDelay: "100ms" }}>
                    <div className="w-10 h-10 mb-4 rounded-lg bg-[#7469F8]/10 flex items-center justify-center text-[#7469F8]">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Meta Ads Management</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">Run Facebook and Instagram campaigns built around audience segmentation, creative testing, funnel strategy, and conversion-led growth.</p>
                </div>

                <div className="trace-card theme-purple p-8 text-left reveal-up" style={{ transitionDelay: "200ms" }}>
                    <div className="w-10 h-10 mb-4 rounded-lg bg-[#AB57F3]/10 flex items-center justify-center text-[#AB57F3]">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Paid Search Strategy</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">Build keyword, intent, and competitor-led search campaigns designed to reach users actively looking for relevant products or services.</p>
                </div>

                <div className="trace-card theme-pink p-8 text-left reveal-up">
                    <div className="w-10 h-10 mb-4 rounded-lg bg-[#E057D8]/10 flex items-center justify-center text-[#E057D8]">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Paid Social Campaigns</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">Engage audiences across social platforms through creative-led campaigns focused on awareness, traffic, leads, and conversions.</p>
                </div>

                <div className="trace-card theme-blue p-8 text-left reveal-up" style={{ transitionDelay: "100ms" }}>
                    <div className="w-10 h-10 mb-4 rounded-lg bg-[#3F8BF9]/10 flex items-center justify-center text-[#3F8BF9]">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Tracking & Landing Page Alignment</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">Connect ad messaging, landing page experience, conversion events, and reporting visibility so campaign performance can be measured properly.</p>
                </div>

                <div className="trace-card theme-indigo p-8 text-left reveal-up" style={{ transitionDelay: "200ms" }}>
                    <div className="w-10 h-10 mb-4 rounded-lg bg-[#7469F8]/10 flex items-center justify-center text-[#7469F8]">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Campaign Optimization</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">Continuously optimize audiences, keywords, creatives, bids, budgets, placements, CPA, ROAS, and conversion quality.</p>
                </div>

            </div>
        </div>
    </section>

    
    <section className="relative z-10 py-24" style={{ background: "linear-gradient(to bottom, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center reveal-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Channels and Campaign Formats</h2>
            <p className="text-[#cbd5e1] text-lg max-w-3xl mx-auto mb-12">We support paid media activity across platforms and formats depending on the advertiser’s goals, audience behaviour, and market opportunity.</p>
            
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                <span className="px-5 py-2.5 bg-slate-800/80 border border-slate-700 rounded-full text-slate-200 text-sm font-medium hover:bg-slate-700 hover:text-white transition-colors">Google Search Ads</span>
                <span className="px-5 py-2.5 bg-slate-800/80 border border-slate-700 rounded-full text-slate-200 text-sm font-medium hover:bg-slate-700 hover:text-white transition-colors">Google Display Ads</span>
                <span className="px-5 py-2.5 bg-slate-800/80 border border-slate-700 rounded-full text-slate-200 text-sm font-medium hover:bg-slate-700 hover:text-white transition-colors">Google Shopping Ads</span>
                <span className="px-5 py-2.5 bg-slate-800/80 border border-slate-700 rounded-full text-slate-200 text-sm font-medium hover:bg-slate-700 hover:text-white transition-colors">Performance Max</span>
                <span className="px-5 py-2.5 bg-slate-800/80 border border-slate-700 rounded-full text-slate-200 text-sm font-medium hover:bg-slate-700 hover:text-white transition-colors">YouTube Ads</span>
                <span className="px-5 py-2.5 bg-slate-800/80 border border-slate-700 rounded-full text-slate-200 text-sm font-medium hover:bg-slate-700 hover:text-white transition-colors">Meta Ads</span>
                <span className="px-5 py-2.5 bg-slate-800/80 border border-slate-700 rounded-full text-slate-200 text-sm font-medium hover:bg-slate-700 hover:text-white transition-colors">Facebook Ads</span>
                <span className="px-5 py-2.5 bg-slate-800/80 border border-slate-700 rounded-full text-slate-200 text-sm font-medium hover:bg-slate-700 hover:text-white transition-colors">Instagram Ads</span>
                <span className="px-5 py-2.5 bg-slate-800/80 border border-slate-700 rounded-full text-slate-200 text-sm font-medium hover:bg-slate-700 hover:text-white transition-colors">Microsoft Ads</span>
                <span className="px-5 py-2.5 bg-slate-800/80 border border-slate-700 rounded-full text-slate-200 text-sm font-medium hover:bg-slate-700 hover:text-white transition-colors">Paid Social Campaigns</span>
                <span className="px-5 py-2.5 bg-slate-800/80 border border-slate-700 rounded-full text-slate-200 text-sm font-medium hover:bg-slate-700 hover:text-white transition-colors">Lead Generation Campaigns</span>
                <span className="px-5 py-2.5 bg-slate-800/80 border border-slate-700 rounded-full text-slate-200 text-sm font-medium hover:bg-slate-700 hover:text-white transition-colors">Retargeting Campaigns</span>
            </div>
        </div>
    </section>

    
    <section className="relative z-10 py-24" style={{ background: "linear-gradient(to bottom, rgba(15, 23, 42, 0.95) 0%, rgba(2, 6, 23, 0.9) 100%)", overflow: "hidden" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16 reveal-up">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How We Build Paid Media Campaigns</h2>
                <p className="text-[#cbd5e1] text-lg">A structured process to plan, launch, monitor, and improve campaigns with greater clarity.</p>
            </div>

            <div className="vertical-timeline reveal-up">
                <div className="vertical-timeline-item">
                    <div className="timeline-content left">
                        <h3>Understand the Growth Objective</h3>
                        <p>We begin by understanding the advertiser’s business model, target audience, market, budget, KPI expectations, and conversion goals.</p>
                    </div>
                    <div className="timeline-number">01</div>
                </div>
                
                <div className="vertical-timeline-item">
                    <div className="timeline-number">02</div>
                    <div className="timeline-content right">
                        <h3>Map Audience and Intent</h3>
                        <p>We define the audience segments, search intent, funnel stage, and platform behaviour that should guide campaign planning.</p>
                    </div>
                </div>

                <div className="vertical-timeline-item">
                    <div className="timeline-content left">
                        <h3>Structure the Campaign Setup</h3>
                        <p>We align campaigns, ad groups, targeting, creatives, tracking, conversion events, and landing page flow before going live.</p>
                    </div>
                    <div className="timeline-number">03</div>
                </div>

                <div className="vertical-timeline-item">
                    <div className="timeline-number">04</div>
                    <div className="timeline-content right">
                        <h3>Launch With Controlled Spend</h3>
                        <p>Campaigns are launched with a structured budget approach, allowing early signals to be reviewed before scaling.</p>
                    </div>
                </div>

                <div className="vertical-timeline-item">
                    <div className="timeline-content left">
                        <h3>Review Performance Signals</h3>
                        <p>We monitor spend, CTR, CPC, CPA, ROAS, conversion quality, search terms, audience response, and creative performance.</p>
                    </div>
                    <div className="timeline-number">05</div>
                </div>

                <div className="vertical-timeline-item">
                    <div className="timeline-number">06</div>
                    <div className="timeline-content right">
                        <h3>Optimize and Scale</h3>
                        <p>We scale campaigns based on proven performance signals, improving budget allocation, audience quality, creative direction, and conversion efficiency.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    <section className="relative z-10 py-24" style={{ background: "rgba(2, 6, 23, 1)" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
            <div className="trace-card theme-indigo p-8 lg:p-16 flex flex-col lg:flex-row gap-12 items-center reveal-up">
                
                <div className="w-full lg:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Designed for Smarter Spend Decisions</h2>
                    <p className="text-[#cbd5e1] text-base leading-relaxed mb-4">
                        Paid media can scale quickly, but without the right structure it can also create wasted spend. Advertisers need clarity on where the budget is going, which audiences are responding, and which campaign elements are contributing to growth.
                    </p>
                    <p className="text-[#cbd5e1] text-base leading-relaxed">
                        We support paid media campaigns with clear monitoring, performance review, and optimization insights, helping advertisers make more informed decisions across Google, Meta, and PPC activity.
                    </p>
                </div>

                <div className="w-full lg:w-1/2">
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <span className="mt-1 w-2 h-2 rounded-full bg-[#E057D8] flex-shrink-0"></span>
                            <span className="text-slate-200 font-medium">Budget and spend monitoring</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-1 w-2 h-2 rounded-full bg-[#E057D8] flex-shrink-0"></span>
                            <span className="text-slate-200 font-medium">Campaign-level performance review</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-1 w-2 h-2 rounded-full bg-[#E057D8] flex-shrink-0"></span>
                            <span className="text-slate-200 font-medium">Audience and keyword analysis</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-1 w-2 h-2 rounded-full bg-[#E057D8] flex-shrink-0"></span>
                            <span className="text-slate-200 font-medium">Creative and message testing</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-1 w-2 h-2 rounded-full bg-[#E057D8] flex-shrink-0"></span>
                            <span className="text-slate-200 font-medium">Landing page and conversion event alignment</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-1 w-2 h-2 rounded-full bg-[#E057D8] flex-shrink-0"></span>
                            <span className="text-slate-200 font-medium">CPA, ROAS, and conversion quality optimization</span>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </section>

    
    <section className="relative z-10 py-24" style={{ background: "linear-gradient(to bottom, rgba(2, 6, 23, 1) 0%, rgba(15, 23, 42, 0.95) 100%)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 reveal-up">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">FAQ Section</h2>
            
            <div className="space-y-4" id="faq-container">
                
                <div className="faq-item trace-card relative theme-blue px-6 py-2 md:px-8 md:py-3 text-left">
                    <button className="faq-button text-white w-full select-none outline-none focus:outline-none -webkit-tap-highlight-color-transparent">
                        <span>What are Google, Meta and PPC ads?</span>
                        <svg className="w-6 h-6 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                    </button>
                    <div className="faq-answer text-[#cbd5e1]">
                        Google, Meta and PPC ads are paid media campaigns that help advertisers reach relevant audiences across search, social, display, shopping, video, and retargeting placements.
                    </div>
                </div>

                <div className="faq-item trace-card relative theme-indigo px-6 py-2 md:px-8 md:py-3 text-left">
                    <button className="faq-button text-white w-full select-none outline-none focus:outline-none -webkit-tap-highlight-color-transparent">
                        <span>How do you plan paid media campaigns?</span>
                        <svg className="w-6 h-6 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                    </button>
                    <div className="faq-answer text-[#cbd5e1]">
                        We begin with the advertiser’s objectives, audience profile, target market, budget, campaign model, conversion goals, and tracking requirements before building the campaign structure.
                    </div>
                </div>

                <div className="faq-item trace-card relative theme-purple px-6 py-2 md:px-8 md:py-3 text-left">
                    <button className="faq-button text-white w-full select-none outline-none focus:outline-none -webkit-tap-highlight-color-transparent">
                        <span>Can paid media campaigns support both leads and sales?</span>
                        <svg className="w-6 h-6 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                    </button>
                    <div className="faq-answer text-[#cbd5e1]">
                        Yes. Paid media campaigns can be structured for lead generation, e-commerce sales, product promotion, sign-ups, retargeting, or other measurable actions depending on the campaign objective.
                    </div>
                </div>

                <div className="faq-item trace-card relative theme-pink px-6 py-2 md:px-8 md:py-3 text-left">
                    <button className="faq-button text-white w-full select-none outline-none focus:outline-none -webkit-tap-highlight-color-transparent">
                        <span>Do advertisers get visibility into campaign performance?</span>
                        <svg className="w-6 h-6 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                    </button>
                    <div className="faq-answer text-[#cbd5e1]">
                        Yes. Advertisers can get reporting visibility across spend, clicks, conversions, CPA, ROAS, audience response, and optimization insights.
                    </div>
                </div>

                <div className="faq-item trace-card relative theme-blue px-6 py-2 md:px-8 md:py-3 text-left">
                    <button className="faq-button text-white w-full select-none outline-none focus:outline-none -webkit-tap-highlight-color-transparent">
                        <span>How do you reduce wasted spend in PPC campaigns?</span>
                        <svg className="w-6 h-6 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                    </button>
                    <div className="faq-answer text-[#cbd5e1]">
                        We focus on audience relevance, keyword quality, negative targeting, creative testing, landing page alignment, budget monitoring, and continuous optimization.
                    </div>
                </div>

            </div>
        </div>
    </section>

    
    <section className="relative z-10 py-32" style={{ background: "linear-gradient(to bottom, rgba(15, 23, 42, 0.95) 0%, rgba(0, 0, 0, 1) 100%)" }}>
        <div className="max-w-4xl mx-auto px-6 text-center reveal-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Improve Paid Media Performance?</h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                Let’s explore how we can help your brand reach the right audiences, improve campaign efficiency, and scale through Google, Meta, and PPC-led growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#enquiry" className="btn-glow cursor-pointer w-full sm:w-auto">
                    Submit Advertiser Enquiry
                </a>
                <a href="#conversation" className="btn-glow btn-glow-secondary w-full sm:w-auto">
                    Start a Conversation
                </a>
            </div>
        </div>
    </section>

    
    
</div>
    </PageRevealEffects>
  );
}
