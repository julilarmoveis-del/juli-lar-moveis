import Image from "next/image";
import { Product } from "@/types/product";

export function ProductMedia({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl2 bg-white ${
        className ?? ""
      }`}
    >
      <Image
        src={product.image}
        alt={product.name}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover"
      />
    </div>
  );
}
