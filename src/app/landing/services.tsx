// "What We Offer", laid out as Anti's "Find Your Perfect Ride" (IMG_8800): white section, heading on the left,
// photo cards with the picture inset, a gold arrow and a gold pill. Texts, links and alts unchanged (protected page).

import Link from "next/link";
import { homeServiceCards } from "../data/service-pages";
import { AntiCard, AntiHeading, AntiSection, GoldArrow, PhotoTag } from "../ui/anti";
import ArrowButton from "../ui/arrow-button";

export default function Services() {
  return (
    <AntiSection tone="white" labelledBy="services-title">
      <AntiHeading id="services-title" title="What We Offer" />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {homeServiceCards.map(card => (
          <AntiCard
            key={card.title}
            href={card.link}
            image={card.image}
            imageAlt={`${card.title} — luxury chauffeur service on the French Riviera`}
            imageLinkLabel={`open ${card.title} service details`}
            imageSizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
            badge={<PhotoTag>{card.kicker}</PhotoTag>}
          >
            <h3 className="text-[19px] font-semibold tracking-[-0.01em] text-[#101828]">
              {/* The whole card opens the service page; "Book now" stays its own button above this link. */}
              <Link href={card.link} className="transition-colors after:absolute after:inset-0 after:rounded-[10px] after:content-[''] group-hover:text-[#9a7a3e]">
                {card.title}
              </Link>
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-[#667085]">{card.description}</p>
            <div className="relative z-10 mt-auto flex items-center justify-between gap-3 pt-6">
              <Link href={card.link} aria-label={`explore the ${card.title} service`} className="inline-flex items-center gap-3 text-[15px] font-semibold text-[#101828]">
                <GoldArrow />
                Explore more
                <span className="sr-only"> about {card.title}</span>
              </Link>
              <ArrowButton text="Book now" href="/contact-me" size="sm" aria-label={`request a quote for ${card.title}`} />
            </div>
          </AntiCard>
        ))}
      </div>
    </AntiSection>
  );
}
