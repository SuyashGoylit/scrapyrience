export default function Rating({
  value,
  small,
}: {
  value: number;
  small?: boolean;
}) {
  const filled = Math.round(value);
  return (
    <span className={"rating" + (small ? " small" : "")}>
      <span className="dots">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className={"dot" + (i < filled ? " on" : "")} />
        ))}
      </span>
      <span className="num">{value}/10</span>
    </span>
  );
}
