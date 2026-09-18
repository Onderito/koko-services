import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { siteUrl } from "@/app/data/site-config";
import { chauffeurTourPages } from "@/app/data/service-pages";
import ServicePageTemplate from "../../service-page-template";

type PrivateTourCityPageProps = {
  params: Promise<{
    city: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(chauffeurTourPages).map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: PrivateTourCityPageProps): Promise<Metadata> {
  const { city } = await params;
  const config = chauffeurTourPages[city];

  if (!config) {
    return {};
  }

  return {
    title: config.metadata.title,
    description: config.metadata.description,
    keywords: config.metadata.keywords,
    alternates: {
      canonical: `${siteUrl}/our-services/private-tours/${city}`,
    },
  };
}

export default async function PrivateTourCityPage({
  params,
}: PrivateTourCityPageProps) {
  const { city } = await params;
  const config = chauffeurTourPages[city];

  if (!config) {
    notFound();
  }

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: config.heroTitle,
    description: config.metadata.description,
    touristType: ["Luxury travelers", "Couples", "Families", "Small groups"],
    provider: {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}#localbusiness`,
      name: "Kokolimo",
    },
    url: `${siteUrl}${config.path}`,
    image: `${siteUrl}${config.heroImageSrc}`,
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Private Tours",
        item: `${siteUrl}/our-services/private-tours`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: config.serviceLabel,
        item: `${siteUrl}${config.path}`,
      },
    ],
  };

  const faqStructuredData = config.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: config.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      {faqStructuredData ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqStructuredData),
          }}
        />
      ) : null}
      <ServicePageTemplate config={config} />
    </>
  );
}
