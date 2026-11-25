// Home FAQ. An animated list opens each answer (ui/faq-list.tsx); the answers stay in the HTML, and the same text is
// the page's FAQPage data. Each answer opens with the fact and names Kokolimo; the fares are read from data/vehicles.tsx
// so they never drift. The French home (/fr) passes locale="fr": the same questions and facts in French, prices
// written "90 €", French spacing before ":", ";" and "?".

import { contactPhone, contactPhoneDisplay, whatsappUrl } from "../data/site-config";
import { vehicles } from "../data/vehicles";
import { frenchSpacing } from "../data/i18n/fr-helpers";
import { AntiOutlinePill } from "../ui/anti";
import ArrowButton from "../ui/arrow-button";
import FaqList, { type FaqItem } from "../ui/faq-list";

const car = (id: string) => vehicles.find(v => v.id === id)!;
const E = car("mercedes-e"), V = car("mercedes-v"), S = car("mercedes-s"), M = car("mercedes-maybach");
const eur = (n: number) => `€${n}`;
const eurFr = (n: number) => `${n.toLocaleString("fr-FR")} €`;

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

// The same questions in French, with the same facts and prices.
const faqsFr: { question: string; answer: string }[] = frenchSpacing([
  {
    question: "Combien coûte un chauffeur privé depuis l'aéroport de Nice ?",
    answer: `Les prix fixes de Kokolimo depuis l'aéroport Nice Côte d'Azur commencent à ${eurFr(E.prices.nice.transfer)} pour Nice, ${eurFr(E.prices.antibes.transfer)} pour Antibes, ${eurFr(E.prices.cannes.transfer)} pour Cannes, ${eurFr(E.prices.monaco.transfer)} pour Monaco et ${eurFr(E.prices["st-tropez"].transfer)} pour Saint-Tropez, en Mercedes Classe E. Le prix est confirmé avant la réservation, avec une heure d'attente incluse.`,
  },
  {
    question: "Assurez-vous les transferts depuis l'aéroport de Nice ?",
    answer: "Oui. Kokolimo vous conduit de l'aéroport Nice Côte d'Azur à Nice, Cannes, Antibes, Monaco, Menton, Saint-Tropez et partout sur la Côte d'Azur, 24 h/24 et 7 j/7, en Mercedes et à prix fixe.",
  },
  {
    question: "Où mon chauffeur m'attend-il à l'aéroport de Nice ?",
    answer: "Votre chauffeur Kokolimo vous attend dans le hall des arrivées de votre terminal, Terminal 1 ou Terminal 2, avec une pancarte à votre nom, s'occupe de vos bagages et vous accompagne jusqu'à la voiture.",
  },
  {
    question: "Combien de temps d'attente est inclus à l'arrivée ?",
    answer: "Une heure d'attente est incluse dans chaque prise en charge Kokolimo à l'aéroport, à compter de l'heure de prise en charge indiquée dans votre réservation.",
  },
  {
    question: "Vos prix de transfert sont-ils fixes ?",
    answer: "Oui. Chaque prix Kokolimo est fixe et confirmé avant la réservation, sans compteur ni frais cachés. Il dépend seulement du trajet, de la voiture et des options que vous demandez.",
  },
  {
    question: "Suivez-vous les retards de vol ?",
    answer: "Oui. Kokolimo suit votre vol en temps réel : une arrivée en avance ou en retard ne change rien pour vous. Une heure d'attente est incluse à compter de l'heure de prise en charge de votre réservation ; prévenez-nous au plus tôt en cas de gros retard.",
  },
  {
    question: "Kokolimo est-il disponible 24 h/24 ?",
    answer: "Oui. Kokolimo roule jour et nuit, sept jours sur sept, y compris pour les vols tôt le matin et les arrivées tardives à l'aéroport de Nice.",
  },
  {
    question: "Quelles voitures proposez-vous pour les transferts ?",
    answer: `Kokolimo roule uniquement en Mercedes : la Classe E et la Classe S jusqu'à ${E.passengers} passagers, le van Classe V jusqu'à ${V.passengers}, et la Maybach jusqu'à ${M.passengers}. Nous vous conseillons la voiture adaptée à votre groupe et à vos bagages.`,
  },
  {
    question: "Comment fonctionne un chauffeur à l'heure ?",
    answer: `Votre chauffeur Kokolimo et sa voiture restent avec vous pendant toute la réservation, pour des rendez-vous, des achats ou plusieurs arrêts, à partir de ${eurFr(E.prices.nice.hourly)} de l'heure en Classe E, ${eurFr(V.prices.nice.hourly)} en Classe V, ${eurFr(S.prices.nice.hourly)} en Classe S et ${eurFr(M.prices.nice.hourly)} en Maybach.`,
  },
  {
    question: "Quelles sont vos conditions d'annulation ?",
    answer: "L'annulation est gratuite jusqu'à cinq jours avant la date et l'heure de prise en charge réservées. Pour une annulation à moins de cinq jours du départ, le prix total est dû.",
  },
]);

const TEXT = {
  en: {
    faqs,
    title: "Frequently Asked ",
    accent: "Questions",
    intro: "Everything about airport pickups, waiting time, fixed prices and our vehicles. Something else? Ask us directly.",
    whatsapp: "WhatsApp us",
  },
  fr: {
    faqs: faqsFr,
    title: "Questions ",
    accent: "fréquentes",
    intro: "Tout sur l'accueil à l'aéroport, l'attente, les prix fixes et nos voitures. Une autre question ? Posez-la-nous directement.",
    whatsapp: "Écrivez-nous sur WhatsApp",
  },
};

export default function Faq({ locale }: { locale?: "fr" }) {
  const t = TEXT[locale ?? "en"];
  const items: FaqItem[] = t.faqs.map(f => ({ question: f.question, answer: <p>{f.answer}</p> }));
  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  };
  return (
    <section aria-labelledby="faq-title" data-nav-tone="light" className="bg-[#f5f6f8] text-[#101828]">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 id="faq-title" className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] md:text-[40px]" style={{ textWrap: "balance" }}>
            {t.title}<span className="text-[#d4b471]">{t.accent}</span>
          </h2>
          <p className="mt-3 max-w-[420px] text-[16px] leading-relaxed text-[#667085] md:text-[17px]">{t.intro}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ArrowButton text={t.whatsapp} href={whatsappUrl} target="_blank" rel="noopener noreferrer" tone="dark" />
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
