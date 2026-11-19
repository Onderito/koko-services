import type { Metadata } from "next";

import { pageMetadata } from "@/app/data/page-metadata";
import { yachtTransfersPage } from "@/app/data/service-pages";
import ServicePageTemplate from "../service-page-template";

export const metadata: Metadata = pageMetadata({
  title: yachtTransfersPage.metadata.title,
  description: yachtTransfersPage.metadata.description,
  path: yachtTransfersPage.path,
  image: yachtTransfersPage.heroImageSrc,
  imageAlt: yachtTransfersPage.heroImageAlt,
});

export default function YachtTransfersPage() {
  return <ServicePageTemplate config={yachtTransfersPage} />;
}
