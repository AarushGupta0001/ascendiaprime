"use client";

import "@/styles/legal-document.css";

export default function ComplaintsPolicyPage() {
  return (
    <div id="complaints_policy" className="legal-page-master">
      <div className="legal-container">
        <header className="legal-header">
          <span className="legal-kicker">Dispute Resolution &amp; Governance</span>
          <h1 className="legal-title">Complaints Policy &amp; Procedure</h1>
          <div className="legal-meta">
            <span className="legal-meta-badge">Last Updated: 10 June 2026</span>
            <span>Ascendia Prime Media Ltd · Company No. 16296718</span>
          </div>
        </header>

        <main className="legal-document">
          <section className="legal-section">
            <h2 className="legal-section-title">1. Purpose &amp; Commitment</h2>
            <p className="legal-paragraph">
              Ascendia Prime Media Ltd is committed to delivering exceptional performance marketing solutions while upholding the highest standards of integrity, transparency, and client satisfaction.
            </p>
            <p className="legal-paragraph">
              We recognize that concerns or disputes may occasionally arise. This policy outlines our transparent, formal process for submitting, investigating, and resolving complaints.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">2. Scope of Complaints Covered</h2>
            <p className="legal-paragraph">
              This procedure applies to concerns raised by clients, advertisers, publishers, consumers, and partners regarding:
            </p>
            <ul className="legal-list">
              <li className="legal-list-item">Campaign attribution, tracking discrepancies, or commission validations.</li>
              <li className="legal-list-item">Publisher promotional conduct, traffic quality, or brand safety compliance.</li>
              <li className="legal-list-item">Data privacy, GDPR compliance, or cookie consent matters.</li>
              <li className="legal-list-item">Commercial service delivery, communications, or contractual execution.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">3. How to Submit a Formal Complaint</h2>
            <p className="legal-paragraph">
              Complaints must be submitted in writing to our designated complaints handling desk to ensure full documentation and prompt assignment.
            </p>
            <div className="legal-card-grid">
              <div className="legal-callout-card">
                <div className="legal-card-label">Submission Details</div>
                <div className="legal-card-body">
                  Email: <a href="mailto:contact@ascendiaprime.com" className="legal-link">contact@ascendiaprime.com</a><br />
                  Subject: Formal Complaint — [Company / Account Name]<br />
                  Postal: Ascendia Prime Media Ltd, Unit 13e, First Floor Office, 27 Town Square, Erith, Kent, United Kingdom, DA8 1SE.
                </div>
              </div>
            </div>
            <p className="legal-paragraph">
              To assist our investigation, please provide:
            </p>
            <ul className="legal-list">
              <li className="legal-list-item">Your full name, contact information, and organisation name.</li>
              <li className="legal-list-item">Relevant campaign IDs, publisher links, transaction references, or dates.</li>
              <li className="legal-list-item">A clear explanation of the issue with supporting screenshots or records.</li>
              <li className="legal-list-item">The specific resolution or outcome sought.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">4. Resolution Procedure &amp; Service Standards</h2>
            <p className="legal-paragraph">
              We adhere to the following procedural timelines:
            </p>
            <ul className="legal-list">
              <li className="legal-list-item"><strong>Stage 1 — Formal Acknowledgement:</strong> Within 5 business days of receipt.</li>
              <li className="legal-list-item"><strong>Stage 2 — Impartial Investigation:</strong> Review of system logs, traffic telemetry, and relevant contractual terms by an independent manager.</li>
              <li className="legal-list-item"><strong>Stage 3 — Written Determination:</strong> A comprehensive written findings report provided within 20 business days.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">5. Escalation &amp; Non-Retaliation</h2>
            <p className="legal-paragraph">
              If you remain dissatisfied with our determination, you may request an executive review by a director of Ascendia Prime Media Ltd.
            </p>
            <p className="legal-paragraph">
              Ascendia Prime strictly prohibits any form of retaliation or commercial prejudice against any party raising a genuine complaint in good faith.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
