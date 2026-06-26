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

export const headerNavItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/advertisers", label: "For Advertisers" },
  { href: "/our-partners", label: "Our Partner Ecosystem" },
];

export const solutionsTrigger: NavItem = {
  href: "/#split-services-wrapper",
  label: "Solutions",
};

export const contactCta: NavItem = {
  href: "/#contact",
  label: "Contact Us",
};

export const megaMenuColumns: MegaMenuColumn[] = [
  {
    title: "Performance Marketing & Partner Growth",
    titleLines: ["Performance Marketing", "& Partner Growth"],
    headerIcon: "chart",
    bordered: true,
    items: [
      { href: "/affiliates-publisher-marketing", label: "Affiliate & Publisher Marketing", icon: "users" },
      { href: "/ppc", label: "Google, Meta & PPC Ads", icon: "globe" },
      { href: "/retargeting", label: "Retargeting Campaigns", icon: "target" },
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
  { href: "/#case-studies", label: "Case Studies" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#different", label: "How are we different?" },
  { href: "/#contact", label: "Contact" },
  { href: "#", label: "Blogs" },
];

export const footerLegalLinks: NavItem[] = [
  { href: "/gdpr-data-protection", label: "GDPR & Data Protection Commitment" },
  { href: "/privacy-cookies-policy", label: "Privacy & Cookies Policy" },
  { href: "/modern-slavery-statement", label: "Modern Slavery Statement" },
  { href: "/legal-notice-website-terms", label: "Legal Notice website terms" },
  { href: "/code-of-conduct", label: "Code of conduct" },
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
