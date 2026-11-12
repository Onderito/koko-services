// Service pages (38 URLs: the protected hubs /our-services/transfers, /private-tours and /hourly-chauffeur, yacht
// transfers, events and every city or route page), built from the "Anti" blocks of the approved home page
// (koko/inspirations/IMG_8800): a dark photo hero with the header inside it, white and grey sections, a navy split card
// with gold circles, white photo cards, the FAQ, the closing banner, then the site footer.
// Server component; every text is in the HTML. Texts, heading levels, links and the hero photo come from
// data/service-pages.ts unchanged. The small labels above titles ("Keep Exploring", "Questions"…) are gone at the user's
// request (20 Oct 2026). 21 Oct 2026, at the user's request: the FAQ uses the home page's animated FAQ (Hyperiux, answers
// kept in the HTML, questions still h3), and the closing banner is the home page's banner with a dusk photo for the
// page family and "Discover All of Our Services".

import Image from "next/image";
import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { BadgeCheck, BriefcaseBusiness, CarFront, Clock3, ConciergeBell, Landmark, Luggage, MountainSnow, Plane, Star } from "lucide-react";

import FooterComponent from "./footer-component";
import Footer from "../layout/footer";
import { getBlogPost } from "../data/blog-posts";
import {
  chauffeurTourPages,
  chauffeurToursPage,
  eventPages,
  eventsPage,
  hourlyChauffeurPage,
  hourlyChauffeurPages,
  transferPages,
  transfersPage,
  yachtTransferPages,
  yachtTransfersPage,
  type ServiceCardLink,
  type ServicePageConfig,
} from "../data/service-pages";
import { AntiCard, AntiHeading, AntiSection, AntiSplit, GoldArrow, SpecChip, type AntiTone } from "../ui/anti";
import ArrowButton from "../ui/arrow-button";
import FaqList from "../ui/faq-list";
import { cityForPage, RoutePrices } from "../ui/destination-prices";
import { Accent } from "../ui/kit";

const SHADOW = "shadow-[0_1px_2px_rgba(16,24,40,0.05),0_10px_30px_rgba(16,24,40,0.07)]";

/* ------------------------------------------------------------------ photos */

const allServicePages: ServicePageConfig[] = [
  transfersPage,
  hourlyChauffeurPage,
  chauffeurToursPage,
  yachtTransfersPage,
  eventsPage,
  ...Object.values(transferPages),
  ...Object.values(hourlyChauffeurPages),
  ...Object.values(chauffeurTourPages),
  ...Object.values(yachtTransferPages),
  ...Object.values(eventPages),
];
const servicePageByPath = new Map(allServicePages.map(page => [page.path, page]));

