"use client";

import "@/styles/complaints-policy.css";

import ParticleCanvas from "@/components/effects/ParticleCanvas";

import PageRevealEffects from "@/components/effects/PageRevealEffects";

export default function ComplaintsPolicyPage() {
  return (
    <PageRevealEffects>
      <div id="complaints_policy">
    <ParticleCanvas id="nexus-canvas" className="fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none opacity-50" />

    <div className="relative z-10 w-full">
        <header className="policy-hero fade-up-element">
            <div className="ambient-glow"></div>
            <h1 className="policy-main-title text-shimmer">Complaints Policy</h1>
            <p className="policy-hero-meta">Last updated: 10 June 2026 · Ascendia Prime Media Ltd</p>
        </header>

        <main className="policy-document">
            
        <article id="section-3-1" className="policy-section fade-up-element">
            <h2 className="policy-section-title text-shimmer">Purpose</h2>
            <div className="policy-section-body">
                <p className="policy-paragraph">Ascendia Prime is committed to professionalism, transparency and accountability. We take complaints seriously and aim to resolve concerns fairly, promptly and constructively.</p><p className="policy-paragraph">This Complaints Policy explains how advertisers, publishers, partners, suppliers, consumers or other affected parties may raise a concern.</p>
            </div>
        </article>

        <article id="section-3-2" className="policy-section fade-up-element" style={{ transitionDelay: "0.04s" }}>
            <h2 className="policy-section-title text-shimmer">What This Policy Covers</h2>
            <div className="policy-section-body">
                <p className="policy-paragraph">This policy covers complaints relating to:</p><ul className="policy-list"><li className="policy-list-item"><span className="policy-bullet">▹</span>Affiliate marketing activity.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Publisher conduct.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Advertiser or campaign management.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Tracking, attribution or commission disputes.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Retargeting, remarketing or advertising activity.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Misleading advertising or disclosure concerns.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Data protection or privacy concerns.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Cookie or consent concerns.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Brand safety concerns.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Fraud, invalid traffic or suspicious activity.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Service quality or communication issues.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Breach of Ascendia Prime policies or partner standards.</li></ul>
            </div>
        </article>

        <article id="section-3-3" className="policy-section fade-up-element" style={{ transitionDelay: "0.08s" }}>
            <h2 className="policy-section-title text-shimmer">How to Submit a Complaint</h2>
            <div className="policy-section-body">
                <div className="policy-card-grid"><div className="policy-highlight-card"><p className="policy-card-label">Complaints should be sent to</p><div className="policy-card-body"></div></div><div className="policy-highlight-card"><div className="policy-card-body">Email: <a href="mailto:contact@ascendiaprime.com" className="policy-link">contact@ascendiaprime.com</a>  Postal address: Ascendia Prime Media Ltd,<br />Unit 13e, First Floor Office,<br />27 Town Square,<br />Erith, Kent,<br />United Kingdom,<br />DA8 1SE.</div></div></div><p className="policy-paragraph">Please include:</p><ul className="policy-list"><li className="policy-list-item"><span className="policy-bullet">▹</span>Your name and contact details.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Company name, if applicable.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Details of the complaint.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Relevant dates.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Campaign, advertiser, publisher or transaction references, if available.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Screenshots, links, emails or supporting evidence.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>The outcome you are seeking.</li></ul>
            </div>
        </article>

        <article id="section-3-4" className="policy-section fade-up-element" style={{ transitionDelay: "0.12s" }}>
            <h2 className="policy-section-title text-shimmer">Acknowledgement</h2>
            <div className="policy-section-body">
                <p className="policy-paragraph">We aim to acknowledge complaints within 5 business days.</p><p className="policy-paragraph">If the complaint is urgent, relates to suspected fraud, unlawful advertising, data misuse or consumer harm, we may prioritise it for faster review.</p>
            </div>
        </article>

        <article id="section-3-5" className="policy-section fade-up-element" style={{ transitionDelay: "0.16s" }}>
            <h2 className="policy-section-title text-shimmer">Investigation</h2>
            <div className="policy-section-body">
                <p className="policy-paragraph">We will review the complaint fairly and may:</p><ul className="policy-list"><li className="policy-list-item"><span className="policy-bullet">▹</span>Request further information.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Review tracking records, campaign data or communication history.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Contact relevant advertisers, publishers, platforms or suppliers.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Suspend activity while concerns are investigated.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Assess whether policies, agreements or laws may have been breached.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Take corrective action where appropriate.</li></ul>
            </div>
        </article>

        <article id="section-3-6" className="policy-section fade-up-element" style={{ transitionDelay: "0.2s" }}>
            <h2 className="policy-section-title text-shimmer">Response Times</h2>
            <div className="policy-section-body">
                <p className="policy-paragraph">We aim to provide a substantive response within 20 business days where possible.</p><p className="policy-paragraph">Complex matters, data protection issues, fraud investigations, cross-party disputes or technical investigations may take longer. If so, we will provide an update where appropriate.</p>
            </div>
        </article>

        <article id="section-3-7" className="policy-section fade-up-element" style={{ transitionDelay: "0.24s" }}>
            <h2 className="policy-section-title text-shimmer">Possible Outcomes</h2>
            <div className="policy-section-body">
                <p className="policy-paragraph">Depending on the circumstances, outcomes may include:</p><ul className="policy-list"><li className="policy-list-item"><span className="policy-bullet">▹</span>Explanation or clarification.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Correction of an error.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Removal or amendment of marketing content.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Tracking or reporting review.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Commission validation or reversal review.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Publisher warning, suspension or removal.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Advertiser or campaign adjustment.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Data protection response.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>Process improvement.</li><li className="policy-list-item"><span className="policy-bullet">▹</span>No further action where the complaint is not upheld.</li></ul>
            </div>
        </article>

        <article id="section-3-8" className="policy-section fade-up-element" style={{ transitionDelay: "0.28s" }}>
            <h2 className="policy-section-title text-shimmer">Escalation</h2>
            <div className="policy-section-body">
                <p className="policy-paragraph">If you are not satisfied with our response, you may request escalation by replying to our decision and explaining why you disagree.</p><p className="policy-paragraph">Escalated complaints will be reviewed by a senior member of the team where appropriate.</p>
            </div>
        </article>

        <article id="section-3-9" className="policy-section fade-up-element" style={{ transitionDelay: "0.32s" }}>
            <h2 className="policy-section-title text-shimmer">Data Protection Complaints</h2>
            <div className="policy-section-body">
                <p className="policy-paragraph">If your complaint relates to personal data, privacy or cookies, you may also contact our privacy team at:</p><ul className="policy-list"><li className="policy-list-item"><span className="policy-bullet">▹</span><a href="mailto:privacy@ascendiaprime.com" className="policy-link">privacy@ascendiaprime.com</a></li><li className="policy-list-item"><span className="policy-bullet">▹</span>You may also have the right to complain to the UK Information Commissioner’s Office or another relevant authority.</li></ul>
            </div>
        </article>

        <article id="section-3-10" className="policy-section fade-up-element" style={{ transitionDelay: "0.35s" }}>
            <h2 className="policy-section-title text-shimmer">Advertising Complaints</h2>
            <div className="policy-section-body">
                <p className="policy-paragraph">If your complaint relates to advertising content, affiliate disclosure or marketing transparency, you may also have the right to contact the relevant advertising regulator.</p><p className="policy-paragraph">We encourage complainants to contact us first so we can investigate and resolve concerns directly where possible.</p>
            </div>
        </article>

        <article id="section-3-11" className="policy-section fade-up-element" style={{ transitionDelay: "0.35s" }}>
            <h2 className="policy-section-title text-shimmer">No Retaliation</h2>
            <div className="policy-section-body">
                <p className="policy-paragraph">Ascendia Prime does not tolerate retaliation against anyone who raises a genuine concern in good faith.</p>
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
