import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { pageMetadata } from "@/app/data/page-metadata";
import { siteUrl } from "@/app/data/site-config";
import { yachtTransferPages } from "@/app/data/service-pages";
import ServicePageTemplate from "@/app/our-services/service-page-template";

import BreadcrumbJsonLd from "@/app/ui/schema/breadcrumb-json-ld";

type YachtTransferPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(yachtTransferPages).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: YachtTransferPageProps): Promise<Metadata> {
  const { slug } = await params;
  const config = yachtTransferPages[slug];

  if (!config) {
    return {};
  }

  return pageMetadata({
    title: config.metadata.title,
    description: config.metadata.description,
    path: config.path,
    image: config.heroImageSrc,
    imageAlt: config.heroImageAlt,
  });
}

export default async function YachtTransferPage({
  params,
}: YachtTransferPageProps) {
  const { slug } = await params;
  const config = yachtTransferPages[slug];

  if (!config) {
    notFound();
  }

  const breadcrumbs = [
    {
      name: "Home",
      url: siteUrl,
    },
    {
      name: "Yacht Transfers",
      url: `${siteUrl}/our-services/yacht-transfers`,
    },
    {
      name: config.heroTitle,
      url: `${siteUrl}${config.path}`,
    },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <ServicePageTemplate config={config} />
    </>
  );
}
