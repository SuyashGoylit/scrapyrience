import { categories, places } from "@/lib/data";
import CategoryGrid from "@/components/CategoryGrid";
import PlacePolaroid from "@/components/PlacePolaroid";
import { StarSticker, HeartSticker } from "@/components/ui/Stickers";
import Tape from "@/components/ui/Tape";

export default function Home() {
  const recent = places.filter((p) => !p.stub).slice(0, 4);

  return (
    <div className="app">
      <header className="hero">
        <StarSticker style={{ top: 30, left: "18%", transform: "rotate(-14deg)" }} />
        <HeartSticker style={{ top: 70, right: "20%", transform: "rotate(12deg)" }} />
        <p className="kicker">scrap·book + experience · est. 2026</p>
        <h1>
          scrapyrience<span className="dot">.</span>
        </h1>
        <p className="lede">
          We moved to Bangalore a few months ago and fell a little in love. This
          is our scrapbook — taped-up, slightly messy, and full of the places we
          keep going back to.
        </p>
        <p className="by">
          <b>Sejal</b> <span className="heart">♥</span> <b>Suyash</b>
        </p>
      </header>

      <section style={{ marginTop: 34 }}>
        <span className="section-tab">about us</span>
        <div className="about">
          <div className="about-photo">
            <div
              className="pol3"
              style={{ transform: "rotate(-3deg)" }}
            >
              <Tape
                kind="sage"
                style={{ top: -12, left: "50%", marginLeft: -48, transform: "rotate(-4deg)" }}
              />
              <div className="ph" style={{ height: 240 }}>
                <span>us, somewhere in BLR</span>
              </div>
              <div className="cap">the two of us ♥</div>
            </div>
          </div>
          <div>
            <h2>Hi, we&rsquo;re Sejal &amp; Suyash.</h2>
            <p>
              Two recent transplants to Bangalore with a long list of places to
              try and zero chill about exploring them. Cafés on slow mornings,
              breweries on Fridays, parks when the city gets loud, museums when
              it rains.
            </p>
            <p>
              Instead of letting it all blur together, we&rsquo;re pinning every
              outing here — a write-up, a rating out of ten, the one thing
              we&rsquo;ll never forget, and whether we&rsquo;d go back. Part
              diary, part recommendation list, fully ours.
            </p>
            <div className="signs">— S &amp; S</div>
          </div>
        </div>
      </section>

      <div className="board-head" style={{ marginTop: 54 }}>
        <h2>explore by category</h2>
        <span className="sub">{"// pick a stack to flip through"}</span>
      </div>
      <CategoryGrid categories={categories} />

      <div className="board-head" style={{ marginTop: 54 }}>
        <h2>fresh from the board</h2>
        <span className="sub">{"// our latest finds · tap to flip"}</span>
      </div>
      <div className="shelf">
        {recent.map((p, i) => (
          <PlacePolaroid key={p.id} place={p} i={i} />
        ))}
      </div>
    </div>
  );
}
