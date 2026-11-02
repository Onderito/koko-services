// /partners in the Anti language (inspirations/IMG_8800), the same blocks as the approved home page:
// a navy band hero with the header inside it (h1, line and text, gold and outline pills, Anti's hero figures with thin
// dividers), "Why Partner With Us" as Anti's navy split card (photo and title, gold-circle list), the partner types as
// white photo cards, the fleet as a white table card, "How It Works" as Anti's numbered process beside a photo panel,
// partner quotes as Anti testimonials, the commission table on a navy band, FAQs as white cards that open, the
// application form (partner-form.tsx, the only client part), Anti's dark CTA card, then the site footer.
// Texts, heading levels, links, form fields and ids unchanged; the small labels above titles are gone (user's request);
// the photos are the site's own, shown as decoration (empty alt). No animation: server component, no gsap, no Reveal.

import Image from "next/image";
import {
  Award,
  CalendarCheck2,
  CarFront,
  Check,
  Clock3,
  HandCoins,
  Languages,
  Mail,
  MessageCircle,
  Minus,
  Phone,
  Plus,
  Tag,
  Timer,
  type LucideIcon,
} from "lucide-react";

import Footer from "../layout/footer";
import { AntiHeading, AntiOutlinePill, AntiSection, AntiTestimonial, SpecChip } from "../ui/anti";
import ArrowButton from "../ui/arrow-button";
import { Accent } from "../ui/kit";
import {
  businessName,
  contactEmail,
  contactPhone,
  contactPhoneDisplay,
  whatsappUrl,
} from "../data/site-config";
import PartnerForm from "./partner-form";

const heroFigures = [
  {
    label: "Response time",
    value: "15 minutes",
    text: "Fast confirmation for new bookings and late changes.",
  },
  {
    label: "Commission",
    value: "Up to 15%",
    text: "Structured around booking type and monthly volume.",
  },
  {
    label: "Coverage",
    value: "24/7 Riviera",
    text: "Nice, Cannes, Monaco, Saint-Tropez, airports, marinas, and events.",
  },
];

const whyPartnerItems: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Dedicated Commission Program",
    text: "Earn competitive commission on every booking you send our way. Clear terms, dependable reporting, and monthly payments without admin friction.",
    icon: HandCoins,
  },
  {
    title: "Priority Booking Access",
    text: "Partner requests are prioritized during peak dates, major congresses, and Riviera event periods when availability matters most.",
    icon: CalendarCheck2,
  },
  {
    title: "Instant Confirmation",
    text: "Send a booking by WhatsApp or email and receive confirmation within 15 minutes, day or night, for fast-moving client requests.",
    icon: Timer,
  },
  {
    title: "White-Label Service",
    text: "We can operate discreetly under your brand so your client experience stays seamless from first contact to final drop-off.",
    icon: Tag,
  },
  {
    title: "Multilingual Drivers",
    text: "English, French, Turkish, and Russian speaking chauffeurs support international guests who expect clarity and discretion.",
    icon: Languages,
  },
  {
    title: "Impeccable Fleet",
    text: "Mercedes S-Class, V-Class, and Vito vehicles are maintained and presented to a standard suited to premium hospitality and VIP travel.",
    icon: CarFront,
  },
  {
    title: "10 Years of Riviera Experience",
    text: "From Nice Airport arrivals to Monaco yacht pickups and Cannes event logistics, the operational side is already under control.",
    icon: Award,
  },
];

// Photos: the site's own images, chosen for each partner type and shown as decoration.
const partnerTypes = [
  {
    title: "Luxury Hotels & Palace Concierge",
    text: "We coordinate directly with front desk and concierge teams to deliver smooth arrivals, departures, and guest movements without extra back-and-forth.",
    image: "/assets/images/services/luxury-hotel.webp",
  },
  {
    title: "Travel Agencies & Tour Operators",
    text: "Ground transportation can slot directly into premium packages for airport arrivals, touring days, VIP clients, and late changes.",
    image: "/assets/images/blog/airport-meet-and-greet-explained.webp",
  },
  {
    title: "Yacht & Marina Services",
    text: "Port pickups and coastal movements are handled with the same care as hotel and airport transfers across Monaco, Antibes, and Saint-Tropez.",
    image: "/assets/images/services/yacht-transfers.webp",
  },
  {
    title: "Event & DMC Agencies",
    text: "For Monaco Grand Prix, Cannes Film Festival, MIPIM, Cannes Lions, and private events, we can coordinate single VIP trips or larger guest flows.",
    image: "/assets/images/services/events.webp",
  },
  {
    title: "Corporate & PA Services",
    text: "Executive assistants and travel managers rely on us for punctual, discreet transfers where timing and presentation are non-negotiable.",
    image: "/assets/images/blog/corporate-chauffeur-service.webp",
  },
];

