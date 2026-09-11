import Link from "next/link";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { TrustBadges } from "@/components/TrustBadges";
import { siteConfig } from "@/lib/site-config";

const faq = [
  {
    question: "Qual o prazo de entrega?",
    answer:
      "O prazo médio é de 4 a 10 dias úteis após a confirmação do pagamento, variando de acordo com a sua região. Você recebe o código de rastreio por e-mail assim que o pedido é postado.",
  },
  {
    question: "Os produtos já vêm montados?",
    answer:
      "A maioria dos nossos móveis vem desmontada, com manual ilustrado e todos os parafusos e ferramentas básicas inclusos para facilitar a montagem em casa.",
  },
  {
    question: `Posso devolver se não gostar?`,
    answer: `Sim. Você tem ${siteConfig.returnDays} dias corridos a partir do recebimento para solicitar troca ou devolução, conforme o Código de Defesa do Consumidor.`,
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "Aceitamos Pix (com confirmação imediata) e cartão de crédito em até 12x. Todos os pedidos geram nota fiscal eletrônica automaticamente.",
  },
  {
    question: "Como funciona a garantia?",
    answer: `Todos os produtos possuem ${siteConfig.warrantyDays} dias de garantia contra defeitos de fabricação, além da garantia legal prevista em lei.`,
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-10 text-center sm:pt-20">
        <p className="mx-auto mb-4 w-fit rounded-full bg-accent px-4 py-1 text-xs font-semibold uppercase tracking-wide text-ink">
          Organização inteligente para a sua casa
        </p>
        <h1 className="mx-auto max-w-3xl font-heading text-3xl font-extrabold leading-tight text-ink sm:text-5xl">
          Móveis multifuncionais que transformam qualquer cantinho da sua casa
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-text-muted sm:text-lg">
          Peças pensadas para otimizar espaço, com qualidade testada e entrega
          para todo o Brasil. Compra 100% online, com nota fiscal e suporte
          humanizado.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="#produtos"
            className="rounded-full bg-brand px-8 py-3 text-sm font-semibold text-ink shadow-card transition hover:bg-brand-dark hover:text-white"
          >
            Ver produtos
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <TrustBadges />
      </section>

      <section id="produtos" className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 text-center">
          <h2 className="font-heading text-2xl font-bold text-ink sm:text-3xl">
            Nossos produtos
          </h2>
          <p className="mt-2 text-sm text-text-muted">
            Catálogo selecionado, sem enrolação — só o que realmente resolve.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section id="sobre" className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-2 sm:items-center">
          <div>
            <h2 className="font-heading text-2xl font-bold text-ink sm:text-3xl">
              Sobre a {siteConfig.brandName}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              Somos uma loja virtual brasileira especializada em móveis
              multifuncionais e soluções de organização para o dia a dia.
              Trabalhamos com um catálogo enxuto, escolhido a dedo, priorizando
              qualidade de material e facilidade de montagem — sem exagerar
              nas opções para você não perder tempo comparando dezenas de
              produtos parecidos.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              Todas as compras são processadas com nota fiscal eletrônica,
              seguem as regras do Código de Defesa do Consumidor e contam com
              suporte via WhatsApp e e-mail em horário comercial.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl2 bg-sand p-6 text-center">
              <p className="font-heading text-3xl font-extrabold text-ink">
                {siteConfig.returnDays} dias
              </p>
              <p className="text-xs text-text-muted">para troca ou devolução</p>
            </div>
            <div className="rounded-xl2 bg-sand p-6 text-center">
              <p className="font-heading text-3xl font-extrabold text-ink">
                {siteConfig.warrantyDays} dias
              </p>
              <p className="text-xs text-text-muted">de garantia de fábrica</p>
            </div>
            <div className="col-span-2 rounded-xl2 bg-sand p-6 text-center">
              <p className="font-heading text-3xl font-extrabold text-ink">
                Brasil todo
              </p>
              <p className="text-xs text-text-muted">
                enviamos para todos os estados, com rastreio
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="text-center font-heading text-2xl font-bold text-ink sm:text-3xl">
          Perguntas frequentes
        </h2>
        <div className="mt-8 space-y-3">
          {faq.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl2 bg-white p-5 shadow-card"
            >
              <summary className="cursor-pointer list-none font-heading text-sm font-semibold text-ink">
                {item.question}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section id="contato" className="bg-ink py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">
            Ficou com alguma dúvida?
          </h2>
          <p className="mt-3 text-sm text-sand/80">
            Fale com a gente pelo WhatsApp ou e-mail — respondemos em horário
            comercial.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contato"
              className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-ink hover:bg-brand-dark hover:text-white"
            >
              Página de contato
            </Link>
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
