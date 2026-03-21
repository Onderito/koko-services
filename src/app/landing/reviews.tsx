"use client";

import Link from "next/link";
import { motion } from "motion/react";

const reviews = [
  {
    quote:
      "Amazing organic wineries so close to Nice. After a short ride we toured two unique locations and ended with tastings. Picture perfect.",
    author: "Lisa W",
    context: "Jul 2025 · Wineries so close to Nice!",
  },
  {
    quote:
      "MY Riviera took good care of us, was welcoming and nice. Beautiful views and exciting info about Nice, good wine and specialties from Cannes.",
    author: "Tripadvisor guest",
    context: "Jul 2024 · Wine tour",
  },
  {
    quote:
      "Perfect, well distinguish between the different procedures of the vineyards in Nice. Super guide Marie. Knowledgeful and entertaining.",
    author: "Henrik",
    context: "Fun, educational",
  },
  {
    quote:
      "My family group of four scheduled with Marie on the day we arrived in Nice. It was the perfect way to acclimate while doing something fun and interesting.",
    author: "Cyndi K",
    context: "Jun 2024 · Perfect welcome to Nice!",
  },
  {
    quote:
      "Amazing organic wineries so close to Nice. After a short ride we toured two unique locations and ended with tastings. Picture perfect.",
    author: "Lisa W",
    context: "Tripadvisor review",
  },
  {
    quote:
      "Perfect, well distinguish between the different procedures of the vineyards in Nice. Super guide Marie. Knowledgeful and entertaining.",
    author: "Henrik",
    context: "Tripadvisor review",
  },
];

const tripadvisorListingUrl =
  "https://www.tripadvisor.com/Attraction_Review-g187234-d7971865-Reviews-MY_Riviera_Tours_Transfers-Nice_French_Riviera_Cote_d_Azur_Provence_Alpes_Cote_d_.html";

type ReviewTrackProps = {
  items: typeof reviews;
  duration: number;
  reverse?: boolean;
};

function ReviewTrack({ items, duration, reverse = false }: ReviewTrackProps) {
  const duplicatedItems = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#fdfdfd] to-transparent md:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#fdfdfd] to-transparent md:w-24" />

      <motion.div
        className="flex w-max gap-4 py-2"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedItems.map((review, index) => (
          <article
            key={`${review.author}-${review.context}-${index}`}
            className="flex min-h-[240px] w-[300px] flex-col justify-between rounded-[28px] border border-[#E7E1D8] bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F1E8_100%)] p-6 shadow-[0_20px_50px_rgba(25,25,25,0.08)] md:w-[360px]"
          >
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full border border-[#D9C9AF] bg-white px-3 py-1 text-[12px] font-manrope-bold uppercase tracking-[0.12em] text-[#6D5830]">
                  Tripadvisor review
                </span>
                <span className="rounded-full bg-[#2C2C2C] px-3 py-1 text-[12px] font-manrope-bold text-white">
                  4.8 / 5
                </span>
              </div>
              <p className="mt-5 text-[18px] leading-[1.55] tracking-[-0.02em] text-[#2E2E2E]">
                <span aria-hidden="true">&ldquo;</span>
                {review.quote}
                <span aria-hidden="true">&rdquo;</span>
              </p>
            </div>

            <div className="mt-6 border-t border-[#E6DED3] pt-5">
              <p className="text-[15px] font-manrope-bold text-[#1F1F1F]">
                {review.author}
              </p>
              <p className="mt-1 text-[14px] text-[#6A6A6A]">
                {review.context}
              </p>
            </div>
          </article>
        ))}
      </motion.div>
    </div>
  );
}

export default function Reviews() {
  const firstTrack = reviews.slice(0, 3);
  const secondTrack = reviews.slice(3);

  return (
    <section
      aria-labelledby="reviews-title"
      className="relative overflow-hidden rounded-[32px] border border-[#EEE6DB] bg-[radial-gradient(circle_at_top,#FFF7EC_0%,#FFFFFF_58%)] px-4 py-10 md:px-6 md:py-14 xl:px-8"
    >
      <div className="mx-auto max-w-3xl text-center">
        <span className="section-label">
          Client Reviews
        </span>
        <motion.h2
          id="reviews-title"
          className="heading-2 mt-4 text-center text-[#404040]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          Trusted on Tripadvisor for Riviera tours and transfers
        </motion.h2>
        <motion.p
          className="body-text mt-4 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
        >
          Public traveler feedback is one of the strongest signals of trust for
          a chauffeur business, so this section now highlights your Tripadvisor
          reputation first.
        </motion.p>
      </div>

      <motion.div
        className="mx-auto mt-8 max-w-5xl rounded-[30px] border border-[#E8DDCC] bg-[linear-gradient(180deg,#FFFDF9_0%,#F7EFE3_100%)] p-5 shadow-[0_18px_48px_rgba(45,33,15,0.08)] md:mt-10 md:p-6"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
      >
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[12px] font-manrope-bold uppercase tracking-[0.16em] text-[#6D5830]">
              Tripadvisor
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <span className="text-[34px] font-manrope-bold tracking-[-0.04em] text-[#111111] md:text-[42px]">
                4.8
              </span>
              <div className="flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={index}
                    className="h-4 w-4 rounded-full bg-[#16A34A]"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span className="text-[18px] text-[#404040] md:text-[20px]">
                165 public reviews
              </span>
            </div>
            <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-gray-600 md:text-[15px]">
              The strongest social proof for this business lives on Tripadvisor,
              where travelers publicly rate the experience after tours and
              transfers in Nice and across the Riviera.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <Link
              href={tripadvisorListingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-[#111111] bg-[#111111] px-5 py-3 font-manrope-bold text-[14px] tracking-[-0.01em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2B2B2B]"
            >
              View on Tripadvisor
            </Link>
            <span className="text-center text-[12px] text-gray-500 sm:text-left">
              Based on the public Tripadvisor listing.
            </span>
          </div>
        </div>
      </motion.div>

      <div className="mt-10 space-y-4 md:mt-12 md:space-y-5">
        <ReviewTrack items={firstTrack} duration={22} />
        <ReviewTrack items={secondTrack} duration={26} reverse />
      </div>
    </section>
  );
}
