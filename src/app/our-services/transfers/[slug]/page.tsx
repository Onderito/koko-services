import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { pageMetadata } from "@/app/data/page-metadata";
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

  return <ServicePageTemplate config={config} />;
}
