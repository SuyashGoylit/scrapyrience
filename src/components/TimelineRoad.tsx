"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Rating from "@/components/ui/Rating";
import Tape from "@/components/ui/Tape";
import type { TimelineEntry } from "@/lib/data";

const ROW_H = 300;
const TOP_PAD = 90;
const BOT_PAD = 120;
const GAP = 26; // gap between a road stop and its card
const tints = ["", "sage", "pink"] as const;

const clamp = (v: number, lo: number, hi: number) =>
  Math.max(lo, Math.min(hi, v));

type Point = { x: number; y: number };

// Smooth cubic-Bézier path through the given points (Catmull-Rom → Bézier),
// so the road flows in S-curves instead of sharp corners.
function buildPath(pts: Point[]): string {
  if (pts.length < 2) return "";
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? p2;
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${c1x} ${c1y} ${c2x} ${c2y} ${p2.x} ${p2.y}`;
  }
  return d;
}

export default function TimelineRoad({
  entries,
}: {
  entries: TimelineEntry[];
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const scooterRef = useRef<SVGGElement>(null);
  const [width, setWidth] = useState(0);

  const H = TOP_PAD + entries.length * ROW_H + BOT_PAD;

  // Measure the container width so the SVG can be 1:1 with pixels (no
  // aspect-ratio distortion of the road or scooter) and regenerate on resize.
  useLayoutEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const update = () => setWidth(el.clientWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // --- geometry -----------------------------------------------------------
  const isNarrow = width > 0 && width < 640;
  const centerX = isNarrow ? Math.max(46, width * 0.17) : width / 2;
  const amp = isNarrow
    ? clamp(width * 0.06, 14, 40)
    : clamp(width * 0.2, 80, 150);

  const anchors = entries.map((_, i) => ({
    x: centerX + (i % 2 === 0 ? amp : -amp),
    y: TOP_PAD + i * ROW_H + ROW_H / 2,
    side: (i % 2 === 0 ? 1 : -1) as 1 | -1,
  }));

  // Lead-in above the first stop and lead-out below the last so the road
  // extends past the cards at both ends.
  const pts: Point[] =
    anchors.length > 0
      ? [
          { x: centerX, y: 0 },
          ...anchors.map((a) => ({ x: a.x, y: a.y })),
          { x: centerX, y: H },
        ]
      : [];
  const d = width > 0 ? buildPath(pts) : "";

  function cardStyle(a: (typeof anchors)[number]): React.CSSProperties {
    if (isNarrow) {
      // All cards stacked to the right of a gently wiggling left-side road.
      const left = centerX + amp + GAP;
      return { top: a.y, left, width: Math.max(150, width - left - 8) };
    }
    if (a.side === 1) {
      const left = a.x + GAP;
      return { top: a.y, left, width: clamp(width - left - 12, 150, 330) };
    }
    const right = width - a.x + GAP;
    return { top: a.y, right, width: clamp(a.x - GAP - 12, 150, 330) };
  }

  // --- scroll-driven, eased scooter ---------------------------------------
  useEffect(() => {
    const path = pathRef.current;
    const scooter = scooterRef.current;
    const wrap = wrapRef.current;
    if (!path || !scooter || !wrap || !d) return;

    const total = path.getTotalLength();
    let raf = 0;

    const place = (p: number) => {
      const len = p * total;
      const pt = path.getPointAtLength(len);
      const ahead = path.getPointAtLength(Math.min(len + 2, total));
      const behind = path.getPointAtLength(Math.max(len - 2, 0));
      const angle =
        (Math.atan2(ahead.y - behind.y, ahead.x - behind.x) * 180) / Math.PI;
      // Top-down scooter: rotate to face the road's direction of travel. The art
      // points down (+y), so `angle - 90` is its heading. The road only ever
      // descends, so this stays within ±90° — it turns into curves, never flips.
      const heading = angle - 90;
      scooter.setAttribute(
        "transform",
        `translate(${pt.x} ${pt.y}) rotate(${heading}) scale(1.6) translate(-20 -20)`,
      );
    };

    // Pin the scooter to the road point at the viewport's vertical center, so
    // it rides along with you at a constant pace — advancing linearly with the
    // scroll across the whole road, never rushing or sitting idle. (Gentle
    // S-curves mean arc-length ≈ vertical extent, so it stays ~centered.)
    const render = () => {
      raf = 0;
      const r = wrap.getBoundingClientRect();
      const progress = clamp((window.innerHeight / 2 - r.top) / H, 0, 1);
      place(progress);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(render);
    };

    render();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [d, H]);

  return (
    <div className="tl-road" ref={wrapRef} style={{ height: H }}>
      {width > 0 && (
        <svg
          className="tl-road-svg"
          width={width}
          height={H}
          viewBox={`0 0 ${width} ${H}`}
          fill="none"
          aria-hidden
        >
          {/* dark asphalt edge */}
          <path className="tl-road-edge" d={d} />
          {/* asphalt surface (also the path we measure) */}
          <path ref={pathRef} className="tl-asphalt" d={d} />
          {/* yellow dashed centerline */}
          <path className="tl-centerline" d={d} />
          {anchors.map((a, i) => (
            <circle key={i} className="tl-stop" cx={a.x} cy={a.y} r={9} />
          ))}
          {/* Activa — hand-drawn top-down view, facing down (+y = forward) */}
          <g ref={scooterRef} className="tl-scooter">
            {/* rear + front wheels peeking along the centerline */}
            <rect x="17.5" y="5" width="5" height="9" rx="2.4" fill="#3f352a" stroke="none" />
            <rect x="17.5" y="27" width="5" height="9" rx="2.4" fill="#3f352a" stroke="none" />
            {/* body / floorboard */}
            <path
              d="M14 11 C13 14 13 17 14 20 C13 24 13.5 28 16 30 L24 30 C26.5 28 27 24 26 20 C27 17 27 14 26 11 C25 8.5 22.5 7.5 20 7.5 C17.5 7.5 15 8.5 14 11 Z"
              fill="#f8f2e4"
            />
            {/* seat (rear) */}
            <ellipse cx="20" cy="15.5" rx="4.2" ry="6" fill="#3f352a" />
            {/* handlebar (front) */}
            <path d="M11 26 C14 24 26 24 29 26" strokeWidth="2" />
            <circle cx="10.5" cy="26.2" r="1.4" fill="#3f352a" stroke="none" />
            <circle cx="29.5" cy="26.2" r="1.4" fill="#3f352a" stroke="none" />
            {/* mirrors */}
            <path d="M11 26 L8.5 28.5 M29 26 L31.5 28.5" strokeWidth="1.3" />
            {/* front mudguard tip */}
            <path d="M17.5 31 Q20 34 22.5 31" />
          </g>
        </svg>
      )}

      {width > 0 &&
        anchors.map((a, i) => {
          const entry = entries[i];
          const tint = tints[i % tints.length];
          return (
            <Link
              key={entry.slug}
              href={`/timeline/${entry.slug}`}
              className="tl-card"
              style={cardStyle(a)}
            >
              <Tape kind={tint} style={{ top: -13, left: 22 }} />
              <span className="tl-date">{entry.label}</span>
              <ul className="tl-places">
                {entry.places.map((p) => (
                  <li key={p.id}>
                    <span className="tl-name">{p.name}</span>
                    <span className="tl-area">{p.area}</span>
                    <Rating value={p.rating} small />
                  </li>
                ))}
              </ul>
              <span className="tl-open">open this day →</span>
            </Link>
          );
        })}
    </div>
  );
}
