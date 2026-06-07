import type { CSSProperties } from "react";

export function StarSticker({ style }: { style?: CSSProperties }) {
  return (
    <svg
      className="svg-sticker"
      width="46"
      height="46"
      viewBox="0 0 24 24"
      style={style}
    >
      <path
        d="M12 2l2.6 6.3L21 9l-4.8 4.3L17.6 20 12 16.5 6.4 20l1.4-6.7L3 9l6.4-.7z"
        fill="oklch(0.66 0.075 18)"
        opacity="0.9"
      />
    </svg>
  );
}

export function HeartSticker({ style }: { style?: CSSProperties }) {
  return (
    <svg
      className="svg-sticker"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      style={style}
    >
      <path
        d="M12 20s-7-4.6-9.2-9C1.3 7.7 3 4.8 6 4.8c2 0 3.2 1.3 4 2.5.8-1.2 2-2.5 4-2.5 3 0 4.7 2.9 3.2 6.2C19 15.4 12 20 12 20z"
        fill="oklch(0.63 0.095 48)"
        opacity="0.88"
      />
    </svg>
  );
}
