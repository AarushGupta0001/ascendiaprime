import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ascendiaprime.com";

export function createPageMetadata(options: {
  title: string;
  description?: string;
  keywords?: string;
  path: string;
  openGraph?: Partial<Metadata["openGraph"]>;
}): Metadata {
  const { title, description, keywords, path, openGraph } = options;
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "AscendiaPrime",
      locale: "en_GB",
      type: "website",
      ...openGraph,
    },
  };
}
