"use client"

import SmoothScrollWrapper from "./animation/scrollWrapper";
import HeroSection from "./landing/hero-section";
import Services from "./landing/services";
import Cars from "./landing/cars";
import Blogs from "./landing/blogs";
import Pricing from "./landing/pricing";
import Vip from "./landing/vip";
import Footer from "./layout/footer";
import dynamic from "next/dynamic";

const Performances = dynamic(() => import("./landing/performances"), {
  loading: () => <p>Loading…</p>,
});



export default function Home() {

  return (
    <>
      <SmoothScrollWrapper>
        <section className="container mx-auto px-4 py-16 xl:py-32 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
          <HeroSection />
        </section>
        <section id="services" className="container mx-auto px-4 py-10 xl:py-24 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
          <Services />
        </section>
        <Performances />
        <section className="container mx-auto px-4 py-10 xl:py-24 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
          <Cars />
        </section>
        <section className="container mx-auto px-4 py-10 xl:py-24 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
          <Blogs />
        </section>
        <section id="pricing" className="container mx-auto px-4 py-10 xl:py-24 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
          <Pricing />
        </section>
        <section className="container mx-auto px-4 py-10 xl:py-24 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
          <Vip />
        </section>
        <section className="container mx-auto px-4 py-10 xl:py-24 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
          <Footer />
        </section>
      </SmoothScrollWrapper>
    </>
  );
}
