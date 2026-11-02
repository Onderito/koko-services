// "VIP Service Included": the same bento grid as before (the user asked to keep it), set in Anti's navy band like its
// "Moments That Move Us" gallery (IMG_8800): light and night cards, gold labels, the same images and texts.

import Image from "next/image";

import suitImage from "../../../public/assets/images/bento/suit.webp";
import { AntiHeading, AntiSection } from "../ui/anti";

const light = "relative overflow-hidden rounded-[12px] bg-[#f6f5f1] text-[#101828]";
const night = "relative overflow-hidden rounded-[12px] border border-white/10 bg-[#1a2a36] text-white";
const tagLight = "relative z-10 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9a7a3e]";
const tagNight = "relative z-10 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#d4b471]";
const title = "relative z-10 mt-3 text-[22px] font-bold leading-[1.1] tracking-[-0.02em] md:text-[26px]";

export default function Vip() {
  return (
    <AntiSection tone="navy" labelledBy="vip-title">
      <AntiHeading
        id="vip-title"
        dark
        title="VIP Service Included"
        intro="Elevated details that make the experience feel more polished from airport arrival to the final stop of the day."
      />

      <div className="mt-10 grid grid-cols-1 gap-4 md:h-[500px] md:grid-cols-4">
        <article className={`${light} min-h-[380px] p-6 pb-44 md:col-span-1 md:h-full md:pb-6`}>
          <span className={tagLight}>Chauffeur Detail</span>
          <h3 className={title}>Professional driver in suit</h3>
          <p className="relative z-10 mt-3 max-w-[24ch] text-[14px] leading-relaxed text-[#667085]">
            A more formal arrival style for clients who expect presentation and discretion from the first contact.
          </p>
          <Image
            className="pointer-events-none absolute bottom-0 right-0 h-auto w-[58%] max-w-[250px] md:w-[72%] md:max-w-[320px]"
            src={suitImage}
            alt="Chauffeur in suit"
            width={320}
            height={360}
            quality={100}
          />
        </article>

        <div className="flex flex-col gap-4 md:col-span-2 md:h-full">
          <article className={`${light} flex min-h-[150px] items-center justify-center p-6 text-center`}>
            <div className="relative z-10">
              <span className={tagLight}>Airport Welcome</span>
              <h3 className={title}>Personalized airport pickup with name sign</h3>
            </div>
          </article>

          <article className={`${night} flex min-h-[170px] items-center justify-center p-6 text-center`}>
            <div className="relative z-10">
              <span className={tagNight}>Fleet Standard</span>
              <h3 className={title}>Top-of-the-range, impeccably maintained vehicles</h3>
            </div>
          </article>

          <article className={`${light} flex min-h-[190px] items-center justify-center p-6 pb-16 text-center md:min-h-[170px] md:pb-6`}>
            <div className="relative z-10">
              <span className={tagLight}>On Board</span>
              <h3 className={title}>Complimentary bottled water on board</h3>
            </div>
            <Image
              className="pointer-events-none absolute bottom-[-62px] left-[-18px] h-auto w-[88px] md:bottom-[-92px] md:left-[-26px] md:w-[138px]"
              src="/assets/images/bento/bottle.webp"
              alt="Bottle"
              width={138}
              height={138}
            />
            <Image
              className="pointer-events-none absolute bottom-[-62px] right-[-16px] h-auto w-[88px] md:bottom-[-92px] md:right-[-24px] md:w-[138px]"
              src="/assets/images/bento/bottle2.webp"
              alt="Bottle"
              width={138}
              height={138}
            />
          </article>
        </div>

        <article className={`${night} min-h-[360px] p-6 pb-44 md:col-span-1 md:h-full md:pb-6`}>
          <span className={tagNight}>On Board</span>
          <h3 className={title}>Phone chargers available</h3>
          <p className="relative z-10 mt-3 max-w-[24ch] text-[14px] leading-relaxed text-white/70">
            Small practical details still matter when clients need to stay connected between meetings, flights, or arrivals.
          </p>
          <Image
            className="pointer-events-none absolute bottom-[-108px] left-[-18px] h-auto w-[64%] max-w-[210px] md:bottom-[-84px] md:left-[-6px] md:w-[92%] md:max-w-[340px]"
            src="/assets/images/bento/phone.png"
            alt="Phone charger"
            width={340}
            height={360}
            quality={100}
          />
        </article>
      </div>
    </AntiSection>
  );
}
