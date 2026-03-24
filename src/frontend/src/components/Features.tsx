import { Coins, Compass, Globe, Swords } from "lucide-react";

const features = [
  {
    icon: "/assets/generated/icon-planet.dim_128x128.png",
    fallbackIcon: Globe,
    title: "Custom Planets",
    description:
      "Explore hand-crafted alien worlds, each with unique biomes, resources, and hidden secrets waiting to be discovered.",
    color: "oklch(0.55 0.25 290)",
    glowColor: "oklch(0.55 0.25 290 / 0.4)",
    borderColor: "oklch(0.45 0.20 290)",
  },
  {
    icon: "/assets/generated/icon-pvp.dim_128x128.png",
    fallbackIcon: Swords,
    title: "Space PvP",
    description:
      "Battle other players in zero-gravity arenas and asteroid fields. Dominate the leaderboards and claim your glory.",
    color: "oklch(0.65 0.22 200)",
    glowColor: "oklch(0.65 0.22 200 / 0.4)",
    borderColor: "oklch(0.55 0.20 200)",
  },
  {
    icon: "/assets/generated/icon-economy.dim_128x128.png",
    fallbackIcon: Coins,
    title: "Galaxy Economy",
    description:
      "Trade rare space minerals, build your empire, and become the wealthiest merchant in the galaxy.",
    color: "oklch(0.80 0.18 85)",
    glowColor: "oklch(0.80 0.18 85 / 0.4)",
    borderColor: "oklch(0.70 0.18 85)",
  },
  {
    icon: "/assets/generated/icon-explore.dim_128x128.png",
    fallbackIcon: Compass,
    title: "Space Exploration",
    description:
      "Chart unknown star systems, discover ancient ruins, and unravel the mysteries of the cosmos.",
    color: "oklch(0.72 0.18 195)",
    glowColor: "oklch(0.72 0.18 195 / 0.4)",
    borderColor: "oklch(0.62 0.18 195)",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative py-24 px-4 sm:px-6"
      style={{ zIndex: 1 }}
    >
      {/* Section background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, oklch(0.35 0.18 290 / 0.08) 0%, transparent 70%)",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className="font-orbitron text-xs tracking-[0.3em] uppercase mb-3"
            style={{ color: "oklch(0.72 0.18 195)" }}
          >
            ✦ What Awaits You ✦
          </p>
          <h2
            className="font-pixel text-xl sm:text-2xl md:text-3xl mb-4"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.85 0.08 220), oklch(0.95 0.03 220))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            FEATURES
          </h2>
          <div className="section-divider max-w-xs mx-auto" />
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const _FallbackIcon = feature.fallbackIcon;
            return (
              <div
                key={feature.title}
                className="space-card rounded-2xl p-6 flex flex-col items-center text-center group cursor-default"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.11 0.05 275 / 0.9), oklch(0.09 0.04 285 / 0.9))",
                  border: `1px solid ${feature.borderColor}`,
                }}
              >
                {/* Icon */}
                <div
                  className="w-20 h-20 mb-5 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `radial-gradient(circle, ${feature.glowColor} 0%, transparent 70%)`,
                    boxShadow: `0 0 20px ${feature.glowColor}`,
                  }}
                >
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-14 h-14 object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      const parent = (e.target as HTMLImageElement)
                        .parentElement;
                      if (parent) {
                        const svg = document.createElementNS(
                          "http://www.w3.org/2000/svg",
                          "svg",
                        );
                        parent.appendChild(svg);
                      }
                    }}
                  />
                </div>

                {/* Title */}
                <h3
                  className="font-orbitron text-sm font-bold mb-3 tracking-wide"
                  style={{ color: feature.color }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className="font-rajdhani text-sm leading-relaxed"
                  style={{ color: "oklch(0.65 0.05 240)" }}
                >
                  {feature.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className="mt-4 h-0.5 w-12 rounded-full transition-all duration-300 group-hover:w-full"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${feature.color}, transparent)`,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
