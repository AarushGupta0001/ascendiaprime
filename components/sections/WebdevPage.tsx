"use client";

import Link from "next/link";

import "@/styles/webdev.css";

import ContactForm from "@/components/forms/ContactForm";

import PageRevealEffects from "@/components/effects/PageRevealEffects";

export default function WebdevPage() {
  return (
    <PageRevealEffects>
      <section className="zone-ink">
  <div className="hero">
    <div className="wrap">
      <div className="hero-grid">
        <div>
          <div className="hero-kicker rv">
            <span className="dot"></span>
            <span className="t-eyebrow">Professional Development</span>
          </div>
          <h1 className="hero-headline t-mega in-view" id="hero-headline">
            <span className="split-line"><span className="split-word">Web Experiences</span></span>
            <span className="split-line"><span className="split-word">Built to&nbsp;</span><span className="split-word"><em>Perform</em></span></span>
            <span className="split-line"><span className="split-word">with Ascendia Prime</span></span>
          </h1>
          <p className="t-body hero-body rv" data-d="2">
            Ascendia Prime builds fast, secure, and conversion-ready web platforms that turn your digital presence into a stronger growth channel.
          </p>
          <div className="hero-ctas rv" data-d="3">
            <Link href="#contact" className="btn btn-fill">
              Start a Project
              <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
            
          </div>
          <div className="hero-stats rv" data-d="4">
            <div>
              <div className="hero-stat-num"><span className="counter" data-target="500">0</span><em>+</em></div>
              <div className="hero-stat-label">Projects Shipped</div>
            </div>
            <div>
              <div className="hero-stat-num"><span className="counter" data-target="8">0</span><em>+</em></div>
              <div className="hero-stat-label">Years Operating</div>
            </div>
            <div>
              <div className="hero-stat-num"><span className="counter" data-target="98">0</span><em>%</em></div>
              <div className="hero-stat-label">Client Retention</div>
            </div>
            <div>
              <div className="hero-stat-num"><span className="counter" data-target="40">0</span><em>+</em></div>
              <div className="hero-stat-label">Engineers</div>
            </div>
          </div>
        </div>
        <div className="hero-vis rv" data-d="2">
          <div className="bp-scene">
            <div className="bp-wrap">
              <div className="bp-stream st-1"></div>
              <div className="bp-stream st-2"></div>
              <div className="bp-layer bp-db">
                <div className="bp-tag">Data Layer</div>
                <div className="db-tbl">
                  <div className="db-th"><span>id</span><span>entity</span><span>status</span></div>
                  <div className="db-td"><span>001</span><span>products</span><span>active</span></div>
                  <div className="db-td"><span>002</span><span>orders</span><span>synced</span></div>
                  <div className="db-td"><span>003</span><span>users</span><span>active</span></div>
                </div>
                <div className="db-dot-row"><div className="db-dot"></div><div className="db-dot"></div><div className="db-dot"></div><span className="db-label-sm">3 connections active</span></div>
              </div>
              <div className="bp-layer bp-api">
                <div className="bp-tag">Backend API</div>
                <div className="api-list">
                  <div className="api-row"><span className="api-method m-get">GET</span><span className="api-path">/api/v2/products</span><span className="api-status s-ok"></span></div>
                  <div className="api-row"><span className="api-method m-post">POST</span><span className="api-path">/api/v2/orders</span><span className="api-status s-ok"></span></div>
                  <div className="api-row"><span className="api-method m-put">PUT</span><span className="api-path">/api/v2/users/:id</span><span className="api-status s-off"></span></div>
                  <div className="api-row"><span className="api-method m-del">DEL</span><span className="api-path">/api/v2/cache</span><span className="api-status s-ok"></span></div>
                </div>
              </div>
              <div className="bp-layer bp-ui">
                <div className="bp-tag">Frontend UI</div>
                <div className="ui-chrome"><span className="ui-dot ui-dot-r"></span><span className="ui-dot ui-dot-y"></span><span className="ui-dot ui-dot-g"></span></div>
                <div className="ui-layout">
                  <div className="ui-col-nav"></div>
                  <div className="ui-col-main">
                    <div className="ui-bar" style={{ width: "80%" }}></div>
                    <div className="ui-bar" style={{ width: "55%" }}></div>
                    <div className="ui-card-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="approach-marquee">
    <div className="am-track">
      <span className="am-item">Performance <em>first</em></span><span className="am-divider"></span>
      <span className="am-item">Code that <em>endures</em></span><span className="am-divider"></span>
      <span className="am-item">Precision <em>engineering</em></span><span className="am-divider"></span>
      <span className="am-item">Scalable by <em>design</em></span><span className="am-divider"></span>
      <span className="am-item">Zero <em>compromise</em></span><span className="am-divider"></span>
      <span className="am-item">Mobile <em>native</em></span><span className="am-divider"></span>
      <span className="am-item">Client <em>outcomes</em></span><span className="am-divider"></span>
      <span className="am-item">Performance <em>first</em></span><span className="am-divider"></span>
      <span className="am-item">Code that <em>endures</em></span><span className="am-divider"></span>
      <span className="am-item">Precision <em>engineering</em></span><span className="am-divider"></span>
      <span className="am-item">Scalable by <em>design</em></span><span className="am-divider"></span>
      <span className="am-item">Zero <em>compromise</em></span><span className="am-divider"></span>
      <span className="am-item">Mobile <em>native</em></span><span className="am-divider"></span>
      <span className="am-item">Client <em>outcomes</em></span><span className="am-divider"></span>
    </div>
  </div>
</section>

<section className="zone-plum">
  <div className="services">
    <div className="wrap">
      <div className="services-head rv">
        <div>
          <span className="ghost-num">01</span>
          <span className="t-eyebrow" style={{ display: "block", marginBottom: "1rem" }}>Our Disciplines</span>
          <h2 className="t-section">Web development<br /><em>services.</em></h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
          <p className="t-body" style={{ maxWidth: "380px" }}>
            Eight specialised disciplines, each practised at the depth required to deliver outcomes — not just deliverables.
          </p>
        </div>
      </div>

      <div className="sv-list rv">
        <div className="sv-item">
          <div className="sv-idx">01</div>
          <div>
            <div className="sv-name">CMS Development</div>
            <div className="sv-desc">Architected, not assembled. CMS platforms engineered for speed, SEO, and complete mobile responsiveness.</div>
          </div>
          <div className="sv-tags"><span className="sv-tag">Laravel</span><span className="sv-tag">Gutenberg</span><span className="sv-tag">REST API</span></div>
          <div className="sv-arrow"><svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg></div>
        </div>
        <div className="sv-item">
          <div className="sv-idx">02</div>
          <div>
            <div className="sv-name">Shopify Commerce</div>
            <div className="sv-desc">Conversion-optimised storefronts with custom theme architecture and enterprise-grade payment infrastructure.</div>
          </div>
          <div className="sv-tags"><span className="sv-tag">Liquid</span><span className="sv-tag">Storefront API</span><span className="sv-tag">Sections</span></div>
          <div className="sv-arrow"><svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg></div>
        </div>
        <div className="sv-item">
          <div className="sv-idx">03</div>
          <div>
            <div className="sv-name">Magento Commerce</div>
            <div className="sv-desc">Enterprise-grade commerce architecture built for operations at volume — advanced catalogues, custom modules, and B2B workflows.</div>
          </div>
          <div className="sv-tags"><span className="sv-tag">Adobe Commerce</span><span className="sv-tag">GraphQL</span><span className="sv-tag">PWA</span></div>
          <div className="sv-arrow"><svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg></div>
        </div>
        <div className="sv-item">
          <div className="sv-idx">04</div>
          <div>
            <div className="sv-name">Laravel & Backend</div>
            <div className="sv-desc">Bespoke web applications engineered around your unique business logic, with layered security and clean MVC patterns.</div>
          </div>
          <div className="sv-tags"><span className="sv-tag">Laravel</span><span className="sv-tag">Eloquent</span><span className="sv-tag">Queues</span></div>
          <div className="sv-arrow"><svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg></div>
        </div>
        <div className="sv-item">
          <div className="sv-idx">05</div>
          <div>
            <div className="sv-name">Angular & React</div>
            <div className="sv-desc">Single-Page Applications with sub-second load times and rich interactive experiences that scale cleanly under load.</div>
          </div>
          <div className="sv-tags"><span className="sv-tag">Angular 17</span><span className="sv-tag">React 19</span><span className="sv-tag">TypeScript</span></div>
          <div className="sv-arrow"><svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg></div>
        </div>
        <div className="sv-item">
          <div className="sv-idx">06</div>
          <div>
            <div className="sv-name">Custom CMS</div>
            <div className="sv-desc">Bespoke content management platforms designed for genuine editorial autonomy across multi-channel publishing.</div>
          </div>
          <div className="sv-tags"><span className="sv-tag">Headless</span><span className="sv-tag">REST</span><span className="sv-tag">GraphQL</span></div>
          <div className="sv-arrow"><svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg></div>
        </div>
        <div className="sv-item">
          <div className="sv-idx">07</div>
          <div>
            <div className="sv-name">CodeIgniter</div>
            <div className="sv-desc">Lightweight, exceptionally fast applications maintaining stringent performance and security under sustained load.</div>
          </div>
          <div className="sv-tags"><span className="sv-tag">CodeIgniter 4</span><span className="sv-tag">Laravel 11</span><span className="sv-tag">MySQL</span></div>
          <div className="sv-arrow"><svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg></div>
        </div>
        <div className="sv-item">
          <div className="sv-idx">08</div>
          <div>
            <div className="sv-name">WooCommerce & Integrations</div>
            <div className="sv-desc">Full-stack WooCommerce ecosystems with ERP, CRM, and logistics integrations — at genuine commercial scale.</div>
          </div>
          <div className="sv-tags"><span className="sv-tag">WooCommerce</span><span className="sv-tag">ERP</span><span className="sv-tag">Webhooks</span></div>
          <div className="sv-arrow"><svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="zone-cream">
  <div className="process">
    <div className="wrap">
      <div className="process-head rv">
        <div>
          <span className="ghost-num">02</span>
          <span className="t-eyebrow" style={{ display: "block", marginBottom: "1rem" }}>How We Work</span>
          <h2 className="t-section">A process built on<br /><em>clarity.</em></h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
          <p className="t-body" style={{ maxWidth: "380px" }}>
            A structured, transparent methodology. Every phase has clear ownership, defined outputs, and a single accountable lead.
          </p>
        </div>
      </div>

      <div className="vertical-timeline rv">
        <div className="vertical-timeline-item">
          <div className="timeline-content left">
            <span className="timeline-tag">SYS.INIT</span>
            <h3>Requirement Analysis</h3>
            <p>Thorough discovery of business objectives, target audiences, and technical constraints — establishing an authoritative blueprint before a single line of code is committed.</p>
          </div>
          <div className="timeline-number">01</div>
        </div>

        <div className="vertical-timeline-item">
          <div className="timeline-number">02</div>
          <div className="timeline-content right">
            <span className="timeline-tag">SYS.PLAN</span>
            <h3>Planning & Architecture</h3>
            <p>Technology selection, system design, project milestones, and UX information architecture defined with precision — every stakeholder has absolute clarity before the build begins.</p>
          </div>
        </div>

        <div className="vertical-timeline-item">
          <div className="timeline-content left">
            <span className="timeline-tag">SYS.DESIGN</span>
            <h3>Design & Prototyping</h3>
            <p>High-fidelity prototypes incorporating contemporary UI/UX principles and your brand language. Iterative feedback ensures the final design exceeds expectation.</p>
          </div>
          <div className="timeline-number">03</div>
        </div>

        <div className="vertical-timeline-item">
          <div className="timeline-number">04</div>
          <div className="timeline-content right">
            <span className="timeline-tag">SYS.BUILD</span>
            <h3>Development & Testing</h3>
            <p>Senior engineers translate approved designs into production code — applying rigorous QA across functionality, performance benchmarks, and security protocols.</p>
          </div>
        </div>

        <div className="vertical-timeline-item">
          <div className="timeline-content left">
            <span className="timeline-tag">SYS.DEPLOY</span>
            <h3>Deployment & Optimisation</h3>
            <p>Post-launch we provide structured support, proactive updates, and continual performance refinement — keeping your platform secure and competitive.</p>
          </div>
          <div className="timeline-number">05</div>
        </div>
      </div>
    </div>
  </div>
</section>

<div className="tech-zone">
  <div className="tech-head rv">
    <span className="t-eyebrow">Technology Stack</span>
  </div>
  <div className="tm-row">
    <span className="tm-pill">HTML5</span><span className="tm-pill">CSS3</span><span className="tm-pill">JavaScript</span>
    <span className="tm-pill">TypeScript</span><span className="tm-pill">Laravel</span><span className="tm-pill">CodeIgniter</span>
    <span className="tm-pill">CodeIgniter</span><span className="tm-pill">Drupal</span><span className="tm-pill">Magento</span>
    <span className="tm-pill">Shopify</span><span className="tm-pill">WooCommerce</span>
    <span className="tm-pill">HTML5</span><span className="tm-pill">CSS3</span><span className="tm-pill">JavaScript</span>
    <span className="tm-pill">TypeScript</span><span className="tm-pill">Laravel</span><span className="tm-pill">CodeIgniter</span>
    <span className="tm-pill">CodeIgniter</span><span className="tm-pill">Drupal</span><span className="tm-pill">Magento</span>
    <span className="tm-pill">Shopify</span><span className="tm-pill">WooCommerce</span>
  </div>
  <div className="tm-row reverse">
    <span className="tm-pill">Angular</span><span className="tm-pill">React</span><span className="tm-pill">Vue.js</span>
    <span className="tm-pill">Node.js</span><span className="tm-pill">Next.js</span><span className="tm-pill">MySQL</span>
    <span className="tm-pill">PostgreSQL</span><span className="tm-pill">MongoDB</span><span className="tm-pill">Redis</span>
    <span className="tm-pill">Firebase</span><span className="tm-pill">AWS</span><span className="tm-pill">Docker</span>
    <span className="tm-pill">Angular</span><span className="tm-pill">React</span><span className="tm-pill">Vue.js</span>
    <span className="tm-pill">Node.js</span><span className="tm-pill">Next.js</span><span className="tm-pill">MySQL</span>
    <span className="tm-pill">PostgreSQL</span><span className="tm-pill">MongoDB</span><span className="tm-pill">Redis</span>
    <span className="tm-pill">Firebase</span><span className="tm-pill">AWS</span><span className="tm-pill">Docker</span>
  </div>
</div>

<section className="zone-ember">
  <div className="why">
    <div className="wrap">
      <div className="why-head rv">
        <div>
          <span className="ghost-num">03</span>
          <span className="t-eyebrow" style={{ display: "block", marginBottom: "1rem" }}>Differentiators</span>
          <h2 className="t-section on-ember">Why partner with<br /><em>our team?</em></h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
          <p className="t-body" style={{ maxWidth: "400px" }}>
            The distance between adequate and exceptional development is wider than most clients realise — until they have experienced both.
          </p>
        </div>
      </div>

      <div className="why-grid rv">
        <div className="why-card">
          <div className="why-num">— 01</div>
          <div className="why-icon">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.75"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
          </div>
          <h3 className="why-title">Expert Engineers</h3>
          <p className="why-desc">A curated roster of senior developers with proven depth across modern frameworks. Specialists, not generalists learning on your budget.</p>
        </div>
        <div className="why-card">
          <div className="why-num">— 02</div>
          <div className="why-icon">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.75"><path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"/></svg>
          </div>
          <h3 className="why-title">Tailored Architecture</h3>
          <p className="why-desc">Custom-engineered solutions built around your precise business logic. Designed from first principles — never repurposed templates.</p>
        </div>
        <div className="why-card">
          <div className="why-num">— 03</div>
          <div className="why-icon">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.75"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
          </div>
          <h3 className="why-title">Mobile Native</h3>
          <p className="why-desc">Genuinely responsive experiences designed for mobile conversion — not afterthought adaptations of desktop interfaces.</p>
        </div>
        <div className="why-card">
          <div className="why-num">— 04</div>
          <div className="why-icon">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.75"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
          </div>
          <h3 className="why-title">SEO Optimised</h3>
          <p className="why-desc">Technically sound, Core Web Vitals-compliant platforms built for measurable organic search performance that compounds.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="zone-bone">
  <div className="faq">
    <div className="wrap">
      <div className="faq-grid">
        <div className="faq-side rv">
          <span className="ghost-num">04</span>
          <span className="t-eyebrow" style={{ display: "block", marginBottom: "1rem" }}>Common Enquiries</span>
          <h2 className="t-section">Development<br /><em>questions.</em></h2>
          <p className="t-body">The questions most organisations ask before committing to a development engagement.</p>
        </div>
        <div className="faq-list rv" data-d="1">
          <div className="fq">
            <button className="fq-btn">
              <span className="fq-q">What is included in web development services?</span>
              <span className="fq-icon-wrap"><svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/></svg></span>
            </button>
            <div className="fq-body"><p className="fq-a">Our services encompass website design, web application development, e-commerce solutions, CMS development, UI/UX design, rigorous QA testing, and structured ongoing maintenance — delivered as a cohesive, accountable programme.</p></div>
          </div>
          <div className="fq">
            <button className="fq-btn">
              <span className="fq-q">Do you offer custom web development?</span>
              <span className="fq-icon-wrap"><svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/></svg></span>
            </button>
            <div className="fq-body"><p className="fq-a">Yes. We specialise exclusively in bespoke development — every engagement is architected from the ground up to your unique requirements. We have no interest in repurposing generic templates.</p></div>
          </div>
          <div className="fq">
            <button className="fq-btn">
              <span className="fq-q">What's the difference between web development and web application development?</span>
              <span className="fq-icon-wrap"><svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/></svg></span>
            </button>
            <div className="fq-body"><p className="fq-a">Web development typically produces informational or marketing-focused websites. Web application development creates interactive, software-grade platforms with sophisticated backend logic, user state management, and database-driven functionality.</p></div>
          </div>
          <div className="fq">
            <button className="fq-btn">
              <span className="fq-q">Are your solutions mobile-responsive?</span>
              <span className="fq-icon-wrap"><svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/></svg></span>
            </button>
            <div className="fq-body"><p className="fq-a">Every deliverable is fully responsive and performance-tested across all device classes. Mobile-first design is a fundamental architectural constraint of our process, not an optional feature.</p></div>
          </div>
          <div className="fq">
            <button className="fq-btn">
              <span className="fq-q">How long does a typical project take?</span>
              <span className="fq-icon-wrap"><svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/></svg></span>
            </button>
            <div className="fq-body"><p className="fq-a">Timeline varies with complexity and scope. A precise project schedule with defined milestones is produced during the planning phase — we do not make commitments we cannot meet.</p></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="zone-ink" id="contact">
  <div className="closing">
    <div className="wrap">
      <div className="closing-inner rv">
        <div className="closing-eyebrow">
          <span className="dash"></span>
          <span className="t-eyebrow">Begin the Conversation</span>
          <span className="dash"></span>
        </div>
        <h2 className="t-mega" style={{ fontSize: "clamp(2.6rem,6vw,5.6rem)" }}>Build something<br /><em>that lasts.</em></h2>
        <p className="t-body">Let us understand your objectives and demonstrate how a properly engineered web platform becomes a durable, compounding strategic advantage.</p>
         
        <div className="contact-form-wrap rv" data-d="2">
          <ContactForm />
        </div>
      </div>
    </div>
  </div>
</section>
    </PageRevealEffects>
  );
}
