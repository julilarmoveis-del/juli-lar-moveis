import type { Product } from "@/types/product";
// deploy-sync: 2026-09-25T15:50-03:00

export const products: Product[] = [
  {
    slug: "sapateira-organizadora-swift-3-gavetas",
    name: "Sapateira Organizadora Niva 3 Gavetas",
    shortDescription:
      "Sapateira slim da Linha Niva, com 3 gavetas basculantes e apenas 14 cm de profundidade.",
    description:
      "A Sapateira Organizadora Niva faz parte da Linha Niva, criada para aproveitar melhor ambientes compactos sem abrir mão de organização e visual clean. Com 67 cm de largura, 110 cm de altura e apenas 14 cm de profundidade, ela se encaixa muito bem em quartos, closets, corredores e halls de entrada. As três gavetas basculantes acomodam até 12 pares de calçados, mantendo tudo protegido e fácil de acessar. O produto é enviado montado e acompanha buchas e parafusos para fixação na parede.",
    features: [
      "Linha Niva — design compacto e funcional",
      "3 gavetas basculantes para até 12 pares — 4 pares por gaveta",
      "Profundidade slim de apenas 14 cm",
      "Produto enviado montado",
      "Fixação na parede com buchas e parafusos inclusos",
      "Ideal para quarto, closet, corredor e hall de entrada",
    ],
    price: 172.9,
    installments: 6,
    category: "organizacao",
    accent: "#141F2D",
    dimensions: "67cm (L) x 110cm (A) x 14cm (P)",
    material: "MDP com acabamento branco",
    availability: "in_stock",
    sku: "JL-SWT-101",
    image: "/produtos/sapateira-niva-produto-01.webp",
    images: [
      "/produtos/sapateira-niva-produto-01.webp",
      "/produtos/sapateira-niva-produto-02.webp",
      "/produtos/sapateira-niva-produto-03.webp",
      "/produtos/sapateira-niva-produto-04.webp",
      "/produtos/sapateira-niva-destaques-corrigida.webp",
      "/produtos/sapateira-niva-medidas-20260925.webp",
    ],
    imageLabels: [
      "Produto",
      "Gavetas abertas",
      "Vista frontal",
      "Vista lateral",
      "Destaques",
      "Medidas técnicas",
    ],
    collection: "Linha Niva",
  },
  {
    slug: "penteadeira-swift-suspensa-60cm",
    name: "Penteadeira Niva Suspensa 60cm em MDF",
    shortDescription:
      "Penteadeira compacta da Linha Niva, com gaveta grande de correr e trilho telescópico.",
    description:
      "A Penteadeira Niva Suspensa 60cm integra a Linha Niva e foi pensada para criar um cantinho de maquiagem funcional mesmo em quartos menores. Produzida em MDF branco, possui uma gaveta grande de correr para organizar maquiagens, perfumes, acessórios e objetos pessoais. O trilho telescópico metálico permite abertura ampla e suave da gaveta, enquanto a instalação suspensa libera o piso e deixa o ambiente visualmente mais leve e fácil de limpar.",
    features: [
      "Linha Niva — visual clean e aproveitamento inteligente do espaço",
      "1 gaveta grande de correr",
      "Trilho telescópico metálico com abertura ampla e suave",
      "Estrutura em MDF branco",
      "Instalação suspensa na parede",
      "Ideal para quarto, closet e cantinho de maquiagem",
    ],
    price: 82.9,
    installments: 6,
    category: "penteadeiras",
    accent: "#FAAA6E",
    dimensions: "60cm (L) x 14cm (A) x 30cm (P)",
    material: "MDF",
    availability: "in_stock",
    sku: "JL-PTS-105",
    image: "/produtos/penteadeira-niva-produto-01.webp",
    images: [
      "/produtos/penteadeira-niva-produto-01.webp",
      "/produtos/penteadeira-niva-produto-02.webp",
      "/produtos/penteadeira-niva-produto-03.webp",
      "/produtos/penteadeira-niva-produto-04.webp",
      "/produtos/penteadeira-niva-destaques.webp",
      "/produtos/penteadeira-niva-medidas.webp",
    ],
    imageLabels: [
      "Produto",
      "Vista frontal",
      "Ambiente",
      "Vista adicional",
      "Destaques",
      "Medidas técnicas",
    ],
    collection: "Linha Niva",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

