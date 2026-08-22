import { createPageMetadata } from "@/lib/metadata";
import ModernSlaveryStatementPage from "@/components/sections/ModernSlaveryStatementPage";

export const metadata = createPageMetadata({
  title: "Modern Slavery Statement - Ascendia Prime",
  description: "Ascendia Prime Modern Slavery Statement — our zero tolerance for exploitation.",
  path: "/modern-slavery-statement",
});

export default function Page() {
  return <ModernSlaveryStatementPage />;
}
