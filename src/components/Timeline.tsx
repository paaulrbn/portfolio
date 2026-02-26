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
  <div className="flex gap-3.5">
    <div className="flex flex-col items-center shrink-0 pt-2">
      <div className="w-2 h-2 rounded-full bg-white/50 shrink-0" />
      {!isLast && (
        <div className="w-px flex-1 mt-2 bg-white/10" />
      )}
    </div>
    <div className={isLast ? "" : "pb-5"}>
      <span className="text-xs font-medium tracking-wide opacity-60 uppercase">
        {entry.period}
      </span>
      <h4 className="font-medium mt-1 text-[0.95rem]">{entry.title}</h4>
      <p className="text-sm opacity-70 leading-relaxed mt-0.5">{entry.description}</p>
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
