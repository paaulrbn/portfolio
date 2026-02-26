export default function BackgroundLayers() {
  return (
    <>
      {/* Base gradient */}
      <div
        className="fixed inset-0 -z-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, #050507 0%, #060608 40%, #08080c 100%)",
        }}
      />

      {/* Subtle dot grid */}
      <div
        className="fixed inset-0 -z-20 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Noise grain overlay */}
      <div
        className="fixed inset-0 -z-20 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Radial vignette */}
      <div
        className="fixed inset-0 -z-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 20%, transparent 0%, transparent 50%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      {/* Subtle horizontal gradient band for depth */}
      <div
        className="fixed inset-0 -z-20 pointer-events-none opacity-50"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, transparent 35%, rgba(232,232,224,0.015) 50%, transparent 65%, transparent 100%)",
        }}
      />
    </>
  );
}
