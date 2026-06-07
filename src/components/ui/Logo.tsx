import Link from "next/link";

function LogoMark({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
      <g transform="rotate(-7 22 23)">
        <rect
          x="9"
          y="10"
          width="26"
          height="26"
          rx="2.5"
          fill="var(--color-paper)"
          stroke="var(--color-ink)"
          strokeWidth="1.8"
        />
        <rect
          x="13"
          y="14"
          width="18"
          height="13"
          fill="var(--color-terracotta)"
          opacity="0.85"
        />
        <line
          x1="13.5"
          y1="31"
          x2="25"
          y2="31"
          stroke="var(--color-ink)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <line
          x1="13.5"
          y1="33.4"
          x2="20"
          y2="33.4"
          stroke="var(--color-ink)"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.6"
        />
      </g>
      <circle
        cx="22"
        cy="8"
        r="3.6"
        fill="var(--color-terracotta)"
        stroke="var(--color-ink)"
        strokeWidth="1.1"
      />
    </svg>
  );
}

export default function Logo({ size = 34 }: { size?: number }) {
  return (
    <Link href="/" className="logo">
      <LogoMark size={size} />
      <span className="logo-word">
        scrapyrience<span className="dot">.</span>
      </span>
    </Link>
  );
}
