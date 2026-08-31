export type NavItem = {
  href: string;
  label: string;
  external?: boolean;
};

export type MegaMenuItem = {
  href: string;
  label: string;
  icon: string;
};

export type MegaMenuColumn = {
  title: string;
  titleLines: [string, string];
  headerIcon: string;
  items: MegaMenuItem[];
  bordered?: boolean;
};

/** Homepage section anchors — verified against HomePage.tsx */
export const homeAnchors = {
  solutions: "/#split-services-wrapper",
  caseStudies: "/#case-studies",
  different: "/#different",
  contact: "/#contact",
} as const;

export const headerNavItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/advertisers", label: "For Advertisers" },
  { href: "/our-partners", label: "Our Partner Ecosystem" },
  { href: "/case-studies", label: "Case Studies" },
];

export const solutionsTrigger: NavItem = {
  href: homeAnchors.solutions,
  label: "Solutions",
};

export const contactCta: NavItem = {
  href: "/contact-us",
  label: "Start a Conversation",
};

export const mobileNavLinks: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: solutionsTrigger.href, label: "Solutions" },
  { href: "/advertisers", label: "For Advertisers" },
  { href: "/our-partners", label: "Our Partners" },
  { href: "/case-studies", label: "Case Studies" },
];

export const megaMenuColumns: MegaMenuColumn[] = [
  {
    title: "Performance Marketing & Partner Growth",
    titleLines: ["Performance Marketing", "& Partner Growth"],
    headerIcon: "chart",
    bordered: true,
    items: [
      { href: "/affiliates-publisher-marketing", label: "Affiliate & Publisher Marketing", icon: "users" },
      { href: "/ppc", label: "Google, Meta & PPC Ads", icon: "globe" },
      { href: "/retargeting-campaigns", label: "Retargeting Campaigns", icon: "target" },
      { href: "/conversion-led-growth", label: "Conversion-Led Growth", icon: "trend" },
    ],
  },
  {
    title: "Programmatic Branding & Awareness",
    titleLines: ["Programmatic Branding", "& Awareness"],
    headerIcon: "megaphone",
    bordered: true,
    items: [
      { href: "/display-advertising", label: "Display Advertising", icon: "monitor" },
      { href: "/video-native-ads", label: "Video & Native Ads", icon: "play" },
      { href: "/connected-tv", label: "Connected TV", icon: "tv" },
      { href: "/dsp", label: "DSP-Led Media Buying", icon: "bag" },
    ],
  },
  {
    title: "Digital, Creative & Web Solutions",
    titleLines: ["Digital, Creative", "& Web Solutions"],
    headerIcon: "code",
    items: [
      { href: "/webdev", label: "Website Development", icon: "web" },
      { href: "/seo", label: "SEO & Organic Growth", icon: "search" },
      { href: "/influencer-marketing", label: "Social Media & Influencers", icon: "influencer" },
      { href: "/orm", label: "ORM & Creative Solutions", icon: "shield" },
    ],
  },
];

export const footerCompanyLinks: NavItem[] = [
  { href: "/about-us", label: "About Us" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/coming-soon", label: "Testimonials" },
  { href: homeAnchors.different, label: "How are we different?" },
  { href: "/contact-us", label: "Contact" },
  { href: "/coming-soon", label: "Blogs" },
];

export const footerLegalLinks: NavItem[] = [
  { href: "/gdpr-data-protection", label: "GDPR & Data Protection" },
  { href: "/privacy-cookies-policy", label: "Privacy & Cookies Policy" },
  { href: "/modern-slavery-statement", label: "Modern Slavery Statement" },
  { href: "/legal-notice-website-terms", label: "Legal Notice & Website Terms" },
  { href: "/code-of-conduct", label: "Code of Conduct" },
  { href: "/complaints-policy", label: "Complaints Policy" },
];

export const socialLinks = [
  {
    href: "https://www.linkedin.com/company/ascendiaprime",
    label: "LinkedIn",
    network: "linkedin" as const,
  },
  {
    href: "https://x.com/ascendiaprime",
    label: "X",
    network: "x" as const,
  },
  {
    href: "https://www.facebook.com/profile.php?id=61570156896618",
    label: "Facebook",
    network: "facebook" as const,
  },
  {
    href: "https://www.instagram.com/ascendia_prime",
    label: "Instagram",
    network: "instagram" as const,
  },
];

/** IDs used as in-page contact / enquiry targets across service pages. */
export const contactSectionIds = [
  "contact",
  "lead-form-section",
  "campaign-form-section",
  "enquire-form",
  "inquiry-form-section",
] as const;

export const formSuccessMessage =
  "Thank you for your enquiry. Our team will review your details and get back to you shortly.";
