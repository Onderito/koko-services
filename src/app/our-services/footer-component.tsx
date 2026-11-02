// The call to action that ends the service pages and the three car pages. 21 Oct 2026, at the user's request (the
// "Plan my tour" banner image was "too ugly and semantic, not inspired by the home page"): the home page's banner
// (IMG_8794's "Find Your Perfect EV Today", ui/banner.tsx) with a photo in the banners' art direction chosen for the page
// family, and "Discover All of Our Services" next to the page's own button. The title, text, button label and link come
// from the page unchanged. Server component, no animation.

import { AntiOutlinePill } from "../ui/anti";
import { CtaBanner } from "../ui/banner";

type CTAProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  /** Words of `title` shown in gold. By default the title's last word (its last two when that word is short); `false` for none. */
  accent?: string | false;
  /** Drops the section's top padding when the section above is also white. */
  flushTop?: boolean;
  /** The banner photo (dusk art direction); the S-Class on the corniche by default. */
  image?: string;
  imageAlt?: string;
};

function lastWords(title: string) {
  const words = title.replace(/[?!.…]+$/, "").trim().split(/\s+/);
  const last = words[words.length - 1] ?? "";
  return last.length <= 4 && words.length > 2 ? words.slice(-2).join(" ") : last;
}

export default function FooterComponent({
  title,
  description,
  buttonText,
  buttonHref,
  accent,
  flushTop = false,
  image = "/assets/images/banners/cta-s-class-rear.jpg",
  imageAlt = "",
}: CTAProps) {
  const gold = accent === false ? undefined : (accent ?? lastWords(title));

  return (
    <section data-nav-tone="light" className="bg-white text-[#101828]">
      <div className={`mx-auto max-w-[1240px] px-4 pb-16 md:px-6 md:pb-24 ${flushTop ? "pt-0" : "pt-16 md:pt-24"}`}>
        <CtaBanner
          title={title}
          accent={gold}
          text={description}
          button={{ text: buttonText, href: buttonHref }}
          secondary={<AntiOutlinePill href="/our-services">Discover All of Our Services</AntiOutlinePill>}
          image={image}
          imageAlt={imageAlt}
          imagePosition="object-[68%_58%]"
        />
      </div>
    </section>
  );
}
