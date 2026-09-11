import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: `Sobre nós | ${siteConfig.brandName}`,
};

export default function SobrePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-heading text-3xl font-bold text-ink">
        Sobre a {siteConfig.brandName}
      </h1>
      <p className="mt-6 text-sm leading-relaxed text-text-muted">
        A {siteConfig.brandName} nasceu para resolver um problema comum:
        encontrar móveis e soluções de organização que caibam de verdade no
        dia a dia — no espaço disponível, no tempo de montagem e no
        orçamento. Em vez de um catálogo gigante e genérico, escolhemos poucos
        produtos, testados e bem avaliados, para facilitar a sua decisão de
        compra.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-text-muted">
        Trabalhamos com fornecedores que seguem as normas técnicas de
        fabricação de móveis, emitimos nota fiscal eletrônica em 100% dos
        pedidos e cumprimos as regras do Código de Defesa do Consumidor,
        incluindo o direito de arrependimento em até {siteConfig.returnDays}{" "}
        dias corridos após o recebimento.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-text-muted">
        Nosso atendimento é feito por pessoas reais, via WhatsApp e e-mail,
        de segunda a sexta. Se algo não sair como esperado, você não vai
        precisar brigar com um robô para resolver.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl2 bg-white p-6 text-center shadow-card">
          <p className="font-heading text-2xl font-extrabold text-ink">
            {siteConfig.returnDays} dias
          </p>
          <p className="mt-1 text-xs text-text-muted">
            para troca ou devolução
          </p>
        </div>
        <div className="rounded-xl2 bg-white p-6 text-center shadow-card">
          <p className="font-heading text-2xl font-extrabold text-ink">
            {siteConfig.warrantyDays} dias
          </p>
          <p className="mt-1 text-xs text-text-muted">de garantia de fábrica</p>
        </div>
        <div className="rounded-xl2 bg-white p-6 text-center shadow-card">
          <p className="font-heading text-2xl font-extrabold text-ink">100%</p>
          <p className="mt-1 text-xs text-text-muted">
            dos pedidos com nota fiscal
          </p>
        </div>
      </div>
    </div>
  );
}
