import { createPageMetadata } from "@/lib/metadata";
import HomePage from "@/components/sections/HomePage";

export const metadata = createPageMetadata({
  title: "Home - Ascendia Prime",
  path: "/",
});

export default function Page() {
  return <HomePage />;
}
