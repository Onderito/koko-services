// The 404 page of unknown addresses: the English root layout (header, skip link, structured data) around Next.js's own
// "404: This page could not be found." message, as before the site had one root layout per language.

import type { Metadata } from "next";
import NotFound from "next/dist/client/components/builtin/not-found";
import SiteHeader from "@/app/layout/site-header";
import { archivo } from "@/app/fonts";

import "@/app/globals.css";
import ScrollMotion from "@/app/ui/scroll-motion";
import Analytics from "@/app/ui/analytics";
import SeoSchema from "@/app/ui/seo-schema";
import { siteUrl } from "@/app/data/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "404: This page could not be found.",
};

export default function GlobalNotFound() {
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
          <NotFound />
        </main>

        <SeoSchema />
      </body>
    </html>
  );
}