const fleetRows = [
  {
    vehicle: "Mercedes S-Class",
    capacity: "2 passengers · 2 bags",
    idealFor: "Executive transfers and VIP arrivals",
  },
  {
    vehicle: "Mercedes E-Class",
    capacity: "2 passengers · 2 bags",
    idealFor: "Business travel, executive transfers and private chauffeur service",
  },
  {
    vehicle: "Mercedes V-Class",
    capacity: "7 passengers · 7 bags",
    idealFor: "Groups, families, and airport runs",
  },
  {
    vehicle: "Mercedes Vito",
    capacity: "8 passengers",
    idealFor: "Perfect for large groups, luxury tours and business travel",
  },
];

const processSteps = [
  {
    title: "Apply to become a partner",
    text: "Complete the application form below. We review the request and respond within 24 hours.",
  },
  {
    title: "Receive your partner agreement",
    text: "We send the commission structure, booking process, and dedicated contact details in a simple operational format.",
  },
  {
    title: "Send your first booking",
    text: "Bookings can be placed by WhatsApp, email, or through your partner booking workflow, with confirmation within 15 minutes.",
  },
  {
    title: "Your clients travel in style",
    text: "We handle flight tracking, meet and greet, timing updates, and execution on the day. You receive confirmation and invoicing automatically.",
  },
  {
    title: "Earn your commission",
    text: "Monthly bank transfer with a clear breakdown of completed bookings. No chasing, no manual reconciliation.",
  },
];

const testimonials = [
  {
    quote:
      "Kokolimo has become our go-to ground transport partner on the French Riviera. Reliable, professional, and our clients always come back impressed.",
    author: "Luxury Travel Agency",
    location: "Istanbul",
  },
  {
    quote:
      "Last-minute requests, peak season, difficult clients. They handle everything without a single complaint. Exactly what we need.",
    author: "Hotel Concierge",
    location: "Geneva",
  },
  {
    quote:
      "The white-label option works perfectly for us. Our clients feel continuity under our brand, and the execution stays flawless every time.",
    author: "DMC Agency",
    location: "London",
  },
];

const commissionRows = [
  {
    bookingType: "Airport Transfer",
    partnerRate: "Priority pricing",
    commission: "10% per booking",
  },
  {
    bookingType: "Hourly Chauffeur",
    partnerRate: "Priority pricing",
    commission: "10% per booking",
  },
  {
    bookingType: "Full Day",
    partnerRate: "Priority pricing",
    commission: "12% per booking",
  },
  {
    bookingType: "Events (F1, Festival, Congress)",
    partnerRate: "Custom quote",
    commission: "12% per booking",
  },
  {
    bookingType: "Monthly volume 10+ bookings",
    partnerRate: "Negotiable",
    commission: "Up to 15%",
  },
];

const faqs = [
  {
    question: "How quickly can you confirm a booking?",
    answer: "Within 15 minutes via WhatsApp, 24 hours a day, 7 days a week.",
  },
  {
    question: "Do you handle last-minute bookings?",
    answer:
      "Yes. We keep room for partner bookings, including during high-season periods and event dates.",
  },
  {
    question: "Can you accommodate large groups?",
    answer:
      "Yes. We can coordinate multiple vehicles for group arrivals, event guests, and corporate travel movements.",
  },
  {
    question: "Do you offer a white-label service?",
    answer:
      "Yes. On request, we operate discreetly under your brand so the guest experience remains fully aligned with your business.",
  },
  {
    question: "What happens if a flight is delayed?",
    answer:
      "Flights are tracked in real time and the chauffeur schedule adjusts automatically, at no extra charge.",
  },
  {
    question: "Which languages do your drivers speak?",
    answer: "English, French, Turkish, and Russian.",
  },
  {
    question: "How are commissions paid?",
    answer:
      "By bank transfer at the end of each month, with a booking-by-booking breakdown.",
  },
];

const idealFit = [
  "Airport arrivals and departures",
  "VIP FIT clients and executive transfers",
  "Monaco and Cannes event movement",
  "Hotel, villa, yacht, and concierge logistics",
];

