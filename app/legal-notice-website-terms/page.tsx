import { createPageMetadata } from "@/lib/metadata";
import LegalNoticeWebsiteTermsPage from "@/components/sections/LegalNoticeWebsiteTermsPage";

export const metadata = createPageMetadata({
  title: "Legal Notice & Website Terms - Ascendia Prime",
  description: "Ascendia Prime Legal Notice and Website Terms of use.",
  path: "/legal-notice-website-terms",
});

export default function Page() {
  return <LegalNoticeWebsiteTermsPage />;
}
