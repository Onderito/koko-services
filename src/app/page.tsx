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
        <div className="container mx-auto px-4 py-16 xl:py-32 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
          <HeroSection />
        </div>
        <div id="services" className="container mx-auto px-4 py-10 xl:py-24 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
          <Services />
        </div>
        <Performances />
        <div className="container mx-auto px-4 py-10 xl:py-24 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
          <Cars />
        </div>
        <div className="container mx-auto px-4 py-10 xl:py-24 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
          <Blogs />
        </div>
        <div id="pricing" className="container mx-auto px-4 py-10 xl:py-24 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
          <Pricing />
        </div>
        <div className="container mx-auto px-4 py-10 xl:py-24 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
          <Vip />
        </div>
        <div className="container mx-auto px-4 py-10 xl:py-24 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
          <Footer />
        </div>
      </SmoothScrollWrapper>
    </>
  );
}
