"use client";

import Link from "next/link";
import { useState } from "react";
import type { Place } from "@/lib/data";
import Photo from "@/components/ui/Photo";
import Tape from "@/components/ui/Tape";
import Rating from "@/components/ui/Rating";

const ROT = [-3, 2, -1.5, 3, -2.5, 1.5, -2, 2.5, -1];
const rot = (i: number) => ROT[i % ROT.length];

export default function PlacePolaroid({
  place,
  i,
}: {
  place: Place;
  i: number;
}) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className={"polaroid" + (flipped ? " flipped" : "")}
      style={{
        transform: flipped ? undefined : `rotate(${rot(i + 2)}deg)`,
      }}
      onClick={() => setFlipped((f) => !f)}
    >
      <Tape
        kind={i % 2 ? "pink" : ""}
        style={{
          top: -12,
          left: "50%",
          marginLeft: -48,
          transform: `rotate(${rot(i)}deg)`,
        }}
      />
      <div className="face front">
        <div className="photo">
          <Photo label={place.photos[0]} />
        </div>
        <div className="cap">{place.name}</div>
        <span className="flip-tab">flip ↺</span>
      </div>
      <div className="face back">
        <div className="bk-note">&ldquo;{place.memorable.split(".")[0]}.&rdquo;</div>
        <div>
          <div className="bk-meta" style={{ marginBottom: 8 }}>
            {place.area} · {place.date}
          </div>
          <Rating value={place.rating} small />
        </div>
        <Link
          href={`/places/${place.id}`}
          className="open"
          onClick={(e) => e.stopPropagation()}
        >
          read the full page →
        </Link>
      </div>
    </div>
  );
}
