"use client";

import "@/styles/legal-document.css";

export default function PrivacyCookiesPolicyPage() {
  return (
    <div id="privacy_cookies_policy" className="legal-page-master">
      <div className="legal-container">
        <header className="legal-header">
          <span className="legal-kicker">Privacy &amp; Regulatory Compliance</span>
          <h1 className="legal-title">Privacy &amp; Cookies Policy</h1>
          <div className="legal-meta">
            <span className="legal-meta-badge">Last Updated: 10 June 2026</span>
            <span>Ascendia Prime Media Ltd · Company No. 16296718</span>
          </div>
        </header>

        <main className="legal-document">
          <section className="legal-section">
            <h2 className="legal-section-title">1. Introduction</h2>
            <p className="legal-paragraph">
              Ascendia Prime Media Ltd (&ldquo;Ascendia Prime&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) respects your privacy and is committed to protecting personal data. This Privacy &amp; Cookies Policy explains how we collect, use, store, and disclose information when you visit our website, engage with our performance marketing solutions, or interact with our digital ecosystem.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">2. Corporate Information &amp; Data Controller</h2>
            <p className="legal-paragraph">
              Ascendia Prime Media Ltd is a private limited company incorporated in England and Wales.
            </p>
            <div className="legal-card-grid">
              <div className="legal-callout-card">
                <div className="legal-card-label">Registered Office</div>
                <div className="legal-card-body">
                  Ascendia Prime Media Ltd<br />
                  Unit 13e, First Floor Office, 27 Town Square,<br />
                  Erith, Kent, United Kingdom, DA8 1SE.
                </div>
              </div>
              <div className="legal-callout-card">
                <div className="legal-card-label">Privacy Enquiries</div>
                <div className="legal-card-body">
                  Email: <a href="mailto:contact@ascendiaprime.com" className="legal-link">contact@ascendiaprime.com</a><br />
                  Data Protection Desk: <a href="mailto:contact@ascendiaprime.com" className="legal-link">contact@ascendiaprime.com</a>
                </div>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">3. Categories of Personal Data We Process</h2>
            <p className="legal-paragraph">
              Depending on the nature of your interaction, we may process the following categories of information:
            </p>
            <div className="legal-card-grid-2x2">
              <div className="legal-callout-card">
                <div className="legal-card-label">Business Contact Details</div>
                <div className="legal-card-body">
                  Names, corporate email addresses, telephone numbers, job titles, company names, and professional correspondence history.
                </div>
              </div>
              <div className="legal-callout-card">
                <div className="legal-card-label">Campaign &amp; Attribution Data</div>
                <div className="legal-card-body">
                  Pseudonymous click IDs, affiliate IDs, transaction timestamps, conversion values, referral URLs, approximate geographic location, device types, and browser metadata.
                </div>
              </div>
              <div className="legal-callout-card">
                <div className="legal-card-label">Technical &amp; Usage Telemetry</div>
                <div className="legal-card-body">
                  IP addresses, cookie identifiers, navigation paths, page load durations, and consent preference records.
                </div>
              </div>
              <div className="legal-callout-card">
                <div className="legal-card-label">Fraud Prevention &amp; Traffic Quality Signals</div>
                <div className="legal-card-body">
                  Bot detection signals, invalid click pattern records, traffic validation logs, and policy compliance verification data.
                </div>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">4. Lawful Bases for Processing</h2>
            <p className="legal-paragraph">
              We process personal data under one or more recognized legal grounds under the UK and EU GDPR:
            </p>
            <ul className="legal-list">
              <li className="legal-list-item"><strong>Contract Performance:</strong> To deliver contracted digital marketing, attribution, and campaign management services.</li>
              <li className="legal-list-item"><strong>Legitimate Interests:</strong> To manage B2B business relationships, detect fraud, protect network integrity, and optimize campaign performance.</li>
              <li className="legal-list-item"><strong>Consent:</strong> For non-essential tracking cookies and marketing subscriptions where required by law.</li>
              <li className="legal-list-item"><strong>Legal Compliance:</strong> To satisfy corporate tax, financial accounting, statutory audit, and regulatory recordkeeping duties.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">5. Cookies &amp; Tracking Technologies</h2>
            <p className="legal-paragraph">
              Cookies are small text files placed on your device to enhance navigation, remember preferences, and measure performance. We classify cookies into strictly necessary (essential for core website functionality) and analytical/performance cookies (used solely with user consent).
            </p>
            <p className="legal-paragraph">
              You can modify or withdraw your cookie preferences at any time via your browser settings.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">6. Data Retention &amp; International Transfers</h2>
            <p className="legal-paragraph">
              We retain personal data only for as long as necessary to fulfil the operational and statutory purposes outlined in this policy. International data transfers are executed under approved transfer mechanisms including the UK IDTA and EU Standard Contractual Clauses.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">7. Your Statutory Rights</h2>
            <p className="legal-paragraph">
              You have the right to request access, correction, erasure, restriction, or portability of your personal data, and to object to processing. To exercise any of these rights, contact us at <a href="mailto:contact@ascendiaprime.com" className="legal-link">contact@ascendiaprime.com</a>.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
