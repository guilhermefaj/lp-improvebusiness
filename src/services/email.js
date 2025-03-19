import { Resend } from 'resend';

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

export async function sendContactEmail({ name, email, phone, company, message }) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Formulário de Contato <onboarding@resend.dev>',
      to: ['contato@improve.business'],
      subject: `Novo contato de ${name} - ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1E1E1E; padding: 20px; text-align: center;">
            <img 
              src="https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742314338/Group_1_t1wmpz.svg"
              alt="ImproveAI Logo"
              style="width: 95px; height: 86px;"
            />
          </div>
          
          <div style="padding: 20px;">
            <h1 style="color: #1E1E1E; font-size: 24px; margin-bottom: 20px;">
              Nova mensagem de contato
            </h1>
            
            <div style="margin-bottom: 20px;">
              <p style="margin: 10px 0; color: #4A5568;">
                <strong>Nome:</strong> ${name}
              </p>
              <p style="margin: 10px 0; color: #4A5568;">
                <strong>Email:</strong> ${email}
              </p>
              <p style="margin: 10px 0; color: #4A5568;">
                <strong>Telefone:</strong> ${phone}
              </p>
              <p style="margin: 10px 0; color: #4A5568;">
                <strong>Empresa:</strong> ${company}
              </p>
            </div>
            
            <div style="background: #f7f8fb; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #1E1E1E; font-size: 18px; margin-bottom: 10px;">
                Mensagem:
              </h2>
              <p style="color: #4A5568; line-height: 1.6;">
                ${message}
              </p>
            </div>
            
            <div style="text-align: center; color: #718096; font-size: 14px;">
              <p>Esta mensagem foi enviada através do formulário de contato do site.</p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      throw new Error(error.message);
    }

    return { success: true, data };
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return { success: false, error: error.message };
  }
} 