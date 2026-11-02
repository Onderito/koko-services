"use client";

// The quote map with Google Maps, as on Transfeero (teardown of 20 Oct 2026): Maps JavaScript API loaded only on this
// page and asynchronously, no default controls, cooperative gestures, a light style of our own whose land colour is the
// canvas colour, the route as a black polyline, and the pins and labels as our own overlay (an OverlayView, so no Map
// ID and no deprecated Marker are needed). Used when NEXT_PUBLIC_GOOGLE_MAPS_BROWSER_KEY is set; if the map cannot
// load, onFail switches the page to the free map.

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { RouteOverlay, ZoomButtons, type PlacedPin } from "./map-overlay";
import type { MapProps } from "./route-map";

const CANVAS = "#eef1f2";

// Soft greys, white roads, quiet water, no points of interest.
const LIGHT_STYLE: google.maps.MapTypeStyle[] = [
  { elementType: "geometry", stylers: [{ color: CANVAS }] },
  { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#8a9096" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#ffffff" }, { weight: 3 }] },
  { featureType: "administrative", elementType: "geometry", stylers: [{ visibility: "off" }] },
  { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#5b6472" }] },
  { featureType: "poi", stylers: [{ visibility: "off" }] },
  { featureType: "transit", stylers: [{ visibility: "off" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
  { featureType: "road", elementType: "labels", stylers: [{ visibility: "off" }] },
  { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#e3e7e9" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#d6dee3" }] },
  { featureType: "water", elementType: "labels", stylers: [{ visibility: "off" }] },
  { featureType: "landscape.natural", elementType: "geometry", stylers: [{ color: CANVAS }] },
];

let loading: Promise<void> | null = null;
function loadMaps(key: string): Promise<void> {
  if (typeof google !== "undefined" && typeof google.maps?.importLibrary === "function") return Promise.resolve();
  loading ??= new Promise((resolve, reject) => {
    const w = window as unknown as Record<string, unknown>;
    w.__kokoMapsReady = () => resolve();
    const s = document.createElement("script");
    s.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(key)}&v=weekly&loading=async&callback=__kokoMapsReady`;
    s.async = true;
    s.onerror = () => reject(new Error("Google Maps could not load"));
    document.head.appendChild(s);
  });
  return loading;
}

export default function MapGoogle({ points, labels, avatar, apiKey, onFail }: MapProps & { apiKey: string; onFail: () => void }) {
  const el = useRef<HTMLDivElement>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const [pane, setPane] = useState<HTMLDivElement | null>(null);
  const [pins, setPins] = useState<PlacedPin[]>([]);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    let cancelled = false;
    let line: google.maps.Polyline | null = null;
    let overlay: google.maps.OverlayView | null = null;
    const timers: number[] = [];
    (async () => {
      try {
        await loadMaps(apiKey);
        const { Map, Polyline, OverlayView } = (await google.maps.importLibrary("maps")) as google.maps.MapsLibrary;
        const { LatLng, LatLngBounds } = (await google.maps.importLibrary("core")) as google.maps.CoreLibrary;
        if (cancelled || !el.current) return;
        const container = el.current;
        const map = new Map(container, {
          disableDefaultUI: true,
          clickableIcons: false,
          gestureHandling: "cooperative",
          backgroundColor: CANVAS,
          styles: LIGHT_STYLE,
          keyboardShortcuts: false,
        });
        mapRef.current = map;
        // A refused key or a reached quota: Google calls gm_authFailure, or the tiles never finish. Either way, the free
        // map takes over (nothing is billed beyond the quota set in the Google Cloud console).
        (window as unknown as { gm_authFailure?: () => void }).gm_authFailure = () => !cancelled && onFail();
        let tiled = false;
        map.addListener("tilesloaded", () => {
          tiled = true;
        });
        timers.push(window.setTimeout(() => !tiled && !cancelled && onFail(), 8000));
        const all = points.length > 1 ? points : labels.map(l => l.at);
        if (all.length > 1) {
          const bounds = new LatLngBounds();
          all.forEach(([lat, lng]) => bounds.extend(new LatLng(lat, lng)));
          const w = container.clientWidth, h = container.clientHeight;
          const padX = Math.round(Math.min(140, Math.max(70, w * 0.2)));
          const padY = Math.round(Math.min(110, Math.max(56, h * 0.16)));
          map.fitBounds(bounds, { top: padY, bottom: padY, left: padX, right: padX });
        } else {
          map.setCenter(new LatLng(all[0][0], all[0][1]));
          map.setZoom(13);
        }
        if (points.length > 1) {
          line = new Polyline({ map, path: points.map(([lat, lng]) => ({ lat, lng })), strokeColor: "#1a1a1a", strokeOpacity: 1, strokeWeight: 5, geodesic: true, clickable: false, zIndex: 2 });
        }

        // Pins and labels in the map's own float pane, so they move with it.
        class Labels extends OverlayView {
          div = document.createElement("div");
          onAdd() {
            this.div.style.position = "absolute";
            this.getPanes()?.floatPane.appendChild(this.div);
            setPane(this.div);
          }
          draw() {
            const proj = this.getProjection();
            if (!proj) return;
            setPins(
              labels.map(l => {
                const p = proj.fromLatLngToDivPixel(new LatLng(l.at[0], l.at[1]));
                return { x: p?.x ?? 0, y: p?.y ?? 0, data: l.data };
              }),
            );
          }
          onRemove() {
            this.div.remove();
          }
        }
        overlay = new Labels();
        overlay.setMap(map);
        timers.push(window.setTimeout(() => setPhase(1), 80), window.setTimeout(() => setPhase(2), 380), window.setTimeout(() => setPhase(3), 700));
      } catch (e) {
        console.error("[quote map] Google Maps failed, using the free map", e);
        if (!cancelled) onFail();
      }
    })();
    return () => {
      cancelled = true;
      timers.forEach(t => window.clearTimeout(t));
      line?.setMap(null);
      overlay?.setMap(null);
      mapRef.current = null;
    };
  }, [points, labels, apiKey, onFail]);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[16px]" style={{ background: CANVAS }}>
      <div ref={el} className="h-full w-full" />
      {pane && createPortal(<RouteOverlay path="" pins={pins} width={0} height={0} phase={phase} drawLine={false} avatar={avatar} />, pane)}
      <ZoomButtons onIn={() => mapRef.current?.setZoom((mapRef.current.getZoom() ?? 12) + 1)} onOut={() => mapRef.current?.setZoom((mapRef.current.getZoom() ?? 12) - 1)} />
    </div>
  );
}
