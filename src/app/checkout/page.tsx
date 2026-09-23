"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatBRL } from "@/lib/format";

export default function CheckoutPage() {
  const { items, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center">
        <h1 className="font-heading text-2xl font-bold text-ink">
          Seu carrinho está vazio
        </h1>
        <p className="mt-2 text-sm text-text-muted">
          Escolha os produtos que deseja antes de continuar.
        </p>
        <Link
          href="/#produtos"
          className="mt-6 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-ink-dark"
        >
          Ver produtos
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="font-heading text-2xl font-bold text-ink">
        Finalização do pedido
      </h1>

      <div className="mt-8 grid gap-8 sm:grid-cols-[1.2fr_1fr]">
        <section className="rounded-xl2 bg-white p-6 shadow-card">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-xl">
            ⚙️
          </div>
          <h2 className="mt-5 font-heading text-lg font-semibold text-ink">
            Pagamento online em configuração
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            Estamos concluindo a configuração final do checkout. Neste momento,
            nenhum pagamento ou pedido será processado por esta página.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            Seus produtos continuam guardados no carrinho. Você pode voltar à
            loja ou falar com o atendimento pelos canais oficiais.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/#produtos"
              className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white hover:bg-ink-dark"
            >
              Continuar comprando
            </Link>
            <Link
              href="/contato"
              className="rounded-full border border-ink/20 px-5 py-2.5 text-sm font-semibold text-ink hover:bg-sand"
            >
              Falar com atendimento
            </Link>
          </div>
        </section>

        <aside className="h-fit rounded-xl2 bg-white p-6 shadow-card">
          <h2 className="font-heading text-sm font-semibold text-ink">
            Resumo do carrinho
          </h2>
          <div className="mt-4 space-y-3">
            {items.map((item) => (
              <div
                key={item.slug}
                className="flex justify-between gap-4 text-sm text-text-muted"
              >
                <span>
                  {item.quantity}x {item.name}
                </span>
                <span className="shrink-0">
                  {formatBRL(item.price * item.quantity)}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between border-t border-sand-dark pt-4 font-heading text-base font-bold text-ink">
            <span>Subtotal</span>
            <span>{formatBRL(totalPrice)}</span>
          </div>
          <p className="mt-2 text-xs text-text-muted">
            Frete e pagamento serão configurados na etapa final do checkout.
          </p>
        </aside>
      </div>
    </div>
  );
}
