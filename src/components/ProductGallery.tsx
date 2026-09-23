"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/types/product";

export function ProductGallery({ product }: { product: Product }) {
  const gallery = product.images?.length ? product.images : [product.image];
  const labels =
    product.imageLabels?.length === gallery.length
      ? product.imageLabels
      : gallery.map((_, index) =>
          index === 0 ? "Produto" : `Imagem ${index + 1}`
        );

  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = gallery[activeIndex] ?? gallery[0];
  const activeLabel = labels[activeIndex] ?? "Produto";

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_96px] lg:items-start">
      <div className="relative aspect-square overflow-hidden rounded-xl2 border border-sand-dark bg-white shadow-card">
        <Image
          src={activeImage}
          alt={`${product.name} — ${activeLabel}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-contain p-3 sm:p-5"
        />
        <span className="absolute bottom-3 left-3 rounded-full bg-ink/90 px-3 py-1.5 text-[11px] font-semibold text-white shadow-card">
          {activeLabel}
        </span>
      </div>

      {gallery.length > 1 && (
        <div
          className="flex gap-2 overflow-x-auto pb-2 lg:max-h-[540px] lg:flex-col lg:overflow-y-auto lg:overflow-x-hidden lg:pb-0"
          aria-label={`Galeria de ${product.name}`}
        >
          {gallery.map((image, index) => {
            const isActive = index === activeIndex;
            const label = labels[index] ?? `Imagem ${index + 1}`;

            return (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-pressed={isActive}
                aria-label={`Exibir ${label.toLowerCase()}`}
                className={`group min-w-[82px] rounded-xl border bg-white p-1.5 text-left transition ${isActive ? "border-brand shadow-card" : "border-sand-dark hover:border-brand/70"}`}
              >
                <span className="relative block aspect-square overflow-hidden rounded-lg bg-sand/40">
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="96px"
                    className="object-contain p-1"
                  />
                </span>
                <span
                  className={`mt-1.5 block truncate px-0.5 text-[10px] font-semibold ${isActive ? "text-ink" : "text-text-muted"}`}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
