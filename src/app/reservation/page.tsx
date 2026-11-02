// /reservation?t=<signed trip> — the quote request in three steps (01 Vehicle · 02 Details · 03 Confirm), with
// Transfeero's layout and route effect (teardown of 20 Oct 2026, docs/design in the koko project). Quotes, not
// payments: each car shows "Starting from" (the site's own price guide) and the request goes to the owner's inbox.
// Never indexed; the trip travels in the link (lib/reservations/trip.ts) and expires after 7 days.

import type { Metadata } from "next";
import Link from "next/link";
import { readTrip } from "@/lib/reservations/trip";
import { carOffers } from "@/lib/reservations/pricing";
import { getRoute, type RoutePoint } from "@/lib/routes/route";
import { getRatings } from "@/lib/reviews/ratings";
import QuoteFlow, { type QuoteRating, type QuoteTrip } from "./quote-flow";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Your quote | Kokolimo",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

/** At most `max` points, keeping the first and the last: enough for a smooth line, light for the page. */
function thin(points: RoutePoint[], max = 300): RoutePoint[] {
  if (points.length <= max) return points;
  const step = (points.length - 1) / (max - 1);
  return Array.from({ length: max }, (_, i) => points[Math.round(i * step)]);
}

export default async function ReservationPage({ searchParams }: { searchParams: Promise<{ t?: string }> }) {
  const { t = "" } = await searchParams;
  const trip = readTrip(t);

  if (!trip) {
    return (
      <section className="mx-auto max-w-xl px-4 pb-24 pt-[calc(var(--nav-clearance)+2rem)] text-center">
        <h1 className="text-[28px] font-bold text-[#0f1115]">This quote is no longer available</h1>
        <p className="mt-3 text-[16px] text-[#5b6472]">Quotes are kept for 7 days. Start a new one in a few seconds.</p>
        <Link href="/#book" className="mt-6 inline-flex rounded-full bg-[#e8ba64] px-6 py-3 font-bold text-[#0f1115]">
          Get a new quote
        </Link>
      </section>
    );
  }

  const route = trip.mode === "transfer" && trip.to ? await getRoute(trip.from, trip.to) : null;
  const pub: QuoteTrip = {
    mode: trip.mode,
    from: { id: trip.from.id, name: trip.from.name, address: trip.from.address, kind: trip.from.kind, lat: trip.from.lat, lng: trip.from.lng },
    to: trip.to ? { id: trip.to.id, name: trip.to.name, address: trip.to.address, kind: trip.to.kind, lat: trip.to.lat, lng: trip.to.lng } : null,
    date: trip.date,
    time: trip.time,
    trip: trip.trip,
    returnDate: trip.returnDate,
    returnTime: trip.returnTime,
    passengers: trip.passengers,
    hours: trip.hours,
  };

  const ratings: QuoteRating[] = (await getRatings()).map(r => ({ source: r.source, rating: r.rating, count: r.count, url: r.url }));

  return (
    <QuoteFlow
      ratings={ratings}
      token={t}
      trip={pub}
      route={route ? { points: thin(route.points), km: Math.round(route.distanceM / 100) / 10, minutes: Math.max(1, Math.round(route.durationS / 60)), estimated: route.source === "estimate" } : null}
      offers={carOffers(trip)}
    />
  );
}
