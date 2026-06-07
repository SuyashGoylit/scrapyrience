import Link from "next/link";
import type { Category } from "@/lib/data";
import Pin from "@/components/ui/Pin";
import Photo from "@/components/ui/Photo";

const ROT = [-3, 2, -1.5, 3, -2.5, 1.5, -2, 2.5, -1];
const PINS = ["", "sage", "pink"] as const;

export default function CategoryGrid({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <div className="board">
      {categories.map((c, i) => (
        <Link
          key={c.id}
          href={`/experiences/${c.id}`}
          className="cat-card"
          style={{ transform: `rotate(${ROT[i % ROT.length]}deg)` }}
        >
          <Pin kind={PINS[i % 3]} />
          <div className="photo">
            <Photo label={c.id + " collage"} />
          </div>
          <h3>{c.name}</h3>
          <p className="cnote">{c.note}</p>
          <span className={"count " + c.tint}>
            {c.count} {c.count === 1 ? "spot" : "spots"}
          </span>
        </Link>
      ))}
    </div>
  );
}
