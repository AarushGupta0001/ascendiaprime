import { NextResponse } from "next/server";

const WORDPRESS_AJAX =
  "https://ascendiaprime.com/wp-admin/admin-ajax.php";

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";

    if (
      contentType.includes("multipart/form-data") ||
      contentType.includes("application/x-www-form-urlencoded")
    ) {
      const formData = await request.formData();
      const formId = formData.get("form_id")?.toString();
      const action = formData.get("action")?.toString();

      // Normalize form 3611 (Retargeting form) fields
      if (formId === "3611" && action?.includes("forminator_submit_form")) {
        const select1 = formData.get("select-1")?.toString()?.trim() || "";
        const customSelect1 =
          formData.get("custom-select-1")?.toString()?.trim() || "";

        if (
          select1 === "Recover ecommerce sales" ||
          select1 === "one" ||
          select1.toLowerCase().includes("ecommerce") ||
          select1.toLowerCase().includes("cart")
        ) {
          formData.set("select-1", "one");
        } else if (
          select1 === "Increase lead completion" ||
          select1 === "two" ||
          select1.toLowerCase().includes("lead")
        ) {
          formData.set("select-1", "two");
        } else if (select1) {
          formData.set("select-1", "custom_option");
          formData.set("custom-select-1", customSelect1 || select1);
        }

        // If nonce is missing or empty, fetch a fresh nonce
        if (!formData.get("forminator_nonce")) {
          try {
            const nonceRes = await fetch(WORDPRESS_AJAX, {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              body: "action=forminator_get_nonce&form_id=3611",
              cache: "no-store",
            });
            const nonceJson = await nonceRes.json();
            if (nonceJson && nonceJson.data) {
              formData.set("forminator_nonce", nonceJson.data);
            }
          } catch (e) {
            console.warn("Could not fetch fallback nonce for 3611:", e);
          }
        }
      }

      // Convert FormData into URLSearchParams for clean, reliable admin-ajax delivery
      const params = new URLSearchParams();
      formData.forEach((value, key) => {
        if (typeof value === "string") {
          params.append(key, value);
        }
      });

      const response = await fetch(WORDPRESS_AJAX, {
        method: "POST",
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded; charset=UTF-8",
          "User-Agent": "AscendiaPrime-NextJS/1.0",
        },
        body: params.toString(),
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
    }

    const body = await request.arrayBuffer();

    const response = await fetch(WORDPRESS_AJAX, {
      method: "POST",
      headers: {
        "Content-Type":
          contentType ||
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
