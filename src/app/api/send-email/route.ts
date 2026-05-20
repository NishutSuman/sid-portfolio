import { EmailTemplate } from "@/components/email-template";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, message, projectType, timeline } = await req.json();

  // Validate required fields
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Invalid email format" },
      { status: 400 }
    );
  }

  // Validate message length
  if (message.trim().length < 30) {
    return NextResponse.json(
      { error: "Message should be at least 30 characters long" },
      { status: 400 }
    );
  }

  // Optional: Block disposable email providers
  const blockList = ["tempmail", "mailinator", "10minutemail", "guerrillamail"];
  const domain = email.split("@")[1];
  if (blockList.some((blocked) => domain.includes(blocked))) {
    return NextResponse.json(
      { error: "Temporary email addresses are not allowed" },
      { status: 403 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing Resend API Key" },
      { status: 500 }
    );
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      // FROM must be a Resend-verified domain. Using Resend's default sandbox
      // sender for now; swap to e.g. "Sidhartha Sahoo <contact@yourdomain.com>"
      // once your domain is verified in the Resend dashboard.
      from: "Sidhartha Sahoo Portfolio <onboarding@resend.dev>",
      to: ["mastersidhh@gmail.com"],
      subject: `New Portfolio Inquiry - ${projectType || "General"}`,
      react: EmailTemplate({ name, email, message, projectType, timeline }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
