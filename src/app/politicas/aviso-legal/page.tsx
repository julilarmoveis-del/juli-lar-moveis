import { PolicyLayout } from "@/components/PolicyLayout";
import { siteConfig } from "@/lib/site-config";

export const metadata = { title: `Aviso Legal | ${siteConfig.brandName}` };

export default function AvisoLegalPage() {
  return (
    <PolicyLayout title="Aviso Legal" updatedAt="09 de setembro de 2026">
      <h2>Identificação da empresa</h2>
      <p>
        {siteConfig.legalName}
        <br />
        CNPJ: {siteConfig.cnpj}
        <br />
        Endereço: {siteConfig.address}
        <br />
        E-mail: {siteConfig.email}
        <br />
        Site: {siteConfig.domain}
      </p>

      <h2>Atividade</h2>
      <p>
        A {siteConfig.brandName} atua no comércio eletrônico de móveis e
        produtos de organização para o lar, em conformidade com o Decreto nº
        7.962/2013, que regulamenta a contratação no comércio eletrônico no
        Brasil.
      </p>

      <h2>Informações claras e precisas</h2>
      <p>
        Nos comprometemos a manter no site, de forma clara e visível: as
        características essenciais dos produtos, o preço total (incluindo
        tributos, frete e acréscimos), as condições de pagamento e os prazos
        de entrega, conforme exigido pela legislação de defesa do
        consumidor.
      </p>

      <h2>Atendimento ao consumidor</h2>
      <p>
        Disponibilizamos canais de atendimento por e-mail e WhatsApp,{" "}
        {siteConfig.serviceHours.toLowerCase()}, para esclarecimento de
        dúvidas, reclamações e solicitações relacionadas às compras
        realizadas no site.
      </p>

      <h2>Isenção de responsabilidade sobre links externos</h2>
      <p>
        Eventuais links para sites de terceiros (como redes sociais) são
        fornecidos apenas por conveniência. A {siteConfig.brandName} não se
        responsabiliza pelo conteúdo ou práticas de privacidade desses sites.
      </p>
    </PolicyLayout>
  );
}
