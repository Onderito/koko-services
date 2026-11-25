// The French service pages (data/service-pages-fr.ts), built with the service page template. Each one gets hreflang
// links to its English original from pageMetadata (data/i18n/addresses.ts) and carries its own breadcrumb markup with
// French addresses only: Accueil once the French home is live, its family's hub (for a page inside a family), then the
// page. A trail of a single page gets no breadcrumb markup.

import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { pageMetadata } from "@/app/data/page-metadata";
import { siteUrl } from "@/app/data/site-config";
import { frenchServicePages } from "@/app/data/service-pages-fr";
import { frenchTwin } from "@/app/data/i18n/addresses";
import ServicePageTemplate from "@/app/our-services/service-page-template";
import BreadcrumbJsonLd from "@/app/ui/schema/breadcrumb-json-ld";

type FrenchPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// Each family's hub, by the English path its pages start with.
const HUBS: { en: string; name: string }[] = [
  { en: "/our-services/transfers", name: "Transferts privés" },
  { en: "/our-services/hourly-chauffeur", name: "Chauffeur privé à l'heure" },
  { en: "/our-services/private-tours", name: "Excursions privées" },
  { en: "/our-services/yacht-transfers", name: "Transferts yacht" },
  { en: "/our-services/events", name: "Événements" },
];

const absolute = (path: string) => (path === "/" ? siteUrl : `${siteUrl}${path}`);

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
  });
}

export default async function FrenchPage({ params }: FrenchPageProps) {
  const { slug } = await params;
  const config = frenchServicePages[slug];

  if (!config) {
    notFound();
  }

  const home = frenchTwin("/");
  const hub = HUBS.find((h) => config.enPath?.startsWith(`${h.en}/`));
  const hubPath = hub ? frenchTwin(hub.en) : undefined;
  const items = [
    ...(home ? [{ name: "Accueil", url: absolute(home) }] : []),
    ...(hub && hubPath ? [{ name: hub.name, url: absolute(hubPath) }] : []),
    { name: config.serviceLabel, url: absolute(config.path) },
  ];

  return (
    <>
      {items.length > 1 && <BreadcrumbJsonLd items={items} />}
      <ServicePageTemplate config={config} />
    </>
  );
}
