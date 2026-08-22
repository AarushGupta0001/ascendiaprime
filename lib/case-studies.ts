export type CaseStudy = {
  slug: string;
  title: string;
  description: string;
  hero: string;
  challengeTitle: string;
  challenge: string[];
  strategyTitle: string;
  strategies: {
    title: string;
    description: string;
  }[];
  metrics: {
    value: string;
    label: string;
  }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "case-study-1",
    title: "Transforming Insurance Operations.",
    description:
      "Discover how we maximized customer acquisition routes for a mid-sized insurance firm through data-driven digital infrastructure upgrades and optimization protocols.",
    hero: "/case-studies/1/hero.avif",
    challengeTitle: "Fragmented Data & Siloed Inefficiencies.",
    challenge: [
      "The baseline analysis revealed disconnected customer paths across multiple digital nodes. Attribution mechanics were disjointed, skewing performance reporting metrics and inflating overall acquisition overheads.",
      "This division obscured direct conversion paths, causing misallocated resource deployment and stagnant pipeline scalability that structural adjustments had to fix.",
    ],
    strategyTitle: "A Unified Infrastructure Realignment.",
    strategies: [
      {
        title: "Data Integration",
        description:
          "Consolidating system attribution mechanics to deliver comprehensive oversight of touchpoints across core user exploration stages.",
      },
      {
        title: "Target Filtering",
        description:
          "Restructuring search optimization architecture to capture high-intent user inquiries and eliminate resource dissipation channels clean.",
      },
      {
        title: "Funnel Optimization",
        description:
          "Deploying integrated cross-platform message re-engagement paths to safely retain brand visibility throughout user decision cycles.",
      },
    ],
    metrics: [
      { value: "+145%", label: "Primary Growth" },
      { value: "3.8×", label: "Return on Investment" },
      { value: "-42%", label: "Acquisition Cost" },
    ],
  },

  {
    slug: "case-study-2",
    title: "Boosting Cybersecurity Sales.",
    description:
      "Discover how our customised, data-led strategy boosted a global anti-virus company's sales by over 712% in just 3 months through smart segmentation and personalization.",
    hero: "/case-studies/2/hero.avif",
    challengeTitle: "Stagnant Sales & High Acquisition Costs.",
    challenge: [
      "Despite having a strong product offering in the cybersecurity space, the company was experiencing stagnant online sales and high customer acquisition costs while facing intense competition from both established and emerging brands.",
      "Their existing marketing efforts lacked personalization, and they were unable to effectively target and convert global audiences at scale, which severely hindered their expansion into new international markets.",
    ],
    strategyTitle: "A Customised Data-Led Approach.",
    strategies: [
      {
        title: "Data-Driven Segmentation",
        description:
          "Conducted in-depth research to identify the most promising customer segments by analyzing behavioral patterns, purchase intent, and regional market trends.",
      },
      {
        title: "Personalized Campaigns",
        description:
          "Crafted highly targeted campaigns with localized messaging, multi-lingual support, and region-specific offers to increase engagement and brand trust.",
      },
      {
        title: "Conversion Optimization",
        description:
          "Optimized the entire user journey across landing pages, checkout flows, and mobile experiences to drastically reduce friction and boost conversion rates.",
      },
    ],
    metrics: [
      { value: "+712%", label: "Sales Growth" },
      { value: "2.5×", label: "Return on Investment" },
      { value: "-47%", label: "Acquisition Cost" },
      { value: "3 Months", label: "Growth Period" },
    ],
  },

  {
    slug: "case-study-3",
    title: "Scaling a Family Law Firm.",
    description:
      'Discover how a tailored strategy of intent-driven targeting, technical conversion funnels, and personalized messaging unlocked unprecedented growth for a "no-win-no-fee" law firm.',
    hero: "/case-studies/3/hero.avif",
    challengeTitle: "Stagnating Growth & Fragmented Funnels.",
    challenge: [
      "Despite consistent investment in PPC and press advertising, the firm's revenue and client volume had plateaued. Their generic digital strategies failed to reflect the emotional and highly personal nature of family law clients.",
      "A disconnected funnel experience between marketing efforts and website follow-through was causing massive drop-offs in lead conversion, exacerbated by a lack of internal technical expertise to implement advanced tracking.",
    ],
    strategyTitle: "Intent & Technical Integration.",
    strategies: [
      {
        title: "Intent-Driven Targeting",
        description:
          "Built empathetic buyer personas and utilized an Intent Scoring Algorithm to capture high-value, long-tail search terms specific to family law disputes.",
      },
      {
        title: "Technical Integration",
        description:
          "Implemented full-funnel conversion tracking from initial click to consultation booking, and launched chatbots for instant, empathetic audience engagement.",
      },
      {
        title: "Multichannel Optimization",
        description:
          "A/B tested scenario-specific landing pages, activated affinity-based affiliates, and deployed precise retargeting to re-engage past visitors effectively.",
      },
    ],
    metrics: [
      { value: "+260%", label: "Growth" },
      { value: "+209%", label: "Performance Improvement" },
      { value: "-56%", label: "Reduction in Cost" },
    ],
  },

  {
    slug: "case-study-4",
    title: "Surging Travel Bookings.",
    description:
      "Discover how a multi-channel performance strategy—fueled by cart abandonment recovery and intelligent retargeting—packed a 98% sales surge for a global travel company in just 45 days.",
    hero: "/case-studies/4/hero.avif",
    challengeTitle: "Cart Abandonment & Friction in Booking.",
    challenge: [
      "Despite driving substantial traffic to their platform, the travel company faced critical drop-offs during the checkout phase. High-intent users were browsing lucrative travel packages but abandoning their carts before finalizing payments.",
      "Their existing retention strategy lacked immediacy and personalization, causing them to lose bookings to competitors and heavily inflating the overall cost of customer acquisition.",
    ],
    strategyTitle: "Rapid Re-engagement Protocols.",
    strategies: [
      {
        title: "Cart Recovery",
        description:
          "Deployed automated, time-sensitive intercept protocols—including WhatsApp and Push notifications—to instantly re-engage users who abandoned bookings.",
      },
      {
        title: "Intent Retargeting",
        description:
          "Restructured the programmatic media buying architecture to strictly target high-intent browsers, stripping away wasted ad spend on unqualified traffic.",
      },
      {
        title: "Dynamic Personalization",
        description:
          "Engineered customized remarketing offers based on the user's specific destination browsing history to drastically improve conversion relevance.",
      },
    ],
    metrics: [
      { value: "+98%", label: "Sales Growth" },
      { value: "2.1×", label: "Return on Investment" },
      { value: "-35%", label: "Acquisition Cost" },
      { value: "45 Days", label: "Growth Period" },
    ],
  },

  {
    slug: "case-study-5",
    title: "Doubling Bank Customers.",
    description:
      "Discover how a mid-sized UK challenger bank doubled their customer base at half the investment through intent segmentation, zero-fee affiliate models, and real-time optimization.",
    hero: "/case-studies/5/hero.avif",
    challengeTitle: "Fragmented Efforts & Expensive Acquisition.",
    challenge: [
      "A mid-sized UK challenger bank was struggling to grow its customer base cost-effectively. Their existing programmatic and affiliate marketing efforts were highly fragmented and expensive.",
      "These generic solutions yielded low conversion rates, high network fees, and provided no real transparency or insight into what was actually driving performance, severely limiting scalable growth.",
    ],
    strategyTitle: "Intent Segmentation & Network Activation.",
    strategies: [
      {
        title: "Intent Segmentation",
        description:
          'Layered a proprietary Intent Scoring Algorithm to separate users into "ready-to-open" vs "research-stage," setting budgets explicitly based on user mindset.',
      },
      {
        title: "Custom Network Activation",
        description:
          "Moved away from generic networks to build a curated, tiered affiliate network. Eliminated override fees by shifting to a pure pay-on-performance model.",
      },
      {
        title: "Dynamic Optimization",
        description:
          "Leveraged AI-powered retargeting to capture bounced traffic with real-time offers, while enabling transparent dashboards for rapid weekly A/B testing.",
      },
    ],
    metrics: [
      { value: "2×", label: "Customer Growth" },
      { value: "800K", label: "Scale" },
      { value: "+100%", label: "Growth" },
      { value: "-50%", label: "Investment" },
    ],
  },

  {
    slug: "case-study-6",
    title: "Accelerating Supplement Growth.",
    description:
      "Discover how we accelerated a UK-based supplement brand's growth from a small business to a mid-tier player in just 3 months through customized campaigns and data analysis.",
    hero: "/case-studies/6/hero.avif",
    challengeTitle: "High Acquisition Costs & Inconsistent Revenue.",
    challenge: [
      "The brand struggled with limited digital diversification, relying heavily on a single acquisition channel. This resulted in high customer acquisition costs and low overall brand visibility in a highly competitive market.",
      "Resource constraints and poor scalability meant their campaigns were too generic, causing inconsistent revenue streams that made it risky to invest in further growth initiatives or new product lines.",
    ],
    strategyTitle: "A Customized Growth Blueprint.",
    strategies: [
      {
        title: "Technical Integration",
        description:
          "Streamlined tracking systems and deployed advanced analytics dashboards to accurately identify high-intent audiences and seasonality trends.",
      },
      {
        title: "Tailored Campaigns",
        description:
          "Split campaigns by verticals, product types, and regional demand with agile weekly optimizations rather than relying on a one-size-fits-all approach.",
      },
      {
        title: "Dynamic Retargeting",
        description:
          "Replicated successful performance tactics by deploying dynamic retargeting, custom content creation, and highly-targeted affiliate partnerships.",
      },
    ],
    metrics: [
      { value: "+250%", label: "Growth" },
      { value: "+300%", label: "Performance" },
      { value: "+40%", label: "Additional Growth" },
      { value: "3 Months", label: "Growth Period" },
    ],
  },

  {
    slug: "case-study-7",
    title: "Boosting Anti-Virus Sales.",
    description:
      "Discover how our bespoke marketing strategy and deep cybersecurity expertise boosted a global anti-virus company's sales by over 700% in just 12 weeks.",
    hero: "/case-studies/7/hero.avif",
    challengeTitle: "Generic Strategies & Underwhelming ROI.",
    challenge: [
      "A globally recognized anti-virus software firm was struggling to break through with digital marketing performance, despite significant investments in traditional networks and affiliate channels.",
      "Hesitant to engage new partners out of fear of cookie-cutter campaigns, they had only one core product in their affiliate program and heavily doubted that any agency truly understood the complexities of the cybersecurity ecosystem.",
    ],
    strategyTitle: "A Bespoke Marketing Strategy.",
    strategies: [
      {
        title: "Granular Data Analysis",
        description:
          "Mapped detailed user behavior, click funnels, and conversion patterns across different segments to quickly identify high-performing affiliate partners.",
      },
      {
        title: "Dynamic Optimization",
        description:
          "Utilized real-time data and feedback loops to fine-tune campaigns weekly, adjusting creatives, keywords, and innovative ad placements to enhance ROI.",
      },
      {
        title: "Risk & Compliance",
        description:
          "Leveraged a Homeland Security-certified expert to ensure all advertising content perfectly aligned with cybersecurity industry best practices and minimized risk.",
      },
    ],
    metrics: [
      { value: "+700%", label: "Sales Growth" },
      { value: "4×", label: "Return on Investment" },
      { value: "-7%", label: "Cost Reduction" },
      { value: "12 Weeks", label: "Growth Period" },
    ],
  },

  {
    slug: "case-study-8",
    title: "Transforming Insurance Sales.",
    description:
      "Discover how we guided a mid-sized UK insurance firm through a digital transformation, leveraging comprehensive data analysis to revamp campaigns and maximize customer acquisition.",
    hero: "/case-studies/8/hero.avif",
    challengeTitle: "Generic Marketing & Stagnating Sales.",
    challenge: [
      "Despite a strong portfolio of insurance products, the company’s digital marketing efforts were highly generic, leading to stagnating online sales and a limited digital presence.",
      "There was minimal utilization of customer data analytics to inform strategies. This resulted in underperforming online sales channels, low conversion rates, and highly inefficient customer acquisition that required a complete transformation.",
    ],
    strategyTitle: "Data-Driven Digital Transformation.",
    strategies: [
      {
        title: "Data Analysis",
        description:
          "Conducted an in-depth analysis of customer data to identify key demographics, purchasing behaviors, and preference trends to inform marketing decisions.",
      },
      {
        title: "Segmentation",
        description:
          "Segmented the broader customer base into distinct groups to develop tailored marketing messages and customized offers designed to increase relevance.",
      },
      {
        title: "Channel Optimization",
        description:
          "Revamped online sales platforms for a seamless user experience, and deployed highly targeted advertising campaigns across social media and search engines.",
      },
    ],
    metrics: [
      { value: "+298%", label: "Sales Growth" },
      { value: "-8%", label: "Cost Reduction" },
    ],
  },
];
