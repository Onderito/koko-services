// Reviews reminder just above the footer, in the place and style of Anti's "Trusted by World's Leading Brands" row
// (IMG_8800, crop 10), asked for by the user on 21 Oct 2026. Ratings are the live ones (src/lib/reviews/ratings.ts);
// "1,200+ transfers completed" is the site's own figure. No Trustpilot tile: no Kokolimo profile is known.

import { getRatings } from "@/lib/reviews/ratings";
import { Stars } from "../ui/kit";
import RollingNumber from "../ui/rolling-number";

function GoogleMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.6-.4-3.9z" />
      <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2A11.9 11.9 0 0 1 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3a12 12 0 0 1-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9z" />
    </svg>
  );
}

function TripadvisorMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#34e0a1" />
      <circle cx="8" cy="12.5" r="3.6" fill="#fff" />
      <circle cx="16" cy="12.5" r="3.6" fill="#fff" />
      <circle cx="8" cy="12.5" r="1.7" fill="#000" />
      <circle cx="16" cy="12.5" r="1.7" fill="#000" />
      <path d="M5.2 8.2C7 6.9 9.4 6.2 12 6.2s5 .7 6.8 2" fill="none" stroke="#000" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

const tile = "flex h-full flex-col items-center justify-center gap-2 rounded-[10px] border border-[#eaecf0] bg-white px-6 py-7 text-center transition-shadow duration-200 hover:shadow-[0_12px_32px_rgba(16,24,40,0.08)]";

export default async function Trust() {
  const ratings = await getRatings();
  return (
    <section aria-labelledby="trust-title" data-nav-tone="light" className="bg-[#f5f6f8] text-[#101828]">
      <div className="mx-auto max-w-[1240px] px-4 py-16 text-center md:px-6 md:py-20">
        <h2 id="trust-title" className="text-[28px] font-bold leading-[1.15] tracking-[-0.02em] md:text-[36px]">
          Chosen by Travelers on the <span className="text-[#d4b471]">French Riviera</span>
        </h2>
        <p className="mx-auto mt-3 max-w-[560px] text-[16px] text-[#667085]">Our clients rate every ride. Read their reviews on Google and Tripadvisor.</p>
        <ul className="mx-auto mt-10 grid max-w-[920px] gap-4 sm:grid-cols-3">
          {ratings.map(r => {
            const name = r.source === "google" ? "Google" : "Tripadvisor";
            return (
              <li key={r.source}>
                <a href={r.url} target="_blank" rel="noopener noreferrer" className={tile} aria-label={`Rated ${r.rating.toFixed(1)} out of 5 on ${name}${r.count ? ` from ${r.count} reviews` : ""}`}>
                  {r.source === "google" ? <GoogleMark /> : <TripadvisorMark />}
                  <RollingNumber value={r.rating.toFixed(1)} className="text-[34px] font-bold leading-none tracking-[-0.02em]" />
                  <Stars className="[&_svg]:h-4 [&_svg]:w-4" />
                  <span className="text-[14px] text-[#667085]">
                    {name}
                    {r.count ? ` · ${r.count.toLocaleString("en-GB")} reviews` : " reviews"}
                  </span>
                </a>
              </li>
            );
          })}
          <li>
            <div className={tile}>
              <RollingNumber value="1,200+" className="text-[34px] font-bold leading-none tracking-[-0.02em] text-[#101828]" />
              <span className="text-[14px] text-[#667085]">transfers completed</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
