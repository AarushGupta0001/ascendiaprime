import { createPageMetadata } from "@/lib/metadata";
import AboutUsPage from "@/components/sections/AboutUsPage";

export const metadata = createPageMetadata({
  title: "About Us - Ascendia Prime",
  path: "/about-us",
});

export default function Page() {
  return <AboutUsPage />;
}
