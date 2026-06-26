"use client";

import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import type { ContactFormData } from "@/types/contact";

type ContactFormProps = {
  className?: string;
  variant?: "default" | "modal" | "homepage";
};

const MESSAGE_MAX = 180;

export default function ContactForm({ className = "", variant = "default" }: ContactFormProps) {
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");
  const [messageLength, setMessageLength] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      website: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitState("loading");
    setServerMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setSubmitState("error");
        setServerMessage(result.message ?? "Failed to send message.");
        return;
      }

      setSubmitState("success");
      setServerMessage(result.message);
      reset();
      setMessageLength(0);
    } catch {
      setSubmitState("error");
      setServerMessage("Something went wrong. Please try again.");
    }
  };

  const isHomepage = variant === "homepage";
  const inputClass =
    variant === "modal" ? "contact-input contact-input-modal" : isHomepage ? "" : "contact-input";

  if (submitState === "success") {
    return (
      <div className={`contact-form-success ${className}`}>
        <div className="rounded-2xl border border-[#3F8BF9]/30 bg-[#3F8BF9]/10 p-8 text-center">
          <svg className="mx-auto mb-4 h-12 w-12 text-[#3F8BF9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <p className="text-lg font-medium text-white">{serverMessage}</p>
        </div>
      </div>
    );
  }

  const fieldWrap = (content: ReactNode) =>
    isHomepage ? <div className="contact-row"><div className="contact-field">{content}</div></div> : <div>{content}</div>;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`contact-form ${isHomepage ? "contact-custom-form" : ""} ${className}`.trim()}
      noValidate
    >
      <div className={isHomepage ? "space-y-0" : "space-y-5"}>
        {fieldWrap(
          <>
            <label htmlFor="contact-name" className={isHomepage ? undefined : "contact-label"}>
              {isHomepage ? (
                <>
                  Full Name <span className="text-[#3F8BF9]">*</span>
                </>
              ) : (
                "Name *"
              )}
            </label>
            <input
              id="contact-name"
              type="text"
              className={inputClass}
              autoComplete="name"
              {...register("name", { required: "Full name is required", minLength: { value: 2, message: "Name must be at least 2 characters" } })}
            />
            {errors.name && <p className="contact-error-message">{errors.name.message}</p>}
          </>,
        )}

        {fieldWrap(
          <>
            <label htmlFor="contact-email" className={isHomepage ? undefined : "contact-label"}>
              {isHomepage ? (
                <>
                  Email Address <span className="text-[#3F8BF9]">*</span>
                </>
              ) : (
                "Email *"
              )}
            </label>
            <input
              id="contact-email"
              type="email"
              className={inputClass}
              autoComplete="email"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
              })}
            />
            {errors.email && <p className="contact-error-message">{errors.email.message}</p>}
          </>,
        )}

        {fieldWrap(
          <>
            <label htmlFor="contact-phone" className={isHomepage ? undefined : "contact-label"}>
              {isHomepage ? (
                <>
                  Phone Number <span className="text-[#3F8BF9]">*</span>
                </>
              ) : (
                "Phone"
              )}
            </label>
            <input
              id="contact-phone"
              type="tel"
              className={inputClass}
              autoComplete="tel"
              {...register("phone", isHomepage ? { required: "Phone number is required" } : {})}
            />
            {errors.phone && <p className="contact-error-message">{errors.phone.message}</p>}
          </>,
        )}

        {fieldWrap(
          <>
            <label htmlFor="contact-company" className={isHomepage ? undefined : "contact-label"}>
              {isHomepage ? (
                <>
                  Company Name <span className="text-[#3F8BF9]">*</span>
                </>
              ) : (
                "Company"
              )}
            </label>
            <input
              id="contact-company"
              type="text"
              className={inputClass}
              autoComplete="organization"
              {...register("company", isHomepage ? { required: "Company name is required" } : {})}
            />
            {errors.company && <p className="contact-error-message">{errors.company.message}</p>}
          </>,
        )}

        {isHomepage &&
          fieldWrap(
            <>
              <label htmlFor="contact-website">
                Website <span className="text-[#3F8BF9]">*</span>
              </label>
              <input
                id="contact-website"
                type="url"
                className={inputClass}
                {...register("website", {
                  required: "Website is required",
                  pattern: {
                    value: /^https?:\/\/.+/i,
                    message: "Enter a valid URL (include https://)",
                  },
                })}
              />
              {errors.website && <p className="contact-error-message">{errors.website.message}</p>}
            </>,
          )}

        {fieldWrap(
          <>
            <label htmlFor="contact-message" className={isHomepage ? undefined : "contact-label"}>
              {isHomepage ? (
                <>
                  How can we help you? <span className="text-[#3F8BF9]">*</span>
                </>
              ) : (
                "Message *"
              )}
            </label>
            {isHomepage && (
              <span className="contact-description block mb-2 text-slate-400">
                {messageLength} / {MESSAGE_MAX}
              </span>
            )}
            <textarea
              id="contact-message"
              rows={isHomepage ? 6 : 4}
              className={`${inputClass} ${isHomepage ? "" : "resize-none"}`.trim()}
              maxLength={isHomepage ? MESSAGE_MAX : undefined}
              {...register("message", {
                required: "This field is required",
                minLength: { value: 10, message: "Please enter at least 10 characters" },
                maxLength: isHomepage ? { value: MESSAGE_MAX, message: `Maximum ${MESSAGE_MAX} characters` } : undefined,
                onChange: (e) => setMessageLength(e.target.value.length),
              })}
            />
            {errors.message && <p className="contact-error-message">{errors.message.message}</p>}
          </>,
        )}

        {submitState === "error" && serverMessage && (
          <p className="contact-error-message text-center">{serverMessage}</p>
        )}

        {isHomepage ? (
          <div className="contact-row contact-row-last pt-2">
            <button type="submit" disabled={submitState === "loading"} className="contact-button-submit">
              {submitState === "loading" ? "Submitting..." : "Submit"}
            </button>
          </div>
        ) : (
          <button type="submit" disabled={submitState === "loading"} className="contact-submit">
            {submitState === "loading" ? "Sending..." : "Send Message"}
          </button>
        )}
      </div>
    </form>
  );
}
