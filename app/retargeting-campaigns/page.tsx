import type { Metadata } from "next";
import RetargetingPage from "@/components/sections/RetargetingPage";

export const metadata: Metadata = {
  title: "Retargeting Campaigns Built Around Intent and Control | Ascendia Prime",
  description:
    "Re-engage high-intent visitors with intent-led retargeting, clear audience rules, frequency controls, transparent tracking and measurable conversion recovery.",
  alternates: {
    canonical: "https://ascendiaprime.com/retargeting-campaigns/",
  },
  openGraph: {
    title: "Retargeting Campaigns Built Around Intent and Control | Ascendia Prime",
    description:
      "Re-engage high-intent audiences through structured retargeting strategies built around audience behaviour, frequency control and transparent tracking.",
    url: "https://ascendiaprime.com/retargeting-campaigns/",
    siteName: "Ascendia Prime",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/retargeting-og.png",
        width: 1200,
        height: 630,
        alt: "Ascendia Prime Retargeting Campaign Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Retargeting Campaigns Built Around Intent and Control | Ascendia Prime",
    description:
      "Re-engage high-intent audiences through structured retargeting strategies built around audience behaviour and frequency control.",
    images: ["/images/retargeting-og.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Retargeting Campaign Management",
      provider: {
        "@type": "Organization",
        name: "Ascendia Prime",
        url: "https://ascendiaprime.com/",
      },
      serviceType: "Retargeting campaign management",
      areaServed: "Worldwide",
      url: "https://ascendiaprime.com/retargeting-campaigns/",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://ascendiaprime.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Retargeting Campaigns",
          item: "https://ascendiaprime.com/retargeting-campaigns/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the difference between retargeting and remarketing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The terms are often used interchangeably. In practice, retargeting commonly describes paid-media re-engagement, while remarketing can include email and other first-party follow-up. We design the approach around the visitor journey rather than the label.",
          },
        },
        {
          "@type": "Question",
          name: "Can you retarget people who viewed a product or started a form?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, when the right signals, permissions and platform eligibility are in place. Product views, cart exits, checkout activity, form starts and high-engagement visits can each support different audience rules.",
          },
        },
        {
          "@type": "Question",
          name: "How do you avoid showing the same advert too often?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Frequency caps, recency windows, exclusions, creative sequencing and converted-user suppression are defined as campaign rules and reviewed during delivery.",
          },
        },
        {
          "@type": "Question",
          name: "Which channels can be used?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depending on the audience size and objective, activity may use paid social, search, display, video, programmatic, publisher environments or eligible first-party activation.",
          },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <RetargetingPage />
    </>
  );
}
