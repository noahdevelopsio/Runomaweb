"use server";

export async function sendContactEmail(formData: {
  name: string;
  business: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}) {
  const apiKey = process.env.ZEPTOMAIL_API_KEY;
  const senderEmail = process.env.ZEPTOMAIL_SENDER_EMAIL;
  const recipientEmail = process.env.ZEPTOMAIL_RECIPIENT_EMAIL || senderEmail;

  if (!apiKey || !senderEmail) {
    console.error("ZeptoMail configuration missing");
    return { success: false, error: "Configuration Error" };
  }

  const endpoint = "https://api.zeptomail.com/v1.1/email";

  const emailBody = {
    from: {
      address: senderEmail,
      name: "RUNOMA Contact Form"
    },
    to: [
      {
        email_address: {
          address: recipientEmail,
          name: "RUNOMA Admin"
        }
      }
    ],
    reply_to: [
      {
        address: formData.email,
        name: formData.name
      }
    ],
    subject: `New Lead: ${formData.business} - ${formData.service}`,
    htmlbody: `
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
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": apiKey
      },
      body: JSON.stringify(emailBody)
    });

    const data = await response.json();

    if (response.ok) {
      return { success: true, data };
    } else {
      console.error("ZeptoMail API Error:", data);
      return { success: false, error: data.message || "Failed to send email" };
    }
  } catch (error) {
    console.error("Network or internal error sending email:", error);
    return { success: false, error: "Internal Server Error" };
  }
}
