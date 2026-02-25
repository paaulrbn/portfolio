export interface TimelineEntry {
  period: string;
  title: string;
  description: React.ReactNode;
}

const TimelineItem = ({
  entry,
  isLast,
}: {
  entry: TimelineEntry;
  isLast: boolean;
}) => (
  <div className="flex">
    <div className="flex flex-col items-center shrink-0 w-6">
      <img src="star-icon.png" alt="" className="w-6 h-6 shrink-0" />
      {!isLast && (
        <div
          className="w-px flex-1 -my-2"
          style={{ background: "rgba(243, 243, 236, 0.15)" }}
        />
      )}
    </div>
    <div className={`pl-3 ${isLast ? "" : "pb-6"}`}>
      <div
        className="inline-block px-2 py-1 rounded font-medium text-sm opacity-80 mb-2"
        style={{ background: "rgba(243, 243, 236, 0.05)" }}
      >
        {entry.period}
      </div>
      <h4 className="font-semibold mb-1">{entry.title}</h4>
      <p className="text-sm opacity-60 leading-relaxed">{entry.description}</p>
    </div>
  </div>
);

export default function Timeline({
  entries,
}: {
  entries: TimelineEntry[];
}) {
  return (
    <div className="flex flex-col">
      {entries.map((entry, index) => (
        <TimelineItem
          key={entry.period}
          entry={entry}
          isLast={index === entries.length - 1}
        />
      ))}
    </div>
  );
}
