// Home FAQ, asked for by the user on 21 Oct 2026. The questions and answers are the site's own, taken word for word
// from the service pages (src/app/data/service-pages.ts). Hyperiux's Animated FAQ opens them (ui/faq-list.tsx); the
// answers stay in the HTML, and the same text is given to search engines and AI assistants as FAQPage data.

import { contactPhone, contactPhoneDisplay, whatsappUrl } from "../data/site-config";
import { AntiOutlinePill } from "../ui/anti";
import ArrowButton from "../ui/arrow-button";
import FaqList, { type FaqItem } from "../ui/faq-list";

const faqs: { question: string; answer: string }[] = [
  {
    question: "Do you provide airport transfers from Nice Airport?",
    answer: "Yes. We provide private transfers from Nice Côte d'Azur Airport to Monaco, Cannes, Saint-Tropez, and destinations across the French Riviera.",
  },
  {
    question: "Where will my chauffeur meet me at Nice Airport?",
    answer: "Your chauffeur will meet you in the arrivals area with a personalized name sign and assist you with your luggage before escorting you to the vehicle.",
  },
  {
    question: "How much waiting time is included for arrivals?",
    answer: "One hour of waiting is included for every arrival, counted from the pickup time stated in your reservation.",
  },
  {
    question: "Are your transfer prices fixed?",
    answer: "Yes. Transfer prices are agreed upon before the journey, with no hidden fees. The price depends on the route, vehicle choice, and any additional services requested.",
  },
  {
    question: "Do you monitor flight delays?",
    answer: "Yes. We monitor flight arrivals in real time. One hour of waiting is included from the pickup time stated in your reservation, so please contact us as soon as possible if a major delay affects that time.",
  },
  {
    question: "Which vehicles are available for transfers?",
    answer: "We offer luxury sedans and premium vans suitable for individuals, families, business travellers, and groups. The most common vehicles include the Mercedes S-Class and Mercedes V-Class, but we can recommend the best option based on your route and passenger needs.",
  },
  {
    question: "How does an hourly chauffeur service work?",
    answer: "An hourly chauffeur service gives you a dedicated driver and vehicle for a set period of time. Your chauffeur remains available throughout your booking, allowing you to make multiple stops, attend meetings, enjoy shopping, or change plans as needed without arranging separate transfers.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "Cancellation is free of charge until five days before the booked date and pickup time. If a booking is cancelled less than five days before departure, the full fare is charged.",
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
            Everything about airport pickups, waiting time, fixed fares and our vehicles. Something else? Ask us directly.
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
