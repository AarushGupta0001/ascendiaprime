import { NextResponse } from "next/server";
import type { ContactApiResponse, ContactFormData } from "@/types/contact";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

export async function POST(request: Request): Promise<NextResponse<ContactApiResponse>> {
  try {
    const body = (await request.json()) as Partial<ContactFormData>;

    const name = body.name?.trim() ?? "";
    const company = body.company?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const website = body.website?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name || name.length < 2) {
      return NextResponse.json(
        { success: false, message: "Please enter your full name." },
        { status: 400 },
      );
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (!phone) {
      return NextResponse.json(
        { success: false, message: "Please enter your phone number." },
        { status: 400 },
      );
    }

    if (!company) {
      return NextResponse.json(
        { success: false, message: "Please enter your company name." },
        { status: 400 },
      );
    }

    if (website && !isValidUrl(website)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid website URL." },
        { status: 400 },
      );
    }

    if (!message || message.length < 10) {
      return NextResponse.json(
        { success: false, message: "Please enter a message (at least 10 characters)." },
        { status: 400 },
      );
    }

    if (message.length > 180) {
      return NextResponse.json(
        { success: false, message: "Message must be 180 characters or fewer." },
        { status: 400 },
      );
    }

    console.info("[contact]", { name, company, email, phone, website, message });

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been sent. We'll be in touch shortly.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
