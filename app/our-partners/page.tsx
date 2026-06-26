import { createPageMetadata } from "@/lib/metadata";
import OurPartnersPage from "@/components/sections/OurPartnersPage";

export const metadata = createPageMetadata({
  title: "AscendiaPrime",
  path: "/our-partners",
});

export default function Page() {
  return <OurPartnersPage />;
}
