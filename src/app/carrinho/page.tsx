"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatBRL } from "@/lib/format";
import { getProductBySlug } from "@/lib/products";
import { ProductMedia } from "@/components/ProductMedia";

export default function CarrinhoPage() {
  const { items, updateQuantity, removeItem, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center">
        <h1 className="font-heading text-2xl font-bold text-ink">
          Seu carrinho está vazio
        </h1>
        <p className="mt-2 text-sm text-text-muted">
          Que tal dar uma olhada nos nossos produtos?
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
        Seu carrinho
      </h1>

      <div className="mt-6 space-y-4">
        {items.map((item) => {
          const product = getProductBySlug(item.slug);

          return (
            <div
              key={item.slug}
              className="flex items-center gap-4 rounded-xl2 bg-white p-4 shadow-card"
            >
              <div className="h-20 w-20 shrink-0">
                {product ? (
                  <ProductMedia product={product} className="h-full w-full" />
                ) : null}
              </div>
              <div className="flex-1">
                <Link
                  href={`/produtos/${item.slug}`}
                  className="font-heading text-sm font-semibold text-ink hover:underline"
                >
                  {item.name}
                </Link>
                <p className="mt-1 text-sm text-text-muted">
                  {formatBRL(item.price)} cada
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                    className="h-7 w-7 rounded-full bg-sand-dark text-sm font-bold text-ink"
                    aria-label="Diminuir quantidade"
                  >
                    −
                  </button>
                  <span className="w-6 text-center text-sm">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                    className="h-7 w-7 rounded-full bg-sand-dark text-sm font-bold text-ink"
                    aria-label="Aumentar quantidade"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-heading text-sm font-semibold text-ink">
                  {formatBRL(item.price * item.quantity)}
                </p>
                <button
                  onClick={() => removeItem(item.slug)}
                  className="mt-2 text-xs text-text-muted underline hover:text-brand-dark"
                >
                  Remover
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex flex-col items-end gap-4 rounded-xl2 bg-white p-6 shadow-card">
        <div className="flex w-full justify-between text-sm text-text-muted sm:w-64">
          <span>Subtotal</span>
          <span>{formatBRL(totalPrice)}</span>
        </div>
        <div className="flex w-full justify-between text-sm text-text-muted sm:w-64">
          <span>Frete</span>
          <span>Calculado no checkout</span>
        </div>
        <div className="flex w-full justify-between font-heading text-lg font-bold text-ink sm:w-64">
          <span>Total</span>
          <span>{formatBRL(totalPrice)}</span>
        </div>
        <Link
          href="/checkout"
          className="w-full rounded-full bg-brand px-6 py-3 text-center text-sm font-semibold text-ink transition hover:bg-brand-dark hover:text-white sm:w-64"
        >
          Finalizar compra
        </Link>
      </div>
    </div>
  );
}
