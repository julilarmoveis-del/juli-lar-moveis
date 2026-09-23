# JuliLar Ofertas

Loja virtual em Next.js 14, TypeScript e Tailwind CSS, com catálogo de produtos, páginas institucionais, carrinho e estrutura preparada para publicação na Vercel.

## Situação atual

- Domínio previsto: `https://www.julilarofertas.com`
- Branch de produção: `main`
- Build e TypeScript validados automaticamente pelo GitHub Actions
- Carrinho funcionando no navegador
- Checkout propositalmente desativado até a etapa final de pagamento, frete e testes
- Nenhum pedido ou pagamento de demonstração é confirmado

## Arquivos principais

- `src/lib/products.ts` — catálogo, preços, descrições e disponibilidade
- `public/produtos/` — imagens dos produtos
- `src/lib/site-config.ts` — dados públicos da empresa e canais de atendimento
- `src/app/` — páginas da loja
- `src/app/api/checkout/route.ts` — integração de pagamento, mantida bloqueada até a configuração final

## Desenvolvimento local

```bash
npm install
npm run dev
```

Depois, acesse `http://localhost:3000`.

Para validar a versão de produção:

```bash
npx tsc --noEmit
npm run build
```

## Publicação

O fluxo em `.github/workflows/ci.yml` valida cada alteração enviada à branch `main`. Ele também está preparado para publicar na Vercel quando estes três segredos existirem no repositório:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

Antes do deploy, o fluxo confere se as credenciais apontam para um projeto JuliLar e bloqueia a publicação se apontarem para outro projeto.

## Checkout — etapa final

Para ativar o checkout, ainda será necessário concluir e testar:

1. Conta e credencial de produção do Mercado Pago.
2. Cálculo e regras reais de frete.
3. Validação do retorno e do status do pagamento.
4. Registro e acompanhamento dos pedidos.
5. Variáveis `MERCADOPAGO_ACCESS_TOKEN`, `CHECKOUT_ENABLED=true` e configuração pública correspondente na Vercel.

Até essa etapa ser concluída, a página informa claramente que o pagamento online está em configuração e preserva o carrinho do cliente.
