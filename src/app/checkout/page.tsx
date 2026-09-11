"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatBRL } from "@/lib/format";

export default function CheckoutPage() {
  const { items, totalPrice } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      items: items.map((item) => ({
        slug: item.slug,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      customer: {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
      },
      address: {
        street: formData.get("street"),
        number: formData.get("number"),
        city: formData.get("city"),
        state: formData.get("state"),
        zip: formData.get("zip"),
      },
    };

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Não foi possível continuar. Tente novamente.");
        setLoading(false);
        return;
      }

      window.location.href = data.redirectUrl;
    } catch {
      setError("Não foi possível conectar ao servidor de pagamento.");
      setLoading(false);
    }
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center">
        <h1 className="font-heading text-2xl font-bold text-ink">
          Seu carrinho está vazio
        </h1>
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
      <h1 className="font-heading text-2xl font-bold text-ink">Checkout</h1>

      <div className="mt-8 grid gap-10 sm:grid-cols-[1.3fr_1fr]">
        <form onSubmit={handleSubmit} className="space-y-6">
          <fieldset className="space-y-3 rounded-xl2 bg-white p-6 shadow-card">
            <legend className="font-heading text-sm font-semibold text-ink">
              Seus dados
            </legend>
            <input
              name="name"
              required
              placeholder="Nome completo"
              className="w-full rounded-lg border border-sand-dark bg-sand px-4 py-2 text-sm outline-none focus:border-brand"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="E-mail"
              className="w-full rounded-lg border border-sand-dark bg-sand px-4 py-2 text-sm outline-none focus:border-brand"
            />
            <input
              name="phone"
              required
              placeholder="Telefone / WhatsApp"
              className="w-full rounded-lg border border-sand-dark bg-sand px-4 py-2 text-sm outline-none focus:border-brand"
            />
          </fieldset>

          <fieldset className="space-y-3 rounded-xl2 bg-white p-6 shadow-card">
            <legend className="font-heading text-sm font-semibold text-ink">
              Endereço de entrega
            </legend>
            <div className="flex gap-3">
              <input
                name="street"
                required
                placeholder="Rua"
                className="w-2/3 rounded-lg border border-sand-dark bg-sand px-4 py-2 text-sm outline-none focus:border-brand"
              />
              <input
                name="number"
                required
                placeholder="Número"
                className="w-1/3 rounded-lg border border-sand-dark bg-sand px-4 py-2 text-sm outline-none focus:border-brand"
              />
            </div>
            <div className="flex gap-3">
              <input
                name="city"
                required
                placeholder="Cidade"
                className="w-1/2 rounded-lg border border-sand-dark bg-sand px-4 py-2 text-sm outline-none focus:border-brand"
              />
              <input
                name="state"
                required
                placeholder="UF"
                maxLength={2}
                className="w-1/4 rounded-lg border border-sand-dark bg-sand px-4 py-2 text-sm uppercase outline-none focus:border-brand"
              />
              <input
                name="zip"
                required
                placeholder="CEP"
                className="w-1/4 rounded-lg border border-sand-dark bg-sand px-4 py-2 text-sm outline-none focus:border-brand"
              />
            </div>
          </fieldset>

          {error && (
            <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold text-ink transition hover:bg-brand-dark hover:text-white disabled:opacity-60"
          >
            {loading ? "Redirecionando para pagamento..." : "Ir para pagamento (Pix / Cartão)"}
          </button>
          <p className="text-center text-xs text-text-muted">
            Você será redirecionado para o ambiente seguro de pagamento.
          </p>
        </form>

        <div className="h-fit rounded-xl2 bg-white p-6 shadow-card">
          <h2 className="font-heading text-sm font-semibold text-ink">
            Resumo do pedido
          </h2>
          <div className="mt-4 space-y-2">
            {items.map((item) => (
              <div key={item.slug} className="flex justify-between text-sm text-text-muted">
                <span>
                  {item.quantity}x {item.name}
                </span>
                <span>{formatBRL(item.price * item.quantity)}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between border-t border-sand-dark pt-4 font-heading text-base font-bold text-ink">
            <span>Total</span>
            <span>{formatBRL(totalPrice)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
