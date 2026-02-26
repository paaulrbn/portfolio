import type { LucideIcon } from "lucide-react";

export default function SectionTitle({
  icon: Icon,
  title,
}: {
  icon: LucideIcon;
  title: string;
}) {
  return (
    <h3 className="text-sm font-semibold mb-5 flex items-center gap-2.5 tracking-wide uppercase opacity-80">
      <Icon size={16} strokeWidth={1.5} />
      {title}
    </h3>
  );
}
