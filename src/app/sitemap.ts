import { MetadataRoute } from "next";
import { products } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://julilarmoveis.com";

  const staticRoutes = [
    "",
    "/sobre",
    "/faq",
    "/contato",
    "/politicas/aviso-legal",
    "/politicas/privacidade",
    "/politicas/devolucao",
    "/politicas/envio",
    "/politicas/termos",
    "/politicas/cookies",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));

  const productRoutes = products.map((product) => ({
    url: `${siteUrl}/produtos/${product.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...productRoutes];
}
