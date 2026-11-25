// Client reviews, laid out as Anti's "What Our Customers Say" (IMG_8800): light-grey section, the Tripadvisor rating
// summary in a white card, then each review once in a white card that opens with yellow stars and "4.8/5" (21 Oct 2026,
// at the user's request: no initials avatar, no "Tripadvisor review" label, no badge at the bottom).
// 21 Oct 2026, also at the user's request: each quote links to where it was published, so a visitor can check it is
// real; the "Based on the public Tripadvisor listing" line is gone (it widened the summary card), and the card stacks
// cleanly on narrow screens. The links open the Tripadvisor reviews page: direct links to each review need their
// addresses (Tripadvisor refuses automated reads), to add when the owner or the Tripadvisor API provides them.
// The looping marquee is gone. Texts unchanged.
// The French home (/fr) passes locale="fr": the reviews were written in English, so each French card shows a translation
// marked as such, with the link to the original.

import { ArrowUpRight } from "lucide-react";
import { AntiHeading, AntiOutlinePill, AntiSection } from "../ui/anti";
import { Stars } from "../ui/kit";
import ArrowButton from "../ui/arrow-button";
import RollingNumber from "../ui/rolling-number";

const reviews = [
  {
    quote:
      "Amazing organic wineries so close to Nice. After a short ride we toured two unique locations and ended with tastings. Picture perfect.",
    author: "Lisa W",
    context: "Jul 2025 · Wineries so close to Nice!",
  },
  {
    quote:
      "kokolimo took good care of us, was welcoming and nice. Beautiful views and exciting info about Nice, good wine and specialties from Cannes.",
    author: "Tripadvisor guest",
    context: "Jul 2024 · Wine tour",
  },
  {
    quote:
      "Perfect, well distinguish between the different procedures of the vineyards in Nice. Super guide Marie. Knowledgeful and entertaining.",
    author: "Henrik",
    context: "Fun, educational",
  },
  {
    quote:
      "My family group of four scheduled with Marie on the day we arrived in Nice. It was the perfect way to acclimate while doing something fun and interesting.",
    author: "Cyndi K",
    context: "Jun 2024 · Perfect welcome to Nice!",
  },
];

// The same reviews translated for the French home, in the same order.
export const REVIEWS_FR = [
  {
    quote: "Des domaines viticoles bio superbes, si près de Nice. Après un court trajet, nous avons visité deux lieux uniques et terminé par des dégustations. Parfait.",
    author: "Lisa W",
    context: "Juil. 2025 · avis traduit de l'anglais",
  },
  {
    quote: "kokolimo a pris soin de nous, avec un accueil chaleureux. De belles vues, des explications passionnantes sur Nice, du bon vin et des spécialités de Cannes.",
    author: "Client Tripadvisor",
    context: "Juil. 2024 · avis traduit de l'anglais",
  },
  {
    quote: "Parfait, avec des explications claires sur le travail des différents vignobles de Nice. Marie est une super guide, savante et drôle.",
    author: "Henrik",
    context: "Avis traduit de l'anglais",
  },
  {
    quote: "Notre famille de quatre a réservé avec Marie le jour de notre arrivée à Nice. C'était la meilleure façon de prendre nos marques tout en faisant quelque chose d'amusant et d'intéressant.",
    author: "Cyndi K",
    context: "Juin 2024 · avis traduit de l'anglais",
  },
];

export const tripadvisorListingUrl =
  "https://www.tripadvisor.com/Attraction_Review-g187234-d7971865-Reviews-MY_Riviera_Tours_Transfers-Nice_French_Riviera_Cote_d_Azur_Provence_Alpes_Cote_d_.html";
// Where the quotes were published: the listing's reviews (#REVIEWS opens them).
const reviewSourceUrl = `${tripadvisorListingUrl}#REVIEWS`;
const googleReviewUrl = "https://g.page/r/CXSXgZXVNYkwEAE/review";

