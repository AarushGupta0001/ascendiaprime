import { createPageMetadata } from "@/lib/metadata";
import OrmPage from "@/components/sections/OrmPage";

export const metadata = createPageMetadata({
  title: "ORM & Creative Solutions - Ascendia Prime",
  path: "/orm",
});

export default function Page() {
  return <OrmPage />;
}
