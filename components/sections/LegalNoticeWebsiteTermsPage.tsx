"use client";

import "@/styles/legal-document.css";

export default function LegalNoticeWebsiteTermsPage() {
  return (
    <div id="legal_notice_website_terms" className="legal-page-master">
      <div className="legal-container">
        <header className="legal-header">
          <span className="legal-kicker">Terms of Service</span>
          <h1 className="legal-title">Legal Notice &amp; Website Terms</h1>
          <div className="legal-meta">
            <span className="legal-meta-badge">Last Updated: 10 June 2026</span>
            <span>Ascendia Prime Media Ltd · Company No. 16296718</span>
          </div>
        </header>

        <main className="legal-document">
          <section className="legal-section">
            <h2 className="legal-section-title">1. Corporate Information</h2>
            <p className="legal-paragraph">
              This website is owned and operated by Ascendia Prime Media Ltd (&ldquo;Ascendia Prime&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), a company registered in England and Wales under company number 16296718.
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
            </div>
            <p className="legal-paragraph">
              By accessing or browsing this website, you agree to comply with and be bound by these Terms of Use. If you do not agree, you must discontinue use immediately.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">2. Nature of Information &amp; Disclaimer</h2>
            <p className="legal-paragraph">
              The content on this website is provided for general informational purposes only. Nothing contained on this site constitutes professional, financial, tax, or legal advice.
            </p>
            <p className="legal-paragraph">
              While we strive to ensure that all information is accurate and up to date, we make no representations or warranties of any kind, express or implied, regarding completeness, accuracy, reliability, or availability.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">3. Intellectual Property Rights</h2>
            <p className="legal-paragraph">
              All materials, trademarks, logos, brand assets, graphics, text, software code, and visual designs on this website are the intellectual property of Ascendia Prime Media Ltd or its licensors and are protected under UK and international copyright laws.
            </p>
            <p className="legal-paragraph">
              You may view, download, and print materials for personal, non-commercial use only. Any reproduction, distribution, modification, or commercial exploitation without prior written consent is strictly prohibited.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">4. Commercial Services &amp; Agreements</h2>
            <p className="legal-paragraph">
              Any commercial engagement, performance marketing campaign, insertion order, or publisher partnership with Ascendia Prime is governed by a separate, signed written agreement. In the event of any conflict between these website terms and a formal master service agreement (MSA), the signed commercial contract shall govern.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">5. Acceptable Use Policy</h2>
            <p className="legal-paragraph">
              When using this website, you agree not to:
            </p>
            <ul className="legal-list">
              <li className="legal-list-item">Engage in unlawful, fraudulent, or harmful activity.</li>
              <li className="legal-list-item">Attempt to gain unauthorized access to servers, databases, or restricted networks.</li>
              <li className="legal-list-item">Scrape, crawl, or harvest content or personal data using automated tools without written authorization.</li>
              <li className="legal-list-item">Introduce malicious software, viruses, or disruptive code.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">6. Limitation of Liability</h2>
            <p className="legal-paragraph">
              To the maximum extent permitted by applicable law, Ascendia Prime Media Ltd shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of, or inability to use, this website.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">7. Governing Law &amp; Jurisdiction</h2>
            <p className="legal-paragraph">
              These terms and any disputes arising out of or in connection with them shall be governed by and construed in accordance with the laws of England and Wales. The courts of England and Wales shall have exclusive jurisdiction.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
