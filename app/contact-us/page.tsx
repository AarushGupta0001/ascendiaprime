import { createPageMetadata } from "@/lib/metadata";
import ContactUsPage from "@/components/sections/ContactUsPage";

export const metadata = createPageMetadata({
  title: "Contact Us - Ascendia Prime",
  path: "/contact-us",
});

export default function Page() {
  return <ContactUsPage />;
}
