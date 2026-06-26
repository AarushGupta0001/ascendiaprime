import { createPageMetadata } from "@/lib/metadata";
import AffiliatesPublisherMarketingPage from "@/components/sections/AffiliatesPublisherMarketingPage";

export const metadata = createPageMetadata({
  title: "Affiliate & Publisher Marketing - AscendiaPrime",
  path: "/affiliates-publisher-marketing",
});

export default function Page() {
  return <AffiliatesPublisherMarketingPage />;
}
