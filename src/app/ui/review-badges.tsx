// Live review widgets, in the place of Transfeero's Trustpilot line: Kokolimo's Google and Tripadvisor ratings with the
// review count, each linking to the profile. Server component: ratings come from src/lib/reviews/ratings.ts.

import { getRatings, type Rating } from "@/lib/reviews/ratings";

function GoogleLogo() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.6-.4-3.9z" />
      <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2A11.9 11.9 0 0 1 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3a12 12 0 0 1-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9z" />
    </svg>
  );
}

function TripadvisorLogo() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#34e0a1" />
      <circle cx="8" cy="12.5" r="3.6" fill="#fff" />
      <circle cx="16" cy="12.5" r="3.6" fill="#fff" />
      <circle cx="8" cy="12.5" r="1.7" fill="#000" />
      <circle cx="16" cy="12.5" r="1.7" fill="#000" />
      <path d="M5.2 8.2C7 6.9 9.4 6.2 12 6.2s5 .7 6.8 2" fill="none" stroke="#000" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

// Five marks filled to the rating (stars for Google, Tripadvisor's bubbles for Tripadvisor).
function Marks({ value, kind }: { value: number; kind: "star" | "bubble" }) {
  const fill = kind === "star" ? "#fbbc04" : "#34e0a1";
  return (
    <span className="relative inline-flex gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => {
        const part = Math.max(0, Math.min(1, value - i));
        const id = `${kind}-${i}-${Math.round(part * 100)}`;
        return (
          <svg key={i} width="14" height="14" viewBox="0 0 20 20">
            <defs>
              <linearGradient id={id}>
                <stop offset={`${part * 100}%`} stopColor={fill} />
                <stop offset={`${part * 100}%`} stopColor="currentColor" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            {kind === "star" ? (
              <path fill={`url(#${id})`} d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L10 15l-5.2 2.7 1-5.9L1.5 7.7l5.9-.8z" />
            ) : (
              <circle cx="10" cy="10" r="8" fill={`url(#${id})`} stroke={fill} strokeWidth="1.5" />
            )}
          </svg>
        );
      })}
    </span>
  );
}

function Badge({ r, tone }: { r: Rating; tone: "dark" | "light" }) {
  const name = r.source === "google" ? "Google" : "Tripadvisor";
  const score = r.rating.toFixed(1);
  return (
    <a
      href={r.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Rated ${score} out of 5 on ${name}${r.count ? ` from ${r.count} reviews` : ""}`}
      className={`inline-flex h-6 items-center gap-2 text-[14px] leading-none transition-colors ${tone === "dark" ? "text-white/80 hover:text-white" : "text-[#5b6472] hover:text-[#0f1115]"}`}
    >
      {r.source === "google" ? <GoogleLogo /> : <TripadvisorLogo />}
      <span className={`font-semibold ${tone === "dark" ? "text-white" : "text-[#0f1115]"}`}>{name}</span>
      <Marks value={r.rating} kind={r.source === "google" ? "star" : "bubble"} />
      <span>
        <span className={`font-semibold ${tone === "dark" ? "text-white" : "text-[#0f1115]"}`}>{score}</span>/5
        {r.count ? ` · ${r.count.toLocaleString("en-GB")} reviews` : ""}
      </span>
    </a>
  );
}

export default async function ReviewBadges({ tone = "dark", className = "" }: { tone?: "dark" | "light"; className?: string }) {
  const ratings = await getRatings();
  return (
    <ul className={`flex flex-wrap items-center gap-x-6 gap-y-2 ${className}`}>
      {ratings.map(r => (
        <li key={r.source}>
          <Badge r={r} tone={tone} />
        </li>
      ))}
    </ul>
  );
}
