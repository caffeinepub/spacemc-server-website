import { Check, Copy, Rocket } from "lucide-react";
import { useState } from "react";
import { SiDiscord } from "react-icons/si";

const SERVER_IP = "AstralWorld.play.hosting";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyIP = async () => {
    try {
      await navigator.clipboard.writeText(SERVER_IP);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const el = document.createElement("textarea");
      el.value = SERVER_IP;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const scrollToJoin = () => {
    document
      .querySelector("#howtojoin")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
      style={{ zIndex: 1 }}
    >
      {/* Hero background image overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url(/assets/generated/hero-banner.dim_1920x600.png)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          opacity: 0.35,
          zIndex: 0,
        }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.06 0.025 280 / 0.3) 0%, oklch(0.06 0.025 280 / 0.6) 60%, oklch(0.06 0.025 280 / 0.95) 100%)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-5xl mx-auto w-full">
        {/* Logo */}
        <div className="mb-6 animate-float">
          <img
            src="/assets/generated/spacemc-logo.dim_512x128.png"
            alt="AstralWorld"
            className="h-20 sm:h-28 md:h-36 w-auto mx-auto"
            style={{
              filter:
                "drop-shadow(0 0 20px oklch(0.65 0.24 25 / 0.7)) drop-shadow(0 0 40px oklch(0.50 0.22 310 / 0.4))",
            }}
          />
        </div>

        {/* Main Title */}
        <h1
          className="font-pixel text-2xl sm:text-3xl md:text-5xl mb-4 leading-tight"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.72 0.18 195), oklch(0.68 0.24 25), oklch(0.65 0.25 310))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "none",
            filter: "drop-shadow(0 0 20px oklch(0.60 0.22 25 / 0.5))",
          }}
        >
          ASTRALWORLD
        </h1>

        {/* Tagline */}
        <p
          className="font-orbitron text-base sm:text-xl md:text-2xl font-medium mb-2 tracking-widest"
          style={{ color: "oklch(0.85 0.08 220)" }}
        >
          Steal Hearts. Grow Stronger.{" "}
          <span
            style={{
              background:
                "linear-gradient(135deg, oklch(0.68 0.24 25), oklch(0.80 0.20 20))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Dominate the Server.
          </span>
        </p>

        <p
          className="font-rajdhani text-sm sm:text-base mb-10 max-w-xl"
          style={{ color: "oklch(0.65 0.06 240)" }}
        >
          The ultimate LifeSteal Minecraft server. Steal hearts, grow powerful,
          and become the last one standing.
        </p>

        {/* Server IP Display */}
        <div className="mb-8 w-full max-w-lg">
          <p
            className="font-orbitron text-xs tracking-widest uppercase mb-3"
            style={{ color: "oklch(0.65 0.10 200)" }}
          >
            ⚡ Server Address
          </p>
          <button
            type="button"
            onClick={copyIP}
            className="ip-display w-full flex items-center justify-between px-5 py-4 rounded-xl group transition-all duration-300 hover:scale-[1.02]"
            style={{
              boxShadow: copied
                ? "0 0 30px oklch(0.72 0.25 145 / 0.6)"
                : "0 0 20px oklch(0.68 0.24 25 / 0.3)",
              borderColor: copied
                ? "oklch(0.72 0.25 145)"
                : "oklch(0.68 0.24 25)",
            }}
            aria-label="Copy server IP"
          >
            <span
              className="font-pixel text-sm sm:text-base tracking-wider"
              style={{
                color: copied ? "oklch(0.72 0.25 145)" : "oklch(0.72 0.22 25)",
                textShadow: copied
                  ? "0 0 15px oklch(0.72 0.25 145 / 0.8)"
                  : "0 0 15px oklch(0.68 0.24 25 / 0.8)",
              }}
            >
              {SERVER_IP}
            </span>
            <span
              className="flex items-center gap-1.5 text-xs font-rajdhani font-semibold transition-all duration-200"
              style={{
                color: copied ? "oklch(0.72 0.25 145)" : "oklch(0.65 0.08 220)",
              }}
            >
              {copied ? (
                <>
                  <Check size={16} />
                  Copied!
                </>
              ) : (
                <>
                  <Copy size={16} />
                  Copy IP
                </>
              )}
            </span>
          </button>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
          <button
            type="button"
            onClick={scrollToJoin}
            className="btn-gold w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold tracking-wider"
          >
            <Rocket size={18} />
            JOIN NOW
          </button>
          <a
            href="https://discord.gg/Dfxu79Uk"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-discord w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold tracking-wider"
          >
            <SiDiscord size={18} />
            JOIN DISCORD
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 animate-bounce">
          <span
            className="font-orbitron text-xs tracking-widest"
            style={{ color: "oklch(0.50 0.08 240)" }}
          >
            SCROLL TO EXPLORE
          </span>
          <div
            className="w-px h-8"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.55 0.25 290), transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
