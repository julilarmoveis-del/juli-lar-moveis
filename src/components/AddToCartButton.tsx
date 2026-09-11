"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Product } from "@/types/product";
import { useCart } from "@/lib/cart-context";

export function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  const router = useRouter();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <button
        onClick={handleAdd}
        className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink-dark"
      >
        {added ? "Adicionado ✓" : "Adicionar ao carrinho"}
      </button>
      <button
        onClick={() => {
          addItem(product, 1);
          router.push("/carrinho");
        }}
        className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-ink transition hover:bg-brand-dark hover:text-white"
      >
        Comprar agora
      </button>
    </div>
  );
}
