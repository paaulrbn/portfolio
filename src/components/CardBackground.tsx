export default function CardBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="rounded-2xl border border-white/[0.07] backdrop-blur-xl relative overflow-hidden w-full h-full"
      style={{
        background:
          "linear-gradient(145deg, rgba(16,15,18,0.96) 0%, rgba(22,21,26,0.72) 100%)",
        boxShadow:
          "var(--surface-shadow-warm, 0 20px 40px -12px rgba(18, 16, 12, 0.5)), 0 1px 0 0 rgba(255,255,255,0.06) inset, 0 0 0 1px rgba(255,255,255,0.04) inset",
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
        }}
      />
      <div className="opacity-0 pointer-events-none p-5 sm:p-6">{children}</div>
    </div>
  );
}
