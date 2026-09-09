import type { Metadata } from "next";
import RetargetingPage from "@/components/sections/RetargetingPage";

export const metadata: Metadata = {
  title: "Retargeting Campaigns Built Around Intent and Control",
  description:
    "Re-engage high-intent visitors with intent-led retargeting, clear audience rules, frequency controls, transparent tracking and measurable conversion recovery.",
  alternates: {
    canonical: "https://ascendiaprime.com/retargeting-campaigns/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Page() {
  return <RetargetingPage />;
}