const TEXT = {
  en: {
    reviews,
    title: "Trusted on Tripadvisor for Riviera tours and transfers",
    intro: "Read recent feedback from travelers who booked tours and transfers in Nice and across the French Riviera.",
    rating: "4.8",
    count: "165 public reviews",
    summary: "Independent traveler reviews covering private tours, airport transfers and chauffeur journeys across the Riviera.",
    view: "View on Tripadvisor",
    leave: "Leave a Google review",
    leaveLabel: "Leave Kokolimo a review on Google",
    score: "4.8/5",
    read: (author: string) => `Read ${author}'s review on Tripadvisor`,
    open: "“",
    close: "”",
  },
  fr: {
    reviews: REVIEWS_FR,
    title: "Recommandé sur Tripadvisor pour nos excursions et nos transferts sur la Côte d'Azur",
    intro: "Les avis récents de voyageurs qui ont réservé une excursion ou un transfert à Nice et sur la Côte d'Azur.",
    rating: "4,8",
    count: "165 avis publics",
    summary: "Des avis de voyageurs indépendants sur nos excursions privées, nos transferts aéroport et nos trajets avec chauffeur sur la Côte d'Azur.",
    view: "Voir sur Tripadvisor",
    leave: "Laisser un avis Google",
    leaveLabel: "Laisser un avis sur Kokolimo dans Google",
    score: "4,8/5",
    read: (author: string) => `Lire l'avis de ${author} sur Tripadvisor`,
    open: "« ",
    close: " »",
  },
};

export default function Reviews({ locale }: { locale?: "fr" }) {
  const t = TEXT[locale ?? "en"];
  return (
    <AntiSection tone="grey" labelledBy="reviews-title">
      <AntiHeading id="reviews-title" title={t.title} intro={t.intro} />

      <div className="mt-8 flex flex-col gap-6 rounded-[10px] bg-white p-6 shadow-[0_1px_2px_rgba(16,24,40,0.05),0_10px_30px_rgba(16,24,40,0.07)] lg:flex-row lg:items-center lg:justify-between md:p-7">
        <div className="min-w-0">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#9a7a3e]">Tripadvisor</p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <RollingNumber value={t.rating} className="text-[40px] font-bold leading-none tracking-[-0.03em] text-[#101828]" />
            <span className="flex items-center gap-1.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="h-4 w-4 rounded-full bg-[#34e0a1] ring-1 ring-[#1fae7a]/40" />
              ))}
            </span>
            <span className="text-[17px] text-[#101828]">{t.count}</span>
          </div>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-[#667085] md:text-[15px]">{t.summary}</p>
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-3">
          <ArrowButton text={t.view} href={tripadvisorListingUrl} tone="dark" target="_blank" rel="noopener noreferrer" />
          <AntiOutlinePill href={googleReviewUrl} dark={false} external ariaLabel={t.leaveLabel}>
            {t.leave}
          </AntiOutlinePill>
        </div>
      </div>

      <ul className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {t.reviews.map(r => (
          <li key={`${r.author}-${r.context}`}>
            <article className="flex h-full flex-col rounded-[10px] bg-white p-6 shadow-[0_1px_2px_rgba(16,24,40,0.05),0_10px_30px_rgba(16,24,40,0.07)]">
              <p className="flex items-center gap-2">
                <Stars className="[&_svg]:h-4 [&_svg]:w-4" />
                <span className="text-[14px] font-semibold text-[#101828]">{t.score}</span>
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-[#344054]">
                <span aria-hidden="true">{t.open}</span>
                {r.quote}
                <span aria-hidden="true">{t.close}</span>
              </p>
              <div className="mt-auto flex items-end justify-between gap-3 pt-6">
                <div>
                  <p className="text-[15px] font-semibold text-[#101828]">{r.author}</p>
                  <p className="mt-0.5 text-[13px] text-[#667085]">{r.context}</p>
                </div>
                <a
                  href={reviewSourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.read(r.author)}
                  className="group inline-flex shrink-0 items-center gap-1 text-[13px] font-semibold text-[#9a7a3e] transition-colors hover:text-[#101828]"
                >
                  Tripadvisor
                  <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </AntiSection>
  );
}
