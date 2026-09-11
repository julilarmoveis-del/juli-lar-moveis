import { PolicyLayout } from "@/components/PolicyLayout";
import { siteConfig } from "@/lib/site-config";

export const metadata = { title: `Política de Cookies | ${siteConfig.brandName}` };

export default function CookiesPage() {
  return (
    <PolicyLayout title="Política de Cookies" updatedAt="09 de setembro de 2026">
      <p>
        Este site utiliza cookies para melhorar sua experiência de navegação.
        Cookies são pequenos arquivos de texto armazenados no seu navegador
        quando você visita um site.
      </p>

      <h2>1. Tipos de cookies que usamos</h2>
      <ul>
        <li>
          <strong>Cookies essenciais:</strong> necessários para o
          funcionamento do site, como manter os itens no seu carrinho de
          compras.
        </li>
        <li>
          <strong>Cookies de desempenho:</strong> ajudam a entender como os
          visitantes usam o site, de forma agregada e anônima, para que
          possamos melhorar a experiência de navegação.
        </li>
        <li>
          <strong>Cookies de marketing:</strong> quando utilizados, ajudam a
          exibir anúncios mais relevantes em outras plataformas, com base no
          seu interesse em nossos produtos.
        </li>
      </ul>

      <h2>2. Como gerenciar cookies</h2>
      <p>
        Você pode configurar seu navegador para bloquear ou apagar cookies a
        qualquer momento. Note que desativar cookies essenciais pode afetar o
        funcionamento de partes do site, como o carrinho de compras.
      </p>

      <h2>3. Cookies de terceiros</h2>
      <p>
        Alguns serviços que utilizamos, como o processador de pagamentos,
        podem definir seus próprios cookies durante o checkout, sujeitos às
        respectivas políticas de privacidade desses terceiros.
      </p>

      <h2>4. Contato</h2>
      <p>
        Dúvidas sobre o uso de cookies podem ser enviadas para{" "}
        <strong>{siteConfig.email}</strong>.
      </p>
    </PolicyLayout>
  );
}
