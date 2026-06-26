import { createPageMetadata } from "@/lib/metadata";
import OrmPage from "@/components/sections/OrmPage";

export const metadata = createPageMetadata({
  title: "ORM & Creative Solutions - AscendiaPrime",
  path: "/orm",
});

export default function Page() {
  return <OrmPage />;
}
