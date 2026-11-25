import type { Metadata } from "next";

import { IMAGE_SIZE } from "./image-sizes";
import { businessName, siteUrl } from "./site-config";

// The picture a page shares when it has no landscape picture of its own.
const SHARE_IMAGE = "/assets/images/cars/class-v/class-v-third.webp";
const SHARE_IMAGE_ALT = "A black Mercedes V-Class in front of the Casino de Monte-Carlo at night";

type PageMetadataInput = {
  title: string;
  description: string;
  /** The page's path ("" for the home). It may carry a query string, as in "/blog?page=2". */
  path: string;
  /** A picture under public/, shared when it is landscape (or always, with allowPortrait). */
  image?: string;
  imageAlt?: string;
  /** For pages whose own picture must be shared even in portrait, such as a car's page. */
  allowPortrait?: boolean;
  /** The page's language when it is not English. */
  locale?: "fr";
  /** The same page in each language, as paths by hreflang code ("en", "fr", "x-default"), for the hreflang links. */
  languages?: Record<string, string>;
};

const OG_LOCALE: Record<string, string> = { en: "en_GB", fr: "fr_FR" };

// One page's title, description, canonical and sharing tags. og:url is the page's canonical, og:title and
// og:description repeat the page's own title and description, and the picture carries its alt text and size. A page
// with versions in other languages also lists them (hreflang links and og:locale:alternate).
export function pageMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
  allowPortrait = false,
  locale,
  languages,
}: PageMetadataInput): Metadata {
  const url = `${siteUrl}${path}`;
  const size = image ? IMAGE_SIZE[image] : undefined;
  const ownPicture = Boolean(image && imageAlt && size && (allowPortrait || size[0] >= size[1]));
  const src = ownPicture && image ? image : SHARE_IMAGE;
  const alt = ownPicture && imageAlt ? imageAlt : SHARE_IMAGE_ALT;
  const [width, height] = IMAGE_SIZE[src] ?? [];
  const picture = { url: `${siteUrl}${src}`, alt, ...(width && height ? { width, height } : {}) };
  const language = locale ?? "en";
  const otherLocales = languages
    ? Object.keys(languages).filter(code => code !== "x-default" && code !== language).map(code => OG_LOCALE[code])
    : [];

  return {
    title,
    description,
    alternates: languages
      ? { canonical: url, languages: Object.fromEntries(Object.entries(languages).map(([code, href]) => [code, `${siteUrl}${href}`])) }
      : { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: businessName,
      locale: OG_LOCALE[language],
      ...(otherLocales.length ? { alternateLocale: otherLocales } : {}),
      images: [picture],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: picture.url, alt }],
    },
  };
}
