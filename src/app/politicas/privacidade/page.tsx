import { PolicyLayout } from "@/components/PolicyLayout";
import { siteConfig } from "@/lib/site-config";

export const metadata = { title: `Política de Privacidade | ${siteConfig.brandName}` };

export default function PrivacidadePage() {
  return (
    <PolicyLayout title="Política de Privacidade" updatedAt="09 de setembro de 2026">
      <p>
        Esta Política de Privacidade explica como a {siteConfig.brandName}{" "}
        ({siteConfig.legalName}) coleta, usa, armazena e protege os dados
        pessoais dos visitantes e clientes do site {siteConfig.domain}, em
        conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018
        — LGPD).
      </p>

      <h2>1. Quais dados coletamos</h2>
      <ul>
        <li>Dados de identificação: nome completo, e-mail e telefone.</li>
        <li>Dados de entrega: endereço, cidade, estado e CEP.</li>
        <li>
          Dados de navegação: páginas visitadas, dispositivo e tempo de
          permanência no site, coletados por meio de cookies (veja nossa{" "}
          <a href="/politicas/cookies" className="text-brand-dark underline">
            Política de Cookies
          </a>
          ).
        </li>
        <li>
          Dados de pagamento: processados diretamente pelo nosso parceiro de
          pagamentos; não armazenamos números de cartão de crédito em nossos
          servidores.
        </li>
      </ul>

      <h2>2. Como usamos os seus dados</h2>
      <ul>
        <li>Processar e entregar os pedidos realizados no site.</li>
        <li>Emitir nota fiscal eletrônica, conforme exigido por lei.</li>
        <li>Enviar comunicações sobre o status do pedido.</li>
        <li>Responder dúvidas enviadas por e-mail ou WhatsApp.</li>
        <li>
          Melhorar a experiência de navegação e a performance do site, de
          forma agregada e anônima.
        </li>
      </ul>

      <h2>3. Compartilhamento de dados</h2>
      <p>
        Compartilhamos dados pessoais somente com prestadores de serviço
        essenciais à operação da loja — como transportadoras, para viabilizar
        a entrega, e processadores de pagamento, para viabilizar a cobrança.
        Não vendemos nem alugamos dados pessoais a terceiros para fins de
        marketing.
      </p>

      <h2>4. Seus direitos como titular de dados</h2>
      <p>Nos termos da LGPD, você tem direito a:</p>
      <ul>
        <li>Confirmar a existência de tratamento dos seus dados;</li>
        <li>Acessar, corrigir ou solicitar a exclusão dos seus dados;</li>
        <li>Solicitar a portabilidade dos dados a outro fornecedor;</li>
        <li>Revogar o consentimento dado anteriormente.</li>
      </ul>
      <p>
        Para exercer qualquer um desses direitos, entre em contato pelo
        e-mail <strong>{siteConfig.email}</strong>.
      </p>

      <h2>5. Segurança e armazenamento</h2>
      <p>
        Adotamos medidas técnicas e administrativas razoáveis para proteger
        os dados pessoais contra acessos não autorizados e situações de
        destruição, perda, alteração ou vazamento. Os dados são mantidos
        apenas pelo tempo necessário para cumprir as finalidades descritas
        nesta política ou obrigações legais.
      </p>

      <h2>6. Alterações desta política</h2>
      <p>
        Esta política pode ser atualizada periodicamente. A data da última
        atualização está indicada no topo desta página. Recomendamos revisá-la
        com regularidade.
      </p>

      <h2>7. Contato</h2>
      <p>
        Dúvidas sobre esta Política de Privacidade podem ser enviadas para{" "}
        <strong>{siteConfig.email}</strong> ou pelo WhatsApp{" "}
        {siteConfig.whatsappDisplay}.
      </p>
    </PolicyLayout>
  );
}
