import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CartProvider } from "@/lib/cart-context";
import { SITE_URL, siteConfig } from "@/lib/site-config";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "JuliLar Ofertas | Móveis e organização para a sua casa",
  description:
    "Móveis multifuncionais e soluções de organização para casa, com informações claras, políticas publicadas e atendimento pelos canais oficiais.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: siteConfig.brandName,
    title: "JuliLar Ofertas | Móveis e organização para a sua casa",
    description:
      "Móveis multifuncionais e soluções de organização para casa.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "OnlineStore",
    name: siteConfig.brandName,
    legalName: siteConfig.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/logo.png`,
    email: siteConfig.email,
    taxID: siteConfig.cnpj,
    ...(siteConfig.whatsappNumber
      ? { telephone: `+${siteConfig.whatsappNumber}` }
      : {}),
    sameAs: [siteConfig.social.instagram],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressCountry: "BR",
    },
  };

  return (
    <html lang="pt-BR" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-body">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
