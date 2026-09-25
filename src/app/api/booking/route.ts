import { NextRequest, NextResponse } from "next/server";

// Booking request endpoint for JAZCAF Guest House
// In a production deployment this would forward to email/CRM/WhatsApp Business API.
// For now we log the request and return a success acknowledgement.

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, dates, guests, space, message, lang } = body || {};

    if (!name || !phone) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields (name, phone)" },
        { status: 400 }
      );
    }

    // Persist nothing in a DB by default; just log for the demo.
    console.log("[LadyRuthie's enquiry]", {
      name,
      phone,
      email: email || null,
      dates: dates || null,
      guests: guests || null,
      space: space || null,
      message: message || null,
      lang: lang || "en",
      at: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : "Unknown error" },
      { status: 500 }
    );
  }
}
