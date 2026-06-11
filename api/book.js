import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const {
      fullName,
      brandName,
      businessPhone,
      personalPhone,
      email,
      slot
    } = req.body;

    // ---------------------------
    // BACKEND VALIDATION (IMPORTANT)
    // ---------------------------
    const emailRegex = /\S+@\S+\.\S+/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!fullName || !brandName || !businessPhone || !email || !slot) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields"
      });
    }

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format"
      });
    }

    if (!phoneRegex.test(businessPhone)) {
      return res.status(400).json({
        success: false,
        message: "Business phone must be 10 digits"
      });
    }

    const referenceId =
      "TPG-" + Math.random().toString(36).substring(2, 8).toUpperCase();

    console.log("NEW BOOKING:", req.body);

    // ---------------------------
    // INIT RESEND
    // ---------------------------
    const resend = new Resend(process.env.RESEND_API_KEY);

    // ---------------------------
    // EMAIL (CRM STYLE)
    // ---------------------------
    const emailResult = await resend.emails.send({
      from: "Team Pika Growth <onboarding@resend.dev>",
      to: "manthanpilvilkar4444@gmail.com",
      subject: `🔥 New Lead - ${brandName} (${referenceId})`,
      html: `
        <div style="font-family:Arial;padding:10px">
          <h2>New Booking Lead 🚀</h2>

          <p><b>Reference ID:</b> ${referenceId}</p>
          <hr/>

          <h3>Client Details</h3>
          <p><b>Name:</b> ${fullName}</p>
          <p><b>Brand:</b> ${brandName}</p>

          <h3>Contact</h3>
          <p><b>Business Phone:</b> ${businessPhone}</p>
          <p><b>Personal Phone:</b> ${
            personalPhone || "Not Provided"
          }</p>
          <p><b>Email:</b> ${email}</p>

          <h3>Booking Slot</h3>
          <p>${slot}</p>
        </div>
      `
    });

    console.log("EMAIL SENT:", emailResult);

    // ---------------------------
    // WHATSAPP ALERT
    // ---------------------------
    const whatsappMessage = `
🚀 NEW BOOKING LEAD

ID: ${referenceId}
Name: ${fullName}
Brand: ${brandName}
Phone: ${businessPhone}
Email: ${email}
Slot: ${slot}
`;

    const whatsappUrl = `https://wa.me/919769710678?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    return res.status(200).json({
      success: true,
      referenceId,
      whatsappUrl,
      emailStatus: emailResult
    });

  } catch (err) {
    console.error("BOOKING ERROR:", err);

    return res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
}