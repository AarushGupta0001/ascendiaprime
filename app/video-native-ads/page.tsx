import { createPageMetadata } from "@/lib/metadata";
import VideoNativeAdsPage from "@/components/sections/VideoNativeAdsPage";

export const metadata = createPageMetadata({
  title: "Video & Native Ads - Ascendia Prime",
  path: "/video-native-ads",
});

export default function Page() {
  return <VideoNativeAdsPage />;
}
