// The home page's own node: a WebPage with its language, the site it belongs to and the business it is about (the
// @ids of the site-wide data in ui/seo-schema.tsx), and the same page in the other language as its translation.

import { siteUrl } from "@/app/data/site-config";

const HOME = { en: siteUrl, fr: `${siteUrl}/fr` };

export default function HomePageJsonLd({ language, name, description }: { language: "en" | "fr"; name: string; description: string }) {
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
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
