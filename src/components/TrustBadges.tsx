import { siteConfig } from "@/lib/site-config";

const badges = [
  {
    title: `${siteConfig.returnDays} dias para troca ou devolução`,
    description: "Solicitação conforme as condições da política de devolução.",
    icon: "↺",
  },
  {
    title: "Entrega para todo o Brasil",
    description: "Envio com acompanhamento conforme a política da loja.",
    icon: "🚚",
  },
  {
    title: "Empresa identificada",
    description: "CNPJ, endereço e canais de atendimento disponíveis.",
    icon: "🧾",
  },
];

export function TrustBadges() {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {badges.map((badge) => (
        <div
          key={badge.title}
          className="flex items-start gap-3 rounded-xl2 bg-white p-5 shadow-card"
        >
          <span className="text-2xl" aria-hidden>
            {badge.icon}
          </span>
          <div>
            <p className="font-heading text-sm font-semibold text-text">
              {badge.title}
            </p>
            <p className="text-xs text-text-muted">{badge.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
