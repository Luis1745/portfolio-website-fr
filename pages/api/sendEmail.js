import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    // Configurar CORS para Vercel
    res.setHeader('Access-Control-Allow-Origin', 'https://portfolio-website-fr.vercel.app/');
    res.setHeader('Access-Control-Allow-Methods', 'POST');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // Validación anti-bots
    if (req.body.honeyPot) {
        return res.status(400).json({ error: 'Bot detected' });
    }

    try {
        await resend.emails.send({
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_TO,
            subject: `Nuevo mensaje de ${req.body.name}`,
            html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #2563eb;">Nuevo mensaje desde tu portafolio</h2>
          <p><strong>Nombre:</strong> ${req.body.name}</p>
          <p><strong>Email:</strong> ${req.body.email}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${req.body.message}</p>
        </div>
      `,
        });

        return res.status(200).json({ success: true });

    } catch (error) {
        console.error('Error Resend:', error);
        return res.status(500).json({ error: 'Error sending message' });
    }
}