import { createPageMetadata } from "@/lib/metadata";
import CaseStudiesPage from "@/components/sections/CaseStudiesPage";

export const metadata = createPageMetadata({
  title: "Case Studies - Ascendia Prime",
  path: "/case-studies",
});

export default function Page() {
  return <CaseStudiesPage />;
}
