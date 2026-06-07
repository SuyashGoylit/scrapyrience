import type { CSSProperties } from "react";

export default function Photo({
  label,
  style,
}: {
  label: string;
  style?: CSSProperties;
}) {
  return (
    <div className="ph" style={style}>
      <span>{label}</span>
    </div>
  );
}
