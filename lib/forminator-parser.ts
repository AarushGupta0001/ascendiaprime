export type ParsedForminatorEmbed = {
  formId: string;
  formHtml: string;
  stylesheets: string[];
  scripts: string[];
  inlineScripts: string[];
};

function extractHref(tag: string): string | null {
  const match = tag.match(/href=['"]([^'"]+)['"]/i);
  return match?.[1] ?? null;
}

function extractSrc(tag: string): string | null {
  const match = tag.match(/src=['"]([^'"]+)['"]/i);
  return match?.[1] ?? null;
}

const REQUIRED_SCRIPT_PATTERNS = [
  /jquery\.min\.js/i,
  /jquery-migrate/i,
  /jquery\/ui\/core/i,
  /jquery\.validate/i,
  /forminator-form\.min\.js/i,
  /front\.multi\.min\.js/i,
  /intlTelInput\.min\.js/i,
];

const REQUIRED_STYLESHEET_PATTERNS = [
  new RegExp(`forminator-module-css-\\d+`),
  /forminator-icons/i,
  /forminator-utilities/i,
  /forminator-grid/i,
  /forminator-form-default/i,
  /intlTelInput/i,
];

export function parseForminatorHtml(html: string, formId: string): ParsedForminatorEmbed | null {
  const formMatch = html.match(
    new RegExp(`<form[^>]*id=["']forminator-module-${formId}["'][\\s\\S]*?</form>`, "i"),
  );

  if (!formMatch?.[0]) {
    return null;
  }

  const formHtml = formMatch[0]
    .replace(/\sstyle=["']display:\s*none;?["']/i, "")
    .replace(/data-forminator-render=["']0["']/i, 'data-forminator-render="1"');

  const linkTags = [...html.matchAll(/<link[^>]+>/gi)].map((match) => match[0]);
  const stylesheets = [
    ...new Set(
      linkTags
        .filter((tag) => REQUIRED_STYLESHEET_PATTERNS.some((pattern) => pattern.test(tag)))
        .map(extractHref)
        .filter((href): href is string => Boolean(href)),
    ),
  ];

  const moduleStylesheet = linkTags.find((tag) => tag.includes(`forminator-module-css-${formId}`));
  if (moduleStylesheet) {
    const href = extractHref(moduleStylesheet);
    if (href) {
      stylesheets.unshift(href);
    }
  }

  const scriptTags = [...html.matchAll(/<script[^>]*>[\s\S]*?<\/script>/gi)].map((match) => match[0]);
  const externalScripts = [
    ...new Set(
      scriptTags
        .filter((tag) => tag.includes("src="))
        .filter((tag) => REQUIRED_SCRIPT_PATTERNS.some((pattern) => pattern.test(tag)))
        .map(extractSrc)
        .filter((src): src is string => Boolean(src)),
    ),
  ];

  const inlineScripts = scriptTags
    .filter((tag) => !tag.includes("src="))
    .filter((tag) => tag.includes(`forminator-module-${formId}`) || tag.includes(`form_id: "${formId}"`) || tag.includes(`form_id: '${formId}'`) || tag.includes(`form_id: ${formId}`) || tag.includes(`Forminator_Cform_Paginations[${formId}]`) || tag.includes(`form_id: "${formId}"`) || tag.includes(`form_id","${formId}"`) || tag.includes(`form_id\\":${formId}`) || tag.includes(`form_id\\":${formId},`) || tag.includes(`form_id\\":${formId}}`) || tag.includes(`form_id\\": \\"${formId}\\"`) || tag.includes(`form_id\\":\\"${formId}\\"`) || tag.includes(`form_id\\":\\"${formId}\\",`) || tag.includes(`form_id=${formId}`) || tag.includes(`form_id: \\"${formId}\\"`) || tag.includes(`form_id\\",\\"${formId}\\"`) || tag.includes(`form_id\\":${formId}`))
    .map((tag) => tag.replace(/^<script[^>]*>/i, "").replace(/<\/script>$/i, ""));

  const forminatorFrontConfig = scriptTags.find(
    (tag) => tag.includes("var ForminatorFront") && tag.includes("ajaxUrl"),
  );
  if (forminatorFrontConfig) {
    const content = forminatorFrontConfig.replace(/^<script[^>]*>/i, "").replace(/<\/script>$/i, "");
    if (!inlineScripts.some((script) => script.includes("var ForminatorFront"))) {
      inlineScripts.unshift(content);
    }
  }

  return {
    formId,
    formHtml,
    stylesheets: [...new Set(stylesheets)],
    scripts: externalScripts,
    inlineScripts,
  };
}
