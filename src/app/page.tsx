"use client"

import SmoothScrollWrapper from "./animation/scrollWrapper";
import HeroSection from "./landing/hero-section";
import Services from "./landing/services";
import Performance from "./landing/performances";
import Cars from "./landing/cars";
import Blogs from "./landing/blogs";
import Pricing from "./landing/pricing";
import Vip from "./landing/vip";
import Footer from "./layout/footer";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";


export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);

    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const targetId = (link as HTMLAnchorElement).getAttribute("href");
        if (targetId) {
          gsap.to(window, {
            duration: 1.2,
            scrollTo: targetId,
            ease: "power2.inOut",
          });
        }
      });
    });
  }, []);


  return (
    <>
      <SmoothScrollWrapper>
        <section className="container mx-auto px-2 py-16 xl:py-32 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
          <HeroSection />
        </section>
        <section id="services" className="container mx-auto px-2 py-10 xl:py-24 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
          <Services />
        </section>
        <Performance />
        <section id="cars" className="container mx-auto px-2 py-10 xl:py-24 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
          <Cars />
        </section>
        <section id="blogs" className="container mx-auto px-2 py-10 xl:py-24 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
          <Blogs />
        </section>
        <section id="pricing" className="container mx-auto px-2 py-10 xl:py-24 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
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
