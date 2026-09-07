import { createPageMetadata } from "@/lib/metadata";
import NewsAndEventsPage from "@/components/sections/NewsAndEventsPage";

export const metadata = createPageMetadata({
  title: "News and Events - Ascendia Prime",
  path: "/news-and-events",
});

export default function Page() {
  return <NewsAndEventsPage />;
}
