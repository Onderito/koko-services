import Image from "next/image";

import suitImage from "../../../public/assets/images/bento/suit.png";
import { Reveal } from "../ui/reveal";

export default function Vip() {
  return (
    <section className="relative px-0 py-0">
      <Reveal className="mx-auto max-w-3xl text-center">
        <span className="section-label">VIP Service</span>
        <h2 className="heading-2 mt-4 text-center text-[#404040]">
          VIP Service Included
        </h2>
        <p className="body-text mt-4 text-center">
          Elevated details that make the experience feel more polished from
          airport arrival to the final stop of the day.
        </p>
      </Reveal>

      <div className="mt-10 md:mt-12">
        <div className="grid grid-cols-1 gap-4 md:h-[500px] md:grid-cols-4">
          <article className="relative min-h-[380px] overflow-hidden rounded-[28px] border border-[#E9DED0] bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F0E5_100%)] p-5 pb-44 shadow-[0_18px_40px_rgba(47,35,18,0.08)] md:col-span-1 md:h-full md:pb-5">
            <span className="relative z-10 inline-flex rounded-full border border-[#E3D3BC] bg-white/80 px-3 py-1 text-[11px] font-manrope-bold uppercase tracking-[0.14em] text-[#7B6034]">
              Chauffeur Detail
            </span>
            <h3 className="relative z-10 mt-4 text-[22px] font-manrope-bold leading-[1.08] tracking-[-0.04em] text-[#262626] md:text-[28px]">
              Professional driver in suit
            </h3>
            <p className="relative z-10 mt-3 max-w-[24ch] text-[14px] leading-relaxed text-[#6E6E6E]">
              A more formal arrival style for clients who expect presentation
              and discretion from the first contact.
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
            <article className="relative flex min-h-[150px] items-center justify-center overflow-hidden rounded-[28px] border border-[#E9DED0] bg-[linear-gradient(180deg,#FFFFFF_0%,#F6F0E7_100%)] p-5 text-center shadow-[0_18px_40px_rgba(47,35,18,0.08)]">
              <div className="relative z-10">
                <span className="inline-flex rounded-full border border-[#E3D3BC] bg-white/80 px-3 py-1 text-[11px] font-manrope-bold uppercase tracking-[0.14em] text-[#7B6034]">
                  Airport Welcome
                </span>
                <h3 className="mt-4 text-[22px] font-manrope-bold leading-[1.08] tracking-[-0.04em] text-[#2A2A2A] md:text-[28px]">
                  Personalized airport pickup with name sign
                </h3>
              </div>
            </article>

            <article className="relative flex min-h-[170px] items-center justify-center overflow-hidden rounded-[28px] border border-[#2D2A26] bg-[linear-gradient(180deg,#2E2B28_0%,#23211F_100%)] p-5 text-center shadow-[0_22px_44px_rgba(27,23,19,0.18)]">
              <div className="relative z-10">
                <span className="inline-flex rounded-full border border-[#6E6352] bg-white/8 px-3 py-1 text-[11px] font-manrope-bold uppercase tracking-[0.14em] text-[#E8D8B8]">
                  Fleet Standard
                </span>
                <h3 className="mt-4 text-[22px] font-manrope-bold leading-[1.08] tracking-[-0.04em] text-white md:text-[28px]">
                  Top-of-the-range, impeccably maintained vehicles
                </h3>
              </div>
            </article>

            <article className="relative flex min-h-[190px] items-center justify-center overflow-hidden rounded-[28px] border border-[#E9DED0] bg-[linear-gradient(180deg,#FFFFFF_0%,#F7EFE4_100%)] p-5 pb-16 text-center shadow-[0_18px_40px_rgba(47,35,18,0.08)] md:min-h-[170px] md:pb-5">
              <div className="relative z-10">
                <span className="inline-flex rounded-full border border-[#E3D3BC] bg-white/80 px-3 py-1 text-[11px] font-manrope-bold uppercase tracking-[0.14em] text-[#7B6034]">
                  On Board
                </span>
                <h3 className="mt-4 text-[22px] font-manrope-bold leading-[1.08] tracking-[-0.04em] text-[#2A2A2A] md:text-[28px]">
                  Complimentary bottled water on board
                </h3>
              </div>
              <Image
                className="pointer-events-none absolute bottom-[-62px] left-[-18px] h-auto w-[88px] md:bottom-[-92px] md:left-[-26px] md:w-[138px]"
                src="/assets/images/bento/bottle.svg"
                alt="Bottle"
                width={138}
                height={138}
              />
              <Image
                className="pointer-events-none absolute bottom-[-62px] right-[-16px] h-auto w-[88px] md:bottom-[-92px] md:right-[-24px] md:w-[138px]"
                src="/assets/images/bento/bottle2.svg"
                alt="Bottle"
                width={138}
                height={138}
              />
            </article>
          </div>

          <article className="relative min-h-[360px] overflow-hidden rounded-[28px] border border-[#2D2A26] bg-[linear-gradient(180deg,#2E2B28_0%,#23211F_100%)] p-5 pb-44 shadow-[0_22px_44px_rgba(27,23,19,0.18)] md:col-span-1 md:h-full md:pb-5">
            <span className="relative z-10 inline-flex rounded-full border border-[#6E6352] bg-white/8 px-3 py-1 text-[11px] font-manrope-bold uppercase tracking-[0.14em] text-[#E8D8B8]">
              On Board
            </span>
            <h3 className="relative z-10 mt-4 text-[22px] font-manrope-bold leading-[1.08] tracking-[-0.04em] text-white md:text-[28px]">
              Phone chargers available
            </h3>
            <p className="relative z-10 mt-3 max-w-[24ch] text-[14px] leading-relaxed text-[#C7C0B8]">
              Small practical details still matter when clients need to stay
              connected between meetings, flights, or arrivals.
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
      </div>
    </section>
  );
}
