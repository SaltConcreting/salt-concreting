import { NextResponse } from "next/server";
import { Resend } from "resend";

const RECIPIENT_EMAIL = "saltconcretingandcarpentry@gmail.com";
const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024;
const MAX_FILES = 5;

type EnquiryPayload = {
  name: string;
  email: string;
  phone: string;
  suburb: string;
  projectType: string;
  budget: string;
  message: string;
};

function getRequiredField(formData: FormData, key: string): string | null {
  const value = formData.get(key);
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildEnquiryEmailHtml(payload: EnquiryPayload): string {
  const rows = [
    ["Name", payload.name],
    ["Email", payload.email],
    ["Phone", payload.phone],
    ["Suburb", payload.suburb],
    ["Project Type", payload.projectType],
    ["Budget", payload.budget || "Not provided"],
    ["Message", payload.message],
  ];

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr>
          <td style="padding:12px 16px;border-bottom:1px solid #eee;color:#666;font-size:14px;vertical-align:top;width:140px;">${escapeHtml(label)}</td>
          <td style="padding:12px 16px;border-bottom:1px solid #eee;color:#111;font-size:14px;vertical-align:top;white-space:pre-wrap;">${escapeHtml(value)}</td>
        </tr>`,
    )
    .join("");

  return `
    <div style="font-family:Georgia,serif;color:#111;max-width:640px;">
      <h1 style="font-size:22px;font-weight:normal;margin:0 0 24px;">New website enquiry</h1>
      <table style="width:100%;border-collapse:collapse;border:1px solid #eee;">
        ${tableRows}
      </table>
    </div>
  `;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromAddress = process.env.RESEND_FROM;

  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json(
      { error: "Email service is not configured. Please try again later." },
      { status: 500 },
    );
  }

  if (!fromAddress) {
    console.error("RESEND_FROM is not configured");
    return NextResponse.json(
      { error: "Email service is not configured. Please try again later." },
      { status: 500 },
    );
  }

  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json(
      { error: "Invalid form submission. Please try again." },
      { status: 400 },
    );
  }

  const name = getRequiredField(formData, "name");
  const email = getRequiredField(formData, "email");
  const phone = getRequiredField(formData, "phone");
  const suburb = getRequiredField(formData, "suburb");
  const projectType = getRequiredField(formData, "projectType");
  const message = getRequiredField(formData, "message");
  const budget = getRequiredField(formData, "budget") ?? "";

  if (!name || !email || !phone || !suburb || !projectType || !message) {
    return NextResponse.json(
      { error: "Please complete all required fields." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const photoEntries = formData.getAll("photos");
  const attachments: { filename: string; content: Buffer }[] = [];

  for (const entry of photoEntries) {
    if (!(entry instanceof File) || entry.size === 0) continue;

    if (attachments.length >= MAX_FILES) {
      return NextResponse.json(
        { error: `You can upload up to ${MAX_FILES} photos.` },
        { status: 400 },
      );
    }

    if (entry.size > MAX_FILE_SIZE_BYTES) {
      return NextResponse.json(
        { error: "Each photo must be 5 MB or smaller." },
        { status: 400 },
      );
    }

    if (!entry.type.startsWith("image/")) {
      return NextResponse.json(
        { error: "Only image files can be uploaded." },
        { status: 400 },
      );
    }

    attachments.push({
      filename: entry.name,
      content: Buffer.from(await entry.arrayBuffer()),
    });
  }

  const payload: EnquiryPayload = {
    name,
    email,
    phone,
    suburb,
    projectType,
    budget,
    message,
  };

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: fromAddress,
    to: RECIPIENT_EMAIL,
    replyTo: email,
    subject: `New enquiry from ${name} — ${projectType}`,
    html: buildEnquiryEmailHtml(payload),
    attachments: attachments.length > 0 ? attachments : undefined,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      {
        error:
          "We couldn't send your enquiry right now. Please try again or email us directly.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}
