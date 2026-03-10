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
    <div className="mt-14 md:mt-15 xl:mt-2" ref={sectionRef}>
      <div className="absolute inset-0 -z-10 w-full h-[700px] md:h-[900px] ">
        <Image
          className="rounded-b-[20px]"
          src="/assets/images/hero/bg-hero.jpg"
          alt="Luxury car driving along the French Riviera coastline"
          quality={85}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
      <div className="flex flex-col justify-center items-center hero-content">
        <span
          style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }}
          className="hero-span overflow-hidden rounded-full bg-[#2B2B2B] px-3.5 py-1.5 font-manrope-bold text-[11px] xl:text-[12px] uppercase tracking-[0.14em] text-white/90 w-fit"
        >
          Where timing meets comfort
        </span>
        <h1 className="heading-1 text-center  mt-4">
          Experience the French <br /> Riviera in {""}
          <span>style</span>
        </h1>
        <p className="description body-text text-center mt-4">
          Private chauffeur service for airport transfers, business travel and
          tailored <br className="hidden lg:block" /> journeys across Nice,
          Cannes, Monaco and Saint-Tropez.
        </p>
        <div className="relative">
          <Link href="/contact-me">
            <motion.button
              whileHover={{
                y: -2,
                scale: 1.015,
                boxShadow: "0 18px 34px rgba(0,0,0,0.22)",
              }}
              whileTap={{ scale: 0.985 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 24,
                mass: 0.9,
              }}
              className="button group mt-8 inline-flex items-center gap-3 overflow-hidden rounded-[18px] bg-[linear-gradient(180deg,#F8F3EC_0%,#E8D9C5_100%)] px-6 py-3 font-manrope-bold text-[16px] tracking-[-0.02em] text-[#111111] shadow-[0_14px_28px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.72)] !cursor-pointer"
            >
              <motion.span
                whileHover={{ x: 2 }}
                transition={{
                  type: "spring",
                  stiffness: 320,
                  damping: 22,
                  mass: 0.7,
                }}
                className="relative inline-block !cursor-pointer"
              >
                Request a Quote
              </motion.span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#111111] text-[14px] text-white transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </motion.button>
          </Link>
        </div>

        <Image
          className="mt-16 rounded-[30px] border-5 xl:border-10 xl:w-full border-white shadow-lg img relative z-50"
          src="/assets/images/hero/nice-hero.webp"
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRiIAAABXRUJQVlA4ICgAAABwAgCdASoEAAQA..."
          alt="Aerial view of Nice, France with the Mediterranean sea and Promenade des Anglais"
          quality={85}
          width={700}
          height={450}
          sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 75vw, 700px"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
}
