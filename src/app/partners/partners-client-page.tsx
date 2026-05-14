"use client";

import gsap from "gsap";
import Link from "next/link";
import { useLayoutEffect, useMemo, useRef, useState } from "react";

import Footer from "../layout/footer";
import PhoneInput from "../ui/phone-input";
import {
  businessName,
  contactEmail,
  contactPhone,
  contactPhoneDisplay,
  whatsappUrl,
} from "../data/site-config";
import { Reveal, RevealGroup } from "../ui/reveal";

type Status = "idle" | "loading" | "success" | "error";

type PartnerFormData = {
  fullName: string;
  companyName: string;
  companyType: string;
  country: string;
  email: string;
  phone: string;
  monthlyBookings: string;
  clientSummary: string;
};

const whyPartnerItems = [
  {
    title: "Dedicated Commission Program",
    text: "Earn competitive commission on every booking you send our way. Clear terms, dependable reporting, and monthly payments without admin friction.",
  },
  {
    title: "Priority Booking Access",
    text: "Partner requests are prioritized during peak dates, major congresses, and Riviera event periods when availability matters most.",
  },
  {
    title: "Instant Confirmation",
    text: "Send a booking by WhatsApp or email and receive confirmation within 15 minutes, day or night, for fast-moving client requests.",
  },
  {
    title: "White-Label Service",
    text: "We can operate discreetly under your brand so your client experience stays seamless from first contact to final drop-off.",
  },
  {
    title: "Multilingual Drivers",
    text: "English, French, Turkish, and Russian speaking chauffeurs support international guests who expect clarity and discretion.",
  },
  {
    title: "Impeccable Fleet",
    text: "Mercedes S-Class, V-Class, and Vito vehicles are maintained and presented to a standard suited to premium hospitality and VIP travel.",
  },
  {
    title: "10 Years of Riviera Experience",
    text: "From Nice Airport arrivals to Monaco yacht pickups and Cannes event logistics, the operational side is already under control.",
  },
];

