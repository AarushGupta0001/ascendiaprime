import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

import { parseForminatorHtml } from "@/lib/forminator-parser";
import { FORMINATOR_FRAME_STYLES } from "@/lib/forminator-frame-styles";
import { getForminatorParseId, getForminatorSourceUrl } from "@/lib/forminator";
import { formSuccessMessage } from "@/lib/navigation";

const frameDocCache = new Map<string, { doc: string; timestamp: number }>();

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
        var form = document.querySelector("form.forminator-ui[id^='forminator-module-']");
        var fallback = document.querySelector(".form-submission-fallback");
        var response = document.querySelector(".forminator-response-message.forminator-success, .forminator-response-message.forminator-show");
        
        var height = 0;
        if (form && (form.dataset.forminatorSubmitted === "true" || form.classList.contains("forminator-submitted"))) {
          height = response ? Math.ceil(response.offsetHeight + 24) : 130;
        } else if (form) {
          var formRect = form.getBoundingClientRect();
          var fallbackRect = (fallback && fallback.style.display !== "none" && fallback.offsetHeight > 0) ? fallback.getBoundingClientRect() : null;
          var bottom = fallbackRect ? fallbackRect.bottom : formRect.bottom;
          height = Math.ceil(bottom + 6);
        } else {
          height = Math.min(document.body.scrollHeight, 550);
        }

        if (height > 0 && window.parent && window.parent !== window) {
          window.parent.postMessage(
            { type: "forminator-frame-height", formId: requestedFormId, height: height },
            "*"
          );
        }
      }

      function getSubmitButtons(form) {
        return form.querySelectorAll("button[type='submit'], .forminator-button-submit, button");
      }

      function setSubmitting(form, submitting) {
        form.dataset.forminatorSubmitting = submitting ? "true" : "false";
        getSubmitButtons(form).forEach(function (button) {
          button.disabled = submitting;
          button.setAttribute("aria-disabled", submitting ? "true" : "false");
          if (submitting) {
            button.textContent = "Submitting...";
            button.classList.add("is-submitting");
          }
        });
        notifyHeight();
      }

      function showSuccess(form, customMsg) {
        var alreadySubmitted = form.dataset.forminatorSubmitted === "true";
        form.dataset.forminatorSubmitting = "false";
        form.dataset.forminatorSubmitted = "true";
        form.classList.add("forminator-submitted", "form-submitted");

        form.querySelectorAll(".forminator-row, .forminator-pagination-steps, .forminator-pagination-footer, .forminator-button-submit, button").forEach(function (el) {
          el.style.display = "none";
        });
        document.querySelectorAll(".form-submission-fallback").forEach(function (el) {
          el.style.display = "none";
        });

        var response = form.querySelector(".forminator-response-message");
        if (!response) {
          response = document.createElement("div");
          response.className = "forminator-response-message";
          response.setAttribute("role", "status");
          form.insertBefore(response, form.firstChild);
        }

        if (!alreadySubmitted || !response.textContent || response.textContent.trim() === "") {
          response.textContent = customMsg || successMessage;
        }

        response.className = "forminator-response-message forminator-success forminator-show";
        response.style.display = "block";
        response.removeAttribute("aria-hidden");
        response.setAttribute("aria-live", "polite");
        notifyHeight();
        setTimeout(notifyHeight, 50);
        setTimeout(notifyHeight, 200);
        setTimeout(notifyHeight, 800);
      }

      function showError(form, msg) {
        setSubmitting(form, false);
        var response = form.querySelector(".forminator-response-message");
        if (!response) {
          response = document.createElement("div");
          response.className = "forminator-response-message";
          response.setAttribute("role", "alert");
          form.insertBefore(response, form.firstChild);
        }
        response.textContent = msg;
        response.className = "forminator-response-message forminator-error forminator-show";
        response.style.display = "block";
        response.removeAttribute("aria-hidden");
        notifyHeight();
      }

      function handleLocalSubmit(form, e) {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
          if (e.stopImmediatePropagation) e.stopImmediatePropagation();
        }

        if (form.dataset.forminatorSubmitted === "true" || form.dataset.forminatorSubmitting === "true") {
          return false;
        }

        // Validate Required Fields
        var nameInput = form.querySelector("input[name='name-1']");
        var emailInput = form.querySelector("input[name='email-1'], input[type='email']");

        if (nameInput && !nameInput.value.trim()) {
          showError(form, "Please enter your name.");
          nameInput.focus();
          return false;
        }

        if (emailInput && (!emailInput.value.trim() || !emailInput.value.includes("@"))) {
          showError(form, "Please enter a valid email address.");
          emailInput.focus();
          return false;
        }

        setSubmitting(form, true);

        // Immediate Thank You Transition in popup
        showSuccess(form);

        // Background dispatch
        try {
          var formData = new FormData(form);
          fetch("/api/forminator/ajax", {
            method: "POST",
            body: formData,
            cache: "no-store",
            keepalive: true
          }).catch(function(err) {
            console.warn("Background delivery status:", err);
          });
        } catch(err) {}

        return false;
      }

      function initialise() {
        var form = document.querySelector("form.forminator-ui[id^='forminator-module-']");
        if (!form || form.dataset.forminatorSafeguardsBound === "true") return;

        form.dataset.forminatorSafeguardsBound = "true";
        form.setAttribute("onsubmit", "return false;");

        form.addEventListener("submit", function (e) {
          handleLocalSubmit(form, e);
        }, true);

        var submitBtns = getSubmitButtons(form);
        submitBtns.forEach(function(btn) {
          btn.addEventListener("click", function(e) {
            handleLocalSubmit(form, e);
          }, true);
        });

        // Enforce 250 max character limit on all message/help textareas
        form.querySelectorAll("textarea").forEach(function(ta) {
          if (ta.name === "textarea-1" || ta.name === "textarea-2" || ta.hasAttribute("maxlength") || ta.id.indexOf("textarea") !== -1) {
            ta.setAttribute("maxlength", "250");
          }
        });

        form.querySelectorAll("span[data-limit], .forminator-description span").forEach(function(cnt) {
          if (cnt.getAttribute("data-limit") || (cnt.textContent && cnt.textContent.indexOf("/") !== -1)) {
            cnt.setAttribute("data-limit", "250");
            var parent = cnt.closest(".forminator-field");
            var ta = parent ? parent.querySelector("textarea") : null;
            var currentLen = ta ? ta.value.length : 0;
            cnt.textContent = currentLen + " / 250";
          }
        });

        form.querySelectorAll("textarea").forEach(function(ta) {
          ta.addEventListener("input", function() {
            var parent = ta.closest(".forminator-field");
            if (parent) {
              var cnt = parent.querySelector("span[data-limit], .forminator-description span");
              if (cnt) {
                var len = ta.value.length;
                cnt.textContent = len + " / 250";
              }
            }
          });
        });

        if (window.jQuery) {
          window.jQuery(form)
            .on("before:forminator:form:submit", function (e) {
              if (e) e.preventDefault();
              handleLocalSubmit(form, e);
            })
            .on("forminator:form:submit:success", function () {
              showSuccess(form);
            });

          window.jQuery(document).ajaxSuccess(function(event, xhr, settings) {
            try {
              if (settings && settings.data && typeof settings.data === "string" && settings.data.indexOf("forminator_submit_form") !== -1) {
                var res = typeof xhr.responseJSON !== "undefined" ? xhr.responseJSON : JSON.parse(xhr.responseText);
                if (res && res.success && res.data && res.data.success) {
                  showSuccess(form);
                }
              }
            } catch(e) {}
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

function buildFormSubmitInterceptor(formId: string): string {
  return ``;
}

function buildSuccessHtml(
  formId: string,
  message: string = "Thanks for contacting us! We'll be in touch shortly.",
): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    ${FORMINATOR_FRAME_STYLES}
  </style>
</head>
<body style="background: #0b142f; color: #ffffff; display: flex; align-items: center; justify-content: center; padding: 1.5rem 1rem; min-height: 180px;">
  <div class="forminator-response-message forminator-success forminator-show" role="status" style="display: block; margin: 0 auto; width: 100%; max-width: 540px; text-align: center; border: 1px solid rgba(63, 139, 249, 0.45); border-radius: 0.85rem; background: rgba(63, 139, 249, 0.14); padding: 1.5rem 1.75rem; font-family: Poppins, system-ui, sans-serif; font-size: 1.05rem; line-height: 1.6; color: #ffffff; box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);">
    ${escapeHtml(message)}
  </div>
  <script>
    (function() {
      function notify() {
        var height = Math.max(document.body.scrollHeight, 180);
        if (window.parent && window.parent !== window) {
          window.parent.postMessage({ type: "forminator-frame-height", formId: ${JSON.stringify(formId)}, height: height }, "*");
        }
      }
      notify();
      window.addEventListener("load", notify);
      setTimeout(notify, 50);
      setTimeout(notify, 200);
      setTimeout(notify, 800);
    })();
  </script>
</body>
</html>`;
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
  ${stylesheetTags}
</head>
<body>
  ${formHtml}
  <div class="form-submission-fallback">
    Having trouble submitting the form? Email us at
    <a href="mailto:contact@ascendiaprime.com" target="_blank" rel="noopener noreferrer">contact@ascendiaprime.com</a>
  </div>
  ${scriptTags}
  ${inlineScriptTags}
  <style>${FORMINATOR_FRAME_STYLES}</style>
  ${buildFormInteractionScript(formId)}
</body>
</html>`;
}

export async function POST(request: Request, context: RouteContext) {
  const { formId } = await context.params;

  if (!/^\d+$/.test(formId)) {
    return new NextResponse("Invalid form id", { status: 400 });
  }

  try {
    const contentType = request.headers.get("content-type") || "";

    if (
      contentType.includes("multipart/form-data") ||
      contentType.includes("application/x-www-form-urlencoded")
    ) {
      const formData = await request.formData();
      const params = new URLSearchParams();
      formData.forEach((val, key) => {
        if (typeof val === "string") params.append(key, val);
      });

      fetch("https://ascendiaprime.com/wp-admin/admin-ajax.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" },
        body: params.toString(),
        cache: "no-store",
      }).catch((e) => console.error("POST forwarding error:", e));
    }

    const acceptsHtml =
      request.headers.get("accept")?.includes("text/html") ?? true;

    if (acceptsHtml) {
      return new NextResponse(buildSuccessHtml(formId), {
        status: 200,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "no-store",
        },
      });
    }

    return NextResponse.json({
      success: true,
      data: {
        success: true,
        message: "Thanks for contacting us! We'll be in touch shortly.",
        form_id: formId,
        behav: "behaviour-thankyou",
      },
    });
  } catch (error) {
    console.error("Forminator frame POST error:", error);
    return new NextResponse(buildSuccessHtml(formId), {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  }
}

export async function GET(_request: Request, context: RouteContext) {
  const { formId } = await context.params;

  if (!/^\d+$/.test(formId)) {
    return new NextResponse("Invalid form id", { status: 400 });
  }

  const noCacheHeaders = {
    "Content-Type": "text/html; charset=utf-8",
    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
    Pragma: "no-cache",
    Expires: "0",
  };

  // 1. Prebuilt local disk snapshot (< 2ms)
  const diskCacheFile = path.join(process.cwd(), "lib", `forminator-cache-${formId}.html`);
  if (fs.existsSync(diskCacheFile)) {
    try {
      const localHtml = fs.readFileSync(diskCacheFile, "utf-8");
      const parseId = getForminatorParseId(formId);
      const parsed = parseForminatorHtml(localHtml, parseId);
      if (parsed) {
        const doc = buildFrameDocument(formId, parsed);
        frameDocCache.set(formId, { doc, timestamp: Date.now() });
        return new NextResponse(doc, {
          headers: noCacheHeaders,
        });
      }
    } catch (e) {
      console.warn(`Failed reading local form cache for ${formId}:`, e);
    }
  }

  // 2. In-memory cache hit
  const cached = frameDocCache.get(formId);
  if (cached && Date.now() - cached.timestamp < 30000) {
    return new NextResponse(cached.doc, {
      headers: noCacheHeaders,
    });
  }

  // 3. Fallback: Network fetch with timeout
  try {
    const sourceUrl = getForminatorSourceUrl(formId);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);

    const response = await fetch(sourceUrl, {
      headers: { "User-Agent": "AscendiaPrime-NextJS/1.0" },
      signal: controller.signal,
      cache: "no-store",
    }).finally(() => clearTimeout(timeout));

    if (!response.ok) {
      return new NextResponse("Unable to load form", { status: response.status });
    }

    const html = await response.text();
    const parseId = getForminatorParseId(formId);
    const parsed = parseForminatorHtml(html, parseId);

    if (!parsed) {
      return new NextResponse("Form not found", { status: 404 });
    }

    const doc = buildFrameDocument(formId, parsed);
    frameDocCache.set(formId, { doc, timestamp: Date.now() });

    try {
      fs.writeFileSync(diskCacheFile, html, "utf-8");
    } catch {
      // ignore write error
    }

    return new NextResponse(doc, {
      headers: noCacheHeaders,
    });
  } catch {
    return new NextResponse("Failed to load form", { status: 500 });
  }
}
