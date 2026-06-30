"use client";

import { useEffect } from "react";

import { useContactModal } from "@/components/forms/ContactModalProvider";

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

export default function ContactInteractions() {
  const { openContactModal } = useContactModal();

  useEffect(() => {
    function openContactFlow() {
      if (!openPageContactModal()) {
        openContactModal();
      }
    }

    function handleClick(event: MouseEvent) {
      const target = event.target as Element | null;
      if (!target) return;

      const openTrigger = target.closest(".open-contact-modal");
      if (openTrigger) {
        event.preventDefault();
        openContactFlow();
        return;
      }

      const partnerTrigger = target.closest(".partner-popup-trigger");
      if (partnerTrigger) {
        event.preventDefault();
        const partnerModal = document.getElementById("partner-modal");
        if (partnerModal) {
          openPartnerModal(partnerModal);
        } else {
          openContactFlow();
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
        'a[href="#contact"], a[href="#enquiry"], a[href="#conversation"]',
      ) as HTMLAnchorElement | null;
      if (hashLink) {
        const hasContactSection = document.getElementById("contact");
        const hash = hashLink.getAttribute("href");
        if (!hasContactSection && (hash === "#contact" || hash === "#enquiry" || hash === "#conversation")) {
          event.preventDefault();
          openContactFlow();
        }
      }

      const deadLink = target.closest('a[href="#"]') as HTMLAnchorElement | null;
      if (
        deadLink &&
        (deadLink.classList.contains("partner-popup-trigger") ||
          deadLink.textContent?.toLowerCase().includes("conversation"))
      ) {
        event.preventDefault();
        const partnerModal = document.getElementById("partner-modal");
        if (partnerModal) {
          openPartnerModal(partnerModal);
        } else {
          openContactFlow();
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
