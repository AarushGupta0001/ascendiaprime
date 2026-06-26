import { createPageMetadata } from "@/lib/metadata";
import AdvertisersPage from "@/components/sections/AdvertisersPage";

export const metadata = createPageMetadata({
  title: "AscendiaPrime",
  path: "/advertisers",
});

export default function Page() {
  return <AdvertisersPage />;
}
