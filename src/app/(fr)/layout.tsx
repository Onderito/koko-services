// Root layout of the French pages (/fr/...): the English root layout's structure in French, with <html lang="fr">, so
// browsers, screen readers and search engines read the pages as French. Each page sets its own title, description,
// canonical and hreflang tags (data/page-metadata.ts).

import type { Metadata } from "next";
import SiteHeader from "@/app/layout/site-header";
import { archivo } from "@/app/fonts";

import "@/app/globals.css";
import ClientWrapper from "@/app/ui/client-wrapper";
import ScrollMotion from "@/app/ui/scroll-motion";
import Analytics from "@/app/ui/analytics";
import SeoSchema from "@/app/ui/seo-schema";
import { businessName, siteUrl } from "@/app/data/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Kokolimo | Chauffeur privé à Nice, Cannes et Monaco",
  description:
    "Chauffeur privé à Nice, Cannes, Monaco et Saint-Tropez : transferts aéroport, chauffeur à l'heure et voyages sur la Côte d'Azur.",
  alternates: {
    canonical: `${siteUrl}/fr`,
  },
  openGraph: {
    siteName: businessName,
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
  },
};

export default function FrenchRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={archivo.variable} suppressHydrationWarning>
      <body className="antialiased">
        <Analytics locale="fr" />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-[#111111] focus:shadow-lg"
        >
          Aller au contenu principal
        </a>
        <SiteHeader fontClassName={archivo.className} />
        <ScrollMotion />
        <main id="main-content">
          <ClientWrapper>{children}</ClientWrapper>
        </main>

        <SeoSchema locale="fr" />
      </body>
    </html>
  );
}
