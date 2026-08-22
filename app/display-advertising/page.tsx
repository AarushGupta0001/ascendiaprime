import { createPageMetadata } from "@/lib/metadata";
import DisplayAdvertisingPage from "@/components/sections/DisplayAdvertisingPage";

export const metadata = createPageMetadata({
  title: "Display Advertising - Ascendia Prime",
  path: "/display-advertising",
});

export default function Page() {
  return <DisplayAdvertisingPage />;
}
