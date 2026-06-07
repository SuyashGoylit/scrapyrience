import Link from "next/link";
import Tape from "@/components/ui/Tape";

export default function AboutPage() {
  return (
    <div className="app">
      <header className="page-head">
        <span className="section-tab">about us</span>
        <h1>The two of us</h1>
        <p>A short note on who&rsquo;s behind the tape and glue.</p>
      </header>
      <div className="about" style={{ marginTop: 24 }}>
        <div className="about-photo">
          <div className="pol3" style={{ transform: "rotate(-3deg)" }}>
            <Tape
              kind="sage"
              style={{ top: -12, left: "50%", marginLeft: -48, transform: "rotate(-4deg)" }}
            />
            <div className="ph" style={{ height: 260 }}>
              <span>us, somewhere in BLR</span>
            </div>
            <div className="cap">Sejal &amp; Suyash ♥</div>
          </div>
        </div>
        <div>
          <h2>New to the city, hungry to explore.</h2>
          <p>
            We moved to Bangalore a few months ago — new jobs, new neighbourhood,
            a very long list of &ldquo;we should check that out&rdquo;. Rather
            than letting weekends slip by, we started treating the city like a
            scrapbook to fill.
          </p>
          <p>
            Every entry here is something we actually did, together. We rate it
            honestly out of ten, jot down the one moment that stuck, and note
            whether we&rsquo;d go back. If it helps another newcomer find their
            favourite spot, even better.
          </p>
          <p>
            Thanks for flipping through. Pull up a chair — there&rsquo;s filter
            coffee.
          </p>
          <div className="signs">— S &amp; S</div>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: 36 }}>
        <Link href="/" className="nav-cta">
          Back to the board →
        </Link>
      </div>
    </div>
  );
}
