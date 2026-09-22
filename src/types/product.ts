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
  accent: string; // cor de apoio visual usada no tema do produto
  dimensions: string;
  material: string;
  availability: Availability;
  sku: string; // código interno do produto, usado como identificador único (GTIN/MPN substitute)
  image: string; // caminho da imagem raster local em /public/produtos/
}
