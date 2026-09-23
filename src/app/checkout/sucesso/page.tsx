import Link from "next/link";

export default function CheckoutSucessoPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-2xl">
        ℹ️
      </div>
      <h1 className="font-heading text-2xl font-bold text-ink">
        Pagamento não confirmado
      </h1>
      <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-text-muted">
        O checkout da JuliLar ainda está em configuração. A abertura direta
        desta página não cria pedido, não confirma pagamento e não remove os
        produtos do carrinho.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/carrinho"
          className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-ink-dark"
        >
          Voltar ao carrinho
        </Link>
        <Link
          href="/contato"
          className="rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-ink hover:bg-sand"
        >
          Falar com atendimento
        </Link>
      </div>
    </div>
  );
}
