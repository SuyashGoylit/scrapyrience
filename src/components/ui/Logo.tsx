import Link from "next/link";

export default function Logo({ size = 34 }: { size?: number }) {
  return (
    <Link href="/" className="logo">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo.svg" width={size} height={size} alt="" aria-hidden="true" />
      <span className="logo-word">
        scrapyrience<span className="dot">.</span>
      </span>
    </Link>
  );
}
