"use client";
import Image from "next/image";
import gsap from "gsap";
import { motion } from "motion/react";
import { heroSection } from "../animation/hero";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function HeroSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      heroSection();
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative mt-16 md:mt-20 xl:mt-4">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-12 xl:gap-16">
        <div className="hero-content flex flex-col items-start text-left">
          <div className="proof inline-flex items-center rounded-full border border-[#E7D9BF] bg-white/90 px-4 py-2 shadow-[0_10px_24px_rgba(135,108,61,0.14),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-sm">
            <span className="text-[13px] leading-tight text-[#404040] xl:text-[14px]">
              <span className="font-manrope-bold text-[#1F1F1F]">10 years</span>{" "}
              of chauffeur experience on the Riviera
            </span>
          </div>
          <h1 className="heading-1 mt-5 text-left !text-[#111111] xl:text-[64px] text-pretty">
            Luxury Chauffeur Service on the French Riviera
          </h1>
          <p className="description body-text mt-5 max-w-xl text-left text-[#404040]">
            Private chauffeur service for airport transfers, business travel,
            and tailored journeys across Nice, Cannes, Monaco, and Saint-Tropez.
          </p>

          <Link href="/contact-me">
            <motion.button
              whileHover={{
                y: -2,
                boxShadow:
                  "0 20px 40px -12px rgba(109,88,48,0.35), inset 0 1px 0 rgba(255,255,255,0.8)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 24,
                mass: 0.8,
              }}
              className="button group mt-6 inline-flex items-center gap-3 overflow-hidden rounded-[18px] bg-[linear-gradient(180deg,#F8F3EC_0%,#E8D9C5_100%)] px-6 py-3 font-manrope-bold text-[16px] tracking-[-0.02em] text-[#111111] shadow-[0_14px_30px_-8px_rgba(109,88,48,0.28),inset_0_1px_0_rgba(255,255,255,0.8)] !cursor-pointer"
            >
              <span className="relative inline-block text-[#6d5830]">
                Reserve my driver
              </span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full section-label text-[14px] text-[#6d5830] transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5">
                →
              </span>
            </motion.button>
          </Link>
        </div>

        <div className="img relative w-full">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[32px] border border-[#E7E1D8] bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F1E8_100%)] p-2.5 shadow-[0_24px_60px_rgba(45,33,15,0.12)] md:p-3">
            <div className="relative h-full w-full overflow-hidden rounded-[22px]">
              <Image
                src="/assets/images/hero-img.webp"
                placeholder="blur"
                blurDataURL="data:image/webp;base64,UklGRiIAAABXRUJQVlA4ICgAAABwAgCdASoEAAQA..."
                alt="Aerial view of Nice, France with the Mediterranean sea and Promenade des Anglais"
                quality={85}
                priority
                fetchPriority="high"
                fill
                sizes="(max-width: 1024px) 90vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
