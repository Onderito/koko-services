import type { Metadata } from "next";

import { pageMetadata } from "@/app/data/page-metadata";
import { eventsPage } from "@/app/data/service-pages";
import ServicePageTemplate from "@/app/our-services/service-page-template";

export const metadata: Metadata = pageMetadata({
  title: eventsPage.metadata.title,
  description: eventsPage.metadata.description,
  path: eventsPage.path,
  image: eventsPage.heroImageSrc,
  imageAlt: eventsPage.heroImageAlt,
});

export default function EventsPage() {
  return <ServicePageTemplate config={eventsPage} />;
}
