import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategory, placesByCategory } from "@/lib/data";
import PlacePolaroid from "@/components/PlacePolaroid";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.id }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) notFound();
  const list = placesByCategory(cat.id);

  return (
    <div className="app">
      <header className="cat-page-banner">
        <div className="crumb">
          <Link href="/">
            <b>home</b>
          </Link>
          &nbsp;/&nbsp; experiences &nbsp;/&nbsp; {cat.name.toLowerCase()}
        </div>
        <h1>{cat.name}</h1>
        <p className="note">
          {cat.note} · {cat.count} {cat.count === 1 ? "place" : "places"}
        </p>
      </header>
      <div className="shelf" style={{ justifyContent: "flex-start" }}>
        {list.map((p, i) => (
          <PlacePolaroid key={p.id} place={p} i={i} />
        ))}
      </div>
    </div>
  );
}
