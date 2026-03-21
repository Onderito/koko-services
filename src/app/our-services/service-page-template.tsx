"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import FooterComponent from "./footer-component";
import type { ServiceAudienceCard, ServicePageConfig } from "../data/service-pages";

function AudienceStack({
  audienceCards,
  audienceTitle,
  audienceAccent,
  audienceDescription,
}: {
  audienceCards: [ServiceAudienceCard, ServiceAudienceCard, ServiceAudienceCard];
  audienceTitle: string;
  audienceAccent: string;
  audienceDescription: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1280px)", () => {
        gsap.set([card1Ref.current, card2Ref.current, card3Ref.current], {
          transformOrigin: "50% 50%",
          force3D: true,
          willChange: "transform",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom 30%",
            scrub: 0.8,
          },
          defaults: { ease: "none" },
        });

        tl.fromTo(
          card1Ref.current,
          { yPercent: 0, rotate: 0 },
          { yPercent: -520, rotate: 15 },
          0,
        );
        tl.fromTo(
          card2Ref.current,
          { yPercent: 0, rotate: 5 },
          { yPercent: -620, rotate: -15 },
          0.2,
        );
        tl.fromTo(
          card3Ref.current,
          { yPercent: 0, rotate: -5 },
          { yPercent: -420, rotate: 15 },
          0.4,
        );
      });

      return () => mm.revert();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="container">
      <h2 className="heading-2 mt-4 text-center text-[#404040]">
        {audienceTitle} <span className="text-[#C5C5C5]">{audienceAccent}</span>
      </h2>
      <p className="body-text mt-4 text-center">{audienceDescription}</p>

      <div className="block xl:hidden">
        {audienceCards.map((card, index) => (
          <div
            key={index}
            className="relative z-10 mx-auto mt-10 flex max-w-lg flex-col items-center rounded-2xl border-[0.5px] border-[#E5E5E5] p-4"
          >
            <Image
              src={card.icon}
              alt={card.iconAlt}
              width={40}
              height={40}
              quality={100}
            />
            <h3 className="heading-3 mt-2 text-[#404040]">{card.title}</h3>
            <p className="card-text mt-4 text-center">{card.text}</p>
          </div>
        ))}
      </div>

      <div
        ref={stackRef}
        className="relative mx-auto mt-24 hidden w-fit isolate xl:block"
      >
        {[card1Ref, card2Ref, card3Ref].map((ref, index) => {
          const card = audienceCards[index];
          const rotations = ["", " rotate-5", " -rotate-5"];
          const zIndexes = [" z-8", " z-6", " z-4"];
          const positioning = index === 0 ? "relative" : "absolute inset-0";

          return (
            <div
              key={card.title}
              ref={ref}
              className={`${positioning}${rotations[index]}${zIndexes[index]} flex max-w-lg flex-col items-center rounded-2xl border-[0.5px] border-[#E5E5E5] bg-white p-4 will-change-transform`}
            >
              <Image
                src={card.icon}
                alt={card.iconAlt}
                width={40}
                height={40}
                quality={100}
              />
              <h3 className="heading-3 mt-2 text-[#404040]">{card.title}</h3>
              <p className="card-text mt-4 text-center">{card.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function LocalLinksSection({
  title,
  description,
  links,
}: {
  title: string;
  description: string;
  links: NonNullable<ServicePageConfig["localLinks"]>;
}) {
  const isSingleLink = links.length === 1;

  return (
    <div className="container">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[12px] font-manrope-bold uppercase tracking-[0.16em] text-[#8A6B3B]">
          Keep Exploring
        </p>
        <h2 className="heading-2 mt-4 text-[#404040]">{title}</h2>
        <p className="body-text mt-4">{description}</p>
      </div>

      {isSingleLink ? (
        <div className="mx-auto mt-10 max-w-3xl xl:mt-12">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center justify-between gap-5 rounded-[28px] border border-[#E7E1D8] bg-[linear-gradient(180deg,#FFFFFF_0%,#FAF4EC_100%)] p-6 shadow-[0_16px_40px_rgba(25,25,25,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(25,25,25,0.10)]"
            >
              <div>
                <span className="inline-flex rounded-full border border-[#E2D3BE] bg-[#F8F1E7] px-3 py-1 text-[12px] font-manrope-bold uppercase tracking-[0.12em] text-[#6D5830]">
                  Other page
                </span>
                <h3 className="heading-3 mt-4 text-[#404040]">{link.label}</h3>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-gray-600">
                  {link.description}
                </p>
              </div>
              <span className="shrink-0 text-[22px] text-[#8A6B3B] transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:mt-12">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-[28px] border border-[#E7E1D8] bg-[linear-gradient(180deg,#FFFFFF_0%,#FAF4EC_100%)] p-6 shadow-[0_16px_40px_rgba(25,25,25,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(25,25,25,0.10)]"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex rounded-full border border-[#E2D3BE] bg-[#F8F1E7] px-3 py-1 text-[12px] font-manrope-bold uppercase tracking-[0.12em] text-[#6D5830]">
                  Open page
                </span>
                <span className="text-[18px] text-[#6D5830] transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </div>
              <h3 className="heading-3 mt-5 text-[#404040]">{link.label}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-600">
                {link.description}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ServicePageTemplate({
  config,
}: {
  config: ServicePageConfig;
}) {
  const availableLocalLinks = config.localLinks?.filter(
    (link) => link.href !== config.path,
  );

  return (
    <>
      <div className="container flex min-h-[calc(100vh-var(--nav-clearance))] flex-col items-center justify-center gap-10 pt-[var(--nav-clearance)] xl:flex-row">
        <div className="xl:w-2/3">
          <div className="space-y-5 md:space-y-6 xl:space-y-7">
            <span className="section-label !mx-0">{config.serviceLabel}</span>
            <h1 className="heading-1">{config.heroTitle}</h1>
            <p className="body-text">{config.heroDescription}</p>
            <div className="flex gap-4">
              <Link href="/contact-me">
                <span className="inline-flex items-center justify-center rounded-xl border border-[#404040] bg-[#404040] px-5 py-3 font-manrope-bold text-[14px] tracking-[-0.01em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2F2F2F]">
                  Request a Quote
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full xl:w-2/3">
          <div className="relative min-h-[220px] w-full aspect-[16/14] rounded-3xl bg-white">
            <Image
              src={config.heroImageSrc}
              alt={config.heroImageAlt}
              fill
              priority
              className="rounded-3xl object-cover ring-6 ring-gray-100 shadow-2xl"
            />
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className="heading-2 mt-4 text-center text-[#404040]">
          {config.introTitle}
        </h2>
        <p className="body-text mt-4 text-center">{config.introDescription}</p>

        <div className="relative -z-10 flex flex-col items-center justify-center gap-10 py-10 xl:flex-row xl:py-24">
          {config.panels.map((panel) => (
            <div
              key={panel.title}
              className={`relative w-full flex-1 basis-0 flex min-h-[260px] flex-col items-center justify-start overflow-hidden rounded-2xl p-4 py-10 md:min-h-[320px] xl:h-[410px] xl:min-h-0 ${
                panel.theme === "dark"
                  ? "bg-[#404040] text-white"
                  : "border-[0.5px] border-[#E5E5E5] bg-[#F9FAFB]"
              }`}
            >
              <h3
                className={`heading-3 ${panel.theme === "dark" ? "text-white" : "text-[#404040]"}`}
              >
                {panel.title}
              </h3>
              <p
                className={`body-text relative z-20 mt-4 text-center ${
                  panel.theme === "dark" ? "text-white" : ""
                }`}
              >
                {panel.text}
              </p>
              <Image
                className="absolute bottom-0 z-10 opacity-80 md:bottom-[-20px] xl:bottom-0"
                src={
                  panel.theme === "dark"
                    ? "/assets/icons/ui/dark-abstract.svg"
                    : "/assets/icons/ui/light-abstract.svg"
                }
                alt=""
                width={750}
                height={144}
              />
            </div>
          ))}
        </div>
      </div>

      <AudienceStack
        audienceCards={config.audienceCards}
        audienceTitle={config.audienceTitle}
        audienceAccent={config.audienceAccent}
        audienceDescription={config.audienceDescription}
      />

      {availableLocalLinks &&
      availableLocalLinks.length > 0 &&
      config.localLinksTitle &&
      config.localLinksDescription ? (
        <LocalLinksSection
          title={config.localLinksTitle}
          description={config.localLinksDescription}
          links={availableLocalLinks}
        />
      ) : null}

      <FooterComponent
        title={config.cta.title}
        description={config.cta.description}
        buttonText={config.cta.buttonText}
        buttonHref={config.cta.buttonHref}
      />
    </>
  );
}
