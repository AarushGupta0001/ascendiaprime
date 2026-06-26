import { createPageMetadata } from "@/lib/metadata";
import ConnectedTvPage from "@/components/sections/ConnectedTvPage";

export const metadata = createPageMetadata({
  title: "Connected TV Advertising - AscendiaPrime",
  path: "/connected-tv",
});

export default function Page() {
  return <ConnectedTvPage />;
}
