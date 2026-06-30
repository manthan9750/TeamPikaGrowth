import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your Vercel Environment Variable
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    // Extract the form data sent from your React frontend
    const body = await request.json();
    const { name, email, phone, company, message, date, service } = body;

    // Send the email
    const data = await resend.emails.send({
      from: 'Team Pika Growth <onboarding@resend.dev>', // Keep this as resend.dev until you verify a custom domain later
      to: 'manthanpilvilkar4444@gmail.com', // Your receiving email
      subject: `New Consulting Booking: ${name} from ${company || 'Independent'}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #000;">New Booking Request 🚀</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <p><strong>Service Requested:</strong> ${service || 'General Consultation'}</p>
          <p><strong>Requested Date:</strong> ${date || 'ASAP'}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <h3>Message / Goals:</h3>
          <p style="background: #f9f9f9; padding: 15px; border-left: 4px solid #333;">
            ${message}
          </p>
        </div>
      `
    });

    // Return success to the frontend
    return NextResponse.json({ success: true, data }, { status: 200 });

  } catch (error) {
    console.error('Email sending failed:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal Server Error' }, 
      { status: 500 }
    );
  }
}