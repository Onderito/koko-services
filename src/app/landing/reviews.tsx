// Client reviews, laid out as Anti's "What Our Customers Say" (IMG_8800): light-grey section, the Tripadvisor rating
// summary in a white card, then each review once in a white card that opens with yellow stars and "4.8/5" (21 Oct 2026,
// at the user's request: no initials avatar, no "Tripadvisor review" label, no badge at the bottom).
// 21 Oct 2026, also at the user's request: each quote links to where it was published, so a visitor can check it is
// real; the "Based on the public Tripadvisor listing" line is gone (it widened the summary card), and the card stacks
// cleanly on narrow screens. The links open the Tripadvisor reviews page: direct links to each review need their
// addresses (Tripadvisor refuses automated reads), to add when the owner or the Tripadvisor API provides them.
// The looping marquee is gone. Texts unchanged.

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

export const tripadvisorListingUrl =
  "https://www.tripadvisor.com/Attraction_Review-g187234-d7971865-Reviews-MY_Riviera_Tours_Transfers-Nice_French_Riviera_Cote_d_Azur_Provence_Alpes_Cote_d_.html";
// Where the quotes were published: the listing's reviews (#REVIEWS opens them).
const reviewSourceUrl = `${tripadvisorListingUrl}#REVIEWS`;
const googleReviewUrl = "https://g.page/r/CXSXgZXVNYkwEAE/review";

export default function Reviews() {
  return (
    <AntiSection tone="grey" labelledBy="reviews-title">
      <AntiHeading
        id="reviews-title"
        title="Trusted on Tripadvisor for Riviera tours and transfers"
        intro="Read recent feedback from travelers who booked tours and transfers in Nice and across the French Riviera."
      />

      <div className="mt-8 flex flex-col gap-6 rounded-[10px] bg-white p-6 shadow-[0_1px_2px_rgba(16,24,40,0.05),0_10px_30px_rgba(16,24,40,0.07)] lg:flex-row lg:items-center lg:justify-between md:p-7">
        <div className="min-w-0">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#9a7a3e]">Tripadvisor</p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <RollingNumber value="4.8" className="text-[40px] font-bold leading-none tracking-[-0.03em] text-[#101828]" />
            <span className="flex items-center gap-1.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="h-4 w-4 rounded-full bg-[#34e0a1] ring-1 ring-[#1fae7a]/40" />
              ))}
            </span>
            <span className="text-[17px] text-[#101828]">165 public reviews</span>
          </div>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-[#667085] md:text-[15px]">
            Independent traveler reviews covering private tours, airport transfers and chauffeur journeys across the Riviera.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-3">
          <ArrowButton text="View on Tripadvisor" href={tripadvisorListingUrl} tone="dark" target="_blank" rel="noopener noreferrer" />
          <AntiOutlinePill href={googleReviewUrl} dark={false} external ariaLabel="Leave Kokolimo a review on Google">
            Leave a Google review
          </AntiOutlinePill>
        </div>
      </div>

      <ul className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {reviews.map(r => (
          <li key={`${r.author}-${r.context}`}>
            <article className="flex h-full flex-col rounded-[10px] bg-white p-6 shadow-[0_1px_2px_rgba(16,24,40,0.05),0_10px_30px_rgba(16,24,40,0.07)]">
              <p className="flex items-center gap-2">
                <Stars className="[&_svg]:h-4 [&_svg]:w-4" />
                <span className="text-[14px] font-semibold text-[#101828]">4.8/5</span>
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-[#344054]">
                <span aria-hidden="true">&ldquo;</span>
                {r.quote}
                <span aria-hidden="true">&rdquo;</span>
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
                  aria-label={`Read ${r.author}'s review on Tripadvisor`}
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
