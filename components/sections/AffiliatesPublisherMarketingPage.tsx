"use client";

import { useState } from "react";
import { useContactModal } from "@/components/forms/ContactModalProvider";
import "@/styles/affiliates-publisher-marketing.css";

const sources = [
  { key: "content", label: "Content partners", value: "Discovery intent", icon: "document" },
  { key: "comparison", label: "Comparison", value: "High consideration", icon: "compare" },
  { key: "coupon", label: "Coupon partners", value: "Purchase intent", icon: "tag" },
  { key: "creator", label: "Creators", value: "Audience trust", icon: "creator" },
  { key: "email", label: "Email partners", value: "Qualified reach", icon: "email" },
] as const;

const outcomes = [
  { key: "lead", label: "Acquisition", value: "Qualified lead", icon: "target" },
  { key: "sale", label: "Revenue", value: "Verified sale", icon: "receipt" },
  { key: "customer", label: "Customer growth", value: "New customer", icon: "userPlus" },
  { key: "roas", label: "Performance", value: "Measurable ROAS", icon: "chart" },
] as const;

const processSteps = [
  ["01", "Agree the commercial goal", "We start with the outcome that matters: the target customer, markets, conversion event, KPIs and commercial model."],
  ["02", "Choose the right partners", "We shortlist publisher types, promotional methods and geographies around the brief—not around a generic network list."],
  ["03", "Set the rules", "Tracking, attribution, brand restrictions, validation periods and reporting expectations are agreed before launch."],
  ["04", "Launch with focus", "The campaign opens to a relevant publisher group first, giving both teams an early view of quality and fit."],
  ["05", "Watch the traffic", "We review conversions, traffic sources and partner contribution against the rules already agreed with your team."],
  ["06", "Back what works", "Strong partners get room to grow. Activity that falls outside the brief can be queried, restricted or paused."],
] as const;

const channels = [
  ["document", "Content & editorial", "Support product discovery and consideration through relevant articles, guides and specialist content."],
  ["compare", "Comparison & review", "Reach high-consideration audiences actively evaluating providers, products or services."],
  ["tag", "Coupon & promotional", "Engage conversion-ready users through controlled offer, voucher and promotional activity."],
  ["creator", "Creator-led publishers", "Build audience trust through creators and publishers with an established community relationship."],
  ["email", "Email partners", "Activate permission-based audiences under clearly defined campaign and compliance requirements."],
  ["chart", "Commerce & niche affiliates", "Reach specialist audiences through commerce media, vertical publishers and focused affiliate partners."],
] as const;

const advantages = [
  ["We approve for fit, not volume", "Each publisher is considered against the audience, market, vertical and promotional methods in your brief."],
  ["We set the rules before launch", "Paid search, brand bidding, coupon, email, social and sub-network activity can be explicitly allowed or restricted."],
  ["We keep you close to the numbers", "Campaign reporting shows conversion movement and partner contribution, so decisions are based on visible activity."],
  ["We start focused, then widen", "A relevant publisher group gives the campaign room to prove quality before reach is expanded."],
  ["We challenge questionable activity", "Traffic review and conversion validation help identify activity that falls outside the agreed campaign requirements."],
  ["You work with an active team", "Advertisers and publishers receive practical campaign support, ongoing communication and hands-on management."],
] as const;

const models = ["CPA campaigns", "CPL campaigns", "CPS / e-commerce", "Lead generation", "Hybrid models", "Product feeds", "Coupon campaigns", "Content partnerships", "Publisher placements"];
const verticals = ["E-commerce & D2C", "Fashion & lifestyle", "Beauty & wellness", "Health & supplements", "Technology", "Travel & hospitality", "Finance & insurance", "Education & subscriptions"];

