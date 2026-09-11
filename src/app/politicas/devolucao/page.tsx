import { PolicyLayout } from "@/components/PolicyLayout";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: `Política de Devolução e Reembolso | ${siteConfig.brandName}`,
};

export default function DevolucaoPage() {
  return (
    <PolicyLayout
      title="Política de Devolução e Reembolso"
      updatedAt="09 de setembro de 2026"
    >
      <p>
        Queremos que você tenha total confiança ao comprar na{" "}
        {siteConfig.brandName}. Por isso, seguimos rigorosamente as regras do
        Código de Defesa do Consumidor para trocas, devoluções e reembolsos.
      </p>

      <h2>1. Direito de arrependimento (compras online)</h2>
      <p>
        Como a compra é feita fora do estabelecimento comercial, você tem até{" "}
        <strong>{siteConfig.returnDays} dias corridos</strong> a partir do
        recebimento do produto para desistir da compra, sem necessidade de
        justificativa, conforme o artigo 49 do Código de Defesa do
        Consumidor.
      </p>
      <p>
        Nesses casos, o frete de devolução é gratuito e o reembolso do valor
        pago é integral, incluindo o valor do frete original, se cobrado.
      </p>

      <h2>2. Produtos com defeito</h2>
      <p>
        Caso o produto apresente defeito de fabricação, você pode solicitar
        troca, reparo ou reembolso em até {siteConfig.warrantyDays} dias após
        o recebimento (garantia contratual), sem custo adicional. Após esse
        período, aplica-se a garantia legal prevista em lei.
      </p>

      <h2>3. Como solicitar</h2>
      <ul>
        <li>
          Envie um e-mail para <strong>{siteConfig.email}</strong> ou uma
          mensagem pelo WhatsApp {siteConfig.whatsappDisplay}, informando o
          número do pedido e o motivo da solicitação;
        </li>
        <li>Nossa equipe responde em até 2 dias úteis com as instruções;</li>
        <li>
          O produto deve ser devolvido na embalagem original, sempre que
          possível, junto com a nota fiscal;
        </li>
        <li>
          Após recebermos e conferirmos o produto, o reembolso é processado
          em até 10 dias úteis, no mesmo meio de pagamento utilizado na
          compra.
        </li>
      </ul>

      <h2>4. Itens não cobertos</h2>
      <p>
        Produtos que apresentem sinais de mau uso, montagem incorreta ou
        danos causados após o recebimento não são cobertos por esta política,
        sem prejuízo dos direitos previstos em lei.
      </p>

      <h2>5. Contato</h2>
      <p>
        Qualquer dúvida sobre trocas ou devoluções, fale com a gente pelo
        e-mail <strong>{siteConfig.email}</strong>.
      </p>
    </PolicyLayout>
  );
}