/** Photo of a linked page: a service page's own hero photo, or a blog post's cover. */
function photoFor(href: string): string | undefined {
  const page = servicePageByPath.get(href);
  if (page) return page.heroImageSrc;
  const slug = href.match(/^\/blog\/([^/?#]+)$/)?.[1];
  return slug ? getBlogPost(slug)?.imageUrl : undefined;
}

// Where the subject (the car, the sign, the village) sits in each hero photo, so it shows on the right of the hero on
// desktop and in the photo band on phones instead of empty sky. Literal classes so Tailwind generates them.
const HERO_FOCUS: Record<string, string> = {
  "/assets/images/services/across-the-french-riviera.webp": "object-[50%_70%]",
  "/assets/images/services/riviera-days.webp": "object-[50%_70%]",
  "/assets/images/services/driver.webp": "object-[50%_82%]",
  "/assets/images/services/yacht-transfers.webp": "object-[35%_70%]",
  "/assets/images/services/events.webp": "object-[35%_60%]",
  "/assets/images/services/airport-arrivals.webp": "object-[90%_50%]",
  "/assets/images/services/long-distance.webp": "object-[0%_60%]",
  "/assets/images/services/monaco-airport-transfer.webp": "object-[35%_70%]",
  "/assets/images/services/cannes-airport-transfer.webp": "object-[0%_70%]",
  "/assets/images/services/saint-tropez-transfer.webp": "object-[10%_70%]",
  "/assets/images/services/antibes-transfer.webp": "object-[50%_70%]",
  "/assets/images/services/saint-jean-cap-ferrat-transfer.webp": "object-[35%_70%]",
  "/assets/images/services/eze-transfer.webp": "object-[35%_70%]",
  "/assets/images/services/villefranche-transfer.webp": "object-[85%_70%]",
  "/assets/images/services/menton-transfer.webp": "object-[35%_65%]",
  "/assets/images/services/nice-transfer.jpeg": "object-[50%_42%]",
  "/assets/images/services/cannes-transfer.webp": "object-[60%_50%]",
  "/assets/images/services/monaco.webp": "object-[80%_60%]",
  "/assets/images/services/saint-tropez.webp": "object-[0%_60%]",
  "/assets/images/services/megeve.webp": "object-[10%_55%]",
  "/assets/images/services/courchevel.webp": "object-[60%_60%]",
  "/assets/images/services/chamonix.webp": "object-[10%_65%]",
  "/assets/images/services/yacht-monaco.webp": "object-[10%_70%]",
  "/assets/images/services/yacht-cannes.webp": "object-[0%_70%]",
  "/assets/images/services/yacht-saint-tropez.webp": "object-[0%_70%]",
  "/assets/images/services/yacht-antibes.webp": "object-[0%_70%]",
  "/assets/images/services/yacht-nice-airport.webp": "object-[100%_70%]",
  "/assets/images/services/yacht-crew.webp": "object-[10%_70%]",
  "/assets/images/services/event-monaco-grand-prix.webp": "object-[0%_75%]",
  "/assets/images/services/event-cannes-film-festival.webp": "object-[0%_65%]",
  "/assets/images/services/event-monaco-yacht-show.webp": "object-[0%_65%]",
};

// Photo of the navy split card (decorative), by service family. Dark photos, so the white title on it stays readable;
// the first one not already shown on the page is used.
const SPLIT_PHOTOS: [prefix: string, src: string][] = [
  ["/our-services/transfers", "/assets/images/services/transfer.webp"],
  ["/our-services/hourly-chauffeur", "/assets/images/cars/class-v/class-v-third.webp"],
  ["/our-services/private-tours", "/assets/images/services/private-tour.webp"],
  ["/our-services/yacht-transfers", "/assets/images/cars/class-v/class-v-third.webp"],
  ["/our-services/events", "/assets/images/services/private-tour.webp"],
];
const SPLIT_FALLBACKS = ["/assets/images/cars/class-v/class-v-third.webp", "/assets/images/services/transfer.webp", "/assets/images/services/private-tour.webp"];

function splitPhoto(path: string, used: Set<string>) {
  const preferred = SPLIT_PHOTOS.find(([prefix]) => path.startsWith(prefix))?.[1];
  return [preferred, ...SPLIT_FALLBACKS].find((src): src is string => !!src && !used.has(src)) ?? SPLIT_FALLBACKS[0]!;
}

// Line icons for the gold circles of the split card, in place of the coloured 3D icon images.
const AUDIENCE_ICONS: Record<string, typeof Plane> = {
  "plane.webp": Plane,
  "hand.webp": ConciergeBell,
  "multiple-suit-case.webp": Luggage,
  "suit-case.webp": BriefcaseBusiness,
  "clock.webp": Clock3,
  "star.webp": Star,
  "museum.webp": Landmark,
  "van.webp": CarFront,
  "mountain.webp": MountainSnow,
};

/** "**words**" in a story paragraph are shown in bold (user, 13 Nov 2026: a few important words, not only keywords). */
function withBold(text: string) {
  return text
    .split(/\*\*(.+?)\*\*/g)
    .map((part, index) => (index % 2 === 1 ? <strong key={index} className="font-semibold text-[#101828]">{part}</strong> : part));
}

function audienceIcon(src: string) {
  const Icon = AUDIENCE_ICONS[src.split("/").pop() ?? ""] ?? BadgeCheck;
  return <Icon size={20} strokeWidth={1.8} />;
}

/* ------------------------------------------------------------------ texts */

/** The H1's gold words: what follows its last "on the / in / for / with / to", else its first word. Text unchanged. */
function heroAccent(title: string) {
  const tail = title.match(/^.+(?:,\s+| on the | in | for | with an? | with | to the | to )(.+)$/i)?.[1];
  if (tail && tail.split(/\s+/).length <= 3) return tail;
  return title.split(/\s+/)[0];
}

/* ------------------------------------------------------------------ blocks */

function Hero({ config, actionLabel }: { config: ServicePageConfig; actionLabel: string }) {
  const focus = HERO_FOCUS[config.heroImageSrc] ?? "object-[30%_65%]";
  return (
    <section data-hero-tone="dark" data-nav-tone="dark" className="relative isolate overflow-hidden bg-[#0d1424] text-white">
      {/* Phones: a photo band under the text. Desktop: the photo fills the right of the hero. Either way the photo itself
          fades into the navy (a mask, so no seam), and a light shade keeps the header and the text readable. */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-[300px] [mask-image:linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.6)_30%,#000_60%)] sm:h-[340px] lg:inset-y-0 lg:left-auto lg:right-0 lg:h-auto lg:w-[58%] lg:[mask-image:linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.3)_22%,rgba(0,0,0,0.8)_44%,#000_62%)] xl:w-[64%]">
        <Image src={config.heroImageSrc} alt={config.heroImageAlt} fill priority sizes="(min-width: 1280px) 64vw, (min-width: 1024px) 58vw, 100vw" className={`object-cover ${focus}`} />
        <div className="absolute inset-x-0 top-0 hidden h-40 bg-gradient-to-b from-[#0d1424]/70 to-transparent lg:block" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0d1424]/50 to-transparent" />
      </div>

      <div className="mx-auto flex max-w-[1240px] flex-col justify-center px-4 pb-[268px] pt-[calc(var(--header-h)+3.5rem)] sm:pb-[300px] md:px-6 lg:min-h-[600px] lg:pb-20 lg:pt-[calc(var(--header-h)+4.5rem)]">
        <h1 className="max-w-[640px] text-[38px] font-bold leading-[1.06] tracking-[-0.025em] sm:text-[48px] lg:text-[56px]" style={{ textWrap: "balance" }}>
          <Accent text={config.heroTitle} accent={heroAccent(config.heroTitle)} tone="dark" />
        </h1>
        <p className="mt-5 max-w-[540px] text-[17px] leading-relaxed text-white/80 md:text-[18px]">{config.heroDescription}</p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <ArrowButton text={actionLabel} href={config.heroAction?.href ?? "/contact-me"} size="lg" />
        </div>
      </div>
    </section>
  );
}

/** "Our Commitment" / "Your Arrival": one two-tone card, the dark panel in navy and the light one in grey. */
function Panels({ panels }: { panels: ServicePageConfig["panels"] }) {
  return (
    <div className="mt-10 grid overflow-hidden rounded-[12px] md:grid-cols-2">
      {panels.map(panel => {
        const dark = panel.theme === "dark";
        return (
          <article key={panel.title} data-nav-tone={dark ? "dark" : "light"} className={`p-8 md:p-10 ${dark ? "bg-[#0d1424] text-white" : "bg-[#f5f6f8] text-[#101828]"}`}>
            <h3 className="text-[22px] font-bold leading-tight tracking-[-0.02em] md:text-[26px]">{panel.title}</h3>
            <p className={`mt-4 max-w-[46ch] text-[15px] leading-relaxed md:text-[16px] ${dark ? "text-white/70" : "text-[#667085]"}`}>{panel.text}</p>
          </article>
        );
      })}
    </div>
  );
}

/** Suggested itineraries: white cards whose stops are Anti's numbered steps (gold circles joined by a thin line). */
function Itineraries({ itineraries }: { itineraries: NonNullable<ServicePageConfig["itineraries"]> }) {
  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-2">
      {itineraries.map(itinerary => (
        <article key={itinerary.title} className={`flex flex-col rounded-[10px] bg-white p-7 md:p-9 ${SHADOW}`}>
          <div>
            <SpecChip>{itinerary.duration}</SpecChip>
          </div>
          <h3 className="mt-5 text-[22px] font-bold leading-tight tracking-[-0.02em] text-[#101828] md:text-[24px]">{itinerary.title}</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-[#667085]">{itinerary.description}</p>
          <ol className="mt-7">
            {itinerary.stops.map((stop, index) => (
              <li key={stop} className="relative flex gap-4 pb-6 last:pb-0">
                {index < itinerary.stops.length - 1 && <span aria-hidden="true" className="absolute bottom-0 left-[17px] top-9 w-px bg-[#e2b04a]/45" />}
                <span aria-hidden="true" className="relative grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#e2b04a] text-[14px] font-bold text-[#0d1424]">
                  {index + 1}
                </span>
                <span className="pt-1.5 text-[15px] leading-relaxed text-[#344054]">{stop}</span>
              </li>
            ))}
          </ol>
        </article>
      ))}
    </div>
  );
}

/** Practical details as Anti's services row: one white card, the items side by side, split by hairlines. */
function Practical({ details }: { details: NonNullable<ServicePageConfig["practicalDetails"]> }) {
  return (
    <div className={`mt-10 grid gap-px overflow-hidden rounded-[10px] bg-[#eaecf0] md:grid-cols-2 xl:grid-cols-4 ${SHADOW}`}>
      {details.map(detail => (
        <article key={detail.title} className="bg-white p-6 md:p-7">
          <h3 className="text-[17px] font-semibold leading-snug tracking-[-0.01em] text-[#101828]">{detail.title}</h3>
          <p className="mt-2.5 text-[15px] leading-relaxed text-[#667085]">{detail.text}</p>
        </article>
      ))}
    </div>
  );
}

function cardLayout(count: number) {
  if (count <= 1) return { grid: "max-w-[420px]", aspect: "aspect-[16/10]", sizes: "(min-width: 768px) 420px, 92vw", small: false };
  if (count === 2) return { grid: "md:grid-cols-2", aspect: "aspect-[16/9]", sizes: "(min-width: 1280px) 600px, (min-width: 768px) 46vw, 92vw", small: false };
  if (count === 5 || count === 10)
    return { grid: "gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5", aspect: "aspect-[4/3]", sizes: "(min-width: 1280px) 230px, (min-width: 1024px) 31vw, (min-width: 768px) 46vw, 92vw", small: true };
  if (count === 4 || count === 7 || count === 8)
    return { grid: "md:grid-cols-2 lg:grid-cols-4", aspect: "aspect-[4/3]", sizes: "(min-width: 1280px) 290px, (min-width: 1024px) 23vw, (min-width: 768px) 46vw, 92vw", small: true };
  return { grid: "md:grid-cols-2 lg:grid-cols-3", aspect: "aspect-[16/11]", sizes: "(min-width: 1280px) 390px, (min-width: 1024px) 31vw, (min-width: 768px) 46vw, 92vw", small: false };
}

/** Other pages as Anti's vehicle cards: the page's photo inset, its name (the link) and description, a gold arrow. */
function LinkCards({ links }: { links: ServiceCardLink[] }) {
  const layout = cardLayout(links.length);
  const title = `font-semibold leading-snug tracking-[-0.01em] text-[#101828] ${layout.small ? "text-[16px]" : "text-[18px]"}`;
  // The name's link covers the whole card, so the card opens on any click.
  const cover = "transition-colors after:absolute after:inset-0 after:rounded-[10px] after:content-[''] group-hover:text-[#a97c25] focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-[#e2b04a]";
  const body = (link: ServiceCardLink) => (
    <>
      <h3 className={title}>
        <Link href={link.href} className={cover}>
          {link.label}
        </Link>
      </h3>
      <p className="mt-2 text-[14px] leading-relaxed text-[#667085]">{link.description}</p>
      <div className="mt-auto flex justify-end pt-5">
        <GoldArrow />
      </div>
    </>
  );

  return (
    <ul className={`mt-10 grid gap-6 ${layout.grid}`}>
      {links.map(link => {
        const photo = photoFor(link.href);
        return (
          <li key={link.href}>
            {photo ? (
              <AntiCard href={link.href} image={photo} imageAlt="" imageLinkLabel={link.label} imageAspect={layout.aspect} imageSizes={layout.sizes} className="relative">
                {body(link)}
              </AntiCard>
            ) : (
              <article className={`group relative flex h-full flex-col rounded-[10px] bg-white p-5 transition-shadow duration-200 hover:shadow-[0_2px_4px_rgba(16,24,40,0.06),0_18px_44px_rgba(16,24,40,0.12)] ${SHADOW}`}>
                {body(link)}
              </article>
            )}
          </li>
        );
      })}
    </ul>
  );
}

/** FAQ as on the home page: the title on the left (sticky on wide screens), Hyperiux's animated FAQ on the right; the
 *  questions stay h3 and the answers stay in the HTML. */
function Faq({ items }: { items: NonNullable<ServicePageConfig["faq"]> }) {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <h2 id="service-faq-title" className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] md:text-[40px]" style={{ textWrap: "balance" }}>
          Frequently Asked <span className="text-[#d4b471]">Questions</span>
        </h2>
      </div>
      <FaqList items={items.map(item => ({ question: item.question, answer: <p>{item.answer}</p> }))} />
    </div>
  );
}

/* ------------------------------------------------------------------ page */

type Block = { key: string; glued?: boolean; render: (tone: AntiTone, glued: boolean) => ReactNode };

export default function ServicePageTemplate({ config }: { config: ServicePageConfig }) {
  const primaryActionLabel = config.heroAction
    ? config.heroAction.label
    : config.path.startsWith("/our-services/transfers")
    ? "Book my transfer"
    : config.path.startsWith("/our-services/hourly-chauffeur")
      ? "Book by the hour"
      : config.path.startsWith("/our-services/yacht-transfers")
        ? "Request a transfer"
        : config.path.startsWith("/our-services/events")
          ? "Plan my event"
          : "Plan my tour";

  // The closing banner's photo, by page family (dusk art direction of the banners, 21 Oct 2026).
  const ctaPhoto = config.ctaPhoto
    ? config.ctaPhoto
    : config.path.startsWith("/our-services/transfers")
    ? "/assets/images/banners/svc-transfers.jpg"
    : config.path.startsWith("/our-services/hourly-chauffeur")
      ? "/assets/images/banners/svc-hourly.jpg"
      : config.path.startsWith("/our-services/yacht-transfers")
        ? "/assets/images/banners/svc-yacht.jpg"
        : config.path.startsWith("/our-services/events")
          ? "/assets/images/banners/svc-events.jpg"
          : "/assets/images/banners/svc-tours.jpg";

  const availableLocalLinks = config.localLinks?.filter(link => link.href !== config.path);
  const showLocalLinks = !!(availableLocalLinks && availableLocalLinks.length > 0 && config.localLinksTitle && config.localLinksDescription);
  const showGuides = !!(config.relatedGuides?.length && config.relatedGuidesTitle);

  const used = new Set<string>([config.heroImageSrc]);
  for (const link of [...(showLocalLinks ? availableLocalLinks! : []), ...(showGuides ? config.relatedGuides! : [])]) {
    const photo = photoFor(link.href);
    if (photo) used.add(photo);
  }

  const blocks: Block[] = [
    {
      key: "intro",
      render: tone => (
        <AntiSection tone={tone} labelledBy="service-intro-title">
          <AntiHeading id="service-intro-title" title={config.introTitle} intro={config.introDescription} />
          <Panels panels={config.panels} />
        </AntiSection>
      ),
    },
  ];

  // An optional short text after the introduction (12 Nov 2026, the Monaco-style blog post): a few readable paragraphs
  // that explain how the service works. Absent on every service page, which therefore renders as before.
  if (config.story) {
    const story = config.story;
    blocks.push({
      key: "story",
      render: tone => (
        <AntiSection tone={tone} labelledBy="service-story-title">
          <AntiHeading id="service-story-title" title={story.title} />
          {/* Two columns across the width on desktop (user, 13 Nov 2026), one column on phones. */}
          <div className="mt-8 grid gap-x-12 gap-y-5 text-[17px] leading-[1.75] text-[#475467] lg:grid-cols-2">
            {story.paragraphs.map(paragraph => (
              <p key={paragraph}>{withBold(paragraph)}</p>
            ))}
          </div>
        </AntiSection>
      ),
    });
  }

  // A destination of the home's price guide (3 Nov 2026): its prices as a table, right after the introduction.
  const priceCity = cityForPage(config.path);
  if (priceCity) {
    blocks.push({
      key: "prices",
      render: tone => (
        <AntiSection tone={tone} labelledBy="service-prices-title">
          <AntiHeading
            id="service-prices-title"
            title={`Nice Airport to ${priceCity.displayName}: prices`}
            intro="Starting prices by vehicle for a private transfer, by the hour or for a full day."
          />
          <div className="mt-8">
            <RoutePrices cityId={priceCity.id} path={config.path} />
          </div>
        </AntiSection>
      ),
    });
  }

  if (config.itinerariesTitle && config.itinerariesDescription && config.itineraries?.length) {
    const itineraries = config.itineraries;
    blocks.push({
      key: "itineraries",
      render: tone => (
        <AntiSection tone={tone} labelledBy="service-itineraries-title">
          <AntiHeading id="service-itineraries-title" title={config.itinerariesTitle!} intro={config.itinerariesDescription} />
          <Itineraries itineraries={itineraries} />
        </AntiSection>
      ),
    });
  }

  if (config.practicalTitle && config.practicalDescription && config.practicalDetails?.length) {
    const details = config.practicalDetails;
    blocks.push({
      key: "practical",
      render: tone => (
        <AntiSection tone={tone} labelledBy="service-practical-title">
          <AntiHeading id="service-practical-title" title={config.practicalTitle!} intro={config.practicalDescription} />
          <Practical details={details} />
        </AntiSection>
      ),
    });
  }

  // The navy split card sits right under the previous section, on the same background (as on the home page).
  blocks.push({
    key: "audience",
    glued: true,
    render: (tone, glued) => (
      <AntiSection tone={tone} labelledBy="service-audience-title" innerClassName={glued ? "!pt-0" : ""}>
        <AntiSplit
          image={splitPhoto(config.path, used)}
          imageAlt=""
          title={`${config.audienceTitle} ${config.audienceAccent}`}
          titleId="service-audience-title"
          intro={config.audienceDescription}
          items={config.audienceCards.map(card => ({ icon: audienceIcon(card.icon), title: card.title, text: card.text }))}
        />
      </AntiSection>
    ),
  });

  if (showLocalLinks) {
    blocks.push({
      key: "links",
      render: tone => (
        <AntiSection tone={tone} labelledBy="service-links-title">
          <AntiHeading id="service-links-title" title={config.localLinksTitle!} intro={config.localLinksDescription} />
          <LinkCards links={availableLocalLinks!} />
        </AntiSection>
      ),
    });
  }

  if (showGuides) {
    blocks.push({
      key: "guides",
      render: tone => (
        <AntiSection tone={tone} labelledBy="service-guides-title">
          <AntiHeading
            id="service-guides-title"
            title={config.relatedGuidesTitle!}
            intro={
              config.relatedGuidesDescription ??
              "Use these practical guides to compare routes, timings, and ways to experience Monaco before confirming your tour."
            }
          />
          <LinkCards links={config.relatedGuides!} />
        </AntiSection>
      ),
    });
  }

  if (config.faq && config.faq.length > 0) {
    const faq = config.faq;
    blocks.push({
      key: "faq",
      render: tone => (
        <AntiSection tone={tone} labelledBy="service-faq-title">
          <Faq items={faq} />
        </AntiSection>
      ),
    });
  }

  // White and grey alternate under the hero; a glued block keeps the tone of the block above it. The CTA card always sits
  // on white, without top padding when the last section is white too.
  const sections: ReactNode[] = [];
  let tone: AntiTone = "grey";
  for (const [index, block] of blocks.entries()) {
    const glued = !!block.glued && index > 0;
    if (!glued) tone = tone === "white" ? "grey" : "white";
    sections.push(<Fragment key={block.key}>{block.render(tone, glued)}</Fragment>);
  }

  return (
    <>
      <Hero config={config} actionLabel={primaryActionLabel} />
      {sections}
      <FooterComponent
        title={config.cta.title}
        description={config.cta.description}
        buttonText={primaryActionLabel}
        buttonHref={config.cta.buttonHref}
        flushTop={tone === "white"}
        image={ctaPhoto}
      />
      <Footer withCta={false} />
    </>
  );
}
