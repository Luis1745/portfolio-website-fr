import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    // CORS Configuration
    res.setHeader('Access-Control-Allow-Origin', process.env.NEXT_PUBLIC_VERCEL_URL || '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // Honeypot validation
    if (req.body.honeyPot) {
        return res.status(400).json({ error: 'Bot detected' });
    }

    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        await resend.emails.send({
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_TO,
            subject: `New message: ${subject}`,
            html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: #f5f5f5; padding: 15px; border-radius: 5px;">
            ${message}
          </p>
        </div>
      `,
        });

        return res.status(200).json({ success: true });

    } catch (error) {
        console.error('Resend error:', error);
        return res.status(500).json({ error: 'Error sending message' });
    }
}