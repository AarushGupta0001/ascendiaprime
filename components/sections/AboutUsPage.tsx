"use client";

import Link from "next/link";
import { useContactModal } from "@/components/forms/ContactModalProvider";
import "@/styles/about-us.css";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ascendia Prime Media Ltd",
  "alternateName": "Ascendia Prime",
  "url": "https://ascendiaprime.com/",
  "logo": "https://ascendiaprime.com/assets/ascendia-prime-logo.png",
  "description": "Ascendia Prime is a performance-led growth partner specialising in performance marketing, partner growth, programmatic media and digital execution.",
  "foundingDate": "2025-01",
  "email": "contact@ascendiaprime.com",
};

export default function AboutUsPage() {
  const { openContactModal } = useContactModal();

  return (
    <div id="about-us-master" className="antialiased text-white bg-[#020617] font-sans selection:bg-[#3F8BF9] selection:text-white w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* ── 1. Hero Section ── */}
      <section id="top" className="relative min-h-[85vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-white/[0.08] w-full">
        <div className="w-full max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="hero-grid grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Copy Column */}
            <div className="lg:col-span-7">
              <p className="about-eyebrow-bar">About Ascendia Prime</p>
              <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.12] tracking-tight text-white mb-6">
                Built for accountable growth across{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3F8BF9] via-[#7469F8] to-[#AB57F3]">
                  media, partners and technology.
                </span>
              </h1>
              <p className="text-[1.05rem] md:text-[1.125rem] text-slate-300 leading-relaxed font-light mb-9 max-w-3xl">
                Ascendia Prime brings performance marketing, partner-led growth, programmatic media and digital execution into a coordinated operating model. By aligning channels, technology and specialist expertise, we help brands and partners improve visibility across campaigns, strengthen accountability and make more informed growth decisions.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <button
                  type="button"
                  onClick={() => openContactModal()}
                  className="inline-flex items-center justify-center px-9 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-[#3F8BF9] via-[#7469F8] to-[#AB57F3] shadow-[0_0_20px_rgba(63,139,249,0.4)] hover:shadow-[0_0_30px_rgba(63,139,249,0.6)] hover:-translate-y-0.5 transition-all border border-[#3F8BF9]/30 cursor-pointer text-base"
                >
                  Start a Conversation <span aria-hidden="true" className="ml-2">→</span>
                </button>
              </div>
            </div>

            {/* Right Connected Visual Column */}
            <div className="lg:col-span-5">
              <div className="ecosystem-visual" aria-label="Ascendia Prime connected growth ecosystem">
                <span className="visual-label">Connected growth system</span>
                <div className="system-flow">
                  <div className="system-node">
                    <span className="node-no">01</span>
                    <div>
                      <strong>Performance &amp; Partner Growth</strong>
                      <small>Acquire and convert valuable demand</small>
                    </div>
                  </div>
                  <div className="system-node">
                    <span className="node-no" style={{ color: "#7469F8", borderColor: "rgba(116,105,248,0.3)", background: "rgba(116,105,248,0.12)" }}>02</span>
                    <div>
                      <strong>Programmatic Brand &amp; Awareness</strong>
                      <small>Build relevant reach across premium media</small>
                    </div>
                  </div>
                  <div className="system-node">
                    <span className="node-no" style={{ color: "#AB57F3", borderColor: "rgba(171,87,243,0.3)", background: "rgba(171,87,243,0.12)" }}>03</span>
                    <div>
                      <strong>Digital, Creative &amp; Web</strong>
                      <small>Strengthen the wider customer experience</small>
                    </div>
                  </div>
                  <div className="system-node outcome">
                    <span className="node-no">✓</span>
                    <div>
                      <strong>Measurable Growth</strong>
                      <small>Visible performance and documented next steps</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. Who We Are Section ── */}
      <section id="who" className="py-20 lg:py-24 border-b border-white/[0.08] w-full">
        <div className="w-full max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="editorial-grid grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <p className="about-eyebrow">Who we are</p>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-white tracking-tight leading-tight">
                A coordinated growth partner across the customer journey.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-slate-300 text-[1.05rem] leading-relaxed font-light mb-5">
                Ascendia Prime Media Ltd is a performance-led growth partner working with advertisers, publishers and agencies across international markets.
              </p>
              <p className="text-slate-300 text-[1.05rem] leading-relaxed font-light mb-6">
                We bring media strategy, partner relationships, technology and digital execution into a unified framework. This reduces fragmented handovers, establishes clearer ownership and enables campaign decisions to be guided by reliable performance data.
              </p>
              <div className="accountability-grid" aria-label="How Ascendia Prime works">
                <div className="accountability-item"><span>✓</span> Clear campaign ownership</div>
                <div className="accountability-item"><span>✓</span> Visible measurement</div>
                <div className="accountability-item"><span>✓</span> Active optimisation</div>
                <div className="accountability-item"><span>✓</span> Documented next steps</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Why We Exist Section ── */}
      <section id="why-we-exist" className="py-20 lg:py-24 border-b border-white/[0.08] w-full">
        <div className="w-full max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-4xl">
            <p className="about-eyebrow about-eyebrow-pink">Why we exist</p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-white tracking-tight leading-tight mb-6">
              Addressing the gaps that limit performance and partnership growth.
            </h2>
            <p className="text-slate-300 text-[1.05rem] leading-relaxed font-light mb-4">
              Ascendia Prime was established in January 2025 to address a persistent challenge in performance marketing: while campaign activity is increasingly measurable, accountability, traffic visibility, communication and decision-making often remain fragmented.
            </p>
            <p className="text-slate-300 text-[1.05rem] leading-relaxed font-light">
              Our operating model brings greater structure to that process. Advertisers gain a clearer understanding of how campaigns are managed, publishers receive responsive operational support, and both sides work against defined expectations and shared performance data.
            </p>
          </div>

          <div className="comparison-grid">
            <div className="comparison-card">
              <p className="comparison-title">What often weakens growth</p>
              <div className="comparison-row"><span className="icon-cross">×</span> <b>Disconnected channels</b></div>
              <div className="comparison-row"><span className="icon-cross">×</span> <b>Limited source visibility</b></div>
              <div className="comparison-row"><span className="icon-cross">×</span> <b>Slow operational hand-offs</b></div>
              <div className="comparison-row"><span className="icon-cross">×</span> <b>Volume without commercial context</b></div>
            </div>
            <div className="comparison-card response">
              <p className="comparison-title">How Ascendia Prime responds</p>
              <div className="comparison-row"><span className="icon-check">✓</span> <b>One coordinated growth framework</b></div>
              <div className="comparison-row"><span className="icon-check">✓</span> <b>Clear reporting and traffic transparency</b></div>
              <div className="comparison-row"><span className="icon-check">✓</span> <b>Dedicated ownership and communication</b></div>
              <div className="comparison-row"><span className="icon-check">✓</span> <b>Focus on quality and meaningful outcomes</b></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. What We Stand For Section ── */}
      <section id="what-we-stand-for" className="py-20 lg:py-24 border-b border-white/[0.08] w-full">
        <div className="w-full max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <p className="about-eyebrow about-eyebrow-purple justify-center">What we stand for</p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-white tracking-tight leading-tight mb-12">
            Principles that shape how we work.
          </h2>

          <div className="principles-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <article className="about-card principle-card">
              <span className="principle-badge">01</span>
              <h3 className="text-xl font-bold text-white mb-2">Transparency First</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Clear reporting, traffic visibility and open communication create the foundation for better decisions.
              </p>
            </article>

            <article className="about-card principle-card">
              <span className="principle-badge" style={{ color: "#7469F8", borderColor: "rgba(116,105,248,0.3)", background: "rgba(116,105,248,0.09)" }}>02</span>
              <h3 className="text-xl font-bold text-white mb-2">Ethical Performance</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We prioritise compliant, quality-led activity that protects advertisers, publishers and long-term partnerships.
              </p>
            </article>

            <article className="about-card principle-card">
              <span className="principle-badge" style={{ color: "#AB57F3", borderColor: "rgba(171,87,243,0.3)", background: "rgba(171,87,243,0.09)" }}>03</span>
              <h3 className="text-xl font-bold text-white mb-2">Dedicated Support</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Every engagement has clear ownership, regular monitoring and proactive communication.
              </p>
            </article>

            <article className="about-card principle-card">
              <span className="principle-badge" style={{ color: "#E057D8", borderColor: "rgba(224,87,216,0.3)", background: "rgba(224,87,216,0.09)" }}>04</span>
              <h3 className="text-xl font-bold text-white mb-2">Meaningful Growth</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We focus on commercially relevant outcomes—not activity that only makes a dashboard look busy.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ── 5. How We Support Stakeholders Section ── */}
      <section id="stakeholders" className="py-20 lg:py-24 border-b border-white/[0.08] w-full">
        <div className="w-full max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16">
          <p className="about-eyebrow about-eyebrow-pink">How we support stakeholders</p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-white tracking-tight leading-tight mb-12">
            Built around the people responsible for performance.
          </h2>

          <div className="stakeholders-grid grid grid-cols-1 lg:grid-cols-2 gap-8">
            <article className="about-card stakeholder-card">
              <h3 className="text-2xl font-bold text-white mb-4">For Advertisers</h3>
              <p className="text-slate-300 text-[1rem] leading-relaxed font-light mb-6">
                We help advertisers plan, monitor and improve performance through clear ownership, transparent measurement and practical recommendations.
              </p>
              <ul className="stakeholder-list">
                <li>Dedicated account ownership</li>
                <li>Dashboard and reporting visibility</li>
                <li>Campaign monitoring and optimisation</li>
                <li>Traffic-source and retargeting transparency</li>
                <li>Practical recommendations for responsible scale</li>
              </ul>
            </article>

            <article className="about-card stakeholder-card">
              <h3 className="text-2xl font-bold text-white mb-4">For Publishers &amp; Partners</h3>
              <p className="text-slate-300 text-[1rem] leading-relaxed font-light mb-6">
                We help publishers, affiliates, agencies and media partners identify relevant opportunities, understand campaign expectations and grow through responsive operational support.
              </p>
              <ul className="stakeholder-list">
                <li>Relevant campaign access and onboarding</li>
                <li>Clear campaign terms and expectations</li>
                <li>Optimisation feedback and regular communication</li>
                <li>Reliable validation and payment processes</li>
                <li>Long-term partnership planning</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ── 6. Our Growth Ecosystem Section ── */}
      <section id="growth-ecosystem" className="py-20 lg:py-24 border-b border-white/[0.08] w-full">
        <div className="w-full max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-4xl">
            <p className="about-eyebrow">Our growth ecosystem</p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-white tracking-tight leading-tight mb-6">
              An integrated growth ecosystem built around three core capabilities.
            </h2>
            <p className="text-slate-300 text-[1.05rem] leading-relaxed font-light">
              Our capabilities span awareness, acquisition, conversion and retention. Each engagement begins with the commercial objective, followed by the selection of channels, technology and specialist support required to achieve it.
            </p>
          </div>

          <div className="ecosystem-rows">
            <article className="pillar-row">
              <span className="pillar-no">01</span>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Performance Marketing &amp; Partner Growth</h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  <Link href="/affiliates-publisher-marketing" className="text-link">Affiliate &amp; Publisher Marketing</Link>,{" "}
                  <Link href="/ppc" className="text-link">Google, Meta &amp; PPC Ads</Link>,{" "}
                  <Link href="/retargeting-campaigns" className="text-link">Retargeting Campaigns</Link> and{" "}
                  <Link href="/conversion-led-growth" className="text-link">Conversion-Led Growth</Link>.
                </p>
              </div>
            </article>

            <article className="pillar-row">
              <span className="pillar-no" style={{ color: "#7469F8", borderColor: "rgba(116,105,248,0.3)" }}>02</span>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Programmatic Branding &amp; Awareness</h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  <Link href="/display-advertising" className="text-link">Display</Link>,{" "}
                  <Link href="/video-native-ads" className="text-link">video</Link>,{" "}
                  <Link href="/video-native-ads" className="text-link">native</Link>,{" "}
                  <Link href="/connected-tv" className="text-link">connected TV</Link> and{" "}
                  <Link href="/dsp" className="text-link">DSP-led media buying</Link> that build relevant reach and sustained visibility.
                </p>
              </div>
            </article>

            <article className="pillar-row">
              <span className="pillar-no" style={{ color: "#AB57F3", borderColor: "rgba(171,87,243,0.3)" }}>03</span>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Digital, Creative &amp; Web Solutions</h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  <Link href="/seo" className="text-link">SEO</Link>,{" "}
                  <Link href="/influencer-marketing" className="text-link">social media &amp; influencer marketing</Link>,{" "}
                  <Link href="/orm" className="text-link">reputation support</Link>, creative production and{" "}
                  <Link href="/webdev" className="text-link">web experiences</Link> that strengthen the wider customer journey.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── 7. Our Approach Section ── */}
      <section id="our-approach" className="py-20 lg:py-24 border-b border-white/[0.08] w-full">
        <div className="w-full max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <p className="about-eyebrow about-eyebrow-purple justify-center">Our approach</p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-white tracking-tight leading-tight">
            A clear route from objective to measurable action.
          </h2>

          <div className="vertical-timeline">
            <div className="vertical-timeline-item">
              <div className="timeline-content left">
                <h3>Understand</h3>
                <p>Clarify the commercial objective, audience, market, KPIs and operating constraints.</p>
              </div>
              <div className="timeline-number">01</div>
            </div>

            <div className="vertical-timeline-item">
              <div className="timeline-number">02</div>
              <div className="timeline-content right">
                <h3>Align</h3>
                <p>Define the strategy, channel mix, responsibilities, tracking and success measures.</p>
              </div>
            </div>

            <div className="vertical-timeline-item">
              <div className="timeline-content left">
                <h3>Activate</h3>
                <p>Launch with clear communication, structured monitoring and visible reporting.</p>
              </div>
              <div className="timeline-number">03</div>
            </div>

            <div className="vertical-timeline-item">
              <div className="timeline-number">04</div>
              <div className="timeline-content right">
                <h3>Optimise</h3>
                <p>Review quality and performance, prioritise improvements and scale with evidence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Final CTA Section ── */}
      <section id="contact" className="py-20 lg:py-24 w-full">
        <div className="w-full max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="about-cta-card">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight tracking-tight mb-6 max-w-4xl mx-auto">
              Bring greater clarity and accountability to your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3F8BF9] via-[#7469F8] to-[#AB57F3]">
                growth strategy.
              </span>
            </h2>
            <p className="text-slate-300 text-base md:text-lg max-w-3xl mx-auto mb-10 font-light leading-relaxed">
              Whether the immediate priority is customer acquisition, brand visibility, partner expansion or conversion performance, we can help define the appropriate channel mix and a practical route forward.
            </p>
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <button
                type="button"
                onClick={() => openContactModal()}
                className="inline-flex items-center justify-center px-9 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-[#3F8BF9] via-[#7469F8] to-[#AB57F3] shadow-[0_0_20px_rgba(63,139,249,0.4)] hover:shadow-[0_0_30px_rgba(63,139,249,0.6)] hover:-translate-y-0.5 transition-all border border-[#3F8BF9]/30 cursor-pointer text-base"
              >
                Start a Conversation <span aria-hidden="true" className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
