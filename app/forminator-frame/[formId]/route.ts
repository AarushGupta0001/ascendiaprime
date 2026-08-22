import { NextResponse } from "next/server";

import { parseForminatorHtml } from "@/lib/forminator-parser";
import { FORMINATOR_FRAME_STYLES } from "@/lib/forminator-frame-styles";
import { getForminatorParseId, getForminatorSourceUrl } from "@/lib/forminator";
import { formSuccessMessage } from "@/lib/navigation";

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

function buildFormInteractionScript(formId: string): string {
  return `<script>
    (function () {
      var requestedFormId = ${JSON.stringify(formId)};
      var successMessage = ${JSON.stringify(formSuccessMessage)};

      function notifyHeight() {
        var height = Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight,
          document.body.offsetHeight
        );
        if (window.parent && window.parent !== window) {
          window.parent.postMessage(
            { type: "forminator-frame-height", formId: requestedFormId, height: height },
            "*"
          );
        }
      }

      function getSubmitButtons(form) {
        return form.querySelectorAll("button[type='submit'], .forminator-button-submit");
      }

      function setSubmitting(form, submitting) {
        form.dataset.forminatorSubmitting = submitting ? "true" : "false";
        getSubmitButtons(form).forEach(function (button) {
          button.disabled = submitting;
          button.setAttribute("aria-disabled", submitting ? "true" : "false");
        });
        notifyHeight();
      }

      function showSuccess(form) {
        form.dataset.forminatorSubmitting = "false";
        form.dataset.forminatorSubmitted = "true";

        getSubmitButtons(form).forEach(function (button) {
          button.disabled = true;
          button.setAttribute("aria-disabled", "true");
        });

        var response = form.querySelector(".forminator-response-message");
        if (!response) {
          response = document.createElement("div");
          response.className = "forminator-response-message";
          response.setAttribute("role", "status");
          form.insertBefore(response, form.firstChild);
        }

        response.textContent = successMessage;
        response.className = "forminator-response-message forminator-success forminator-show";
        response.removeAttribute("aria-hidden");
        response.setAttribute("aria-live", "polite");
        notifyHeight();
      }

      function initialise() {
        var form = document.querySelector("form.forminator-ui[id^='forminator-module-']");
        if (!form || form.dataset.forminatorSafeguardsBound === "true") return;

        form.dataset.forminatorSafeguardsBound = "true";
        if (window.jQuery) {
          window.jQuery(form)
            .on("before:forminator:form:submit", function () {
              if (form.dataset.forminatorSubmitted !== "true") setSubmitting(form, true);
            })
            .on("forminator:form:submit:success", function () {
              showSuccess(form);
            })
            .on("forminator:form:submit:failed", function () {
              if (form.dataset.forminatorSubmitted !== "true") setSubmitting(form, false);
            });
        }
      }

      initialise();
      window.addEventListener("load", initialise);
      if (typeof ResizeObserver !== "undefined") {
        new ResizeObserver(notifyHeight).observe(document.body);
      } else {
        setInterval(notifyHeight, 500);
      }
      window.addEventListener("load", notifyHeight);
      setTimeout(notifyHeight, 100);
      setTimeout(notifyHeight, 500);
      setTimeout(notifyHeight, 1500);
    })();
  </script>`;
}

