// app/api/leads/route.ts
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { z } from "zod";

const LeadSchema = z.object({
  name: z.string().min(1),
  email: z.email(),
  country: z.string().min(1),
  plan: z.string(),
  message: z.string().optional().nullable(),
  source: z.string().optional(),
  recaptchaToken: z.string(),
});

export async function POST(req) {
  try {
    const body = await req.json();
    const parsed = LeadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, country, plan, message, source, recaptchaToken } = parsed.data;

    // Verify reCAPTCHA
    const recaptchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    });

    const recaptchaJson = await recaptchaRes.json();

    if (!recaptchaJson.success) {
      console.error("reCAPTCHA verification failed:", recaptchaJson["error-codes"]);
      return NextResponse.json(
        { success: false, message: "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }

    // Configure transporter using env vars
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT || 587) === 465, // true for 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailBody = `
New lead from website

Name: ${name}
Email: ${email}
Country: ${country}
Plan: ${plan}
Message: ${message ?? "(no message)"}
Source: ${source ?? "(unknown)"}

Sent at: ${new Date().toISOString()}
`;

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.LEADS_TO,
      subject: `Enquiry from ${country}`,
      text: mailBody,
    });

    return NextResponse.json({ success: true, message: "Lead sent" }, { status: 200 });
  } catch (err) {
    console.error("Lead API error:", err);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
