"use client";

import "@/styles/our-partners.css";

import ContactForm from "@/components/forms/ContactForm";

import ParticleCanvas from "@/components/effects/ParticleCanvas";

import PageRevealEffects from "@/components/effects/PageRevealEffects";

export default function OurPartnersPage() {
  return (
    <PageRevealEffects>
      <div id="partners-master" style={{ width: "100%", position: "relative", color: "#cbd5e1", overflowX: "hidden", fontFamily: "'Poppins', sans-serif" }}>

    

    

    

    <ParticleCanvas id="warp-canvas" className="fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none opacity-50" />

    <div className="relative z-10 w-full text-slate-400" style={{ perspective: "2000px" }}>
        
        <section className="min-h-[90vh] flex flex-col justify-center pb-12 pt-24 px-6 lg:px-12 relative">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center max-w-[1600px] mx-auto w-full">
                
                <div className="lg:col-span-5 relative z-20 pr-4 lg:pr-8">
                    <div className="hero-animate inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#7469F8]/20 bg-[#7469F8]/5 text-[#4c94f6] text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md" style={{ animationDelay: "0.1s" }}>
                        <span className="w-2 h-2 rounded-full bg-[#AB57F3] animate-pulse"></span>
                        Our Partner Ecosystem
                    </div>
                    <h1 className="hero-animate text-5xl md:text-5xl lg:text-6xl font-black leading-[1.05] text-white tracking-tight mb-6" style={{ animationDelay: "0.2s" }}>
                        Built to Connect Brands With the<br/>
                        <span className="text-gradient-smm drop-shadow-[0_0_15px_rgba(63,139,249,0.15)]">Right Growth Partners</span>
                    </h1>
                    <p className="hero-animate text-lg text-slate-300 w-full mb-10 leading-relaxed" style={{ animationDelay: "0.3s" }}>
                        Ascendia Prime works with a connected ecosystem of publishers, affiliates, creators, agencies, and sub-networks to help brands reach relevant audiences, drive measurable actions, and scale with transparency.
                    </p>
                    <div className="hero-animate flex flex-col sm:flex-row gap-5 mb-8 lg:mb-0" style={{ animationDelay: "0.4s" }}>
                        <div className="magnetic-btn w-full sm:w-auto">
                            <button onClick={() => { document.getElementById('inquiry-form-section')?.scrollIntoView({ behavior: 'smooth' }); }} className="w-full glow-btn text-white bg-gradient-to-r from-[#7469F8] to-[#AB57F3] opacity-90 hover:opacity-100 px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(116,105,248,0.25)] hover:shadow-[0_0_30px_rgba(171,87,243,0.4)] transition-all">
                                Explore Partnerships
                                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="hero-animate lg:col-span-7 relative w-full flex items-center justify-center" style={{ animationDelay: "0.5s" }}>
                    <div className="relative w-full max-w-[980px] aspect-[1/1] sm:aspect-[1.5/1] md:aspect-[1.9/1] lg:aspect-[2.1/1]">

                        <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 1000 450" preserveAspectRatio="xMidYMid meet">
                            <defs>
                                <filter id="glow-particle" x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                </filter>

                                <linearGradient id="line-grad-TL" x1="100%" y1="100%" x2="0%" y2="0%">
                                    <stop offset="0%" stopColor="#3F8BF9" stopOpacity="0.85"/>
                                    <stop offset="100%" stopColor="#3F8BF9" stopOpacity="0.25"/>
                                </linearGradient>
                                <linearGradient id="line-grad-TR" x1="0%" y1="100%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#AB57F3" stopOpacity="0.85"/>
                                    <stop offset="100%" stopColor="#AB57F3" stopOpacity="0.25"/>
                                </linearGradient>
                                <linearGradient id="line-grad-BL" x1="100%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#3F8BF9" stopOpacity="0.85"/>
                                    <stop offset="100%" stopColor="#3F8BF9" stopOpacity="0.25"/>
                                </linearGradient>
                                <linearGradient id="line-grad-BR" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#E057D8" stopOpacity="0.85"/>
                                    <stop offset="100%" stopColor="#E057D8" stopOpacity="0.25"/>
                                </linearGradient>
                                
                                <radialGradient id="center-hub-blue" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stopColor="#194182" stopOpacity="1"/>
                                    <stop offset="100%" stopColor="#040F26" stopOpacity="1"/>
                                </radialGradient>

                                <marker id="arrowhead" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto-start-reverse">
                                    <polygon points="0 0, 5 2.5, 0 5" fill="#3F8BF9" opacity="0.9" />
                                </marker>
                            </defs>

                            <line x1="500" y1="225" x2="340" y2="80" stroke="url(#line-grad-TL)" strokeWidth="2.5" />
                            <line x1="500" y1="225" x2="660" y2="80" stroke="url(#line-grad-TR)" strokeWidth="2.5" />
                            <line x1="500" y1="225" x2="340" y2="370" stroke="url(#line-grad-BL)" strokeWidth="2.5" />
                            <line x1="500" y1="225" x2="660" y2="370" stroke="url(#line-grad-BR)" strokeWidth="2.5" />

                            <path d="M190,205 C270,165 400,210 500,215" fill="none" stroke="#AB57F3" strokeWidth="2" opacity="0.6" strokeDasharray="2 6"/>
                            <path d="M190,225 L500,225" fill="none" stroke="#3F8BF9" strokeWidth="2" opacity="0.7" />
                            <path d="M190,245 C270,285 400,240 500,235" fill="none" stroke="#E057D8" strokeWidth="2" opacity="0.6" strokeDasharray="2 6"/>

                            <path d="M500,215 C580,210 650,160 710,205" fill="none" stroke="#3F8BF9" strokeWidth="2" opacity="0.7" marker-end="url(#arrowhead)"/>
                            <path d="M500,225 L710,225" fill="none" stroke="#AB57F3" strokeWidth="2" opacity="0.7" marker-end="url(#arrowhead)"/>
                            <path d="M500,235 C580,240 650,290 710,245" fill="none" stroke="#E057D8" strokeWidth="2" opacity="0.7" marker-end="url(#arrowhead)"/>

                            <circle r="2.5" fill="#AB57F3" opacity="0.8" filter="url(#glow-particle)">
                                <animateMotion dur="2.8s" repeatCount="indefinite" path="M190,205 C270,165 400,210 500,215" />
                            </circle>
                            <circle r="1.5" fill="#AB57F3" opacity="0.6" filter="url(#glow-particle)">
                                <animateMotion dur="2.8s" begin="1.4s" repeatCount="indefinite" path="M190,205 C270,165 400,210 500,215" />
                            </circle>

                            <circle r="2" fill="#3F8BF9" opacity="0.8" filter="url(#glow-particle)">
                                <animateMotion dur="2.2s" begin="0.4s" repeatCount="indefinite" path="M190,225 L500,225" />
                            </circle>
                            <circle r="2.5" fill="#3F8BF9" opacity="0.7" filter="url(#glow-particle)">
                                <animateMotion dur="2.2s" begin="1.5s" repeatCount="indefinite" path="M190,225 L500,225" />
                            </circle>

                            <circle r="1.5" fill="#E057D8" opacity="0.7" filter="url(#glow-particle)">
                                <animateMotion dur="3.2s" begin="0.8s" repeatCount="indefinite" path="M190,245 C270,285 400,240 500,235" />
                            </circle>
                            <circle r="2.5" fill="#E057D8" opacity="0.8" filter="url(#glow-particle)">
                                <animateMotion dur="3.2s" begin="2.4s" repeatCount="indefinite" path="M190,245 C270,285 400,240 500,235" />
                            </circle>

                            <circle r="2" fill="#3F8BF9" opacity="0.8" filter="url(#glow-particle)">
                                <animateMotion dur="2.6s" begin="0.2s" repeatCount="indefinite" path="M500,215 C580,210 650,160 710,205" />
                            </circle>
                            <circle r="2.5" fill="#3F8BF9" opacity="0.6" filter="url(#glow-particle)">
                                <animateMotion dur="2.6s" begin="1.5s" repeatCount="indefinite" path="M500,215 C580,210 650,160 710,205" />
                            </circle>

                            <circle r="2.5" fill="#AB57F3" opacity="0.8" filter="url(#glow-particle)">
                                <animateMotion dur="2s" begin="0s" repeatCount="indefinite" path="M500,225 L710,225" />
                            </circle>
                            <circle r="1.5" fill="#AB57F3" opacity="0.6" filter="url(#glow-particle)">
                                <animateMotion dur="2s" begin="1s" repeatCount="indefinite" path="M500,225 L710,225" />
                            </circle>

                            <circle r="2" fill="#E057D8" opacity="0.7" filter="url(#glow-particle)">
                                <animateMotion dur="3s" begin="0.6s" repeatCount="indefinite" path="M500,235 C580,240 650,290 710,245" />
                            </circle>
                            <circle r="1.5" fill="#E057D8" opacity="0.6" filter="url(#glow-particle)">
                                <animateMotion dur="3s" begin="2.1s" repeatCount="indefinite" path="M500,235 C580,240 650,290 710,245" />
                            </circle>

                            <g className="node-interactive-group animate-float-delayed">
                                <circle className="base-node-circle" cx="190" cy="225" r="70" fill="#0b111d" stroke="rgba(171, 87, 243, 0.35)" strokeWidth="1.5"/>
                                <path d="M180,188 L180,222 M200,188 L200,222 M170,222 L210,222 M175,196 L175,222 M205,196 L205,222 M187,196 L187,201 M193,196 L193,201 M187,209 L187,214 M193,209 L193,214" stroke="#AB57F3" opacity="0.8" strokeWidth="1.5" strokeLinecap="round"/>
                                <text x="190" y="240" fill="#cbd5e1" fontSize="11" fontWeight="bold" textAnchor="middle" dominantBaseline="middle" fontFamily="'Poppins', sans-serif">Brands &amp;</text>
                                <text x="190" y="255" fill="#cbd5e1" fontSize="11" fontWeight="bold" textAnchor="middle" dominantBaseline="middle" fontFamily="'Poppins', sans-serif">Advertisers</text>
                            </g>

                            <g className="node-interactive-group animate-float-slow">
                                <circle className="base-node-circle" cx="340" cy="80" r="70" fill="#0b111d" stroke="rgba(63, 139, 249, 0.3)" strokeWidth="1.5"/>
                                <rect x="328" y="38" width="24" height="26" rx="2" fill="none" stroke="#3F8BF9" opacity="0.8" strokeWidth="1.5"/>
                                <line x1="333" y1="45" x2="347" y2="45" stroke="#3F8BF9" opacity="0.8" strokeWidth="1.5" strokeLinecap="round"/>
                                <line x1="333" y1="51" x2="347" y2="51" stroke="#3F8BF9" opacity="0.8" strokeWidth="1.5" strokeLinecap="round"/>
                                <line x1="333" y1="57" x2="341" y2="57" stroke="#3F8BF9" opacity="0.8" strokeWidth="1.5" strokeLinecap="round"/>
                                <text x="340" y="95" fill="#cbd5e1" fontSize="11" fontWeight="bold" textAnchor="middle" dominantBaseline="middle" fontFamily="'Poppins', sans-serif">Publisher &amp;</text>
                                <text x="340" y="110" fill="#cbd5e1" fontSize="11" fontWeight="bold" textAnchor="middle" dominantBaseline="middle" fontFamily="'Poppins', sans-serif">Media</text>
                                <text x="340" y="125" fill="#cbd5e1" fontSize="11" fontWeight="bold" textAnchor="middle" dominantBaseline="middle" fontFamily="'Poppins', sans-serif">Partners</text>
                            </g>

                            <g className="node-interactive-group animate-float-slow" style={{ animationDelay: "1.5s" }}>
                                <circle className="base-node-circle" cx="660" cy="80" r="70" fill="#0b111d" stroke="rgba(171, 87, 243, 0.3)" strokeWidth="1.5"/>
                                <circle cx="654" cy="44" r="5" fill="none" stroke="#AB57F3" opacity="0.8" strokeWidth="1.5"/>
                                <path d="M644,57 C644,52 648,49 654,49 C658,49 661,51 663,54" fill="none" stroke="#AB57F3" opacity="0.8" strokeWidth="1.5" strokeLinecap="round"/>
                                <circle cx="666" cy="47" r="3.5" fill="none" stroke="#AB57F3" opacity="0.8" strokeWidth="1.2"/>
                                <path d="M662,57 C664,54 668,53 671,55" fill="none" stroke="#AB57F3" opacity="0.8" strokeWidth="1.2" strokeLinecap="round"/>
                                <text x="660" y="95" fill="#cbd5e1" fontSize="11" fontWeight="bold" textAnchor="middle" dominantBaseline="middle" fontFamily="'Poppins', sans-serif">Affiliate &amp;</text>
                                <text x="660" y="110" fill="#cbd5e1" fontSize="11" fontWeight="bold" textAnchor="middle" dominantBaseline="middle" fontFamily="'Poppins', sans-serif">Performance</text>
                                <text x="660" y="125" fill="#cbd5e1" fontSize="11" fontWeight="bold" textAnchor="middle" dominantBaseline="middle" fontFamily="'Poppins', sans-serif">Partners</text>
                            </g>

                            <g className="node-interactive-group animate-float-slow" style={{ animationDelay: "2s" }}>
                                <circle className="base-node-circle" cx="340" cy="370" r="70" fill="#0b111d" stroke="rgba(63, 139, 249, 0.3)" strokeWidth="1.5"/>
                                <circle cx="340" cy="339" r="6" fill="none" stroke="#3F8BF9" opacity="0.8" strokeWidth="1.5"/>
                                <path d="M326,355 C326,349 332,346 340,346 C344,346 348,347 351,350" fill="none" stroke="#3F8BF9" opacity="0.8" strokeWidth="1.5" strokeLinecap="round"/>
                                <polygon points="352,350 354,354 358,354 355,357 356,361 352,359 348,361 349,357 346,354 350,354" fill="none" stroke="#3F8BF9" opacity="0.8" strokeWidth="1"/>
                                <text x="340" y="385" fill="#cbd5e1" fontSize="11" fontWeight="bold" textAnchor="middle" dominantBaseline="middle" fontFamily="'Poppins', sans-serif">Creator &amp;</text>
                                <text x="340" y="400" fill="#cbd5e1" fontSize="11" fontWeight="bold" textAnchor="middle" dominantBaseline="middle" fontFamily="'Poppins', sans-serif">Influencer</text>
                                <text x="340" y="415" fill="#cbd5e1" fontSize="11" fontWeight="bold" textAnchor="middle" dominantBaseline="middle" fontFamily="'Poppins', sans-serif">Partners</text>
                            </g>

                            <g className="node-interactive-group animate-float-slow" style={{ animationDelay: "1s" }}>
                                <circle className="base-node-circle" cx="660" cy="370" r="70" fill="#0b111d" stroke="rgba(224, 87, 216, 0.3)" strokeWidth="1.5"/>
                                <circle cx="660" cy="337" r="4.5" fill="none" stroke="#E057D8" opacity="0.8" strokeWidth="1.5"/>
                                <path d="M651,349 C651,344 655,342 660,342 C665,342 669,344 669,349" fill="none" stroke="#E057D8" opacity="0.8" strokeWidth="1.5" strokeLinecap="round"/>
                                <circle cx="649" cy="342" r="3.5" fill="none" stroke="#E057D8" opacity="0.8" strokeWidth="1.2"/>
                                <path d="M642,351 C642,347 645,346 649,346" fill="none" stroke="#E057D8" opacity="0.8" strokeWidth="1.2" strokeLinecap="round"/>
                                <circle cx="671" cy="342" r="3.5" fill="none" stroke="#E057D8" opacity="0.8" strokeWidth="1.2"/>
                                <path d="M671,346 C675,346 678,347 678,351" fill="none" stroke="#E057D8" opacity="0.8" strokeWidth="1.2" strokeLinecap="round"/>
                                <text x="660" y="385" fill="#cbd5e1" fontSize="11" fontWeight="bold" textAnchor="middle" dominantBaseline="middle" fontFamily="'Poppins', sans-serif">Agency &amp;</text>
                                <text x="660" y="400" fill="#cbd5e1" fontSize="11" fontWeight="bold" textAnchor="middle" dominantBaseline="middle" fontFamily="'Poppins', sans-serif">Sub-Network</text>
                                <text x="660" y="415" fill="#cbd5e1" fontSize="11" fontWeight="bold" textAnchor="middle" dominantBaseline="middle" fontFamily="'Poppins', sans-serif">Partners</text>
                            </g>

                            <g>
                                <circle className="svg-pulse-core" cx="500" cy="225" r="92" fill="url(#center-hub-blue)" stroke="#7469F8" strokeWidth="1.5"/>
                                <image href="/images/logos/ascendiaprime-logo.png" x="420" y="165" width="160" height="55" preserveAspectRatio="xMidYMid meet" />
                                <text x="500" y="240" fill="rgba(63, 139, 249, 0.8)" fontSize="7" fontWeight="bold" letterSpacing="1.2" textAnchor="middle" dominantBaseline="middle" fontFamily="'Poppins', sans-serif">POWERING PERFORMANCE</text>
                                <text x="500" y="252" fill="rgba(63, 139, 249, 0.8)" fontSize="7" fontWeight="bold" letterSpacing="1.2" textAnchor="middle" dominantBaseline="middle" fontFamily="'Poppins', sans-serif">DRIVING GROWTH</text>
                            </g>

                            <foreignObject x="710" y="165" width="280" height="120" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                                <div className="svg-results-card-container">
                                    <div className="svg-results-card-inner" style={{ borderColor: "rgba(63, 139, 249, 0.25)", background: "rgba(30, 41, 59, 0.8)" }}>
                                        <div className="flex flex-col items-center flex-1">
                                            <svg className="w-7 h-7 text-[#3F8BF9] opacity-80 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                            <span className="text-[11px] md:text-xs text-slate-400 font-bold uppercase tracking-wider">Reach</span>
                                        </div>
                                        <div className="flex flex-col items-center flex-1">
                                            <svg className="w-7 h-7 text-[#AB57F3] opacity-80 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
                                            <span className="text-[11px] md:text-xs text-slate-400 font-bold uppercase tracking-wider">Convs</span>
                                        </div>
                                        <div className="flex flex-col items-center flex-1">
                                            <svg className="w-7 h-7 text-[#E057D8] opacity-80 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                                            <span className="text-[11px] md:text-xs text-slate-400 font-bold uppercase tracking-wider">Vis</span>
                                        </div>
                                        <div className="flex flex-col items-center flex-1">
                                            <svg className="w-7 h-7 text-[#3F8BF9] opacity-80 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                            <span className="text-[11px] md:text-xs text-slate-400 font-bold uppercase tracking-wider">Growth</span>
                                        </div>
                                    </div>
                                </div>
                            </foreignObject>
                        </svg>

                    </div>
                </div>
            </div>
        </section>

        <section className="py-24 px-6 lg:px-12 relative z-10 border-t border-white/5">
            <div className="max-w-[1400px] mx-auto w-full">
                
                <div className="text-center mb-16 max-w-4xl mx-auto smm-reveal">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Explore Our <span className="text-gradient-smm">Partner Network</span></h2>
                    <p className="text-slate-300 text-lg md:text-xl leading-relaxed">We collaborate across the digital ecosystem to deliver comprehensive growth for our clients.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 smm-reveal">
                    
                    <div className="glass-base p-10 rounded-2xl relative overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(63,139,249,0.15)] flex flex-col justify-between h-full">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-[#3F8BF9]/10 border border-[#3F8BF9]/20 flex items-center justify-center text-[#3F8BF9] mb-6">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-[#3F8BF9]">Publisher & Media Partners</h3>
                            <p className="text-slate-300 leading-relaxed text-lg mb-8">Content, editorial, commerce, and media partners that help brands reach relevant audiences across the funnel.</p>
                        </div>
                        <div className="mt-auto">
                            <button className="w-max glow-btn bg-[#3F8BF9]/10 hover:bg-[#3F8BF9] text-[#3F8BF9] hover:text-white border border-[#3F8BF9]/30 px-6 py-2.5 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all partner-popup-trigger" data-partner-type="publisher">
                                Partner With Us
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </button>
                        </div>
                    </div>

                    <div className="glass-base p-10 rounded-2xl relative overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(116,105,248,0.15)] flex flex-col justify-between h-full">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-[#7469F8]/10 border border-[#7469F8]/20 flex items-center justify-center text-[#7469F8] mb-6">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path></svg>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-[#7469F8]">Affiliate & Performance Partners</h3>
                            <p className="text-slate-300 leading-relaxed text-lg mb-8">Performance-driven partners focused on measurable actions such as leads, sales, sign-ups, and conversions.</p>
                        </div>
                        <div className="mt-auto">
                            <button className="w-max glow-btn bg-[#7469F8]/10 hover:bg-[#7469F8] text-[#7469F8] hover:text-white border border-[#7469F8]/30 px-6 py-2.5 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all partner-popup-trigger" data-partner-type="affiliate">
                                Partner With Us
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </button>
                        </div>
                    </div>

                    <div className="glass-base p-10 rounded-2xl relative overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(171,87,243,0.15)] flex flex-col justify-between h-full">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-[#AB57F3]/10 border border-[#AB57F3]/20 flex items-center justify-center text-[#AB57F3] mb-6">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path></svg>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-[#AB57F3]">Creator & Influencer Partners</h3>
                            <p className="text-slate-300 leading-relaxed text-lg mb-8">Creators and influencer partners that support brand storytelling, audience trust, and social engagement.</p>
                        </div>
                        <div className="mt-auto">
                            <button className="w-max glow-btn bg-[#AB57F3]/10 hover:bg-[#AB57F3] text-[#AB57F3] hover:text-white border border-[#AB57F3]/30 px-6 py-2.5 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all partner-popup-trigger" data-partner-type="creator">
                                Partner With Us
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </button>
                        </div>
                    </div>

                    <div className="glass-base p-10 rounded-2xl relative overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(224,87,216,0.15)] flex flex-col justify-between h-full">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-[#E057D8]/10 border border-[#E057D8]/20 flex items-center justify-center text-[#E057D8] mb-6">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-[#E057D8]">Agency & Sub-Network Partners</h3>
                            <p className="text-slate-300 leading-relaxed text-lg mb-8">Agencies and sub-networks that help extend campaign reach through managed publisher relationships, niche traffic sources, and performance-led collaborations across multiple verticals and markets.</p>
                        </div>
                        <div className="mt-auto">
                            <button className="w-max glow-btn bg-[#E057D8]/10 hover:bg-[#E057D8] text-[#E057D8] hover:text-white border border-[#E057D8]/30 px-6 py-2.5 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all partner-popup-trigger" data-partner-type="agency">
                                Partner With Us
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-12 smm-reveal max-w-5xl mx-auto text-center glass-base p-8 md:p-10 rounded-2xl border-l-4 border-l-[#3F8BF9] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#3F8BF9]/10 to-transparent opacity-50"></div>
                    <p className="text-white font-medium text-xl leading-relaxed relative z-10">
                        All partnerships are supported by transparent tracking, reporting, and validation processes to ensure visibility, quality, and accountability across campaigns.
                    </p>
                </div>

            </div>
        </section>

        <section id="inquiry-form-section" className="py-32 px-6 lg:px-12 relative overflow-hidden border-t border-white/5">
            <div className="max-w-[800px] mx-auto flex flex-col items-center text-center w-full smm-reveal">
                
                <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6">Partner With <br/><span className="text-gradient-smm">Ascendia Prime</span></h2>
                
                <p className="text-[#3F8BF9] text-lg md:text-xl mb-10 leading-relaxed">Whether you are a publisher, affiliate, creator, agency, or sub-network, we are open to building transparent, performance-led partnerships that create value for both brands and partners.</p>
                
                <div className="flex items-center justify-center gap-4 mb-12">
                    <div className="w-12 h-12 glass-base rounded-full flex items-center justify-center"><svg className="w-5 h-5 text-[#3F8BF9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div>
                    <span className="text-[#3F8BF9] font-medium text-lg">contact@ascendiaprime.com</span>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
                    <a href="https://partners.ascendiamedia.co.uk/registration" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto glow-btn bg-gradient-to-r from-[#3F8BF9] to-[#AB57F3] text-white px-10 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(63,139,249,0.3)] hover:shadow-[0_0_40px_rgba(171,87,243,0.5)] transition-all no-underline">
                        Sign Up as a Partner
                        <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </a>
                    
                    <button className="w-full sm:w-auto glow-btn bg-transparent border-2 border-[#7469F8]/50 text-white hover:bg-[#7469F8]/10 px-10 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all partner-popup-trigger">
                        Submit an Enquiry
                        <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                    </button>
                </div>

            </div>
        </section>
        
    </div> 
    
    <div id="partner-modal" className="partner-popup-overlay">
        <div className="partner-popup-content">
            <button id="close-modal" className="popup-close-btn">&times;</button>
            <h3 className="text-3xl font-bold text-white mb-8">Partnership Inquiry</h3>
            <div className="relative z-20">
                <ContactForm />
            </div>
        </div>
    </div>

    
</div>
    </PageRevealEffects>
  );
}
