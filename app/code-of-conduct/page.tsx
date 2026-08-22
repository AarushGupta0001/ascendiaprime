import { createPageMetadata } from "@/lib/metadata";
import CodeOfConductPage from "@/components/sections/CodeOfConductPage";

export const metadata = createPageMetadata({
  title: "Code of Conduct - Ascendia Prime",
  description: "Ascendia Prime Code of Conduct — standards for partners, publishers and advertisers.",
  path: "/code-of-conduct",
});

export default function Page() {
  return <CodeOfConductPage />;
}
