import type { Metadata } from "next";

import { siteUrl } from "@/app/data/site-config";
import { chauffeurToursPage } from "@/app/data/service-pages";
import ServicePageTemplate from "../service-page-template";

export const metadata: Metadata = {
  title: chauffeurToursPage.metadata.title,
  description: chauffeurToursPage.metadata.description,
  keywords: chauffeurToursPage.metadata.keywords,
  alternates: {
    canonical: `${siteUrl}/our-services/private-tours`,
  },
};

export default function PrivateToursPage() {
  return <ServicePageTemplate config={chauffeurToursPage} />;
}
