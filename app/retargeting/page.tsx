import { createPageMetadata } from "@/lib/metadata";
import RetargetingPage from "@/components/sections/RetargetingPage";

export const metadata = createPageMetadata({
  title: "Retargeting Campaigns - Ascendia Prime",
  path: "/retargeting",
});

export default function Page() {
  return <RetargetingPage />;
}
