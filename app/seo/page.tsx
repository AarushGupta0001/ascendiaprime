import { createPageMetadata } from "@/lib/metadata";
import SeoPage from "@/components/sections/SeoPage";

export const metadata = createPageMetadata({
  title: "Ascendia Prime",
  path: "/seo",
});

export default function Page() {
  return <SeoPage />;
}
