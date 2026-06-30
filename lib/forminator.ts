export const FORMINATOR_FORMS = {
  default: "2080",
  advertisers: "1808",
  partners: "2081",
} as const;

export type ForminatorFormId =
  | (typeof FORMINATOR_FORMS)[keyof typeof FORMINATOR_FORMS]
  | string;

const WORDPRESS_BASE =
  process.env.NEXT_PUBLIC_WORDPRESS_URL ??
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://ascendiaprime.com";

/**
 * WordPress pages/endpoints used to fetch each Forminator form markup.
 * Matches live AscendiaPrime Forminator shortcodes:
 * - [forminator_form id="2080"] — default contact form
 * - [forminator_form id="1808"] — advertiser inquiry
 * - [forminator_form id="2081"] — partner ecosystem inquiry
 */
const FORM_SOURCE_PATHS: Record<string, string> = {
  "2080": "/?forminator_embed=1&form_id=2080",
  /** Live WP advertiser page hosts form 2081 until form 1808 is published. */
  "1808": "/advertiser/",
  "2081": "/our-partners/",
};

/** When the requested id is not on the source page, parse this form id instead. */
const FORM_PARSE_ID_OVERRIDES: Record<string, string> = {
  "1808": "2081",
};

export function getForminatorSourceUrl(formId: string): string {
  const path = FORM_SOURCE_PATHS[formId] ?? `/?forminator_embed=1&form_id=${formId}`;
  return `${WORDPRESS_BASE.replace(/\/$/, "")}${path}`;
}

export function getForminatorParseId(formId: string): string {
  return FORM_PARSE_ID_OVERRIDES[formId] ?? formId;
}

export function resolveForminatorId(formId?: string): string {
  return formId ?? FORMINATOR_FORMS.default;
}
