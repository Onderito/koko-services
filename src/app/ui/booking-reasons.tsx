// "Why travellers book Kokolimo": four checkable reasons shown on the route pages that ask for them (bookingReasons in
// data/service-pages.ts): the ratings, the company that runs the service, the chauffeurs' languages and the booking
// terms. The ratings are the home page's live ones (lib/reviews/ratings.ts), with the same published fallback, so the
// two pages never disagree. The French pages show the same four reasons in French. Server component; every text is in
// the HTML.

import type { ReactNode } from "react";

import { getRatings, type Rating } from "@/lib/reviews/ratings";
import { AntiHeading } from "./anti";
import { chauffeurLanguages, companyAddress, companyLegalName, companyRcs, companyRegisteredOn } from "../data/site-config";

const SHADOW = "shadow-[0_1px_2px_rgba(16,24,40,0.05),0_10px_30px_rgba(16,24,40,0.07)]";
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const COUNT_WORDS = ["One", "Two", "Three", "Four", "Five", "Six"];
const list = (items: string[]) => (items.length > 1 ? `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}` : items[0]);

const MOIS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
const NOMBRES = ["Une", "Deux", "Trois", "Quatre", "Cinq", "Six"];
const LANGUES: Record<string, string> = { English: "anglais", French: "français", Turkish: "turc", Russian: "russe" };
const liste = (items: string[]) => (items.length > 1 ? `${items.slice(0, -1).join(", ")} et ${items[items.length - 1]}` : items[0]);
const note = (rating: number) => rating.toFixed(1).replace(".", ",");

function RatingLink({ rating, locale }: { rating: Rating; locale?: "fr" }) {
  const name = rating.source === "google" ? "Google" : "Tripadvisor";
  const className = "font-medium text-[#101828] underline decoration-[#d4b471] underline-offset-4 hover:text-[#9a7a3e]";
  if (locale === "fr") {
    return (
      <a href={rating.url} target="_blank" rel="noopener noreferrer" className={className}>
        {`${note(rating.rating)}/5 sur ${name}${rating.count ? ` (${rating.count} avis)` : ""}`}
      </a>
    );
  }
  return (
    <a href={rating.url} target="_blank" rel="noopener noreferrer" className={className}>
      {rating.rating.toFixed(1)} out of 5 on {name}
      {rating.count ? ` from ${rating.count} reviews` : ""}
    </a>
  );
}

/** The same four reasons in French, for the French pages. */
function frenchReasons(google: Rating, tripadvisor: Rating, year: number, month: number) {
  return [
    {
      title: `Noté ${note(google.rating)} sur Google`,
      text: (
        <>
          <RatingLink rating={google} locale="fr" /> et <RatingLink rating={tripadvisor} locale="fr" />.
        </>
      ),
    },
    {
      title: `Une société niçoise depuis ${year}`,
      text: `${companyLegalName}, ${companyAddress}, inscrite au registre du commerce de Nice depuis ${MOIS[month - 1]} ${year} (${companyRcs}).`,
    },
    {
      title: `${NOMBRES[chauffeurLanguages.length - 1] ?? chauffeurLanguages.length} langues`,
      text: `Des chauffeurs qui parlent ${liste(chauffeurLanguages.map(language => LANGUES[language] ?? language))}.`,
    },
    {
      title: "Des conditions fixées à l'avance",
      text: "Un prix fixe confirmé avant la réservation, et l'annulation gratuite jusqu'à cinq jours avant la prise en charge.",
    },
  ];
}

export default async function BookingReasons({ locale }: { locale?: "fr" } = {}) {
  const ratings = await getRatings();
  const google = ratings.find(r => r.source === "google")!;
  const tripadvisor = ratings.find(r => r.source === "tripadvisor")!;
  const [year, month] = companyRegisteredOn.split("-").map(Number);
  if (locale === "fr") {
    return <ReasonCards title="Pourquoi les voyageurs réservent Kokolimo" reasons={frenchReasons(google, tripadvisor, year, month)} />;
  }
  const reasons = [
    {
      title: `Rated ${google.rating.toFixed(1)} on Google`,
      text: (
        <>
          <RatingLink rating={google} />, and <RatingLink rating={tripadvisor} />.
        </>
      ),
    },
    {
      title: `A Nice company since ${year}`,
      text: `${companyLegalName}, ${companyAddress}, on the Nice trade register since ${MONTHS[month - 1]} ${year} (${companyRcs}).`,
    },
    {
      title: `${COUNT_WORDS[chauffeurLanguages.length - 1] ?? chauffeurLanguages.length} languages`,
      text: `Chauffeurs who speak ${list(chauffeurLanguages)}.`,
    },
    {
      title: "Terms fixed in advance",
      text: "A fixed price confirmed before you book, and free cancellation up to five days before the pickup.",
    },
  ];
  return <ReasonCards title="Why travellers book Kokolimo" reasons={reasons} />;
}

function ReasonCards({ title, reasons }: { title: string; reasons: { title: string; text: ReactNode }[] }) {
  return (
    <>
      <AntiHeading id="service-reasons-title" title={title} />
      <div className={`mt-10 grid gap-px overflow-hidden rounded-[10px] bg-[#eaecf0] md:grid-cols-2 xl:grid-cols-4 ${SHADOW}`}>
        {reasons.map(reason => (
          <article key={reason.title} className="bg-white p-6 md:p-7">
            <h3 className="text-[17px] font-semibold leading-snug tracking-[-0.01em] text-[#101828]">{reason.title}</h3>
            <p className="mt-2.5 text-[15px] leading-relaxed text-[#667085]">{reason.text}</p>
          </article>
        ))}
      </div>
    </>
  );
}
