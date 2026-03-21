import type { Metadata } from "next";

import { siteUrl } from "@/app/data/site-config";
import { chauffeurToursPage } from "@/app/data/service-pages";
import ServicePageTemplate from "../service-page-template";

export const metadata: Metadata = {
  title: chauffeurToursPage.metadata.title,
  description: chauffeurToursPage.metadata.description,
  keywords: chauffeurToursPage.metadata.keywords,
  alternates: {
    canonical: `${siteUrl}${chauffeurToursPage.path}`,
  },
};

export default function ChauffeurToursPage() {
  return <ServicePageTemplate config={chauffeurToursPage} />;
}
