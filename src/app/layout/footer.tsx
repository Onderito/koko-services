// Site footer, laid out as Anti's last two blocks (IMG_8800): the photo call-to-action band ("Let's Find Your Next
// Adventure"), then the navy footer with link columns, contact and the bottom bar.
// 21 Oct 2026, at the user's request: the band is as compact as Anti's and carries the user's slogan, "Let's Find Your
// Next Destination", over an S-Class above Monaco at dusk (the art direction of the banners); "Ask your favourite AI
// about Kokolimo" sits above the bottom bar. Other texts and links unchanged.

import Image from "next/image";
import Link from "next/link";
import { Building2, Mail, MapPin, Phone } from "lucide-react";
import { businessName, contactEmail, contactPhone, contactPhoneDisplay, serviceAreaText, whatsappUrl } from "../data/site-config";
import { serviceMenuLinks } from "../data/service-pages";
import { AntiOutlinePill } from "../ui/anti";
import ArrowButton from "../ui/arrow-button";
import AskAi from "../ui/ask-ai";

const primaryLinks = [{ href: "/", label: "Home" }, ...serviceMenuLinks.map(({ href, label }) => ({ href, label }))];

const secondaryLinks = [
  { href: "/cars", label: "Our Fleet" },
  { href: "/blog", label: "Blog" },
  { href: "/partners", label: "Travel Partners" },
  { href: "/contact-me", label: "Request a Quote" },
  { href: "/legal-privacy", label: "Legal & Privacy" },
];

