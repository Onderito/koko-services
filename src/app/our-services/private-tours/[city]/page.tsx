import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { siteUrl } from "@/app/data/site-config";
import { chauffeurTourPages } from "@/app/data/service-pages";
import ServicePageTemplate from "../../service-page-template";

type PrivateTourCityPageProps = {
  params: Promise<{
    city: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(chauffeurTourPages).map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: PrivateTourCityPageProps): Promise<Metadata> {
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
      canonical: `${siteUrl}/our-services/private-tours/${city}`,
    },
  };
}

export default async function PrivateTourCityPage({
  params,
}: PrivateTourCityPageProps) {
  const { city } = await params;
  const config = chauffeurTourPages[city];

  if (!config) {
    notFound();
  }

  return <ServicePageTemplate config={config} />;
}
