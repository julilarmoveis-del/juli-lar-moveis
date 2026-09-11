import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: `Perguntas frequentes | ${siteConfig.brandName}`,
};

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
    question: "Posso devolver se não gostar?",
    answer: `Sim. Você tem ${siteConfig.returnDays} dias corridos a partir do recebimento para solicitar troca ou devolução, conforme o Código de Defesa do Consumidor. O frete de devolução é gratuito quando o motivo é desistência da compra.`,
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "Aceitamos Pix (com confirmação imediata) e cartão de crédito em até 12x. Todos os pedidos geram nota fiscal eletrônica automaticamente.",
  },
  {
    question: "Como funciona a garantia?",
    answer: `Todos os produtos possuem ${siteConfig.warrantyDays} dias de garantia contra defeitos de fabricação, além da garantia legal prevista em lei. Basta guardar a nota fiscal para acionar a garantia.`,
  },
  {
    question: "Como acompanho meu pedido?",
    answer:
      "Assim que o pedido é postado, enviamos o código de rastreio por e-mail. Você também pode consultar o status pedindo atualização pelo WhatsApp.",
  },
  {
    question: "Vocês entregam em todo o Brasil?",
    answer:
      "Sim, enviamos para todos os estados brasileiros através de transportadoras parceiras.",
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-heading text-3xl font-bold text-ink">
        Perguntas frequentes
      </h1>
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
    </div>
  );
}