const faqs = [
  ["How quickly can an affiliate campaign launch?", "Launch timing depends on tracking readiness, campaign terms, target markets and publisher requirements. After the initial review, AscendiaPrime provides a practical activation plan and confirms the steps required before partners are invited."],
  ["How are publishers selected and approved?", "Partners are assessed against the advertiser’s audience, vertical, geography, promotional method and campaign rules. Activation can begin with a controlled publisher group before activity is expanded."],
  ["Can we restrict particular traffic sources?", "Yes. Campaign terms can define permitted and restricted sources, including paid search, brand bidding, coupon activity, email, social promotion, incentives and sub-network distribution."],
  ["How is tracking and attribution handled?", "Tracking links, conversion events, attribution rules, validation periods and reporting requirements are agreed during onboarding. Compatibility with the advertiser’s existing setup is confirmed before activation."],
  ["How do you manage low-quality or unauthorised activity?", "Clear campaign rules, partner monitoring, traffic review and conversion validation are used to identify activity that does not meet the agreed requirements. Actions can then be restricted, paused or investigated with the relevant partner."],
  ["What information is required to assess a campaign?", "The initial review normally covers the offer, target customer, markets, conversion action, commission model, KPIs, tracking setup, permitted traffic sources and any compliance or brand restrictions."],
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": "https://ascendiaprime.com/#organization", name: "Ascendia Prime Media Ltd", url: "https://ascendiaprime.com/" },
    { "@type": "Service", "@id": "https://ascendiaprime.com/affiliate-publisher-marketing/#service", name: "Affiliate and Publisher Marketing Services", serviceType: "Affiliate and publisher marketing", provider: { "@id": "https://ascendiaprime.com/#organization" }, areaServed: "Worldwide", description: "Hands-on affiliate campaign management, selective publisher approval, traffic-quality controls and transparent reporting for performance teams." },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://ascendiaprime.com/" }, { "@type": "ListItem", position: 2, name: "Affiliate & Publisher Marketing", item: "https://ascendiaprime.com/affiliate-publisher-marketing/" }] },
    { "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
  ],
};

function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <defs><linearGradient id="brand-gradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#3f8bf9" /><stop offset=".52" stopColor="#7469f8" /><stop offset="1" stopColor="#e057d8" /></linearGradient></defs>
      <path d="M5 38 19.5 9l6 11.8L17 38H5Z" fill="url(#brand-gradient)" />
      <path d="M20 38 29.5 19 39 38H29.5l-4.7-9.3L20 38Z" fill="#f4f6ff" />
      <path d="M9 38h30" stroke="#e057d8" strokeWidth="2.7" strokeLinecap="round" />
    </svg>
  );
}

function Icon({ name }: { name: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}>
    {name === "document" && <><path d="M6 3.5h9l3 3V20.5H6z" /><path d="M15 3.5v3h3M9 11h6M9 15h6" /></>}
    {name === "compare" && <><path d="M5 8h12M14 5l3 3-3 3M19 16H7M10 13l-3 3 3 3" /></>}
    {name === "tag" && <><path d="M4.5 6.5v5.2L12.8 20l7.2-7.2-8.3-8.3H6.5a2 2 0 0 0-2 2Z" /><circle cx="8.2" cy="8.2" r="1" /></>}
    {name === "creator" && <><circle cx="10" cy="8" r="3" /><path d="M4.5 19c.7-3.2 2.5-5 5.5-5s4.8 1.8 5.5 5M18.5 5.5v4M16.5 7.5h4" /></>}
    {name === "email" && <><rect x="3.5" y="5" width="17" height="14" rx="2" /><path d="m5 7 7 5 7-5" /></>}
    {name === "target" && <><circle cx="12" cy="12" r="7.5" /><circle cx="12" cy="12" r="3.5" /><path d="M12 2.5v3M21.5 12h-3M12 21.5v-3M2.5 12h3" /></>}
    {name === "receipt" && <><path d="M6 3.5h12v17l-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5-2 1.5z" /><path d="M9 8h6M9 12h3M13.5 14.5l1.5 1.5 3-3" /></>}
    {name === "userPlus" && <><circle cx="9" cy="8" r="3" /><path d="M3.5 19c.7-3.2 2.5-5 5.5-5s4.8 1.8 5.5 5M18 8v7M14.5 11.5h7" /></>}
    {name === "chart" && <><path d="M4 19.5h16M5.5 17l4.2-5 3.2 2.5L19 7" /><path d="M15.5 7H19v3.5" /></>}
  </svg>;
}

