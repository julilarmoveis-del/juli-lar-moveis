import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductBySlug, products } from "@/lib/products";
import {
  formatBRL,
  installmentPrice,
  availabilityLabel,
} from "@/lib/format";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductCard } from "@/components/ProductCard";
import { AddToCartButton } from "@/components/AddToCartButton";
import { SITE_URL, siteConfig } from "@/lib/site-config";
import type { Product } from "@/types/product";

const GOOGLE_AVAILABILITY: Record<string, string> = {
  in_stock: "https://schema.org/InStock",
  out_of_stock: "https://schema.org/OutOfStock",
  preorder: "https://schema.org/PreOrder",
};

function publicImage(product: Product) {
  return `${SITE_URL}${product.image}`;
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) return {};

  const productUrl = `${SITE_URL}/produtos/${product.slug}`;
  return {
    title: `${product.name} | ${siteConfig.brandName}`,
    description: product.shortDescription,
    alternates: { canonical: productUrl },
    openGraph: {
      type: "website",
      url: productUrl,
      title: product.name,
      description: product.shortDescription,
      images: [publicImage(product)],
    },
  };
}

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const gallery = product.images?.length ? product.images : [product.image];
  const related = products
    .filter((item) => item.slug !== product.slug)
    .sort(
      (a, b) =>
        Number(b.category === product.category) -
        Number(a.category === product.category)
    )
    .slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: gallery.map((image) => `${SITE_URL}${image}`),
    sku: product.sku,
    url: `${SITE_URL}/produtos/${product.slug}`,
    brand: {
      "@type": "Brand",
      name: product.collection ?? siteConfig.brandName,
    },
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/produtos/${product.slug}`,
      priceCurrency: "BRL",
      price: product.price.toFixed(2),
      availability:
        GOOGLE_AVAILABILITY[product.availability] ??
        "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    },
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className="mb-6 text-xs text-text-muted">
        <Link href="/" className="hover:text-ink">
          Início
        </Link>{" "}
        / <span className="text-ink">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-[1.08fr_.92fr] lg:items-start">
        <ProductGallery product={product} />

        <div>
          {product.collection && (
            <p className="mb-3 inline-flex rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white">
              {product.collection}
            </p>
          )}
          {product.badge && (
            <span className="mb-3 ml-2 inline-flex rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink">
              {product.badge}
            </span>
          )}

          <h1 className="font-heading text-2xl font-bold text-ink sm:text-3xl">
            {product.name}
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-text-muted">
            {product.shortDescription}
          </p>
          <p className="mt-3 flex items-center gap-1.5 text-sm font-medium text-emerald-700">
            <span
              className="h-2 w-2 rounded-full bg-emerald-600"
              aria-hidden
            />
            {availabilityLabel(product.availability)}
          </p>

          <div className="mt-6">
            <p className="font-heading text-3xl font-extrabold text-ink">
              {formatBRL(product.price)}
            </p>
            <p className="text-sm text-text-muted">
              ou {product.installments}x de{" "}
              {installmentPrice(product.price, product.installments)} sem juros
              no cartão
            </p>
          </div>

          <div className="mt-6">
            <AddToCartButton product={product} />
          </div>

          <div className="mt-8 space-y-2 text-sm text-text-muted">
            <p>✓ Entrega conforme a Política de Envio</p>
            <p>✓ Dados da empresa disponíveis no site</p>
            <p>
              ✓ {siteConfig.returnDays} dias para solicitar o direito de
              arrependimento
            </p>
            <p>✓ {siteConfig.warrantyDays} dias de garantia legal</p>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="font-heading text-lg font-semibold text-ink">
            Descrição
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            {product.description}
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg font-semibold text-ink">
            Características
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-text-muted">
            {product.features.map((feature) => (
              <li key={feature}>• {feature}</li>
            ))}
          </ul>
          <div className="mt-4 text-sm text-text-muted">
            <p>
              <span className="font-semibold text-ink">Dimensões: </span>
              {product.dimensions}
            </p>
            <p>
              <span className="font-semibold text-ink">Material: </span>
              {product.material}
            </p>
            <p>
              <span className="font-semibold text-ink">
                Código do produto:{" "}
              </span>
              {product.sku}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="font-heading text-xl font-bold text-ink">
          Você também pode gostar
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
