import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactBody = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body: ContactBody = await request.json();

    const name = body.name?.trim() || "";
    const email = body.email?.trim() || "";
    const subject = body.subject?.trim() || "";
    const message = body.message?.trim() || "";

    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const from = process.env.CONTACT_FROM_EMAIL;
    const to = process.env.CONTACT_TO_EMAIL;

    if (!process.env.RESEND_API_KEY || !from || !to) {
      return Response.json(
        { error: "Email environment variables are missing." },
        { status: 500 }
      );
    }

    const adminEmail = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New message from ${name} via your portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #111; max-width: 640px; margin: 0 auto; padding: 24px;">
          <div style="border: 1px solid #e5e7eb; border-radius: 14px; overflow: hidden;">
            <div style="background: #0f172a; color: white; padding: 20px 24px;">
              <h2 style="margin: 0; font-size: 22px;">New Portfolio Inquiry</h2>
              <p style="margin: 8px 0 0; color: #cbd5e1;">A new message was submitted through your portfolio contact form.</p>
            </div>

            <div style="padding: 24px; background: #ffffff;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>

              <div style="margin-top: 20px;">
                <p style="margin-bottom: 8px;"><strong>Message:</strong></p>
                <div style="white-space: pre-wrap; border: 1px solid #e5e7eb; border-radius: 10px; padding: 14px; background: #f8fafc;">
                  ${message}
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
      text: `
New Portfolio Inquiry

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
    });

    if (adminEmail.error) {
      console.error("Admin email error:", adminEmail.error);
      return Response.json(
        { error: "Failed to send email." },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from,
      to: email,
      subject: "Thanks for reaching out",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #111; max-width: 640px; margin: 0 auto; padding: 24px;">
          <h2>Thanks for reaching out</h2>
          <p>Hi ${name},</p>
          <p>Thanks for contacting me through my portfolio. I’ve received your message and I’ll get back to you as soon as I can.</p>
          <p><strong>Your subject:</strong> ${subject}</p>
          <p style="margin-top: 24px;">— Abdulazeez Kolawole</p>
        </div>
      `,
      text: `
Hi ${name},

Thanks for contacting me through my portfolio. I’ve received your message and I’ll get back to you as soon as I can.

Your subject: ${subject}

— Abdulazeez Kolawole
      `,
    });

    return Response.json(
      { success: true, message: "Message sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return Response.json(
      { error: "Something went wrong while sending your message." },
      { status: 500 }
    );
  }
}