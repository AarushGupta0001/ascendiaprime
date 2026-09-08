export type UpcomingEvent = {
  id: string;
  title: string;
  dateLabel: string;
  startDate: string;
  endDate: string;
  location: string;
  venue?: string;
  category: string;
  description: string;
  longDescription?: string;
  highlights?: string[];
  image: string;
  url: string;
  sourceName: string;
};

export const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    id: "affilifest-north-2026",
    title: "Affilifest North 2026",
    dateLabel: "9–10 SEP 2026",
    startDate: "2026-09-09",
    endDate: "2026-09-10",
    location: "Freight Island, Manchester, UK",
    venue: "Freight Island",
    category: "AFFILIATE",
    description:
      "Where the UK's biggest brands, publishers, and performance networks build better partnerships.",
    longDescription:
      "Affilifest North brings together over 1,000 regional brand leaders, affiliate networks, and top publishers at Freight Island in Manchester for two dynamic days of industry talks, high-energy networking, and deal-making.",
    highlights: [
      "1,000+ brand and publisher attendees",
      "Dedicated publisher meetups & partnership lounges",
      "Executive roundtables on high-intent affiliate scaling",
    ],
    image: "/images/events/affilifest-north.png",
    url: "https://north.affilifest.com/",
    sourceName: "Affilifest North",
  },
  {
    id: "dmexco-2026",
    title: "DMEXCO 2026",
    dateLabel: "23–24 SEP 2026",
    startDate: "2026-09-23",
    endDate: "2026-09-24",
    location: "Koelnmesse, Cologne, Germany",
    venue: "Koelnmesse Exhibition Center",
    category: "PERFORMANCE TECH",
    description:
      "Europe's leading digital marketing and tech expo, bringing together global leaders in digital media, AI marketing, and ad tech.",
    longDescription:
      "DMEXCO is Europe’s premier exposition for digital marketing and technology. It convenes global decision-makers across digital commerce, programmatic media, artificial intelligence, and ad tech innovations.",
    highlights: [
      "40,000+ global digital marketing attendees",
      "14 dynamic keynote and masterclass stages",
      "Deep-dive sessions on privacy-first programmatic attribution",
    ],
    image: "/images/events/dmexco.jpg",
    url: "https://dmexco.com/",
    sourceName: "DMEXCO",
  },
  {
    id: "advertising-week-ny-2026",
    title: "Advertising Week New York 2026",
    dateLabel: "7–10 OCT 2026",
    startDate: "2026-10-07",
    endDate: "2026-10-10",
    location: "The Manhattan Center, New York, USA",
    venue: "The Manhattan Center",
    category: "DIGITAL MEDIA",
    description:
      "The premier global gathering of marketing, advertising, and programmatic leaders discussing full-funnel scaling.",
    longDescription:
      "Advertising Week New York gathers the brightest minds in marketing, media, technology, and culture. Experience four days of interactive panels, agency showcases, and enterprise growth debates.",
    highlights: [
      "Flagship global media and advertising summit",
      "Focus on omnichannel acquisition & full-funnel media buying",
      "Exclusive networking with top enterprise brand leaders",
    ],
    image: "/images/events/advertising-week-ny.jpg",
    url: "https://advertisingweek.com/event/awnewyork/",
    sourceName: "Advertising Week",
  },
  {
    id: "pi-live-europe-2026",
    title: "PI LIVE Europe 2026",
    dateLabel: "19–21 OCT 2026",
    startDate: "2026-10-19",
    endDate: "2026-10-21",
    location: "1 Old Billingsgate Walk, London, UK",
    venue: "Old Billingsgate",
    category: "PARTNERSHIPS",
    description:
      "Europe’s largest gathering of the partnership economy, connecting performance marketers, creators, and brands.",
    longDescription:
      "PI LIVE Europe is reimagined as a multi-venue campus built for how performance partnerships are formed today. Discover cutting-edge publisher strategies, influencer commerce, and performance marketing innovation.",
    highlights: [
      "3,000+ performance and affiliate marketing executives",
      "The official European Festival of Partnerships",
      "Curated partnership deal rooms and publisher matchmaking",
    ],
    image: "/images/events/pi-live-europe.png",
    url: "https://performancein.live/europe/",
    sourceName: "PI LIVE Europe",
  },
  {
    id: "ims-europe-2026",
    title: "Influencer Marketing Show Europe 2026",
    dateLabel: "21–22 OCT 2026",
    startDate: "2026-10-21",
    endDate: "2026-10-22",
    location: "Old Billingsgate, London, UK",
    venue: "Old Billingsgate",
    category: "CREATOR ECONOMY",
    description:
      "Dedicated to creator commerce and performance influencer partnerships driving measurable commercial ROI.",
    longDescription:
      "Co-located alongside PI LIVE Europe in London, IMS Europe focuses exclusively on measuring creator ROI, scaling affiliate-driven creator campaigns, and multi-platform influencer strategies.",
    highlights: [
      "Dedicated to performance creator partnerships & social commerce",
      "Direct matchmaking between brands and leading creator agencies",
      "Masterclasses on commercial tracking and multi-touch attribution",
    ],
    image: "/images/events/influencer-marketing-show.jpg",
    url: "https://influencermarketingshow.com/london/",
    sourceName: "IMS Europe",
  },
  {
    id: "affiliate-world-asia-2026",
    title: "Affiliate World Asia 2026",
    dateLabel: "3–4 DEC 2026",
    startDate: "2026-12-03",
    endDate: "2026-12-04",
    location: "Centara Grand, Bangkok, Thailand",
    venue: "Centara Grand & Bangkok Convention Centre",
    category: "PERFORMANCE",
    description:
      "The world's largest gathering of top affiliate marketers and e-commerce entrepreneurs scaling high-intent campaigns.",
    longDescription:
      "Affiliate World Asia is the premier gathering for super-affiliates, performance advertisers, and media buyers. Over two days, top operators share testable media-buying tactics, ad creative frameworks, and network strategies.",
    highlights: [
      "5,000+ top-tier performance media buyers and affiliates",
      "Advanced workshops on meta, search, native, and DSP buying",
      "World-class networking parties and executive lounges",
    ],
    image: "/images/events/affiliate-world-asia.jpg",
    url: "https://affiliateworldconferences.com/asia",
    sourceName: "Affiliate World",
  },
  {
    id: "affiliate-summit-west-2027",
    title: "Affiliate Summit West 2027",
    dateLabel: "18–20 JAN 2027",
    startDate: "2027-01-18",
    endDate: "2027-01-20",
    location: "Caesars Forum, Las Vegas, USA",
    venue: "Caesars Forum",
    category: "AFFILIATE SUMMIT",
    description:
      "The premier affiliate conference uniting 6,000+ advertisers, publishers, and performance networks worldwide.",
    longDescription:
      "Affiliate Summit West is the biggest affiliate marketing event in the world. Join thousands of performance marketing professionals in Las Vegas for three packed days of business deals, partnership growth, and keynotes.",
    highlights: [
      "6,000+ attendees from 80+ countries",
      "The legendary Meet Market and expansive exhibit hall",
      "Actionable strategies on attribution, conversion, and publisher scaling",
    ],
    image: "/images/events/affiliate-summit-west.jpg",
    url: "https://www.affiliatesummit.com/west",
    sourceName: "Affiliate Summit",
  },
];
