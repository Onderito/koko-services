import type { Metadata } from "next";

import { siteUrl } from "@/app/data/site-config";
import { yachtTransfersPage } from "@/app/data/service-pages";
import ServicePageTemplate from "../service-page-template";

export const metadata: Metadata = {
  title: yachtTransfersPage.metadata.title,
  description: yachtTransfersPage.metadata.description,
  keywords: yachtTransfersPage.metadata.keywords,
  alternates: {
    canonical: `${siteUrl}${yachtTransfersPage.path}`,
  },
};

export default function YachtTransfersPage() {
  return <ServicePageTemplate config={yachtTransfersPage} />;
}
