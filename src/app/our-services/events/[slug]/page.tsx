import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { siteUrl } from "@/app/data/site-config";
import { eventPages } from "@/app/data/service-pages";
import ServicePageTemplate from "../../service-page-template";

import BreadcrumbSchema from "@/app/ui/schema/breadcrumb-schema";

type EventPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(eventPages).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: EventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const config = eventPages[slug];

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

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;
  const config = eventPages[slug];

  if (!config) {
    notFound();
  }

  const breadcrumbs = [
    {
      name: "Home",
      url: siteUrl,
    },
    {
      name: "Event Transport",
      url: `${siteUrl}/our-services/events`,
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
