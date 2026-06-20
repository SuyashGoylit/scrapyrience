export type Tint = "terracotta" | "pink" | "sage";

export type Category = {
  id: string;
  name: string;
  tint: Tint;
  doodle: string;
  note: string;
  count: number;
};

export type Place = {
  id: string;
  category: string;
  name: string;
  area: string;
  rating: number;
  date: string;
  who: "Sejal" | "Suyash" | "Both";
  cost: "Free" | "₹" | "₹₹" | "₹₹₹";
  again: string;
  mustTry: string;
  memorable: string;
  location: string;
  blurb: string;
  photos: string[];
  stub?: boolean;
};

const rawCategories: Omit<Category, "count">[] = [
  { id: "cafes", name: "Cafés", tint: "terracotta", doodle: "coffee", note: "slow mornings & oat lattes" },
  { id: "restaurants", name: "Restaurants", tint: "pink", doodle: "fork", note: "where we ate too much" },
  { id: "bars", name: "Bars & Brews", tint: "sage", doodle: "glass", note: "one more, then home" },
  { id: "streetfood", name: "Street Food", tint: "terracotta", doodle: "cart", note: "₹40 happiness" },
  { id: "adventure", name: "Adventures", tint: "sage", doodle: "mountain", note: "slightly out of breath" },
  { id: "parks", name: "Parks", tint: "sage", doodle: "leaf", note: "green & barefoot" },
  { id: "museums", name: "Museums", tint: "pink", doodle: "frame", note: "quiet, curious days" },
  { id: "escape", name: "Escape Rooms", tint: "terracotta", doodle: "key", note: "60 minutes, lots of yelling" },
  { id: "malls", name: "Malls", tint: "pink", doodle: "bag", note: "AC & window shopping" },
];

const fleshed: Place[] = [
  {
    id: "ime-museum",
    category: "museums",
    name: "Indian Music Experience Museum",
    area: "JP Nagar",
    rating: 9,
    date: "April 12, 2026",
    who: "Sejal",
    cost: "₹₹",
    again: "Absolutely",
    mustTry: "The Sound Garden — instruments you actually play outdoors.",
    memorable:
      "Standing inside the immersive room while a whole orchestra of folk instruments played around us. We just stopped talking.",
    location: "Brigade Millennium Avenue, JP Nagar 7th Phase",
    blurb:
      "Tucked above JP Nagar, India's first interactive music museum turned out to be the most fun we've had standing still. You wander floor by floor through the sounds of the country — film music, classical, folk, the instruments behind them — and almost everything invites you to touch, tap, or sing along.\n\nWe came expecting a quiet hour and stayed for three. Suyash got way too competitive at the rhythm station. The rooftop Sound Garden, where you can bang on giant outdoor instruments with zero shame, was the surprise highlight. Bring socks-friendly shoes and a little patience for the crowd on weekends.",
    photos: ["museum exterior", "the sound garden", "instrument wall", "us, mid-song"],
  },
  {
    id: "cubbon-park",
    category: "parks",
    name: "Cubbon Park",
    area: "Central Bangalore",
    rating: 8,
    date: "March 2, 2026",
    who: "Both",
    cost: "Free",
    again: "Every Sunday",
    mustTry: "Filter coffee from the cart near the bandstand.",
    memorable:
      "A street dog adopted us for the entire morning walk and left the second we reached the gate.",
    location: "Kasturba Road, Sampangi Rama Nagar",
    blurb:
      "Our default reset button. On car-free Sundays the whole place softens — cyclists, dogs, readers under the big rain trees, someone always practising an instrument. We did a loop, found a bench, and did absolutely nothing productive.\n\nGreen, central, and somehow quiet despite the city pressing in on all sides. The kind of place that makes Bangalore feel like the right decision.",
    photos: ["the big rain trees", "bandstand", "our bench", "the dog"],
  },
  {
    id: "third-wave",
    category: "cafes",
    name: "Third Wave Coffee",
    area: "Indiranagar",
    rating: 7,
    date: "February 18, 2026",
    who: "Suyash",
    cost: "₹₹",
    again: "For work mornings",
    mustTry: "Cold brew + the cardamom bun.",
    memorable:
      "We claimed the corner table and accidentally turned it into our planning HQ for this whole website.",
    location: "100 Feet Road, Indiranagar",
    blurb:
      "Reliable, bright, good wifi, better coffee. Not the most original pick but it's the one we keep coming back to when we need to actually get something done. The cardamom bun is dangerous.",
    photos: ["latte art", "corner table", "the menu board"],
  },
];