function buildFormSubmitInterceptor(): string {
  return `
  <script>
    (function () {
      function initFormSubmitInterceptor() {
        var form = document.querySelector("form.forminator-ui[id^='forminator-module-']");
        if (!form || form.dataset.localSubmitInterceptor === "true") {
          return;
        }

        form.dataset.localSubmitInterceptor = "true";

        document.addEventListener("submit", async function (event) {
          if (event.target !== form) {
            return;
          }

          event.preventDefault();
          event.stopImmediatePropagation();

          if (form.dataset.localSubmitting === "true") {
            return;
          }

          form.dataset.localSubmitting = "true";

          var submitButton = form.querySelector(
            "button[type='submit'], .forminator-button-submit"
          );

          if (submitButton) {
            submitButton.disabled = true;
            submitButton.setAttribute("aria-disabled", "true");
          }

          var responseElement = form.querySelector(
            ".forminator-response-message"
          );

          try {
            var formData = new FormData(form);

            var response = await fetch("/api/forminator/ajax", {
              method: "POST",
              body: formData,
              cache: "no-store"
            });

            var result = await response.json();

            if (
              result &&
              result.success === true &&
              result.data &&
              result.data.success === true
            ) {
              if (!responseElement) {
                responseElement = document.createElement("div");
                responseElement.className =
                  "forminator-response-message";
                responseElement.setAttribute("role", "status");
                form.insertBefore(responseElement, form.firstChild);
              }

              responseElement.textContent =
                result.data.message ||
                "Thanks for contacting us! We'll be in touch shortly.";

              responseElement.className =
                "forminator-response-message forminator-success forminator-show";

              responseElement.removeAttribute("aria-hidden");
              responseElement.setAttribute("aria-live", "polite");

              form.querySelectorAll(".forminator-row").forEach(function (row) {
                row.style.display = "none";
              });
            } else {
              throw new Error(
                result &&
                result.data &&
                result.data.message
                  ? result.data.message
                  : "Form submission failed."
              );
            }
          } catch (error) {
            console.error("Local Forminator submission error:", error);

            if (!responseElement) {
              responseElement = document.createElement("div");
              responseElement.className =
                "forminator-response-message";
              responseElement.setAttribute("role", "alert");
              form.insertBefore(responseElement, form.firstChild);
            }

            responseElement.textContent =
              error && error.message
                ? error.message
                : "Unable to submit the form. Please try again.";

            responseElement.className =
              "forminator-response-message forminator-error forminator-show";

            responseElement.removeAttribute("aria-hidden");
          } finally {
            form.dataset.localSubmitting = "false";

            if (submitButton) {
              submitButton.disabled = false;
              submitButton.removeAttribute("aria-disabled");
            }
          }
        }, true);
      }

      initFormSubmitInterceptor();
      window.addEventListener("load", initFormSubmitInterceptor);
    })();
  </script>`;
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
    .map((content) => {
      const rewritten = content.replace(
        /https:\/\/ascendiaprime\.com\/wp-admin\/admin-ajax\.php/g,
        "/api/forminator/ajax",
      );

      return `<script>${rewritten}</script>`;
    })
    .join("\n");

  const formHtml = parsed.formHtml.replace(
    /data-forminator-render="1"/g,
    'data-forminator-render="0"',
  );

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <base target="_parent" />
  ${stylesheetTags}
</head>
<body>
  ${formHtml}
  ${scriptTags}
  ${inlineScriptTags}
  <style>${FORMINATOR_FRAME_STYLES}</style>
  ${buildFormInteractionScript(formId)}
  ${buildFormSubmitInterceptor()}
</body>
</html>`;
}


export async function POST(request: Request, context: RouteContext) {
  const { formId } = await context.params;

  if (!/^\d+$/.test(formId)) {
    return NextResponse.json(
      { error: "Invalid form id" },
      { status: 400 },
    );
  }

  try {
    const body = await request.arrayBuffer();

    const response = await fetch(
      "https://ascendiaprime.com/wp-admin/admin-ajax.php",
      {
        method: "POST",
        headers: {
          "Content-Type":
            request.headers.get("content-type") ??
            "application/x-www-form-urlencoded; charset=UTF-8",
          "User-Agent": "AscendiaPrime-NextJS/1.0",
        },
        body,
        cache: "no-store",
      },
    );

    const responseBody = await response.arrayBuffer();

    return new NextResponse(responseBody, {
      status: response.status,
      headers: {
        "Content-Type":
          response.headers.get("content-type") ??
          "application/json; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Forminator frame POST error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to process Forminator submission",
      },
      { status: 502 },
    );
  }
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
      cache: "no-store",
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
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    });
  } catch {
    return new NextResponse("Failed to load form", { status: 500 });
  }
}
