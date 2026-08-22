import { NextResponse } from "next/server";

const WORDPRESS_AJAX =
  "https://ascendiaprime.com/wp-admin/admin-ajax.php";

export async function POST(request: Request) {
  try {
    const body = await request.arrayBuffer();

    const response = await fetch(WORDPRESS_AJAX, {
      method: "POST",
      headers: {
        "Content-Type":
          request.headers.get("content-type") ??
          "application/x-www-form-urlencoded; charset=UTF-8",
        "User-Agent": "AscendiaPrime-NextJS/1.0",
      },
      body,
      cache: "no-store",
    });

    const responseBody = await response.arrayBuffer();

    return new NextResponse(responseBody, {
      status: response.status,
      headers: {
        "Content-Type":
          response.headers.get("content-type") ??
          "application/json; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Forminator AJAX proxy error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to process Forminator request",
      },
      { status: 502 },
    );
  }
}
