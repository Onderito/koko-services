// The home page's own node: a WebPage with its language, the site it belongs to and the business it is about (the
// @ids of the site-wide data in ui/seo-schema.tsx), and the same page in the other language as its translation. The two
// homes also carry the Google rating the page shows (hero and trust strip), as an AggregateRating of the business:
// a node of its own pointing to the business's @id, so each page keeps a single LocalBusiness.

import { siteUrl } from "@/app/data/site-config";
import { getRatings } from "@/lib/reviews/ratings";

const HOME = { en: siteUrl, fr: `${siteUrl}/fr` };

export default async function HomePageJsonLd({ language, name, description }: { language: "en" | "fr"; name: string; description: string }) {
  const url = HOME[language];
  const other = HOME[language === "en" ? "fr" : "en"];
  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: language,
    isPartOf: { "@id": `${siteUrl}#website` },
    about: { "@id": `${siteUrl}#localbusiness` },
    primaryImageOfPage: { "@type": "ImageObject", url: `${siteUrl}/assets/images/hero/home-hero-v-class.jpg` },
    ...(language === "en" ? { workTranslation: { "@id": `${other}#webpage` } } : { translationOfWork: { "@id": `${other}#webpage` } }),
  };
  const google = (await getRatings()).find(r => r.source === "google");
  const rating =
    google && google.count
      ? {
          "@context": "https://schema.org",
          "@type": "AggregateRating",
          itemReviewed: { "@id": `${siteUrl}#localbusiness` },
          ratingValue: google.rating,
          bestRating: 5,
          worstRating: 1,
          ratingCount: google.count,
          reviewCount: google.count,
        }
      : null;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      {rating && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(rating) }} />}
    </>
  );
}
