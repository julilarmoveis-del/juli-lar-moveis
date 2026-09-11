import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const policyLinks = [
  { href: "/politicas/aviso-legal", label: "Aviso Legal" },
  { href: "/politicas/privacidade", label: "Política de Privacidade" },
  { href: "/politicas/devolucao", label: "Política de Devolução e Reembolso" },
  { href: "/politicas/envio", label: "Política de Envio" },
  { href: "/politicas/termos", label: "Termos de Serviço" },
  { href: "/politicas/cookies", label: "Política de Cookies" },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-sand-dark bg-ink text-sand">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <p className="font-heading text-lg font-bold text-white">
            JuliLar <span className="text-brand-light">Ofertas</span>
          </p>
          <p className="mt-2 text-sm text-sand/70">{siteConfig.tagline}</p>
          <div className="mt-4 flex gap-3 text-sm">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 px-3 py-1 hover:bg-white/20"
            >
              Instagram
            </a>
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 px-3 py-1 hover:bg-white/20"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div>
          <p className="font-heading text-sm font-semibold text-white">
            Políticas
          </p>
          <ul className="mt-3 space-y-2 text-sm text-sand/70">
            {policyLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-heading text-sm font-semibold text-white">
            Atendimento
          </p>
          <ul className="mt-3 space-y-2 text-sm text-sand/70">
            <li>{siteConfig.email}</li>
            <li>WhatsApp: {siteConfig.whatsappDisplay}</li>
            <li>{siteConfig.serviceHours}</li>
          </ul>
        </div>

        <div>
          <p className="font-heading text-sm font-semibold text-white">
            Dados da empresa
          </p>
          <ul className="mt-3 space-y-2 text-sm text-sand/70">
            <li>{siteConfig.legalName}</li>
            <li>CNPJ: {siteConfig.cnpj}</li>
            <li>{siteConfig.address}</li>
          </ul>
          <p className="mt-3 text-xs text-sand/50">
            Formas de pagamento: Pix, Visa, Mastercard
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-sand/50">
        © {new Date().getFullYear()} JuliLar Ofertas. Todos os direitos reservados.
      </div>
    </footer>
  );
}
