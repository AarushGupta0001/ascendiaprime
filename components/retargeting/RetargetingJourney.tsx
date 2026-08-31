"use client";

import { useEffect, useMemo, useState } from "react";

const steps = [
  "Signal detected",
  "Intent interpreted",
  "Controls checked",
  "Message selected",
  "User re-engaged",
  "Outcome verified",
];

export default function RetargetingJourney() {
  const [phase, setPhase] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setPhase(5);
      return;
    }
    const timer = window.setTimeout(
      () => {
        setPhase((current) => (current === 5 ? 0 : current + 1));
      },
      phase === 5 ? 1700 : 1050
    );
    return () => window.clearTimeout(timer);
  }, [phase, reducedMotion]);

  const status = useMemo(() => steps[phase], [phase]);

  return (
    <div
      className={`journey-panel phase-${phase}`}
      aria-label="The AscendiaPrime intent recovery journey"
      aria-describedby="journey-summary"
    >
      <p id="journey-summary" className="sr-only">
        An illustrative sequence showing a visitor behaviour signal being
        interpreted, checked against campaign controls, matched with a relevant
        message and measured when the visitor returns.
      </p>

      <div className="structured-stage">
        <svg
          className="structured-paths"
          viewBox="0 0 620 380"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="journeyGradient" x1="0" x2="1">
              <stop offset="0%" stopColor="#3F8BF9" />
              <stop offset="35%" stopColor="#7469F8" />
              <stop offset="70%" stopColor="#AB57F3" />
              <stop offset="100%" stopColor="#E057D8" />
            </linearGradient>
            <filter
              id="journeyGlow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <marker
              id="arrowHead"
              viewBox="0 0 8 8"
              refX="6"
              refY="4"
              markerWidth="4"
              markerHeight="4"
              orient="auto-start-reverse"
            >
              <path d="M 1 1.5 L 7 4 L 1 6.5 z" fill="rgba(63, 139, 249, 0.45)" />
            </marker>
            <marker
              id="activeArrow"
              viewBox="0 0 8 8"
              refX="6"
              refY="4"
              markerWidth="4"
              markerHeight="4"
              orient="auto-start-reverse"
            >
              <path d="M 1 1.5 L 7 4 L 1 6.5 z" fill="#3F8BF9" />
            </marker>
          </defs>

          {/* Static base paths (edge-to-edge between cards) */}
          <path
            className="connection-base"
            d="M194 91 L220 91"
            markerEnd="url(#arrowHead)"
          />
          <path
            className="connection-base"
            d="M400 91 L426 91"
            markerEnd="url(#arrowHead)"
          />
          <path
            className="connection-base"
            d="M516 168 L516 211"
            markerEnd="url(#arrowHead)"
          />
          <path
            className="connection-base"
            d="M426 289 L400 289"
            markerEnd="url(#arrowHead)"
          />
          <path
            className="connection-base"
            d="M220 289 L194 289"
            markerEnd="url(#arrowHead)"
          />

          {/* Active animated paths */}
          <path
            className={`connection-active ${phase >= 1 ? "complete" : ""}`}
            d="M194 91 L220 91"
            markerEnd="url(#activeArrow)"
          />
          <path
            className={`connection-active ${phase >= 2 ? "complete" : ""}`}
            d="M400 91 L426 91"
            markerEnd="url(#activeArrow)"
          />
          <path
            className={`connection-active ${phase >= 3 ? "complete" : ""}`}
            d="M516 168 L516 211"
            markerEnd="url(#activeArrow)"
          />
          <path
            className={`connection-active ${phase >= 4 ? "complete" : ""}`}
            d="M426 289 L400 289"
            markerEnd="url(#activeArrow)"
          />
          <path
            className={`connection-active ${phase >= 5 ? "complete" : ""}`}
            d="M220 289 L194 289"
            markerEnd="url(#activeArrow)"
          />

          {/* Traveling particle lights with PPC palette */}
          {phase === 1 && !reducedMotion && (
            <circle key="p12" r="3.5" fill="#3F8BF9" filter="url(#journeyGlow)">
              <animateMotion dur=".75s" fill="freeze" path="M194 91 L220 91" />
            </circle>
          )}
          {phase === 2 && !reducedMotion && (
            <circle key="p23" r="3.5" fill="#7469F8" filter="url(#journeyGlow)">
              <animateMotion dur=".75s" fill="freeze" path="M400 91 L426 91" />
            </circle>
          )}
          {phase === 3 && !reducedMotion && (
            <circle key="p34" r="3.5" fill="#AB57F3" filter="url(#journeyGlow)">
              <animateMotion
                dur=".75s"
                fill="freeze"
                path="M516 168 L516 211"
              />
            </circle>
          )}
          {phase === 4 && !reducedMotion && (
            <circle key="p45" r="3.5" fill="#E057D8" filter="url(#journeyGlow)">
              <animateMotion
                dur=".75s"
                fill="freeze"
                path="M426 289 L400 289"
              />
            </circle>
          )}
          {phase === 5 && !reducedMotion && (
            <circle key="p56" r="3.5" fill="#3F8BF9" filter="url(#journeyGlow)">
              <animateMotion
                dur=".75s"
                fill="freeze"
                path="M220 289 L194 289"
              />
            </circle>
          )}
        </svg>

        <div className="stage-grid">
          <article
            className={`stage-card stage-one ${phase === 0 ? "active" : ""}`}
          >
            <span className="stage-number">01</span>
            <span className="stage-kicker">Signal capture</span>
            <strong>Behaviour becomes visible</strong>
            <div className="journey-details">
              <span>Website and product activity</span>
              <span>Cart and form events</span>
              <span>CRM / first-party signals</span>
            </div>
          </article>

          <article
            className={`stage-card stage-two ${phase === 1 ? "active" : ""}`}
          >
            <span className="stage-number">02</span>
            <span className="stage-kicker">Audience and intent</span>
            <strong>Signals become segments</strong>
            <div className="journey-details">
              <span>Behaviour and engagement</span>
              <span>Funnel stage and intent</span>
              <span>Audience rules applied</span>
            </div>
          </article>

          <article
            className={`stage-card stage-three ${phase === 2 ? "active" : ""}`}
          >
            <span className="stage-number">03</span>
            <span className="stage-kicker">Eligibility and controls</span>
            <strong>Responsible delivery</strong>
            <div className="journey-details controls">
              <span>Consent alignment</span>
              <span>Frequency caps and exclusions</span>
              <span>Converted-user suppression</span>
            </div>
          </article>

          <article
            className={`stage-card stage-four ${phase === 3 ? "active" : ""}`}
          >
            <span className="stage-number">04</span>
            <span className="stage-kicker">Re-engagement delivery</span>
            <strong>Relevant message delivered</strong>
            <div className="journey-details">
              <span>Message matched to intent</span>
              <span>Channel and timing aligned</span>
              <span>Sequential delivery where useful</span>
            </div>
          </article>

          <article
            className={`stage-card stage-five ${phase === 4 ? "active" : ""}`}
          >
            <span className="stage-number">05</span>
            <span className="stage-kicker">Return experience</span>
            <strong>The journey resumes</strong>
            <div className="journey-details">
              <span>Relevant landing experience</span>
              <span>Product, checkout or form resumed</span>
              <span>Campaign response connected</span>
            </div>
          </article>

          <article
            className={`stage-card stage-six ${phase === 5 ? "active" : ""}`}
          >
            <span className="stage-number">06</span>
            <span className="stage-kicker">Measure and improve</span>
            <strong>The loop informs action</strong>
            <div className="journey-details success-list">
              <span>Response or conversion event</span>
              <span>Source and placement visibility</span>
              <span>Optimise and refresh audiences</span>
            </div>
          </article>
        </div>
      </div>

      <div className="phase-footer" aria-live="polite">
        <span className="phase-status">
          <i />
          {status}
        </span>
        <div className="phase-dots" aria-hidden="true">
          {steps.map((_, index) => (
            <i key={index} className={index <= phase ? "complete" : ""} />
          ))}
        </div>
        <span className="phase-count">0{phase + 1} / 06</span>
      </div>
    </div>
  );
}
