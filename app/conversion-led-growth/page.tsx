import { createPageMetadata } from "@/lib/metadata";
import ConversionLedGrowthPage from "@/components/sections/ConversionLedGrowthPage";

export const metadata = createPageMetadata({
  title: "AscendiaPrime",
  path: "/conversion-led-growth",
});

export default function Page() {
  return <ConversionLedGrowthPage />;
}