const stubs: Record<string, string[]> = {
  cafes: ["Dyu Art Café", "Matteo Coffea", "Roastery Coffee House"],
  restaurants: ["Truffles", "Rim Naam", "Karavalli"],
  bars: ["Toit", "Arbor Brewing Co.", "Byg Brewski"],
  streetfood: ["VV Puram Food Street", "Shivaji Nagar", "Thindi Beedi"],
  adventure: ["Wonderla", "Guhantara Caves", "Skydiving Mysore"],
  parks: ["Lalbagh", "JP Park", "Bugle Rock"],
  museums: ["Jawaharlal Nehru Planetarium", "HAL Aerospace Museum", "Visvesvaraya Museum"],
  escape: ["Mystery Rooms", "Breakout", "The Cluedoor"],
  malls: ["Phoenix Marketcity", "Orion Mall", "UB City"],
};

const stubAreas: Record<string, string> = {
  adventure: "Day trip",
  malls: "Whitefield",
  museums: "Sankey Road",
};

const whos: Place["who"][] = ["Sejal", "Suyash", "Both"];
const costs: Place["cost"][] = ["₹", "₹₹", "₹₹₹"];
const agains = ["Definitely", "Maybe", "One day"];

function buildPlaces(): Place[] {
  const all: Place[] = [...fleshed];
  let auto = 0;
  for (const [cat, names] of Object.entries(stubs)) {
    for (const nm of names) {
      if (all.some((p) => p.name === nm)) continue;
      auto++;
      all.push({
        id: "p" + auto,
        category: cat,
        name: nm,
        area: stubAreas[cat] || "Bangalore",
        rating: 6 + (auto % 4),
        date: "2026",
        who: whos[auto % 3],
        cost: costs[auto % 3],
        again: agains[auto % 3],
        mustTry: "Add your must-try here.",
        memorable: "Add the one thing you'll never forget about this place.",
        location: "Add the exact spot here.",
        blurb:
          "Start writing about " +
          nm +
          " here — what you did, how it felt, the tiny details. This is a placeholder entry waiting for your story.",
        photos: ["photo", "photo", "photo"],
        stub: true,
      });
    }
  }
  return all;
}

export const places: Place[] = buildPlaces();

export const categories: Category[] = rawCategories.map((c) => ({
  ...c,
  count: places.filter((p) => p.category === c.id).length,
}));

export function getCategory(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}

export function getPlace(id: string): Place | undefined {
  return places.find((p) => p.id === id);
}

export function placesByCategory(catId: string): Place[] {
  return places.filter((p) => p.category === catId);
}

export type TimelineEntry = {
  slug: string; // ISO day, e.g. "2026-04-12"
  label: string; // original human string, e.g. "April 12, 2026"
  time: number; // timestamp, for sorting
  places: Place[]; // every place visited that day
};

// Only dates written as a specific day ("April 12, 2026") belong on the
// timeline — bare years like "2026" (the stub entries) are skipped.
const SPECIFIC_DATE = /^[A-Z][a-z]+ \d{1,2}, \d{4}$/;

function toSlug(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function getTimeline(): TimelineEntry[] {
  const byDay = new Map<string, TimelineEntry>();
  for (const p of places) {
    if (!SPECIFIC_DATE.test(p.date)) continue;
    const d = new Date(p.date);
    if (Number.isNaN(d.getTime())) continue;
    const slug = toSlug(d);
    const entry = byDay.get(slug);
    if (entry) {
      entry.places.push(p);
    } else {
      byDay.set(slug, { slug, label: p.date, time: d.getTime(), places: [p] });
    }
  }
  // Newest day first.
  return Array.from(byDay.values()).sort((a, b) => b.time - a.time);
}
