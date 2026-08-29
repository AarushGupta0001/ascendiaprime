"use client";

import "@/styles/retargeting.css";
import RetargetingJourney from "@/components/retargeting/RetargetingJourney";
import PageRevealEffects from "@/components/effects/PageRevealEffects";
import { useContactModal } from "@/components/forms/ContactModalProvider";
import ContactForm from "@/components/forms/ContactForm";

const intentRows = [
  [
    "Repeated product or service views",
    "Active consideration or comparison",
    "Clarify value, proof or a useful difference",
    "Reduce exposure; suppress after conversion",
  ],
  [
    "Cart or checkout exit",
    "Friction, uncertainty or interruption",
    "Return to the saved journey; address delivery or trust",
    "Exclude purchasers; cap reminders",
  ],
  [
    "Lead form start",
    "Interest, but the task was interrupted",
    "Make it easy to resume; reduce uncertainty",
    "Suppress completed, invalid or duplicate leads",
  ],
  [
    "High on-site engagement",
    "Strong interest without a clear outcome",
    "Match content or proof to the pages explored",
    "Use recency windows; avoid indefinite pursuit",
  ],
  [
    "Eligible first-party audience",
    "An existing relationship or lifecycle signal",
    "Use a message appropriate to that relationship",
    "Respect consent, purpose and platform eligibility",
  ],
];

const capabilities = [
  [
    "01",
    "Tracking and event validation",
    "We check that useful actions are captured correctly before media decisions depend on them.",
  ],
  [
    "02",
    "Intent-led audience design",
    "Audience rules reflect behaviour, funnel stage, recency and value—not one broad list of site visitors.",
  ],
  [
    "03",
    "Message and creative sequencing",
    "The message develops with the journey, instead of repeating the same advert until it becomes noise.",
  ],
  [
    "04",
    "Dynamic product retargeting",
    "Where the catalogue and platforms allow, products can be matched to genuine browsing or basket behaviour.",
  ],
  [
    "05",
    "Cross-channel delivery",
    "Paid social, search, display, video, programmatic or publisher activity is selected around the opportunity.",
  ],
  [
    "06",
    "Optimisation and reporting",
    "We connect audience, frequency, spend and outcomes so changes can be explained—not merely observed.",
  ],
];

const approach = [
  [
    "Find the lost opportunity",
    "Identify where valuable visitors leave and what a useful return would mean.",
  ],
  [
    "Validate the signals",
    "Confirm the tracking, consent position and volume available for responsible activation.",
  ],
  [
    "Write the rules first",
    "Set eligibility, recency, exclusions, suppression and frequency before buying media.",
  ],
  [
    "Match the next decision",
    "Build the message and destination around the visitor's likely question—not just the product viewed.",
  ],
  [
    "Launch within controls",
    "Activate the right channels and monitor delivery, placement quality and audience health.",
  ],
  [
    "Improve the outcome",
    "Use the evidence to adjust audiences, creative, sequencing, bids and the landing experience.",
  ],
];

const faqs = [
  [
    "What is the difference between retargeting and remarketing?",
    "The terms are often used interchangeably. In practice, retargeting commonly describes paid-media re-engagement, while remarketing can include email and other first-party follow-up. We design the approach around the visitor journey rather than the label.",
  ],
  [
    "Can you retarget people who viewed a product or started a form?",
    "Yes, when the right signals, permissions and platform eligibility are in place. Product views, cart exits, checkout activity, form starts and high-engagement visits can each support different audience rules.",
  ],
  [
    "How do you avoid showing the same advert too often?",
    "Frequency caps, recency windows, exclusions, creative sequencing and converted-user suppression are defined as campaign rules and reviewed during delivery.",
  ],
  [
    "Which channels can be used?",
    "Depending on the audience size and objective, activity may use paid social, search, display, video, programmatic, publisher environments or eligible first-party activation.",
  ],
  [
    "What does reporting include?",
    "Reporting can cover audience rules, reach and frequency where available, spend, return visits, conversion rate, CPA or ROAS, placement visibility, tests and the decisions made from them.",
  ],
  [
    "Do you support both ecommerce and lead generation?",
    "Yes. The operating logic changes by journey: ecommerce may focus on product and checkout recovery, while lead generation may focus on service-page intent and form completion.",
  ],
  [
    "What do you need before launch?",
    "Usually: the business objective, relevant website or CRM signals, existing tracking, channel access, creative inputs, consent requirements and clear conversion definitions. We help identify gaps before activation.",
  ],
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="m4 10 4 4 8-9" />
    </svg>
  );
}

