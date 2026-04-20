import Image from "next/image";
import Link from "next/link";
import { homeServiceCards } from "../data/service-pages";
import { Reveal, RevealGroup } from "../ui/reveal";

export default function Services() {
  const ctaLabels = ["Book my transfer", "Book by the hour", "Plan my tour"];

  return (
    <div className="main-container relative z-10 flex-center-column section-2">
      <Reveal className="flex w-full flex-col items-center">
        <span className="section-label">Our Services</span>
        <h2 className="text-[#404040] heading-2 mt-4 text-center">
          What We Offer
        </h2>
      </Reveal>
      <RevealGroup className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
        {homeServiceCards.map((card, index) => (
          <div
            key={index}
            className="card group flex h-full flex-col overflow-hidden rounded-3xl border border-[#E7E7E7] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <Link
              href={card.link}
              scroll={true}
              aria-label={`open ${card.title} service details`}
              className="relative block aspect-[4/4.2] overflow-hidden"
            >
              <Image
                src={card.image}
                alt={`${card.title} service illustration`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 90vw, 
                       (max-width: 768px) 85vw,
                       (max-width: 1024px) 40vw,
                       400px"
                loading="lazy"
                quality={80}
              />
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/45 via-black/18 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/12 to-transparent" />
              <div className="absolute left-5 top-5">
                <span className="inline-flex rounded-full border border-white/25 bg-black/30 px-3 py-1 text-[12px] font-manrope-bold uppercase tracking-[0.12em] text-white shadow-lg backdrop-blur-md">
                  {card.kicker}
                </span>
              </div>
            </Link>

            <div className="flex flex-1 flex-col p-6">
              <div>
                <h3 className="heading-3 text-[#404040]">
                  <Link href={card.link} className="hover:text-[#1F1F1F]">
                    {card.title}
                  </Link>
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-gray-600 flex-grow">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 border-t border-[#EFEFEF] pt-6">
                <div className="flex justify-center items-center w-full gap-4">
                  <Link
                    aria-label={`explore the ${card.title} service`}
                    scroll={true}
                    href={card.link}
                    className="inline-flex w-[40%] items-center justify-center rounded-xl border border-[#DADADA] bg-white px-5 py-3 text-center font-manrope-bold text-[14px] tracking-[-0.01em] text-[#404040] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#F7F7F7]"
                  >
                    Explore more
                    <span className="sr-only"> about {card.title}</span>
                  </Link>
                  <Link
                    aria-label={`request a quote for ${card.title}`}
                    className="w-[60%]"
                    href={"/contact-me"}
                  >
                    <span className="inline-flex w-full items-center justify-center rounded-xl border border-[#404040] bg-[#404040] px-5 py-3 font-manrope-bold text-[14px] tracking-[-0.01em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2F2F2F]">
                      {ctaLabels[index]}
                      <span className="sr-only"> for {card.title}</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </RevealGroup>
    </div>
  );
}
