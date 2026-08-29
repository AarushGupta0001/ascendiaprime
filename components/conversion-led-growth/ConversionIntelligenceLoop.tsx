"use client";

import { useEffect, useState } from "react";

const phases = [
  {
    label: "Lost intent detected",
    short: "Detect",
    detail: "Behaviour signals reveal where momentum is breaking.",
  },
  {
    label: "Friction diagnosed",
    short: "Diagnose",
    detail: "Message, trust and action barriers are separated.",
  },
  {
    label: "Experience aligned",
    short: "Improve",
    detail: "The next useful change is matched to each barrier.",
  },
  {
    label: "Qualified outcome verified",
    short: "Validate",
    detail: "Tracking confirms the action and its commercial meaning.",
  },
  {
    label: "Next decision informed",
    short: "Learn",
    detail: "Evidence returns to targeting, creative and journey planning.",
  },
];

const friction = [
  {
    key: "message",
    problem: "Message mismatch",
    fix: "Promise aligned",
    icon: "↯",
  },
  {
    key: "trust",
    problem: "Trust gap",
    fix: "Proof positioned",
    icon: "◇",
  },
  {
    key: "action",
    problem: "Form friction",
    fix: "Action simplified",
    icon: "↗",
  },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path
        d="m4 10 4 4 8-9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ConversionIntelligenceLoop() {
  const [phase, setPhase] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setInterval(() => {
      setPhase((current) => (current + 1) % phases.length);
    }, 1700);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion]);

  const improved = phase >= 2;

  const replay = () => {
    setPhase(0);
    setPaused(false);
  };

  return (
    <div
      className={`loop-panel phase-${phase + 1}`}
      aria-label="Illustrative conversion intelligence loop"
      aria-describedby="loop-summary"
    >
      <p id="loop-summary" className="sr-only">
        Campaign signals enter a five-stage post-click journey. Message
        mismatch, a trust gap and form friction are diagnosed and improved. A
        qualified outcome is verified, and the evidence informs the next campaign
        decision.
      </p>

      <div className="panel-head">
        <div>
          <span className="live-dot" aria-hidden="true" />
          <b>Conversion intelligence loop</b>
        </div>
        <div className="panel-actions">
          <span>Illustrative</span>
          <button
            type="button"
            onClick={() => setPaused((value) => !value)}
            aria-label={paused ? "Resume animation" : "Pause animation"}
            title={paused ? "Resume" : "Pause"}
          >
            {paused ? "▶" : "Ⅱ"}
          </button>
          <button
            type="button"
            onClick={replay}
            aria-label="Replay animation"
            title="Replay"
          >
            ↻
          </button>
        </div>
      </div>

      <div className="loop-stage">
        <div className="signal-row">
          <span>Campaign signals</span>
          <i>Paid search</i>
          <i>Partner media</i>
          <i>Paid social</i>
        </div>

        <svg className="feedback-arc" viewBox="0 0 660 500" aria-hidden="true">
          <defs>
            <linearGradient
              id="clgLoopGradient"
              x1="0"
              y1="1"
              x2="0"
              y2="0"
            >
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="45%" stopColor="#7469F8" />
              <stop offset="100%" stopColor="#3F8BF9" />
            </linearGradient>
            <marker
              id="clgLoopArrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto"
            >
              <path d="M0 0 L10 5 L0 10z" fill="#38BDF8" />
            </marker>
          </defs>
          <path
            className="arc-base"
            d="M446 395 C528 395 620 392 620 326 L620 130 C620 92 605 72 578 69"
          />
          <path
            className="arc-active"
            d="M446 395 C528 395 620 392 620 326 L620 130 C620 92 605 72 578 69"
            markerEnd="url(#clgLoopArrow)"
          />
          <circle
            className="arc-port outcome-port"
            cx="446"
            cy="395"
            r="3.5"
          />
          <circle
            className="arc-port signal-port"
            cx="578"
            cy="69"
            r="3.5"
          />
        </svg>

        <span className="feedback-label">
          <i aria-hidden="true" />
          Evidence informs
          <br />
          the next decision
        </span>

        <div className="intent-stream" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>

        <div className="scanner" aria-hidden="true">
          <span>Diagnostic scan</span>
        </div>

        <div className="funnel">
          <article className="funnel-layer layer-1">
            <span>01</span>
            <div>
              <small>Acquisition</small>
              <strong>Campaign signal</strong>
            </div>
            <i className="layer-state">Intent enters</i>
          </article>
          <article className="funnel-layer layer-2">
            <span>02</span>
            <div>
              <small>Message match</small>
              <strong>Landing relevance</strong>
            </div>
            <i className="layer-state">Promise continues</i>
          </article>
          <article className="funnel-layer layer-3">
            <span>03</span>
            <div>
              <small>Decision support</small>
              <strong>Confidence &amp; clarity</strong>
            </div>
            <i className="layer-state">Questions resolved</i>
          </article>
          <article className="funnel-layer layer-4">
            <span>04</span>
            <div>
              <small>Path to action</small>
              <strong>Action completion</strong>
            </div>
            <i className="layer-state">Effort reduced</i>
          </article>
          <article className="funnel-layer layer-5">
            <span>05</span>
            <div>
              <small>Measured value</small>
              <strong>Qualified outcome</strong>
            </div>
            <i className="layer-state">Verified</i>
          </article>
        </div>

        <div className={`friction-note message ${improved ? "resolved" : ""}`}>
          <b>{friction[0].icon}</b>
          <span>
            <small>{improved ? "Improvement" : "Friction signal"}</small>
            {improved ? friction[0].fix : friction[0].problem}
          </span>
        </div>

        <div className={`friction-note trust ${improved ? "resolved" : ""}`}>
          <b>{friction[1].icon}</b>
          <span>
            <small>{improved ? "Improvement" : "Friction signal"}</small>
            {improved ? friction[1].fix : friction[1].problem}
          </span>
        </div>

        <div className={`friction-note action ${improved ? "resolved" : ""}`}>
          <b>{friction[2].icon}</b>
          <span>
            <small>{improved ? "Improvement" : "Friction signal"}</small>
            {improved ? friction[2].fix : friction[2].problem}
          </span>
        </div>

        <div className="verification-strip">
          <span>
            <CheckIcon />
            Event verified
          </span>
          <span>
            <CheckIcon />
            Quality reviewed
          </span>
          <span>
            <CheckIcon />
            Decision informed
          </span>
        </div>
      </div>

      <div className="panel-foot" aria-live="polite">
        <div>
          <span className="status-dot" aria-hidden="true" />
          <b>{phases[phase].label}</b>
          <p>{phases[phase].detail}</p>
        </div>
        <div className="phase-nav" aria-hidden="true">
          {phases.map((item, index) => (
            <i
              key={item.short}
              className={index <= phase ? "complete" : ""}
            />
          ))}
        </div>
        <code>0{phase + 1} / 05</code>
      </div>
    </div>
  );
}
