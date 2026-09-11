import { siteConfig } from "@/lib/site-config";

const badges = [
  {
    title: `${siteConfig.returnDays} dias para troca ou devolução`,
    description: "Não gostou? Devolução facilitada, sem burocracia.",
    icon: "↺",
  },
  {
    title: "Frete para todo o Brasil",
    description: "Enviamos para todos os estados com rastreio.",
    icon: "🚚",
  },
  {
    title: "Nota fiscal em todos os pedidos",
    description: "Compra segura, com emissão automática de NF-e.",
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