export default function RetargetingPage() {
  const { openContactModal } = useContactModal();

  return (
    <PageRevealEffects>
      <div id="retargeting-master" className="page-master">
        {/* =========================================================
            1. HERO SECTION
            ========================================================= */}
        <section className="hero section-dark" id="hero">
          <div className="ambient a1" />
          <div className="ambient a2" />
          <div className="hero-grid page-shell">
            <div className="hero-copy reveal">
              <p className="eyebrow">
                <span />
                Retargeting Campaigns · Performance Marketing
              </p>
              <h1>
                Retargeting Campaigns Built Around{" "}
                <em>Intent and Control</em>
              </h1>
              <p className="hero-lede">
                AscendiaPrime helps advertisers re-engage high-intent audiences
                through structured retargeting strategies built around audience
                behaviour, frequency control, transparent tracking and measurable
                conversion recovery.
              </p>
              <div className="hero-ctas">
                <button
                  type="button"
                  className="button secondary"
                  onClick={() => openContactModal()}
                >
                  Start a Conversation
                </button>
              </div>
              <ul className="micro-trust" aria-label="Retargeting principles">
                <li>
                  <CheckIcon />
                  Intent-based
                </li>
                <li>
                  <CheckIcon />
                  Frequency-controlled
                </li>
                <li>
                  <CheckIcon />
                  Transparently measured
                </li>
              </ul>
            </div>
            <div className="hero-visual reveal delay">
              <RetargetingJourney />
              <p className="visual-note">
                The sequence is illustrative. Campaign setup and outcomes vary by
                advertiser.
              </p>
            </div>
          </div>
          <div className="scroll-cue">
            <span />
            Explore the system
          </div>
        </section>

        {/* =========================================================
            2. RELEVANCE SECTION
            ========================================================= */}
        <section id="relevance" className="point-section">
          <div className="page-shell editorial-split">
            <div>
              <p className="eyebrow">
                <span />
                Relevant re-engagement
              </p>
              <h2>
                The visitor left. That does not mean the opportunity disappeared.
              </h2>
            </div>
            <div className="editorial-copy">
              <p>
                A product viewer may still be comparing. A cart abandoner may
                have met an unexpected cost. A form starter may simply have run
                out of time. Those moments deserve different responses.
              </p>
              <p>
                We build retargeting around what the person did, how strong the
                signal appears and what would help them take the next step. Just
                as importantly, we define when not to advertise—because the person
                converted, no longer qualifies or has reached an agreed exposure
                limit.
              </p>
              <div className="principle">
                <i>“</i>
                <p>
                  Good retargeting does not chase every visitor. It recognises
                  which return is worth earning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            3. INTENT SIGNAL MAP
            ========================================================= */}
        <section id="signals" className="intent-section">
          <div className="page-shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span />
                  Intent map
                </p>
                <h2>
                  One visit. Different meanings.
                  <br />
                  Different next moves.
                </h2>
              </div>
              <p>
                Audience rules should begin with a business interpretation—not a
                platform preset. This is how we turn common signals into useful
                decisions.
              </p>
            </div>
            <div
              className="intent-table"
              role="table"
              aria-label="Intent signal map"
            >
              <div className="intent-header" role="row">
                <span>Visitor signal</span>
                <span>Possible meaning</span>
                <span>Useful response</span>
                <span>Control</span>
              </div>
              {intentRows.map((row, i) => (
                <div className="intent-row" role="row" key={row[0]}>
                  <b>0{i + 1}</b>
                  {row.map((cell, j) => (
                    <span
                      role="cell"
                      data-label={
                        [
                          "Visitor signal",
                          "Possible meaning",
                          "Useful response",
                          "Control",
                        ][j]
                      }
                      key={cell}
                    >
                      {cell}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            4. CAMPAIGN CAPABILITIES
            ========================================================= */}
        <section id="capabilities" className="capability-section">
          <div className="page-shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span />
                  Campaign capabilities
                </p>
                <h2>
                  The parts that make
                  <br />
                  re-engagement useful.
                </h2>
              </div>
              <p>
                Technology provides the mechanics. Campaign judgement determines
                whether the result feels relevant, controlled and commercially
                worthwhile.
              </p>
            </div>
            <div className="capability-grid">
              {capabilities.map((item) => (
                <article key={item[0]}>
                  <span>{item[0]}</span>
                  <div className="cap-icon" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </div>
                  <h3>{item[1]}</h3>
                  <p>{item[2]}</p>
                  <button
                    type="button"
                    className="cap-cta"
                    onClick={() => openContactModal()}
                  >
                    Explore the logic <ArrowIcon />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            5. OPERATING APPROACH
            ========================================================= */}
        <section id="approach" className="approach-section">
          <div className="page-shell approach-grid">
            <div className="approach-sticky">
              <p className="eyebrow">
                <span />
                Operating approach
              </p>
              <h2>From lost visit to controlled return.</h2>
              <p>
                The campaign is designed as a decision system. Each stage makes
                the next one more defensible—and gives your team a clearer view
                of what is happening.
              </p>
              <button
                type="button"
                className="text-link"
                onClick={() => openContactModal()}
              >
                Talk through your journey <ArrowIcon />
              </button>
            </div>
            <ol className="approach-list">
              {approach.map((step, i) => (
                <li key={step[0]}>
                  <span>0{i + 1}</span>
                  <div>
                    <h3>{step[0]}</h3>
                    <p>{step[1]}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* =========================================================
            6. WHY ASCENDIAPRIME
            ========================================================= */}
        <section id="why-ascendia" className="why-section">
          <div className="page-shell why-layout">
            <div className="why-copy">
              <p className="eyebrow">
                <span />
                Why AscendiaPrime
              </p>
              <h2>
                Managed with judgement,
                <br />
                not left on autopilot.
              </h2>
              <p>
                Platforms can automate bids and delivery. They cannot decide
                whether the campaign logic makes commercial sense, whether a
                placement suits the brand or whether another impression would be
                genuinely useful.
              </p>
              <p>That is where hands-on management matters.</p>
            </div>
            <div className="why-cards">
              <article>
                <span>01</span>
                <h3>Hands-on campaign management</h3>
                <p>
                  Strategy, setup and optimisation stay connected to the outcome
                  your team is trying to create.
                </p>
              </article>
              <article>
                <span>02</span>
                <h3>Traffic and placement-quality controls</h3>
                <p>
                  Eligibility, source quality, exclusions and delivery patterns
                  are reviewed—not assumed.
                </p>
              </article>
              <article>
                <span>03</span>
                <h3>Reporting that explains the decision</h3>
                <p>
                  You see what changed, why it changed and what the evidence
                  suggests should happen next.
                </p>
              </article>
              <article>
                <span>04</span>
                <h3>Commercial flexibility</h3>
                <p>
                  The operating model can reflect the campaign, channel mix and
                  level of management required.
                </p>
              </article>
            </div>
          </div>
          <div className="reach-band">
            <div className="page-shell">
              <strong>17,000+</strong>
              <p>
                <b>publisher relationships across the UK and global markets</b>
                <span>
                  Where publisher distribution adds value to the strategy,
                  AscendiaPrime can draw on this reach. Availability and fit
                  depend on the campaign.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            7. PERFORMANCE VISIBILITY
            ========================================================= */}
        <section id="visibility" className="visibility-section">
          <div className="page-shell visibility-grid">
            <div>
              <p className="eyebrow">
                <span />
                Performance visibility
              </p>
              <h2>You should not have to take “transparent” on trust.</h2>
              <p>
                Reporting should make the next media decision easier to
                understand and approve—not create more dashboards for their own
                sake.
              </p>
            </div>
            <div className="report-card">
              <div className="report-head">
                <span>Campaign decision view</span>
                <i>Live structure</i>
              </div>
              <div className="report-metrics">
                <article>
                  <span>Audience logic</span>
                  <strong>Visible</strong>
                  <small>Rules · exclusions · suppression</small>
                </article>
                <article>
                  <span>Delivery</span>
                  <strong>Controlled</strong>
                  <small>Reach · frequency · placement</small>
                </article>
                <article>
                  <span>Outcome</span>
                  <strong>Connected</strong>
                  <small>Return visits · CPA · ROAS</small>
                </article>
              </div>
              <div className="decision-row">
                <span>Latest optimisation decision</span>
                <p>
                  <i />
                  High-intent product viewers prioritised; recent purchasers
                  excluded.
                </p>
              </div>
              <ul>
                <li>
                  <CheckIcon />
                  Audience rules and suppression
                </li>
                <li>
                  <CheckIcon />
                  Spend and return visits
                </li>
                <li>
                  <CheckIcon />
                  Conversion rate, CPA or ROAS
                </li>
                <li>
                  <CheckIcon />
                  Placement or source visibility
                </li>
                <li>
                  <CheckIcon />
                  Tests, actions and next step
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* =========================================================
            8. WHERE IT WORKS (USE CASES)
            ========================================================= */}
        <section id="use-cases" className="use-section">
          <div className="page-shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span />
                  Where it works
                </p>
                <h2>
                  Built around the journey,
                  <br />
                  not the industry label.
                </h2>
              </div>
              <p>
                The same operating discipline can support different commercial
                models. The signals, creative and success measure change with the
                decision you need the visitor to resume.
              </p>
            </div>
            <div className="use-grid">
              <article>
                <span className="use-label">Ecommerce</span>
                <h3>Help interested shoppers return to the right decision.</h3>
                <ul>
                  <li>Product-view retargeting</li>
                  <li>Cart and checkout recovery</li>
                  <li>Category and offer-page audiences</li>
                  <li>Dynamic product reminders</li>
                  <li>Cross-sell and repeat-purchase journeys</li>
                </ul>
              </article>
              <article>
                <span className="use-label">Lead generation</span>
                <h3>Make it easier to resume a considered enquiry.</h3>
                <ul>
                  <li>Lead-form recovery</li>
                  <li>Service and pricing-page audiences</li>
                  <li>Webinar, demo or consultation completion</li>
                  <li>High-engagement follow-up</li>
                  <li>Eligible first-party activation</li>
                </ul>
              </article>
            </div>
            <p className="channel-note">
              <b>Channel fit comes after audience logic.</b> Paid social, search,
              display, video, programmatic, publisher and first-party activation
              are selected according to audience size, objective, consent,
              eligibility and budget.
            </p>
          </div>
        </section>

        {/* =========================================================
            9. RESPONSIBLE DELIVERY
            ========================================================= */}
        <section id="responsible" className="responsible-section">
          <div className="page-shell responsible-grid">
            <div>
              <p className="eyebrow">
                <span />
                Responsible delivery
              </p>
              <h2>
                Re-engagement must earn attention and respect boundaries.
              </h2>
            </div>
            <div>
              <p>
                Campaign design should reflect the agreed purpose for using data,
                relevant consent requirements and the policies of each
                activation platform.
              </p>
              <p>
                We build eligibility, exclusions, frequency limits and
                suppression into the operating logic so responsible delivery is
                part of the campaign—not an afterthought added to a report.
              </p>
              <div className="control-pills">
                <span>Purpose-led use</span>
                <span>Eligible audiences</span>
                <span>Exposure limits</span>
                <span>Suppression rules</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            10. QUESTIONS, ANSWERED (FAQ)
            ========================================================= */}
        <section id="faq" className="faq-section">
          <div className="page-shell faq-grid">
            <div>
              <p className="eyebrow">
                <span />
                Questions, answered
              </p>
              <h2>What teams usually want to know before launch.</h2>
              <p>
                Need to discuss a specific tracking or audience setup? We can
                work through it with you.
              </p>
              <button
                type="button"
                className="text-link"
                onClick={() => openContactModal()}
              >
                Ask us directly <ArrowIcon />
              </button>
            </div>
            <div className="faq-list">
              {faqs.map((faq, i) => (
                <details key={faq[0]} open={i === 0}>
                  <summary>
                    <span>{faq[0]}</span>
                    <i />
                  </summary>
                  <p>{faq[1]}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            11. CONTACT / CAMPAIGN ENQUIRY
            ========================================================= */}
        <section id="contact" className="contact-section">
          <div className="page-shell contact-grid">
            <div>
              <p className="eyebrow">
                <span />
                Start with the opportunity
              </p>
              <h2>
                The visitor already showed interest. The next message has to
                earn the return.
              </h2>
              <p>
                Tell us where valuable visitors are dropping out, which channels
                you currently use and what a successful return would mean for the
                business. We will help you assess the audience opportunity,
                tracking requirements and the right level of campaign control.
              </p>
              <ul>
                <li>
                  <CheckIcon />
                  No generic media plan
                </li>
                <li>
                  <CheckIcon />
                  Clear next-step assessment
                </li>
                <li>
                  <CheckIcon />
                  Commercial fit discussed upfront
                </li>
              </ul>
            </div>

            <div className="contact-form-shell relative rounded-[1.75rem] p-6 md:p-10 backdrop-blur-xl">
              <ContactForm variant="homepage" />
            </div>
          </div>
        </section>
      </div>
    </PageRevealEffects>
  );
}
