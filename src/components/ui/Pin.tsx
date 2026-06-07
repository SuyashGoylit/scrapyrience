import type { CSSProperties } from "react";

export default function Pin({
  kind = "",
  style,
}: {
  kind?: "" | "sage" | "pink";
  style?: CSSProperties;
}) {
  return <div className={`pin ${kind}`.trim()} style={style} />;
}
