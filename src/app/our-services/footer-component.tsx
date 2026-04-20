import Link from "next/link";
import { Reveal } from "../ui/reveal";

type CTAProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
};

export default function FooterComponent({
  title,
  description,
  buttonText,
  buttonHref,
}: CTAProps) {
  return (
    <div className="container">
      <Reveal amount={0.34}>
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#050505] px-6 py-10 text-center text-white md:px-8 md:py-12">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-white/6 blur-3xl" />
            <div className="absolute right-0 top-8 h-48 w-48 rounded-full bg-[#8A6B3B]/20 blur-3xl" />
          </div>
          <div className="relative">
            <span className="inline-flex rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[12px] font-manrope-bold uppercase tracking-[0.16em] text-white/72">
              Premium service
            </span>
            <h2 className="heading-2 mb-4 mt-5 text-white">{title}</h2>
            <p className="mx-auto mb-8 max-w-2xl text-[15px] leading-relaxed text-white/66 md:text-[16px]">
              {description}
            </p>
            <Link
              href={buttonHref}
              className="inline-flex items-center justify-center rounded-[18px] bg-[linear-gradient(180deg,#F8F3EC_0%,#E8D9C5_100%)] px-8 py-4 font-manrope-bold text-[16px] tracking-[-0.01em] text-[#111111] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-8px_rgba(109,88,48,0.32)]"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
