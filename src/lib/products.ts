import { Product } from "@/types/product";

export const products: Product[] = [
  {
    slug: "sapateira-organizadora-swift-3-gavetas",
    name: "Sapateira Organizadora Swift 3 Gavetas",
    shortDescription:
      "Sapateira slim branca com 3 gavetas basculantes para até 12 pares.",
    description:
      "Com apenas 14 cm de profundidade, a Sapateira Organizadora Swift foi projetada para organizar os calçados ocupando pouco espaço em corredores, halls de entrada, quartos e closets. Possui três gavetas basculantes, acabamento branco e é enviada montada. A fixação na parede é realizada pelo cliente com as buchas e os parafusos que acompanham o produto.",
    features: [
      "3 gavetas basculantes para até 12 pares — 4 pares por gaveta",
      "Produto enviado montado",
      "Fixação na parede com buchas e parafusos inclusos",
      "Profundidade slim de 14 cm",
    ],
    price: 187.9,
    installments: 6,
    category: "organizacao",
    accent: "#0F2A52",
    dimensions: "67cm (L) x 110cm (A) x 14cm (P)",
    material: "MDP com acabamento branco",
    availability: "in_stock",
    sku: "JL-SWT-101",
    image: "/produtos/sapateira-organizadora-swift-3-gavetas.webp",
  },
  {
    slug: "prateleira-flutuante-madeira-macica",
    name: "Prateleira Flutuante em Madeira Maciça",
    shortDescription:
      "Conjunto com 2 prateleiras de pinus natural e suporte invisível.",
    description:
      "Conjunto com duas prateleiras flutuantes em madeira maciça de pinus natural, ideal para organizar e decorar cozinhas, quartos, salas e escritórios. O suporte fica escondido após a instalação, mantendo o visual limpo. Por ser madeira natural, veios e tonalidades podem variar sem representar defeito.",
    features: [
      "Conjunto com 2 prateleiras",
      "Suporte invisível incluso",
      "Madeira pinus natural sem verniz",
      "Disponível em tamanhos de 30 a 80 cm",
    ],
    price: 44.9,
    installments: 6,
    category: "prateleiras",
    accent: "#B47A4F",
    dimensions: "30 a 80cm (L) x 15cm (P)",
    material: "Madeira maciça de pinus natural",
    availability: "in_stock",
    sku: "JL-PFM-102",
    image: "/produtos/prateleira-flutuante-madeira-macica.webp",
  },
  {
    slug: "prateleira-aparadora-16x45",
    name: "Prateleira Aparadora 16x45",
    shortDescription:
      "Prateleira compacta em madeira com acabamento geométrico decorativo.",
    description:
      "Prateleira aparadora compacta, feita em madeira e pensada para valorizar paredes menores sem ocupar espaço no piso. O detalhe geométrico frontal dá personalidade à peça, enquanto a superfície acomoda vasos, livros, cristais e outros objetos decorativos.",
    features: [
      "Medida compacta de 45 x 16 cm",
      "Detalhe geométrico frontal",
      "Instalação suspensa na parede",
      "Ideal para sala, quarto, hall e escritório",
    ],
    price: 59.9,
    installments: 6,
    category: "prateleiras",
    accent: "#B47A4F",
    dimensions: "45cm (L) x 16cm (P)",
    material: "Madeira",
    availability: "in_stock",
    sku: "JL-PAP-103",
    image: "/produtos/prateleira-aparadora-16x45.webp",
  },
  {
    slug: "aparador-suspenso-60cm-2-gavetas",
    name: "Aparador Suspenso 60 cm",
    shortDescription:
      "Aparador preto suspenso em MDF com 2 gavetas e trilhos telescópicos.",
    description:
      "Aparador suspenso de 60 cm com duas gavetas espaçosas, ideal para hall, quarto, sala ou escritório. O móvel libera o piso, facilita a limpeza e oferece armazenamento discreto para objetos do dia a dia. As gavetas utilizam trilhos telescópicos metálicos para abertura suave.",
    features: [
      "2 gavetas de correr",
      "Trilhos telescópicos metálicos",
      "Instalação suspensa que libera o piso",
      "Acabamento preto de visual minimalista",
    ],
    price: 71.99,
    installments: 6,
    category: "aparadores",
    accent: "#141F2D",
    dimensions: "60cm (L) x 27,5cm (A) x 30cm (P)",
    material: "MDF",
    availability: "in_stock",
    sku: "JL-ASP-104",
    image: "/produtos/aparador-suspenso-60cm.jpg",
  },
  {
    slug: "penteadeira-swift-suspensa-60cm",
    name: "Penteadeira Swift Suspensa 60cm",
    shortDescription:
      "Penteadeira branca em MDF com gaveta grande e trilho telescópico.",
    description:
      "Penteadeira suspensa compacta, produzida em MDF branco e equipada com uma gaveta grande de correr. O trilho telescópico metálico permite abertura ampla e suave, facilitando a organização de maquiagens, perfumes e acessórios. A instalação suspensa aproveita melhor o espaço e deixa a limpeza do piso mais simples.",
    features: [
      "1 gaveta grande de correr",
      "Trilho telescópico metálico",
      "Estrutura em MDF branco",
      "Instalação suspensa na parede",
    ],
    price: 64.9,
    installments: 6,
    category: "penteadeiras",
    accent: "#FAAA6E",
    dimensions: "60cm (L) x 14cm (A) x 30cm (P)",
    material: "MDF",
    availability: "in_stock",
    sku: "JL-PTS-105",
    image: "/produtos/penteadeira-swift-suspensa-60cm.webp",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
