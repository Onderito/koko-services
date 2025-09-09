"use client";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import {
  heroSection,
  imgOnHover,
  buttonAnimation,
  heroScroll,
} from "../animation/hero";
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
      buttonAnimation();
    }, sectionRef); // <-- animations limitées à ce composant

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  return (
    <div className="mt-14 md:mt-15 xl:mt-2" ref={sectionRef}>
      <div className="absolute inset-0 -z-10 w-full h-[700px] md:h-[900px] ">
        <Image
          className="rounded-b-[20px]"
          src="/bg-layout/bg-hero.jpg"
          alt="Luxury car driving along the French Riviera coastline"
          quality={85}
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
      </div>
      <div className="flex flex-col justify-center items-center hero-content">
        <span
          style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }}
          className="hero-span rounded-4xl bg-[#404040] inner-shadow-white p-2 font-manrope-bold text-[12px] xl:text-[14px] tracking-[0.01em] text-white w-fit"
        >
          Always ready to drive you
        </span>
        <h1 className=" heading-1 text-center  mt-4">
          Experience the French <br /> Riviera in{" "}
          <span className="gradient-text bg-gradient-to-b from-[#FFFFFF] from-0% to-[#404040] to-100% text-transparent bg-clip-text">
            style
          </span>
        </h1>
        <p className="description body-text text-center mt-4">
          Private transfers. Unmatched comfort. Absolute peace of mind.
        </p>
        <div className=" relative ">
          <Link href="/contact-me">
            <button className="bg-[#404040] !cursor-pointer inner-shadow-white py-4 px-6 font-manrope-bold text-[16px] tracking-[0.01em] text-white rounded-xl mt-8 button ">
              <span className="button-content inline-block !cursor-pointer">
                Plan Your Transfer
              </span>
            </button>
          </Link>
          <div className="svg rounded-full absolute bg-[#404040] right-[-40px] bottom-[-40px] p-2 border-2 border-white shadow-lg">
            <svg
              className="w-6 h-6 "
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.8867 15.5L9.21174 10.3875C9.13643 10.0582 9.2357 9.71335 9.47455 9.47449C9.71341 9.23564 10.0583 9.13637 10.3876 9.21168L15.5001 10.8867C15.6834 10.9143 15.825 11.0622 15.8446 11.2466C15.8642 11.431 15.7569 11.6053 15.5834 11.6708L13.1801 12.7642C12.9916 12.8469 12.8411 12.9974 12.7584 13.1858L11.6667 15.5892C11.6012 15.7626 11.4269 15.87 11.2425 15.8504C11.0581 15.8308 10.9102 15.6892 10.8826 15.5058L10.8867 15.5Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.46008 10.0892C5.8743 10.0892 6.21008 9.7534 6.21008 9.33919C6.21008 8.92497 5.8743 8.58919 5.46008 8.58919V10.0892ZM4.16675 8.58919C3.75253 8.58919 3.41675 8.92497 3.41675 9.33919C3.41675 9.7534 3.75253 10.0892 4.16675 10.0892V8.58919ZM10.0901 4.16669C10.0901 3.75247 9.7543 3.41669 9.34008 3.41669C8.92587 3.41669 8.59008 3.75247 8.59008 4.16669H10.0901ZM8.59008 5.46002C8.59008 5.87423 8.92587 6.21002 9.34008 6.21002C9.7543 6.21002 10.0901 5.87423 10.0901 5.46002H8.59008ZM13.5279 6.21202C13.8208 5.91912 13.8208 5.44425 13.5279 5.15136C13.235 4.85846 12.7601 4.85846 12.4673 5.15136L13.5279 6.21202ZM11.5506 6.06802C11.2577 6.36092 11.2577 6.83579 11.5506 7.12868C11.8435 7.42158 12.3184 7.42158 12.6112 7.12868L11.5506 6.06802ZM7.12625 12.6137C7.41914 12.3208 7.41914 11.8459 7.12624 11.553C6.83335 11.2601 6.35848 11.2601 6.06558 11.553L7.12625 12.6137ZM5.14892 12.4697C4.85602 12.7626 4.85603 13.2375 5.14892 13.5304C5.44181 13.8232 5.91669 13.8232 6.20958 13.5304L5.14892 12.4697ZM6.20958 5.15386C5.91669 4.86096 5.44181 4.86096 5.14892 5.15386C4.85603 5.44675 4.85602 5.92162 5.14892 6.21452L6.20958 5.15386ZM6.06558 7.13118C6.35848 7.42408 6.83335 7.42408 7.12624 7.13118C7.41914 6.83829 7.41914 6.36342 7.12625 6.07052L6.06558 7.13118ZM5.46008 9.33919V8.58919H4.16675V9.33919V10.0892H5.46008V9.33919ZM9.34008 4.16669H8.59008V5.46002H9.34008H10.0901V4.16669H9.34008ZM12.9976 5.68169L12.4673 5.15136L11.5506 6.06802L12.0809 6.59835L12.6112 7.12868L13.5279 6.21202L12.9976 5.68169ZM6.59591 12.0834L6.06558 11.553L5.14892 12.4697L5.67925 13L6.20958 13.5304L7.12625 12.6137L6.59591 12.0834ZM5.67925 5.68419L5.14892 6.21452L6.06558 7.13118L6.59591 6.60085L7.12625 6.07052L6.20958 5.15386L5.67925 5.68419Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        <Image
          className="mt-16 rounded-[30px] border-5 xl:border-10 xl:w-full border-white shadow-lg img relative z-50"
          src="/bg-layout/nice-hero.webp"
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRiIAAABXRUJQVlA4ICgAAABwAgCdASoEAAQA..."
          alt="Aerial view of Nice, France with the Mediterranean sea and Promenade des Anglais"
          quality={85}
          priority
          width={700}
          height={450}
          sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 75vw, 700px"
          style={{
            width: '100%',
            height: 'auto'
          }}
        />
      </div>
    </div>
  );
}
