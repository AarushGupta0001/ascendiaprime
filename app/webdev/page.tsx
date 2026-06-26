import { createPageMetadata } from "@/lib/metadata";
import WebdevPage from "@/components/sections/WebdevPage";

export const metadata = createPageMetadata({
  title: "Web Development Services - AscendiaPrime",
  path: "/webdev",
});

export default function Page() {
  return <WebdevPage />;
}
