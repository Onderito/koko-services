import type { Metadata } from "next";

import { pageMetadata } from "@/app/data/page-metadata";
import { hourlyChauffeurPage } from "@/app/data/service-pages";
import ServicePageTemplate from "@/app/our-services/service-page-template";

export const metadata: Metadata = pageMetadata({
  title: hourlyChauffeurPage.metadata.title,
  description: hourlyChauffeurPage.metadata.description,
  path: hourlyChauffeurPage.path,
  image: hourlyChauffeurPage.heroImageSrc,
  imageAlt: hourlyChauffeurPage.heroImageAlt,
});

export default function HourlyChauffeurPage() {
  return <ServicePageTemplate config={hourlyChauffeurPage} />;
}
