import Image from "next/image";
import { Product } from "@/types/product";
import { ProductIllustration } from "./ProductIllustration";

// Mostra a foto real do produto (product.image, em /public/produtos/<slug>.jpg)
// quando ela existir. Enquanto a foto não é enviada, cai automaticamente para a
// ilustração em SVG — assim o site nunca quebra por falta de arquivo de imagem.
export function ProductMedia({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  if (product.image) {
    return (
      <div className={`relative overflow-hidden rounded-xl2 bg-white ${className ?? ""}`}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, 25vw"
          className="object-cover"
        />
      </div>
    );
  }

  return <ProductIllustration accent={product.accent} className={className} />;
}
