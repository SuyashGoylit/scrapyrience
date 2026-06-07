import type { ReactNode } from "react";

type DoodleType =
  | "heart"
  | "heartfill"
  | "scribheart"
  | "spark"
  | "star"
  | "flower"
  | "tulip"
  | "dots"
  | "arrow"
  | "wave"
  | "swirl"
  | "bow"
  | "cloud"
  | "moon"
  | "plus"
  | "leaf"
  | "scooter"
  | "camera"
  | "cup"
  | "balloon"
  | "note"
  | "sun"
  | "butterfly"
  | "icecream"
  | "smiley";

function doodle(type: DoodleType): ReactNode {
  switch (type) {
    case "heart":
      return (
        <path d="M20 33 C9 24 7 14.5 12.5 11 C16.5 8.5 20 11.5 20 14.5 C20 11.5 23.5 8.5 27.5 11 C33 14.5 31 24 20 33 Z" />
      );
    case "heartfill":
      return (
        <path
          d="M20 32 C10 24 8 15 13 12 C16.5 10 20 12.5 20 15 C20 12.5 23.5 10 27 12 C32 15 30 24 20 32 Z"
          fill="currentColor"
          stroke="none"
        />
      );
    case "scribheart":
      return (
        <>
          <path d="M20 33 C9 24 7 14.5 12.5 11 C16.5 8.5 20 11.5 20 14.5 C20 11.5 23.5 8.5 27.5 11 C33 14.5 31 24 20 33 Z" />
          <path
            d="M13 15 L26 19 M13.5 19 L27 23 M15 23 L25 26.5 M17.5 27 L23 30"
            strokeWidth="1.3"
          />
        </>
      );
    case "spark":
      return (
        <path d="M20 3 C21 16 24 19 37 20 C24 21 21 24 20 37 C19 24 16 21 3 20 C16 19 19 16 20 3 Z" />
      );
    case "star":
      return (
        <path d="M20 5 L24 16 L36 16 L26.5 23 L30 35 L20 28 L10 35 L13.5 23 L4 16 L16 16 Z" />
      );
    case "flower":
      return (
        <g>
          <circle cx="20" cy="11" r="5" />
          <circle cx="28.5" cy="16.5" r="5" />
          <circle cx="25" cy="27" r="5" />
          <circle cx="15" cy="27" r="5" />
          <circle cx="11.5" cy="16.5" r="5" />
          <circle cx="20" cy="20" r="3.2" fill="currentColor" stroke="none" />
        </g>
      );
    case "tulip":
      return (
        <>
          <path d="M20 38 C20 28 20 22 20 18" />
          <path d="M20 18 C14 18 12 11 14 7 C17 9 18 11 20 12 C22 11 23 9 26 7 C28 11 26 18 20 18 Z" />
          <path
            d="M20 30 C16 28 13 29 12 25 M20 26 C24 24 27 25 28 21"
            strokeWidth="1.3"
          />
        </>
      );
    case "dots":
      return (
        <g fill="currentColor" stroke="none">
          <circle cx="12" cy="20" r="1.8" />
          <circle cx="20" cy="20" r="1.8" />
          <circle cx="28" cy="20" r="1.8" />
        </g>
      );
    case "arrow":
      return (
        <>
          <path d="M5 12 C18 7 29 13 31 27" />
          <path d="M31 27 L24.5 23 M31 27 L34 19.5" strokeWidth="1.5" />
        </>
      );
    case "wave":
      return <path d="M2 22 Q8 12 14 22 T26 22 T38 22" />;
    case "swirl":
      return <path d="M30 12 C14 6 6 22 14 28 C20 32 26 26 22 22 C19 19 16 22 17 24" />;
    case "bow":
      return (
        <>
          <path d="M18 20 L6 13 L6 27 Z" />
          <path d="M22 20 L34 13 L34 27 Z" />
          <circle cx="20" cy="20" r="3" />
          <path
            d="M18.5 22.5 L14 32 M21.5 22.5 L26 32"
            strokeWidth="1.4"
          />
        </>
      );
    case "cloud":
      return (
        <path d="M10 27 C3.5 27 3.5 18 11 18 C12 11.5 23 11.5 24 18 C31 16 35.5 25 28.5 27 Z" />
      );
    case "moon":
      return (
        <path d="M25 7 C17 9.5 17 26.5 25 29 C18.5 31 10 25 10 18 C10 11 18.5 5.5 25 7 Z" />
      );
    case "plus":
      return (
        <>
          <path d="M20 9 V31 M9 20 H31" />
          <path
            d="M13 13 L27 27 M27 13 L13 27"
            strokeWidth="1.2"
            opacity="0.7"
          />
        </>
      );
    case "leaf":
      return (
        <>
          <path d="M8 32 C8 16 20 8 32 8 C32 24 20 32 8 32 Z" />
          <path d="M12 28 L28 12" strokeWidth="1.2" />
        </>
      );
    case "scooter":
      return (
        <g>
          <circle cx="9" cy="31" r="5.5" />
          <circle cx="32" cy="31" r="5.5" />
          <path d="M9 31 C9 24 13 22 19 22 L25 22 C28 22 30 25 32 31" />
          <path d="M30 27 L31 12 L36 11" />
          <path d="M13 22 C12 18 16 17 21 18" />
          <path d="M31 12 L27 12" strokeWidth="1.4" />
        </g>
      );
    case "camera":
      return (
        <g>
          <path d="M6 15 H13 L15 11 H25 L27 15 H34 V32 H6 Z" />
          <circle cx="20" cy="23" r="5.5" />
          <circle cx="30" cy="18.5" r="1" fill="currentColor" />
        </g>
      );
    case "cup":
      return (
        <g>
          <path d="M12 16 L14 34 H26 L28 16 Z" />
          <path d="M9 16 H31" />
          <path d="M22 16 L25 8" />
          <path
            d="M15 22 H25 M16 27 H24"
            strokeWidth="1.1"
            opacity="0.6"
          />
        </g>
      );
    case "balloon":
      return (
        <>
          <circle cx="20" cy="15" r="9" />
          <path d="M20 24 L18 27 H22 Z" />
          <path d="M20 27 C18 31 22 35 20 39" strokeWidth="1.2" />
        </>
      );
    case "note":
      return (
        <g>
          <path d="M16 32 L16 12 L28 9 L28 28" />
          <ellipse cx="13" cy="32" rx="4" ry="3" />
          <ellipse cx="25" cy="28" rx="4" ry="3" />
        </g>
      );
    case "sun":
      return (
        <g>
          <circle cx="20" cy="20" r="6" />
          <path
            d="M20 4 V9 M20 31 V36 M4 20 H9 M31 20 H36 M9 9 L12 12 M31 9 L28 12 M9 31 L12 28 M31 31 L28 28"
            strokeWidth="1.4"
          />
        </g>
      );
    case "butterfly":
      return (
        <>
          <path d="M20 11 C9 5 4 17 13 21 C5 25 9 35 20 29" />
          <path d="M20 11 C31 5 36 17 27 21 C35 25 31 35 20 29" />
          <path d="M20 11 V29" strokeWidth="1.3" />
          <path d="M20 11 L17 6 M20 11 L23 6" strokeWidth="1.1" />
        </>
      );
    case "icecream":
      return (
        <>
          <path d="M13 20 L20 38 L27 20 Z" />
          <path d="M12 20 C12 9 28 9 28 20 Z" />
          <path d="M15 25 L18 31 M22 24 L19 30" strokeWidth="1" opacity="0.5" />
        </>
      );
    case "smiley":
      return (
        <g>
          <circle cx="20" cy="20" r="13" />
          <circle cx="15" cy="17" r="1.4" fill="currentColor" />
          <circle cx="25" cy="17" r="1.4" fill="currentColor" />
          <path d="M14 24 C17 28 23 28 26 24" />
        </g>
      );
    default:
      return null;
  }
}

