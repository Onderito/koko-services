import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "./layout/navBar";
import Script from "next/script";
import localFont from "next/font/local";

const manrope = localFont({
  src: [
    {
      path: './assets/fonts/Manrope-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './assets/fonts/Manrope-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-manrope',
  display: 'swap',
})

const gloria = localFont({
  src: './assets/fonts/GloriaHallelujah-Regular.ttf',
  weight: '400',
  style: 'normal',
  variable: '--font-gloria',
  display: 'swap',
})



import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Koko Limo - Private Chauffeur in French Riviera",
  description: "Koko Limo - Private Chauffeur in French Riviera",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${gloria.variable}`}>
      <head>
        <link
          rel="preload"
          href="/app/assets/fonts/Manrope-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/app/assets/fonts/Manrope-Bold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/app/assets/fonts/Manrope-Light.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/app/assets/fonts/GloriaHallelujah-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}

        <Script id="structured-data" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Koko Limo - Private Chauffeur in French Riviera",
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
