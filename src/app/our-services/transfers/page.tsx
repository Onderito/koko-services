import type { Metadata } from "next";

import { pageMetadata } from "@/app/data/page-metadata";
import { transfersPage } from "@/app/data/service-pages";
import ServicePageTemplate from "../service-page-template";

export const metadata: Metadata = pageMetadata({
  title: transfersPage.metadata.title,
  description: transfersPage.metadata.description,
  path: transfersPage.path,
  image: transfersPage.heroImageSrc,
  imageAlt: transfersPage.heroImageAlt,
});

export default function TransfersPage() {
  return <ServicePageTemplate config={transfersPage} />;
}
