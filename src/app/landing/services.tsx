import Image from "next/image";
import Link from "next/link";
import { homeServiceCards } from "../data/service-pages";
import { Reveal, RevealGroup } from "../ui/reveal";

export default function Services() {
  return (
    <div className="main-container relative z-10 flex-center-column section-2">
      <Reveal className="flex w-full flex-col items-center">
        <span className="section-label">Our Services</span>
        <h2 className="text-[#111111] heading-2 mt-4 text-center">
          What We Offer
        </h2>
      </Reveal>
      <RevealGroup className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
        {homeServiceCards.map((card, index) => (
          <div
            key={card.title}
            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#E7E7E7] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Photo */}
            <Link
              href={card.link}
              scroll
              aria-label={`open ${card.title} service details`}
              className="relative block aspect-[4/3] overflow-hidden"
            >
              <Image
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                src={card.image}
                alt={`${card.title} — luxury chauffeur service on the French Riviera`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/40 via-black/15 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/8 to-transparent" />
              <div className="absolute left-5 top-5">
                <span className="inline-flex rounded-full border border-white/25 bg-black/30 px-3 py-1 text-[12px] font-manrope-bold uppercase tracking-[0.12em] text-white shadow-lg backdrop-blur-md">
                  {card.kicker}
                </span>
              </div>
            </Link>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6">
              <div>
                <h3 className="heading-3 text-[#111111]">
                  <Link href={card.link} className="hover:text-[#1F1F1F]">
                    {card.title}
                  </Link>
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-gray-600">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 border-t border-[#EFEFEF] pt-6 flex items-center gap-3">
                <Link
                  aria-label={`explore the ${card.title} service`}
                  scroll
                  href={card.link}
                  className="inline-flex w-[48%] cursor-pointer items-center justify-center rounded-xl border border-[#E4D4BF] bg-white px-5 py-3 text-center font-manrope-bold text-[14px] tracking-[-0.01em] text-[#6D5830] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FAF6EF]"
                >
                  Explore more
                  <span className="sr-only"> about {card.title}</span>
                </Link>
                <Link
                  aria-label={`request a quote for ${card.title}`}
                  href="/contact-me"
                  className="w-[60%]"
                >
                  <span className="inline-flex w-full cursor-pointer items-center justify-center rounded-xl bg-[linear-gradient(180deg,#F8F3EC_0%,#E8D9C5_100%)] px-5 py-3 font-manrope-bold text-[14px] tracking-[-0.01em] text-[#6D5830] shadow-[0_14px_30px_-8px_rgba(109,88,48,0.28),inset_0_1px_0_rgba(255,255,255,0.8)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-8px_rgba(109,88,48,0.32),inset_0_1px_0_rgba(255,255,255,0.9)]">
                    Book now
                    <span className="sr-only"> for {card.title}</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </RevealGroup>
    </div>
  );
}
