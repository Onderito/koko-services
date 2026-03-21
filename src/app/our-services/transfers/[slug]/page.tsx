import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { siteUrl } from "@/app/data/site-config";
import { transferPages } from "@/app/data/service-pages";
import ServicePageTemplate from "../../service-page-template";

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

  return {
    title: config.metadata.title,
    description: config.metadata.description,
    keywords: config.metadata.keywords,
    alternates: {
      canonical: `${siteUrl}${config.path}`,
    },
  };
}

export default async function TransferDetailPage({
  params,
}: TransferDetailPageProps) {
  const { slug } = await params;
  const config = transferPages[slug];

  if (!config) {
    notFound();
  }

  return <ServicePageTemplate config={config} />;
}
