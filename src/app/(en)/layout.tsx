import type { Metadata } from "next";
import SiteHeader from "@/app/layout/site-header";
import { archivo } from "@/app/fonts";

import "@/app/globals.css";
import ClientWrapper from "@/app/ui/client-wrapper";
import ScrollMotion from "@/app/ui/scroll-motion";
import Analytics from "@/app/ui/analytics";
import SeoSchema from "@/app/ui/seo-schema";
import { businessName, businessTitle, siteUrl } from "@/app/data/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: businessTitle,
  description:
    "Private chauffeur service in Nice, Cannes, Monaco and Saint-Tropez: airport transfers, hourly hire and luxury Riviera travel.",
  alternates: {
    canonical: siteUrl,
  },
  // Each page sets its own sharing tags (data/page-metadata.ts); these defaults name no page, so none can point to the home.
  openGraph: {
    siteName: businessName,
    type: "website",
    locale: "en_GB",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={archivo.variable} suppressHydrationWarning>
      <body className="antialiased">
        <Analytics />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-[#111111] focus:shadow-lg"
        >
          Skip to main content
        </a>
        <SiteHeader fontClassName={archivo.className} />
        <ScrollMotion />
        <main id="main-content">
          <ClientWrapper>{children}</ClientWrapper>
        </main>

        <SeoSchema />
      </body>
    </html>
  );
}
