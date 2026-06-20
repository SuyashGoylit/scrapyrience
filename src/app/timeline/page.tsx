import { getTimeline } from "@/lib/data";
import TimelineRoad from "@/components/TimelineRoad";

export default function TimelinePage() {
  const entries = getTimeline();

  return (
    <div className="app">
      <header className="page-head">
        <span className="section-tab">the timeline</span>
        <h1>How it happened</h1>
        <p>
          Every outing, pinned in order — newest first. Follow the road and tap
          a day to relive the places we went.
        </p>
      </header>

      <TimelineRoad entries={entries} />
    </div>
  );
}
