import type { Metadata } from "next";

import { siteUrl } from "@/app/data/site-config";
import { transfersPage } from "@/app/data/service-pages";
import ServicePageTemplate from "../service-page-template";

export const metadata: Metadata = {
  title: transfersPage.metadata.title,
  description: transfersPage.metadata.description,
  keywords: transfersPage.metadata.keywords,
  alternates: {
    canonical: `${siteUrl}${transfersPage.path}`,
  },
};

export default function TransfersPage() {
  return <ServicePageTemplate config={transfersPage} />;
}
