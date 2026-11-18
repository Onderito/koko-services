// Home FAQ. An animated list opens each answer (ui/faq-list.tsx); the answers stay in the HTML, and the same text is
// the page's FAQPage data. Each answer opens with the fact and names Kokolimo; the fares are read from data/vehicles.tsx
// so they never drift.

import { contactPhone, contactPhoneDisplay, whatsappUrl } from "../data/site-config";
import { vehicles } from "../data/vehicles";
import { AntiOutlinePill } from "../ui/anti";
import ArrowButton from "../ui/arrow-button";
import FaqList, { type FaqItem } from "../ui/faq-list";

const car = (id: string) => vehicles.find(v => v.id === id)!;
const E = car("mercedes-e"), V = car("mercedes-v"), S = car("mercedes-s"), M = car("mercedes-maybach");
const eur = (n: number) => `€${n}`;

const faqs: { question: string; answer: string }[] = [
  {
    question: "How much is a private driver from Nice Airport?",
    answer: `Kokolimo's fixed prices from Nice Côte d'Azur Airport start at ${eur(E.prices.nice.transfer)} to Nice, ${eur(E.prices.antibes.transfer)} to Antibes, ${eur(E.prices.cannes.transfer)} to Cannes, ${eur(E.prices.monaco.transfer)} to Monaco and ${eur(E.prices["st-tropez"].transfer)} to Saint-Tropez in a Mercedes E-Class. The price is confirmed before you book, with one hour of waiting included.`,
  },
  {
    question: "Do you provide airport transfers from Nice Airport?",
    answer: "Yes. Kokolimo drives you from Nice Côte d'Azur Airport to Nice, Cannes, Antibes, Monaco, Menton, Saint-Tropez and across the French Riviera, 24/7, in a Mercedes at a fixed price.",
  },
  {
    question: "Where will my chauffeur meet me at Nice Airport?",
    answer: "Your Kokolimo chauffeur waits in the arrivals hall of your terminal, Terminal 1 or Terminal 2, with a name sign, helps with your luggage and walks you to the car.",
  },
  {
    question: "How much waiting time is included for arrivals?",
    answer: "One hour of waiting is included with every Kokolimo airport pickup, counted from the pickup time in your reservation.",
  },
  {
    question: "Are your transfer prices fixed?",
    answer: "Yes. Every Kokolimo price is fixed and confirmed before you book, with no meter and no hidden fees. It depends only on the route, the car and any extras you ask for.",
  },
  {
    question: "Do you monitor flight delays?",
    answer: "Yes. Kokolimo tracks your flight in real time, so an early or late landing changes nothing for you. One hour of waiting is included from the pickup time in your reservation; tell us as soon as possible about a major delay.",
  },
  {
    question: "Is Kokolimo available 24/7?",
    answer: "Yes. Kokolimo drives day and night, seven days a week, including early-morning flights and late arrivals at Nice Airport.",
  },
  {
    question: "Which vehicles are available for transfers?",
    answer: `Kokolimo drives Mercedes cars only: the E-Class and the S-Class for up to ${E.passengers} passengers, the V-Class for up to ${V.passengers}, and the Maybach for up to ${M.passengers}. We recommend the right car for your group and luggage.`,
  },
  {
    question: "How does an hourly chauffeur service work?",
    answer: `Your Kokolimo chauffeur and car stay with you for the whole booking, for meetings, shopping or several stops, from ${eur(E.prices.nice.hourly)} per hour in an E-Class, ${eur(V.prices.nice.hourly)} in a V-Class, ${eur(S.prices.nice.hourly)} in an S-Class and ${eur(M.prices.nice.hourly)} in a Maybach.`,
  },
  {
    question: "What is your cancellation policy?",
    answer: "Cancellation is free until five days before the booked date and pickup time. If a booking is cancelled less than five days before departure, the full price is charged.",
  },
];

const items: FaqItem[] = faqs.map(f => ({ question: f.question, answer: <p>{f.answer}</p> }));

const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
};

export default function Faq() {
  return (
    <section aria-labelledby="faq-title" data-nav-tone="light" className="bg-[#f5f6f8] text-[#101828]">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 id="faq-title" className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] md:text-[40px]" style={{ textWrap: "balance" }}>
            Frequently Asked <span className="text-[#d4b471]">Questions</span>
          </h2>
          <p className="mt-3 max-w-[420px] text-[16px] leading-relaxed text-[#667085] md:text-[17px]">
            Everything about airport pickups, waiting time, fixed prices and our vehicles. Something else? Ask us directly.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ArrowButton text="WhatsApp us" href={whatsappUrl} target="_blank" rel="noopener noreferrer" tone="dark" />
            <AntiOutlinePill href={`tel:${contactPhone}`} dark={false} external={false}>
              {contactPhoneDisplay}
            </AntiOutlinePill>
          </div>
        </div>
        <FaqList items={items} />
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
    </section>
  );
}
