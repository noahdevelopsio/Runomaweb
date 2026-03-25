"use server";

export async function sendContactEmail(formData: {
  name: string;
  business: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  site_url?: string;
}) {
  // Honeypot check: If a bot fills out the hidden "site_url" field, reject silently
  if (formData.site_url) {
    console.log("Honeypot triggered. Ignoring submission.");
    return { success: true }; // Pretend it worked
  }

  const apiKey = process.env.RESEND_API_KEY;
  const senderEmail = process.env.RESEND_SENDER_EMAIL;
  const recipientEmail = process.env.RESEND_RECIPIENT_EMAIL || senderEmail;

  if (!apiKey || !senderEmail) {
    console.error("Resend configuration missing");
    return { success: false, error: "Configuration Error" };
  }

  const endpoint = "https://api.resend.com/emails";

  const emailBody = {
    from: `RUNOMA Contact Form <${senderEmail}>`,
    to: [recipientEmail],
    subject: `New Lead: ${formData.business} - ${formData.service}`,
    reply_to: formData.email,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
        <h2 style="color: #4a5d4e; border-bottom: 2px solid #f0f4f1; padding-bottom: 10px;">New Audit Request</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Business:</strong> ${formData.business}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Service Interest:</strong> ${formData.service}</p>
        <div style="margin-top: 20px; padding: 15px; background: #f9fbf9; border-radius: 5px;">
          <p><strong>Brand Story / Message:</strong></p>
          <p style="white-space: pre-wrap;">${formData.message}</p>
        </div>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
        <p style="font-size: 12px; color: #999;">This email was sent via the RUNOMA Website Contact Form.</p>
      </div>
    `
  };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(emailBody)
    });

    const data = await response.json();

    if (response.ok) {
      return { success: true, data };
    } else {
      console.error("Resend API Error:", data);
      return { success: false, error: data.message || "Failed to send email" };
    }
  } catch (error) {
    console.error("Network or internal error sending email:", error);
    return { success: false, error: "Internal Server Error" };
  }
}
