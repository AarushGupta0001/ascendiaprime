import { createPageMetadata } from "@/lib/metadata";
import DspPage from "@/components/sections/DspPage";

export const metadata = createPageMetadata({
  title: "DSP-Led Media Buying - AscendiaPrime",
  path: "/dsp",
});

export default function Page() {
  return <DspPage />;
}
