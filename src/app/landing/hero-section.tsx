"use client";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { motion } from "motion/react";
import { heroSection, imgOnHover, heroScroll } from "../animation/hero";
gsap.registerPlugin(ScrollTrigger);

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function HeroSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      heroSection();
      heroScroll();
      imgOnHover();
    }, sectionRef); // <-- animations limitées à ce composant

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
          className="hero-span overflow-hidden rounded-4xl bg-[#404040] inner-shadow-white p-2 font-manrope-bold text-[12px] xl:text-[14px] tracking-[0.01em] text-white w-fit"
        >
          Always ready to drive you
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
                scale: 1.02,
                boxShadow: "0 16px 28px rgba(64,64,64,0.22)",
              }}
              whileTap={{ scale: 0.985 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 24,
                mass: 0.9,
              }}
              className="button mt-8 overflow-hidden rounded-xl bg-[#404040] px-6 py-4 font-manrope-bold text-[16px] tracking-[0.01em] text-white inner-shadow-white !cursor-pointer"
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
                Plan Your Transfer
              </motion.span>
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
          priority
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
