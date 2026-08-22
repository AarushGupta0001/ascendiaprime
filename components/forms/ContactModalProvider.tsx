"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import dynamic from "next/dynamic";

import ContactInteractions from "@/components/forms/ContactInteractions";
import { FORMINATOR_FORMS } from "@/lib/forminator";

const ContactModal = dynamic(() => import("@/components/forms/ContactModal"), {
  ssr: false,
  loading: () => null,
});

type ContactModalContextValue = {
  openContactModal: (formId?: string) => void;
  closeContactModal: () => void;
};

const ContactModalContext = createContext<ContactModalContextValue | null>(null);

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalFormId, setModalFormId] = useState<string>(FORMINATOR_FORMS.default);

  const openContactModal = useCallback((formId?: string) => {
    setModalFormId(formId ?? FORMINATOR_FORMS.default);
    setIsOpen(true);
  }, []);

  const closeContactModal = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ openContactModal, closeContactModal }),
    [openContactModal, closeContactModal],
  );

  return (
    <ContactModalContext.Provider value={value}>
      <ContactInteractions />
      {children}
      {isOpen ? (
        <ContactModal isOpen={isOpen} onClose={closeContactModal} formId={modalFormId} />
      ) : null}
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error("useContactModal must be used within ContactModalProvider");
  }
  return context;
}
