import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, empresa, telefone, mensagem } = body;

    // Validação básica
    if (!name || !email || !mensagem) {
      return NextResponse.json(
        { error: "Campos obrigatórios não preenchidos" },
        { status: 400 }
      );
    }

    // Aqui você pode adicionar lógica para:
    // - Enviar email usando nodemailer, Resend, SendGrid, etc.
    // - Salvar no banco de dados
    // - Enviar para um CRM
    // - Integrar com webhook

    // Simulação de sucesso
    console.log("Nova mensagem de contato:", {
      name,
      email,
      empresa,
      telefone,
      mensagem,
      timestamp: new Date().toISOString(),
    });

    // Exemplo de integração com serviço de email (descomente e configure):
    /*
    const emailService = await sendEmail({
      to: 'contato@aestron.com.br',
      subject: `Nova mensagem de ${name}`,
      html: `
        <h2>Nova mensagem de contato</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${empresa || 'Não informado'}</p>
        <p><strong>Telefone:</strong> ${telefone || 'Não informado'}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem}</p>
      `
    });
    */

    return NextResponse.json(
      {
        success: true,
        message: "Mensagem enviada com sucesso!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao processar contato:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}

