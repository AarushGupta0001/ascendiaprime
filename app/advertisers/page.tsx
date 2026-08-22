import { createPageMetadata } from "@/lib/metadata";
import AdvertisersPage from "@/components/sections/AdvertisersPage";

export const metadata = createPageMetadata({
  title: "Ascendia Prime",
  path: "/advertisers",
});

export default function Page() {
  return <AdvertisersPage />;
}
