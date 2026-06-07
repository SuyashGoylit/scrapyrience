import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategory, getPlace, places } from "@/lib/data";
import Photo from "@/components/ui/Photo";
import Tape from "@/components/ui/Tape";
import Rating from "@/components/ui/Rating";
import { HeartSticker } from "@/components/ui/Stickers";

export function generateStaticParams() {
  return places.map((p) => ({ id: p.id }));
}

const ROT = [-3, 2, -1.5, 3, -2.5, 1.5, -2, 2.5, -1];
const rot = (i: number) => ROT[i % ROT.length];

type Slot = {
  w: number;
  h: number;
  left?: string;
  right?: string;
  top: string;
  rot: number;
};

const pics: Slot[] = [
  { w: 300, h: 230, left: "2%", top: "8%", rot: -4 },
  { w: 250, h: 280, left: "26%", top: "40%", rot: 3 },
  { w: 270, h: 200, right: "20%", top: "6%", rot: 2.5 },
  { w: 230, h: 250, right: "1%", top: "36%", rot: -3 },
];

export default async function PlacePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const place = getPlace(id);
  if (!place) notFound();
  const cat = getCategory(place.category) ?? categories[0];
  const whoInitial = place.who === "Both" ? "S+S" : place.who[0];

  return (
    <div className="app place">
      <Link href={`/experiences/${cat.id}`} className="backlink">
        ← back to {cat.name}
      </Link>

      <div className="banner">
        {place.photos.slice(0, 4).map((label, i) => {
          const s = pics[i];
          return (
            <div
              key={i}
              className="collage-pic"
              style={{
                width: s.w,
                height: s.h,
                left: s.left,
                right: s.right,
                top: s.top,
                transform: `rotate(${s.rot}deg)`,
                zIndex: i,
              }}
            >
              <Tape
                kind={i % 2 ? "sage" : "pink"}
                style={{
                  top: -12,
                  left: "50%",
                  marginLeft: -48,
                  transform: `rotate(${rot(i)}deg)`,
                }}
              />
              <Photo label={label} />
            </div>
          );
        })}
        <div className="title-card">
          <div className="cat-stamp">— {cat.name} —</div>
          <h1>{place.name}</h1>
          <div className="area">{place.area}, Bangalore</div>
        </div>
        <HeartSticker
          style={{
            left: "44%",
            bottom: -6,
            transform: "rotate(-10deg)",
            zIndex: 10,
          }}
        />
      </div>

      <div className="place-grid">
        <div className="entry">
          <h4>the write-up</h4>
          {place.blurb.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="aside">
          <div className="factcard">
            <h5>our rating</h5>
            <Rating value={place.rating} />
          </div>
          <div className="stickynote">
            <h5>one thing we&rsquo;ll remember</h5>
            <p>{place.memorable}</p>
          </div>
          <div className="again-stamp">
            <small>would we go again?</small>
            {place.again}
          </div>
          <div className="factcard">
            <h5>the details</h5>
            <div className="meta-row" style={{ flexDirection: "column", gap: 14 }}>
              <span className="who-badge">
                <span className="ic">{whoInitial}</span>{" "}
                {place.who === "Both"
                  ? "both of us picked it"
                  : place.who + " picked it"}
              </span>
              <div className="meta-row">
                <span className="chip">
                  visited · <b>{place.date}</b>
                </span>
                <span className="chip">
                  cost · <b>{place.cost}</b>
                </span>
              </div>
            </div>
          </div>
          <div className="factcard">
            <h5>best dish / must-try</h5>
            <div className="must">{place.mustTry}</div>
          </div>
          <div className="factcard">
            <h5>where to find it</h5>
            <div className="must" style={{ fontSize: 18, marginBottom: 10 }}>
              {place.location}
            </div>
            <div className="map-ph">
              <Photo label="map clipping" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
