const cardStyle = {
  background:
    "linear-gradient(135deg, #111111 0%, rgba(26, 26, 26, 0.8) 100%)",
  borderColor: "rgba(51, 51, 51, 0.3)",
};

export default function CardBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="rounded-3xl border backdrop-blur-md relative overflow-hidden w-full h-full"
      style={cardStyle}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(243, 243, 236, 0.1) 50%, transparent 100%)",
        }}
      />
      <div className="opacity-0 pointer-events-none p-6">{children}</div>
    </div>
  );
}
