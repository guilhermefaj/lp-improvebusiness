import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.use(cors());
router.use(express.json());

router.post('/send', async (req, res) => {
  try {
    const { name, email, phone, company, message } = req.body;

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.VITE_RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Formulário de Contato <onboarding@resend.dev>',
        to: ['contato@improve.business'],
        subject: `Novo contato de ${name} - ${company}`,
        html: `
          <h1>Novo contato do site</h1>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${phone}</p>
          <p><strong>Empresa:</strong> ${company}</p>
          <p><strong>Mensagem:</strong> ${message}</p>
        `,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Falha ao enviar email');
    }

    res.json({ data });
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : 'Erro ao processar a requisição'
    });
  }
});

export default router; 