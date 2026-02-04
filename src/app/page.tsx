import HeroSection from "./landing/hero-section";
import Services from "./landing/services";
import Cars from "./landing/cars";
import Blogs from "./landing/blogs";
import Pricing from "./landing/pricing";
import Vip from "./landing/vip";
import Footer from "./layout/footer";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - Koko Limo",
  description:
    "Explore our driver services: airport transfers, hourly hire, events & more.",
};

const Performances = dynamic(() => import("./landing/performances"), {
  loading: () => <p>Loading…</p>,
});

export default function Home() {
  return (
    <>
      <div className="hero-container">
        <HeroSection />
      </div>
      <div className="container">
        <Services />
      </div>
      <Performances />
      <div className="container">
        <Cars />
      </div>
      <div className="container">
        <Blogs />
      </div>
      <div className="container">
        <Pricing />
      </div>
      <div className="container">
        <Vip />
      </div>
      <div className="container">
        <Footer />
      </div>
    </>
  );
}
