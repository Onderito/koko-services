"use client";

import Image from "next/image";
import Link from "next/link";
import { forwardRef, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import FooterComponent from "./footer-component";
import type { ServiceAudienceCard, ServicePageConfig } from "../data/service-pages";
import { Reveal, RevealGroup } from "../ui/reveal";

const AudienceCard = forwardRef<
  HTMLDivElement,
  {
    card: ServiceAudienceCard;
    className?: string;
  }
>(function AudienceCard({ card, className = "" }, ref) {
  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-[30px] border border-[#E8D9C4] bg-[linear-gradient(180deg,#FFFDF8_0%,#F8F1E7_58%,#F4EBDD_100%)] p-6 shadow-[0_20px_48px_rgba(45,33,15,0.08)] ${className}`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[radial-gradient(ellipse_at_top,rgba(244,228,198,0.78)_0%,rgba(244,228,198,0.24)_34%,rgba(244,228,198,0)_74%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-[22%] h-28 bg-[radial-gradient(circle,rgba(250,243,230,0.7)_0%,rgba(250,243,230,0)_78%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-[-76px] h-44 bg-[radial-gradient(circle_at_bottom,rgba(222,194,148,0.28)_0%,rgba(222,194,148,0.10)_45%,transparent_72%)] blur-2xl" />
      <Image
        src="/assets/icons/ui/light-abstract.svg"
        alt=""
        width={750}
        height={146}
        className="pointer-events-none absolute inset-x-0 bottom-0 opacity-55 mix-blend-multiply"
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-[20px] border border-[#E8D8BF] bg-[linear-gradient(180deg,rgba(255,252,247,0.96)_0%,rgba(246,237,223,0.9)_100%)] shadow-[0_12px_28px_rgba(109,88,48,0.14)]">
          <Image
            src={card.icon}
            alt={card.iconAlt}
            width={40}
            height={40}
            quality={100}
          />
        </div>
        <span className="mt-4 inline-flex rounded-full border border-[#E3D3BC] bg-[linear-gradient(180deg,rgba(255,252,247,0.92)_0%,rgba(247,238,225,0.84)_100%)] px-3 py-1 text-[11px] font-manrope-bold uppercase tracking-[0.14em] text-[#7B6034] shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]">
          Standby Service
        </span>
        <h3 className="heading-3 mt-4 text-[#2B2B2B]">{card.title}</h3>
        <p className="card-text mt-4 max-w-[32ch] text-center text-[#666666]">
          {card.text}
        </p>
      </div>
    </div>
  );
});

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
            start: "top 38%",
            end: "bottom 8%",
            scrub: 1.15,
          },
          defaults: { ease: "none" },
        });

        tl.fromTo(
          card1Ref.current,
          { yPercent: 0, rotate: 0 },
          { yPercent: -430, rotate: 12 },
          0,
        );
        tl.fromTo(
          card2Ref.current,
          { yPercent: 0, rotate: 4 },
          { yPercent: -520, rotate: -12 },
          0.2,
        );
        tl.fromTo(
          card3Ref.current,
          { yPercent: 0, rotate: -4 },
          { yPercent: -380, rotate: 10 },
          0.4,
        );
      });

      return () => mm.revert();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="container">
      <Reveal className="mx-auto max-w-4xl text-center" amount={0.38}>
        <h2 className="heading-2 mt-4 text-center text-[#404040]">
          {audienceTitle} <span className="text-[#B8AA92]">{audienceAccent}</span>
        </h2>
        <p className="body-text mt-4 text-center">{audienceDescription}</p>
      </Reveal>

      <RevealGroup className="block xl:hidden" amount={0.34}>
        {audienceCards.map((card) => (
          <AudienceCard key={card.title} card={card} className="mx-auto mt-10 max-w-lg" />
        ))}
      </RevealGroup>

      <div
        ref={stackRef}
        className="relative mx-auto mt-24 hidden w-fit isolate xl:block"
      >
        {[card1Ref, card2Ref, card3Ref].map((ref, index) => {
          const card = audienceCards[index];
          const rotations = ["", " rotate-[4deg]", " -rotate-[4deg]"];
          const zIndexes = [" z-8", " z-6", " z-4"];
          const positioning = index === 0 ? "relative" : "absolute inset-0";

          return (
            <AudienceCard
              key={card.title}
              card={card}
              className={`${positioning}${rotations[index]}${zIndexes[index]} flex max-w-lg will-change-transform`}
              ref={ref}
            />
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
      <Reveal className="mx-auto max-w-3xl text-center" amount={0.38}>
        <p className="text-[12px] font-manrope-bold uppercase tracking-[0.16em] text-[#8A6B3B]">
          Keep Exploring
        </p>
        <h2 className="heading-2 mt-4 text-[#404040]">{title}</h2>
        <p className="body-text mt-4">{description}</p>
      </Reveal>

      {isSingleLink ? (
        <Reveal className="mx-auto mt-10 max-w-3xl xl:mt-12" amount={0.34}>
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
        </Reveal>
      ) : (
        <RevealGroup className="mt-10 grid gap-6 md:grid-cols-2 xl:mt-12" amount={0.32}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative block h-full overflow-hidden rounded-[28px] border border-[#E7E1D8] bg-[linear-gradient(180deg,#FFFFFF_0%,#FAF4EC_100%)] p-6 shadow-[0_16px_40px_rgba(25,25,25,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(25,25,25,0.10)]"
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
        </RevealGroup>
      )}
    </div>
  );
}

export default function ServicePageTemplate({
  config,
}: {
  config: ServicePageConfig;
}) {
  const primaryActionLabel = config.path.startsWith("/our-services/transfers")
    ? "Book my transfer"
    : config.path.startsWith("/our-services/hourly-chauffeur")
      ? "Book by the hour"
      : "Plan my tour";

  const availableLocalLinks = config.localLinks?.filter(
    (link) => link.href !== config.path,
  );

  return (
    <>
      <div className="container flex min-h-[calc(100vh-var(--nav-clearance))] flex-col items-center justify-center gap-10 pt-[var(--nav-clearance)] xl:flex-row">
        <Reveal className="xl:w-2/3" amount={0.42}>
          <div className="space-y-5 md:space-y-6 xl:space-y-7">
            <h1 className="heading-1">{config.heroTitle}</h1>
            <p className="body-text">{config.heroDescription}</p>
            <div className="flex gap-4">
              <Link href="/contact-me">
                <span className="inline-flex items-center justify-center rounded-[18px] bg-[linear-gradient(180deg,#F8F3EC_0%,#E8D9C5_100%)] px-6 py-3 font-manrope-bold text-[15px] tracking-[-0.02em] text-[#6D5830] shadow-[0_14px_30px_-8px_rgba(109,88,48,0.28),inset_0_1px_0_rgba(255,255,255,0.8)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-8px_rgba(109,88,48,0.32),inset_0_1px_0_rgba(255,255,255,0.9)]">
                  {primaryActionLabel}
                </span>
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal className="w-full xl:w-2/3" delay={0.06} amount={0.42}>
          <div className="relative min-h-[220px] w-full aspect-[16/14] rounded-[32px] border border-[#E7E1D8] bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F1E8_100%)] p-2.5 shadow-[0_24px_60px_rgba(45,33,15,0.12)] md:p-3">
            <div className="relative h-full w-full overflow-hidden rounded-[24px]">
              <Image
                src={config.heroImageSrc}
                alt={config.heroImageAlt}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>

      <div className="container">
        <Reveal className="mx-auto max-w-4xl text-center" amount={0.38}>
          <h2 className="heading-2 mt-4 text-center text-[#404040]">
            {config.introTitle}
          </h2>
          <p className="body-text mt-4 text-center">{config.introDescription}</p>
        </Reveal>

        <RevealGroup className="relative flex flex-col items-center justify-center gap-10 py-10 xl:flex-row xl:py-24" amount={0.3}>
          {config.panels.map((panel) => (
            <div
              key={panel.title}
              className={`relative flex min-h-[280px] w-full flex-1 basis-0 flex-col items-center justify-start overflow-hidden rounded-[30px] px-6 py-10 md:min-h-[320px] md:px-8 xl:h-[410px] xl:min-h-0 ${
                panel.theme === "dark"
                  ? "border border-[#4A443B] bg-[#23211F] text-white shadow-[0_24px_52px_rgba(22,18,14,0.18)]"
                  : "border border-[#E8D9C4] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F1E7_100%)] shadow-[0_20px_48px_rgba(45,33,15,0.08)]"
              }`}
            >
              {panel.theme === "light" ? (
                <>
                  <div className="pointer-events-none absolute left-[-10%] top-[-4%] h-36 w-40 bg-[radial-gradient(circle,rgba(244,228,198,0.34)_0%,rgba(244,228,198,0.08)_40%,transparent_74%)] blur-2xl" />
                  <div className="pointer-events-none absolute right-[-10%] top-[-4%] h-36 w-40 bg-[radial-gradient(circle,rgba(244,228,198,0.34)_0%,rgba(244,228,198,0.08)_40%,transparent_74%)] blur-2xl" />
                  <div className="pointer-events-none absolute left-[-8%] bottom-[18%] h-40 w-44 bg-[radial-gradient(circle,rgba(244,228,198,0.22)_0%,rgba(244,228,198,0.06)_42%,transparent_76%)] blur-3xl" />
                  <div className="pointer-events-none absolute right-[-8%] bottom-[18%] h-40 w-44 bg-[radial-gradient(circle,rgba(244,228,198,0.22)_0%,rgba(244,228,198,0.06)_42%,transparent_76%)] blur-3xl" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-[-80px] h-44 bg-[radial-gradient(circle_at_bottom,rgba(222,194,148,0.26)_0%,rgba(222,194,148,0.08)_45%,transparent_72%)] blur-2xl" />
                </>
              ) : (
                <>
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(232,216,184,0.10)_0%,rgba(232,216,184,0)_60%)]" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-[-40px] h-48 bg-[radial-gradient(ellipse_at_bottom,rgba(120,96,56,0.22)_0%,rgba(120,96,56,0)_70%)] blur-2xl" />
                </>
              )}
              <span
                className={`relative z-20 inline-flex rounded-full px-3 py-1 text-[11px] font-manrope-bold uppercase tracking-[0.14em] ${
                  panel.theme === "dark"
                    ? "border border-[#6E6352] bg-white/8 text-[#E8D8B8]"
                    : "border border-[#E3D3BC] bg-white/80 text-[#7B6034]"
                }`}
              >
                {panel.theme === "dark" ? "Our Standard" : "Client Comfort"}
              </span>
              <h3
                className={`relative z-20 mt-5 heading-3 text-center ${panel.theme === "dark" ? "text-white" : "text-[#2B2B2B]"}`}
              >
                {panel.title}
              </h3>
              <p
                className={`body-text relative z-20 mt-4 max-w-[34ch] text-center ${
                  panel.theme === "dark" ? "text-[#EEE7DE]" : "text-[#666666]"
                }`}
              >
                {panel.text}
              </p>
              <Image
                className={`pointer-events-none absolute inset-x-0 bottom-0 z-10 md:bottom-[-18px] xl:bottom-0 ${
                  panel.theme === "dark"
                    ? "opacity-20 mix-blend-screen"
                    : "opacity-70 mix-blend-multiply"
                }`}
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
        </RevealGroup>
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
        buttonText={primaryActionLabel}
        buttonHref={config.cta.buttonHref}
      />
    </>
  );
}
