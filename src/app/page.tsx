import Link from "next/link";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { TrustBadges } from "@/components/TrustBadges";
import { siteConfig } from "@/lib/site-config";

const faq = [
  {
    question: "Qual o prazo de entrega?",
    answer:
      "O prazo de entrega depende do CEP, da disponibilidade do item e da transportadora. Consulte as condições exibidas no checkout e a nossa Política de Envio antes de finalizar.",
  },
  {
    question: "Os produtos já vêm montados?",
    answer:
      "A informação de montagem está na descrição de cada produto. Quando necessário, o item acompanha manual e componentes de fixação informados pelo fabricante.",
  },
  {
    question: "Posso devolver se não gostar?",
    answer: `Você tem ${siteConfig.returnDays} dias corridos a partir do recebimento para solicitar o direito de arrependimento, conforme as condições descritas na Política de Devolução.`,
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "As formas de pagamento disponíveis são apresentadas no ambiente seguro do provedor de pagamentos no momento da finalização.",
  },
  {
    question: "Como funciona a garantia?",
    answer: `Os produtos possuem ${siteConfig.warrantyDays} dias de garantia legal para bens duráveis, sem prejuízo de eventual garantia adicional informada pelo fabricante.`,
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pb-10 pt-14 text-center sm:pt-20">
        <p className="mx-auto mb-4 w-fit rounded-full bg-accent px-4 py-1 text-xs font-semibold uppercase tracking-wide text-ink">
          Organização inteligente para a sua casa
        </p>
        <h1 className="mx-auto max-w-3xl font-heading text-3xl font-extrabold leading-tight text-ink sm:text-5xl">
          Móveis multifuncionais que transformam qualquer cantinho da sua casa
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-text-muted sm:text-lg">
          Peças pensadas para otimizar espaço, com informações claras, compra
          online e atendimento pelos canais oficiais da loja.
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
            Catálogo selecionado, com preço e especificações de cada item.
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
              Trabalhamos com um catálogo enxuto e informações objetivas para
              facilitar a escolha dos produtos.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              As compras seguem as políticas publicadas no site e contam com
              atendimento por e-mail e, quando configurado, WhatsApp em horário
              comercial.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl2 bg-sand p-6 text-center">
              <p className="font-heading text-3xl font-extrabold text-ink">
                {siteConfig.returnDays} dias
              </p>
              <p className="text-xs text-text-muted">para solicitar devolução</p>
            </div>
            <div className="rounded-xl2 bg-sand p-6 text-center">
              <p className="font-heading text-3xl font-extrabold text-ink">
                {siteConfig.warrantyDays} dias
              </p>
              <p className="text-xs text-text-muted">de garantia legal</p>
            </div>
            <div className="col-span-2 rounded-xl2 bg-sand p-6 text-center">
              <p className="font-heading text-3xl font-extrabold text-ink">
                Brasil todo
              </p>
              <p className="text-xs text-text-muted">
                cobertura conforme a Política de Envio
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
            Fale com a gente pelos canais oficiais — respondemos em horário
            comercial.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contato"
              className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-ink hover:bg-brand-dark hover:text-white"
            >
              Página de contato
            </Link>
            {siteConfig.social.whatsapp && (
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Falar no WhatsApp
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
