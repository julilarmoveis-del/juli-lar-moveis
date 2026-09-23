import Link from "next/link";
import type { Product } from "@/types/product";
import {
  formatBRL,
  installmentPrice,
  availabilityLabel,
} from "@/lib/format";
import { ProductMedia } from "./ProductMedia";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/produtos/${product.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-xl2 bg-white shadow-card transition hover:-translate-y-0.5 hover:shadow-cardHover"
    >
      {product.badge && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-ink px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-card">
          {product.badge}
        </span>
      )}
      <div className="aspect-square">
        <ProductMedia product={product} className="h-full w-full" />
      </div>
      <div className="flex flex-1 flex-col gap-2 border-t border-sand-dark p-5">
        <h3 className="font-heading text-base font-semibold leading-snug text-text">
          {product.name}
        </h3>
        <p className="text-sm text-text-muted">{product.shortDescription}</p>
        <p className="flex items-center gap-1.5 text-xs font-medium text-emerald-700">
          <span
            className="h-1.5 w-1.5 rounded-full bg-emerald-600"
            aria-hidden
          />
          {availabilityLabel(product.availability)}
        </p>
        <div className="mt-2">
          <p className="font-heading text-xl font-bold text-ink">
            {formatBRL(product.price)}
          </p>
          <p className="text-xs text-text-muted">
            ou {product.installments}x de{" "}
            {installmentPrice(product.price, product.installments)} sem juros
          </p>
        </div>
        <span className="mt-3 inline-flex w-fit items-center rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition group-hover:bg-ink-dark">
          Ver detalhes
        </span>
      </div>
    </Link>
  );
}