const cardShadow = "shadow-[0_1px_2px_rgba(16,24,40,0.05),0_10px_30px_rgba(16,24,40,0.07)]";
const goldCircle = "grid shrink-0 place-items-center rounded-full bg-[#e2b04a] text-[#0d1424]";

export default function PartnersClientPage() {
  return (
    <>
      {/* Hero: navy band (the page has no photo of its own), header inside, Anti's figures row at the bottom. */}
      <section data-hero-tone="dark" data-nav-tone="dark" className="bg-[#0d1424] text-white">
        <div className="mx-auto max-w-[1240px] px-4 pb-8 pt-[calc(var(--header-h)+3.5rem)] md:px-6 md:pb-10 lg:pt-[calc(var(--header-h)+4.5rem)]">
          <div className="grid gap-y-6 lg:grid-cols-2 lg:gap-x-16">
            <div className="lg:col-start-1 lg:row-start-1">
              <h1 className="text-[40px] font-bold leading-[1.04] tracking-[-0.025em] sm:text-[54px] lg:text-[68px]" style={{ textWrap: "balance" }}>
                <Accent text={`Partner With ${businessName}`} accent={businessName} tone="dark" />
              </h1>
              <p className="mt-5 max-w-[520px] text-[18px] font-semibold leading-snug tracking-[-0.01em] md:text-[20px]">
                The French Riviera&apos;s premium chauffeur service for travel
                professionals
              </p>
            </div>
            <div className="space-y-4 text-[16px] leading-relaxed text-white/75 md:text-[17px] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-end">
              <p>
                Your clients expect the best. So do you. {businessName} works with
                selected travel agencies, concierge services, yacht providers, and
                luxury hospitality partners to deliver a seamless five-star ground
                transportation experience across the French Riviera.
              </p>
              <p>
                Whether your clients are landing at Nice Airport, attending the
                Cannes Film Festival, or moving through Monaco by private
                chauffeur, the transport side stays under control without adding
                work to your team.
              </p>
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-3 lg:col-start-1 lg:row-start-2 lg:self-end">
              <ArrowButton text="Become a partner" href="#partner-form" />
              <AntiOutlinePill href={whatsappUrl} external>
                Discuss on WhatsApp
              </AntiOutlinePill>
            </div>
          </div>

          {/* Each figure keeps its reading order (label, value, text); the value is drawn above its label, as in Anti. */}
          <div className="mt-8 grid divide-y divide-white/10 border-t border-white/10 md:grid-cols-3 md:divide-x md:divide-y-0 lg:mt-10">
            {heroFigures.map((item) => (
              <div key={item.label} className="py-5 md:px-6 md:first:pl-0 lg:px-10">
                <div className="flex flex-col-reverse">
                  <p className="mt-2 text-[14px] font-medium text-white/60">{item.label}</p>
                  <h2 className="text-[30px] font-bold leading-none tracking-[-0.02em] md:text-[28px] lg:text-[34px]">{item.value}</h2>
                </div>
                <p className="mt-3 max-w-[320px] text-[14px] leading-relaxed text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why partner: Anti's navy split card ("More Than Just A Car Dealership"), its list holding the seven items. */}
      <AntiSection tone="white" labelledBy="partners-why-title">
        <div data-nav-tone="dark" className="grid overflow-hidden rounded-[12px] bg-[#0d1424] text-white lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[340px] lg:min-h-[480px]">
            <Image src="/assets/images/services/driver.webp" alt="" fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover object-[50%_55%]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,36,0.82)_0%,rgba(13,20,36,0.25)_55%,rgba(13,20,36,0.55)_100%)] lg:bg-[linear-gradient(90deg,rgba(13,20,36,0.55)_0%,rgba(13,20,36,0.15)_60%,rgba(13,20,36,1)_100%)]" />
            <div className="relative max-w-[460px] p-8 md:p-10">
              <h2 id="partners-why-title" className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] md:text-[38px]" style={{ textWrap: "balance" }}>
                Why Partner With Us
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-white/80">
                The offer is designed for teams who need premium transport that is
                operationally easy to book, consistent to deliver, and strong enough
                to protect their client experience under pressure.
              </p>
            </div>
          </div>
          <ul className="flex flex-col justify-center gap-6 p-8 md:p-10 xl:px-12">
            {whyPartnerItems.map(({ title, text, icon: ItemIcon }) => (
              <li key={title} className="flex gap-4">
                <span aria-hidden="true" className={`${goldCircle} h-11 w-11`}>
                  <ItemIcon size={20} strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="text-[17px] font-semibold leading-snug">{title}</h3>
                  <p className="mt-1 text-[14px] leading-relaxed text-white/70">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </AntiSection>

      {/* Who we work with: white photo cards like Anti's vehicle cards (three, then two wider ones). */}
      <AntiSection tone="white" labelledBy="partners-types-title" innerClassName="!pt-0">
        <AntiHeading
          id="partners-types-title"
          title="Who We Work With"
          intro="The program is built for travel-facing businesses that need reliable execution, strong presentation, and a booking process that stays easy even during busy periods."
        />
        <ul className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-6">
          {partnerTypes.map((item, index) => {
            const last = index === partnerTypes.length - 1;
            const wide = index >= 3;
            return (
              <li key={item.title} className={wide ? (last ? "md:col-span-2 xl:col-span-3" : "xl:col-span-3") : "xl:col-span-2"}>
                <article className={`flex h-full flex-col rounded-[10px] bg-white p-2.5 ${cardShadow}`}>
                  <div className="relative h-[220px] overflow-hidden rounded-[8px] bg-[#eef0f3] md:h-[240px]">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes={last ? "(min-width: 1280px) 600px, 100vw" : wide ? "(min-width: 1280px) 600px, (min-width: 768px) 50vw, 100vw" : "(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"}
                      className="object-cover"
                    />
                  </div>
                  <div className="px-2.5 pb-3 pt-4">
                    <h3 className="text-[19px] font-semibold tracking-[-0.01em] text-[#101828]">{item.title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-[#667085]">{item.text}</p>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </AntiSection>

      {/* Fleet: a white table card on grey (cards on phones, as before). */}
      <AntiSection tone="grey" labelledBy="partners-fleet-title">
        <AntiHeading
          id="partners-fleet-title"
          title="Our Fleet"
          intro="All vehicles are maintained to showroom standard and equipped with Wi-Fi, phone chargers, and chilled water as standard."
        />
        <div className={`mt-10 hidden rounded-[10px] bg-white md:block ${cardShadow}`}>
          <table className="w-full table-fixed text-left">
            <thead>
              <tr className="border-b border-[#eaecf0]">
                <th scope="col" className="w-[27%] px-6 py-4 text-[13px] font-semibold text-[#667085] lg:px-8">
                  Vehicle
                </th>
                <th scope="col" className="w-[25%] px-6 py-4 text-[13px] font-semibold text-[#667085] lg:px-8">
                  Capacity
                </th>
                <th scope="col" className="px-6 py-4 text-[13px] font-semibold text-[#667085] lg:px-8">
                  Ideal For
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#eaecf0]">
              {fleetRows.map((row) => (
                <tr key={row.vehicle}>
                  <td className="px-6 py-5 text-[16px] font-semibold text-[#101828] lg:px-8">{row.vehicle}</td>
                  <td className="px-6 py-5 lg:px-8">
                    <SpecChip>{row.capacity}</SpecChip>
                  </td>
                  <td className="px-6 py-5 text-[15px] leading-relaxed text-[#667085] lg:px-8">{row.idealFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ul className="mt-8 grid gap-4 md:hidden">
          {fleetRows.map((row) => (
            <li key={row.vehicle} className={`rounded-[10px] bg-white p-5 ${cardShadow}`}>
              <p className="text-[13px] font-medium text-[#667085]">Vehicle</p>
              <p className="mt-1 text-[17px] font-semibold text-[#101828]">{row.vehicle}</p>
              <div className="mt-4 grid grid-cols-2 gap-4 border-t border-[#eaecf0] pt-4">
                <div>
                  <p className="text-[13px] font-medium text-[#667085]">Capacity</p>
                  <p className="mt-1 text-[14px] text-[#101828]">{row.capacity}</p>
                </div>
                <div>
                  <p className="text-[13px] font-medium text-[#667085]">Ideal For</p>
                  <p className="mt-1 text-[14px] leading-relaxed text-[#667085]">{row.idealFor}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </AntiSection>

      {/* How it works: Anti's "A Simple Process" — gold numbered circles on a thin line, a photo panel on the right. */}
      <AntiSection tone="white" labelledBy="partners-process-title">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <div>
            <AntiHeading id="partners-process-title" title="How It Works" />
            <ol className="mt-10">
              {processSteps.map((step, index) => (
                <li key={step.title} className="relative flex gap-5 pb-9 last:pb-0">
                  {index < processSteps.length - 1 ? (
                    <span aria-hidden="true" className="absolute bottom-0 left-[21px] top-12 w-px bg-[#e2b04a]/45" />
                  ) : null}
                  <span aria-hidden="true" className={`${goldCircle} relative h-11 w-11 text-[15px] font-semibold ring-4 ring-[#e2b04a]/15`}>
                    {index + 1}
                  </span>
                  <div className="pt-2.5">
                    <h3 className="text-[17px] font-semibold leading-snug text-[#101828]">{step.title}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-[#667085]">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-[12px] bg-[#eef0f3] lg:min-h-0 lg:[clip-path:polygon(12%_0,100%_0,100%_100%,26%_100%,0_46%)]">
            <Image src="/assets/images/hero-img.webp" alt="" fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover object-[50%_68%]" />
          </div>
        </div>
      </AntiSection>

      {/* Partner quotes: Anti's testimonial cards on light grey. */}
      <AntiSection tone="grey" labelledBy="partners-quotes-title">
        <AntiHeading id="partners-quotes-title" title="What Our Partners Say" />
        <ul className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <li key={`${item.author}-${item.location}`}>
              <AntiTestimonial quote={item.quote} author={item.author} context={item.location} />
            </li>
          ))}
        </ul>
      </AntiSection>

      {/* Rates: a navy band like Anti's gallery, the table on a night card, commissions in gold. */}
      <AntiSection tone="navy" labelledBy="partners-rates-title">
        <AntiHeading
          dark
          id="partners-rates-title"
          title="Partner Rates & Commission"
          intro="All rates are fixed and agreed upfront. No hidden fees, no late surprises, and a commercial structure that remains easy to explain to your team."
        />
        <div className="mt-10 overflow-x-auto rounded-[12px] border border-white/10 bg-[#162034]">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th scope="col" className="px-4 py-4 text-[13px] font-semibold text-white/60 md:px-8">
                  Booking Type
                </th>
                <th scope="col" className="px-4 py-4 text-[13px] font-semibold text-white/60 md:px-8">
                  Partner Rate
                </th>
                <th scope="col" className="px-4 py-4 text-[13px] font-semibold text-white/60 md:px-8">
                  Commission
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {commissionRows.map((row) => (
                <tr key={row.bookingType}>
                  <td className="px-4 py-5 text-[15px] font-semibold text-white md:px-8 md:text-[16px]">{row.bookingType}</td>
                  <td className="px-4 py-5 text-[14px] text-white/70 md:px-8 md:text-[15px]">{row.partnerRate}</td>
                  <td className="px-4 py-5 text-[15px] font-semibold text-[#e2b04a] md:px-8 md:text-[16px]">{row.commission}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AntiSection>

      {/* FAQs: white cards that open (answers stay in the HTML). */}
      <AntiSection tone="white" labelledBy="partners-faq-title">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start lg:gap-16">
          <AntiHeading id="partners-faq-title" title="Frequently Asked Questions" />
          <div className="flex flex-col gap-3">
            {faqs.map((item) => (
              <details key={item.question} className={`group rounded-[10px] bg-white ${cardShadow}`}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-[10px] px-5 py-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e2b04a] md:px-6 md:py-5 [&::-webkit-details-marker]:hidden">
                  <h3 className="text-[16px] font-semibold leading-snug text-[#101828] md:text-[17px]">{item.question}</h3>
                  <span aria-hidden="true" className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#f6ecd6] text-[#101828] transition-colors duration-200 group-open:bg-[#e2b04a]">
                    <Plus size={16} strokeWidth={2} className="group-open:hidden" />
                    <Minus size={16} strokeWidth={2} className="hidden group-open:block" />
                  </span>
                </summary>
                <p className="px-5 pb-5 text-[15px] leading-relaxed text-[#667085] md:px-6 md:pb-6">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </AntiSection>

      {/* Application: the form in a white card, a navy contact card and the fit list beside it. */}
      <AntiSection tone="grey" id="partner-form" labelledBy="partners-form-title" className="scroll-mt-[calc(var(--header-h)-2rem)]">
        <AntiHeading
          id="partners-form-title"
          title={`Join the travel professionals who trust ${businessName}`}
          intro="Send your application and we'll come back with the commercial structure, workflow, and direct booking contact."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-start">
          <PartnerForm />

          <div className="flex flex-col gap-6">
            <div data-nav-tone="dark" className="rounded-[12px] bg-[#0d1424] p-6 text-white md:p-8">
              <h3 className="text-[22px] font-bold leading-[1.2] tracking-[-0.015em]">
                We can discuss your client profile and booking workflow first.
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/70">
                WhatsApp is the fastest route if you want to qualify the
                partnership before sending the form.
              </p>
              <ul className="mt-6 space-y-4 border-t border-white/10 pt-6">
                <li className="flex items-center gap-4">
                  <span aria-hidden="true" className={`${goldCircle} h-10 w-10`}>
                    <MessageCircle size={18} strokeWidth={1.8} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[13px] text-white/60">WhatsApp</p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 block text-[16px] font-semibold text-white transition-colors duration-200 hover:text-[#e2b04a]"
                    >
                      {contactPhoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <span aria-hidden="true" className={`${goldCircle} h-10 w-10`}>
                    <Mail size={18} strokeWidth={1.8} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[13px] text-white/60">Email</p>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="mt-0.5 block break-all text-[16px] font-semibold text-white transition-colors duration-200 hover:text-[#e2b04a]"
                    >
                      {contactEmail.toLowerCase()}
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <span aria-hidden="true" className={`${goldCircle} h-10 w-10`}>
                    <Clock3 size={18} strokeWidth={1.8} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[13px] text-white/60">Response time</p>
                    <p className="mt-0.5 text-[16px] font-semibold text-white">Within 15 minutes</p>
                  </div>
                </li>
              </ul>
              <div className="mt-7">
                <ArrowButton text="WhatsApp Us Now" href={whatsappUrl} target="_blank" rel="noopener noreferrer" />
              </div>
            </div>

            <div className={`rounded-[10px] bg-white p-6 md:p-8 ${cardShadow}`}>
              <h3 className="text-[20px] font-bold leading-snug tracking-[-0.01em] text-[#101828]">
                Best suited for premium travel workflows
              </h3>
              <ul className="mt-5 space-y-3">
                {idealFit.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-[#667085]">
                    <span aria-hidden="true" className={`${goldCircle} mt-[3px] h-5 w-5`}>
                      <Check size={12} strokeWidth={2.6} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </AntiSection>

      {/* Final call to action: Anti's dark CTA card ("Your Dream Car Is Closer Than You Think"), the photo fading in on the right. */}
      <AntiSection tone="white" labelledBy="partners-cta-title">
        <div data-nav-tone="dark" className="relative isolate overflow-hidden rounded-[12px] bg-[#0d1424] text-white">
          <div className="absolute inset-0 -z-10 md:left-auto md:w-[58%]">
            <Image src="/assets/images/cars/class-v/class-v-third.webp" alt="" fill sizes="(min-width: 768px) 720px, 100vw" className="object-cover object-[50%_62%]" />
            <div className="absolute inset-0 bg-[#0d1424]/80 md:bg-transparent md:bg-[linear-gradient(90deg,#0d1424_0%,rgba(13,20,36,0.55)_38%,rgba(13,20,36,0.08)_100%)]" />
          </div>
          <div className="max-w-[620px] px-6 py-10 md:px-12 md:py-14">
            <h2 id="partners-cta-title" className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] md:text-[40px]" style={{ textWrap: "balance" }}>
              <Accent text="Prefer to talk before applying?" accent="before applying?" tone="dark" />
            </h2>
            <p className="mt-4 max-w-[540px] text-[16px] leading-relaxed text-white/75">
              We&apos;re happy to jump on a quick call or WhatsApp conversation to
              discuss how the partnership can work for your agency, concierge
              desk, or events team.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <ArrowButton text="WhatsApp Us Now" href={whatsappUrl} target="_blank" rel="noopener noreferrer" />
              <a href={`tel:${contactPhone}`} className="group inline-flex items-center gap-3 text-[15px] font-semibold text-white transition-colors duration-200 hover:text-[#e2b04a]">
                <span aria-hidden="true" className="grid h-11 w-11 place-items-center rounded-full border border-white/30 transition-colors duration-200 group-hover:border-[#e2b04a]">
                  <Phone size={18} strokeWidth={1.8} />
                </span>
                Call {contactPhoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </AntiSection>

      <Footer />
    </>
  );
}
