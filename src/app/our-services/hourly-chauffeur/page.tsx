import type { Metadata } from "next";

import { siteUrl } from "@/app/data/site-config";
import { hourlyChauffeurPage } from "@/app/data/service-pages";
import ServicePageTemplate from "../service-page-template";

export const metadata: Metadata = {
  title: hourlyChauffeurPage.metadata.title,
  description: hourlyChauffeurPage.metadata.description,
  keywords: hourlyChauffeurPage.metadata.keywords,
  alternates: {
    canonical: `${siteUrl}${hourlyChauffeurPage.path}`,
  },
};

export default function HourlyChauffeurPage() {
  return <ServicePageTemplate config={hourlyChauffeurPage} />;
}
