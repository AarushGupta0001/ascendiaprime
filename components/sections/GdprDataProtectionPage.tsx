"use client";

import "@/styles/legal-document.css";

export default function GdprDataProtectionPage() {
  return (
    <div id="gdpr_data_protection" className="legal-page-master">
      <div className="legal-container">
        <header className="legal-header">
          <span className="legal-kicker">Data Protection &amp; Compliance</span>
          <h1 className="legal-title">GDPR &amp; Data Protection Commitment</h1>
          <div className="legal-meta">
            <span className="legal-meta-badge">Last Updated: 10 June 2026</span>
            <span>Ascendia Prime Media Ltd · Company No. 16296718</span>
          </div>
        </header>

        <main className="legal-document">
          <section className="legal-section">
            <h2 className="legal-section-title">1. Our Commitment</h2>
            <p className="legal-paragraph">
              Ascendia Prime Media Ltd (&ldquo;Ascendia Prime&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to complying with applicable data protection laws, including the UK GDPR, the Data Protection Act 2018, and, where applicable, the EU GDPR and ePrivacy regulations.
            </p>
            <p className="legal-paragraph">
              We embed privacy, security, transparency, and accountability into our operations and digital marketing activities.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">2. Data Protection Principles</h2>
            <p className="legal-paragraph">
              We process personal data in strict adherence to the following core principles:
            </p>
            <ul className="legal-list">
              <li className="legal-list-item"><strong>Lawfulness, fairness, and transparency:</strong> Processing data fairly and openly.</li>
              <li className="legal-list-item"><strong>Purpose limitation:</strong> Collecting data strictly for specified, explicit, and legitimate purposes.</li>
              <li className="legal-list-item"><strong>Data minimisation:</strong> Ensuring data processed is adequate, relevant, and limited to what is necessary.</li>
              <li className="legal-list-item"><strong>Accuracy:</strong> Keeping personal data accurate and up to date.</li>
              <li className="legal-list-item"><strong>Storage limitation:</strong> Retaining personal data no longer than necessary.</li>
              <li className="legal-list-item"><strong>Integrity and confidentiality:</strong> Implementing robust technical and organizational security.</li>
              <li className="legal-list-item"><strong>Accountability:</strong> Demonstrating active compliance with data protection principles.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">3. Privacy by Design &amp; Default</h2>
            <p className="legal-paragraph">
              We incorporate data privacy considerations at the design stage of all campaigns, tracking architectures, retargeting solutions, publisher onboardings, CRM operations, and partner reporting.
            </p>
            <p className="legal-paragraph">Where appropriate, we systematically evaluate:</p>
            <ul className="legal-list">
              <li className="legal-list-item">The specific necessity and categories of data required.</li>
              <li className="legal-list-item">The lawful basis for processing and whether explicit user consent is required.</li>
              <li className="legal-list-item">Data retention periods, access governance, and international transfer safeguards.</li>
              <li className="legal-list-item">Risk mitigation through aggregation, pseudonymisation, and strict contractual controls.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">4. Controller &amp; Processor Responsibilities</h2>
            <p className="legal-paragraph">
              <strong>As a Controller:</strong> Ascendia Prime determines the purposes and means of processing personal data relating to direct business contacts, website visitors, and partner relationships.
            </p>
            <p className="legal-paragraph">
              <strong>As a Processor:</strong> Where we process data on behalf of an advertiser or network partner, we act strictly under documented instructions and apply full contractual data protection agreements (DPAs).
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">5. Data Subject Rights</h2>
            <p className="legal-paragraph">
              Under applicable data protection law, individuals possess key rights regarding their personal data, including the right to access, rectify, erase, restrict processing, object to processing, and request data portability.
            </p>
            <div className="legal-card-grid">
              <div className="legal-callout-card">
                <div className="legal-card-label">Exercising Your Rights</div>
                <div className="legal-card-body">
                  To submit a formal data subject rights request, please email our Data Protection team at{" "}
                  <a href="mailto:contact@ascendiaprime.com" className="legal-link">
                    contact@ascendiaprime.com
                  </a>. We acknowledge and respond to verified requests within the statutory timeframe (normally 30 calendar days).
                </div>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">6. Direct Marketing &amp; Opt-Out Management</h2>
            <p className="legal-paragraph">
              We respect individual communication preferences. All marketing communications include clear, one-click unsubscribe links. We maintain active suppression lists to guarantee that opt-outs are immediately and permanently respected.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">7. Cookies &amp; Tracking Technologies</h2>
            <p className="legal-paragraph">
              Digital advertising and affiliate attribution rely on cookies, pixels, and tracking tags. We require all advertisers, networks, and publisher partners to obtain valid, prior user consent before non-essential tracking technologies are deployed.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">8. Data Sharing &amp; International Transfers</h2>
            <p className="legal-paragraph">
              Where personal data is transferred across borders (outside the UK or EEA), we implement lawful transfer mechanisms including the UK International Data Transfer Agreement (IDTA), the UK Addendum, and EU Standard Contractual Clauses (SCCs).
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">9. Security &amp; Breach Protocol</h2>
            <p className="legal-paragraph">
              We maintain rigorous technical, administrative, and physical safeguards. In the event of a confirmed personal data breach posing a risk to individuals, we notify relevant supervisory authorities and affected parties in accordance with statutory obligations.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">10. Data Protection Contact Information</h2>
            <div className="legal-card-grid">
              <div className="legal-callout-card">
                <div className="legal-card-label">Designated Privacy Contact</div>
                <div className="legal-card-body">
                  Email: <a href="mailto:contact@ascendiaprime.com" className="legal-link">contact@ascendiaprime.com</a><br />
                  Postal: Ascendia Prime Media Ltd, Unit 13e, First Floor Office, 27 Town Square, Erith, Kent, United Kingdom, DA8 1SE.
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
