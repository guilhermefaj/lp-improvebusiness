import { NextResponse } from 'next/server';

const RESEND_API_KEY = 're_JxiGjetc_DbeCTN8ru9rZBZAJRoSHxA8E';

export async function POST(request: Request) {
  try {
    const { name, email, phone, company, message } = await request.json();

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
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

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || 'Falha ao enviar email');
    }

    const data = await res.json();
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Erro ao processar a requisição' },
      { status: 500 }
    );
  }
} 