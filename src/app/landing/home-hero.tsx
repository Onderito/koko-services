// Home hero (Transfeero layout, Anti look): the V-Class on the corniche with the header inside the photo, the page's
// single H1, a short keyword description, the booking bar, then the trust line with the live review widgets.
// 21 Oct 2026, at the user's request: less sky and a shorter hero so the van shows, a shorter description built on
// the main keywords, and no "10 years of chauffeur experience" line. "Reserve my driver" (protected link) is kept.
// Photo: generated with the user's OpenAI account (Codex), van on the right so the left stays free for the text.
// 21 Oct 2026, at the user's request: same panorama, the van is now the 2026 Mercedes V-Class (illuminated grille).
// 29 Oct 2026, at the user's request: a truer V-Class, modelled on the photo they sent (chrome star grille, AMG-line
// bumper, multi-spoke wheels), lit for the dusk; only the van's area was replaced, the panorama is unchanged.
// data-hero-tone lets the header start with light text before its scroll probe runs.
// 28 Oct 2026, at the user's request: "Get a quote" glides here and dims the hero for a moment around the bar
// (BookFocus: the veil sits over the hero, the bar above it).

import Image from "next/image";
import BookingBar from "../ui/booking/booking-bar";
import BookFocus from "../ui/booking/book-focus";
import LinkArrow from "../ui/link-arrow";
import ReviewBadges from "../ui/review-badges";
import { archivo } from "../fonts";

export default function HomeHero() {
  return (
    <section data-hero-tone="dark" data-nav-tone="dark" className={`relative isolate bg-[#0d1922] text-white ${archivo.className}`}>
      {/* Only the photo layer clips, so the address suggestions can open below the hero. */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/assets/images/hero/home-hero-v-class.jpg"
          alt="Black 2026 Mercedes V-Class chauffeur van on a coastal road above the Mediterranean at sunset, Monaco lit up in the distance"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[80%_50%] lg:object-[50%_50%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,25,34,0.82)_0%,rgba(13,25,34,0.4)_36%,rgba(13,25,34,0)_58%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#0d1922] to-transparent" />
      </div>
      <BookFocus />

      <div className="mx-auto flex max-w-[1240px] flex-col justify-end px-4 pb-10 pt-[calc(var(--header-h)+3rem)] md:px-6 md:pb-12 lg:min-h-[760px] lg:pt-[calc(var(--header-h)+3.5rem)]">
        <h1 className="max-w-[760px] text-[40px] font-bold leading-[1.04] tracking-[-0.025em] sm:text-[54px] lg:text-[64px]" style={{ textWrap: "balance" }}>
          Luxury Chauffeur Service on the <span className="text-[#d4b471]">French Riviera</span>
        </h1>
        <p className="mt-5 max-w-[640px] text-[17px] leading-relaxed text-white/80 md:text-[18px]">
          Private chauffeur service for airport transfers, business travel, and tailored journeys across Nice, Cannes, Monaco, and Saint-Tropez, with seasonal winter coverage in Megève, Courchevel, and Chamonix.
        </p>

        <div id="book" className="relative z-20 mt-9 scroll-mt-28">
          <BookingBar
            aside={
              <LinkArrow href="/contact-me" tone="dark">
                Reserve my driver
              </LinkArrow>
            }
          />
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 text-[14px] text-white/80">
          <p>Fixed fare before booking · Flight tracking and meet &amp; greet · One hour of waiting included</p>
          <ReviewBadges tone="dark" />
        </div>
      </div>
    </section>
  );
}
