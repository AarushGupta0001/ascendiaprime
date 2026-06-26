import { createPageMetadata } from "@/lib/metadata";
import ComplaintsPolicyPage from "@/components/sections/ComplaintsPolicyPage";

export const metadata = createPageMetadata({
  title: "Complaints Policy - AscendiaPrime",
  description: "Ascendia Prime Complaints Policy — how to raise concerns fairly and constructively.",
  path: "/complaints-policy",
});

export default function Page() {
  return <ComplaintsPolicyPage />;
}
