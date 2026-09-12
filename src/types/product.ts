export type ProductCategory =
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
  accent: string; // hex color used to tint the illustration
  dimensions: string;
  material: string;
  availability: Availability;
  sku: string; // código interno do produto, usado como identificador único (GTIN/MPN substitute)
  image?: string; // caminho em /public/produtos/<slug>.jpg — quando ausente, usa a ilustração SVG como fallback
}
