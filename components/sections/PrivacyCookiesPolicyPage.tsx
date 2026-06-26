"use client";

import "@/styles/privacy-cookies-policy.css";

import ParticleCanvas from "@/components/effects/ParticleCanvas";

import PageRevealEffects from "@/components/effects/PageRevealEffects";

export default function PrivacyCookiesPolicyPage() {
  return (
    <PageRevealEffects>
      <div id="privacy_cookies_policy">
    <ParticleCanvas id="nexus-canvas" className="fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none opacity-50" />

    <div className="relative z-10 w-full">
        <header className="policy-hero fade-up-element">
            <div className="ambient-glow"></div>
            <h1 className="policy-main-title text-shimmer">Privacy &amp; Cookies Policy</h1>
            <p className="policy-hero-meta">Last updated: 10 June 2026 · Ascendia Prime Media Ltd</p>
        </header>

        <main className="policy-document">
            
        <article id="section-1-1" className="policy-section fade-up-element">
            <h2 className="policy-section-title text-shimmer">Introduction</h2>
            <div className="policy-section-body">
                <p className="policy-paragraph">Ascendia Prime Media Ltd (“Ascendia Prime”, “we”, “us”, or “our”) respects privacy and is committed to protecting personal data.</p><p className="policy-paragraph">This Privacy &amp; Cookies Policy explains how we collect, use, store and share personal data when individuals interact with our website, services, campaigns, affiliate network, tracking technologies, business communications, advertisers, publishers, agencies, suppliers and partners.</p><p className="policy-paragraph">Ascendia Prime operates in performance marketing, affiliate marketing, digital media, retargeting, remarketing, publisher partnerships and campaign management. As part of this activity, we may process personal data in order to deliver, measure, optimise and report on marketing performance.</p><p className="policy-paragraph">We aim to process data lawfully, fairly, transparently and responsibly.</p>
            </div>
        </article>

        <article id="section-1-2" className="policy-section fade-up-element" style={{ transitionDelay: "0.04s" }}>
            <h2 className="policy-section-title text-shimmer">Who We Are</h2>
            <div className="policy-section-body">
                <p className="policy-paragraph">Ascendia Prime Media Ltd is a private limited company registered in England and Wales under company number 16296718.</p><div className="policy-card-grid"><div className="policy-highlight-card"><p className="policy-card-label">Registered office</p><div className="policy-card-body">Unit 13e, First Floor Office,<br />27 Town Square,<br />Erith, Kent,<br />United Kingdom,<br />DA8 1SE.</div></div><div className="policy-highlight-card"><p className="policy-card-label">For privacy matters, please contact</p><div className="policy-card-body">Email: <a href="mailto:privacy@ascendiaprime.com" className="policy-link">privacy@ascendiaprime.com</a> Postal address: Ascendia Prime Media Ltd,<br />Unit 13e, First Floor Office,<br />27 Town Square,<br />Erith, Kent,<br />United Kingdom,<br />DA8 1SE.</div></div></div>
            </div>
        </article>

        <article id="section-1-3" className="policy-section fade-up-element" style={{ transitionDelay: "0.08s" }}>
            <h2 className="policy-section-title text-shimmer">Our Role as Controller or Processor</h2>
            <div className="policy-section-body">
                <p className="policy-paragraph">Depending on the activity, Ascendia Prime may act as:</p><ul className="policy-list"><li className="policy-list-item"><span className="policy-bullet">▹</span>Data controller where we decide why and how personal data is processed, for example when we process website enquiries, business contacts, partner applications, supplier records, internal business communications or compliance records.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Data processor where we process personal data on behalf of an advertiser, client, network or platform under written instructions, for example when implementing campaign tracking, reporting or performance optimisation on behalf of a client.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Joint or independent controller in some affiliate marketing, publisher, tracking or digital advertising scenarios, depending on the structure of the campaign, the technology used and the contractual relationship between the parties.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Where required, we put appropriate data processing, data sharing or controller-to-controller arrangements in place.</li></ul>
            </div>
        </article>

        <article id="section-1-4" className="policy-section fade-up-element" style={{ transitionDelay: "0.12s" }}>
            <h2 className="policy-section-title text-shimmer">Personal Data We May Collect</h2>
            <div className="policy-section-body">
                <p className="policy-paragraph">We may collect and process the following categories of data:</p><div className="policy-card-grid"><div className="policy-highlight-card"><p className="policy-card-label">Business contact data</p><div className="policy-card-body">Name, job title, company name, email address, telephone number, postal address, LinkedIn profile, meeting notes and communication history.</div></div><div className="policy-highlight-card"><p className="policy-card-label">Advertiser and publisher data</p><div className="policy-card-body">Company details, account contacts, finance contacts, authorised signatories, tax or billing details, campaign preferences, publisher applications, approval status, programme terms and communication records.</div></div><div className="policy-highlight-card"><p className="policy-card-label">Campaign and tracking data</p><div className="policy-card-body">Click IDs, affiliate IDs, publisher IDs, campaign IDs, order IDs, transaction values, commission values, conversion events, timestamps, referral URLs, landing page URLs, device type, browser type, IP address, approximate location, cookie IDs, pixel events and attribution data.</div></div><div className="policy-highlight-card"><p className="policy-card-label">Website and technical data</p><div className="policy-card-body">IP address, device identifiers, browser type, operating system, pages visited, time on site, session behaviour, referring websites, cookie preferences, consent records and analytics data.</div></div><div className="policy-highlight-card"><p className="policy-card-label">Marketing and communication data</p><div className="policy-card-body">Newsletter preferences, event interactions, webinar registrations, call recordings where notified, CRM notes and opt-in or opt-out records.</div></div><div className="policy-highlight-card"><p className="policy-card-label">Compliance and fraud prevention data</p><div className="policy-card-body">Traffic quality signals, suspicious click patterns, invalid activity indicators, fraud investigation notes, policy breaches, complaints, suppression lists and audit records.</div></div><div className="policy-highlight-card"><p className="policy-card-label">Recruitment or supplier data</p><div className="policy-card-body">Where applicable, CVs, supplier contact information, due diligence records, contract records, payment details and references.</div></div></div><p className="policy-paragraph">We do not intentionally collect special category data unless it is necessary, lawful and clearly explained at the point of collection.</p>
            </div>
        </article>

        <article id="section-1-5" className="policy-section fade-up-element" style={{ transitionDelay: "0.16s" }}>
            <h2 className="policy-section-title text-shimmer">How We Collect Personal Data</h2>
            <div className="policy-section-body">
                <p className="policy-paragraph">We may collect personal data:</p><ul className="policy-list"><li className="policy-list-item"><span className="policy-bullet">▹</span>Directly from you when you contact us, complete a form, book a call, sign an agreement, apply as a partner or communicate with us.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>From advertisers, publishers, affiliate networks, media platforms, tracking platforms, analytics providers and business partners.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Through cookies, pixels, tags, tracking links, server logs and similar technologies.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>From public sources such as company websites, professional networks and business directories.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>From events, conferences and business introductions.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>From fraud prevention, compliance, campaign monitoring and reporting systems.</li></ul>
            </div>
        </article>

        <article id="section-1-6" className="policy-section fade-up-element" style={{ transitionDelay: "0.2s" }}>
            <h2 className="policy-section-title text-shimmer">Why We Use Personal Data</h2>
            <div className="policy-section-body">
                <p className="policy-paragraph">We may use personal data for the following purposes:</p><ul className="policy-list"><li className="policy-list-item"><span className="policy-bullet">▹</span>To provide performance marketing, affiliate marketing, retargeting, remarketing, campaign management and reporting services.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>To onboard advertisers, publishers, agencies, media buyers and partners.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>To manage affiliate programmes, campaigns, commission structures and publisher approvals.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>To track clicks, conversions, transactions, commissions and campaign performance.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>To detect, prevent and investigate fraud, invalid traffic, brand abuse, cookie stuffing, click injection, misleading activity or policy breaches.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>To manage contracts, insertion orders, payment records and commercial relationships.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>To respond to enquiries, complaints, data protection requests and support requests.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>To improve our website, services, technology and campaign performance.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>To send business communications, service updates and relevant marketing where lawful.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>To comply with legal, regulatory, tax, accounting and audit obligations.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>To protect our rights, systems, clients, partners and users.</li></ul>
            </div>
        </article>

        <article id="section-1-7" className="policy-section fade-up-element" style={{ transitionDelay: "0.24s" }}>
            <h2 className="policy-section-title text-shimmer">Lawful Bases for Processing</h2>
            <div className="policy-section-body">
                <p className="policy-paragraph">We rely on one or more lawful bases depending on the context:</p><ul className="policy-list"><li className="policy-list-item"><span className="policy-bullet">▹</span>Contract: where processing is necessary to enter into or perform a contract with advertisers, publishers, suppliers, staff or partners.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Legitimate interests: where processing is necessary for our business interests or those of our clients and partners, provided those interests are not overridden by individual rights and freedoms. This may include B2B communications, campaign tracking, fraud prevention, performance optimisation, network administration and service improvement.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Consent: where required, including for certain cookies, direct marketing, retargeting technologies or optional communications.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Legal obligation: where processing is necessary to comply with legal, regulatory, tax, accounting, employment or reporting obligations.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Vital interests or public task: these are unlikely to apply to our normal business activities but may apply in exceptional circumstances.</li></ul>
            </div>
        </article>

        <article id="section-1-8" className="policy-section fade-up-element" style={{ transitionDelay: "0.28s" }}>
            <h2 className="policy-section-title text-shimmer">Affiliate Tracking, Retargeting and Remarketing</h2>
            <div className="policy-section-body">
                <p className="policy-paragraph">Ascendia Prime may use affiliate tracking, retargeting and remarketing technologies to help advertisers re-engage users who have interacted with a website, advert, publisher link or campaign but have not completed a desired action.</p><p className="policy-paragraph">This may involve cookies, pixels, tags, click IDs, device data, campaign identifiers and conversion tracking.</p><p className="policy-paragraph">Where required, such technologies should only be activated where appropriate consent, notice and contractual approvals are in place. Advertisers and website owners are responsible for ensuring their own websites provide suitable privacy information and cookie consent mechanisms where required.</p><p className="policy-paragraph">We aim to ensure that retargeting and remarketing activity is measured, responsible, proportionate and brand-safe.</p>
            </div>
        </article>

        <article id="section-1-9" className="policy-section fade-up-element" style={{ transitionDelay: "0.32s" }}>
            <h2 className="policy-section-title text-shimmer">Cookies and Similar Technologies</h2>
            <div className="policy-section-body">
                <p className="policy-paragraph">Cookies are small files placed on a device when visiting a website. Similar technologies include pixels, tags, SDKs, tracking links, local storage and server-side tracking.</p><p className="policy-paragraph">We may use the following categories:</p><div className="policy-card-grid"><div className="policy-highlight-card"><p className="policy-card-label">Strictly necessary cookies</p><div className="policy-card-body">Required for the website to function, security, fraud prevention, user session management and consent recording.</div></div><div className="policy-highlight-card"><p className="policy-card-label">Analytics cookies</p><div className="policy-card-body">Used to understand website usage, improve content, measure traffic and assess performance.</div></div><div className="policy-highlight-card"><p className="policy-card-label">Advertising and affiliate cookies</p><div className="policy-card-body">Used to measure campaign performance, attribute clicks and conversions, support affiliate commissions, manage retargeting and improve advertising relevance.</div></div><div className="policy-highlight-card"><p className="policy-card-label">Functionality cookies</p><div className="policy-card-body">Used to remember user preferences and improve website experience.</div></div><div className="policy-highlight-card"><p className="policy-card-label">Consent management cookies</p><div className="policy-card-body">Used to store cookie choices and consent preferences.</div></div></div><p className="policy-paragraph">Non-essential cookies should not be used unless the user has provided consent where required. Users should be able to accept, reject or manage non-essential cookie choices.</p>
            </div>
        </article>

        <article id="section-1-10" className="policy-section fade-up-element" style={{ transitionDelay: "0.35s" }}>
            <h2 className="policy-section-title text-shimmer">Managing Cookie Preferences</h2>
            <div className="policy-section-body">
                <p className="policy-paragraph">Users can manage cookie preferences through our cookie banner or cookie settings tool where available.</p><p className="policy-paragraph">Users may also block or delete cookies through browser settings. However, disabling certain cookies may affect website functionality, tracking accuracy, attribution or user experience.</p>
            </div>
        </article>

        <article id="section-1-11" className="policy-section fade-up-element" style={{ transitionDelay: "0.35s" }}>
            <h2 className="policy-section-title text-shimmer">Marketing Communications</h2>
            <div className="policy-section-body">
                <p className="policy-paragraph">We may send marketing communications to business contacts where lawful and relevant. Individuals can unsubscribe or object to marketing at any time.</p><p className="policy-paragraph">We do not knowingly send unsolicited consumer marketing emails without valid consent or another lawful basis.</p><p className="policy-paragraph">We maintain suppression records where required to ensure we respect opt-outs.</p>
            </div>
        </article>

        <article id="section-1-12" className="policy-section fade-up-element" style={{ transitionDelay: "0.35s" }}>
            <h2 className="policy-section-title text-shimmer">Sharing Personal Data</h2>
            <div className="policy-section-body">
                <p className="policy-paragraph">We may share personal data with:</p><ul className="policy-list"><li className="policy-list-item"><span className="policy-bullet">▹</span>Advertisers, publishers, agencies and affiliate networks.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Tracking, analytics, attribution and reporting providers.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Retargeting, DSP, paid media and advertising technology providers.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>CRM, email, cloud hosting, storage and communication providers.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Payment, finance, accounting and legal service providers.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Fraud prevention, brand safety and compliance partners.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Professional advisers, auditors, insurers and regulators.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Law enforcement or public authorities where legally required.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Potential buyers, investors or successors in the event of a business transaction.</li></ul><p className="policy-paragraph">We do not sell personal data in the sense of transferring personal information for money. However, digital advertising ecosystems may involve data sharing for attribution, measurement and campaign delivery, as explained in this policy.</p>
            </div>
        </article>

        <article id="section-1-13" className="policy-section fade-up-element" style={{ transitionDelay: "0.35s" }}>
            <h2 className="policy-section-title text-shimmer">International Transfers</h2>
            <div className="policy-section-body">
                <p className="policy-paragraph">Some of our partners, suppliers, platforms or technology providers may process data outside the United Kingdom or European Economic Area.</p><p className="policy-paragraph">Where international transfers occur, we seek to ensure appropriate safeguards are in place, such as adequacy regulations, standard contractual clauses, the UK International Data Transfer Agreement, the UK Addendum, transfer risk assessments or equivalent safeguards.</p>
            </div>
        </article>

        <article id="section-1-14" className="policy-section fade-up-element" style={{ transitionDelay: "0.35s" }}>
            <h2 className="policy-section-title text-shimmer">Data Retention</h2>
            <div className="policy-section-body">
                <p className="policy-paragraph">We keep personal data only for as long as reasonably necessary for the purposes for which it was collected.</p><p className="policy-paragraph">Typical retention periods may include:</p><ul className="policy-list"><li className="policy-list-item"><span className="policy-bullet">▹</span>Business contact data: up to 6 years after last meaningful interaction, unless earlier deletion is appropriate.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Contract and finance records: up to 6 or 7 years for legal, accounting and tax purposes.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Campaign tracking and attribution records: as required for reporting, validation, payment, dispute resolution and fraud prevention.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Complaints and compliance records: as long as necessary to investigate, resolve and evidence the matter.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Cookie consent records: for a reasonable period to evidence consent choices.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Suppression records: as long as necessary to respect marketing opt-outs.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Retention periods may vary depending on legal obligations, contractual requirements, disputes, fraud prevention needs or regulatory expectations.</li></ul>
            </div>
        </article>

        <article id="section-1-15" className="policy-section fade-up-element" style={{ transitionDelay: "0.35s" }}>
            <h2 className="policy-section-title text-shimmer">Security</h2>
            <div className="policy-section-body">
                <p className="policy-paragraph">We apply appropriate technical and organisational measures to protect personal data against unauthorised access, loss, misuse, alteration or disclosure.</p><p className="policy-paragraph">These may include access controls, password protection, secure cloud systems, limited user permissions, staff awareness, supplier due diligence, data minimisation, encryption where appropriate, logging, monitoring and incident response processes.</p><p className="policy-paragraph">No system is completely secure, but we take reasonable steps to protect personal data.</p>
            </div>
        </article>

        <article id="section-1-16" className="policy-section fade-up-element" style={{ transitionDelay: "0.35s" }}>
            <h2 className="policy-section-title text-shimmer">Individual Rights</h2>
            <div className="policy-section-body">
                <p className="policy-paragraph">Depending on applicable law, individuals may have rights to:</p><ul className="policy-list"><li className="policy-list-item"><span className="policy-bullet">▹</span>Be informed about how personal data is used.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Access personal data.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Correct inaccurate personal data.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Request deletion of personal data.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Restrict processing.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Object to processing, including direct marketing.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Request data portability.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Withdraw consent where processing is based on consent.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Complain to a data protection authority.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Challenge certain automated decision-making where applicable.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>To exercise rights, contact:<a href="mailto:privacy@ascendiaprime.com" className="policy-link">privacy@ascendiaprime.com</a></li><li className="policy-list-item"><span className="policy-bullet">▹</span>We may need to verify identity before responding.</li></ul>
            </div>
        </article>

        <article id="section-1-17" className="policy-section fade-up-element" style={{ transitionDelay: "0.35s" }}>
            <h2 className="policy-section-title text-shimmer">Automated Decision-Making and Profiling</h2>
            <div className="policy-section-body">
                <p className="policy-paragraph">We may use campaign data, audience signals and performance data to support optimisation, segmentation, fraud detection, attribution and retargeting decisions.</p><p className="policy-paragraph">We do not intend to make solely automated decisions that produce legal or similarly significant effects on individuals without appropriate safeguards.</p>
            </div>
        </article>

        <article id="section-1-18" className="policy-section fade-up-element" style={{ transitionDelay: "0.35s" }}>
            <h2 className="policy-section-title text-shimmer">Children</h2>
            <div className="policy-section-body">
                <p className="policy-paragraph">Our services are intended for businesses and adult users. We do not knowingly target or collect personal data from children.</p>
            </div>
        </article>

        <article id="section-1-19" className="policy-section fade-up-element" style={{ transitionDelay: "0.35s" }}>
            <h2 className="policy-section-title text-shimmer">Complaints to a Regulator</h2>
            <div className="policy-section-body">
                <p className="policy-paragraph">Individuals have the right to complain to the UK Information Commissioner’s Office or another relevant data protection authority.</p><p className="policy-paragraph">We would appreciate the opportunity to resolve any concern first.</p>
            </div>
        </article>

        <article id="section-1-20" className="policy-section fade-up-element" style={{ transitionDelay: "0.35s" }}>
            <h2 className="policy-section-title text-shimmer">Updates to This Policy</h2>
            <div className="policy-section-body">
                <p className="policy-paragraph">We may update this Privacy &amp; Cookies Policy from time to time. The latest version will be published on our website with the effective date.</p>
            </div>
        </article>

            <div className="policy-footer-note fade-up-element">
                <p>Questions about this policy? Contact our team for clarification or to raise a concern.</p>
                <a href="mailto:contact@ascendiaprime.com" className="policy-contact-btn">contact@ascendiaprime.com</a>
            </div>
        </main>
    </div>

    
</div>
    </PageRevealEffects>
  );
}
