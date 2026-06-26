"use client";

import "@/styles/influencer-marketing.css";

import ContactForm from "@/components/forms/ContactForm";

import PageRevealEffects from "@/components/effects/PageRevealEffects";

import type { CSSProperties } from "react";

export default function InfluencerMarketingPage() {
  return (
    <PageRevealEffects>
      <div style={{ position: "fixed", top: "0", left: "0", width: "100vw", height: "100vh", backgroundColor: "#020617", zIndex: "-9999", pointerEvents: "none" }}></div>

<div id="ascendia-influencer-master" style={{ width: "100%", position: "relative", color: "#cbd5e1", overflowX: "hidden", fontFamily: "'Poppins', sans-serif" }}>

    
    
    

    

    

    <div className="inf-bg-glow w-[800px] h-[800px] bg-[#7469F8] top-[5%] left-[-200px]"></div>
    <div className="inf-bg-glow w-[600px] h-[600px] bg-[#E057D8] top-[45%] right-[-100px]" style={{ animationDelay: "2s" }}></div>
    <div className="inf-bg-glow w-[900px] h-[900px] bg-[#3F8BF9] bottom-[10%] left-[10%]" style={{ animationDelay: "1s" }}></div>

    <canvas id="hyperspace-bg"></canvas>

    <section className="min-h-screen pt-24 pb-40 px-6 lg:px-12 w-full flex items-center relative z-10" style={{ background: "linear-gradient(to bottom, rgba(3, 3, 8, 0.95) 0%, rgba(20, 5, 40, 0.95) 100%)" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-[1400px] mx-auto w-full">
            
            <div className="inf-reveal z-20 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#7469F8]/40 bg-[#7469F8]/10 text-[#e9d5ff] text-sm font-medium mb-6 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-[#3F8BF9] animate-pulse shadow-[0_0_8px_#3F8BF9]"></span>
                    Ascendia Prime Influencer Growth
                </div>
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white tracking-tight mb-8 leading-tight">
                    Creator Partnerships<br />
                    Built to <span className="text-gradient-social drop-shadow-[0_0_15px_rgba(116,105,248,0.4)]">Grow</span><br />
                    with Ascendia Prime
                </h1>
                <p className="text-lg text-[#d8b4fe] max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed opacity-90">
                    Ascendia Prime connects brands with the right creators to build trust, expand reach, and turn social attention into measurable campaign growth.
                </p>
                <div className="magnetic-btn hover-target">
                    <button id="hero-cta-btn" className="btn-glow text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(116,105,248,0.3)] hover:shadow-[0_0_40px_rgba(224,87,216,0.6)] transition-all">
                        Launch Your Campaign
                        <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </button>
                </div>
            </div>

            <div className="relative w-full h-[500px] lg:h-[620px] z-10 flex items-center justify-center inf-reveal" style={{ perspective: "1000px" }}>
                
                <div className="absolute top-1/4 left-0 lg:-left-4 px-4 py-3 glass-card theme-creator shadow-lg transform -rotate-6 animate-[floating_5s_ease-in-out_infinite] z-30 pointer-events-none" style={{ padding: "0.75rem 1rem !important", borderRadius: "0.75rem !important" }}>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#E057D8]/20 flex items-center justify-center text-[#E057D8] text-lg border border-[#E057D8]/30">🔥</div>
                        <div>
                            <p className="text-white font-bold text-sm leading-none">+250%</p>
                            <p className="text-[#E057D8] text-[10px] uppercase tracking-wider font-semibold">Engagement</p>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-1/4 right-0 lg:-right-4 px-4 py-3 glass-card theme-creator shadow-lg transform rotate-3 animate-[floating-alt_4s_ease-in-out_infinite_0.5s] z-30 pointer-events-none" style={{ padding: "0.75rem 1rem !important", borderRadius: "0.75rem !important" }}>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#3F8BF9]/20 flex items-center justify-center text-[#3F8BF9] text-lg border border-[#3F8BF9]/30">🚀</div>
                        <div>
                            <p className="text-white font-bold text-sm leading-none">Viral</p>
                            <p className="text-[#3F8BF9] text-[10px] uppercase tracking-wider font-semibold">Reach</p>
                        </div>
                    </div>
                </div>

                <div className="relative w-[260px] h-full lg:w-[300px] rounded-[40px] border-[8px] border-[#2e1065] bg-[#030308] shadow-[0_0_50px_rgba(116,105,248,0.3)] overflow-hidden transform -rotate-6 hover:rotate-0 transition-transform duration-700 ease-out z-20 hover-target">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#2e1065] rounded-b-xl z-30 flex items-center justify-center">
                        <div className="w-12 h-1.5 bg-[#030308] rounded-full"></div>
                    </div>
                    
                    <div className="absolute top-0 left-0 w-full reel-scroll-container animate-reel-scroll flex flex-col pointer-events-none">
                        
                        <div className="relative w-full reel-item flex items-center justify-center bg-gradient-to-tr from-[#AB57F3] via-[#E057D8] to-[#7469F8]">
                            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-24 h-24 drop-shadow-2xl opacity-90"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#030308]/90 via-transparent to-transparent opacity-90"></div>
                            
                            <div className="absolute bottom-6 left-4 right-16">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-8 h-8 rounded-full border border-white/50 bg-white/20 backdrop-blur-md flex items-center justify-center p-1.5">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path></svg>
                                    </div>
                                    <span className="text-white font-semibold text-sm">@ig_growth</span>
                                </div>
                                <p className="text-white/90 text-xs leading-relaxed">Mastering the algorithm 📸 #instagram #reach</p>
                            </div>
                            
                            <div className="absolute bottom-6 right-3 flex flex-col gap-5 items-center">
                                <div className="flex flex-col items-center gap-1">
                                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></div>
                                    <span className="text-white text-[10px] font-medium">12.4K</span>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></div>
                                    <span className="text-white text-[10px] font-medium">342</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative w-full reel-item flex items-center justify-center bg-gradient-to-br from-[#3F8BF9] to-[#E057D8]">
                            <svg viewBox="0 0 24 24" fill="white" className="w-24 h-24 drop-shadow-2xl opacity-90"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.01.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.95-.01 2.53.01 5.06-.02 7.59-.06 2.06-.85 4.06-2.18 5.6-1.41 1.63-3.32 2.66-5.41 2.87-2.31.23-4.66-.27-6.54-1.61-1.78-1.28-2.92-3.19-3.18-5.38-.28-2.31.25-4.69 1.6-6.52 1.4-1.89 3.51-3.04 5.8-3.14V11.5c-1.44.08-2.8.72-3.8 1.83-.87.97-1.34 2.29-1.23 3.63.09 1.25.68 2.45 1.65 3.22 1.05.83 2.41 1.16 3.73 1.02 1.48-.15 2.82-.93 3.68-2.11.75-1.03 1.13-2.34 1.09-3.64-.01-5.18-.01-10.36-.02-15.54z"/></svg>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#030308]/90 via-transparent to-transparent opacity-80"></div>
                            
                            <div className="absolute bottom-6 left-4 right-16">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-8 h-8 rounded-full border border-white/50 bg-white/20 backdrop-blur-md flex items-center justify-center p-1.5">
                                        <svg viewBox="0 0 24 24" fill="white" className="w-full h-full"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.01.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.95-.01 2.53.01 5.06-.02 7.59-.06 2.06-.85 4.06-2.18 5.6-1.41 1.63-3.32 2.66-5.41 2.87-2.31.23-4.66-.27-6.54-1.61-1.78-1.28-2.92-3.19-3.18-5.38-.28-2.31.25-4.69 1.6-6.52 1.4-1.89 3.51-3.04 5.8-3.14V11.5c-1.44.08-2.8.72-3.8 1.83-.87.97-1.34 2.29-1.23 3.63.09 1.25.68 2.45 1.65 3.22 1.05.83 2.41 1.16 3.73 1.02 1.48-.15 2.82-.93 3.68-2.11.75-1.03 1.13-2.34 1.09-3.64-.01-5.18-.01-10.36-.02-15.54z"/></svg>
                                    </div>
                                    <span className="text-white font-semibold text-sm">@viral_moves</span>
                                </div>
                                <p className="text-white/90 text-xs leading-relaxed">Catch the wave before it's gone 🌊 #fyp #viral</p>
                            </div>
                            
                            <div className="absolute bottom-6 right-3 flex flex-col gap-5 items-center">
                                <div className="flex flex-col items-center gap-1">
                                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></div>
                                    <span className="text-white text-[10px] font-medium">1.2K</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative w-full reel-item flex items-center justify-center bg-gradient-to-br from-gray-800 to-black">
                            <svg viewBox="0 0 24 24" fill="white" className="w-24 h-24 drop-shadow-2xl opacity-90"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                            
                            <div className="absolute inset-0 bg-gradient-to-t from-[#030308]/90 via-transparent to-transparent opacity-80"></div>
                            
                            <div className="absolute bottom-6 left-4 right-16">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-8 h-8 rounded-full border border-white/50 bg-white/20 backdrop-blur-md flex items-center justify-center p-1.5">
                                        <svg viewBox="0 0 24 24" fill="white" className="w-full h-full"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                                    </div>
                                    <span className="text-white font-semibold text-sm">@x_trending</span>
                                </div>
                                <p className="text-white/90 text-xs leading-relaxed">Join the global conversation 🐦 #x #trending</p>
                            </div>
                            
                            <div className="absolute bottom-6 right-3 flex flex-col gap-5 items-center">
                                <div className="flex flex-col items-center gap-1">
                                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></div>
                                    <span className="text-white text-[10px] font-medium">45.1K</span>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></div>
                                    <span className="text-white text-[10px] font-medium">890</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative w-full reel-item flex items-center justify-center bg-gradient-to-tr from-[#AB57F3] via-[#E057D8] to-[#7469F8]">
                            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-24 h-24 drop-shadow-2xl opacity-90"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#030308]/90 via-transparent to-transparent opacity-80"></div>
                            
                            <div className="absolute bottom-6 left-4 right-16">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-8 h-8 rounded-full border border-white/50 bg-white/20 backdrop-blur-md flex items-center justify-center p-1.5">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path></svg>
                                    </div>
                                    <span className="text-white font-semibold text-sm">@ig_growth</span>
                                </div>
                                <p className="text-white/90 text-xs leading-relaxed">Mastering the algorithm 📸 #instagram #reach</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="absolute top-0 right-0 w-[150%] h-[40%] bg-white/5 transform rotate-[35deg] translate-x-[10%] -translate-y-[60%] pointer-events-none blur-sm z-30"></div>
                </div>

            </div>
        </div>
    </section>

    <section className="py-24 px-6 relative z-10 w-full" style={{ background: "linear-gradient(to bottom, rgba(20, 5, 40, 0.95) 0%, rgba(10, 2, 20, 0.95) 100%)" }}>
        <div className="max-w-[1400px] mx-auto inf-reveal">
            
            <div className="glass-card theme-creator trace-card max-w-4xl mx-auto interactive-el p-8 md:p-12 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">What is Influencer Marketing?</h2>
                <div className="space-y-4 text-[#e9d5ff] leading-relaxed text-lg">
                    <p>Influencer marketing is a modern marketing strategy where brands collaborate with individuals who have a strong online presence and engaged audiences. These individuals, known as influencers, can sway the opinions and decisions of their followers, making them a powerful tool for brand promotion.</p>
                    <p>Unlike traditional advertising, influencer marketing builds trust and authenticity. Instead of cold ads, your products or services are recommended by someone your audience already trusts. This strategy increases engagement, brand recall, and conversion rates across social media platforms.</p>
                </div>
            </div>

        </div>
    </section>

    <section className="py-24 px-6 relative z-10 w-full" style={{ background: "linear-gradient(to bottom, rgba(10, 2, 20, 0.95) 0%, rgba(10, 2, 20, 0.95) 100%)" }}>
        <div className="max-w-[1400px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16 inf-reveal">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our <span className="text-gradient-social">Agency Services</span></h2>
                <p className="text-[#e9d5ff] text-lg font-medium">At Ascendia Prime, we offer a comprehensive suite of services to ensure every influencer marketing campaign delivers maximum ROI.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 w-full">
                
                <div className="glass-card theme-creator trace-card interactive-el inf-reveal p-8 md:p-10 text-left w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]">
                    <div className="w-14 h-14 rounded-xl bg-[#7469F8]/20 flex items-center justify-center text-[#7469F8] border border-[#7469F8]/30 mb-6">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Influencer Research & Discovery</h3>
                    <p className="text-sm text-[#e9d5ff] leading-relaxed">Finding the right influencer isn’t just about follower count. We analyze engagement rates, audience demographics, niche relevance, and past performance to shortlist influencers who can genuinely connect with your target audience.</p>
                </div>

                <div className="glass-card theme-creator trace-card interactive-el inf-reveal p-8 md:p-10 text-left w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]" style={{ transitionDelay: "100ms" }}>
                    <div className="w-14 h-14 rounded-xl bg-[#3F8BF9]/20 flex items-center justify-center text-[#3F8BF9] border border-[#3F8BF9]/30 mb-6">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Influencer Outreach & Management</h3>
                    <p className="text-sm text-[#e9d5ff] leading-relaxed">Building meaningful relationships with influencers is key to long-term success. Our team manages all communications, negotiates collaborations, and ensures mutually beneficial partnerships.</p>
                </div>

                <div className="glass-card theme-creator trace-card interactive-el inf-reveal p-8 md:p-10 text-left w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]" style={{ transitionDelay: "200ms" }}>
                    <div className="w-14 h-14 rounded-xl bg-[#E057D8]/20 flex items-center justify-center text-[#E057D8] border border-[#E057D8]/30 mb-6">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Campaign Strategy & Planning</h3>
                    <p className="text-sm text-[#e9d5ff] leading-relaxed">Every brand is unique, and so should be your campaign. We develop customized strategies that align with your marketing objectives, budget, and audience to maximize impact.</p>
                </div>

                <div className="glass-card theme-creator trace-card interactive-el inf-reveal p-8 md:p-10 text-left w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]">
                    <div className="w-14 h-14 rounded-xl bg-[#7469F8]/20 flex items-center justify-center text-[#7469F8] border border-[#7469F8]/30 mb-6">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Content Creation & Collaboration</h3>
                    <p className="text-sm text-[#e9d5ff] leading-relaxed">We guide influencers to create authentic, high-quality content that resonates with their followers while reflecting your brand’s voice. From visuals to captions, every piece is crafted to convert.</p>
                </div>

                <div className="glass-card theme-creator trace-card interactive-el inf-reveal p-8 md:p-10 text-left w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]" style={{ transitionDelay: "100ms" }}>
                    <div className="w-14 h-14 rounded-xl bg-[#3F8BF9]/20 flex items-center justify-center text-[#3F8BF9] border border-[#3F8BF9]/30 mb-6">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Influencer Campaign Execution</h3>
                    <p className="text-sm text-[#e9d5ff] leading-relaxed">We manage all aspects of your influencer campaigns, including scheduling posts, monitoring engagement, tracking performance, and making adjustments in real-time to ensure success.</p>
                </div>

            </div>
        </div>
    </section>

    <section className="py-24 px-6 relative z-10 w-full" style={{ background: "linear-gradient(to bottom, rgba(10, 2, 20, 0.95) 0%, rgba(20, 5, 40, 0.95) 100%)" }}>
        <div className="max-w-[1200px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16 inf-reveal">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Platforms We <span className="text-gradient-social bg-[#030308] rounded-lg px-2 shadow-lg">Cover</span></h2>
                <p className="text-[#e9d5ff] text-lg font-medium">We create tailored campaigns across every major social media platform:</p>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 w-full inf-reveal" id="platform-showcase">
                
                <div className="flex flex-col gap-6 md:gap-8 w-full lg:w-1/4 order-2 lg:order-1">
                    
                    <div className="platform-text-row cursor-pointer transition-all duration-300 flex flex-col items-start lg:items-end text-left lg:text-right" data-pid="ig" style={{ "--hover-color": "#E1306C" } as CSSProperties}>
                        <div className="flex items-center gap-3 flex-row lg:flex-row-reverse">
                            <span className="platform-dot h-3 rounded-full transition-all duration-300"></span>
                            <h4 className="text-xl md:text-2xl font-bold transition-all duration-300 platform-name">Instagram</h4>
                        </div>
                        <p className="mt-2 pl-[28px] lg:pl-0 lg:pr-[28px] text-sm md:text-base transition-all duration-300 platform-desc">Stories, reels, lifestyle, fashion, and product campaigns.</p>
                    </div>

                    <div className="platform-text-row cursor-pointer transition-all duration-300 flex flex-col items-start lg:items-end text-left lg:text-right" data-pid="yt" style={{ "--hover-color": "#FF0000" } as CSSProperties}>
                        <div className="flex items-center gap-3 flex-row lg:flex-row-reverse">
                            <span className="platform-dot h-3 rounded-full transition-all duration-300"></span>
                            <h4 className="text-xl md:text-2xl font-bold transition-all duration-300 platform-name">YouTube</h4>
                        </div>
                        <p className="mt-2 pl-[28px] lg:pl-0 lg:pr-[28px] text-sm md:text-base transition-all duration-300 platform-desc">Long-form video content, tutorials, and authentic reviews.</p>
                    </div>

                    <div className="platform-text-row cursor-pointer transition-all duration-300 flex flex-col items-start lg:items-end text-left lg:text-right" data-pid="tk" style={{ "--hover-color": "#00f2fe" } as CSSProperties}>
                        <div className="flex items-center gap-3 flex-row lg:flex-row-reverse">
                            <span className="platform-dot h-3 rounded-full transition-all duration-300"></span>
                            <h4 className="text-xl md:text-2xl font-bold transition-all duration-300 platform-name">TikTok</h4>
                        </div>
                        <p className="mt-2 pl-[28px] lg:pl-0 lg:pr-[28px] text-sm md:text-base transition-all duration-300 platform-desc">Viral trends engaging younger audiences with shareable content.</p>
                    </div>

                </div>

                <div className="flex gap-4 md:gap-6 flex-shrink-0 justify-center w-full lg:w-2/4 order-1 lg:order-2 py-4">
                    
                    <div className="flex flex-col gap-4 md:gap-6">
                        <div className="platform-icon-card glass-card theme-creator w-[110px] h-[120px] sm:w-[130px] sm:h-[140px] md:w-[155px] md:h-[165px] flex flex-col items-center justify-center cursor-pointer transition-all duration-500" data-pid="ig" style={{ "--hover-color": "#E1306C" } as CSSProperties}>
                            <svg className="w-12 h-12 md:w-16 md:h-16 text-white transition-all duration-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                        </div>
                        <div className="platform-icon-card glass-card theme-creator w-[122px] h-[132px] sm:w-[145px] sm:h-[155px] md:w-[172px] md:h-[182px] flex flex-col items-center justify-center cursor-pointer transition-all duration-500" data-pid="fb" style={{ "--hover-color": "#1877F2" } as CSSProperties}>
                            <svg className="w-12 h-12 md:w-16 md:h-16 text-white transition-all duration-500" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 md:gap-6 mt-[48px] sm:mt-[56px] md:mt-[68px]">
                        <div className="platform-icon-card glass-card theme-creator w-[122px] h-[132px] sm:w-[145px] sm:h-[155px] md:w-[172px] md:h-[182px] flex flex-col items-center justify-center cursor-pointer transition-all duration-500" data-pid="yt" style={{ "--hover-color": "#FF0000" } as CSSProperties}>
                            <svg className="w-12 h-12 md:w-16 md:h-16 text-white transition-all duration-500" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                        </div>
                        <div className="platform-icon-card glass-card theme-creator w-[115px] h-[125px] sm:w-[136px] sm:h-[146px] md:w-[162px] md:h-[172px] flex flex-col items-center justify-center cursor-pointer transition-all duration-500" data-pid="li" style={{ "--hover-color": "#0A66C2" } as CSSProperties}>
                            <svg className="w-12 h-12 md:w-16 md:h-16 text-white transition-all duration-500" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z Uz"/></svg>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 md:gap-6 mt-[22px] sm:mt-[26px] md:mt-[32px]">
                        <div className="platform-icon-card glass-card theme-creator w-[115px] h-[125px] sm:w-[136px] sm:h-[146px] md:w-[162px] md:h-[172px] flex flex-col items-center justify-center cursor-pointer transition-all duration-500" data-pid="tk" style={{ "--hover-color": "#00f2fe" } as CSSProperties}>
                            <svg className="w-12 h-12 md:w-16 md:h-16 text-white transition-all duration-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.01.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.95-.01 2.53.01 5.06-.02 7.59-.06 2.06-.85 4.06-2.18 5.6-1.41 1.63-3.32 2.66-5.41 2.87-2.31.23-4.66-.27-6.54-1.61-1.78-1.28-2.92-3.19-3.18-5.38-.28-2.31.25-4.69 1.6-6.52 1.4-1.89 3.51-3.04 5.8-3.14V11.5c-1.44.08-2.8.72-3.8 1.83-.87.97-1.34 2.29-1.23 3.63.09 1.25.68 2.45 1.65 3.22 1.05.83 2.41 1.16 3.73 1.02 1.48-.15 2.82-.93 3.68-2.11.75-1.03 1.13-2.34 1.09-3.64-.01-5.18-.01-10.36-.02-15.54z"/></svg>
                        </div>
                        <div className="platform-icon-card glass-card theme-creator w-[110px] h-[120px] sm:w-[130px] sm:h-[140px] md:w-[155px] md:h-[165px] flex flex-col items-center justify-center cursor-pointer transition-all duration-500" data-pid="x" style={{ "--hover-color": "#ffffff" } as CSSProperties}>
                            <svg className="w-12 h-12 md:w-16 md:h-16 text-white transition-all duration-500" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6 md:gap-8 w-full lg:w-1/4 order-3 lg:order-3">
                    
                    <div className="platform-text-row cursor-pointer transition-all duration-300 flex flex-col items-start text-left" data-pid="fb" style={{ "--hover-color": "#1877F2" } as CSSProperties}>
                        <div className="flex items-center gap-3">
                            <span className="platform-dot h-3 rounded-full transition-all duration-300"></span>
                            <h4 className="text-xl md:text-2xl font-bold transition-all duration-300 platform-name">Facebook</h4>
                        </div>
                        <p className="mt-2 pl-[28px] text-sm md:text-base transition-all duration-300 platform-desc">Targeted campaigns increasing engagement among diverse demographics.</p>
                    </div>

                    <div className="platform-text-row cursor-pointer transition-all duration-300 flex flex-col items-start text-left" data-pid="li" style={{ "--hover-color": "#0A66C2" } as CSSProperties}>
                        <div className="flex items-center gap-3">
                            <span className="platform-dot h-3 rounded-full transition-all duration-300"></span>
                            <h4 className="text-xl md:text-2xl font-bold transition-all duration-300 platform-name">LinkedIn</h4>
                        </div>
                        <p className="mt-2 pl-[28px] text-sm md:text-base transition-all duration-300 platform-desc">B2B campaigns establishing authority with industry professionals.</p>
                    </div>

                    <div className="platform-text-row cursor-pointer transition-all duration-300 flex flex-col items-start text-left" data-pid="x" style={{ "--hover-color": "#ffffff" } as CSSProperties}>
                        <div className="flex items-center gap-3">
                            <span className="platform-dot h-3 rounded-full transition-all duration-300"></span>
                            <h4 className="text-xl md:text-2xl font-bold transition-all duration-300 platform-name">X (Twitter)</h4>
                        </div>
                        <p className="mt-2 pl-[28px] text-sm md:text-base transition-all duration-300 platform-desc">Join the global conversation and amplify trending topics rapidly.</p>
                    </div>

                </div>

            </div>
        </div>
    </section>

    <section id="animated-timeline-section" className="py-24 px-6 relative z-10 w-full" style={{ background: "linear-gradient(to bottom, rgba(20, 5, 40, 0.95) 0%, rgba(3, 3, 8, 0.95) 100%)" }}>
        <div className="max-w-[1400px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16 inf-reveal">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-sm">Our Influencer <span className="text-gradient-social">Marketing Process</span></h2>
                <p className="text-[#e9d5ff] font-medium text-lg">A structured campaign methodology designed for measurable outcomes.</p>
            </div>

            <div className="vertical-timeline inf-reveal">
                <div className="vertical-timeline-item">
                    <div className="timeline-content left">
                        <span className="timeline-tag">Step 01</span>
                        <h3>Brand & Goal Analysis</h3>
                        <p>We understand your brand, products, and marketing goals to develop strategies that deliver measurable outcomes.</p>
                    </div>
                    <div className="timeline-number">01</div>
                </div>

                <div className="vertical-timeline-item">
                    <div className="timeline-number">02</div>
                    <div className="timeline-content right">
                        <span className="timeline-tag">Step 02</span>
                        <h3>Influencer Shortlisting</h3>
                        <p>We identify influencers who align with your brand values and have audiences likely to convert.</p>
                    </div>
                </div>

                <div className="vertical-timeline-item">
                    <div className="timeline-content left">
                        <span className="timeline-tag">Step 03</span>
                        <h3>Campaign Strategy Creation</h3>
                        <p>Our team crafts a tailored campaign plan with clear KPIs, timelines, and content guidelines.</p>
                    </div>
                    <div className="timeline-number">03</div>
                </div>

                <div className="vertical-timeline-item">
                    <div className="timeline-number">04</div>
                    <div className="timeline-content right">
                        <span className="timeline-tag">Step 04</span>
                        <h3>Influencer Collaboration</h3>
                        <p>We facilitate collaboration, ensuring influencers create content that is both engaging and brand-aligned.</p>
                    </div>
                </div>

                <div className="vertical-timeline-item">
                    <div className="timeline-content left">
                        <span className="timeline-tag">Step 05</span>
                        <h3>Campaign Execution</h3>
                        <p>From scheduling posts to monitoring interactions, we manage the entire campaign seamlessly.</p>
                    </div>
                    <div className="timeline-number">05</div>
                </div>

                <div className="vertical-timeline-item">
                    <div className="timeline-number">06</div>
                    <div className="timeline-content right">
                        <span className="timeline-tag">Step 06</span>
                        <h3>Reporting & Optimization</h3>
                        <p>We track performance metrics, analyze results, and make data-driven adjustments for continuous improvement.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="py-24 px-6 relative z-10 w-full" style={{ background: "rgba(3, 3, 8, 1)", marginTop: "auto" }}>
        <div className="max-w-[1400px] mx-auto">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="inf-reveal text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Influencer Marketing Works for <span className="text-gradient-social">Modern Brands</span></h2>
                    <p className="text-[#e9d5ff] text-lg leading-relaxed mb-6">Influencer marketing has become a cornerstone of modern marketing because it combines reach, trust, and engagement. Influencers act as brand ambassadors, providing authentic endorsements that drive conversions.</p>
                    <p className="text-[#e9d5ff] text-lg leading-relaxed mb-6">This approach not only boosts visibility but also strengthens your brand’s credibility in a crowded digital marketplace.</p>
                </div>
                
                <div className="glass-card theme-cosmic trace-card interactive-el inf-reveal p-8 md:p-12 text-left">
                    <h3 className="text-3xl font-bold text-white mb-6">Why Choose Ascendia Prime</h3>
                    <p className="text-[#e9d5ff] text-base leading-relaxed mb-6">Choosing the right influencer marketing agency is crucial for campaign success. Ascendia Prime stands out because we combine industry expertise, a data-driven approach, and a wide network of influencers to deliver measurable results.</p>
                    <p className="text-[#e9d5ff] text-base leading-relaxed">Our team ensures campaigns are strategically planned, authentically executed, and continuously optimized to boost brand visibility, engagement, and ROI.</p>
                </div>
            </div>
            
        </div>
    </section>

    <section className="py-24 px-6 relative z-10 w-full pb-20" style={{ background: "rgba(3, 3, 8, 1)" }}>
        <div className="max-w-4xl mx-auto inf-reveal">
            
            <div className="mb-16 text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full glass-card theme-cosmic px-5 py-2.5 text-sm font-medium text-white border border-[#7469F8]">
                    FAQ
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Influencer Marketing <span className="text-gradient-social">Agency</span></h2>
            </div>

            <div className="space-y-4">
                
                <div className="faq-box faq-item glass-card theme-cosmic px-6 py-2 md:px-8 md:py-3 interactive-el text-left">
                    <button className="faq-head faq-button text-white w-full select-none outline-none focus:outline-none -webkit-tap-highlight-color-transparent bg-transparent">
                        <span>What does an influencer marketing agency do?</span>
                        <svg className="w-6 h-6 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div className="faq-body">
                        <p className="text-base leading-relaxed text-[#e9d5ff]">An influencer marketing agency identifies the right influencers, manages collaborations, creates strategies, executes campaigns, and measures performance to drive results.</p>
                    </div>
                </div>

                <div className="faq-box faq-item glass-card theme-cosmic px-6 py-2 md:px-8 md:py-3 interactive-el text-left">
                    <button className="faq-head faq-button text-white w-full select-none outline-none focus:outline-none -webkit-tap-highlight-color-transparent bg-transparent">
                        <span>How much does influencer marketing cost?</span>
                        <svg className="w-6 h-6 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div className="faq-body">
                        <p className="text-base leading-relaxed text-[#e9d5ff]">Costs vary depending on influencer reach, platform, content type, and campaign length. We offer packages tailored to different budgets.</p>
                    </div>
                </div>

                <div className="faq-box faq-item glass-card theme-cosmic px-6 py-2 md:px-8 md:py-3 interactive-el text-left">
                    <button className="faq-head faq-button text-white w-full select-none outline-none focus:outline-none -webkit-tap-highlight-color-transparent bg-transparent">
                        <span>How do you choose the right influencers?</span>
                        <svg className="w-6 h-6 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div className="faq-body">
                        <p className="text-base leading-relaxed text-[#e9d5ff]">We analyze audience demographics, engagement rates, content quality, brand alignment, and past performance to select influencers who will drive results.</p>
                    </div>
                </div>

                <div className="faq-box faq-item glass-card theme-cosmic px-6 py-2 md:px-8 md:py-3 interactive-el text-left">
                    <button className="faq-head faq-button text-white w-full select-none outline-none focus:outline-none -webkit-tap-highlight-color-transparent bg-transparent">
                        <span>Is influencer marketing suitable for small businesses?</span>
                        <svg className="w-6 h-6 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div className="faq-body">
                        <p className="text-base leading-relaxed text-[#e9d5ff]">Yes! Even small brands can benefit from nano and micro influencers who offer high engagement at a cost-effective rate.</p>
                    </div>
                </div>

            </div>
        </div>
    </section>

    
    <section id="campaign-form-section" className="py-24 px-6 relative z-10 w-full pb-36" style={{ background: "linear-gradient(to bottom, rgba(3, 3, 8, 1) 0%, rgba(13, 4, 30, 1) 100%)" }}>
        <div className="max-w-3xl mx-auto inf-reveal">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                    Ready to Go <span className="text-gradient-social">Viral?</span>
                </h2>
                <p className="text-[#d8b4fe] text-lg font-medium max-w-xl mx-auto">
                    Fill out the configuration blueprint below and our talent matching algorithm will schedule a campaign breakdown session.
                </p>
            </div>

            <div className="glass-card theme-creator p-8 md:p-12 shadow-2xl relative">
                
                <ContactForm />
            </div>
        </div>
    </section>

    
</div>
    </PageRevealEffects>
  );
}
