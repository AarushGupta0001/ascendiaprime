"use client";

import ForminatorEmbed from "@/components/forms/ForminatorEmbed";
import { FORMINATOR_FORMS } from "@/lib/forminator";

type ContactFormProps = {
  className?: string;
  variant?: "default" | "modal" | "homepage";
  formId?: string;
};

export default function ContactForm({
  className = "",
  variant = "default",
  formId = FORMINATOR_FORMS.default,
}: ContactFormProps) {
  return <ForminatorEmbed className={className} variant={variant} formId={formId} />;
}
