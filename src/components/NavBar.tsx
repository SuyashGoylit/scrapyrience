"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Logo from "@/components/ui/Logo";
import Tape from "@/components/ui/Tape";
import { categories } from "@/lib/data";

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  const isHome = pathname === "/";
  const isExperience =
    pathname.startsWith("/experiences") || pathname.startsWith("/places");
  const isAbout = pathname === "/about";
  const isNewsletter = pathname === "/newsletter";

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Logo size={36} />

        <div className="nav-links">
          <Link href="/" className={"nav-link" + (isHome ? " on" : "")}>
            Home
          </Link>

          <div className="dropdown" ref={ref}>
            <button
              type="button"
              className={"nav-link" + (isExperience ? " on" : "")}
              onClick={(e) => {
                e.stopPropagation();
                setOpen((o) => !o);
              }}
            >
              Experiences ▾
            </button>
            {open && (
              <div className="dropdown-menu">
                <Tape style={{ top: -14, left: "50%", marginLeft: -48 }} />
                {categories.map((c) => (
                  <Link
                    key={c.id}
                    href={`/experiences/${c.id}`}
                    className="dd-item"
                    onClick={() => setOpen(false)}
                  >
                    <span className={"swatch sw-" + c.tint} />
                    {c.name}
                    <span className="ct">{c.count}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/about"
            className={"nav-link hide-sm" + (isAbout ? " on" : "")}
          >
            About Us
          </Link>
          <Link
            href="/newsletter"
            className={"nav-link hide-sm" + (isNewsletter ? " on" : "")}
          >
            Newsletter
          </Link>
          <Link href="/contact" className="nav-cta">
            Say Hello
          </Link>
        </div>
      </div>
    </nav>
  );
}
