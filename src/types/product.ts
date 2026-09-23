export type ProductCategory =
  | "organizacao"
  | "prateleiras"
  | "aparadores"
  | "penteadeiras"
  | "organizadores"
  | "sala"
  | "quarto"
  | "cozinha"
  | "escritorio"
  | "area-de-servico"
  | "iluminacao"
  | "banheiro";

export type Availability = "in_stock" | "out_of_stock" | "preorder";

export interface Product {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  features: string[];
  price: number;
  installments: number;
  category: ProductCategory;
  accent: string;
  dimensions: string;
  material: string;
  availability: Availability;
  sku: string;
  image: string;
}
