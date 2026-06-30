import { NextResponse } from "next/server";

import { parseForminatorHtml } from "@/lib/forminator-parser";
import { FORMINATOR_FRAME_STYLES } from "@/lib/forminator-frame-styles";
import { getForminatorParseId, getForminatorSourceUrl } from "@/lib/forminator";

type RouteContext = {
  params: Promise<{ formId: string }>;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildFrameDocument(formId: string, parsed: ReturnType<typeof parseForminatorHtml>): string {
  if (!parsed) {
    return `<!DOCTYPE html><html><body><p>Form unavailable.</p></body></html>`;
  }

  const stylesheetTags = parsed.stylesheets
    .map((href) => `<link rel="stylesheet" href="${escapeHtml(href)}" />`)
    .join("\n");
  const scriptTags = parsed.scripts
    .map((src) => `<script src="${escapeHtml(src)}"></script>`)
    .join("\n");
  const inlineScriptTags = parsed.inlineScripts
    .map((content) => `<script>${content}</script>`)
    .join("\n");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <base target="_parent" />
  ${stylesheetTags}
</head>
<body>
  ${parsed.formHtml}
  ${scriptTags}
  ${inlineScriptTags}
  <style>${FORMINATOR_FRAME_STYLES}</style>
  <script>
    (function () {
      var formId = ${JSON.stringify(formId)};
      function notifyHeight() {
        var height = Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight,
          document.body.offsetHeight
        );
        if (window.parent && window.parent !== window) {
          window.parent.postMessage(
            { type: "forminator-frame-height", formId: formId, height: height },
            "*"
          );
        }
      }
      window.addEventListener("load", notifyHeight);
      if (typeof ResizeObserver !== "undefined") {
        new ResizeObserver(notifyHeight).observe(document.body);
      } else {
        setInterval(notifyHeight, 500);
      }
      setTimeout(notifyHeight, 100);
      setTimeout(notifyHeight, 500);
      setTimeout(notifyHeight, 1500);
    })();
  </script>
</body>
</html>`;
}

export async function GET(_request: Request, context: RouteContext) {
  const { formId } = await context.params;

  if (!/^\d+$/.test(formId)) {
    return new NextResponse("Invalid form id", { status: 400 });
  }

  try {
    const sourceUrl = getForminatorSourceUrl(formId);
    const response = await fetch(sourceUrl, {
      headers: { "User-Agent": "AscendiaPrime-NextJS/1.0" },
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      return new NextResponse("Unable to load form", { status: response.status });
    }

    const html = await response.text();
    const parseId = getForminatorParseId(formId);
    const parsed = parseForminatorHtml(html, parseId);

    if (!parsed) {
      return new NextResponse("Form not found", { status: 404 });
    }

    return new NextResponse(buildFrameDocument(formId, parsed), {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch {
    return new NextResponse("Failed to load form", { status: 500 });
  }
}
