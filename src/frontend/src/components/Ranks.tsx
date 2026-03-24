import {
  Check,
  Crown,
  Shield,
  ShoppingCart,
  Skull,
  Star,
  Zap,
} from "lucide-react";

const ranks = [
  {
    id: 1,
    name: "Infected",
    price: "₹20",
    icon: Skull,
    tagline: "The First Touch",
    glowColor: "oklch(0.55 0.22 145)",
    borderColor: "oklch(0.30 0.16 145)",
    bgAccent: "oklch(0.55 0.22 145 / 0.08)",
    badgeBg: "oklch(0.55 0.22 145 / 0.15)",
    badgeBorder: "oklch(0.55 0.22 145 / 0.5)",
    textColor: "oklch(0.65 0.20 145)",
    perks: [
      "Steal 0.5 hearts per kill",
      "Infected death particles",
      "Sickly green name tag in chat",
      "Access to LifeSteal spawn",
    ],
    btnStyle: {
      background:
        "linear-gradient(135deg, oklch(0.30 0.18 145), oklch(0.50 0.22 145))",
      border: "1px solid oklch(0.55 0.22 145)",
      boxShadow: "0 0 15px oklch(0.55 0.22 145 / 0.4)",
    },
  },
  {
    id: 2,
    name: "Tainted",
    price: "₹40",
    icon: Zap,
    tagline: "Spreading Darkness",
    glowColor: "oklch(0.55 0.28 310)",
    borderColor: "oklch(0.30 0.20 310)",
    bgAccent: "oklch(0.55 0.28 310 / 0.08)",
    badgeBg: "oklch(0.55 0.28 310 / 0.15)",
    badgeBorder: "oklch(0.55 0.28 310 / 0.5)",
    textColor: "oklch(0.65 0.25 310)",
    perks: [
      "Steal 1 heart per kill",
      "Purple void trail effect",
      "Tainted aura on respawn",
      "/kit tainted — extra gear",
    ],
    btnStyle: {
      background:
        "linear-gradient(135deg, oklch(0.28 0.22 310), oklch(0.50 0.28 310))",
      border: "1px solid oklch(0.55 0.28 310)",
      boxShadow: "0 0 15px oklch(0.55 0.28 310 / 0.4)",
    },
  },
  {
    id: 3,
    name: "Corrupted",
    price: "₹70",
    icon: Shield,
    tagline: "Consumed by Void",
    glowColor: "oklch(0.55 0.25 25)",
    borderColor: "oklch(0.32 0.20 25)",
    bgAccent: "oklch(0.55 0.25 25 / 0.10)",
    badgeBg: "oklch(0.55 0.25 25 / 0.18)",
    badgeBorder: "oklch(0.55 0.25 25 / 0.6)",
    textColor: "oklch(0.68 0.24 25)",
    featured: true,
    perks: [
      "Steal 1.5 hearts per kill",
      "Blood red corruption fx",
      "Extra 2 max hearts bonus",
      "Corrupted totem cosmetic",
    ],
    btnStyle: {
      background:
        "linear-gradient(135deg, oklch(0.38 0.22 25), oklch(0.58 0.25 25))",
      border: "1px solid oklch(0.65 0.22 25)",
      boxShadow: "0 0 20px oklch(0.55 0.25 25 / 0.5)",
    },
  },
  {
    id: 4,
    name: "Void Walker",
    price: "₹100",
    icon: Crown,
    tagline: "Between Dimensions",
    glowColor: "oklch(0.45 0.20 260)",
    borderColor: "oklch(0.25 0.15 260)",
    bgAccent: "oklch(0.45 0.20 260 / 0.10)",
    badgeBg: "oklch(0.45 0.20 260 / 0.18)",
    badgeBorder: "oklch(0.45 0.20 260 / 0.6)",
    textColor: "oklch(0.62 0.18 260)",
    perks: [
      "Steal 2 hearts per kill",
      "Void dimension warp effect",
      "Extra 4 max hearts bonus",
      "Walk through death portals",
    ],
    btnStyle: {
      background:
        "linear-gradient(135deg, oklch(0.18 0.12 265), oklch(0.42 0.20 260))",
      border: "1px solid oklch(0.45 0.18 260)",
      boxShadow: "0 0 20px oklch(0.45 0.20 260 / 0.5)",
    },
  },
  {
    id: 5,
    name: "Corrupted God",
    price: "₹150",
    icon: Star,
    tagline: "Supreme Darkness",
    glowColor: "oklch(0.60 0.28 330)",
    borderColor: "oklch(0.35 0.20 330)",
    bgAccent: "oklch(0.60 0.28 330 / 0.08)",
    badgeBg: "oklch(0.60 0.28 330 / 0.15)",
    badgeBorder: "oklch(0.60 0.28 330 / 0.5)",
    textColor: "oklch(0.75 0.26 330)",
    perks: [
      "Steal 3 hearts per kill",
      "Godlike corruption aura",
      "Extra 6 max hearts bonus",
      "All previous rank perks",
    ],
    btnStyle: {
      background:
        "linear-gradient(135deg, oklch(0.30 0.22 310), oklch(0.55 0.28 330), oklch(0.45 0.22 145))",
      border: "1px solid oklch(0.65 0.26 330)",
      boxShadow: "0 0 25px oklch(0.60 0.28 330 / 0.5)",
    },
  },
];

