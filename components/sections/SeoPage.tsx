"use client";

import "@/styles/seo.css";

import ContactForm from "@/components/forms/ContactForm";

import ParticleCanvas from "@/components/effects/ParticleCanvas";

import PageRevealEffects from "@/components/effects/PageRevealEffects";

import SplineScript from "@/components/SplineScript";

import type { CSSProperties } from "react";

export default function SeoPage() {
  return (
    <PageRevealEffects>
      <SplineScript />
      <div style={{ position: "fixed", top: "0", left: "0", width: "100vw", height: "100vh", backgroundColor: "#020617", zIndex: "-9999", pointerEvents: "none" }}></div>
  
  <div id="ascendia-seo-master" style={{ width: "100%", position: "relative", color: "#cbd5e1", overflowX: "hidden", fontFamily: "'Poppins', sans-serif" }}>
  
    
    
    
  
    
  
    
  
    <svg style={{ width: "0", height: "0", position: "absolute" }} aria-hidden="true" focusable="false">
     <filter id="dirt-noise">
      <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="3" result="noise" />
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="25" xChannelSelector="R" yChannelSelector="G" />
     </filter>
    </svg>
  
    <ParticleCanvas id="space-canvas" className="fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none opacity-80" />
  
    <div className="seo-bg-glow w-[800px] h-[800px] bg-[#3F8BF9] top-[10%] left-[-200px]"></div>
    <div className="seo-bg-glow w-[600px] h-[600px] bg-[#AB57F3] top-[40%] right-[-150px]"></div>
    <div className="seo-bg-glow w-[900px] h-[900px] bg-[#E057D8] bottom-[10%] left-[20%]"></div>
  
    <div className="relative z-10 w-full text-slate-300">
  
      <section className="relative z-10 pt-10 pb-24 px-6 lg:px-12 w-full" style={{ background: "rgba(2, 16, 36, 0.9)" }}>
        <div className="min-h-[85vh] flex flex-col justify-center mb-12 relative md:mt-10 max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="hero-animate inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#3F8BF9]/40 bg-[#3F8BF9]/10 text-[#dbeafe] text-sm font-medium mb-6 backdrop-blur-md" style={{ animationDelay: "0.1s" }}>
                <span className="w-2 h-2 rounded-full bg-[#3F8BF9] animate-pulse shadow-[0_0_10px_#3F8BF9]"></span>
                Ascendia Prime SEO
              </div>
              <h1 className="hero-animate text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.1] text-white tracking-tight mb-6" style={{ animationDelay: "0.2s" }}>
                Search Visibility<br/>
                Built to <span className="text-gradient-growth drop-shadow-[0_0_15px_rgba(63,139,249,0.4)]">Grow</span><br/>
                with Ascendia Prime.
              </h1>
              <p className="hero-animate text-lg text-slate-300 opacity-90 max-w-lg mb-10 leading-relaxed" style={{ animationDelay: "0.3s" }}>
                Ascendia Prime helps brands turn search demand into qualified traffic, stronger visibility, and measurable organic growth.
              </p>
              <div className="hero-animate flex flex-col sm:flex-row gap-5 mb-16" style={{ animationDelay: "0.4s" }}>
                <div className="magnetic-btn hover-target w-full sm:w-auto">
                  
                  <button id="hero-cta-btn" className="w-full bg-gradient-to-r from-[#3F8BF9] to-[#AB57F3] text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(63,139,249,0.3)] hover:shadow-[0_0_40px_rgba(63,139,249,0.6)] transition-shadow duration-300">
                    Get Free SEO Audit
                    <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </button>
                </div>
                
              </div>
  
              <div className="hero-animate flex flex-wrap gap-12 lg:gap-16 pt-8 border-t border-[#3F8BF9]/20" style={{ animationDelay: "0.5s" }}>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">70%+</div>
                  <div className="text-xs text-[#AB57F3] uppercase tracking-widest font-medium">Start with Search</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">300%</div>
                  <div className="text-xs text-[#3F8BF9] uppercase tracking-widest font-medium">Avg. ROI Growth</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">24/7</div>
                  <div className="text-xs text-[#E057D8] uppercase tracking-widest font-medium">Traffic Engine</div>
                </div>
              </div>
            </div>
  
            <div className="hero-animate relative h-[500px] lg:h-[700px] w-full flex items-center justify-center hover-target" style={{ animationDelay: "0.6s" }}>
              <div id="spline-loader-hero" className="absolute inset-0 flex items-center justify-center bg-transparent z-20 transition-opacity duration-500">
                <span className="spline-loader"></span>
              </div>
              <div className="absolute inset-0 w-full h-full" style={{ transform: "scale(1.15)" }}>
                <spline-viewer id="spline-scene-hero" url="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" style={{ opacity: "0", transition: "opacity 1s ease-in-out" }}></spline-viewer>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <section className="py-24 px-6 relative z-10 overflow-hidden" style={{ background: "linear-gradient(to bottom, rgba(2, 16, 36, 0.9) 0%, rgba(20, 18, 54, 0.9) 100%)" }}>
        <div className="max-w-[1400px] mx-auto w-full relative">
  
          <div className="seo-reveal max-w-4xl mx-auto relative z-10 glass-card theme-navy water-card group hover-target flex flex-col items-center justify-center py-16 px-8 md:px-16" data-water-theme="dark">
              
            <p className="text-xl md:text-2xl text-white text-center leading-relaxed mb-6 font-medium relative z-20">
              Our results-driven SEO tactics assist companies in 
              <span className="font-bold text-[#3F8BF9] group-hover:text-[#AB57F3] transition-colors duration-500 drop-shadow-md">increasing their search engine rankings</span>, 
              drawing in targeted customers, and establishing enduring online authority.
            </p>
              
            <div className="w-16 h-[3px] bg-gradient-to-r from-[#AB57F3] to-[#3F8BF9] my-4 rounded-full group-hover:w-32 transition-all duration-500 ease-out relative z-20"></div>
              
            <p className="text-base md:text-lg text-[#dbeafe] text-center max-w-2xl font-light relative z-20">
              Our cost-effective SEO services business model guarantees <strong className="text-white font-medium">quantifiable growth</strong> without needless expenses, regardless of the size of your brand. To get reliable results, we mix technological know-how, content optimization, and data-driven tactics.
            </p>
  
          </div>
        </div>
      </section>
  
      <section className="orbit-section w-full relative z-10 py-16" style={{ background: "linear-gradient(to bottom, rgba(20, 18, 54, 0.9) 0%, rgba(30, 20, 60, 0.9) 100%)" }}>
          
        <div className="orbit-center-text seo-reveal water-card glass-card theme-emerald" data-water-theme="dark">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 drop-shadow-[0_0_15px_rgba(0,0,0,0.8)] leading-tight relative z-20">
            Grow Your Business with <br/><span className="text-gradient-growth">Proven SEO</span>
          </h2>
          <div className="relative z-20">
            <p className="text-base md:text-lg text-white font-medium leading-relaxed mb-4">
              Enhancing search visibility, boosting qualified visitors, and optimizing return on investment are the goals of our company's SEO services.
            </p>
            <p className="text-sm md:text-base text-[#dbeafe] leading-relaxed">
              Ascendia Prime is a reputable SEO service provider that uses values, scalable, and performance-focused SEO tactics to help companies conquer competitive marketplaces.
            </p>
          </div>
        </div>
  
        <div id="orbit-track" className="orbit-track">
          <div className="orbit-arm" style={{ "--angle": "0deg" } as CSSProperties}>
            <div className="orbit-item-wrapper">
              <div className="orbit-item hover-target">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" alt="Data Analytics"  />
                <div className="orbit-overlay"><h4 className="text-[#3F8BF9] font-bold text-lg mb-2">Data Analytics</h4><p className="text-xs text-white">Deep tracking to measure ROI and conversion funnels.</p></div>
              </div>
            </div>
          </div>
          <div className="orbit-arm" style={{ "--angle": "51.42deg" } as CSSProperties}>
            <div className="orbit-item-wrapper">
              <div className="orbit-item hover-target">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" alt="Mobile Traffic"  />
                <div className="orbit-overlay"><h4 className="text-[#3F8BF9] font-bold text-lg mb-2">Mobile Indexing</h4><p className="text-xs text-white">Optimizing core web vitals for flawless mobile performance.</p></div>
              </div>
            </div>
          </div>
          <div className="orbit-arm" style={{ "--angle": "102.85deg" } as CSSProperties}>
            <div className="orbit-item-wrapper">
              <div className="orbit-item hover-target">
                <img src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=600" alt="Keyword Strategy"  />
                <div className="orbit-overlay"><h4 className="text-[#3F8BF9] font-bold text-lg mb-2">Keyword Strategy</h4><p className="text-xs text-white">Targeting high-intent search terms that generate revenue.</p></div>
              </div>
            </div>
          </div>
          <div className="orbit-arm" style={{ "--angle": "154.28deg" } as CSSProperties}>
            <div className="orbit-item-wrapper">
              <div className="orbit-item hover-target">
                <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600" alt="Local SEO"  />
                <div className="orbit-overlay"><h4 className="text-[#3F8BF9] font-bold text-lg mb-2">Local SEO</h4><p className="text-xs text-white">Dominating local map packs and driving regional footfall.</p></div>
              </div>
            </div>
          </div>
          <div className="orbit-arm" style={{ "--angle": "205.71deg" } as CSSProperties}>
            <div className="orbit-item-wrapper">
              <div className="orbit-item hover-target">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600" alt="Link Building"  />
                <div className="orbit-overlay"><h4 className="text-[#3F8BF9] font-bold text-lg mb-2">Authority Building</h4><p className="text-xs text-white">Securing high-authority backlinks to boost domain trust.</p></div>
              </div>
            </div>
          </div>
          <div className="orbit-arm" style={{ "--angle": "257.14deg" } as CSSProperties}>
            <div className="orbit-item-wrapper">
              <div className="orbit-item hover-target">
                <img src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=600" alt="Performance"  />
                <div className="orbit-overlay"><h4 className="text-[#3F8BF9] font-bold text-lg mb-2">Performance Tracking</h4><p className="text-xs text-white">Continuous A/B testing and technical monitoring.</p></div>
              </div>
            </div>
          </div>
          <div className="orbit-arm" style={{ "--angle": "308.57deg" } as CSSProperties}>
            <div className="orbit-item-wrapper">
              <div className="orbit-item hover-target">
                <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600" alt="Content Strategy"  />
                <div className="orbit-overlay"><h4 className="text-[#3F8BF9] font-bold text-lg mb-2">Content Strategy</h4><p className="text-xs text-white">Creating intent-driven content that algorithms reward.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <section className="py-24 px-6 relative z-10" style={{ background: "linear-gradient(to bottom, rgba(30, 20, 60, 0.9) 0%, rgba(76, 56, 135, 0.95) 100%)" }}>
        <div className="max-w-[1400px] mx-auto w-full">
  
          <div className="text-center mb-20 max-w-3xl mx-auto seo-reveal">
            <div className="inline-flex items-center gap-2 rounded-full glass-card theme-navy px-5 py-2.5 text-sm font-medium text-[#f5f3ff] border border-[#3F8BF9]/40 mb-6">
              The Power of Organic
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">Why SEO Matters for Your Business</h2>
            <p className="text-[#E0E7FF] text-lg font-medium leading-relaxed">Our SEO company services ensure your brand is visible exactly when potential customers are searching for your products or services.</p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="seo-reveal glass-card theme-teal water-card p-10 hover-target text-center" data-water-theme="dark" style={{ transitionDelay: "0.1s" }}>
              <div className="relative z-20">
                <div className="w-20 h-20 mx-auto bg-[#3F8BF9]/20 border border-[#3F8BF9]/50 rounded-2xl flex items-center justify-center text-[#3F8BF9] mb-8 shadow-[0_0_15px_rgba(63,139,249,0.4)]">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">70%+</h3>
                <p className="text-[#3F8BF9] font-bold text-sm uppercase tracking-widest mb-6">Start with Search</p>
                <p className="text-slate-200 leading-relaxed text-sm">Of online experiences start with a search engine. We ensure your brand is highly visible exactly when potential customers are searching.</p>
              </div>
            </div>
  
            <div className="seo-reveal glass-card theme-teal water-card p-10 hover-target text-center" data-water-theme="dark" style={{ transitionDelay: "0.2s" }}>
              <div className="relative z-20">
                <div className="w-20 h-20 mx-auto bg-[#3F8BF9]/20 border border-[#3F8BF9]/50 rounded-2xl flex items-center justify-center text-[#3F8BF9] mb-8 shadow-[0_0_15px_rgba(63,139,249,0.4)]">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 mt-2">High Conversion</h3>
                <p className="text-[#3F8BF9] font-bold text-sm uppercase tracking-widest mb-6">Better than Ads</p>
                <p className="text-slate-200 leading-relaxed text-sm">Organic traffic converts significantly better than paid ads because it captures users with high intent who are actively looking for solutions.</p>
              </div>
            </div>
  
            <div className="seo-reveal glass-card theme-teal water-card p-10 hover-target text-center" data-water-theme="dark" style={{ transitionDelay: "0.3s" }}>
              <div className="relative z-20">
                <div className="w-20 h-20 mx-auto bg-[#3F8BF9]/20 border border-[#3F8BF9]/50 rounded-2xl flex items-center justify-center text-[#3F8BF9] mb-8 shadow-[0_0_15px_rgba(63,139,249,0.4)]">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline></svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 mt-2">Compounding</h3>
                <p className="text-[#3F8BF9] font-bold text-sm uppercase tracking-widest mb-6">Long-term Returns</p>
                <p className="text-slate-200 leading-relaxed text-sm">In contrast to paid advertisements that stop when budget runs out, SEO keeps producing results even after campaigns are over.</p>
              </div>
            </div>
          </div>
  
        </div>
      </section>
  
      <section className="py-24 relative z-10" style={{ background: "linear-gradient(to bottom, rgba(76, 56, 135, 0.95) 0%, rgba(116, 105, 248, 0.85) 100%)" }}>
        <div className="px-6 lg:px-12 max-w-[1400px] mx-auto w-full text-slate-300">
          <div className="seo-reveal max-w-5xl mx-auto relative hover-target">
              
            <div className="relative glass-card theme-teal water-card p-8 md:p-12 shadow-2xl" data-water-theme="dark">
                
              <div className="text-center mb-12 relative z-20">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-md">Our Comprehensive SEO Services</h3>
                <p className="text-[#E0E7FF] font-medium text-lg">As a full-service SEO company, we handle everything—from technical audits to content creation.</p>
              </div>
                
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 relative z-20">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-[#020617]/40 p-4 rounded-xl border border-[#AB57F3]/40 hover:bg-[#334155]/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-[#AB57F3]/20 flex items-center justify-center border border-[#AB57F3]/50 flex-shrink-0"><svg className="w-5 h-5 text-[#E057D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
                    <span className="text-white font-medium">Comprehensive Website SEO Audit</span>
                  </div>
                  <div className="flex items-center gap-4 bg-[#020617]/40 p-4 rounded-xl border border-[#AB57F3]/40 hover:bg-[#334155]/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-[#AB57F3]/20 flex items-center justify-center border border-[#AB57F3]/50 flex-shrink-0"><svg className="w-5 h-5 text-[#E057D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
                    <span className="text-white font-medium">Buyer-Intent Keyword Strategy</span>
                  </div>
                  <div className="flex items-center gap-4 bg-[#020617]/40 p-4 rounded-xl border border-[#AB57F3]/40 hover:bg-[#334155]/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-[#AB57F3]/20 flex items-center justify-center border border-[#AB57F3]/50 flex-shrink-0"><svg className="w-5 h-5 text-[#E057D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
                    <span className="text-white font-medium">On-Page SEO Optimization</span>
                  </div>
                  <div className="flex items-center gap-4 bg-[#020617]/40 p-4 rounded-xl border border-[#AB57F3]/40 hover:bg-[#334155]/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-[#AB57F3]/20 flex items-center justify-center border border-[#AB57F3]/50 flex-shrink-0"><svg className="w-5 h-5 text-[#E057D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
                    <span className="text-white font-medium">Technical & Core Web Vitals Fixes</span>
                  </div>
                  <div className="flex items-center gap-4 bg-[#020617]/40 p-4 rounded-xl border border-[#AB57F3]/40 hover:bg-[#334155]/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-[#AB57F3]/20 flex items-center justify-center border border-[#AB57F3]/50 flex-shrink-0"><svg className="w-5 h-5 text-[#E057D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
                    <span className="text-white font-medium">Content SEO Strategy</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-[#020617]/40 p-4 rounded-xl border border-[#AB57F3]/40 hover:bg-[#334155]/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-[#AB57F3]/20 flex items-center justify-center border border-[#AB57F3]/50 flex-shrink-0"><svg className="w-5 h-5 text-[#AB57F3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
                    <span className="text-white font-medium">Targeted Local SEO</span>
                  </div>
                  <div className="flex items-center gap-4 bg-[#020617]/40 p-4 rounded-xl border border-[#AB57F3]/40 hover:bg-[#334155]/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-[#AB57F3]/20 flex items-center justify-center border border-[#AB57F3]/50 flex-shrink-0"><svg className="w-5 h-5 text-[#AB57F3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
                    <span className="text-white font-medium">E-commerce SEO</span>
                  </div>
                  <div className="flex items-center gap-4 bg-[#020617]/40 p-4 rounded-xl border border-[#AB57F3]/40 hover:bg-[#334155]/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-[#AB57F3]/20 flex items-center justify-center border border-[#AB57F3]/50 flex-shrink-0"><svg className="w-5 h-5 text-[#AB57F3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
                    <span className="text-white font-medium">White-Hat Link Building</span>
                  </div>
                  <div className="flex items-center gap-4 bg-[#020617]/40 p-4 rounded-xl border border-[#AB57F3]/40 hover:bg-[#334155]/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-[#AB57F3]/20 flex items-center justify-center border border-[#AB57F3]/50 flex-shrink-0"><svg className="w-5 h-5 text-[#AB57F3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
                    <span className="text-white font-medium">Monthly SEO Reporting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <section className="py-24 px-6 relative z-10" style={{ background: "linear-gradient(to bottom, rgba(116, 105, 248, 0.85) 0%, rgba(76, 56, 135, 0.95) 100%)" }}>
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="text-center mb-16 max-w-3xl mx-auto seo-reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Here's What Sets Us Apart</h2>
            <p className="text-[#E0E7FF] font-medium text-lg">Ascendia Prime uses values, scalable, and performance-focused tactics to conquer competitive marketplaces.</p>
          </div>
  
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="seo-reveal glass-card theme-teal glass-hover water-card p-8 hover-target" data-water-theme="dark" style={{ transitionDelay: "0.1s" }}>
              <div className="relative z-20">
                <div className="w-14 h-14 bg-[#AB57F3]/20 border border-[#AB57F3]/50 rounded-xl flex items-center justify-center text-[#AB57F3] mb-6 shadow-[0_0_15px_rgba(171,87,243,0.4)]">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">In-Depth Keyword Research</h3>
                <p className="text-[#E0E7FF] leading-relaxed mb-6 text-sm">We identify high-intent, low-competition keywords that drive conversions—not just traffic. Our research focuses on:</p>
                <ul className="space-y-3 text-sm text-white">
                  <li className="flex items-start gap-3"><div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#AB57F3] shadow-[0_0_8px_#AB57F3]"></div> Buyer-intent keywords</li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#AB57F3] shadow-[0_0_8px_#AB57F3]"></div> Local and national search opportunities</li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#AB57F3] shadow-[0_0_8px_#AB57F3]"></div> Industry-specific search behavior</li>
                </ul>
              </div>
            </div>
  
            <div className="seo-reveal glass-card theme-teal glass-hover water-card p-8 hover-target" data-water-theme="dark" style={{ transitionDelay: "0.2s" }}>
              <div className="relative z-20">
                <div className="w-14 h-14 bg-[#AB57F3]/20 border border-[#AB57F3]/50 rounded-xl flex items-center justify-center text-[#AB57F3] mb-6 shadow-[0_0_15px_rgba(171,87,243,0.4)]">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Technical SEO Expertise</h3>
                <p className="text-[#E0E7FF] leading-relaxed mb-6 text-sm">As a full service SEO company, we ensure your website meets every technical requirement set by search engines:</p>
                <ul className="space-y-3 text-sm text-white">
                  <li className="flex items-start gap-3"><div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#AB57F3] shadow-[0_0_8px_#AB57F3]"></div> Website speed & Mobile SEO</li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#AB57F3] shadow-[0_0_8px_#AB57F3]"></div> Core Web Vitals improvement</li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#AB57F3] shadow-[0_0_8px_#AB57F3]"></div> Crawlability, indexation & Schema data</li>
                </ul>
              </div>
            </div>
  
            <div className="seo-reveal glass-card theme-teal glass-hover water-card p-8 hover-target" data-water-theme="dark" style={{ transitionDelay: "0.3s" }}>
              <div className="relative z-20">
                <div className="w-14 h-14 bg-[#AB57F3]/20 border border-[#AB57F3]/50 rounded-xl flex items-center justify-center text-[#AB57F3] mb-6 shadow-[0_0_15px_rgba(171,87,243,0.4)]">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Content Optimization</h3>
                <p className="text-[#E0E7FF] leading-relaxed mb-6 text-sm">Content is the backbone of successful SEO. We create search-intent-focused content that ranks and converts across blogs, service pages, and e-commerce products.</p>
                <ul className="space-y-3 text-sm text-white">
                  <li className="flex items-start gap-3"><div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#AB57F3] shadow-[0_0_8px_#AB57F3]"></div> Core Service pages & Landing pages</li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#AB57F3] shadow-[0_0_8px_#AB57F3]"></div> Authority-building Blogs</li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#AB57F3] shadow-[0_0_8px_#AB57F3]"></div> Product descriptions & Local SEO</li>
                </ul>
              </div>
            </div>
          </div>
  
        </div>
      </section>
  
      <section id="dominate-section" className="py-24 relative z-10" style={{ background: "linear-gradient(to bottom, rgba(76, 56, 135, 0.95) 0%, rgba(45, 27, 84, 0.95) 100%)" }}>
        <div className="px-6 lg:px-12 max-w-[1400px] mx-auto w-full text-slate-300">
           
          <div className="text-center mb-24 max-w-4xl mx-auto seo-reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How Ascendia Prime Helps You <span className="text-gradient-growth">Dominate Search</span></h2>
            <p className="text-[#E0E7FF] font-medium text-lg">At Ascendia Prime, innovation meets performance. Our SEO methods align with the latest Google algorithm updates and AI-driven search platforms like SGE, Gemini, and ChatGPT.</p>
          </div>
  
          <div className="vertical-timeline seo-reveal">
            <div className="vertical-timeline-item">
              <div className="timeline-content left">
                <h3>Increases Visibility & Traffic</h3>
                <p>We implement modern SEO practices that raise your website's keyword ranks so that it shows up on Google's first page for pertinent searches, resulting in steady increases in organic traffic.</p>
              </div>
              <div className="timeline-number">01</div>
            </div>
  
            <div className="vertical-timeline-item">
              <div className="timeline-number">02</div>
              <div className="timeline-content right">
                <h3>Enhances Brand Credibility</h3>
                <p>Websites ranking at the top are perceived as more trustworthy. Consistent rankings, optimized content, and authoritative backlinks position your brand as an industry leader.</p>
              </div>
            </div>
  
            <div className="vertical-timeline-item">
              <div className="timeline-content left">
                <h3>Offers Long-Term Results</h3>
                <p>In contrast to paid advertisements, SEO keeps producing results even after campaigns are over. Our strategy focuses on scalable growth and long-term, sustainable success, not short-term ranking spikes.</p>
              </div>
              <div className="timeline-number">03</div>
            </div>
  
            <div className="vertical-timeline-item">
              <div className="timeline-number">04</div>
              <div className="timeline-content right">
                <h3>Attracts Targeted Leads</h3>
                <p>In order to ensure that visitors are actually interested in your services, we optimise for keywords that match user intent. Targeted SEO ensures traffic that converts into inquiries, calls, and sales.</p>
              </div>
            </div>
  
            <div className="vertical-timeline-item">
              <div className="timeline-content left">
                <h3>Cost-Effective & Scalable</h3>
                <p>SEO grows with your business—making it ideal for startups, SMEs, and enterprises alike. It delivers one of the highest ROIs among digital marketing channels, making us a preferred affordable SEO partner.</p>
              </div>
              <div className="timeline-number">05</div>
            </div>
  
            <div className="vertical-timeline-item">
              <div className="timeline-number">06</div>
              <div className="timeline-content right">
                <h3>Optimizes User Experience</h3>
                <p>Search engines reward websites that deliver value. We optimize UX for both users and algorithms. Improved site structure, quicker load times, and engaging content increases rankings and conversions.</p>
              </div>
            </div>
          </div>
  
        </div>
      </section>
  
      <section className="py-24 relative z-10" style={{ background: "linear-gradient(to bottom, rgba(45, 27, 84, 0.95) 0%, rgba(20, 18, 54, 0.9) 100%)" }}>
        <div className="px-6 lg:px-12 max-w-[1400px] mx-auto w-full">
  
          <div className="mb-16 text-center max-w-3xl mx-auto seo-reveal">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full glass-card theme-navy px-5 py-2.5 text-sm font-medium text-white border border-[#3F8BF9]">
              FAQ
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              FAQ About Our <span className="text-gradient-growth">SEO Services</span>
            </h2>
          </div>
           
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="seo-reveal glass-card theme-navy glass-hover p-8 hover-target">
              <h3 className="text-lg font-bold text-white mb-3">What is SEO, and why is it important for my business in Delhi?</h3>
              <p className="text-[#dbeafe] text-sm leading-relaxed">SEO helps your business appear in search results when potential customers look for your services. For Delhi-based businesses, SEO improves local visibility, footfall, and online leads.</p>
            </div>
            <div className="seo-reveal glass-card theme-navy glass-hover p-8 hover-target">
              <h3 className="text-lg font-bold text-white mb-3">How long does it take to see results from SEO services?</h3>
              <p className="text-[#dbeafe] text-sm leading-relaxed">SEO is a long-term strategy. Most businesses start seeing noticeable improvements within 3–6 months, depending on competition and website condition.</p>
            </div>
            <div className="seo-reveal glass-card theme-navy glass-hover p-8 hover-target">
              <h3 className="text-lg font-bold text-white mb-3">What makes Ascendia Prime the best SEO company?</h3>
              <p className="text-[#dbeafe] text-sm leading-relaxed">Our data-driven approach, transparent processes, and consistent results make Ascendia Prime a trusted SEO services company for businesses across industries.</p>
            </div>
            <div className="seo-reveal glass-card theme-navy glass-hover p-8 hover-target">
              <h3 className="text-lg font-bold text-white mb-3">Do you offer local SEO services?</h3>
              <p className="text-[#dbeafe] text-sm leading-relaxed">Yes. We provide location-based SEO services including Google Business Profile optimization, local citations, and geo-targeted keywords.</p>
            </div>
            <div className="seo-reveal glass-card theme-navy glass-hover p-8 hover-target md:col-span-2 text-center" style={{ borderColor: "#3F8BF9", boxShadow: "0 0 20px rgba(63,139,249,0.2)" }}>
              <h3 className="text-lg font-bold text-[#3F8BF9] mb-3 drop-shadow-md">How much do your SEO services cost?</h3>
              <p className="text-[#E0E7FF] text-sm leading-relaxed max-w-2xl mx-auto font-medium">Our pricing is flexible and customized based on business size, goals, and competition. We are known as an affordable SEO services company without compromising quality.</p>
            </div>
          </div>
  
        </div>
      </section>
  
      
      <section id="lead-form-section" className="py-24 relative z-10 overflow-hidden" style={{ background: "linear-gradient(to bottom, rgba(20, 18, 54, 0.9) 0%, rgba(2, 16, 36, 1) 100%)" }}>
        <div className="px-6 lg:px-12 max-w-[1400px] mx-auto w-full text-slate-300">
           
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="seo-reveal">
              <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6">Let's build your <span className="text-gradient-growth drop-shadow-[0_0_15px_rgba(63,139,249,0.4)]">Empire.</span></h2>
              <p className="text-[#dbeafe] text-lg mb-8">Ready to dominate search and scale your revenue? Reach out and our senior strategists will get back to you with a free custom SEO audit.</p>
               
              <div className="flex items-center gap-4 mb-4 hover-target w-max">
                <div className="w-12 h-12 glass-card theme-navy rounded-full flex items-center justify-center border border-[#3F8BF9]"><svg className="w-5 h-5 text-[#3F8BF9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div>
                <span className="text-white font-medium">hello@ascendiaprime.com</span>
              </div>
            </div>
  
            <div className="seo-reveal relative w-full h-full min-h-[500px]">
              <div id="contact-form-container" className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-center bg-[rgba(2,16,36,0.85)] backdrop-blur-xl border border-[rgba(63,139,249,0.3)] border-t-[rgba(63,139,249,0.5)] border-l-[rgba(63,139,249,0.5)] rounded-[1.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                <ContactForm />
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
