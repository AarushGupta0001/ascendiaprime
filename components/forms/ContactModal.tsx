"use client";

import { useEffect, type ReactNode } from "react";
import ContactForm from "@/components/forms/ContactForm";
import { FORMINATOR_FORMS } from "@/lib/forminator";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  formId?: string;
  children?: ReactNode;
};

export default function ContactModal({
  isOpen,
  onClose,
  title = "Get in Touch",
  formId,
  children,
}: ContactModalProps) {
  const modalTitle =
    formId === "3617" || formId === FORMINATOR_FORMS.events
      ? "Start a Conversation"
      : formId === "3611" || formId === FORMINATOR_FORMS.retargeting
        ? "Discuss Your Retargeting Campaign"
        : formId === "1808" || formId === FORMINATOR_FORMS.advertisers
          ? "Advertiser Inquiry"
          : formId === "2081" || formId === FORMINATOR_FORMS.partners
            ? "Partner Ecosystem Inquiry"
            : title;

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
      document.documentElement.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
      document.documentElement.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
      document.documentElement.classList.remove("modal-open");
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <div
      className={`contact-modal-overlay fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto visible"
          : "opacity-0 pointer-events-none invisible"
      }`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
      aria-labelledby="contact-modal-title"
    >
      <button
        type="button"
        className="modal-close-overlay absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close modal"
        tabIndex={isOpen ? 0 : -1}
      />
      <div
        className={`popup-content relative z-10 w-full max-w-xl sm:max-w-2xl max-h-[calc(100vh-2rem)] sm:max-h-[calc(100vh-3rem)] overflow-y-auto overscroll-contain rounded-2xl border border-[#7469F8]/30 bg-[#0b111d]/95 p-5 sm:p-6 pb-4 sm:pb-5 shadow-2xl backdrop-blur-xl transition-transform duration-300 ${
          isOpen ? "scale-100" : "scale-95"
        }`}
      >
        <button
          type="button"
          className="modal-close-btn absolute right-4 top-4 sm:right-5 sm:top-5 z-50 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-slate-300 shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-white/30 hover:bg-white/20 hover:text-white active:scale-95 cursor-pointer"
          onClick={onClose}
          aria-label="Close modal"
          tabIndex={isOpen ? 0 : -1}
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 id="contact-modal-title" className="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold text-white text-center">
          {modalTitle}
        </h2>
        {children ?? <ContactForm variant="modal" formId={formId} />}
      </div>
    </div>
  );
}
