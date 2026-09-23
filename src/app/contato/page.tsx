import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: `Contato | ${siteConfig.brandName}`,
};

export default function ContatoPage() {
  const mailtoHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    "Contato pelo site"
  )}`;

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-heading text-3xl font-bold text-ink">
        Fale com a gente
      </h1>
      <p className="mt-3 text-sm text-text-muted">
        Respondemos pelos canais oficiais, {siteConfig.serviceHours.toLowerCase()}.
      </p>

      <div
        className={`mt-8 grid gap-4 ${
          siteConfig.social.whatsapp ? "sm:grid-cols-2" : "sm:grid-cols-1"
        }`}
      >
        {siteConfig.social.whatsapp && (
          <a
            href={siteConfig.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl2 bg-white p-6 shadow-card transition hover:shadow-cardHover"
          >
            <p className="font-heading text-sm font-semibold text-ink">
              WhatsApp
            </p>
            <p className="mt-1 text-sm text-text-muted">
              {siteConfig.whatsappDisplay}
            </p>
            <p className="mt-3 text-xs text-brand-dark">
              Clique para iniciar uma conversa →
            </p>
          </a>
        )}

        <a
          href={mailtoHref}
          className="rounded-xl2 bg-white p-6 shadow-card transition hover:shadow-cardHover"
        >
          <p className="font-heading text-sm font-semibold text-ink">E-mail</p>
          <p className="mt-1 text-sm text-text-muted">{siteConfig.email}</p>
          <p className="mt-3 text-xs text-brand-dark">
            Clique para enviar um e-mail →
          </p>
        </a>
      </div>

      <div className="mt-8 rounded-xl2 bg-sand-dark/40 p-6 text-sm text-text-muted">
        <p className="font-heading text-sm font-semibold text-ink">
          Dados da empresa
        </p>
        <p className="mt-2">{siteConfig.legalName}</p>
        <p>CNPJ: {siteConfig.cnpj}</p>
        <p>{siteConfig.address}</p>
      </div>
    </div>
  );
}
