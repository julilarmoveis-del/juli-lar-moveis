import { NextRequest, NextResponse } from "next/server";
import { getProductBySlug } from "@/lib/products";
import { SITE_URL } from "@/lib/site-config";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const responseHeaders = {
  "Cache-Control": "no-store",
  "X-Content-Type-Options": "nosniff",
};

interface CheckoutItemInput {
  slug?: unknown;
  quantity?: unknown;
}

interface CheckoutBody {
  items?: unknown;
  customer?: {
    name?: unknown;
    email?: unknown;
  };
}

function jsonError(message: string, status: number) {
  return NextResponse.json(
    { error: message },
    { status, headers: responseHeaders }
  );
}

export async function POST(req: NextRequest) {
  const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN?.trim();
  const checkoutEnabled = process.env.CHECKOUT_ENABLED === "true";

  if (!checkoutEnabled || !accessToken) {
    return jsonError(
      "O pagamento online está sendo configurado e ainda não está disponível. Nenhuma cobrança foi gerada.",
      503
    );
  }

  if (!req.headers.get("content-type")?.startsWith("application/json")) {
    return jsonError("Formato de solicitação inválido.", 415);
  }

  let body: CheckoutBody;
  try {
    body = (await req.json()) as CheckoutBody;
  } catch {
    return jsonError("Dados de checkout inválidos.", 400);
  }

  if (!Array.isArray(body.items) || body.items.length === 0 || body.items.length > 20) {
    return jsonError("Carrinho vazio ou inválido.", 400);
  }

  const items = [];
  for (const rawItem of body.items as CheckoutItemInput[]) {
    if (!rawItem || typeof rawItem !== "object") {
      return jsonError("Produto inválido no carrinho.", 400);
    }

    const slug = rawItem.slug;
    const quantity = rawItem.quantity;
    if (
      typeof slug !== "string" ||
      typeof quantity !== "number" ||
      !Number.isSafeInteger(quantity) ||
      quantity < 1 ||
      quantity > 20
    ) {
      return jsonError("Quantidade ou produto inválido no carrinho.", 400);
    }

    const product = getProductBySlug(slug);
    if (!product || product.availability !== "in_stock") {
      return jsonError(
        "Um dos produtos não está disponível. Revise o carrinho.",
        409
      );
    }

    items.push({
      id: product.sku,
      title: product.name,
      quantity,
      unit_price: Math.round(product.price * 100) / 100,
      currency_id: "BRL",
      picture_url: `${SITE_URL}${product.image}`,
    });
  }

  const name =
    typeof body.customer?.name === "string" ? body.customer.name.trim() : "";
  const email =
    typeof body.customer?.email === "string" ? body.customer.email.trim() : "";

  if (name.length < 3 || name.length > 120) {
    return jsonError("Informe o nome completo.", 400);
  }
  if (
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return jsonError("Informe um e-mail válido.", 400);
  }

  try {
    const preference = {
      items,
      payer: { name, email },
      back_urls: {
        success: `${SITE_URL}/checkout/sucesso`,
        pending: `${SITE_URL}/checkout/sucesso?status=pending`,
        failure: `${SITE_URL}/checkout?status=failure`,
      },
      auto_return: "approved",
      expires: true,
      expiration_date_from: new Date().toISOString(),
      expiration_date_to: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    };

    const response = await fetch(
      "https://api.mercadopago.com/checkout/preferences",
      {
        method: "POST",
        cache: "no-store",
        redirect: "error",
        signal: AbortSignal.timeout(12_000),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(preference),
      }
    );

    if (!response.ok) {
      return jsonError(
        "Não foi possível iniciar o pagamento. Seu carrinho foi preservado.",
        502
      );
    }

    const data = (await response.json()) as { init_point?: unknown };
    if (typeof data.init_point !== "string") {
      return jsonError("O provedor de pagamento não retornou uma URL válida.", 502);
    }

    const paymentUrl = new URL(data.init_point);
    const allowedHosts = new Set([
      "www.mercadopago.com.br",
      "www.mercadopago.com",
    ]);
    if (paymentUrl.protocol !== "https:" || !allowedHosts.has(paymentUrl.hostname)) {
      return jsonError("O provedor de pagamento retornou uma URL inválida.", 502);
    }

    return NextResponse.json(
      { redirectUrl: paymentUrl.href },
      { headers: responseHeaders }
    );
  } catch {
    return jsonError(
      "Não foi possível conectar ao pagamento. Seu carrinho foi preservado.",
      502
    );
  }
}
