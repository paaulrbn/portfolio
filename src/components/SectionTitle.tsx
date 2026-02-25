import type { LucideIcon } from "lucide-react";

export default function SectionTitle({
  icon: Icon,
  title,
}: {
  icon: LucideIcon;
  title: string;
}) {
  return (
    <h3 className="text-lg font-bold mb-5 flex items-center gap-3">
      <Icon size={24} />
      {title}
    </h3>
  );
}