function GrowthEngine() {
  const [run, setRun] = useState(0);
  return <div className="engine-wrap">
    <div key={run} className="growth-engine is-playing" aria-hidden="true">
      <span className="engine-label engine-label-left">Publisher signals</span><span className="engine-label engine-label-right">Advertiser outcomes</span>
      <svg className="network-lines" viewBox="0 0 800 690" preserveAspectRatio="none">
        <g className="source-lines">{["M175 145 C260 145,285 250,355 318","M175 255 C260 255,290 285,355 325","M175 365 C255 365,295 350,355 340","M175 475 C260 475,292 405,355 355","M175 585 C255 585,290 445,355 365"].map((d,i)=><g key={d}><path className="network-base" d={d}/><path className="network-flow source-flow" d={d} pathLength="100" style={{"--delay":`${1.7+i*.32}s`} as React.CSSProperties}/></g>)}</g>
        <g className="outcome-lines">{["M445 325 C520 270,555 175,625 175","M445 338 C525 315,560 300,625 300","M445 350 C525 365,560 425,625 425","M445 362 C520 425,560 550,625 550"].map((d,i)=><g key={d}><path className="network-base" d={d}/><path className="network-flow outcome-flow" d={d} pathLength="100" style={{"--delay":`${5.85+i*.3}s`} as React.CSSProperties}/></g>)}</g>
      </svg>
      <div className="source-column">{sources.map((item,index)=><div className="engine-node source-node" key={item.key} style={{"--delay":`${.45+index*.24}s`} as React.CSSProperties}><span className="node-icon"><Icon name={item.icon}/></span><span><small>{item.label}</small><strong>{item.value}</strong></span></div>)}</div>
      <div className="engine-core"><span className="core-ring ring-one"/><span className="core-ring ring-two"/><img className="engine-core-image" src="https://ascendiaprime.com/wp-content/uploads/2026/05/13-removebg-preview-e1787582061522.png" alt="AscendiaPrime" /></div>
      <div className="validation-list">{["Source approved","Tracking verified","Conversion validated"].map((text,index)=><div className="validation-pill" key={text} style={{"--delay":`${4.25+index*.55}s`} as React.CSSProperties}><span>✓</span>{text}</div>)}</div>
      <div className="outcome-column">{outcomes.map((item,index)=><div className="engine-node outcome-node" key={item.key} style={{"--delay":`${7+index*.24}s`} as React.CSSProperties}><span className="node-icon"><Icon name={item.icon}/></span><span><small>{item.label}</small><strong>{item.value}</strong></span></div>)}</div>
      <p className="engine-message">Trusted partners. Validated performance. <b>Scalable growth.</b></p>
    </div>
    <button className="replay-button" type="button" aria-label="Replay growth animation" onClick={()=>setRun(value=>value+1)}>↻</button>
    <div className="mobile-engine" aria-label="Publisher signals are validated by AscendiaPrime and converted into measurable advertiser outcomes.">
      <div><strong>Publisher signals</strong><span>Trusted content, comparison, coupon, creator and email partners</span></div><b>↓</b><div><strong>AscendiaPrime validation</strong><span>Source approved · Tracking verified · Conversion validated</span></div><b>↓</b><div><strong>Measurable outcomes</strong><span>Qualified leads, verified sales and scalable customer growth</span></div>
    </div>
  </div>;
}

