import { createPageMetadata } from "@/lib/metadata";
import PpcPage from "@/components/sections/PpcPage";

export const metadata = createPageMetadata({
  title: "PPC Management Services | Google & Meta Ads | AscendiaPrime",
  description:
    "Improve paid media performance with hands-on Google Ads, Meta Ads and PPC management focused on intent, efficient spend, tracking and scalable growth.",
  path: "/ppc",
});

export default function Page() {
  return <PpcPage />;
}
