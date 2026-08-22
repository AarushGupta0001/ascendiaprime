"use client";

import { useEffect } from "react";

import { useContactModal } from "@/components/forms/ContactModalProvider";
import { FORMINATOR_FORMS } from "@/lib/forminator";
import {
  isContactHash,
  parseRootHashHref,
  scrollToContactSection,
  scrollToHash,
} from "@/lib/contact-routing";

function openContactModalElement(modal: HTMLElement) {
  modal.classList.remove("hidden", "opacity-0");
  modal.classList.add("flex");
  modal.setAttribute("aria-hidden", "false");

  const popup = modal.querySelector<HTMLElement>(".popup-content");
  popup?.classList.remove("scale-95");
  popup?.classList.add("scale-100");

  document.body.classList.add("modal-open");
  document.documentElement.classList.add("modal-open");
}

function closeContactModalElement(modal: HTMLElement) {
  modal.classList.add("opacity-0");
  modal.classList.remove("flex");
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");

  const popup = modal.querySelector<HTMLElement>(".popup-content");
  popup?.classList.add("scale-95");
  popup?.classList.remove("scale-100");

  document.body.classList.remove("modal-open");
  document.documentElement.classList.remove("modal-open");
}

function openConversationModal(modal: HTMLElement) {
  modal.classList.remove("hidden", "opacity-0");
  modal.classList.add("flex");
  modal.setAttribute("aria-hidden", "false");

  const panel = modal.querySelector<HTMLElement>(".conversation-modal-panel");
  panel?.classList.remove("scale-95");
  panel?.classList.add("scale-100");

  document.body.classList.add("conversation-modal-open");
  document.documentElement.classList.add("conversation-modal-open");
}

function closeConversationModal(modal: HTMLElement) {
  modal.classList.add("opacity-0");
  modal.classList.remove("flex");
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");

  const panel = modal.querySelector<HTMLElement>(".conversation-modal-panel");
  panel?.classList.add("scale-95");
  panel?.classList.remove("scale-100");

  document.body.classList.remove("conversation-modal-open");
  document.documentElement.classList.remove("conversation-modal-open");
}

function openPartnerModal(modal: HTMLElement) {
  modal.classList.add("active");
  document.body.classList.add("modal-open");
  document.documentElement.classList.add("modal-open");
}

function closePartnerModal(modal: HTMLElement) {
  modal.classList.remove("active");
  document.body.classList.remove("modal-open");
  document.documentElement.classList.remove("modal-open");
}

function openPageContactModal(): boolean {
  const conversationModal = document.getElementById("conversation-modal");
  if (conversationModal) {
    openConversationModal(conversationModal);
    return true;
  }

  const contactModal = document.getElementById("contact-modal");
  if (contactModal) {
    openContactModalElement(contactModal);
    return true;
  }

  return false;
}

function closeActiveModals() {
  const contactModal = document.getElementById("contact-modal");
  if (contactModal && !contactModal.classList.contains("hidden")) {
    closeContactModalElement(contactModal);
  }

  const conversationModal = document.getElementById("conversation-modal");
  if (conversationModal && !conversationModal.classList.contains("hidden")) {
    closeConversationModal(conversationModal);
  }

  const partnerModal = document.getElementById("partner-modal");
  if (partnerModal?.classList.contains("active")) {
    closePartnerModal(partnerModal);
  }
}

function resolveFormIdFromTrigger(trigger: Element) {
  const formId = trigger.getAttribute("data-form-id");
  return formId ?? undefined;
}

export default function ContactInteractions() {
  const { openContactModal } = useContactModal();

  useEffect(() => {
    function openContactFlow(formId?: string) {
      // Form-specific CTAs must retain their intended Forminator flow instead of
      // being captured by a page-level generic contact modal.
      if (formId) {
        openContactModal(formId);
        return;
      }

      if (!openPageContactModal()) {
        openContactModal(formId);
      }
    }

    function handleContactHash(hash: string, formId?: string) {
      if (isContactHash(hash)) {
        if (scrollToContactSection()) return;
        openContactFlow(formId);
        return;
      }

      scrollToHash(hash);
    }

    function handleClick(event: MouseEvent) {
      const target = event.target as Element | null;
      if (!target) return;

      const rootHashLink = target.closest('a[href^="/#"]') as HTMLAnchorElement | null;
      if (rootHashLink) {
        const hash = parseRootHashHref(rootHashLink.getAttribute("href") ?? "");
        if (hash) {
          if (window.location.pathname === "/") {
            event.preventDefault();
            window.history.pushState(null, "", `/${hash}`);
            handleContactHash(hash);
            return;
          }

          if (isContactHash(hash) && !document.getElementById("contact")) {
            event.preventDefault();
            openContactFlow();
            return;
          }
        }
      }

      const openTrigger = target.closest(".open-contact-modal");
      if (openTrigger) {
        event.preventDefault();
        openContactFlow(resolveFormIdFromTrigger(openTrigger));
        return;
      }

      const partnerTrigger = target.closest(".partner-popup-trigger");
      if (partnerTrigger) {
        event.preventDefault();
        const partnerModal = document.getElementById("partner-modal");
        if (partnerModal) {
          openPartnerModal(partnerModal);
        } else {
          openContactFlow(FORMINATOR_FORMS.advertisers);
        }
        return;
      }

      const closeTrigger = target.closest(
        ".modal-close-btn, .modal-close-overlay, #close-modal, .js-close-conversation",
      );
      if (closeTrigger) {
        event.preventDefault();
        closeActiveModals();
        return;
      }

      const hashLink = target.closest(
        'a[href="#contact"], a[href="#enquiry"], a[href="#conversation"], a[href="#enquire-form"], a[href="#lead-form-section"], a[href="#campaign-form-section"]',
      ) as HTMLAnchorElement | null;

      if (hashLink) {
        const hash = hashLink.getAttribute("href");
        if (!hash) return;

        if (hash === "#lead-form-section" || hash === "#campaign-form-section" || hash === "#enquire-form") {
          if (scrollToHash(hash)) {
            event.preventDefault();
          }
          return;
        }

        if (isContactHash(hash)) {
          event.preventDefault();
          handleContactHash(hash);
        }
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeActiveModals();
      }
    }

    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openContactModal]);

  return null;
}
