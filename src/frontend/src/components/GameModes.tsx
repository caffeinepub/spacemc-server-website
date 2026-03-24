import { Heart, Swords } from "lucide-react";

export default function GameModes() {
  return (
    <section
      id="gamemodes"
      className="relative py-24 px-4 sm:px-6"
      style={{ zIndex: 1 }}
    >
      {/* Background blood accent */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, oklch(0.40 0.22 25 / 0.10) 0%, transparent 65%)",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p
            className="font-orbitron text-xs tracking-[0.3em] uppercase mb-3"
            style={{ color: "oklch(0.68 0.24 25)" }}
          >
            ✦ Game Mode ✦
          </p>
          <h2
            className="font-pixel text-xl sm:text-2xl md:text-3xl mb-4"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.68 0.24 25), oklch(0.80 0.20 20))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            HOW WE PLAY
          </h2>
          <div
            className="h-px max-w-xs mx-auto"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.68 0.24 25 / 0.6), oklch(0.55 0.22 25 / 0.6), transparent)",
            }}
          />
        </div>

        {/* Featured LifeSteal Card */}
        <div
          className="group relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1"
          style={{
            background:
              "linear-gradient(145deg, oklch(0.10 0.06 280 / 0.97), oklch(0.08 0.04 275 / 0.97))",
            border: "1px solid oklch(0.35 0.20 25)",
            boxShadow:
              "0 0 60px oklch(0.55 0.24 25 / 0.20), 0 8px 40px oklch(0.05 0.02 280 / 0.7)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 0 80px oklch(0.55 0.24 25 / 0.35), 0 12px 60px oklch(0.05 0.02 280 / 0.8)";
            (e.currentTarget as HTMLElement).style.borderColor =
              "oklch(0.60 0.25 25)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 0 60px oklch(0.55 0.24 25 / 0.20), 0 8px 40px oklch(0.05 0.02 280 / 0.7)";
            (e.currentTarget as HTMLElement).style.borderColor =
              "oklch(0.35 0.20 25)";
          }}
        >
          {/* Large background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 70% 50%, oklch(0.50 0.24 25 / 0.12) 0%, transparent 60%), " +
                "radial-gradient(ellipse at 20% 80%, oklch(0.40 0.22 25 / 0.08) 0%, transparent 50%)",
            }}
          />

          {/* Decorative corner accent */}
          <div
            className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 100% 0%, oklch(0.55 0.25 25 / 0.15), transparent 70%)",
            }}
          />

          <div className="relative p-10 sm:p-14">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
              {/* Icon cluster */}
              <div className="flex-shrink-0 flex flex-col items-center gap-4">
                <div
                  className="w-28 h-28 rounded-3xl flex items-center justify-center relative"
                  style={{
                    background:
                      "linear-gradient(145deg, oklch(0.40 0.22 25 / 0.20), oklch(0.30 0.18 25 / 0.10))",
                    border: "1px solid oklch(0.50 0.22 25 / 0.6)",
                    boxShadow:
                      "0 0 40px oklch(0.55 0.24 25 / 0.40), inset 0 1px 0 oklch(0.70 0.15 25 / 0.15)",
                  }}
                >
                  <Heart
                    size={52}
                    fill="oklch(0.55 0.25 25)"
                    style={{
                      color: "oklch(0.55 0.25 25)",
                      filter:
                        "drop-shadow(0 0 16px oklch(0.60 0.26 25)) drop-shadow(0 0 30px oklch(0.50 0.24 25 / 0.6))",
                    }}
                  />
                </div>
                {/* Pulse indicator */}
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full animate-pulse"
                    style={{
                      background: "oklch(0.60 0.25 145)",
                      boxShadow: "0 0 8px oklch(0.60 0.25 145)",
                    }}
                  />
                  <span
                    className="font-orbitron text-xs font-bold tracking-wider"
                    style={{ color: "oklch(0.65 0.22 145)" }}
                  >
                    LIVE
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                {/* Title + tag */}
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-3 flex-wrap">
                  <h3
                    className="font-pixel text-3xl sm:text-4xl md:text-5xl"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.75 0.26 25), oklch(0.88 0.18 20))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      filter: "drop-shadow(0 0 20px oklch(0.60 0.25 25 / 0.5))",
                    }}
                  >
                    LifeSteal
                  </h3>
                  <span
                    className="font-pixel text-[9px] px-3 py-1.5 rounded-full tracking-widest"
                    style={{
                      color: "oklch(0.72 0.25 145)",
                      background: "oklch(0.72 0.25 145 / 0.12)",
                      border: "1px solid oklch(0.72 0.25 145 / 0.5)",
                    }}
                  >
                    LIVE
                  </span>
                </div>

                {/* Subtitle */}
                <p
                  className="font-orbitron text-sm sm:text-base font-semibold tracking-widest uppercase mb-4"
                  style={{ color: "oklch(0.65 0.18 25)" }}
                >
                  Steal Hearts. Dominate. Survive.
                </p>

                {/* Description */}
                <p
                  className="font-rajdhani text-base sm:text-lg leading-relaxed mb-8 max-w-2xl"
                  style={{ color: "oklch(0.68 0.05 240)" }}
                >
                  In LifeSteal, killing a player steals one of their hearts and
                  adds it to yours. Grow stronger with every kill, but die and
                  lose a heart forever. The last player standing wins all.{" "}
                  <span
                    style={{ color: "oklch(0.72 0.22 25)", fontWeight: 700 }}
                  >
                    Do you have what it takes?
                  </span>
                </p>

                {/* Stats row */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{
                        background: "oklch(0.60 0.25 145)",
                        boxShadow: "0 0 6px oklch(0.60 0.25 145)",
                      }}
                    />
                    <span
                      className="font-rajdhani text-sm font-semibold"
                      style={{ color: "oklch(0.65 0.22 145)" }}
                    >
                      64 Players Online
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Swords
                      size={16}
                      style={{ color: "oklch(0.68 0.24 25)" }}
                    />
                    <span
                      className="font-rajdhani text-sm font-semibold"
                      style={{ color: "oklch(0.68 0.24 25)" }}
                    >
                      1,204 Hearts Stolen Today
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Heart
                      size={14}
                      fill="oklch(0.60 0.25 25)"
                      style={{ color: "oklch(0.60 0.25 25)" }}
                    />
                    <span
                      className="font-rajdhani text-sm font-semibold"
                      style={{ color: "oklch(0.60 0.22 25)" }}
                    >
                      Max 20 Hearts Possible
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
