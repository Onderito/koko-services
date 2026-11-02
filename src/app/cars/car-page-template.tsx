// Vehicle pages (/cars/class-e, /cars/class-s, /cars/class-v, /cars/maybach) in the Anti language (inspirations/IMG_8800), like the
// home page: a navy hero with the header inside it and the car photo on the right (under the text on phones), the
// features as spec chips; the "Discover" text beside the two interior photos; "Vehicle Features" as Anti's navy split
// card (the exterior photo, gold-circle items); the fleet cards; the call to action; the footer columns.
// Texts, headings, links and photos (sources, alts, order) unchanged; the feature names also show as chips in the hero.
// The small feature icon images (alt = the feature name beside them) became line icons in the gold circles.
// Server component, no animation.

import Image from "next/image";
import type { ReactNode } from "react";
import { Armchair, Luggage, ShieldCheck, Smartphone, Snowflake, Star, Users } from "lucide-react";
import Cars from "@/app/landing/cars";
import Footer from "../layout/footer";
import FooterComponent from "../our-services/footer-component";
import { AntiSection } from "../ui/anti";
import ArrowButton from "../ui/arrow-button";

type Feature = {
  name: string;
  description: string;
  icon: string;
};

type GalleryImage = {
  src: string;
  alt: string;
};

type CarPageTemplateProps = {
  titlePrefix: string;
  titleHighlight: string;
  heroDescription: string;
  bookLabel: string;
  heroImageSrc: string;
  heroImageAlt: string;
  discoverTitle: string;
  discoverTitleMobile?: ReactNode;
  discoverParagraphs: string[];
  gallery: GalleryImage[];
  features: Feature[];
  ctaDescription: string;
  ctaButtonLabel: string;
};

// The hero photos are portraits: crop each one so the whole car shows (phone band, then the desktop panel).
const HERO_FOCUS: Record<string, string> = {
  "/assets/images/cars/class-e/class-e.webp": "object-[50%_78%] lg:object-[50%_72%]",
  "/assets/images/cars/class-s/class-s.webp": "object-[50%_76%] lg:object-[50%_72%]",
  "/assets/images/cars/class-v/class-v-mercedes.webp": "object-[50%_64%] lg:object-[50%_62%]",
  "/assets/images/cars/maybach/maybach.webp": "object-[50%_76%] lg:object-[50%_74%]",
};

// Line icons for the gold circles, picked from each feature's former icon file.
const FEATURE_ICONS: Record<string, typeof Star> = {
  "star.svg": Armchair,
  "safety.svg": ShieldCheck,
  "mobile.svg": Smartphone,
  "users.svg": Users,
  "snow.svg": Snowflake,
  "suit-case.svg": Luggage,
};

/** Anti's SpecChip (ui/anti) for the navy hero: same pill, light text on a translucent fill. */
function HeroSpec({ children }: { children: ReactNode }) {
  return <span className="inline-flex rounded-full border border-white/15 bg-white/[0.08] px-3.5 py-1.5 text-[13px] font-medium text-white/85">{children}</span>;
}

/** AntiSplit (ui/anti), same card, grid, type and gold circles, with a darker top on the photo: these are daylight
 *  shots (trees, a showroom sign) where AntiSplit's night-photo overlay leaves the intro hard to read. */
