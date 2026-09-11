import { NextRequest, NextResponse } from "next/server";

// Endpoint que cria uma preferência de pagamento no Mercado Pago (Checkout Pro).
// Suporta Pix, cartão de crédito/débito e boleto — os métodos mais comuns no
// mercado brasileiro. Para funcionar em produção, configure a variável de
// ambiente MERCADOPAGO_ACCESS_TOKEN (veja .env.example).
//
// Enquanto o token não é configurado, o endpoint responde em "modo demonstração":
// nenhuma cobrança é criada e o cliente é redirecionado direto para a página
// de sucesso, para que o fluxo do site possa ser testado de ponta a ponta.

interface CheckoutItem {
  slug: string;
  name: string;
  price: number;
  quantity: number;
}

interface CheckoutBody {
  items: CheckoutItem[];
  customer: {
    name: string;
    email: string;
    phone?: string;
  };
}

export async function POST(req: NextRequest) {
  const body: CheckoutBody = await req.json();

  if (!body.items || body.items.length === 0) {
    return NextResponse.json(
      { error: "Carrinho vazio." },
      { status: 400 }
    );
  }

  const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://julilarmoveis.com";

  if (!accessToken) {
    // Modo demonstração — sem gateway de pagamento configurado ainda.
    return NextResponse.json({
      demo: true,
      redirectUrl: `${siteUrl}/checkout/sucesso?demo=1`,
    });
  }

  try {
    const preference = {
      items: body.items.map((item) => ({
        title: item.name,
        quantity: item.quantity,
        unit_price: item.price,
        currency_id: "BRL",
      })),
      payer: {
        name: body.customer?.name,
        email: body.customer?.email,
      },
      back_urls: {
        success: `${siteUrl}/checkout/sucesso`,
        pending: `${siteUrl}/checkout/sucesso?status=pending`,
        failure: `${siteUrl}/checkout?status=failure`,
      },
      auto_return: "approved",
    };

    const response = await fetch(
      "https://api.mercadopago.com/checkout/preferences",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(preference),
      }
    );

    if (!response.ok) {
      const errorBody = await response.text();
      return NextResponse.json(
        { error: "Falha ao criar preferência de pagamento.", detail: errorBody },
        { status: 502 }
      );
    }

    const data = await response.json();
    return NextResponse.json({ redirectUrl: data.init_point });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro inesperado ao processar o pagamento." },
      { status: 500 }
    );
  }
}
