import nodemailer from "nodemailer";

interface EnquiryPayload {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let payload: EnquiryPayload;
  try {
    payload = (await request.json()) as EnquiryPayload;
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (!name || name.length > 200) {
    return Response.json({ error: "Please enter your name" }, { status: 400 });
  }
  if (!EMAIL_RE.test(email) || email.length > 320) {
    return Response.json({ error: "Please enter a valid email address" }, { status: 400 });
  }
  if (message.length > 5000) {
    return Response.json({ error: "Message is too long" }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, ENQUIRY_TO } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("Enquiry form: SMTP_HOST, SMTP_USER, or SMTP_PASS is not configured");
    return Response.json(
      { error: "The enquiry service is not configured. Please try again later." },
      { status: 503 }
    );
  }

  const port = Number(SMTP_PORT ?? 587);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const to = ENQUIRY_TO ?? SMTP_USER;
  const from = SMTP_FROM ?? SMTP_USER;

  try {
    await transporter.sendMail({
      from: `"Let's Advertising Website" <${from}>`,
      to,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `What they'd like to grow: ${message || "(not provided)"}`,
      ].join("\n"),
      html: `
        <h2>New enquiry from the website</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>What they'd like to grow:</strong> ${escapeHtml(message) || "(not provided)"}</p>
      `,
    });
  } catch (err) {
    console.error("Enquiry form: failed to send email", err);
    return Response.json(
      { error: "We couldn't send your enquiry right now. Please try again later." },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
