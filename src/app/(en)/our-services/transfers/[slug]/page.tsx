import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { pageMetadata } from "@/app/data/page-metadata";
import { siteUrl } from "@/app/data/site-config";
import { transferPages } from "@/app/data/service-pages";
import ServicePageTemplate from "@/app/our-services/service-page-template";
import BreadcrumbJsonLd from "@/app/ui/schema/breadcrumb-json-ld";

type TransferDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(transferPages).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: TransferDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const config = transferPages[slug];

  if (!config) {
    return {};
  }

  // A page with a live French version lists both languages (pageMetadata, from data/i18n/addresses.ts).
  return pageMetadata({
    title: config.metadata.title,
    description: config.metadata.description,
    path: config.path,
    image: config.heroImageSrc,
    imageAlt: config.heroImageAlt,
  });
}

export default async function TransferDetailPage({
  params,
}: TransferDetailPageProps) {
  const { slug } = await params;
  const config = transferPages[slug];

  if (!config) {
    notFound();
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteUrl },
          { name: "Transfers", url: `${siteUrl}/our-services/transfers` },
          { name: config.serviceLabel, url: `${siteUrl}${config.path}` },
        ]}
      />
      <ServicePageTemplate config={config} />
    </>
  );
}