function FeatureSplit({
  image,
  imageAlt,
  title,
  titleId,
  intro,
  items,
}: {
  image: string;
  imageAlt: string;
  title: string;
  titleId: string;
  intro: ReactNode;
  items: { icon: ReactNode; title: string; text: string }[];
}) {
  return (
    <div data-nav-tone="dark" className="grid overflow-hidden rounded-[12px] bg-[#0d1424] text-white lg:grid-cols-[1.05fr_1fr]">
      <div className="relative min-h-[340px] lg:min-h-[480px]">
        <Image src={image} alt={imageAlt} fill sizes="(min-width: 1024px) 640px, 100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,36,0.94)_0%,rgba(13,20,36,0.8)_45%,rgba(13,20,36,0.25)_78%,rgba(13,20,36,0.5)_100%)] lg:bg-[linear-gradient(180deg,rgba(13,20,36,0.92)_0%,rgba(13,20,36,0.7)_42%,rgba(13,20,36,0.15)_72%,rgba(13,20,36,0.45)_100%)]" />
        <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(13,20,36,0.3)_0%,rgba(13,20,36,0)_55%,#0d1424_100%)] lg:block" />
        <div className="relative max-w-[460px] p-8 md:p-10">
          <h2 id={titleId} className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] md:text-[38px]" style={{ textWrap: "balance" }}>
            {title}
          </h2>
          <div className="mt-4 text-[16px] leading-relaxed text-white/80">{intro}</div>
        </div>
      </div>
      <ul className="flex flex-col justify-center gap-7 p-8 md:p-12">
        {items.map(it => (
          <li key={it.title} className="flex gap-4">
            <span aria-hidden="true" className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#e2b04a] text-[#0d1424]">
              {it.icon}
            </span>
            <div>
              <h3 className="text-[17px] font-semibold leading-snug">{it.title}</h3>
              <p className="mt-1 text-[14px] leading-relaxed text-white/70">{it.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// The closing banner's photo for each car, in the banners' dusk art direction (user, 21 Oct 2026).
const CTA_PHOTO: Record<string, string> = {
  "/assets/images/cars/class-e/class-e.webp": "/assets/images/banners/svc-transfers.jpg",
  "/assets/images/cars/class-v/class-v-mercedes.webp": "/assets/images/banners/svc-yacht.jpg",
  "/assets/images/cars/class-s/class-s.webp": "/assets/images/banners/cta-s-class-rear.jpg",
  "/assets/images/cars/maybach/maybach.webp": "/assets/images/banners/svc-events.jpg",
};

export default function CarPageTemplate({
  titlePrefix,
  titleHighlight,
  heroDescription,
  bookLabel,
  heroImageSrc,
  heroImageAlt,
  discoverTitle,
  discoverTitleMobile,
  discoverParagraphs,
  gallery,
  features,
  ctaDescription,
  ctaButtonLabel,
}: CarPageTemplateProps) {
  const interiors = gallery.slice(0, 2);
  const exterior = gallery[2] ?? { src: heroImageSrc, alt: heroImageAlt };

  return (
    <>
      {/* Hero: navy band, header inside; the car photo fills the right side and fades into the navy on its left. */}
      <section data-hero-tone="dark" data-nav-tone="dark" className="relative isolate overflow-hidden bg-[#0d1424] text-white">
        <div className="mx-auto max-w-[1240px] px-4 pt-[calc(var(--header-h)+3.5rem)] md:px-6 lg:flex lg:min-h-[600px] lg:flex-col lg:justify-center lg:pb-16 lg:pt-[calc(var(--header-h)+4.5rem)]">
          <div className="relative z-10 max-w-[600px] lg:max-w-[520px] xl:max-w-[600px]">
            <h1 className="text-[40px] font-bold leading-[1.04] tracking-[-0.025em] sm:text-[54px] lg:text-[56px] xl:text-[64px]" style={{ textWrap: "balance" }}>
              {titlePrefix}
              <span className="text-[#e2b04a]">{titleHighlight}</span>
            </h1>
            <p className="mt-5 max-w-[540px] text-[17px] leading-relaxed text-white/80 md:text-[18px]">{heroDescription}</p>
            <div className="mt-8">
              <ArrowButton text={bookLabel} href="/contact-me" size="lg" />
            </div>
            {features.length > 0 && (
              <ul className="mt-8 flex flex-wrap gap-2">
                {features.map(feature => (
                  <li key={feature.name}>
                    <HeroSpec>{feature.name}</HeroSpec>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="relative mt-10 h-[300px] sm:h-[400px] md:h-[440px] lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:h-auto lg:w-[min(58%,960px)]">
          <Image
            src={heroImageSrc}
            alt={heroImageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            className={`object-cover ${HERO_FOCUS[heroImageSrc] ?? "object-[50%_65%]"}`}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#0d1424_0%,rgba(13,20,36,0)_32%)] lg:bg-[linear-gradient(90deg,#0d1424_0%,rgba(13,20,36,0.55)_22%,rgba(13,20,36,0)_50%)]" />
          <div className="absolute inset-0 hidden bg-[linear-gradient(180deg,rgba(13,20,36,0.7)_0%,rgba(13,20,36,0)_30%,rgba(13,20,36,0)_78%,rgba(13,20,36,0.6)_100%)] lg:block" />
        </div>
      </section>

      {/* Discover: the text on the left, the two interior photos on the right. */}
      <AntiSection tone="white" labelledBy="car-discover-title">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-center lg:gap-16">
          <div className="max-w-[640px] lg:max-w-none">
            <h2 id="car-discover-title" className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#101828] md:text-[40px]" style={{ textWrap: "balance" }}>
              <span className="md:hidden">{discoverTitleMobile ?? discoverTitle}</span>
              <span className="hidden md:inline">{discoverTitle}</span>
            </h2>
            <div className="mt-6 space-y-4 text-[16px] leading-[1.7] text-[#667085] md:text-[17px]">
              {discoverParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {interiors.map(image => (
              <div key={image.src} className="relative aspect-[3/4] overflow-hidden rounded-[10px] bg-[#eef0f3]">
                <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1280px) 300px, (min-width: 1024px) 26vw, 50vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </AntiSection>

      {/* Vehicle Features: Anti's navy split card, the exterior photo with the title, the features in gold circles. */}
      <AntiSection tone="grey" labelledBy="car-features-title">
        <FeatureSplit
          image={exterior.src}
          imageAlt={exterior.alt}
          title="Vehicle Features"
          titleId="car-features-title"
          intro={<p>Discover the key features and premium amenities of our vehicles, designed to provide maximum comfort, safety, and convenience on every journey.</p>}
          items={features.map(feature => {
            const Icon = FEATURE_ICONS[feature.icon.split("/").pop() ?? ""] ?? Star;
            return { icon: <Icon size={20} strokeWidth={1.8} />, title: feature.name, text: feature.description };
          })}
        />
      </AntiSection>

      <Cars />

      <FooterComponent
        title="Ready to Experience Luxury?"
        description={ctaDescription}
        buttonText={ctaButtonLabel}
        buttonHref="/contact-me"
        flushTop
        image={CTA_PHOTO[heroImageSrc]}
      />

      <Footer withCta={false} />
    </>
  );
}
