import type { Metadata } from "next";
import NavBar from "./layout/navBar";
import Script from "next/script";

import "./globals.css";
import ClientWrapper from "./ui/client-wrapper";
import {
  businessName,
  businessTitle,
  contactEmail,
  contactPhone,
  serviceAreaText,
  siteUrl,
  socialPreviewImage,
} from "./data/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: businessTitle,
  description:
    `${businessName} provides private driver service in Nice, Cannes, Monaco and Saint-Tropez for airport transfers, events and premium travel.`,
  openGraph: {
    title: businessName,
    description:
      "Private driver service in Nice, Cannes, Monaco and Saint-Tropez.",
    url: siteUrl,
    siteName: businessName,
    type: "website",
    images: [
      {
        url: socialPreviewImage,
        alt: `${businessName} icon`,
      },
    ],
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

        <Script id="structured-data" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: `${businessName} - Private Driver in French Riviera`,
            image: socialPreviewImage,
            logo: socialPreviewImage,
            url: siteUrl,
            telephone: contactPhone,
            email: contactEmail,
            address: {
              "@type": "PostalAddress",
              streetAddress: "Nice Airport",
              addressLocality: "Nice",
              postalCode: "06000",
              addressCountry: "FR",
            },
            areaServed: serviceAreaText,
            priceRange: "€€",
          })}
        </Script>
      </body>
    </html>
  );
}
