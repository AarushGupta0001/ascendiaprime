import { createPageMetadata } from "@/lib/metadata";
import ConnectedTvPage from "@/components/sections/ConnectedTvPage";

export const metadata = createPageMetadata({
  title: "Connected TV Advertising - Ascendia Prime",
  path: "/connected-tv",
});

export default function Page() {
  return <ConnectedTvPage />;
}
