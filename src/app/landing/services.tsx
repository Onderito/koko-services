// "What We Offer", laid out as Anti's "Find Your Perfect Ride" (IMG_8800): white section, heading on the left,
// photo cards with the picture inset, a gold arrow and a gold pill. The heading names the service and the towns; the
// cards' texts, links and alts are unchanged. The French home (/fr) passes locale="fr": the same cards in French,
// linking to the French service pages.

import Link from "next/link";
import { homeServiceCards } from "../data/service-pages";
import { frLink } from "../data/i18n/addresses";
import { AntiCard, AntiHeading, AntiSection, GoldArrow, PhotoTag } from "../ui/anti";
import ArrowButton from "../ui/arrow-button";

const TEXT = {
  en: {
    title: "Private driver services in Nice, Cannes and Monaco",
    cards: homeServiceCards,
    imageAlt: (title: string) => `${title}: luxury chauffeur service on the French Riviera`,
    imageLink: (title: string) => `open ${title} service details`,
    exploreLabel: (title: string) => `explore the ${title} service`,
    explore: "Explore more",
    exploreHidden: (title: string) => ` about ${title}`,
    book: "Book now",
    bookHref: "/contact-me",
    bookLabel: (title: string) => `request a quote for ${title}`,
  },
  fr: {
    title: "Nos services de chauffeur privé à Nice, Cannes et Monaco",
    cards: [
      {
        title: "Transferts aéroport",
        kicker: "Aéroport et longue distance",
        description:
          "Nous vous prenons en charge à l'aéroport Nice Côte d'Azur ou à votre hôtel, pour un transfert, un événement ou un long trajet sur la Côte d'Azur, à l'heure convenue et à prix fixe.",
        image: homeServiceCards[0].image,
        link: frLink(homeServiceCards[0].link),
      },
      {
        title: "Chauffeur privé à l'heure",
        kicker: "Selon la destination",
        description:
          "Votre chauffeur reste à votre disposition pour vos rendez-vous, vos achats, vos déjeuners, les plages privées ou une journée à plusieurs arrêts. Le service couvre Nice, Cannes, Monaco, Saint-Tropez et, l'hiver, les Alpes.",
        image: homeServiceCards[1].image,
        link: frLink(homeServiceCards[1].link),
      },
      {
        title: "Excursions privées",
        kicker: "Côte d'Azur et Alpes",
        description:
          "Nous proposons des excursions avec chauffeur sur la Côte d'Azur et, l'hiver, au départ des stations des Alpes. Vous choisissez l'itinéraire et pouvez le changer en route.",
        image: homeServiceCards[2].image,
        link: frLink(homeServiceCards[2].link),
      },
    ],
    imageAlt: (title: string) => `${title} : chauffeur privé sur la Côte d'Azur`,
    imageLink: (title: string) => `ouvrir la page ${title}`,
    exploreLabel: (title: string) => `découvrir le service ${title}`,
    explore: "En savoir plus",
    exploreHidden: (title: string) => ` sur ${title}`,
    book: "Réserver",
    bookHref: frLink("/contact-me"),
    bookLabel: (title: string) => `demander un devis pour ${title}`,
  },
};

export default function Services({ locale }: { locale?: "fr" }) {
  const t = TEXT[locale ?? "en"];
  return (
    <AntiSection tone="white" labelledBy="services-title">
      <AntiHeading id="services-title" title={t.title} />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {t.cards.map(card => (
          <AntiCard
            key={card.title}
            href={card.link}
            image={card.image}
            imageAlt={t.imageAlt(card.title)}
            imageLinkLabel={t.imageLink(card.title)}
            imageSizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
            badge={<PhotoTag>{card.kicker}</PhotoTag>}
          >
            <h3 className="text-[19px] font-semibold tracking-[-0.01em] text-[#101828]">
              {/* The whole card opens the service page; "Book now" stays its own button above this link. */}
              <Link href={card.link} className="transition-colors after:absolute after:inset-0 after:rounded-[10px] after:content-[''] group-hover:text-[#9a7a3e]">
                {card.title}
              </Link>
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-[#667085]">{card.description}</p>
            <div className="relative z-10 mt-auto flex items-center justify-between gap-3 pt-6">
              <Link href={card.link} aria-label={t.exploreLabel(card.title)} className="inline-flex items-center gap-3 text-[15px] font-semibold text-[#101828]">
                <GoldArrow />
                {t.explore}
                <span className="sr-only">{t.exploreHidden(card.title)}</span>
              </Link>
              <ArrowButton text={t.book} href={t.bookHref} size="sm" aria-label={t.bookLabel(card.title)} />
            </div>
          </AntiCard>
        ))}
      </div>
    </AntiSection>
  );
}
