// /reservation?id=<temporary id> — step 01 of the quote request (Vehicle). Never indexed.
// Demo stage: shows the trip summary. The immersive route map and the vehicle cards come next.

import type { Metadata } from "next";
import Link from "next/link";
import { getReservation } from "@/lib/reservations/store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Your quote | Kokolimo",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

const ID_RE = /^[A-Za-z0-9]{22}$/;

function formatDate(d: string) {
  const [y, m, day] = d.split("-").map(Number);
  return new Intl.DateTimeFormat("en-GB", { weekday: "short", day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(Date.UTC(y, m - 1, day)));
}

export default async function ReservationPage({ searchParams }: { searchParams: Promise<{ id?: string }> }) {
  const { id = "" } = await searchParams;
  const r = ID_RE.test(id) ? await getReservation(id) : null;

  if (!r) {
    return (
      <section className="mx-auto max-w-xl px-4 pb-24 pt-[calc(var(--nav-clearance)+2rem)] text-center">
        <h1 className="text-[28px] font-bold text-[#0f1115]">This quote is no longer available</h1>
        <p className="mt-3 text-[16px] text-[#5b6472]">Quotes are kept for 7 days. Start a new one in a few seconds.</p>
        <Link href="/demo" className="mt-6 inline-flex rounded-2xl bg-[#e2b04a] px-6 py-3 font-bold text-[#0f1115]">Get a new quote</Link>
      </section>
    );
  }

  const steps = ["Vehicle", "Details", "Confirm"];
  return (
    <section className="mx-auto max-w-6xl px-4 pb-24 pt-[calc(var(--nav-clearance)+1.5rem)]">
      <ol className="mb-8 flex gap-6 text-[14px]" aria-label="Steps">
        {steps.map((s, i) => (
          <li key={s} aria-current={i === 0 ? "step" : undefined} className={i === 0 ? "border-b-2 border-[#e2b04a] pb-1 font-semibold text-[#0f1115]" : "pb-1 text-[#8a92a0]"}>
            <span className="mr-1.5 text-[12px]">{String(i + 1).padStart(2, "0")}</span>
            {s}
          </li>
        ))}
      </ol>
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="grid min-h-[420px] place-items-center rounded-2xl bg-[#eef1f2] p-6 text-center text-[#5b6472]">
          The route map and the cars (with &ldquo;starting from&rdquo; prices) appear here in the next demo step.
        </div>
        <aside className="h-fit rounded-2xl border border-black/10 bg-white p-6">
          <h2 className="text-[20px] font-bold text-[#0f1115]">Your booking</h2>
          <p className="mt-1 text-[14px] text-[#5b6472]">
            {formatDate(r.date)} · {r.time} · {r.passengers} passenger{r.passengers > 1 ? "s" : ""}
            {r.mode === "hourly" ? ` · ${r.hours} hours` : ""}
          </p>
          <ul className="mt-5 space-y-4">
            <li>
              <p className="text-[12px] uppercase tracking-wide text-[#8a92a0]">{r.mode === "transfer" ? "Pick-up" : "Pick-up (by the hour)"}</p>
              <p className="font-semibold text-[#0f1115]">{r.from.name}</p>
              <p className="text-[13px] text-[#5b6472]">{r.from.address}</p>
            </li>
            {r.to && (
              <li>
                <p className="text-[12px] uppercase tracking-wide text-[#8a92a0]">Drop-off</p>
                <p className="font-semibold text-[#0f1115]">{r.to.name}</p>
                <p className="text-[13px] text-[#5b6472]">{r.to.address}</p>
              </li>
            )}
          </ul>
          <p className="mt-6 rounded-xl bg-[#f1f3f5] p-4 text-[14px] text-[#0f1115]">Your fixed fare is confirmed by your chauffeur before the ride. No payment online.</p>
        </aside>
      </div>
    </section>
  );
}
