import { createPageMetadata } from "@/lib/metadata";
import GdprDataProtectionPage from "@/components/sections/GdprDataProtectionPage";

export const metadata = createPageMetadata({
  title: "GDPR & Data Protection Commitment - AscendiaPrime",
  description: "Ascendia Prime GDPR and data protection commitment for privacy, security and accountability.",
  path: "/gdpr-data-protection",
});

export default function Page() {
  return <GdprDataProtectionPage />;
}
