import { createPageMetadata } from "@/lib/metadata";
import PpcPage from "@/components/sections/PpcPage";

export const metadata = createPageMetadata({
  title: "Ascendia Prime",
  path: "/ppc",
});

export default function Page() {
  return <PpcPage />;
}
