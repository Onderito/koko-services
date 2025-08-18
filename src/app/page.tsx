"use client"

import SmoothScrollWrapper from "./animation/scrollWrapper";
import HeroSection from "./landing/hero-section";
import Services from "./landing/services";
import Performance from "./landing/performances";
import Cars from "./landing/cars";
import Blogs from "./landing/blogs";
import Pricing from "./landing/pricing";
import Vip from "./landing/vip";
import NavBar from "./layout/navBar";
import Footer from "./layout/footer";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";


export default function Home() {
  const pricingRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const ourCarsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
  }, [])

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      gsap.to(window, { // On anime la fenêtre (le scroll global)
        duration: 1.5, // Durée de l'animation de scroll (ajustez si besoin)
        scrollTo: ref.current, // La cible vers laquelle scroller
        ease: "power2.inOut", // Un effet de "douceur" pour le scroll
      });
    }
  };

  return (
    <>
      <SmoothScrollWrapper>
        <NavBar onScrollTo={scrollTo} refs={{ pricingRef, serviceRef, blogRef, ourCarsRef }} />
        <section className="container mx-auto px-2 py-16 xl:py-24 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
          <HeroSection />
        </section>
        <section className="container mx-auto px-2 py-10 xl:py-24 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
          <Services ref={serviceRef} />
        </section>
        <Performance />
        <section className="container mx-auto px-2 py-10 xl:py-24 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
          <Cars />
        </section>
        <section className="container mx-auto px-2 py-10 xl:py-24 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
          <Blogs />
        </section>
        <section className="container mx-auto px-2 py-10 xl:py-24 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
          <Pricing />
        </section>
        <section className="container mx-auto px-2 py-10 xl:py-24 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
          <Vip />
        </section>
        <section className="container mx-auto px-2 py-10 xl:py-24 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
          <Footer />
        </section>
      </SmoothScrollWrapper>
    </>
  );
}
