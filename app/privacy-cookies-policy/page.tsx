import { createPageMetadata } from "@/lib/metadata";
import PrivacyCookiesPolicyPage from "@/components/sections/PrivacyCookiesPolicyPage";

export const metadata = createPageMetadata({
  title: "Privacy & Cookies Policy - AscendiaPrime",
  description: "Ascendia Prime Privacy & Cookies Policy — how we collect, use, store and share personal data.",
  path: "/privacy-cookies-policy",
});

export default function Page() {
  return <PrivacyCookiesPolicyPage />;
}