/** `withCta={false}` renders only the navy footer columns, for pages that end with their own call to action. */
export default function Footer({ withCta = true }: { withCta?: boolean }) {
  const year = new Date().getFullYear();

  return (
    <footer data-nav-tone="dark" className="bg-[#0d1922] text-white">
      {/* Call-to-action band (Anti's "Let's Find Your Next Adventure"): an S-Class above Monaco at dusk */}
      {withCta && <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/assets/images/banners/footer-monaco-dusk.jpg" alt="" aria-hidden="true" fill sizes="100vw" className="object-cover object-[70%_62%]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#0d1922_0%,rgba(13,25,34,0.88)_32%,rgba(13,25,34,0.35)_62%,rgba(13,25,34,0.08)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0d1922] to-transparent" />
        </div>
        <div className="mx-auto max-w-[1240px] px-4 py-12 md:px-6 md:py-16">
          <p className="text-[20px] font-bold tracking-[-0.02em]">
            {businessName}
            <span className="text-[#d4b471]">.</span>
          </p>
          <h2 className="mt-4 max-w-[520px] text-[32px] font-bold leading-[1.08] tracking-[-0.02em] md:text-[42px]" style={{ textWrap: "balance" }}>
            Let&apos;s Find Your Next <span className="text-[#d4b471]">Destination</span>
          </h2>
          <p className="mt-3 max-w-[520px] text-[15px] leading-relaxed text-white/75">
            Airport transfers, hourly chauffeur services, and private tours across Nice, Cannes, Monaco, Saint-Tropez, and the French Riviera, with seasonal
            coverage in Megève, Courchevel, and Chamonix during the winter season.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <ArrowButton text="Reserve my driver" href="/contact-me" />
            <AntiOutlinePill href={whatsappUrl} external>
              WhatsApp Us
            </AntiOutlinePill>
          </div>
        </div>
      </div>}

      {/* Footer columns */}
      <div className={`mx-auto max-w-[1240px] px-4 pb-10 md:px-6 ${withCta ? "pt-4" : "pt-2"}`}>
        <div className="grid gap-10 border-t border-white/10 pt-12 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_0.9fr_1.3fr]">
          <div>
            <Link href="/" className="text-[24px] font-bold tracking-[-0.02em]" aria-label={`${businessName}, home`}>
              {businessName}
              <span className="text-[#d4b471]">.</span>
            </Link>
            {/* Anti's "Follow Us": Kokolimo's real profiles (Instagram to add once the agency creates it). */}
            <p className="mt-8 text-[15px] font-semibold">Follow Us</p>
            <ul className="mt-4 flex gap-3">
              {[
                { href: whatsappUrl, label: "WhatsApp", path: "M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm4.5 12.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.2.1-.1 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.1.7a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z" },
                { href: "https://g.page/r/CXSXgZXVNYkwEAE/review", label: "Google reviews", path: "M21.6 10.2H12v3.9h5.5a5.9 5.9 0 0 1-2.4 3.7v2.5h3.9c2.3-2.1 3.6-5.2 3.6-8.8 0-.5 0-.9-.1-1.3ZM12 22c2.7 0 5-.9 6.6-2.4l-3.9-2.5c-.9.6-2.1 1-3.6 1a6.3 6.3 0 0 1-5.9-4.3h-4v2.6A10 10 0 0 0 12 22Zm-5.9-8.2a6 6 0 0 1 0-3.6V7.6h-4a10 10 0 0 0 0 8.8l4-2.6ZM12 6c1.5 0 2.9.5 4 1.5l3-3A10 10 0 0 0 2.1 7.6l4 2.6A6.3 6.3 0 0 1 12 6Z" },
                { href: "https://www.tripadvisor.com/Attraction_Review-g187234-d7971865-Reviews-MY_Riviera_Tours_Transfers-Nice_French_Riviera_Cote_d_Azur_Provence_Alpes_Cote_d_.html", label: "Tripadvisor", path: "M7 9.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm0 5.2a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4Zm10-5.2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm0 5.2a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4ZM12 5.5c-2.4 0-4.6.6-6.4 1.7H2l1.6 1.8A5 5 0 1 0 12 13a5 5 0 1 0 8.4-4l1.6-1.8h-3.6A12.6 12.6 0 0 0 12 5.5Z" },
              ].map(s => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-[#d4b471] hover:text-[#d4b471]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d={s.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Explore">
            <h3 className="text-[15px] font-semibold">Explore</h3>
            <ul className="mt-4 space-y-2.5">
              {primaryLinks.map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[14px] text-white/70 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="More">
            <ul className="space-y-2.5 lg:mt-[38px]">
              {secondaryLinks.map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[14px] text-white/70 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-[15px] font-semibold">Contact</h3>
            <ul className="mt-4 space-y-4 text-[14px] text-white/75">
              <li className="flex gap-3">
                <Phone size={18} strokeWidth={1.8} className="mt-0.5 shrink-0 text-[#d4b471]" aria-hidden="true" />
                <div>
                  <p className="text-[12px] uppercase tracking-[0.14em] text-white/50">Phone</p>
                  <a href={`tel:${contactPhone}`} className="mt-1 block text-white/85 transition-colors hover:text-white">
                    {contactPhoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail size={18} strokeWidth={1.8} className="mt-0.5 shrink-0 text-[#d4b471]" aria-hidden="true" />
                <div>
                  <p className="text-[12px] uppercase tracking-[0.14em] text-white/50">Email</p>
                  <a href={`mailto:${contactEmail}`} className="mt-1 block text-white/85 transition-colors hover:text-white">
                    {contactEmail}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Building2 size={18} strokeWidth={1.8} className="mt-0.5 shrink-0 text-[#d4b471]" aria-hidden="true" />
                <div>
                  <p className="text-[12px] uppercase tracking-[0.14em] text-white/50">Address</p>
                  <p className="mt-1 leading-relaxed">33 rue de Châteauneuf, 06000 Nice, France</p>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin size={18} strokeWidth={1.8} className="mt-0.5 shrink-0 text-[#d4b471]" aria-hidden="true" />
                <div>
                  <p className="text-[12px] uppercase tracking-[0.14em] text-white/50">Service Area</p>
                  <p className="mt-1 leading-relaxed">{serviceAreaText}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <AskAi />
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-[13px] text-white/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {businessName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/legal-privacy" aria-label="Legal & Privacy" target="_blank" className="transition-colors hover:text-white">
              Legal & Privacy
            </Link>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp" className="transition-colors hover:text-white">
              WhatsApp
            </a>
            {/* For AI assistants, as on qozens.com: the official reference and the llms.txt index. */}
            <Link href="/ai-instructions" className="transition-colors hover:text-white">
              About Kokolimo for AI
            </Link>
            <a href="/llms.txt" className="transition-colors hover:text-white">
              AI resources (llms.txt)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
