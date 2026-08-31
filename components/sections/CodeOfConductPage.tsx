"use client";

import "@/styles/legal-document.css";

export default function CodeOfConductPage() {
  return (
    <div id="code_of_conduct" className="legal-page-master">
      <div className="legal-container">
        <header className="legal-header">
          <span className="legal-kicker">Professional Standards &amp; Ethics</span>
          <h1 className="legal-title">Partner Code of Conduct</h1>
          <div className="legal-meta">
            <span className="legal-meta-badge">Last Updated: 10 June 2026</span>
            <span>Ascendia Prime Media Ltd · Company No. 16296718</span>
          </div>
        </header>

        <main className="legal-document">
          <section className="legal-section">
            <h2 className="legal-section-title">1. Purpose &amp; Scope</h2>
            <p className="legal-paragraph">
              This Code of Conduct defines the professional, legal, and ethical standards expected of all internal team members, affiliates, publishers, advertisers, media buyers, agencies, and technology suppliers operating across the Ascendia Prime ecosystem.
            </p>
            <p className="legal-paragraph">
              Our business is built upon transparency, accountability, and sustainable performance. We maintain zero tolerance for fraudulent, deceptive, or exploitative practices.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">2. Fundamental Principles</h2>
            <p className="legal-paragraph">
              All partners collaborating with Ascendia Prime must uphold the following core principles:
            </p>
            <ul className="legal-list">
              <li className="legal-list-item"><strong>Integrity &amp; Honesty:</strong> Transparent commercial dealings without deceptive practices.</li>
              <li className="legal-list-item"><strong>Consumer Transparency:</strong> Clear, unambiguous affiliate disclosures and transparent promotional representations.</li>
              <li className="legal-list-item"><strong>Brand Safety:</strong> Safeguarding advertiser brand equity and ensuring clean ad placements.</li>
              <li className="legal-list-item"><strong>Privacy Compliance:</strong> Full adherence to GDPR, ePrivacy, and data protection standards.</li>
              <li className="legal-list-item"><strong>Zero Tolerance for Fraud:</strong> Absolute prohibition of artificial traffic, cookie stuffing, and click injection.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">3. Affiliate Disclosure &amp; Regulatory Compliance</h2>
            <p className="legal-paragraph">
              Affiliate and sponsored content must be clearly identifiable as advertising in accordance with Advertising Standards Authority (ASA), Federal Trade Commission (FTC), and local regulatory rules.
            </p>
            <p className="legal-paragraph">
              Publishers and creators must provide clear, prominent disclosures (e.g. &ldquo;#ad&rdquo;, &ldquo;Affiliate Link&rdquo;, or &ldquo;Sponsored&rdquo;) before users engage with promotional links.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">4. Prohibited Traffic &amp; Marketing Tactics</h2>
            <p className="legal-paragraph">
              The following activities are strictly prohibited across all campaigns:
            </p>
            <ul className="legal-list">
              <li className="legal-list-item">Cookie stuffing, forced clicks, invisible iframes, and misleading redirects.</li>
              <li className="legal-list-item">Fake testimonials, fabricated reviews, or unsubstantiated product claims.</li>
              <li className="legal-list-item">Unauthorized trademark bidding or domain squatting.</li>
              <li className="legal-list-item">Adware, spyware, browser hijackers, or intrusive pop-under networks.</li>
              <li className="legal-list-item">Bot traffic, click farms, and automated impression generation.</li>
              <li className="legal-list-item">Unsolicited spam communications or scraped contact lists.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">5. Brand Safety &amp; Content Guidelines</h2>
            <p className="legal-paragraph">
              Partner campaigns must never appear adjacent to or within content that is illegal, defamatory, discriminatory, sexually explicit, violent, or associated with software piracy or malicious activities.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">6. Enforcement &amp; Penalties</h2>
            <p className="legal-paragraph">
              Violations of this Code of Conduct will result in immediate corrective action, including campaign suspension, forfeiture of commissions generated through non-compliant traffic, and permanent termination from the Ascendia Prime network.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
