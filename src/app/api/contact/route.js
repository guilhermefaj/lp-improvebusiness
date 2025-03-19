import { Resend } from 'resend';
import { EmailTemplate } from '../../../components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    const data = await resend.emails.send({
      from: 'Formulário de Contato <onboarding@resend.dev>',
      to: ['pedro@improve.business'],
      subject: `Novo contato de ${name} - ${company}`,
      react: EmailTemplate({
        name,
        email,
        phone,
        company,
        message
      })
    });

    return Response.json({ message: 'Email enviado com sucesso' });
  } catch (error) {
    return Response.json({ error: 'Erro ao enviar email' }, { status: 500 });
  }
} 