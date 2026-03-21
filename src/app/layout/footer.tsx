import Link from "next/link";
import {
  businessName,
  contactEmail,
  contactPhone,
  contactPhoneDisplay,
  serviceAreaText,
  whatsappUrl,
} from "../data/site-config";
import { serviceMenuLinks } from "../data/service-pages";

const primaryLinks = [
  { href: "/", label: "Home" },
  ...serviceMenuLinks.map(({ href, label }) => ({ href, label })),
];

const secondaryLinks = [
  { href: "/cars/class-s", label: "Our Cars" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-me", label: "Request a Quote" },
  { href: "/legal-privacy", label: "Legal & Privacy" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#050505] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 top-0 h-48 w-48 rounded-full bg-white/6 blur-3xl" />
        <div className="absolute right-0 top-12 h-56 w-56 rounded-full bg-[#8A6B3B]/20 blur-3xl" />
      </div>

      <div className="relative px-6 py-8 md:px-8 md:py-10 xl:px-10 xl:py-12">
        <div className="grid gap-10 xl:grid-cols-[1.35fr_0.7fr_0.95fr]">
          <div className="max-w-xl">
            <span className="inline-flex rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[12px] font-manrope-bold uppercase tracking-[0.16em] text-white/72">
              {businessName}
            </span>
            <h2 className="mt-5 font-manrope-bold text-[34px] leading-[1.02] tracking-[-0.05em] text-white md:text-[44px] xl:text-[52px]">
              Private chauffeur service for Riviera travel that needs to feel
              seamless.
            </h2>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-white/66 md:text-[16px]">
              Airport transfers, hourly chauffeur service, and chauffeur tours
              across Nice, Cannes, Monaco and Saint-Tropez.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact-me"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-manrope-bold text-[14px] tracking-[-0.01em] text-[#111111] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#EDEDED]"
              >
                Request a Quote
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/14 bg-white/6 px-5 py-3 font-manrope-bold text-[14px] tracking-[-0.01em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[12px] font-manrope-bold uppercase tracking-[0.16em] text-white/60">
              Explore
            </h3>
            <div className="mt-4 grid gap-2">
              {primaryLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit text-[15px] text-white/78 transition-colors duration-200 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-8 grid gap-2">
              {secondaryLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit text-[15px] text-white/72 transition-colors duration-200 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[12px] font-manrope-bold uppercase tracking-[0.16em] text-white/60">
              Contact
            </h3>
            <div className="mt-4 space-y-4 rounded-[24px] border border-white/10 bg-white/5 p-5">
              <div>
                <p className="text-[12px] uppercase tracking-[0.16em] text-white/58">
                  Phone
                </p>
                <a
                  href={`tel:${contactPhone}`}
                  className="mt-2 block text-[16px] text-white/88 transition-colors duration-200 hover:text-white"
                >
                  {contactPhoneDisplay}
                </a>
              </div>
              <div>
                <p className="text-[12px] uppercase tracking-[0.16em] text-white/58">
                  Email
                </p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="mt-2 block text-[16px] text-white/88 transition-colors duration-200 hover:text-white"
                >
                  {contactEmail}
                </a>
              </div>
              <div>
                <p className="text-[12px] uppercase tracking-[0.16em] text-white/58">
                  Service Area
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-white/76">
                  {serviceAreaText}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 text-[13px] text-white/62 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {businessName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/legal-privacy"
              aria-label="Legal & Privacy"
              target="_blank"
              className="text-white/72 transition-colors duration-200 hover:text-white"
            >
              Legal & Privacy
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="text-white/72 transition-colors duration-200 hover:text-white"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
