import { NextResponse } from "next/server";

import { parseForminatorHtml } from "@/lib/forminator-parser";
import { getForminatorParseId, getForminatorSourceUrl } from "@/lib/forminator";

type RouteContext = {
  params: Promise<{ formId: string }>;
};

export async function GET(_request: Request, context: RouteContext) {
  const { formId } = await context.params;

  if (!/^\d+$/.test(formId)) {
    return NextResponse.json({ error: "Invalid form id" }, { status: 400 });
  }

  try {
    const sourceUrl = getForminatorSourceUrl(formId);
    const response = await fetch(sourceUrl, {
      headers: {
        "User-Agent": "AscendiaPrime-NextJS/1.0",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Unable to load Forminator form ${formId}` },
        { status: response.status },
      );
    }

    const html = await response.text();
    const parseId = getForminatorParseId(formId);
    const parsed = parseForminatorHtml(html, parseId);

    if (!parsed) {
      return NextResponse.json(
        { error: `Forminator form ${formId} was not found in WordPress output` },
        { status: 404 },
      );
    }

    return NextResponse.json(parsed);
  } catch {
    return NextResponse.json(
      { error: `Failed to fetch Forminator form ${formId}` },
      { status: 500 },
    );
  }
}
