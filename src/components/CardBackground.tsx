export default function CardBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="rounded-2xl border border-white/8 backdrop-blur-xl relative overflow-hidden w-full h-full"
      style={{
        background:
          "linear-gradient(135deg, rgba(14,14,18,0.95) 0%, rgba(22,22,28,0.7) 100%)",
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
