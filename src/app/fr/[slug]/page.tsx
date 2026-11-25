// The French pages (data/service-pages-fr.ts), built with the service page template. Each one declares its English
// original as its other language (hreflang en, fr and x-default) and carries its own breadcrumb markup.

import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { pageMetadata } from "@/app/data/page-metadata";
import { siteUrl } from "@/app/data/site-config";
import { frenchServicePages } from "@/app/data/service-pages-fr";
import ServicePageTemplate from "@/app/our-services/service-page-template";
import BreadcrumbJsonLd from "@/app/ui/schema/breadcrumb-json-ld";

type FrenchPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(frenchServicePages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: FrenchPageProps): Promise<Metadata> {
  const { slug } = await params;
  const config = frenchServicePages[slug];

  if (!config?.enPath) {
    return {};
  }

  return pageMetadata({
    title: config.metadata.title,
    description: config.metadata.description,
    path: config.path,
    image: config.heroImageSrc,
    imageAlt: config.heroImageAlt,
    locale: "fr",
    languages: { en: config.enPath, fr: config.path, "x-default": config.enPath },
  });
}

export default async function FrenchPage({ params }: FrenchPageProps) {
  const { slug } = await params;
  const config = frenchServicePages[slug];

  if (!config) {
    notFound();
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: siteUrl },
          { name: "Transferts", url: `${siteUrl}/our-services/transfers` },
          { name: config.serviceLabel, url: `${siteUrl}${config.path}` },
        ]}
      />
      <ServicePageTemplate config={config} />
    </>
  );
}
