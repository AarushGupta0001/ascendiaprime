import { createPageMetadata } from "@/lib/metadata";
import InfluencerMarketingPage from "@/components/sections/InfluencerMarketingPage";

export const metadata = createPageMetadata({
  title: "AscendiaPrime",
  path: "/influencer-marketing",
});

export default function Page() {
  return <InfluencerMarketingPage />;
}
