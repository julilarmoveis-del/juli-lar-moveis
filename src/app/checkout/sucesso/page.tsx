"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function CheckoutSucessoPage() {
  return (
    <Suspense fallback={null}>
      <CheckoutSucessoContent />
    </Suspense>
  );
}

function CheckoutSucessoContent() {
  const { clearCart } = useCart();
  const params = useSearchParams();
  const isDemo = params.get("demo") === "1";
  const isPending = params.get("status") === "pending";

  useEffect(() => {
    clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-3xl">
        {isPending ? "⏳" : "✓"}
      </div>
      <h1 className="font-heading text-2xl font-bold text-ink">
        {isPending ? "Pagamento em análise" : "Pedido recebido com sucesso!"}
      </h1>
      <p className="mt-3 text-sm text-text-muted">
        {isPending
          ? "Assim que a confirmação do pagamento chegar, vamos te avisar por e-mail."
          : "Você vai receber a confirmação e o código de rastreio por e-mail em breve."}
      </p>

      {isDemo && (
        <p className="mx-auto mt-6 max-w-md rounded-lg bg-accent/50 px-4 py-3 text-xs text-ink">
          Modo demonstração: nenhum pagamento real foi processado. Configure a
          variável <code>MERCADOPAGO_ACCESS_TOKEN</code> para ativar
          pagamentos reais com Pix e cartão.
        </p>
      )}

      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-ink-dark"
      >
        Voltar para a loja
      </Link>
    </div>
  );
}
