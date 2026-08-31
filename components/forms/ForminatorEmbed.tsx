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
      className={`forminator-embed-shell contact-custom-form relative ${isHomepage ? "contact-form" : ""} ${className}`.trim()}
      data-form-id={resolvedFormId}
    >
      {status === "loading" && (
        <div className="w-full space-y-4 py-4 animate-pulse">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="h-12 bg-white/5 border border-white/10 rounded-xl"></div>
            <div className="h-12 bg-white/5 border border-white/10 rounded-xl"></div>
          </div>
          <div className="h-12 bg-white/5 border border-white/10 rounded-xl"></div>
          <div className="h-28 bg-white/5 border border-white/10 rounded-xl"></div>
          <div className="h-12 w-40 bg-gradient-to-r from-blue-600/40 to-purple-600/40 rounded-full"></div>
        </div>
      )}
      {status === "error" && (
        <p className="contact-error-message text-center py-4 text-slate-300">
          Unable to load contact form. Please email us directly at{" "}
          <a href="mailto:contact@ascendiaprime.com" className="text-[#3F8BF9] underline">
            contact@ascendiaprime.com
          </a>
        </p>
      )}
      <iframe
        ref={iframeRef}
        src={`/forminator-frame/${resolvedFormId}`}
        title="Contact form"
        className={`forminator-embed-frame transition-opacity duration-300 ${status === "error" ? "hidden" : ""} ${status === "loading" ? "opacity-0 absolute top-0 left-0 pointer-events-none" : "opacity-100"}`.trim()}
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
