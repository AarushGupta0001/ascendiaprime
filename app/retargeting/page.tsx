import type { Metadata } from "next";
import RetargetingPage from "@/components/sections/RetargetingPage";

export const metadata: Metadata = {
  title: "Retargeting Campaigns Built Around Intent and Control | Ascendia Prime",
  description:
    "Re-engage high-intent visitors with intent-led retargeting, clear audience rules, frequency controls, transparent tracking and measurable conversion recovery.",
  alternates: {
    canonical: "https://ascendiaprime.com/retargeting-campaigns/",
  },
};

export default function Page() {
  return <RetargetingPage />;
}