export default function Home() {
  const { openContactModal } = useContactModal();

  return <>
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <header className="site-header"><a className="brand" href="#top" aria-label="AscendiaPrime home"><BrandMark/><span>ascendia<small>prime</small></span></a><nav aria-label="Primary navigation"><a href="#how-it-works">How it works</a><a href="#channels">Partner channels</a><a href="#why-us">Why AscendiaPrime</a><a href="#faq">FAQs</a></nav><a className="header-cta" href="#contact">Discuss your campaign</a></header>
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}} />
      <section id="top" className="hero-section"><div className="hero-copy"><p className="eyebrow">Affiliate growth for performance teams</p><h1>Affiliate Growth Built on the Right Publishers—<span>Not Simply More of Them</span></h1><p className="hero-lede">AscendiaPrime helps performance and affiliate teams recruit, approve and manage publishers across the UK and international markets. You get hands-on campaign support, visible traffic sources and commercial flexibility—without handing quality control to a black box.</p><div className="hero-actions"><button className="button button-primary" type="button" onClick={() => openContactModal()}>Discuss your campaign <span aria-hidden="true">→</span></button><a className="button button-secondary" href="#case-study">See a client result</a></div><div className="assurances"><span>Selective publisher approval</span><span>Traffic-quality controls</span><span>Hands-on campaign management</span></div></div><GrowthEngine/></section>
      <section className="proof-strip" aria-label="AscendiaPrime proof points"><div><strong>20+ years</strong><span>Team and founder experience</span></div><div><strong>17K+ publishers</strong><span>Across the UK and worldwide</span></div><div><strong>International reach</strong><span>Local and cross-market activation</span></div><div><strong>Flexible models</strong><span>CPA, CPL, CPS and hybrid</span></div></section>

      <section className="content-section fit-section">
        <div className="section-heading"><p className="section-kicker">For teams accountable for the number</p><h2>More publishers are not the answer. Better-fit publishers are.</h2><p>A large network means little if you cannot see where the traffic came from or why it converted. We help you build a partner mix that matches the brief, then stay close enough to the campaign to act on what the data shows.</p></div>
        <div className="fit-grid"><article><span>01</span><h3>Start with fit</h3><p>Match partner type, audience, geography and promotional method to the campaign before invitations go out.</p></article><article><span>02</span><h3>See what is happening</h3><p>Keep traffic rules, attribution and partner contribution visible enough for your team to question and verify.</p></article><article><span>03</span><h3>Put budget behind what works</h3><p>Grow the partners producing useful outcomes and take action when activity does not meet the agreed standard.</p></article></div>
      </section>

      <section id="how-it-works" className="content-section process-section">
        <div className="section-heading centered"><p className="section-kicker">The Transparent Growth Engine</p><h2>What hands-on campaign management looks like</h2><p>Six practical stages keep the commercial goal, partner activity and performance decisions connected from the outset.</p></div>
        <div className="process-grid">{processSteps.map(([number,title,copy])=><article key={number}><span className="step-number">{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section id="channels" className="content-section channels-section">
        <div className="section-heading"><p className="section-kicker">Partner channels</p><h2>Different partners for different moments in the customer journey</h2><p>The channel mix is selected around the campaign—not applied as a generic publisher list.</p></div>
        <div className="channel-grid">{channels.map(([icon,title,copy])=><article key={title}><span className="feature-icon"><Icon name={icon}/></span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
      </section>

      <section id="why-us" className="content-section why-section">
        <div className="why-intro"><p className="section-kicker">Why AscendiaPrime</p><h2>You should know who is driving each result and why</h2><p>Our team and founders bring more than 20 years of advertising and digital-media experience. That experience shapes a deliberately hands-on approach: choose partners carefully, make the rules explicit and stay involved after the campaign goes live.</p><div className="experience-card"><strong>17K+</strong><span>publisher relationships spanning the UK and markets around the world.</span></div></div>
        <div className="advantage-grid">{advantages.map(([title,copy],index)=><article key={title}><span>0{index+1}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
      </section>

      <section id="case-study" className="content-section case-study-section">
        <div className="case-study-label"><p className="section-kicker">Anonymised client result</p><span>Beauty &amp; personal care</span></div>
        <div className="case-study-copy"><h2>More conversions and revenue that nearly doubled in two months</h2><p>After joining AscendiaPrime, one beauty and personal care brand recorded <strong>up to 51% growth in conversions</strong> and <strong>almost 100% growth in sales revenue</strong> within two months.</p><small>Results relate to one client engagement and are not a guarantee of future performance. Outcomes vary by offer, market, commercial terms and campaign readiness.</small></div>
        <div className="result-cards"><article><strong>Up to 51%</strong><span>growth in conversions</span></article><article><strong>Almost 100%</strong><span>growth in sales revenue</span></article><p>Measured after the brand joined AscendiaPrime.</p></div>
      </section>

      <section className="content-section capability-section">
        <div className="capability-card"><p className="section-kicker">Flexible commercial structures</p><h2>Campaign models</h2><div className="tag-list">{models.map(model=><span key={model}>{model}</span>)}</div></div>
        <div className="capability-card"><p className="section-kicker">Vertical-aware activation</p><h2>Supported sectors</h2><div className="tag-list vertical-tags">{verticals.map(vertical=><span key={vertical}>{vertical}</span>)}</div></div>
      </section>

      <section className="content-section control-section">
        <div><p className="section-kicker">Campaign governance</p><h2>Controls advertisers can verify</h2><p>Every activation should begin with a shared understanding of where traffic can come from, how results will be measured and how exceptions will be handled.</p></div>
        <ul><li><span>✓</span> Documented allowed and restricted traffic sources</li><li><span>✓</span> Agreed tracking and attribution requirements</li><li><span>✓</span> Campaign-level reporting and partner review</li><li><span>✓</span> Conversion validation and quality feedback</li><li><span>✓</span> Clear communication across advertiser and partner teams</li></ul>
      </section>

      <section id="faq" className="content-section faq-section">
        <div className="section-heading"><p className="section-kicker">Commercial questions</p><h2>What advertisers usually need to know</h2><p>Clear answers before activation help create stronger campaign terms and better long-term partnerships.</p></div>
        <div className="faq-list">{faqs.map(([question,answer],index)=><details key={question} open={index===0}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
      </section>

      <section id="contact" className="contact-section"><div><p className="section-kicker">Start with campaign fit</p><h2>Tell us what you need the channel to achieve</h2><p>Share your target customer, markets, conversion event and commercial model. We will review the opportunity and tell you where AscendiaPrime—and our publisher base—can add value.</p></div><div className="contact-actions"><button type="button" className="button button-primary open-contact-modal">Discuss your campaign <span aria-hidden="true">→</span></button><small>Contact@ascendiaprime.com</small></div></section>
    </main>
  </>;
}
