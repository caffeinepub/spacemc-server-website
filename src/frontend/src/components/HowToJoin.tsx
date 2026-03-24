import { Check, Copy, Download, Monitor, Play, Server } from "lucide-react";
import { useState } from "react";

const SERVER_IP = "DOMAINSMC.aternos.me:17306";

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Get Minecraft Java",
    description:
      "Purchase and install Minecraft: Java Edition from minecraft.net. Make sure you have version 1.20 or higher.",
    color: "oklch(0.72 0.18 195)",
  },
  {
    number: "02",
    icon: Monitor,
    title: "Launch the Game",
    description:
      "Open the Minecraft Launcher, select your Java Edition profile, and click Play to launch the game.",
    color: "oklch(0.55 0.25 290)",
  },
  {
    number: "03",
    icon: Server,
    title: "Add Our Server",
    description:
      'From the main menu, click "Multiplayer" → "Add Server". Enter the server name and paste our IP address below.',
    color: "oklch(0.80 0.18 85)",
  },
  {
    number: "04",
    icon: Play,
    title: "Join & Explore!",
    description:
      'Select DomainMC from your server list and click "Join Server". Welcome to the galaxy, explorer!',
    color: "oklch(0.72 0.25 145)",
  },
];

export default function HowToJoin() {
  const [copied, setCopied] = useState(false);

  const copyIP = async () => {
    try {
      await navigator.clipboard.writeText(SERVER_IP);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
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

  return (
    <section
      id="howtojoin"
      className="relative py-24 px-4 sm:px-6"
      style={{ zIndex: 1 }}
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 60%, oklch(0.35 0.18 290 / 0.07) 0%, transparent 60%)",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className="font-orbitron text-xs tracking-[0.3em] uppercase mb-3"
            style={{ color: "oklch(0.72 0.25 145)" }}
          >
            ✦ Ready to Launch? ✦
          </p>
          <h2
            className="font-pixel text-xl sm:text-2xl md:text-3xl mb-4"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.72 0.18 195), oklch(0.55 0.25 290))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            HOW TO JOIN
          </h2>
          <div className="section-divider max-w-xs mx-auto" />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-10 left-full w-full h-px z-0"
                    style={{
                      background: `linear-gradient(90deg, ${step.color.replace(")", " / 0.5)")}, transparent)`,
                      width: "calc(100% - 2.5rem)",
                      left: "calc(100% - 1.5rem)",
                    }}
                  />
                )}

                <div
                  className="relative z-10 rounded-2xl p-5 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.11 0.05 275 / 0.9), oklch(0.09 0.04 285 / 0.9))",
                    border: `1px solid ${step.color.replace(")", " / 0.3)")}`,
                  }}
                >
                  {/* Step number */}
                  <div
                    className="font-pixel text-xs mb-3"
                    style={{ color: step.color.replace(")", " / 0.5)") }}
                  >
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: `${step.color.replace(")", " / 0.15)")}`,
                      border: `1px solid ${step.color.replace(")", " / 0.3)")}`,
                      boxShadow: `0 0 15px ${step.color.replace(")", " / 0.2)")}`,
                    }}
                  >
                    <Icon size={22} style={{ color: step.color }} />
                  </div>

                  <h3
                    className="font-orbitron text-xs font-bold mb-2 tracking-wide"
                    style={{ color: step.color }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="font-rajdhani text-sm leading-relaxed"
                    style={{ color: "oklch(0.62 0.05 240)" }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Server IP Box */}
        <div
          className="rounded-2xl p-8 text-center"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.10 0.05 280 / 0.95), oklch(0.12 0.06 270 / 0.95))",
            border: "1px solid oklch(0.72 0.18 195 / 0.4)",
            boxShadow: "0 0 40px oklch(0.72 0.18 195 / 0.1)",
          }}
        >
          <p
            className="font-orbitron text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "oklch(0.65 0.10 200)" }}
          >
            Server IP Address
          </p>

          <button
            type="button"
            onClick={copyIP}
            className="ip-display inline-flex items-center gap-4 px-8 py-5 rounded-xl mx-auto transition-all duration-300 hover:scale-[1.02] group"
            style={{
              boxShadow: copied
                ? "0 0 40px oklch(0.72 0.25 145 / 0.5)"
                : "0 0 30px oklch(0.72 0.18 195 / 0.3)",
              borderColor: copied
                ? "oklch(0.72 0.25 145)"
                : "oklch(0.72 0.18 195)",
            }}
            aria-label="Copy server IP"
          >
            <span
              className="font-pixel text-base sm:text-xl tracking-wider"
              style={{
                color: copied ? "oklch(0.72 0.25 145)" : "oklch(0.72 0.18 195)",
                textShadow: copied
                  ? "0 0 20px oklch(0.72 0.25 145 / 0.9)"
                  : "0 0 20px oklch(0.72 0.18 195 / 0.9)",
              }}
            >
              {SERVER_IP}
            </span>
            <span
              className="flex items-center gap-1.5 font-rajdhani text-sm font-semibold transition-colors duration-200"
              style={{
                color: copied ? "oklch(0.72 0.25 145)" : "oklch(0.55 0.08 240)",
              }}
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
              {copied ? "Copied!" : "Copy"}
            </span>
          </button>

          <p
            className="font-rajdhani text-sm mt-4"
            style={{ color: "oklch(0.55 0.06 240)" }}
          >
            Java Edition 1.20+ • Bedrock support coming soon
          </p>
        </div>
      </div>
    </section>
  );
}
