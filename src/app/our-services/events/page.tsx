import type { Metadata } from "next";

import { siteUrl } from "@/app/data/site-config";
import { eventsPage } from "@/app/data/service-pages";
import ServicePageTemplate from "../service-page-template";

export const metadata: Metadata = {
  title: eventsPage.metadata.title,
  description: eventsPage.metadata.description,
  keywords: eventsPage.metadata.keywords,
  alternates: {
    canonical: `${siteUrl}${eventsPage.path}`,
  },
};

export default function EventsPage() {
  return <ServicePageTemplate config={eventsPage} />;
}
