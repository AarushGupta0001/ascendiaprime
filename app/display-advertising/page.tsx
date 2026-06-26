import { createPageMetadata } from "@/lib/metadata";
import DisplayAdvertisingPage from "@/components/sections/DisplayAdvertisingPage";

export const metadata = createPageMetadata({
  title: "Display Advertising - AscendiaPrime",
  path: "/display-advertising",
});

export default function Page() {
  return <DisplayAdvertisingPage />;
}
