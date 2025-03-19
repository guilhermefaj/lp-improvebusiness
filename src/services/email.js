import { Resend } from 'resend';

let resend;
try {
  resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);
} catch (error) {
  console.warn('Email service not configured');
}

export async function sendEmail({ name, email, message }) {
  if (!resend) {
    console.warn('Email service not available');
    return { error: 'Email service not configured' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Formulário de Contato <onboarding@resend.dev>',
      to: ['contato@improve.business'],
      subject: `Novo contato de ${name}`,
      html: `
        <h1>Novo contato do site</h1>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `
    });

    if (error) {
      return { error };
    }

    return { data };
  } catch (error) {
    return { error: error.message };
  }
} 