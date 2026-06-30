"use client";

import { useEffect, useRef, useState } from "react";

import { resolveForminatorId } from "@/lib/forminator";

type ForminatorEmbedProps = {
  formId?: string;
  className?: string;
  variant?: "default" | "modal" | "homepage";
};

const DEFAULT_FRAME_HEIGHT = 520;

export default function ForminatorEmbed({
  formId,
  className = "",
  variant = "default",
}: ForminatorEmbedProps) {
  const resolvedFormId = resolveForminatorId(formId);
  const [frameHeight, setFrameHeight] = useState(DEFAULT_FRAME_HEIGHT);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      const data = event.data as { type?: string; formId?: string; height?: number };
      if (
        data?.type === "forminator-frame-height" &&
        data.formId === resolvedFormId &&
        typeof data.height === "number" &&
        data.height > 0
      ) {
        setFrameHeight(Math.ceil(data.height) + 8);
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [resolvedFormId]);

  const isHomepage = variant === "homepage";

  return (
    <div
      className={`forminator-embed-shell contact-custom-form ${isHomepage ? "contact-form" : ""} ${className}`.trim()}
      data-form-id={resolvedFormId}
    >
      {status === "loading" && (
        <p className="text-center text-sm text-slate-400 py-8">Loading form...</p>
      )}
      {status === "error" && (
        <p className="contact-error-message text-center py-4">
          Unable to load contact form. Please try again later.
        </p>
      )}
      <iframe
        ref={iframeRef}
        src={`/forminator-frame/${resolvedFormId}`}
        title="Contact form"
        className={`forminator-embed-frame ${status === "error" ? "hidden" : ""} ${status === "loading" ? "opacity-0 absolute pointer-events-none" : ""}`.trim()}
        style={{
          width: "100%",
          border: "none",
          display: "block",
          minHeight: DEFAULT_FRAME_HEIGHT,
          height: frameHeight,
          background: "transparent",
        }}
        scrolling="no"
        onLoad={() => setStatus("ready")}
        onError={() => setStatus("error")}
      />
    </div>
  );
}
