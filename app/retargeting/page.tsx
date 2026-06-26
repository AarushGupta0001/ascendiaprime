import { createPageMetadata } from "@/lib/metadata";
import RetargetingPage from "@/components/sections/RetargetingPage";

export const metadata = createPageMetadata({
  title: "Retargeting Campaigns - AscendiaPrime",
  path: "/retargeting",
});

export default function Page() {
  return <RetargetingPage />;
}
