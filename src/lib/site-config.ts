export const SITE_URL = "https://www.julilarofertas.com";

const rawWhatsApp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";
const normalizedWhatsApp = rawWhatsApp.replace(/\D/g, "");
const whatsappNumber = /^55[1-9]\d{9,10}$/.test(normalizedWhatsApp)
  ? normalizedWhatsApp
  : "";
const nationalWhatsApp = whatsappNumber.slice(2);
const configuredEmail = (
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contato@julilarmoveis.com"
).trim();

export const siteConfig = {
  brandName: "JuliLar Ofertas",
  domain: "julilarofertas.com",
  siteUrl: SITE_URL,
  tagline: "Móveis e organização inteligente para a sua casa",
  legalName: "G F DA SILVEIRA LTDA",
  cnpj: "31.460.458/0001-57",
  address:
    "Avenida do Cacau, 1663, Lote 23 Quadra 01, Setor 03, Cacaulândia - RO, CEP 76889-000",
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(configuredEmail)
    ? configuredEmail
    : "contato@julilarmoveis.com",
  whatsappNumber,
  whatsappDisplay: whatsappNumber
    ? `(${nationalWhatsApp.slice(0, 2)}) ${nationalWhatsApp.slice(
        2,
        -4
      )}-${nationalWhatsApp.slice(-4)}`
    : "",
  serviceHours: "Segunda a sexta, 9h às 18h",
  social: {
    instagram: "https://www.instagram.com/julilarmoveis",
    whatsapp: whatsappNumber ? `https://wa.me/${whatsappNumber}` : "",
  },
  returnDays: 7,
  warrantyDays: 90,
};
