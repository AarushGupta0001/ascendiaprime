import { createPageMetadata } from "@/lib/metadata";
import SeoPage from "@/components/sections/SeoPage";

export const metadata = createPageMetadata({
  title: "AscendiaPrime",
  path: "/seo",
});

export default function Page() {
  return <SeoPage />;
}