const partnerTypes = [
  {
    title: "Luxury Hotels & Palace Concierge",
    text: "We coordinate directly with front desk and concierge teams to deliver smooth arrivals, departures, and guest movements without extra back-and-forth.",
  },
  {
    title: "Travel Agencies & Tour Operators",
    text: "Ground transportation can slot directly into premium packages for airport arrivals, touring days, VIP clients, and late changes.",
  },
  {
    title: "Yacht & Marina Services",
    text: "Port pickups and coastal movements are handled with the same care as hotel and airport transfers across Monaco, Antibes, and Saint-Tropez.",
  },
  {
    title: "Event & DMC Agencies",
    text: "For Monaco Grand Prix, Cannes Film Festival, MIPIM, Cannes Lions, and private events, we can coordinate single VIP trips or larger guest flows.",
  },
  {
    title: "Corporate & PA Services",
    text: "Executive assistants and travel managers rely on us for punctual, discreet transfers where timing and presentation are non-negotiable.",
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
      "Viplimonice has become our go-to ground transport partner on the French Riviera. Reliable, professional, and our clients always come back impressed.",
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

const companyTypes = [
  "Travel Agency",
  "Hotel / Concierge",
  "Yacht / Marina Service",
  "Event / DMC Agency",
  "Corporate / PA Service",
  "Other",
] as const;

const monthlyBookingRanges = ["1-5", "5-10", "10-20", "20+"] as const;

const initialFormData: PartnerFormData = {
  fullName: "",
  companyName: "",
  companyType: "",
  country: "",
  email: "",
  phone: "",
  monthlyBookings: "",
  clientSummary: "",
};

export default function PartnersClientPage() {
  const [countryCode, setCountryCode] = useState("+33");
  const [formData, setFormData] = useState<PartnerFormData>(initialFormData);
  const [status, setStatus] = useState<Status>("idle");
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [openModal, setOpenModal] = useState(false);
  const backdropRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const errors = useMemo(() => {
    const e: Record<string, string> = {};
    const isEmpty = (value: string) => value.trim().length === 0;
    const emailOk =
      !isEmpty(formData.email) &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    const phoneOk =
      !isEmpty(formData.phone) &&
      formData.phone.replace(/\s+/g, "").length >= 8;

    if (isEmpty(formData.fullName)) e.fullName = "Required";
    if (isEmpty(formData.companyName)) e.companyName = "Required";
    if (isEmpty(formData.companyType)) e.companyType = "Required";
    if (isEmpty(formData.country)) e.country = "Required";
    if (!emailOk) e.email = "Invalid email";
    if (!phoneOk) e.phone = "Invalid phone";
    if (isEmpty(formData.monthlyBookings)) e.monthlyBookings = "Required";

    return e;
  }, [formData]);

  const showError = (key: keyof PartnerFormData) =>
    (submitted || touched[key]) && !!errors[key];

  const isValid = Object.keys(errors).length === 0;

  useLayoutEffect(() => {
    if (status !== "success" || !openModal) return;

    gsap.set(backdropRef.current, { autoAlpha: 0 });
    gsap.set(modalRef.current, { autoAlpha: 0, y: 12, scale: 0.96 });

    gsap
      .timeline({ defaults: { duration: 0.25, ease: "power2.out" } })
      .to(
        backdropRef.current,
        { autoAlpha: 1, duration: 0.15, ease: "linear" },
        0,
      )
      .to(modalRef.current, { autoAlpha: 1, y: 0, scale: 1 }, 0.05);
  }, [status, openModal]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const closeModal = () => {
    gsap
      .timeline({
        defaults: { duration: 0.2, ease: "power1.in" },
        onComplete: () => {
          setOpenModal(false);
          setStatus("idle");
        },
      })
      .to(modalRef.current, { autoAlpha: 0, y: 12, scale: 0.96 }, 0)
      .to(backdropRef.current, { autoAlpha: 0, duration: 0.15 }, 0);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    if (!isValid) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, phone: `${countryCode} ${formData.phone}` }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || "Partner application failed");
      }

      setStatus("success");
      setOpenModal(true);
      setCountryCode("+33");
      setFormData(initialFormData);
      setTouched({});
      setSubmitted(false);
    } catch {
      setStatus("error");
    }
  };

  const inputCls = (key: keyof PartnerFormData) =>
    `mt-2 w-full rounded-[14px] border bg-white/90 p-3 text-[15px] text-[#1F1F1F] placeholder:text-[#9A8C73] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-sm transition-all duration-200 focus:outline-none focus:border-[#C9A874] focus:ring-2 focus:ring-[#E8D9C5] ${
      showError(key) ? "border-red-400" : "border-[#E9DECF]"
    }`;

  return (
    <>
      <div className="hero-container pt-[var(--nav-clearance)]">
        <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr] xl:items-start">
          <Reveal className="rounded-[36px] border border-[#E8D9C4] bg-[linear-gradient(180deg,#FFFFFF_0%,#FAF4EC_100%)] p-6 shadow-[0_20px_48px_rgba(45,33,15,0.08)] md:p-10 xl:p-12">
            <span className="section-label">Partner Program</span>
            <h1 className="heading-1 mt-5 max-w-4xl !text-[#111111] text-pretty xl:text-[68px]">
              Partner With {businessName}
            </h1>
            <p className="mt-4 text-[18px] font-manrope-bold tracking-[-0.02em] text-[#6D5830] md:text-[22px]">
              The French Riviera&apos;s premium chauffeur service for travel
              professionals
            </p>
            <p className="body-text mt-5 max-w-3xl">
              Your clients expect the best. So do you. {businessName} works with
              selected travel agencies, concierge services, yacht providers, and
              luxury hospitality partners to deliver a seamless five-star ground
              transportation experience across the French Riviera.
            </p>
            <p className="body-text mt-4 max-w-3xl">
              Whether your clients are landing at Nice Airport, attending the
              Cannes Film Festival, or moving through Monaco by private
              chauffeur, the transport side stays under control without adding
              work to your team.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#partner-form"
                className="inline-flex items-center justify-center rounded-[18px] bg-[linear-gradient(180deg,#F8F3EC_0%,#E8D9C5_100%)] px-6 py-3 font-manrope-bold text-[15px] text-[#111111] shadow-[0_14px_30px_-8px_rgba(109,88,48,0.28),inset_0_1px_0_rgba(255,255,255,0.8)] transition-all duration-200 hover:-translate-y-0.5"
              >
                Become a partner
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-[18px] border border-[#E3D5C2] bg-white px-6 py-3 font-manrope-bold text-[15px] text-[#6D5830] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FAF6EF]"
              >
                Discuss on WhatsApp
              </a>
            </div>
          </Reveal>

          <RevealGroup className="grid gap-4" stagger={0.07}>
            {[
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
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[28px] border border-[#E8D9C4] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F1E7_100%)] p-6 shadow-[0_18px_40px_rgba(45,33,15,0.08)]"
              >
                <span className="inline-flex rounded-full border border-[#E3D3BC] bg-[#F8F1E7] px-3 py-1 text-[11px] font-manrope-bold uppercase tracking-[0.14em] text-[#7B6034]">
                  {item.label}
                </span>
                <h2 className="mt-4 text-[34px] font-manrope-bold tracking-[-0.05em] text-[#1F1F1F]">
                  {item.value}
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-[#666666]">
                  {item.text}
                </p>
              </div>
            ))}
          </RevealGroup>
        </div>
      </div>

      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="section-label">Why Us</span>
          <h2 className="heading-2 mt-4 text-[#404040]">Why Partner With Us</h2>
          <p className="body-text mt-4">
            The offer is designed for teams who need premium transport that is
            operationally easy to book, consistent to deliver, and strong enough
            to protect their client experience under pressure.
          </p>
        </Reveal>

        <RevealGroup
          className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          amount={0.28}
        >
          {whyPartnerItems.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-[#E8D9C4] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F1E7_100%)] p-6 shadow-[0_18px_40px_rgba(45,33,15,0.08)]"
            >
              <h3 className="heading-3 text-[#404040]">{item.title}</h3>
              <p className="card-text mt-3">{item.text}</p>
            </div>
          ))}
        </RevealGroup>
      </div>

      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="section-label">Partner Types</span>
          <h2 className="heading-2 mt-4 text-[#404040]">Who We Work With</h2>
          <p className="body-text mt-4">
            The program is built for travel-facing businesses that need reliable
            execution, strong presentation, and a booking process that stays
            easy even during busy periods.
          </p>
        </Reveal>

        <RevealGroup
          className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          amount={0.28}
        >
          {partnerTypes.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-[#E7E1D8] bg-white p-6 shadow-[0_16px_40px_rgba(25,25,25,0.06)]"
            >
              <h3 className="heading-3 text-[#404040]">{item.title}</h3>
              <p className="card-text mt-3">{item.text}</p>
            </div>
          ))}
        </RevealGroup>
      </div>

      <div className="container">
        <div className="rounded-[36px] border border-[#E8D9C4] bg-[linear-gradient(180deg,#FFFDF8_0%,#F7EFE4_100%)] p-6 shadow-[0_20px_48px_rgba(45,33,15,0.08)] md:p-10">
          <Reveal className="max-w-3xl">
            <span className="section-label !mx-0">Fleet</span>
            <h2 className="heading-2 mt-4 text-[#404040]">Our Fleet</h2>
            <p className="body-text mt-4">
              All vehicles are maintained to showroom standard and equipped with
              Wi-Fi, phone chargers, and chilled water as standard.
            </p>
          </Reveal>

          <Reveal className="mt-8 overflow-x-auto" amount={0.28}>
            <table className="hidden md:table w-full table-fixed overflow-hidden rounded-[24px] border border-[#E5D7C4] bg-white shadow-[0_14px_34px_rgba(45,33,15,0.06)]">
              <thead className="bg-[#F8F1E7]">
                <tr>
                  <th className="w-1/4 px-6 py-5 text-center text-[12px] font-manrope-bold uppercase tracking-[0.14em] text-[#7B6034]">
                    Vehicle
                  </th>
                  <th className="w-1/4 px-6 py-5 text-center text-[12px] font-manrope-bold uppercase tracking-[0.14em] text-[#7B6034]">
                    Capacity
                  </th>
                  <th className="w-2/4 px-6 py-5 text-center text-[12px] font-manrope-bold uppercase tracking-[0.14em] text-[#7B6034]">
                    Ideal For
                  </th>
                </tr>
              </thead>
              <tbody>
                {fleetRows.map((row, index) => (
                  <tr
                    key={row.vehicle}
                    className={
                      index !== fleetRows.length - 1
                        ? "border-b border-[#EFE4D4]"
                        : ""
                    }
                  >
                    <td className="px-6 py-6 text-center align-middle text-[15px] font-manrope-bold text-[#1F1F1F]">
                      {row.vehicle}
                    </td>
                    <td className="px-6 py-6 text-center align-middle text-[15px] text-[#5E5A53]">
                      {row.capacity}
                    </td>
                    <td className="px-6 py-6 text-center align-middle text-[15px] leading-relaxed text-[#5E5A53]">
                      {row.idealFor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Mobile cards */}
            <div className="grid gap-4 md:hidden">
              {fleetRows.map((row) => (
                <div
                  key={row.vehicle}
                  className="overflow-hidden rounded-[24px] border border-[#E5D7C4] bg-white p-5 shadow-[0_14px_34px_rgba(45,33,15,0.06)] [-webkit-mask-image:-webkit-radial-gradient(white,black)] [transform:translateZ(0)]"
                >
                  <p className="text-[11px] font-manrope-bold uppercase tracking-[0.14em] text-[#7B6034]">
                    Vehicle
                  </p>
                  <p className="mt-1 text-[16px] font-manrope-bold text-[#1F1F1F]">
                    {row.vehicle}
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-4 border-t border-[#EFE4D4] pt-4">
                    <div>
                      <p className="text-[11px] font-manrope-bold uppercase tracking-[0.14em] text-[#7B6034]">
                        Capacity
                      </p>
                      <p className="mt-1 text-[14px] text-[#5E5A53]">
                        {row.capacity}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-manrope-bold uppercase tracking-[0.14em] text-[#7B6034]">
                        Ideal For
                      </p>
                      <p className="mt-1 text-[14px] leading-relaxed text-[#5E5A53]">
                        {row.idealFor}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="section-label">Process</span>
          <h2 className="heading-2 mt-4 text-[#404040]">How It Works</h2>
        </Reveal>

        <RevealGroup
          className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5"
          amount={0.25}
        >
          {processSteps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-[28px] border border-[#E7E1D8] bg-white p-6 shadow-[0_16px_40px_rgba(25,25,25,0.06)]"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E3D3BC] bg-[#F8F1E7] text-[14px] font-manrope-bold text-[#7B6034]">
                {index + 1}
              </span>
              <h3 className="heading-3 mt-4 text-[#404040]">{step.title}</h3>
              <p className="card-text mt-3">{step.text}</p>
            </div>
          ))}
        </RevealGroup>
      </div>

      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="section-label">Partner Feedback</span>
          <h2 className="heading-2 mt-4 text-[#404040]">
            What Our Partners Say
          </h2>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-6 xl:grid-cols-3" amount={0.28}>
          {testimonials.map((item) => (
            <div
              key={`${item.author}-${item.location}`}
              className="rounded-[28px] border border-[#E8D9C4] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F1E7_100%)] p-6 shadow-[0_18px_40px_rgba(45,33,15,0.08)]"
            >
              <p className="text-[16px] leading-relaxed text-[#494949]">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-[#EADFCC] pt-4">
                <p className="font-manrope-bold text-[15px] text-[#1F1F1F]">
                  {item.author}
                </p>
                <p className="mt-1 text-[14px] text-[#7A7367]">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </RevealGroup>
      </div>

      <div className="container">
        <div className="rounded-[36px] border border-[#E8D9C4] bg-[linear-gradient(180deg,#FFFFFF_0%,#FAF4EC_100%)] p-6 shadow-[0_20px_48px_rgba(45,33,15,0.08)] md:p-10">
          <Reveal className="max-w-3xl">
            <span className="section-label !mx-0">Commercial Terms</span>
            <h2 className="heading-2 mt-4 text-[#404040]">
              Partner Rates & Commission
            </h2>
            <p className="body-text mt-4">
              All rates are fixed and agreed upfront. No hidden fees, no late
              surprises, and a commercial structure that remains easy to explain
              to your team.
            </p>
          </Reveal>

          <Reveal className="mt-8 overflow-x-auto" amount={0.28}>
            <table className="min-w-full overflow-hidden rounded-[24px] border border-[#E5D7C4] bg-white shadow-[0_14px_34px_rgba(45,33,15,0.06)]">
              <thead className="bg-[#F8F1E7]">
                <tr>
                  <th className="px-5 py-4 text-left text-[12px] font-manrope-bold uppercase tracking-[0.14em] text-[#7B6034]">
                    Booking Type
                  </th>
                  <th className="px-5 py-4 text-left text-[12px] font-manrope-bold uppercase tracking-[0.14em] text-[#7B6034]">
                    Partner Rate
                  </th>
                  <th className="px-5 py-4 text-left text-[12px] font-manrope-bold uppercase tracking-[0.14em] text-[#7B6034]">
                    Commission
                  </th>
                </tr>
              </thead>
              <tbody>
                {commissionRows.map((row, index) => (
                  <tr
                    key={row.bookingType}
                    className={
                      index !== commissionRows.length - 1
                        ? "border-b border-[#EFE4D4]"
                        : ""
                    }
                  >
                    <td className="px-5 py-4 text-[15px] font-manrope-bold text-[#1F1F1F]">
                      {row.bookingType}
                    </td>
                    <td className="px-5 py-4 text-[15px] text-[#5E5A53]">
                      {row.partnerRate}
                    </td>
                    <td className="px-5 py-4 text-[15px] text-[#5E5A53]">
                      {row.commission}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </div>

      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="section-label">Questions</span>
          <h2 className="heading-2 mt-4 text-[#404040]">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <RevealGroup
          className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          amount={0.26}
        >
          {faqs.map((item) => (
            <div
              key={item.question}
              className="rounded-[28px] border border-[#E7E1D8] bg-white p-6 shadow-[0_16px_40px_rgba(25,25,25,0.06)]"
            >
              <h3 className="heading-3 text-[#404040]">{item.question}</h3>
              <p className="card-text mt-3">{item.answer}</p>
            </div>
          ))}
        </RevealGroup>
      </div>

      <div id="partner-form" className="container scroll-mt-32">
        <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr] xl:items-start">
          <Reveal className="rounded-[36px] border border-[#E8D9C4] bg-[linear-gradient(180deg,#FFFFFF_0%,#FAF4EC_100%)] p-6 shadow-[0_20px_48px_rgba(45,33,15,0.08)] md:p-10">
            <span className="section-label !mx-0">Become a Partner</span>
            <h2 className="heading-2 mt-4 text-[#404040]">
              Join the travel professionals who trust {businessName}
            </h2>
            <p className="body-text mt-4">
              Send your application and we&apos;ll come back with the commercial
              structure, workflow, and direct booking contact.
            </p>

            {status === "error" ? (
              <p className="mt-5 rounded-[16px] border border-red-200 bg-red-50 px-4 py-3 text-[14px] text-red-700">
                Something went wrong while sending the application. Please try
                again or contact us directly on WhatsApp.
              </p>
            ) : null}

            <form className="mt-8" onSubmit={handleSubmit}>
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="font-manrope-bold text-[15px] text-[#1F1F1F]"
                  >
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputCls("fullName")}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="companyName"
                    className="font-manrope-bold text-[15px] text-[#1F1F1F]"
                  >
                    Company Name *
                  </label>
                  <input
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputCls("companyName")}
                    required
                  />
                </div>
              </div>

              <fieldset className="mt-6">
                <legend className="font-manrope-bold text-[15px] text-[#1F1F1F]">
                  Company Type *
                </legend>
                <div className="mt-3 grid gap-3 md:grid-cols-2">
                  {companyTypes.map((option) => {
                    const checked = formData.companyType === option;

                    return (
                      <label
                        key={option}
                        className={`cursor-pointer rounded-[18px] border p-4 transition-all duration-200 ${
                          checked
                            ? "border-[#C9A874] bg-[#FCF7EF] shadow-[0_12px_24px_rgba(109,88,48,0.08)]"
                            : "border-[#E9DECF] bg-white/90 hover:border-[#DCC8A9]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="companyType"
                          value={option}
                          checked={checked}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span className="text-[15px] font-manrope-bold text-[#404040]">
                          {option}
                        </span>
                      </label>
                    );
                  })}
                </div>
                {showError("companyType") ? (
                  <p className="mt-2 text-[13px] text-red-600">
                    Please select a company type.
                  </p>
                ) : null}
              </fieldset>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="country"
                    className="font-manrope-bold text-[15px] text-[#1F1F1F]"
                  >
                    Country *
                  </label>
                  <input
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputCls("country")}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="font-manrope-bold text-[15px] text-[#1F1F1F]"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputCls("email")}
                    required
                  />
                </div>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="font-manrope-bold text-[15px] text-[#1F1F1F]"
                  >
                    Phone / WhatsApp *
                  </label>
                  <div className="mt-2">
                    <PhoneInput
                      countryCode={countryCode}
                      phone={formData.phone}
                      onCountryChange={setCountryCode}
                      onPhoneChange={handleChange}
                      onBlur={(e) => setTouched((prev) => ({ ...prev, phone: true }))}
                      error={showError("phone")}
                    />
                  </div>
                  {showError("phone") && (
                    <span className="text-xs text-red-600 mt-1">{errors.phone}</span>
                  )}
                </div>

                <fieldset>
                  <legend className="font-manrope-bold text-[15px] text-[#1F1F1F]">
                    Estimated Monthly Bookings *
                  </legend>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    {monthlyBookingRanges.map((option) => {
                      const checked = formData.monthlyBookings === option;

                      return (
                        <label
                          key={option}
                          className={`cursor-pointer rounded-[18px] border p-4 text-center transition-all duration-200 ${
                            checked
                              ? "border-[#C9A874] bg-[#FCF7EF] shadow-[0_12px_24px_rgba(109,88,48,0.08)]"
                              : "border-[#E9DECF] bg-white/90 hover:border-[#DCC8A9]"
                          }`}
                        >
                          <input
                            type="radio"
                            name="monthlyBookings"
                            value={option}
                            checked={checked}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <span className="text-[15px] font-manrope-bold text-[#404040]">
                            {option}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                  {showError("monthlyBookings") ? (
                    <p className="mt-2 text-[13px] text-red-600">
                      Please select a monthly booking range.
                    </p>
                  ) : null}
                </fieldset>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="clientSummary"
                  className="font-manrope-bold text-[15px] text-[#1F1F1F]"
                >
                  Tell us about your clients
                </label>
                <textarea
                  id="clientSummary"
                  name="clientSummary"
                  value={formData.clientSummary}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={5}
                  className={inputCls("clientSummary")}
                  placeholder="Luxury FIT, airport arrivals, event guests, concierge requests, executive travel..."
                />
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group inline-flex cursor-pointer items-center gap-3 rounded-[18px] bg-[linear-gradient(180deg,#F8F3EC_0%,#E8D9C5_100%)] px-6 py-3 font-manrope-bold text-[15px] text-[#6D5830] shadow-[0_14px_30px_-8px_rgba(109,88,48,0.28),inset_0_1px_0_rgba(255,255,255,0.8)] transition-all duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <span>
                    {status === "loading"
                      ? "Sending application..."
                      : "Send Partner Application"}
                  </span>
                  {status !== "loading" ? (
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#E4D4BF] bg-[linear-gradient(180deg,#F8F0E4_0%,#EFDFC8_100%)] text-[14px] text-[#6D5830] transition-transform duration-200 group-hover:translate-x-0.5">
                      →
                    </span>
                  ) : null}
                </button>
              </div>
            </form>
          </Reveal>

          <RevealGroup className="grid gap-6" stagger={0.08}>
            <div className="rounded-[32px] border border-[#E8D9C4] bg-[linear-gradient(160deg,#FBF3E5_0%,#F5E6CC_100%)] p-6 shadow-[0_24px_56px_rgba(45,33,15,0.10)]">
              <span className="section-label !mx-0">Prefer to talk first?</span>
              <h3 className="heading-3 mt-4 text-[#1F1F1F]">
                We can discuss your client profile and booking workflow first.
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#5C4A2E]">
                WhatsApp is the fastest route if you want to qualify the
                partnership before sending the form.
              </p>
              <div className="mt-6 space-y-4 rounded-[24px] border border-[#E6D6BF] bg-white/70 p-5">
                <div>
                  <p className="text-[12px] font-manrope-bold uppercase tracking-[0.14em] text-[#8A6B3B]">
                    WhatsApp
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block text-[16px] text-[#404040] transition-colors duration-200 hover:text-[#111111]"
                  >
                    {contactPhoneDisplay}
                  </a>
                </div>
                <div>
                  <p className="text-[12px] font-manrope-bold uppercase tracking-[0.14em] text-[#8A6B3B]">
                    Email
                  </p>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="mt-2 block text-[16px] text-[#404040] transition-colors duration-200 hover:text-[#111111]"
                  >
                    {contactEmail.toLowerCase()}
                  </a>
                </div>
                <div>
                  <p className="text-[12px] font-manrope-bold uppercase tracking-[0.14em] text-[#8A6B3B]">
                    Response time
                  </p>
                  <p className="mt-2 text-[16px] text-[#404040]">
                    Within 15 minutes
                  </p>
                </div>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-[18px] bg-[#23C063] px-5 py-3 font-manrope-bold text-[15px] text-white shadow-[0_12px_24px_rgba(35,192,99,0.24)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1DAA57]"
              >
                WhatsApp Us Now
              </a>
            </div>

            <div className="rounded-[32px] border border-[#E7E1D8] bg-white p-6 shadow-[0_16px_40px_rgba(25,25,25,0.06)]">
              <span className="inline-flex rounded-full border border-[#E3D3BC] bg-[#F8F1E7] px-3 py-1 text-[11px] font-manrope-bold uppercase tracking-[0.14em] text-[#7B6034]">
                Ideal fit
              </span>
              <h3 className="heading-3 mt-4 text-[#404040]">
                Best suited for premium travel workflows
              </h3>
              <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-[#666666]">
                <li>Airport arrivals and departures</li>
                <li>VIP FIT clients and executive transfers</li>
                <li>Monaco and Cannes event movement</li>
                <li>Hotel, villa, yacht, and concierge logistics</li>
              </ul>
            </div>
          </RevealGroup>
        </div>
      </div>

      <div className="container pt-0">
        <Reveal className="rounded-[36px] border border-[#E8D9C4] bg-[linear-gradient(180deg,#FFFFFF_0%,#FAF4EC_100%)] p-6 text-center shadow-[0_20px_48px_rgba(45,33,15,0.08)] md:p-10">
          <span className="section-label">Final CTA</span>
          <h2 className="heading-2 mt-4 text-[#404040]">
            Prefer to talk before applying?
          </h2>
          <p className="body-text mx-auto mt-4 max-w-2xl">
            We&apos;re happy to jump on a quick call or WhatsApp conversation to
            discuss how the partnership can work for your agency, concierge
            desk, or events team.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-[18px] bg-[#23C063] px-6 py-3 font-manrope-bold text-[15px] text-white shadow-[0_12px_24px_rgba(35,192,99,0.24)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1DAA57]"
            >
              WhatsApp Us Now
            </a>
            <a
              href={`tel:${contactPhone}`}
              className="inline-flex items-center justify-center rounded-[18px] border border-[#E3D5C2] bg-white px-6 py-3 font-manrope-bold text-[15px] text-[#6D5830] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FAF6EF]"
            >
              Call {contactPhoneDisplay}
            </a>
          </div>
        </Reveal>
      </div>

      <div className="container">
        <Footer />
      </div>

      {openModal ? (
        <div
          ref={backdropRef}
          className="fixed inset-0 z-50 grid place-items-center bg-[#1F1610]/50 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="partner-modal-title"
          onClick={closeModal}
        >
          <div
            ref={modalRef}
            className="max-w-md rounded-[28px] border border-[#E8DCCB] bg-[linear-gradient(160deg,#FBF3E5_0%,#F5E6CC_100%)] p-7 shadow-[0_30px_80px_rgba(45,33,15,0.25),inset_0_1px_0_rgba(255,255,255,0.8)]"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="inline-flex items-center rounded-full border border-[#E7D9BF] bg-white/90 px-3.5 py-1.5 text-[12px] font-manrope-bold uppercase tracking-[0.08em] text-[#6D5830]">
              Application sent
            </span>
            <h3
              id="partner-modal-title"
              className="mt-4 text-[24px] font-manrope-bold tracking-[-0.02em] text-[#111111]"
            >
              Thank you
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-[#5C4A2E]">
              Your partner application has been sent. We&apos;ll review it and
              come back to you shortly.
            </p>
            <div className="mt-7 flex flex-wrap justify-end gap-3">
              <Link
                href="/"
                className="rounded-[14px] border border-[#E4D4BF] bg-white/80 px-5 py-2.5 text-[14px] font-manrope-bold text-[#6D5830] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white"
              >
                Back Home
              </Link>
              <button
                onClick={closeModal}
                className="rounded-[14px] bg-[linear-gradient(180deg,#F8F3EC_0%,#E8D9C5_100%)] px-5 py-2.5 text-[14px] font-manrope-bold text-[#6d5830] shadow-[0_10px_22px_-6px_rgba(109,88,48,0.28),inset_0_1px_0_rgba(255,255,255,0.8)] transition-all duration-200 hover:-translate-y-0.5"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
