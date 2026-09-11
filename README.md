# JuliLar Ofertas

Site de e-commerce (Next.js 14 + TypeScript + Tailwind CSS) para a loja **JuliLar Ofertas**, com catálogo de produtos, carrinho de compras e checkout integrado ao Mercado Pago (Pix, cartão e boleto).

## Como rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000 no navegador.

## Antes de publicar — o que ajustar

1. **Dados da empresa** — edite `src/lib/site-config.ts` e substitua os campos marcados como `[PLACEHOLDER]`:
   - `cnpj` — CNPJ real da empresa (obrigatório por lei em sites de e-commerce no Brasil).
   - `address` — endereço completo da empresa.
   - `whatsappNumber` / `whatsappDisplay` — número real de WhatsApp.
   - `legalName` — razão social completa.

2. **Produtos** — o catálogo em `src/lib/products.ts` está com produtos e preços de exemplo (fictícios), no nicho de móveis e organização para casa. Substitua pelos produtos reais do seu cliente, incluindo fotos reais (veja abaixo).

3. **Fotos dos produtos** — hoje cada produto usa uma ilustração genérica em SVG (`src/components/ProductIllustration.tsx`) como espaço reservado. Para usar fotos reais:
   - Coloque as imagens em `public/produtos/`.
   - No componente `ProductCard.tsx` e na página `src/app/produtos/[slug]/page.tsx`, troque `<ProductIllustration ... />` por `<Image src="/produtos/nome-da-foto.jpg" ... />` (usando `next/image`).

4. **Pagamento (Mercado Pago)** — o checkout já está integrado ao Mercado Pago Checkout Pro (aceita Pix, cartão e boleto). Para ativar pagamentos reais:
   - Crie uma conta em https://www.mercadopago.com.br/developers
   - Gere um **Access Token de produção**
   - Copie `.env.example` para `.env.local` e cole o token em `MERCADOPAGO_ACCESS_TOKEN`
   - No painel do Vercel, adicione a mesma variável em **Settings → Environment Variables**
   - Sem essa variável configurada, o checkout funciona em "modo demonstração" (não cobra nada e vai direto para a tela de sucesso) — assim o site funciona de ponta a ponta mesmo antes de configurar o pagamento real.

5. **Logo e favicon** — a logo enviada já está em `public/logo.png` e é usada no cabeçalho e como ícone do site.

## Publicando no GitHub + Vercel

```bash
git init
git add .
git commit -m "Primeira versão do site JuliLar Ofertas"
```

Depois:
1. Crie um repositório novo no GitHub (pode ser em uma conta separada, sem problema).
2. Siga as instruções do próprio GitHub para conectar o repositório local (`git remote add origin ...` e `git push`).
3. Em https://vercel.com, clique em "Add New Project", importe esse repositório do GitHub e clique em "Deploy". O Vercel detecta automaticamente que é um projeto Next.js.
4. Não esqueça de adicionar a variável `MERCADOPAGO_ACCESS_TOKEN` (e `NEXT_PUBLIC_SITE_URL` com o domínio final) nas configurações do projeto no Vercel antes do deploy final.

## Estrutura do projeto

- `src/app` — páginas (Next.js App Router): home, produtos, carrinho, checkout, políticas, sobre, FAQ, contato.
- `src/components` — componentes reutilizáveis (header, footer, cards de produto, etc).
- `src/lib` — dados de produtos, configuração do site, contexto do carrinho, formatação de preço.
- `src/app/api/checkout` — endpoint que cria a preferência de pagamento no Mercado Pago.

## Observação importante

Este site foi construído do zero, com identidade visual, textos e catálogo originais, inspirado apenas na *estrutura* de um site de referência (layout de header/rodapé, selos de confiança, FAQ, políticas) — nenhum texto, imagem ou dado da empresa de referência foi copiado.
