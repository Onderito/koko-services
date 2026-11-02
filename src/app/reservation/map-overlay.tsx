// What the quote map draws on top of either map engine: the black route line, the two pins and their labels, placed
// on screen coordinates the engine gives us. Labels sit on the outer side of each pin (away from the other end of the
// route) and flip when they would leave the map; they pop in after the line (phase 2), as on Transfeero. In a narrow
// map (the docked column, phones) where a label fits on neither side, it takes the roomier side and narrows to it, the
// place name wrapping onto two lines, so it is never cut by the map's edge.

import { PlaceLabel, Pin, type LabelData } from "./map-label";

export type PlacedPin = { x: number; y: number; data: LabelData };

const LABEL_W = 300; // a label at its widest
const GAP = 16; // between the pin and its label
const EDGE = 8; // kept free along the map's edges

export function RouteOverlay({ path, pins, width, height, phase, drawLine = true, avatar }: { path: string; pins: PlacedPin[]; width: number; height: number; phase: number; drawLine?: boolean; avatar?: string }) {
  const [a, b] = pins;
  const placeOf = (p: PlacedPin, other?: PlacedPin): { side: "left" | "right"; room?: number } => {
    const outer = other ? (p.x <= other.x ? "left" : "right") : "right";
    if (width <= 0) return { side: outer };
    const inner = outer === "left" ? "right" : "left";
    const room = { left: p.x - GAP - EDGE, right: width - EDGE - GAP - p.x };
    const side = room[outer] >= LABEL_W ? outer : room[inner] >= LABEL_W ? inner : room.left > room.right ? "left" : "right";
    return { side, room: Math.max(0, room[side]) };
  };
  return (
    <div className="pointer-events-none absolute inset-0">
      {drawLine && path && (
        <svg className="absolute inset-0" width={width} height={height} aria-hidden="true" style={{ opacity: phase >= 1 ? 1 : 0, transition: "opacity 300ms ease" }}>
          <path d={path} fill="none" stroke="#1a1a1a" strokeWidth={Math.max(5, Math.min(6, 5 + (Math.min(width, height) - 400) / 320))} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      {pins.map((p, i) => {
        const { side, room } = placeOf(p, i === 0 ? b : a);
        return (
          <div key={p.data.kind} className="absolute" style={{ left: p.x, top: p.y }}>
            <span className="absolute -translate-x-1/2 -translate-y-1/2" style={{ opacity: phase >= 1 ? 1 : 0, transition: "opacity 300ms ease" }}>
              <Pin kind={p.data.kind} />
            </span>
            <span
              className="absolute top-0 block"
              style={{
                [side === "left" ? "right" : "left"]: GAP,
                width: "max-content",
                maxWidth: room,
                transform: `translateY(-50%) scale(${phase >= 2 ? 1 : 0.92})`,
                transformOrigin: side === "left" ? "right center" : "left center",
                opacity: phase >= 2 ? 1 : 0,
                transition: `opacity 260ms ease ${i * 80}ms, transform 320ms cubic-bezier(0.22,1,0.36,1) ${i * 80}ms`,
              }}
            >
              <PlaceLabel data={p.data} avatar={avatar} />
            </span>
          </div>
        );
      })}
    </div>
  );
}

export function ZoomButtons({ onIn, onOut }: { onIn: () => void; onOut: () => void }) {
  const b = "grid h-9 w-9 place-items-center text-[18px] font-semibold text-[#1a1a1a] transition-colors hover:bg-[#f2f4f7]";
  return (
    <div className="absolute right-3 top-3 z-10 flex flex-col overflow-hidden rounded-[10px] bg-white shadow-[0_4px_14px_rgba(15,17,21,0.15)] ring-1 ring-black/5">
      <button type="button" aria-label="Zoom in" onClick={onIn} className={b}>
        +
      </button>
      <span className="h-px bg-[#eaecf0]" />
      <button type="button" aria-label="Zoom out" onClick={onOut} className={b}>
        −
      </button>
    </div>
  );
}
