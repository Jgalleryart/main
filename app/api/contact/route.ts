import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const { name, email, message } = (await request.json()) as {
      name?: string;
      email?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Resend API key is not configured" }, { status: 500 });
    }

    const toEmail = process.env.CONTACT_TO_EMAIL;
    if (!toEmail) {
      return NextResponse.json({ error: "Contact recipient is not configured" }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "Gallery Contact <onboarding@resend.dev>",
      to: toEmail,
      subject: "New Inquiry from Website",
      replyTo: email,
      text: `Name: ${name}
Email: ${email}

Message:
${message}`,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