type ColorKey = "pink" | "sage" | "terra";

type Item = [DoodleType, number, number, number, number, ColorKey?];

const SCATTER: Item[] = [
  ["scribheart", 46, 8, 38, 8],
  ["bow", 9, 4, 42, -12, "sage"],
  ["moon", 28, 4, 28, 0],
  ["star", 68, 4, 24, 12, "pink"],
  ["cloud", 83, 6, 48, 0],
  ["dots", 58, 3, 24, 0],
  ["sun", 16, 9, 30, 0, "terra"],
  ["camera", 92, 14, 40, -8],
  ["heart", 38, 14, 20, -8],
  ["spark", 4, 16, 26, 0, "terra"],
  ["scooter", 74, 12, 52, 4],
  ["note", 54, 16, 24, 10, "pink"],
  ["tulip", 90, 26, 42, 6, "sage"],
  ["flower", 33, 22, 28, 10],
  ["wave", 5, 28, 60, -6],
  ["arrow", 64, 24, 40, 14],
  ["plus", 24, 28, 22, 0],
  ["butterfly", 84, 34, 40, 8, "pink"],
  ["heartfill", 48, 28, 16, 0, "terra"],
  ["swirl", 14, 38, 32, 0],
  ["balloon", 70, 34, 34, -6, "sage"],
  ["star", 36, 42, 22, -10],
  ["dots", 92, 42, 24, 0],
  ["cup", 4, 46, 36, -4],
  ["scribheart", 52, 50, 34, 6, "pink"],
  ["icecream", 88, 48, 34, 8],
  ["spark", 28, 50, 22, 0],
  ["flower", 16, 54, 28, -12, "sage"],
  ["smiley", 62, 50, 30, 0, "terra"],
  ["heart", 78, 56, 20, 10],
  ["wave", 38, 60, 56, 4],
  ["note", 6, 62, 26, -8, "pink"],
  ["tulip", 24, 66, 40, 8],
  ["bow", 86, 64, 38, 10, "pink"],
  ["plus", 50, 66, 22, 0, "terra"],
  ["moon", 68, 70, 24, -20, "sage"],
  ["scooter", 12, 74, 50, -3, "terra"],
  ["camera", 40, 74, 36, 6],
  ["heartfill", 60, 76, 16, 0],
  ["arrow", 78, 76, 40, -8],
  ["star", 4, 84, 22, 12, "pink"],
  ["scribheart", 30, 84, 32, -6],
  ["butterfly", 52, 86, 34, -8, "sage"],
  ["flower", 70, 88, 28, 8],
  ["dots", 20, 90, 24, 0],
  ["spark", 90, 84, 24, 0, "terra"],
  ["cloud", 8, 94, 44, 0],
  ["balloon", 44, 94, 30, 6, "pink"],
  ["heart", 62, 94, 20, 8],
  ["sun", 84, 94, 28, 0, "terra"],
  ["plus", 34, 36, 20, 0],
  ["cup", 94, 70, 34, 6, "sage"],
  ["leaf", 96, 56, 28, 20, "sage"],
  ["icecream", 16, 20, 30, -10, "pink"],
];

const DCOLOR: Record<ColorKey, string> = {
  pink: "var(--color-pink)",
  sage: "var(--color-sage)",
  terra: "var(--color-terracotta)",
};

export default function Doodles() {
  return (
    <div className="doodle-layer" aria-hidden="true">
      {SCATTER.map((g, i) => {
        const [type, left, top, size, rotr, ck] = g;
        return (
          <svg
            key={i}
            width={size}
            height={size}
            viewBox="0 0 40 40"
            style={{
              top: top + "%",
              left: left + "%",
              transform: `rotate(${rotr}deg)`,
              color: ck ? DCOLOR[ck] : undefined,
            }}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {doodle(type)}
          </svg>
        );
      })}
      <span
        className="doodle-word"
        style={{ top: "37%", left: "70%", transform: "rotate(-6deg)" }}
      >
        xoxo
      </span>
      <span
        className="doodle-word"
        style={{ top: "78%", left: "40%", transform: "rotate(4deg)" }}
      >
        collect happy moments
      </span>
    </div>
  );
}
