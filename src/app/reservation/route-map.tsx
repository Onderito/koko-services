"use client";

// The quote page's map: Google Maps when the browser key is set (as on Transfeero), the free MapLibre map otherwise or
// if Google cannot load. Each engine's code is loaded only on this page, only when needed.

import dynamic from "next/dynamic";
import { useCallback, useState } from "react";
import type { LabelData } from "./map-label";

export type MapProps = { points: [lat: number, lng: number][]; labels: { at: [lat: number, lng: number]; data: LabelData }[]; avatar?: string };

const Skeleton = () => <div className="h-full w-full animate-pulse rounded-[16px] bg-[#eef1f2]" aria-hidden="true" />;
const MapFree = dynamic(() => import("./map-free"), { ssr: false, loading: Skeleton });
const MapGoogle = dynamic(() => import("./map-google"), { ssr: false, loading: Skeleton });

const KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_BROWSER_KEY ?? "";

export default function RouteMap(props: MapProps) {
  const [failed, setFailed] = useState(false);
  const fail = useCallback(() => setFailed(true), []);
  return KEY && !failed ? <MapGoogle {...props} apiKey={KEY} onFail={fail} /> : <MapFree {...props} />;
}
