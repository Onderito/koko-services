import type { Metadata } from "next";

import { altFor } from "./image-alts";
import { IMAGE_SIZE } from "./image-sizes";
import { businessName, siteUrl } from "./site-config";
import { englishTwin, frenchTwin } from "./i18n/addresses";
import { ENGLISH_LEFT_AS_IS, PAGE_PLACE, geoTags } from "./places";

// The picture a page shares when it has no landscape picture of its own; its alt text, in the page's language, is in
// data/image-alts.ts.
const SHARE_IMAGE = "/assets/images/cars/class-v/class-v-third.webp";

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
  /** The same page in each language, as paths by hreflang code ("en", "fr", "x-default"), for the hreflang links.
   *  Without it, a page whose twin is live in data/i18n/addresses.ts gets en, fr and x-default (the English page). */
  languages?: Record<string, string>;
};

const OG_LOCALE: Record<string, string> = { en: "en_GB", fr: "fr_FR" };

// One page's title, description, canonical and sharing tags. og:url is the page's canonical, og:title and
// og:description repeat the page's own title and description, and the picture carries its alt text and size. A page
// with versions in other languages also lists them (hreflang links and og:locale:alternate), and a city page carries
// its place's geo meta tags (data/places.ts).
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
  const alt = ownPicture && imageAlt ? imageAlt : altFor(SHARE_IMAGE, locale);
  const [width, height] = IMAGE_SIZE[src] ?? [];
  const picture = { url: `${siteUrl}${src}`, alt, ...(width && height ? { width, height } : {}) };
  const language = locale ?? "en";
  const bare = path.split("?")[0] || "/";
  const found = path.includes("?") ? undefined : language === "fr" ? englishTwin(bare) : frenchTwin(bare);
  // The English home's address is the bare domain (its path is ""), as in its canonical.
  const twin = found === "/" ? "" : found;
  const versions =
    languages ??
    (twin !== undefined ? (language === "fr" ? { en: twin, fr: path, "x-default": twin } : { en: path, fr: twin, "x-default": path }) : undefined);
  const otherLocales = versions
    ? Object.keys(versions).filter(code => code !== "x-default" && code !== language).map(code => OG_LOCALE[code])
    : [];
  // A city page's place (data/places.ts); a French page takes its English twin's.
  const englishPath = language === "fr" ? found : bare;
  const place =
    englishPath && !(language === "en" && ENGLISH_LEFT_AS_IS.has(englishPath)) ? PAGE_PLACE[englishPath] : undefined;

  return {
    title,
    description,
    alternates: versions
      ? { canonical: url, languages: Object.fromEntries(Object.entries(versions).map(([code, href]) => [code, `${siteUrl}${href}`])) }
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
    ...(place ? { other: geoTags(place, language) } : {}),
  };
}
