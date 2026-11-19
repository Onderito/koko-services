import type { Metadata } from "next";

import { pageMetadata } from "@/app/data/page-metadata";
import { chauffeurToursPage } from "@/app/data/service-pages";
import ServicePageTemplate from "../service-page-template";

export const metadata: Metadata = pageMetadata({
  title: chauffeurToursPage.metadata.title,
  description: chauffeurToursPage.metadata.description,
  path: "/our-services/private-tours",
  image: chauffeurToursPage.heroImageSrc,
  imageAlt: chauffeurToursPage.heroImageAlt,
});

export default function PrivateToursPage() {
  return <ServicePageTemplate config={chauffeurToursPage} />;
}
