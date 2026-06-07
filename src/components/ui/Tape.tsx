import type { CSSProperties } from "react";

export default function Tape({
  kind = "",
  style,
}: {
  kind?: "" | "pink" | "sage";
  style?: CSSProperties;
}) {
  return <div className={`tape ${kind}`.trim()} style={style} />;
}
