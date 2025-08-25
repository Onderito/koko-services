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



export default function Home() {

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
        <section className="container mx-auto px-2 py-10 xl:py-24 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
          <Cars />
        </section>
        <section className="container mx-auto px-2 py-10 xl:py-24 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
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
