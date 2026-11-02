// "A Simple Process To Get You On The Road", cloned from Anti (IMG_8800, crop 07) at the user's request (21 Oct 2026):
// four numbered steps in gold circles joined by a line, a handwritten "It's that simple!", and a photo panel with an
// angled edge carrying a real client quote. The photo is a placeholder until the user sends a photo of Koko.
// The step texts restate facts published elsewhere on the site (fixed fare, flight tracking, name sign, one hour of
// waiting, driver in suit, water and chargers on board).

import Image from "next/image";
import { BadgeEuro, Car, MapPinned, PlaneLanding } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { Stars } from "../ui/kit";
import { tripadvisorListingUrl } from "./reviews";
import { script } from "../fonts";

const steps = [
  { icon: MapPinned, title: "Tell Us Your Trip", text: "Pickup, destination, date, time and passengers in the booking bar, or on WhatsApp." },
  { icon: BadgeEuro, title: "Receive Your Fixed Fare", text: "Your chauffeur confirms the fixed fare before the ride. No payment online." },
  { icon: PlaneLanding, title: "Meet Your Chauffeur", text: "Flight tracked, name sign at arrivals and one hour of waiting included." },
  { icon: Car, title: "Enjoy The Ride", text: "A Mercedes, a professional driver in suit, water and phone chargers on board." },
];

export default function Steps() {
  return (
    <section aria-labelledby="steps-title" data-nav-tone="light" className="overflow-hidden bg-white text-[#101828]">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-[1fr_1fr] lg:items-stretch">
        <div>
          <h2 id="steps-title" className="max-w-[520px] text-[30px] font-bold leading-[1.12] tracking-[-0.02em] md:text-[40px]" style={{ textWrap: "balance" }}>
            A Simple Process To Get You On The <span className="text-[#d4b471]">Road</span>
          </h2>
          <p className="mt-3 max-w-[480px] text-[16px] leading-relaxed text-[#667085] md:text-[17px]">
            Booking a chauffeur should be easy, not complicated. Here&apos;s how it works.
          </p>

          <ol className="mt-10 space-y-8">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <li key={s.title} className="relative flex gap-5">
                  {i < steps.length - 1 && <span aria-hidden="true" className="absolute left-[19px] top-11 h-[calc(100%-4px)] w-px bg-[#e4d3ad]" />}
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#8a6a2e] text-[15px] font-bold text-white">{i + 1}</span>
                  <span aria-hidden="true" className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-[#101828] shadow-[0_4px_16px_rgba(16,24,40,0.10)]">
                    <Icon size={20} strokeWidth={1.7} />
                  </span>
                  <div className="pt-0.5">
                    <h3 className="text-[17px] font-semibold text-[#101828]">{s.title}</h3>
                    <p className="mt-1 max-w-[380px] text-[14px] leading-relaxed text-[#667085]">{s.text}</p>
                  </div>
                </li>
              );
            })}
          </ol>

          <p className={`${script.className} mt-10 -rotate-3 text-[40px] leading-none text-[#c9a560]`}>It&apos;s that simple!</p>
        </div>

        <div className="relative min-h-[460px] overflow-hidden rounded-[12px] [clip-path:polygon(14%_0,100%_0,100%_100%,14%_100%,0_50%)] max-lg:[clip-path:none]">
          <Image src="/assets/images/hero/home-hero-passenger-man.jpg" alt="Passenger in the back seat of a chauffeur-driven car at night" fill sizes="(min-width: 1024px) 620px, 100vw" className="object-cover object-[70%_50%]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,25,34,0)_25%,rgba(13,25,34,0.85)_75%)]" />
          <figure className="absolute inset-x-0 bottom-0 p-8 pl-[18%] text-white md:p-10 md:pl-[20%]">
            <span aria-hidden="true" className="block font-serif text-[64px] leading-none text-[#d4b471]">&ldquo;</span>
            <blockquote className="-mt-4 text-[17px] leading-relaxed md:text-[19px]">
              My family group of four scheduled with Marie on the day we arrived in Nice. It was the perfect way to acclimate while doing something fun and
              interesting.
            </blockquote>
            <figcaption className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="text-[15px] font-semibold">Cyndi K</span>
              <Stars className="[&_svg]:h-4 [&_svg]:w-4" />
              {/* The quote's source, so visitors can check it (user, 21 Oct 2026). */}
              <a
                href={`${tripadvisorListingUrl}#REVIEWS`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read Cyndi K's review on Tripadvisor"
                className="group inline-flex items-center gap-1 text-[13px] font-semibold text-[#d4b471] transition-colors hover:text-white"
              >
                Tripadvisor
                <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
