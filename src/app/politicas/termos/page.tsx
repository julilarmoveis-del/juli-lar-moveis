import { PolicyLayout } from "@/components/PolicyLayout";
import { siteConfig } from "@/lib/site-config";

export const metadata = { title: `Termos de Serviço | ${siteConfig.brandName}` };

export default function TermosPage() {
  return (
    <PolicyLayout title="Termos de Serviço" updatedAt="09 de setembro de 2026">
      <p>
        Estes Termos de Serviço regulam o uso do site {siteConfig.domain},
        operado por {siteConfig.legalName} ("{siteConfig.brandName}"). Ao
        navegar e realizar compras no site, você concorda com os termos
        descritos abaixo.
      </p>

      <h2>1. Objeto</h2>
      <p>
        O site disponibiliza a venda de móveis e produtos de organização para
        casa, descritos com fotos ilustrativas, especificações técnicas e
        preços em reais (R$), à vista ou parcelado conforme condições
        exibidas em cada produto.
      </p>

      <h2>2. Cadastro e pedidos</h2>
      <p>
        Para concluir uma compra, é necessário informar dados de contato e
        entrega verdadeiros e completos. A {siteConfig.brandName} reserva-se o
        direito de cancelar pedidos com indícios de fraude ou dados
        incorretos, mediante comunicação ao cliente.
      </p>

      <h2>3. Preços e pagamento</h2>
      <p>
        Os preços exibidos incluem os tributos aplicáveis e podem ser pagos
        via Pix ou cartão de crédito, em parcelas conforme indicado na página
        do produto. O pedido só é confirmado após a aprovação do pagamento
        pela instituição financeira ou processadora responsável.
      </p>

      <h2>4. Entrega</h2>
      <p>
        Os prazos de entrega são estimados e informados na{" "}
        <a href="/politicas/envio" className="text-brand-dark underline">
          Política de Envio
        </a>
        . Eventuais atrasos causados por transportadoras ou casos fortuitos
        serão comunicados ao cliente assim que identificados.
      </p>

      <h2>5. Trocas, devoluções e garantia</h2>
      <p>
        As regras de troca, devolução e garantia estão detalhadas na{" "}
        <a href="/politicas/devolucao" className="text-brand-dark underline">
          Política de Devolução e Reembolso
        </a>
        , em conformidade com o Código de Defesa do Consumidor (Lei nº
        8.078/1990).
      </p>

      <h2>6. Propriedade intelectual</h2>
      <p>
        Todo o conteúdo do site — textos, imagens, identidade visual e
        logotipo — é de propriedade da {siteConfig.brandName} ou de seus
        licenciantes, sendo proibida a reprodução total ou parcial sem
        autorização prévia.
      </p>

      <h2>7. Limitação de responsabilidade</h2>
      <p>
        A {siteConfig.brandName} não se responsabiliza por uso inadequado dos
        produtos em desacordo com as instruções de montagem e uso fornecidas,
        nem por eventos fora de seu controle razoável.
      </p>

      <h2>8. Foro</h2>
      <p>
        Fica eleito o foro da comarca do domicílio do consumidor para
        dirimir eventuais controvérsias decorrentes destes Termos, conforme
        previsto no Código de Defesa do Consumidor.
      </p>

      <h2>9. Contato</h2>
      <p>
        Dúvidas sobre estes termos podem ser enviadas para{" "}
        <strong>{siteConfig.email}</strong>.
      </p>
    </PolicyLayout>
  );
}
