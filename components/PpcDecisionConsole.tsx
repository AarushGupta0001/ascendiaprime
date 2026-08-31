"use client";

import { useEffect, useRef, useState } from "react";

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="10" cy="10" r="5.8" />
      <path d="m14.5 14.5 5 5" />
    </svg>
  );
}

function Tick() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12 4 4 10-10" />
    </svg>
  );
}

export default function PpcDecisionConsole() {
  const [run, setRun] = useState(0);
  const consoleRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = consoleRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="ppc-console-wrap">
      <section
        ref={consoleRef}
        key={run}
        className={`ppc-decision-console ${visible ? "is-visible" : ""}`}
        aria-label="PPC live animation"
      >
        <div className="ppc-console-aura" aria-hidden="true" />

        <div className="ppc-platform-strip">
          <span className="ppc-platform ppc-google">
            <i>G</i>Google Search
          </span>
          <span className="ppc-platform ppc-meta">
            <i>M</i>Meta Ads
          </span>
          <span className="ppc-platform ppc-pmax">
            <i>P</i>Performance Max
          </span>
          <b>LIVE OPTIMISATION</b>
        </div>

        <div className="ppc-demand-panel">
          <div className="ppc-panel-kicker">
            <span>INCOMING DEMAND</span>
            <b>QUALIFYING</b>
          </div>

          <div className="ppc-query-field">
            <span>
              <SearchIcon />
            </span>
            <strong>High-intent search detected</strong>
            <i />
          </div>

          <div className="ppc-auction-lane">
            <div className="ppc-auction-track">
              <i className="ppc-auction-fill" />
              <b className="ppc-auction-pulse" />
            </div>

            <div className="ppc-auction-steps">
              <span className="ppc-step-one">
                <i>01</i>
                <strong>Match</strong>
                <em>Relevant</em>
              </span>

              <span className="ppc-step-two">
                <i>02</i>
                <strong>Bid</strong>
                <em>Controlled</em>
              </span>

              <span className="ppc-step-three">
                <i>03</i>
                <strong>Serve</strong>
                <em>Eligible</em>
              </span>
            </div>
          </div>
        </div>

        <div className="ppc-creative-lab">
          <div className="ppc-panel-kicker">
            <span>CREATIVE LAB</span>
            <b>MESSAGE RESPONSE</b>
          </div>

          <div className="ppc-creative-grid">
            <article className="ppc-creative-option ppc-option-a">
              <span>A</span>
              <div>
                <small>Variant</small>
                <strong>Broad message</strong>
                <i />
              </div>
              <em>Exploring</em>
            </article>

            <article className="ppc-creative-option ppc-option-b">
              <span>B</span>
              <div>
                <small>Variant</small>
                <strong>Intent-led message</strong>
                <i />
              </div>
              <em>
                <Tick />
                Prioritised
              </em>
            </article>
          </div>
        </div>

        <div className="ppc-spend-console">
          <div className="ppc-panel-kicker">
            <span>SPEND CONTROL</span>
            <b>EVIDENCE-LED</b>
          </div>

          <div className="ppc-spend-row ppc-explore">
            <span>Exploring</span>
            <div><i /></div>
            <em>Test</em>
          </div>

          <div className="ppc-spend-row ppc-relevant">
            <span>Relevant</span>
            <div><i /></div>
            <em>Learn</em>
          </div>

          <div className="ppc-spend-row ppc-proven">
            <span>Proven path</span>
            <div><i /></div>
            <em>Scale</em>
          </div>

          <p>
            <i />
            Budget emphasis moves only after validation
          </p>
        </div>

        <div className="ppc-verification-strip">
          <article className="ppc-verify-one">
            <span><Tick /></span>
            <div>
              <small>MESSAGE</small>
              <strong>Promise matched</strong>
            </div>
          </article>

          <i className="ppc-verify-link ppc-link-one" />

          <article className="ppc-verify-two">
            <span><Tick /></span>
            <div>
              <small>LANDING PAGE</small>
              <strong>Journey aligned</strong>
            </div>
          </article>

          <i className="ppc-verify-link ppc-link-two" />

          <article className="ppc-verify-three">
            <span><Tick /></span>
            <div>
              <small>TRACKING</small>
              <strong>Action verified</strong>
            </div>
          </article>
        </div>

        <p className="ppc-final-message">
          Scale follows <span>evidence</span> — not assumptions.
        </p>
      </section>
    </div>
  );
}
