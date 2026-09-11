import { PolicyLayout } from "@/components/PolicyLayout";
import { siteConfig } from "@/lib/site-config";

export const metadata = { title: `Política de Envio | ${siteConfig.brandName}` };

export default function EnvioPage() {
  return (
    <PolicyLayout title="Política de Envio" updatedAt="09 de setembro de 2026">
      <p>
        Esta página explica como funciona o envio dos pedidos realizados na{" "}
        {siteConfig.brandName}.
      </p>

      <h2>1. Cobertura</h2>
      <p>
        Entregamos para todos os estados brasileiros, por meio de
        transportadoras parceiras selecionadas pela qualidade e prazo de
        entrega.
      </p>

      <h2>2. Prazos</h2>
      <p>
        O prazo médio de entrega é de 4 a 10 dias úteis após a confirmação do
        pagamento, podendo variar de acordo com a região de destino e a
        disponibilidade de estoque. O prazo estimado para o seu CEP é exibido
        no checkout antes da finalização da compra.
      </p>

      <h2>3. Rastreamento</h2>
      <p>
        Assim que o pedido é postado, você recebe por e-mail o código de
        rastreio e o link para acompanhar a entrega em tempo real.
      </p>

      <h2>4. Custo de frete</h2>
      <p>
        O valor do frete é calculado no checkout, com base no CEP de destino
        e no peso/volume dos itens do pedido. Eventuais promoções de frete
        grátis serão sinalizadas claramente na página do produto ou no
        carrinho.
      </p>

      <h2>5. Problemas na entrega</h2>
      <p>
        Se o pedido não chegar dentro do prazo informado, ou chegar com
        avarias, entre em contato pelo e-mail <strong>{siteConfig.email}</strong>{" "}
        em até 7 dias após o recebimento (ou após o prazo estimado, em caso de
        não recebimento), para que possamos resolver rapidamente.
      </p>
    </PolicyLayout>
  );
}
