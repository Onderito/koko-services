import type { Metadata } from "next";
import NavBar from "./layout/navBar";

import "./globals.css";
import ClientWrapper from "./ui/client-wrapper";
import Analytics, { GtmNoScript } from "./ui/analytics";
import SeoSchema from "./ui/seo-schema";
import {
  businessName,
  businessTitle,
  siteUrl,
  socialPreviewImage,
} from "./data/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: businessTitle,
  description:
    "Private chauffeur service in Nice, Cannes, Monaco and Saint-Tropez — airport transfers, hourly hire and luxury Riviera travel.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: businessName,
    description:
      "Private chauffeur in Nice, Cannes, Monaco and Saint-Tropez. Airport transfers and luxury travel on the French Riviera.",
    url: siteUrl,
    siteName: businessName,
    type: "website",
    images: [
      {
        url: socialPreviewImage,
        alt: `${businessName} - Private driver French Riviera`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: businessName,
    description:
      "Private chauffeur in Nice, Cannes, Monaco and Saint-Tropez. Airport transfers and luxury Riviera travel.",
    images: [socialPreviewImage],
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
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Analytics />
        <GtmNoScript />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-[#111111] focus:shadow-lg"
        >
          Skip to main content
        </a>
        <NavBar />
        <main id="main-content">
          <ClientWrapper>{children}</ClientWrapper>
        </main>

        <SeoSchema />
      </body>
    </html>
  );
}