export default function Ranks() {
  return (
    <section
      id="ranks"
      data-ocid="ranks.section"
      className="relative py-24 px-4 sm:px-6"
      style={{ zIndex: 1 }}
    >
      {/* Background corruption accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, oklch(0.40 0.20 310 / 0.07) 0%, transparent 55%), " +
            "radial-gradient(ellipse at 80% 40%, oklch(0.50 0.22 25 / 0.06) 0%, transparent 55%)",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className="font-orbitron text-xs tracking-[0.3em] uppercase mb-3"
            style={{ color: "oklch(0.68 0.24 25)" }}
          >
            ✦ Corruption Store ✦
          </p>
          <h2
            className="font-pixel text-xl sm:text-2xl md:text-3xl mb-4"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.55 0.22 145), oklch(0.68 0.24 25), oklch(0.65 0.25 310))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            CORRUPTED RANKS
          </h2>
          <p
            className="font-rajdhani text-base max-w-xl mx-auto"
            style={{ color: "oklch(0.55 0.06 240)" }}
          >
            Embrace the corruption. Unlock exclusive LifeSteal perks and
            terrorize the server.
          </p>
          <div
            className="h-px max-w-xs mx-auto mt-4"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.55 0.22 145 / 0.5), oklch(0.68 0.24 25 / 0.5), transparent)",
            }}
          />
        </div>

        {/* Rank Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {ranks.map((rank) => {
            const Icon = rank.icon;
            return (
              <div
                key={rank.name}
                data-ocid={`ranks.item.${rank.id}`}
                className="group relative rounded-2xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                style={{
                  background:
                    "linear-gradient(160deg, oklch(0.10 0.05 275 / 0.97), oklch(0.08 0.04 280 / 0.97))",
                  border: `1px solid ${rank.borderColor}`,
                  boxShadow: "0 4px 24px oklch(0.05 0.02 280 / 0.6)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    `0 0 35px ${rank.glowColor.replace(")", " / 0.30)")}, 0 8px 40px oklch(0.05 0.02 280 / 0.8)`;
                  (e.currentTarget as HTMLElement).style.borderColor =
                    rank.glowColor;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 4px 24px oklch(0.05 0.02 280 / 0.6)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    rank.borderColor;
                }}
              >
                {/* Featured badge */}
                {rank.featured && (
                  <div
                    className="absolute top-0 right-0 font-pixel text-[7px] px-2 py-1 rounded-bl-xl rounded-tr-xl"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.50 0.24 25), oklch(0.65 0.22 25))",
                      color: "oklch(0.98 0.01 220)",
                      zIndex: 2,
                    }}
                  >
                    POPULAR
                  </div>
                )}

                {/* Glow orb */}
                <div
                  className="absolute top-0 left-1/2 w-24 h-24 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${rank.glowColor}, transparent 70%)`,
                    transform: "translate(-50%, -40%)",
                  }}
                />

                {/* Icon */}
                <div className="relative flex justify-center mb-5">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{
                      background: rank.bgAccent,
                      border: `1px solid ${rank.borderColor}`,
                      boxShadow: `0 0 14px ${rank.glowColor.replace(")", " / 0.35)")}`,
                    }}
                  >
                    <Icon
                      size={28}
                      style={{
                        color: rank.textColor,
                        filter: `drop-shadow(0 0 8px ${rank.glowColor})`,
                      }}
                    />
                  </div>
                </div>

                {/* Rank name + tagline */}
                <div className="text-center mb-4">
                  <h3
                    className="font-orbitron text-lg font-bold tracking-wide mb-1"
                    style={{
                      color: rank.textColor,
                      textShadow: `0 0 12px ${rank.glowColor.replace(")", " / 0.7)")}`,
                    }}
                  >
                    {rank.name}
                  </h3>
                  <p
                    className="font-rajdhani text-xs font-semibold tracking-widest uppercase"
                    style={{ color: "oklch(0.48 0.06 240)" }}
                  >
                    {rank.tagline}
                  </p>
                </div>

                {/* Price badge */}
                <div className="flex justify-center mb-6">
                  <div
                    className="px-4 py-2 rounded-full font-orbitron text-2xl font-black"
                    style={{
                      background: rank.badgeBg,
                      border: `1px solid ${rank.badgeBorder}`,
                      color: rank.textColor,
                      boxShadow: `0 0 14px ${rank.glowColor.replace(")", " / 0.35)")}`,
                    }}
                  >
                    {rank.price}
                  </div>
                </div>

                {/* Perks list */}
                <ul className="flex-1 space-y-2.5 mb-6">
                  {rank.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2.5">
                      <Check
                        size={14}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: rank.textColor }}
                      />
                      <span
                        className="font-rajdhani text-sm leading-snug"
                        style={{ color: "oklch(0.62 0.05 240)" }}
                      >
                        {perk}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Buy Now button */}
                <button
                  type="button"
                  data-ocid={`ranks.buy_button.${rank.id}`}
                  className="w-full py-3 rounded-xl font-orbitron text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
                  style={{
                    ...rank.btnStyle,
                    color: "oklch(0.98 0.01 220)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      `0 0 30px ${rank.glowColor.replace(")", " / 0.70)")}`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = rank
                      .btnStyle.boxShadow as string;
                  }}
                >
                  <ShoppingCart size={14} />
                  Buy Now
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <p
          className="text-center font-rajdhani text-xs mt-8"
          style={{ color: "oklch(0.40 0.05 240)" }}
        >
          * All purchases are permanent. Contact staff via Discord for support.
        </p>
      </div>
    </section>
  );
}
