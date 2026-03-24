import { Heart } from "lucide-react";
import { SiDiscord } from "react-icons/si";

const SERVER_IP = "AstralWorld.play.hosting";

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "astralworld",
  );

  return (
    <footer
      className="relative py-12 px-4 sm:px-6"
      style={{
        zIndex: 1,
        borderTop: "1px solid oklch(0.25 0.08 270 / 0.5)",
        background:
          "linear-gradient(180deg, transparent 0%, oklch(0.05 0.02 280 / 0.8) 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <img
              src="/assets/generated/spacemc-logo.dim_512x128.png"
              alt="AstralWorld"
              className="h-10 w-auto"
              style={{
                filter: "drop-shadow(0 0 10px oklch(0.68 0.24 25 / 0.5))",
              }}
            />
            <p
              className="font-rajdhani text-sm text-center md:text-left"
              style={{ color: "oklch(0.55 0.06 240)" }}
            >
              The ultimate LifeSteal Minecraft server. Steal hearts, grow
              powerful, and become the last one standing.
            </p>
          </div>

          {/* Server Info */}
          <div className="flex flex-col items-center gap-2">
            <h4
              className="font-orbitron text-xs font-bold tracking-widest uppercase mb-2"
              style={{ color: "oklch(0.68 0.24 25)" }}
            >
              Server Info
            </h4>
            <p
              className="font-pixel text-xs"
              style={{
                color: "oklch(0.72 0.22 25)",
                textShadow: "0 0 10px oklch(0.68 0.24 25 / 0.5)",
              }}
            >
              {SERVER_IP}
            </p>
            <p
              className="font-rajdhani text-xs"
              style={{ color: "oklch(0.50 0.06 240)" }}
            >
              Java Edition 1.21+
            </p>
            <div className="flex items-center gap-1.5 mt-1">
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{
                  background: "oklch(0.72 0.25 145)",
                  boxShadow: "0 0 6px oklch(0.72 0.25 145)",
                }}
              />
              <span
                className="font-rajdhani text-xs font-semibold"
                style={{ color: "oklch(0.72 0.25 145)" }}
              >
                64 / 500 Players Online
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <h4
              className="font-orbitron text-xs font-bold tracking-widest uppercase mb-2"
              style={{ color: "oklch(0.68 0.24 25)" }}
            >
              Connect
            </h4>
            <a
              href="https://discord.gg/Dfxu79Uk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-discord flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold"
            >
              <SiDiscord size={16} />
              Join Discord
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p
            className="font-rajdhani text-xs"
            style={{ color: "oklch(0.45 0.05 240)" }}
          >
            © {year} AstralWorld. All rights reserved. Not affiliated with
            Mojang Studios.
          </p>
          <p
            className="font-rajdhani text-xs flex items-center gap-1"
            style={{ color: "oklch(0.45 0.05 240)" }}
          >
            Built with{" "}
            <Heart
              size={12}
              fill="oklch(0.65 0.24 25)"
              style={{ color: "oklch(0.65 0.24 25)", display: "inline" }}
            />{" "}
            using{" "}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:underline"
              style={{ color: "oklch(0.65 0.22 200)" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
