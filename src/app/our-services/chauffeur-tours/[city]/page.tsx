import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { siteUrl } from "@/app/data/site-config";
import { chauffeurTourPages } from "@/app/data/service-pages";
import ServicePageTemplate from "../../service-page-template";

type ChauffeurTourCityPageProps = {
  params: Promise<{
    city: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(chauffeurTourPages).map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: ChauffeurTourCityPageProps): Promise<Metadata> {
  const { city } = await params;
  const config = chauffeurTourPages[city];

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

export default async function ChauffeurTourCityPage({
  params,
}: ChauffeurTourCityPageProps) {
  const { city } = await params;
  const config = chauffeurTourPages[city];

  if (!config) {
    notFound();
  }

  return <ServicePageTemplate config={config} />;
}
