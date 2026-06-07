import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { categories } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <Logo size={34} />
          <p className="blurb">
            A little corner of the internet where Sejal &amp; Suyash scrapbook
            their way through Bangalore — one café, park, and questionable
            street-food dare at a time.
          </p>
        </div>
        <div className="footer-col">
          <h6>Explore</h6>
          {categories.slice(0, 5).map((c) => (
            <Link key={c.id} href={`/experiences/${c.id}`}>
              {c.name}
            </Link>
          ))}
        </div>
        <div className="footer-col">
          <h6>The Scrapbook</h6>
          <Link href="/about">About Us</Link>
          <Link href="/newsletter">Newsletter</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/">The Board</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © 2026 scrapyrience — made with <span className="heart">♥</span> in
          Bangalore
        </span>
        <span>est. 2026 · Sejal &amp; Suyash</span>
      </div>
    </footer>
  );
}
