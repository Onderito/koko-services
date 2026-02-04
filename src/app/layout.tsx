import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "./layout/navBar";
import Script from "next/script";

import "./globals.css";
import ClientWrapper from "./ui/client-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Koko Limo - Private Driver in French Riviera",
  description: "Koko Limo - Private Driver in French Riviera",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        <ClientWrapper>{children}</ClientWrapper>

        <Script id="structured-data" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Koko Limo - Private Driver in French Riviera",
            image: "https://kokolimonice.com/logo.png",
            url: "https://kokolimonice.com",
            telephone: "+33771698142",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Nice Airport",
              addressLocality: "Nice",
              postalCode: "06000",
              addressCountry: "FR",
            },
            priceRange: "€€",
            servesCuisine: "Transportation",
          })}
        </Script>
      </body>
    </html>
  );
}
