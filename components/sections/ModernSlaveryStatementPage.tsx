"use client";

import "@/styles/legal-document.css";

export default function ModernSlaveryStatementPage() {
  return (
    <div id="modern_slavery_statement" className="legal-page-master">
      <div className="legal-container">
        <header className="legal-header">
          <span className="legal-kicker">Corporate Responsibility</span>
          <h1 className="legal-title">Modern Slavery Statement</h1>
          <div className="legal-meta">
            <span className="legal-meta-badge">Financial Year 2025/2026</span>
            <span>Ascendia Prime Media Ltd · Company No. 16296718</span>
          </div>
        </header>

        <main className="legal-document">
          <section className="legal-section">
            <h2 className="legal-section-title">1. Introduction &amp; Policy Stance</h2>
            <p className="legal-paragraph">
              This statement is published by Ascendia Prime Media Ltd (&ldquo;Ascendia Prime&rdquo;) in accordance with our corporate commitment to ethical business operations.
            </p>
            <p className="legal-paragraph">
              Ascendia Prime operates a strict zero-tolerance policy towards modern slavery, human trafficking, forced labour, bonded labour, child exploitation, and unlawful servitude in all aspects of our business and supply chains.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">2. Business Structure &amp; Operations</h2>
            <p className="legal-paragraph">
              Ascendia Prime is a UK-incorporated performance marketing and digital media consultancy specializing in affiliate marketing, campaign attribution, retargeting, and publisher network management.
            </p>
            <p className="legal-paragraph">
              Our workforce is predominantly professional, office-based, and digital in nature. Consequently, our direct operational risk regarding modern slavery is assessed as low.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">3. Supply Chain Due Diligence</h2>
            <p className="legal-paragraph">
              Our supply chains comprise technology infrastructure providers, cloud hosting vendors, advertising software platforms, digital publishers, professional advisors, and specialist consultants.
            </p>
            <p className="legal-paragraph">
              To mitigate supply chain risks, we enforce the following diligence measures:
            </p>
            <ul className="legal-list">
              <li className="legal-list-item">Requiring contractual compliance with the Modern Slavery Act 2015 and international labour standards.</li>
              <li className="legal-list-item">Conducting reputational and identity due diligence on publishers and service providers prior to onboarding.</li>
              <li className="legal-list-item">Immediate termination of relationships with any party found to engage in or tolerate forced labour or unlawful exploitation.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">4. Partner Network Standards</h2>
            <p className="legal-paragraph">
              We require all media buyers, affiliates, influencers, and advertising partners to maintain ethical labour practices, provide fair remuneration, and ensure safe, voluntary working conditions across their organizations.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">5. Reporting &amp; Whistleblowing</h2>
            <p className="legal-paragraph">
              Employees, partners, and external stakeholders are encouraged to report any suspected instances or concerns regarding modern slavery or human rights abuses connected with our business.
            </p>
            <div className="legal-card-grid">
              <div className="legal-callout-card">
                <div className="legal-card-label">Confidential Reporting Channel</div>
                <div className="legal-card-body">
                  Email: <a href="mailto:contact@ascendiaprime.com" className="legal-link">contact@ascendiaprime.com</a><br />
                  Subject: Modern Slavery Concern<br />
                  All reports are treated with strict confidentiality and investigated thoroughly.
                </div>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">6. Board Approval</h2>
            <p className="legal-paragraph">
              This statement has been reviewed and approved by the Board of Directors of Ascendia Prime Media Ltd.
            </p>
            <div className="legal-card-grid">
              <div className="legal-callout-card">
                <div className="legal-card-label">Signatory</div>
                <div className="legal-card-body">
                  <strong>Marcio Borlenghi Fasano</strong><br />
                  Director, Ascendia Prime Media Ltd<br />
                  Date: 10 June 2026
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
