import type { LucideIcon } from "lucide-react";

export default function SectionTitle({
  icon: Icon,
  title,
}: {
  icon: LucideIcon;
  title: string;
}) {
  return (
    <h3 className="text-sm font-medium mb-5 flex items-center gap-2.5 tracking-[0.02em] text-[#e8e8e0]/90">
      <Icon size={16} strokeWidth={1.5} className="opacity-70 shrink-0" />
      {title}
    </h3>
  );
}
