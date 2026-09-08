import type { Metadata } from "next";
import AboutUsPage from "@/components/sections/AboutUsPage";

export const metadata: Metadata = {
  title: "About Ascendia Prime | Performance Marketing & Growth",
  description:
    "Learn how Ascendia Prime combines performance marketing, partner growth, programmatic media and digital execution to deliver accountable growth.",
  alternates: {
    canonical: "https://ascendiaprime.com/about-us",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  openGraph: {
    type: "website",
    siteName: "Ascendia Prime",
    title: "About Ascendia Prime | Performance Marketing & Growth",
    description:
      "Learn how Ascendia Prime combines performance marketing, partner growth, programmatic media and digital execution to deliver accountable growth.",
    url: "https://ascendiaprime.com/about-us",
    images: [
      {
        url: "https://ascendiaprime.com/assets/ascendia-prime-about-og.jpg",
        alt: "Ascendia Prime performance marketing and growth ecosystem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Ascendia Prime | Performance Marketing & Growth",
    description:
      "Learn how Ascendia Prime combines performance marketing, partner growth, programmatic media and digital execution to deliver accountable growth.",
    images: ["https://ascendiaprime.com/assets/ascendia-prime-about-og.jpg"],
  },
};

export default function Page() {
  return <AboutUsPage />;
}
