"use client";

// The quote map without a Google key: MapLibre with OpenFreeMap's light style (OpenStreetMap data, free, no key).
// Transfeero's "route effect" (teardown of 20 Oct 2026): the black route line appears alone on the soft grey canvas
// (the canvas colour is the style's land colour), the pick-up and drop-off labels pop in, then the map fades in
// underneath. The line, pins and labels are our own layer, placed with the map's projection, so they show before the
// tiles arrive and follow the map when it moves.

import { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { RouteOverlay, ZoomButtons, type PlacedPin } from "./map-overlay";
import type { MapProps } from "./route-map";

const CANVAS = "#f2f3f0"; // the light style's land colour

export default function MapFree({ points, labels, avatar }: MapProps) {
  const el = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const [placed, setPlaced] = useState<{ path: string; pins: PlacedPin[]; w: number; h: number } | null>(null);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const container = el.current;
    if (!container) return;
    const all = points.length > 1 ? points : labels.map(l => l.at);
    const w = container.clientWidth, h = container.clientHeight;
    const padX = Math.round(Math.min(140, Math.max(70, w * 0.2)));
    const padY = Math.round(Math.min(110, Math.max(56, h * 0.16)));
    const bounds = new maplibregl.LngLatBounds();
    all.forEach(([lat, lng]) => bounds.extend([lng, lat]));

    const map = new maplibregl.Map({
      container,
      style: "https://tiles.openfreemap.org/styles/positron",
      attributionControl: false,
      cooperativeGestures: true,
      dragRotate: false,
      pitchWithRotate: false,
      touchPitch: false,
      maxPitch: 0,
      ...(all.length > 1 ? { bounds, fitBoundsOptions: { padding: { top: padY, bottom: padY, left: padX, right: padX } } } : { center: [all[0][1], all[0][0]] as [number, number], zoom: 12.5 }),
    });
    mapRef.current = map;
    map.addControl(new maplibregl.AttributionControl({ compact: true }), "bottom-right");
    const canvas = map.getCanvas();
    canvas.style.opacity = "0";
    canvas.style.transition = "opacity 600ms ease";

    let frame = 0;
    const place = () => {
      frame = 0;
      const path = points.length > 1 ? points.map(([lat, lng], i) => { const p = map.project([lng, lat]); return `${i ? "L" : "M"}${p.x.toFixed(1)} ${p.y.toFixed(1)}`; }).join(" ") : "";
      const pins = labels.map(l => { const p = map.project([l.at[1], l.at[0]]); return { x: p.x, y: p.y, data: l.data }; });
      setPlaced({ path, pins, w: container.clientWidth, h: container.clientHeight });
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(place);
    };
    place();
    map.on("move", schedule);
    map.on("resize", schedule);
    // Follow the box's size (docking on scroll, phone rotation…): resize the map and frame the route again.
    const ro = new ResizeObserver(() => {
      map.resize();
      if (all.length > 1) {
        const cw = container.clientWidth, ch = container.clientHeight;
        const px = Math.round(Math.min(140, Math.max(70, cw * 0.2))), py = Math.round(Math.min(110, Math.max(56, ch * 0.16)));
        map.fitBounds(bounds, { padding: { top: py, bottom: py, left: px, right: px }, duration: 0 });
      }
    });
    ro.observe(container);

    const timers = [window.setTimeout(() => setPhase(1), 80), window.setTimeout(() => setPhase(2), 380)];
    let shown = false;
    const showMap = () => {
      if (shown) return;
      shown = true;
      canvas.style.opacity = "1";
      setPhase(3);
    };
    map.once("load", () => timers.push(window.setTimeout(showMap, 260)));
    timers.push(window.setTimeout(showMap, 3500)); // never leave the map hidden
    return () => {
      timers.forEach(t => window.clearTimeout(t));
      cancelAnimationFrame(frame);
      ro.disconnect();
      map.remove();
      mapRef.current = null;
    };
  }, [points, labels]);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[16px]" style={{ background: CANVAS }}>
      <div ref={el} className="h-full w-full" />
      {placed && <RouteOverlay path={placed.path} pins={placed.pins} width={placed.w} height={placed.h} phase={phase} avatar={avatar} />}
      <ZoomButtons onIn={() => mapRef.current?.zoomIn()} onOut={() => mapRef.current?.zoomOut()} />
    </div>
  );
}
