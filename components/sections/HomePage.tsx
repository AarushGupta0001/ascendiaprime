"use client";

import Link from "next/link";

import "@/styles/home.css";

import ContactForm from "@/components/forms/ContactForm";

import ParticleCanvas from "@/components/effects/ParticleCanvas";

import PageRevealEffects from "@/components/effects/PageRevealEffects";

import ServiceSplitterEffects from "@/components/effects/ServiceSplitterEffects";
import HeroEffects from "@/components/effects/HeroEffects";
import NetworkCanvasEffects from "@/components/effects/NetworkCanvasEffects";
import MarqueeLogoEffects from "@/components/effects/MarqueeLogoEffects";
import { networkPartners, trustedBrands } from "@/lib/marquee-logos";

export default function HomePage() {
  return (
    <PageRevealEffects>
      <ServiceSplitterEffects />
      <HeroEffects />
      <NetworkCanvasEffects />
      <MarqueeLogoEffects />
      <div id="gem-hero" className="antialiased text-white bg-[#020617] font-sans relative min-h-screen flex flex-col selection:bg-[#3F8BF9] selection:text-white overflow-x-clip">







<ParticleCanvas id="cosmic-canvas" className="fixed inset-0 pointer-events-none z-0 w-full h-full opacity-80" />
<div id="ambient-glow" className="ambient-glow"></div>

<div className="max-w-[1400px] mx-auto px-6 md:px-12 relative w-full pt-12 pb-24 md:pt-16 md:pb-32 z-10">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[calc(100vh-80px)]">
        <div id="hero-content-left" className="lg:col-span-5 relative z-30">
            
            <h1 className="fade-in-up text-[2.5rem] md:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] mb-6 text-white" style={{ animationDelay: "0.1s" }}>
                Connecting Intent, <br/>Media & Technology <br/>to Power Growth
            </h1>
            <p className="fade-in-up text-[1.1rem] text-slate-300 leading-relaxed mb-10 font-light max-w-md" style={{ animationDelay: "0.2s" }}>
                We bring together data, media, technology, and customer experience to create a performance-led growth ecosystem designed for scale, clarity, and measurable outcomes.
            </p>
            <p className="fade-in-up text-[1.1rem] text-white leading-relaxed mb-10 font-light max-w-md" style={{ animationDelay: "0.2s" }}>
                Where audience signals become business outcomes.
            </p>
            <div className="fade-in-up flex flex-col sm:flex-row gap-4" style={{ animationDelay: "0.3s" }}>
                <div className="hover-target">
                    <Link href="#split-services-wrapper" className="inline-block text-center bg-gradient-to-r from-[#3F8BF9] via-[#7469F8] to-[#AB57F3] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300 shadow-[0_0_20px_rgba(63,139,249,0.4)] hover:shadow-[0_0_30px_rgba(63,139,249,0.6)] hover:-translate-y-0.5 w-full sm:w-auto border border-[#3F8BF9]/30 text-decoration-none">Explore Our Growth Framework</Link>
                </div>
                <div className="hover-target">
                    <Link href="#contact" className="inline-block text-center bg-gradient-to-r from-[#7469F8] via-[#AB57F3] to-[#E057D8] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300 shadow-[0_0_20px_rgba(171,87,243,0.4)] hover:shadow-[0_0_30px_rgba(171,87,243,0.6)] hover:-translate-y-0.5 w-full sm:w-auto border border-[#AB57F3]/30 text-decoration-none">Start a Conversation</Link>
                </div>
            </div>
        </div>

        <div id="hero-visuals-right" className="lg:col-span-7 relative w-full flex justify-center items-center fade-in-up hover-target" style={{ animationDelay: "0.4s", willChange: "transform, opacity, filter", transition: "all 0ms ease-linear" }}>
            <div className="relative w-full max-w-[950px] aspect-square flex justify-center items-center">
                <svg viewBox="0 0 1200 1200" className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-10">
                    <defs>
                        <linearGradient id="inf-master-grad" x1="100" y1="600" x2="1100" y2="600" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#3F8BF9" />  
                            <stop offset="33%" stopColor="#7469F8" /> 
                            <stop offset="66%" stopColor="#AB57F3" /> 
                            <stop offset="100%" stopColor="#E057D8" /> 
                        </linearGradient>
                        <filter id="glow-soft" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="6" result="blur"/>
                            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                        </filter>
                        <filter id="glow-strong" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="8" result="blur"/>
                            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                        </filter>
                        <path id="inf-path" d="M 300 400 C 600 400, 600 800, 900 800 A 200 200 0 0 0 900 400 C 600 400, 600 800, 300 800 A 200 200 0 0 1 300 400 Z" />
                        <path id="overpass" d="M 300 400 C 600 400, 600 800, 900 800" />
                    </defs>
                    <g className="ripples" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" fill="none">
                        <circle cx="600" cy="600" r="264"><animate attributeName="r" values="264; 540" dur="6s" repeatCount="indefinite" /><animate attributeName="opacity" values="0.8; 0" dur="6s" repeatCount="indefinite" /></circle>
                        <circle cx="600" cy="600" r="264"><animate attributeName="r" values="264; 540" dur="6s" begin="2s" repeatCount="indefinite" /><animate attributeName="opacity" values="0.8; 0" dur="6s" begin="2s" repeatCount="indefinite" /></circle>
                    </g>
                    <g style={{ transformOrigin: "600px 600px", animation: "revolve 50s linear infinite" }}>
                        <circle cx="600" cy="600" r="380" className="particle-orbit" strokeWidth="2.5" strokeDasharray="4 12" stroke="#ffffff" filter="url(#glow-soft)" opacity="0.9"/>
                    </g>
                    <g style={{ transformOrigin: "600px 600px", animation: "revolve 80s linear infinite reverse" }}>
                        <circle cx="600" cy="600" r="440" className="particle-orbit" strokeWidth="2" strokeDasharray="2 20" stroke="#ffffff" filter="url(#glow-soft)" opacity="0.8"/>
                    </g>
                    <g style={{ transformOrigin: "600px 600px", animation: "revolve 60s linear infinite" }}>
                        <circle cx="600" cy="600" r="500" className="particle-orbit" strokeWidth="2.5" strokeDasharray="6 24" stroke="#ffffff" filter="url(#glow-soft)" opacity="0.9"/>
                    </g>
                    <g style={{ transformOrigin: "600px 600px", animation: "revolve 100s linear infinite reverse" }}>
                        <circle cx="600" cy="600" r="560" className="particle-orbit" strokeWidth="2" strokeDasharray="3 30" stroke="#ffffff" filter="url(#glow-soft)" opacity="0.7"/>
                    </g>

                    <g style={{ transformOrigin: "600px 600px", transform: "scale(0.5)" }}>
                        <use href="#inf-path" fill="none" stroke="url(#inf-master-grad)" strokeWidth="84" filter="url(#glow-soft)" opacity="0.3" />
                        <g id="base-infinity" fill="none" strokeLinecap="butt">
                            <use href="#inf-path" stroke="url(#inf-master-grad)" strokeWidth="78" />
                            <use href="#inf-path" stroke="#050a18" strokeWidth="66" />
                            <use href="#inf-path" stroke="url(#inf-master-grad)" strokeWidth="54" />
                            <use href="#inf-path" stroke="#050a18" strokeWidth="42" />
                            <use href="#inf-path" stroke="url(#inf-master-grad)" strokeWidth="30" />
                            <use href="#inf-path" stroke="#050a18" strokeWidth="18" />
                            <use href="#inf-path" stroke="url(#inf-master-grad)" strokeWidth="6" />
                        </g>
                        <g id="overpass-infinity" fill="none" strokeLinecap="butt">
                            <use href="#overpass" stroke="url(#inf-master-grad)" strokeWidth="78" />
                            <use href="#overpass" stroke="#050a18" strokeWidth="66" />
                            <use href="#overpass" stroke="url(#inf-master-grad)" strokeWidth="54" />
                            <use href="#overpass" stroke="#050a18" strokeWidth="42" />
                            <use href="#overpass" stroke="url(#inf-master-grad)" strokeWidth="30" />
                            <use href="#overpass" stroke="#050a18" strokeWidth="18" />
                            <use href="#overpass" stroke="url(#inf-master-grad)" strokeWidth="6" />
                        </g>
                        <g>
                            <animateMotion dur="8s" repeatCount="indefinite" rotate="auto"><mpath href="#inf-path" /></animateMotion>
                            <circle cx="0" cy="-36" r="6" fill="#ffffff" filter="url(#glow-strong)" />
                        </g>
                        <g>
                            <animateMotion dur="12s" repeatCount="indefinite" rotate="auto"><mpath href="#inf-path" /></animateMotion>
                            <circle cx="0" cy="12" r="6" fill="#ffffff" filter="url(#glow-strong)" />
                        </g>
                    </g>
                </svg>

                <div className="orbit-container">
                    <div className="pointer-wrapper" style={{ animationDelay: "-0s" }}>
                        <div className="counter-rotate" style={{ animationDelay: "-0s" }}>
                            <div className="floating-anim float-d1">
                                <div className="metric-container sci-fi-glass shape-square hover-target">
                                    <span className="metric-title">ROAS</span>
                                    <span className="metric-value"><span id="val-roas">0.00</span>x</span>
                                    <svg width="45" height="12" viewBox="0 0 60 15" className="mt-2">
                                        <path d="M0 10 L 15 8 L 25 12 L 40 4 L 60 2" fill="none" stroke="#AB57F3" strokeWidth="3" className="animate-sparkline"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pointer-wrapper" style={{ animationDelay: "-11s" }}>
                        <div className="counter-rotate" style={{ animationDelay: "-11s" }}>
                            <div className="floating-anim float-d2">
                                <div className="metric-container sci-fi-glass shape-square relative hover-target">
                                    <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
                                        <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3"/>
                                        <circle cx="50" cy="50" r="40" fill="none" stroke="#E057D8" strokeWidth="3" strokeDasharray="251" strokeDashoffset="70" style={{ transition: "stroke-dashoffset 2s ease-out" }}/>
                                    </svg>
                                    <span className="metric-title !mb-0">Conversion</span>
                                    <span className="metric-value text-[#E057D8]">+<span id="val-conv">0.0</span>%</span>
                                    <span className="text-[#E057D8] font-bold mt-[1px] text-[0.6rem]">↗</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pointer-wrapper" style={{ animationDelay: "-22s" }}>
                        <div className="counter-rotate" style={{ animationDelay: "-22s" }}>
                            <div className="floating-anim float-d3">
                                <div className="metric-container sci-fi-glass shape-square hover-target">
                                    <div className="flex items-center justify-center gap-1 mb-2">
                                        <div className="relative flex h-[6px] w-[6px]">
                                            <span className="ping-ring absolute inline-flex h-full w-full rounded-full bg-[#E057D8]"></span>
                                            <span className="relative inline-flex rounded-full h-[6px] w-[6px] bg-[#E057D8]"></span>
                                        </div>
                                        <span className="text-[0.5rem] text-[#E057D8] uppercase font-bold tracking-widest">Ping</span>
                                    </div>
                                    <span className="metric-title">Live Traffic</span>
                                    <span className="metric-value" id="val-traffic">0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pointer-wrapper" style={{ animationDelay: "-33s" }}>
                        <div className="counter-rotate" style={{ animationDelay: "-33s" }}>
                            <div className="floating-anim float-d4">
                                <div className="metric-container sci-fi-glass shape-square hover-target">
                                    <div className="flex items-end justify-center gap-[2px] h-[12px] mb-2">
                                        <div className="w-[3px] bg-[#3F8BF9] rounded-t bar-1"></div>
                                        <div className="w-[3px] bg-[#7469F8] rounded-t bar-2"></div>
                                        <div className="w-[3px] bg-[#AB57F3] rounded-t bar-3"></div>
                                    </div>
                                    <span className="metric-title">Intent Signals</span>
                                    <span className="metric-value" id="val-signals">0</span>
                                    <span className="metric-sub">Active</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pointer-wrapper" style={{ animationDelay: "-44s" }}>
                        <div className="counter-rotate" style={{ animationDelay: "-44s" }}>
                            <div className="floating-anim float-d5">
                                <div className="metric-container sci-fi-glass shape-square hover-target">
                                    <div className="flex justify-center mb-2">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7469F8" strokeWidth="1.5">
                                            <circle cx="12" cy="12" r="3" className="gear-spin"/>
                                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" className="gear-spin"/>
                                        </svg>
                                    </div>
                                    <span className="metric-title">Growth</span>
                                    <span className="metric-value text-[#7469F8]">Scaling ↑</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="w-full bg-gradient-to-b from-[#050a18] to-[#050b21]">
    <section className="relative w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 z-20 fade-in-up">
        <div className="adv-card bg-[#0b111d] rounded-[2rem] p-10 md:p-16 border border-slate-800 hover:border-slate-700 transition-colors duration-500 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-12">
            
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-gradient-to-br from-[#3F8BF9]/20 to-[#AB57F3]/20 rounded-full blur-[80px] animate-[pulse-ring_8s_infinite] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-gradient-to-tr from-[#E057D8]/20 to-[#7469F8]/20 rounded-full blur-[80px] animate-[pulse-ring_10s_infinite_reverse] pointer-events-none"></div>

            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
            
            <div className="relative z-10 max-w-2xl text-left">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-4 py-1.5 text-xs font-bold text-slate-300 mb-6 uppercase tracking-[0.2em] backdrop-blur-sm shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-[#E057D8] animate-pulse"></span>
                    For Advertisers
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 mb-6 tracking-tight leading-tight">
                    Scale Customer Acquisition <br className="hidden md:block" />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3F8BF9] to-[#AB57F3]">With Clarity and Control.</span>
                </h2>
                <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-light">
                    We help brands reach relevant audiences, drive measurable actions, and scale performance through publisher partnerships, affiliate marketing, retargeting, and programmatic media supported by transparent tracking and reporting.
                </p>
            </div>
            
            <div className="relative z-10 flex-shrink-0 group/btn">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-[#3F8BF9] via-[#AB57F3] to-[#E057D8] rounded-full blur opacity-60 group-hover/btn:opacity-100 transition duration-500 animate-gradient-xy"></div>
                
                <Link href="/advertisers" className="relative inline-flex items-center gap-3 bg-[#050b21] text-white font-semibold text-lg px-10 py-5 rounded-full transition-all duration-300 transform group-hover/btn:scale-[1.02] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] text-decoration-none">
                    Explore Advertiser Solutions
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </Link>
            </div>
        </div>
    </section>
</div>

<div id="split-services-wrapper">
    
    <div className="bg-watermark">SERVICES</div>

    <div className="w-full max-w-[1200px] mx-auto mb-12 relative z-10 px-0 md:px-0 text-left">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-[0_0_30px_rgba(0,0,0,1)]">Our Growth
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3F8BF9] to-[#AB57F3]">Framework</span>.</h2>
        <p className="text-slate-400 mt-4 text-lg max-w-2xl">Three connected pillars that organize our capabilities across customer acquisition, brand visibility, and digital presence  helping brands grow across the full customer journey
.</p>
    </div>

    <div className="split-services-container" id="main-services-container">
        
        <div className="major-services-col">
            
            <div className="major-srv-btn" data-target="seo">
                <div className="srv-header">
                    <div className="srv-info">
                        <span className="srv-num">01</span>
                        <span className="srv-name">Performance Marketing & Partner Growth</span>
                    </div>
                    <span className="arrow-indicator">
                        <svg width="50" height="24" viewBox="0 0 30 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="0" y1="12" x2="28" y2="12"></line><polyline points="20 4 28 12 20 20"></polyline></svg>
                    </span>
                </div>
                <div className="srv-desc">
                    <p>Drive measurable acquisition through affiliate partnerships, publisher channels, PPC, paid social, and retargeting strategies designed around conversion quality and scalable growth.</p>
                </div>
            </div>

            <div className="major-srv-btn" data-target="webdev">
                <div className="srv-header">
                    <div className="srv-info">
                        <span className="srv-num">02</span>
                        <span className="srv-name">Programmatic Branding & Awareness</span>
                    </div>
                    <span className="arrow-indicator">
                        <svg width="50" height="24" viewBox="0 0 30 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="0" y1="12" x2="28" y2="12"></line><polyline points="20 4 28 12 20 20"></polyline></svg>
                    </span>
                </div>
                <div className="srv-desc">
                    <p>Reach relevant audiences across display, video, native, and CTV through DSP-led media buying and transparent campaign execution.</p>
                </div>
            </div>

            <div className="major-srv-btn" data-target="perf">
                <div className="srv-header">
                    <div className="srv-info">
                        <span className="srv-num">03</span>
                        <span className="srv-name">Digital, Creative & Web Solutions</span>
                    </div>
                    <span className="arrow-indicator">
                        <svg width="50" height="24" viewBox="0 0 30 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="0" y1="12" x2="28" y2="12"></line><polyline points="20 4 28 12 20 20"></polyline></svg>
                    </span>
                </div>
                <div className="srv-desc">
                    <p>Strengthen your digital presence through web development, SEO, social media, influencer marketing, ORM, and creative solutions built around visibility and customer experience.</p>
                </div>
            </div>

        </div>

        <div className="minor-services-col">
            <div className="minor-services-inner">

                <div className="minor-group" id="group-seo">
                    <Link href="/affiliates-publisher-marketing" className="minor-card-link">
                        <div className="minor-card">
                            <div className="icon-box">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            </div>
                            <div className="minor-card-title-row">
                                <h4>Affiliate & Publisher Marketing</h4>
                                <span className="card-arrow">→</span>
                            </div>
                            <p>Leverage high-quality partner networks to drive scalable, performance-based acquisition.</p>
                        </div>
                    </Link>
                    <Link href="/ppc" className="minor-card-link">
                        <div className="minor-card">
                            <div className="icon-box">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                            </div>
                            <div className="minor-card-title-row">
                                <h4>Google,Meta & PPC Ads</h4>
                                <span className="card-arrow">→</span>
                            </div>
                            <p>Capture high-intent traffic and generate demand across top search and social platforms.</p>
                        </div>
                    </Link>
                    <Link href="/retargeting" className="minor-card-link">
                        <div className="minor-card">
                            <div className="icon-box">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
                            </div>
                            <div className="minor-card-title-row">
                                <h4>Retargeting Campaigns</h4>
                                <span className="card-arrow">→</span>
                            </div>
                            <p>Re-engage lost visitors and guide them back through the funnel to maximize conversions.</p>
                        </div>
                    </Link>
                    <Link href="/conversion-led-growth" className="minor-card-link">
                        <div className="minor-card">
                            <div className="icon-box">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                            </div>
                            <div className="minor-card-title-row">
                                <h4>Conversion-Led Growth</h4>
                                <span className="card-arrow">→</span>
                            </div>
                            <p>Optimize user journeys and landing pages to turn clicks into paying customers.</p>
                        </div>
                    </Link>
                </div>

                <div className="minor-group" id="group-webdev">
                    <Link href="/display-advertising" className="minor-card-link">
                        <div className="minor-card">
                            <div className="icon-box">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                            </div>
                            <div className="minor-card-title-row">
                                <h4>Display Advertising</h4>
                                <span className="card-arrow">→</span>
                            </div>
                            <p>Reach your audience across millions of websites with visually impactful banner formats.</p>
                        </div>
                    </Link>
                    <Link href="/video-native-ads" className="minor-card-link">
                        <div className="minor-card">
                            <div className="icon-box">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                            </div>
                            <div className="minor-card-title-row">
                                <h4>Video & Native Ads</h4>
                                <span className="card-arrow">→</span>
                            </div>
                            <p>Blend seamlessly into user experiences with engaging video and native content.</p>
                        </div>
                    </Link>
                    <Link href="/connected-tv" className="minor-card-link">
                        <div className="minor-card">
                            <div className="icon-box">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>
                            </div>
                            <div className="minor-card-title-row">
                                <h4>Connected TV</h4>
                                <span className="card-arrow">→</span>
                            </div>
                            <p>Bring the power of digital targeting to the big screen with premium CTV placements.</p>
                        </div>
                    </Link>
                    <Link href="/dsp" className="minor-card-link">
                        <div className="minor-card">
                            <div className="icon-box">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
                            </div>
                            <div className="minor-card-title-row">
                                <h4>DSP-Led Media Buying</h4>
                                <span className="card-arrow">→</span>
                            </div>
                            <p>Utilize demand-side platforms for real-time bidding and precise audience targeting.</p>
                        </div>
                    </Link>
                </div>

                <div className="minor-group" id="group-perf">
                    <Link href="/webdev" className="minor-card-link">
                        <div className="minor-card">
                            <div className="icon-box">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                            </div>
                            <div className="minor-card-title-row">
                                <h4>Website Development</h4>
                                <span className="card-arrow">→</span>
                            </div>
                            <p>Build lightning-fast, highly interactive frontends engineered for modern digital scale.</p>
                        </div>
                    </Link>
                    <Link href="/seo" className="minor-card-link">
                        <div className="minor-card">
                            <div className="icon-box">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            </div>
                            <div className="minor-card-title-row">
                                <h4>SEO & Organic Growth</h4>
                                <span className="card-arrow">→</span>
                            </div>
                            <p>Dominate search engine results pages with technical architecture and content strategies.</p>
                        </div>
                    </Link>
                    <Link href="/influencer-marketing" className="minor-card-link">
                        <div className="minor-card">
                            <div className="icon-box">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                            </div>
                            <div className="minor-card-title-row">
                                <h4>Social Media & Influencer Marketing</h4>
                                <span className="card-arrow">→</span>
                            </div>
                            <p>Build community and amplify brand voice through strategic social and creator partnerships.</p>
                        </div>
                    </Link>
                    <Link href="/orm" className="minor-card-link">
                        <div className="minor-card">
                            <div className="icon-box">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                            </div>
                            <div className="minor-card-title-row">
                                <h4>ORM & Creative Solutions</h4>
                                <span className="card-arrow">→</span>
                            </div>
                            <p>Protect your brand's digital reputation while deploying data-driven creative assets.</p>
                        </div>
                    </Link>
                </div>

            </div>
        </div>

    </div>
</div>





<section className="w-full relative z-10 pt-12 pb-3 bg-gradient-to-b from-[#050b21] via-[#3F8BF9]/10 to-[#050b21] overflow-hidden flex flex-col justify-center items-center">
    
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/5 blur-[120px] pointer-events-none"></div>
    
    <div className="relative z-10 w-full flex flex-col gap-6">
        
        <div>
            <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center scale-in" style={{ animationDelay: "0.2s" }}>
                <h2 className="mb-5 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">Trusted by these companies</h2>
            </div>
            <div className="w-full relative scale-in hover-target z-10" style={{ animationDelay: "0.4s" }}>
                <div className="relative w-full flex items-center justify-center overflow-hidden logo-track">
                    <div id="trusted-advertiser-marquee" className="animate-marquee flex items-center gap-10 md:gap-16 px-4 md:px-8">
                        {[...trustedBrands, ...trustedBrands].map((brand, index) => (
                            <div key={`${brand.slug}-${index}`} className="trusted-logo-tile shrink-0" title={brand.title}>
                                <img
                                    decoding="async"
                                    src={`https://cdn.simpleicons.org/${brand.slug}`}
                                    alt={`${brand.title} logo`}
                                    className="trusted-logo-img"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        

        

        <div>
            <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center scale-in" style={{ animationDelay: "0.3s" }}>
                <h2 className="mb-5 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">Our Network Partners</h2>
            </div>
            <div className="w-full relative scale-in hover-target z-10" style={{ animationDelay: "0.5s" }}>
                <div className="relative w-full flex items-center justify-center overflow-hidden">
                    <div className="animate-marquee-reverse flex items-center gap-10 md:gap-16 px-4 md:px-8">
                        {[...networkPartners, ...networkPartners].map((partner, index) => (
                            <div
                                key={`${partner.title}-${index}`}
                                className={`network-logo-tile shrink-0${"icon" in partner && partner.icon ? " logo-icon" : ""}`}
                                title={partner.title}
                            >
                                <img decoding="async" src={partner.src} alt={`${partner.title} logo`} className="network-logo-img" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>

<section id="case-studies" className="relative pt-14 pb-32 w-full bg-[#050b21] z-10 overflow-hidden">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16 relative z-40 text-left">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-[0_0_30px_rgba(0,0,0,1)]">
            Case <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3F8BF9] to-[#AB57F3]">Case Studies</span>.
        </h2>
        <p className="text-slate-400 mt-4 text-lg max-w-2xl">Explore our high-impact growth campaigns across major global verticals.</p>
    </div>
    
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-20 scale-in">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-[#0b111d] border border-slate-800/80 rounded-2xl p-6 md:p-8 hover:border-slate-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                <div>
                    <h3 className="text-xl font-bold text-white mb-4 line-clamp-3 leading-snug group-hover:text-[#3F8BF9] transition-colors duration-300">Transforming a Mid-Sized Insurance Firm with Data-Driven Digital Marketing</h3>
                    <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">Discover how a data-focused approach revitalized a mid-sized insurance provider's digital presence and acquisition strategy.</p>
                </div>
                <Link href="/case-study-1/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#3F8BF9] mt-8 hover:text-white transition-colors duration-300">
                    Read Case Study
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
            </div>

            <div className="bg-[#0b111d] border border-slate-800/80 rounded-2xl p-6 md:p-8 hover:border-slate-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                <div>
                    <h3 className="text-xl font-bold text-white mb-4 line-clamp-3 leading-snug group-hover:text-[#3F8BF9] transition-colors duration-300">Customised Strategy Boosted a Global Anti-Virus Company's Sales by Over 7:1</h3>
                    <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">Learn the precise strategies used to generate an impressive 7:1 return for a global cybersecurity and anti-virus brand.</p>
                </div>
                <Link href="/case-study-2/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#3F8BF9] mt-8 hover:text-white transition-colors duration-300">
                    Read Case Study
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
            </div>

            <div className="bg-[#0b111d] border border-slate-800/80 rounded-2xl p-6 md:p-8 hover:border-slate-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                <div>
                    <h3 className="text-xl font-bold text-white mb-4 line-clamp-3 leading-snug group-hover:text-[#3F8BF9] transition-colors duration-300">Scaling a Family Law Firm with No Win No Fee Growth in 6 Months</h3>
                    <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">A look at how targeted campaigns rapidly scaled a family law firm over a 6-month period using a "no win, no fee" angle.</p>
                </div>
                <Link href="/case-study-3/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#3F8BF9] mt-8 hover:text-white transition-colors duration-300">
                    Read Case Study
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
            </div>

            <div className="bg-[#0b111d] border border-slate-800/80 rounded-2xl p-6 md:p-8 hover:border-slate-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                <div>
                    <h3 className="text-xl font-bold text-white mb-4 line-clamp-3 leading-snug group-hover:text-[#3F8BF9] transition-colors duration-300">Travel Company Packs a 98% Sales Surge in 45 Days</h3>
                    <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">How our team identified the perfect client profile to nearly double sales for a travel agency in just one month and a half.</p>
                </div>
                <Link href="/case-study-4/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#3F8BF9] mt-8 hover:text-white transition-colors duration-300">
                    Read Case Study
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
            </div>

            <div className="bg-[#0b111d] border border-slate-800/80 rounded-2xl p-6 md:p-8 hover:border-slate-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                <div>
                    <h3 className="text-xl font-bold text-white mb-4 line-clamp-3 leading-snug group-hover:text-[#3F8BF9] transition-colors duration-300">Doubling Bank Customers at Half the Investment</h3>
                    <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">An inside look into the hyper-efficient acquisition model that brought in twice the banking customers at 50% of the cost.</p>
                </div>
                <Link href="/case-study-5/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#3F8BF9] mt-8 hover:text-white transition-colors duration-300">
                    Read Case Study
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
            </div>

            <div className="bg-[#0b111d] border border-slate-800/80 rounded-2xl p-6 md:p-8 hover:border-slate-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                <div>
                    <h3 className="text-xl font-bold text-white mb-4 line-clamp-3 leading-snug group-hover:text-[#3F8BF9] transition-colors duration-300">Accelerating Growth from Small to Medium in 3 Months (Supplement Brand)</h3>
                    <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">See how a UK-based supplement brand broke through its plateau, transitioning from a small to medium enterprise in just 90 days.</p>
                </div>
                <Link href="/case-study-6/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#3F8BF9] mt-8 hover:text-white transition-colors duration-300">
                    Read Case Study
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
            </div>

            <div className="bg-[#0b111d] border border-slate-800/80 rounded-2xl p-6 md:p-8 hover:border-slate-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                <div>
                    <h3 className="text-xl font-bold text-white mb-4 line-clamp-3 leading-snug group-hover:text-[#3F8BF9] transition-colors duration-300">Customised Strategy Boosted a Global Anti-Virus Company's Sales</h3>
                    <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">Further insights and breakdown of the tailored marketing approach applied to scale the global anti-virus company.</p>
                </div>
                <Link href="/case-study-7/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#3F8BF9] mt-8 hover:text-white transition-colors duration-300">
                    Read Case Study
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
            </div>

            <div className="bg-[#0b111d] border border-slate-800/80 rounded-2xl p-6 md:p-8 hover:border-slate-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                <div>
                    <h3 className="text-xl font-bold text-white mb-4 line-clamp-3 leading-snug group-hover:text-[#3F8BF9] transition-colors duration-300">Transforming a Mid-Sized Insurance Firm (Background)</h3>
                    <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">A deeper dive into the background, initial challenges, and foundational work behind the mid-sized insurance firm's success.</p>
                </div>
                <Link href="/case-study-8/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#3F8BF9] mt-8 hover:text-white transition-colors duration-300">
                    Read Case Study
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
            </div>

        </div>
    </div>
</section>

<section id="different" className="relative z-10 w-full bg-[#050b21] overflow-hidden pt-40 pb-24">
<canvas className="network-canvas absolute top-0 left-0 w-full h-full pointer-events-none z-0"></canvas>

<div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
<div className="mb-16 text-center max-w-3xl mx-auto">
<div className="scale-in mb-4 inline-flex items-center gap-2 rounded-full bg-white border border-[#3F8BF9]/30 px-5 py-2.5 text-sm font-medium text-[#3F8BF9] backdrop-blur-sm shadow-sm" style={{ animationDelay: "0.1s" }}>
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
Why Choose Us
</div>
<h2 className="scale-in text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight" style={{ animationDelay: "0.2s" }}>
How Are We <span className="text-[#3F8BF9]">Different</span>?
</h2>
<p className="scale-in text-slate-300 text-lg leading-relaxed" style={{ animationDelay: "0.3s" }}>We don't just follow industry standards—we set them. Here's what makes us stand out from the crowd in driving actual, scalable growth.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-24 max-w-6xl mx-auto relative z-10">
<div className="fade-in-left bento-card md:col-span-2 md:row-span-1 p-8 hover-target min-h-[250px] bg-white border border-slate-200 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1" style={{ animationDelay: "0.1s" }}>
<div className="bento-content flex flex-col md:flex-row items-start md:items-center justify-between gap-8 h-full">
<div className="flex-1"><div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#3F8BF9]/10 text-[#3F8BF9]"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg></div><h3 className="mb-3 text-2xl font-bold text-slate-900">Audience Intelligence</h3><p className="text-slate-600 leading-relaxed">We leverage first-party data and predictive modeling to find your highest-converting customers before they even search for you.</p></div>
<div className="relative w-32 h-32 flex-shrink-0 opacity-100 mix-blend-multiply pointer-events-none drop-shadow-md animate-spin" style={{ animationDuration: "10s" }}><svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md"><circle cx="50" cy="50" r="40" fill="none" stroke="rgba(63, 139, 249, 0.6)" strokeWidth="4"/><circle cx="50" cy="50" r="25" fill="none" stroke="rgba(63, 139, 249, 0.8)" strokeWidth="4"/><circle cx="50" cy="50" r="10" fill="rgba(63, 139, 249, 1)"/><path d="M50 50 L50 10 A40 40 0 0 1 90 50 Z" fill="url(#radarGrad)" className="radar-sweep"/><defs><linearGradient id="radarGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="rgba(63, 139, 249, 0.5)"/><stop offset="100%" stopColor="transparent"/></linearGradient></defs></svg></div>
</div>
</div>
<div className="fade-in-right bento-card md:col-span-1 md:row-span-2 p-8 hover-target flex flex-col min-h-[300px] md:min-h-full bg-white border border-slate-200 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1" style={{ animationDelay: "0.2s" }}>
<div className="bento-content flex-1 flex flex-col relative z-20">
    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#7469F8]/10 text-[#7469F8]"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg></div>
    <h3 className="mb-3 text-2xl font-bold text-slate-900 relative z-10">Performance Obsessed</h3>
    <p className="text-slate-600 leading-relaxed flex-1 relative z-10">We don't report on vanity metrics. We measure success by pipeline generated, CAC, and revenue closed.</p>
    
    <div className="relative w-full flex-1 mt-6 flex flex-col justify-end min-h-[160px]">
        <div className="absolute top-2 right-2 bg-[#3F8BF9]/20 border border-[#3F8BF9]/30 text-[#3F8BF9] px-3 py-1 rounded-full text-xs font-bold floating-anim z-30 backdrop-blur-sm">+342% ROI</div>
        <div className="absolute top-2 left-2 bg-[#7469F8]/20 border border-[#7469F8]/30 text-[#7469F8] px-3 py-1 rounded-full text-xs font-bold floating-anim z-30 backdrop-blur-sm" style={{ animationDelay: "-2s" }}>-$42 CAC</div>
        
        <div className="absolute inset-x-0 bottom-0 h-full border-b border-l border-slate-200 flex flex-col justify-between pb-0.5 pointer-events-none z-0">
            <div className="w-full border-b border-slate-200 border-dashed"></div>
            <div className="w-full border-b border-slate-200 border-dashed"></div>
            <div className="w-full border-b border-slate-200 border-dashed"></div>
        </div>
        
        <svg viewBox="0 0 100 50" className="w-full h-[120px] pointer-events-none overflow-visible mt-auto drop-shadow-[0_5px_5px_rgba(63,139,249,0.2)] relative z-20">
            <defs>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#AB57F3" />
                    <stop offset="100%" stopColor="#3F8BF9" />
                </linearGradient>
                <linearGradient id="fillGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(63, 139, 249, 0.2)" />
                    <stop offset="100%" stopColor="rgba(63, 139, 249, 0.0)" />
                </linearGradient>
            </defs>
            <path d="M0,40 Q10,30 20,35 T40,20 T60,25 T80,5 T100,10 L100,50 L0,50 Z" fill="url(#fillGrad)" opacity="0.5">
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite"/>
            </path>
            <path id="sparkline-path" d="M0,40 Q10,30 20,35 T40,20 T60,25 T80,5 T100,10" pathLength="100" fill="none" stroke="url(#lineGrad)" strokeWidth="2" strokeLinecap="round" className="animate-sparkline"/>
            
            <g>
                <circle r="3" fill="#fff" className="ping-ring"/>
                <circle r="2" fill="#3F8BF9"/>
                <animateMotion dur="5s" repeatCount="indefinite" fill="freeze">
                    <mpath href="#sparkline-path"/>
                </animateMotion>
            </g>
            <g>
                <circle r="3" fill="#fff" className="ping-ring"/>
                <circle r="2" fill="#AB57F3"/>
                <animateMotion dur="5s" begin="2.5s" repeatCount="indefinite" fill="freeze">
                    <mpath href="#sparkline-path"/>
                </animateMotion>
            </g>
        </svg>
    </div>
</div>
</div>
<div className="fade-in-left bento-card md:col-span-1 p-8 hover-target min-h-[250px] bg-white border border-slate-200 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1" style={{ animationDelay: "0.3s" }}>
<div className="bento-content h-full flex flex-col relative overflow-hidden"><div className="relative z-10"><div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#3F8BF9]/10 text-[#3F8BF9]"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div><h3 className="mb-3 text-xl font-bold text-slate-900">Agile Execution</h3><p className="text-slate-600 text-sm leading-relaxed relative z-10 pr-6 pb-6">Deploy campaigns in days. We iterate rapidly based on live performance data.</p></div><svg className="absolute right-[-10px] bottom-[-10px] w-24 h-24 opacity-80 pointer-events-none mix-blend-multiply z-0" viewBox="0 0 100 100"><path d="M10,90 L90,10" stroke="#3F8BF9" strokeWidth="6" fill="none" className="dash-line-anim"/><path d="M10,70 L70,10" stroke="#AB57F3" strokeWidth="4" fill="none" className="dash-line-anim" style={{ animationDuration: "1.5s" }}/><path d="M30,90 L90,30" stroke="#3F8BF9" strokeWidth="4" fill="none" className="dash-line-anim" style={{ animationDuration: "2.5s" }}/></svg></div>
</div>
<div className="fade-in-right bento-card md:col-span-1 p-8 hover-target min-h-[250px] bg-white border border-slate-200 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1" style={{ animationDelay: "0.4s" }}>
<div className="bento-content h-full flex flex-col relative"><div className="relative z-10"><div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#E057D8]/10 text-[#E057D8]"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></div><h3 className="mb-3 text-xl font-bold text-slate-900">Dedicated Partners</h3><p className="text-slate-600 text-sm leading-relaxed relative z-10 pr-6 pb-6">Direct access to the senior strategists actually running your campaigns.</p></div>
<div className="absolute right-6 bottom-8 w-20 h-1.5 bg-slate-100 rounded-full overflow-visible pointer-events-none z-0">
    <div className="w-3 h-3 bg-[#E057D8] rounded-full shadow-[0_0_10px_#E057D8] -top-[3px] relative animate-dot-slide"></div>
</div>
</div>
</div>
<div className="fade-in-up bento-card md:col-span-2 p-8 hover-target min-h-[250px] bg-white border border-slate-200 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1" style={{ animationDelay: "0.5s" }}>
<div className="bento-content flex flex-col md:flex-row items-start md:items-center justify-between gap-8 h-full"><div className="flex-1"><div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#7469F8]/10 text-[#7469F8]"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg></div><h3 className="mb-3 text-2xl font-bold text-slate-900">Omni-Channel Scale</h3><p className="text-slate-600 leading-relaxed">Seamlessly integrated campaigns across Search, Social, Programmatic, and Email for a unified, high-converting brand voice.</p></div><div className="relative w-32 h-32 flex-shrink-0 opacity-100 mix-blend-multiply pointer-events-none drop-shadow-md"><div className="absolute inset-0 border-4 border-[#7469F8]/30 rounded-full flex items-center justify-center animate-[spin_6s_linear_infinite]"><div className="absolute w-3 h-3 bg-[#7469F8] rounded-full orbit-dot top-0 left-1/2 -translate-x-1/2 shadow-[0_0_10px_#7469F8]"></div><div className="w-16 h-16 border-4 border-[#3F8BF9]/30 rounded-full flex items-center justify-center animate-[spin_4s_linear_infinite_reverse]"><div className="w-3 h-3 bg-[#3F8BF9] rounded-full shadow-[0_0_15px_#3F8BF9] absolute top-0 left-1/2 -translate-x-1/2"></div></div></div></div></div>
</div>
<div className="fade-in-up bento-card md:col-span-1 p-8 hover-target min-h-[250px] bg-white border border-slate-200 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1" style={{ animationDelay: "0.6s" }}>
<div className="bento-content h-full flex flex-col"><div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#3F8BF9]/10 text-[#3F8BF9]"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><h3 className="mb-3 text-xl font-bold text-slate-900">Transparency</h3><p className="text-slate-600 text-sm leading-relaxed">Full access to ad accounts and clear visibility into management fees.</p></div>
</div>
</div>

<div className="scale-in max-w-4xl mx-auto mb-24 relative hover-target z-10" style={{ animationDelay: "0.3s" }}>
<div className="absolute -inset-0.5 bg-[#3F8BF9] rounded-2xl blur opacity-30"></div>
<div className="relative bg-white rounded-2xl p-8 md:p-10 border border-slate-200 shadow-xl">
<h3 className="mb-8 text-center text-3xl font-bold text-slate-900">Feature Comparison</h3>
<div className="grid grid-cols-3 gap-4 border-b border-slate-200 pb-4 mb-2"><div className="text-xs md:text-sm font-semibold uppercase tracking-widest text-slate-500">Feature</div><div className="text-center text-xs md:text-sm font-semibold uppercase tracking-widest text-[#3F8BF9]">Our System</div><div className="text-center text-xs md:text-sm font-semibold uppercase tracking-widest text-slate-400">Typical Agencies</div></div>
<div className="feature-row flex w-full grid grid-cols-3 gap-4 border-b border-slate-100 py-5 transition-colors hover:bg-slate-50 rounded-lg -mx-2 px-2" style={{ transitionDelay: "100ms" }}><div className="text-slate-700 font-medium text-sm md:text-base flex items-center">Full-Funnel Attribution</div><div className="flex justify-center items-center"><div className="w-8 h-8 rounded-full bg-[#3F8BF9]/10 flex items-center justify-center border border-[#3F8BF9]/30"><svg className="w-4 h-4 text-[#3F8BF9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div></div><div className="flex justify-center items-center"><span className="text-slate-300 font-bold">—</span></div></div>
<div className="feature-row flex w-full grid grid-cols-3 gap-4 border-b border-slate-100 py-5 transition-colors hover:bg-slate-50 rounded-lg -mx-2 px-2" style={{ transitionDelay: "150ms" }}><div className="text-slate-700 font-medium text-sm md:text-base flex items-center">Real-Time ROAS Dashboard</div><div className="flex justify-center items-center"><div className="w-8 h-8 rounded-full bg-[#3F8BF9]/10 flex items-center justify-center border border-[#3F8BF9]/30"><svg className="w-4 h-4 text-[#3F8BF9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div></div><div className="flex justify-center items-center"><span className="text-slate-300 font-bold">—</span></div></div>
<div className="feature-row flex w-full grid grid-cols-3 gap-4 border-b border-slate-100 py-5 transition-colors hover:bg-slate-50 rounded-lg -mx-2 px-2" style={{ transitionDelay: "200ms" }}><div className="text-slate-700 font-medium text-sm md:text-base flex items-center">Monthly Reporting</div><div className="flex justify-center items-center"><div className="w-8 h-8 rounded-full bg-[#3F8BF9]/10 flex items-center justify-center border border-[#3F8BF9]/30"><svg className="w-4 h-4 text-[#3F8BF9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div></div><div className="flex justify-center items-center"><svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div></div>
<div className="feature-row flex w-full grid grid-cols-3 gap-4 border-b border-slate-100 py-5 transition-colors hover:bg-slate-50 rounded-lg -mx-2 px-2" style={{ transitionDelay: "250ms" }}><div className="text-slate-700 font-medium text-sm md:text-base flex items-center">AI-Driven Creative Testing</div><div className="flex justify-center items-center"><div className="w-8 h-8 rounded-full bg-[#3F8BF9]/10 flex items-center justify-center border border-[#3F8BF9]/30"><svg className="w-4 h-4 text-[#3F8BF9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div></div><div className="flex justify-center items-center"><span className="text-slate-300 font-bold">—</span></div></div>
<div className="feature-row flex w-full grid grid-cols-3 gap-4 py-5 transition-colors hover:bg-slate-50 rounded-lg -mx-2 px-2" style={{ transitionDelay: "300ms" }}><div className="text-slate-700 font-medium text-sm md:text-base flex items-center">Zero Markup on Ad Spend</div><div className="flex justify-center items-center"><div className="w-8 h-8 rounded-full bg-[#3F8BF9]/10 flex items-center justify-center border border-[#3F8BF9]/30"><svg className="w-4 h-4 text-[#3F8BF9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div></div><div className="flex justify-center items-center"><span className="text-slate-300 font-bold">—</span></div></div>
</div>
</div>
</div>
</section>

<section id="contact" className="pt-40 pb-32 relative z-10 w-full bg-[#050b21] overflow-hidden flex items-center justify-center min-h-[90vh]">
    
    <div className="absolute inset-0 z-0 flex items-center justify-center opacity-90 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] border border-[#3F8BF9]/20 rounded-full ping-ring" style={{ animationDuration: "4s" }}></div>
        <div className="absolute w-[800px] h-[800px] border border-[#AB57F3]/10 rounded-full ping-ring" style={{ animationDuration: "6s", animationDelay: "-2s" }}></div>
    </div>

    <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#3F8BF9]/10 rounded-full blur-[120px] pointer-events-none transform -translate-y-1/2 -translate-x-1/2"></div>
    <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#AB57F3]/10 rounded-full blur-[120px] pointer-events-none transform -translate-y-1/2 translate-x-1/2"></div>

    <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12">
        
        <div className="hidden lg:flex w-full lg:w-[300px] items-center justify-center fade-in-left flex-shrink-0" style={{ animationDelay: "0.2s" }}>
            <div className="relative w-64 h-64 flex items-end justify-between gap-3 opacity-80 pl-4">
                <div className="w-8 bg-[#3F8BF9]/20 border border-[#3F8BF9]/40 rounded-t-sm h-12 animate-bar-pulse"></div>
                <div className="w-8 bg-[#3F8BF9]/20 border border-[#3F8BF9]/40 rounded-t-sm h-24 animate-bar-pulse" style={{ animationDelay: "0.5s" }}></div>
                <div className="w-8 bg-[#3F8BF9]/20 border border-[#3F8BF9]/40 rounded-t-sm h-40 animate-bar-pulse" style={{ animationDelay: "1s" }}></div>
                <div className="w-8 bg-[#3F8BF9]/20 border border-[#3F8BF9]/40 rounded-t-sm h-32 animate-bar-pulse" style={{ animationDelay: "1.5s" }}></div>
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 256 256">
                    <path d="M 16 208 L 72 160 L 128 96 L 184 128 L 240 32" fill="none" stroke="#3F8BF9" strokeWidth="3" className="animate-trend"/>
                    <circle cx="240" cy="32" r="6" fill="#fff" className="animate-pulse" style={{ animationDelay: "2.5s" }} />
                    <circle cx="240" cy="32" r="4" fill="#3F8BF9" />
                </svg>
            </div>
        </div>

        <div className="fade-in-up w-full max-w-[580px] z-20 mx-auto flex-shrink-0" style={{ animationDelay: "0.1s" }}>
            <div id="contact-form-container" className="relative z-10 p-6 md:p-10 rounded-[1.75rem] w-full backdrop-blur-xl">
                
                <div className="mb-10 text-center flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#3F8BF9]/30 bg-[#3F8BF9]/10 px-4 py-1.5 text-sm font-semibold text-[#9fc6ff] mb-6 shadow-[0_0_24px_rgba(63,139,249,0.18)]">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        Expert Consultation
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">Ready to Scale?</h2>
                    <p className="text-slate-200 text-lg leading-relaxed max-w-md mx-auto">Let's discuss how our team can integrate performance, brand, and technology into your growth ecosystem.</p>
                </div>

                <div className="relative z-20 w-full text-left min-h-[300px]">
                    <ContactForm variant="homepage" />
                </div>
            </div>
        </div>

        <div className="hidden lg:flex w-full lg:w-[300px] items-center justify-center fade-in-right flex-shrink-0" style={{ animationDelay: "0.3s" }}>
            <div className="relative w-64 h-64 opacity-90 flex items-center justify-center pr-4">
                <div className="absolute w-[240px] h-[240px] border-[2px] border-[#AB57F3]/30 rounded-full border-dashed animate-[spin-slow_20s_linear_infinite]"></div>
                <div className="absolute w-[160px] h-[160px] border-[2px] border-[#3F8BF9]/40 rounded-full border-dotted animate-[spin-slow_15s_linear_infinite_reverse]"></div>
                <div className="absolute w-[80px] h-[80px] border-[1.5px] border-[#E057D8]/50 rounded-full border-dashed animate-[spin-slow_10s_linear_infinite]"></div>
                
                <div className="absolute w-12 h-12 bg-[#050b21] border-2 border-[#3F8BF9] rounded-full shadow-[0_0_25px_rgba(63,139,249,0.7)] z-10 flex items-center justify-center animate-pulse">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                <div className="absolute w-[240px] h-[240px] animate-[spin-slow_20s_linear_infinite]">
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#050b21] border-2 border-[#AB57F3] rounded-full shadow-[0_0_15px_#AB57F3]"></div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#AB57F3] rounded-full shadow-[0_0_15px_#AB57F3]"></div>
                </div>
                <div className="absolute w-[160px] h-[160px] animate-[spin-slow_15s_linear_infinite_reverse]">
                    <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-3 h-3 bg-[#3F8BF9] rounded-full shadow-[0_0_15px_#3F8BF9]"></div>
                    <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_15px_#ffffff]"></div>
                </div>
                
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 256 256">
                    <line x1="128" y1="128" x2="128" y2="8" stroke="rgba(171, 87, 243, 0.4)" strokeWidth="1.5" strokeDasharray="4 4" />
                    <line x1="128" y1="128" x2="248" y2="128" stroke="rgba(224, 87, 216, 0.4)" strokeWidth="1.5" strokeDasharray="4 4" />
                </svg>
            </div>
        </div>

    </div>
</section>


</div>
    </PageRevealEffects>
  );
}
