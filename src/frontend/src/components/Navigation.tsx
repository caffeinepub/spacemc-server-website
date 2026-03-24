import { Menu, X, Zap } from "lucide-react";
import { useState } from "react";
import { SiDiscord } from "react-icons/si";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Game Modes", href: "#gamemodes" },
  { label: "Ranks", href: "#ranks" },
  { label: "How to Join", href: "#howtojoin" },
  { label: "Staff", href: "#staff" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.06 0.025 280 / 0.97) 0%, oklch(0.06 0.025 280 / 0.85) 100%)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid oklch(0.30 0.10 270 / 0.5)",
        boxShadow: "0 4px 30px oklch(0.06 0.025 280 / 0.8)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/assets/generated/spacemc-logo.dim_512x128.png"
              alt="DomainMC"
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-orbitron text-xs font-medium tracking-widest uppercase transition-all duration-200"
                style={{ color: "oklch(0.75 0.08 220)" }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color =
                    "oklch(0.72 0.18 195)";
                  (e.target as HTMLElement).style.textShadow =
                    "0 0 10px oklch(0.72 0.18 195 / 0.7)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color =
                    "oklch(0.75 0.08 220)";
                  (e.target as HTMLElement).style.textShadow = "none";
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right side: Player count + Discord */}
          <div className="hidden md:flex items-center gap-3">
            {/* Player Count */}
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-rajdhani font-semibold"
              style={{
                background: "oklch(0.12 0.05 270 / 0.8)",
                border: "1px solid oklch(0.35 0.12 270)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{
                  background: "oklch(0.72 0.25 145)",
                  boxShadow: "0 0 6px oklch(0.72 0.25 145)",
                }}
              />
              <Zap size={12} style={{ color: "oklch(0.80 0.18 85)" }} />
              <span style={{ color: "oklch(0.80 0.18 85)" }}>142</span>
              <span style={{ color: "oklch(0.60 0.05 240)" }}>/</span>
              <span style={{ color: "oklch(0.70 0.06 240)" }}>500 Online</span>
            </div>

            {/* Discord Button */}
            <a
              href="https://discord.gg/Dfxu79Uk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-discord flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold"
            >
              <SiDiscord size={16} />
              <span>Discord</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: "oklch(0.72 0.18 195)" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden px-4 pb-4 pt-2 flex flex-col gap-3"
          style={{
            background: "oklch(0.08 0.03 280 / 0.98)",
            borderTop: "1px solid oklch(0.25 0.08 270 / 0.5)",
          }}
        >
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="font-orbitron text-xs font-medium tracking-widest uppercase text-left py-2 transition-colors"
              style={{ color: "oklch(0.75 0.08 220)" }}
            >
              {link.label}
            </button>
          ))}
          <div
            className="flex items-center gap-3 pt-2 border-t"
            style={{ borderColor: "oklch(0.25 0.08 270 / 0.5)" }}
          >
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-rajdhani font-semibold"
              style={{
                background: "oklch(0.12 0.05 270 / 0.8)",
                border: "1px solid oklch(0.35 0.12 270)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{
                  background: "oklch(0.72 0.25 145)",
                  boxShadow: "0 0 6px oklch(0.72 0.25 145)",
                }}
              />
              <span style={{ color: "oklch(0.80 0.18 85)" }}>
                142 / 500 Online
              </span>
            </div>
            <a
              href="https://discord.gg/Dfxu79Uk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-discord flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold"
            >
              <SiDiscord size={16} />
              <span>Discord</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
