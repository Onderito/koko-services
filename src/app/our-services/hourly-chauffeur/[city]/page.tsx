import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { siteUrl } from "@/app/data/site-config";
import { hourlyChauffeurPages } from "@/app/data/service-pages";
import ServicePageTemplate from "../../service-page-template";

import BreadcrumbSchema from "@/app/ui/schema/breadcrumb-schema";

type HourlyCityPageProps = {
  params: Promise<{
    city: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(hourlyChauffeurPages).map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: HourlyCityPageProps): Promise<Metadata> {
  const { city } = await params;
  const config = hourlyChauffeurPages[city];

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

export default async function HourlyCityPage({ params }: HourlyCityPageProps) {
  const { city } = await params;
  const config = hourlyChauffeurPages[city];

  if (!config) {
    notFound();
  }

  const breadcrumbs = [
    {
      name: "Home",
      url: siteUrl,
    },
    {
      name: "Hourly Chauffeur",
      url: `${siteUrl}/our-services/hourly-chauffeur`,
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
