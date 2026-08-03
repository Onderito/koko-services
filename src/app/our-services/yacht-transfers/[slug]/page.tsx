import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { siteUrl } from "@/app/data/site-config";
import { yachtTransferPages } from "@/app/data/service-pages";
import ServicePageTemplate from "../../service-page-template";

import BreadcrumbSchema from "@/app/ui/schema/breadcrumb-schema";

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

  return {
    title: config.metadata.title,
    description: config.metadata.description,
    keywords: config.metadata.keywords,
    alternates: {
      canonical: `${siteUrl}${config.path}`,
    },
  };
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
      <BreadcrumbSchema items={breadcrumbs} />
      <ServicePageTemplate config={config} />
    </>
  );
}
