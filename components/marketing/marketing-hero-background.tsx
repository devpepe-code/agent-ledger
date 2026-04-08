export function MarketingHeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.15] motion-safe:animate-marketing-grid"
        style={{
          backgroundImage: `
            linear-gradient(rgba(124, 58, 237, 0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124, 58, 237, 0.08) 1px, transparent 1px),
            linear-gradient(rgba(6, 182, 212, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px, 48px 48px, 96px 96px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F0F1A]/40 to-[#0F0F1A]" />
      {/* Soft particles */}
      {[
        "12% 18%",
        "78% 22%",
        "44% 38%",
        "88% 55%",
        "22% 72%",
        "62% 12%",
        "33% 88%",
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-white/25 motion-safe:animate-marketing-blink"
          style={{
            left: pos.split(" ")[0],
            top: pos.split(" ")[1],
            animationDelay: `${i * 0.35}s`,
          }}
        />
      ))}
    </div>
  );
}
