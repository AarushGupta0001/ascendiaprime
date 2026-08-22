import { createPageMetadata } from "@/lib/metadata";
import OurPartnersPage from "@/components/sections/OurPartnersPage";

export const metadata = createPageMetadata({
  title: "Ascendia Prime",
  path: "/our-partners",
});

export default function Page() {
  return <OurPartnersPage />;
}
