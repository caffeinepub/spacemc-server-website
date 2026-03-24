import { Crown, Shield, Star } from "lucide-react";

const staffMembers = [
  {
    name: "tanjiro",
    role: "Owner",
    roleIcon: Crown,
    description:
      "Founder and visionary behind DomainMC. Building the ultimate space adventure since day one.",
    color: "oklch(0.80 0.18 85)",
    glowColor: "oklch(0.80 0.18 85 / 0.4)",
    borderColor: "oklch(0.60 0.18 85)",
    bgColor: "oklch(0.80 0.18 85 / 0.08)",
    avatarBg:
      "linear-gradient(135deg, oklch(0.70 0.20 80), oklch(0.80 0.18 85))",
    avatarInitial: "T",
    badge: "OWNER",
    badgeBg: "oklch(0.80 0.18 85 / 0.15)",
    badgeBorder: "oklch(0.80 0.18 85 / 0.5)",
  },
  {
    name: "hoggalala riyan",
    role: "Staff",
    roleIcon: Shield,
    description:
      "Dedicated staff member keeping the galaxy safe and helping players on their cosmic journey.",
    color: "oklch(0.72 0.18 195)",
    glowColor: "oklch(0.72 0.18 195 / 0.4)",
    borderColor: "oklch(0.52 0.18 195)",
    bgColor: "oklch(0.72 0.18 195 / 0.08)",
    avatarBg:
      "linear-gradient(135deg, oklch(0.55 0.25 240), oklch(0.72 0.18 195))",
    avatarInitial: "HR",
    badge: "STAFF",
    badgeBg: "oklch(0.72 0.18 195 / 0.15)",
    badgeBorder: "oklch(0.72 0.18 195 / 0.5)",
  },
];

function PixelAvatar({
  initial,
  bg,
  color,
}: { initial: string; bg: string; color: string }) {
  return (
    <div
      className="relative w-24 h-24 rounded-2xl flex items-center justify-center overflow-hidden"
      style={{
        background: bg,
        boxShadow: `0 0 20px ${color.replace(")", " / 0.5)")}`,
      }}
    >
      {/* Pixel grid overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(oklch(0.98 0 0 / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, oklch(0.98 0 0 / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "8px 8px",
        }}
      />
      <span
        className="font-pixel text-sm relative z-10"
        style={{
          color: "oklch(0.06 0.025 280)",
          textShadow: "1px 1px 0 rgba(0,0,0,0.3)",
        }}
      >
        {initial}
      </span>
    </div>
  );
}

export default function StaffTeam() {
  return (
    <section
      id="staff"
      className="relative py-24 px-4 sm:px-6"
      style={{ zIndex: 1 }}
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, oklch(0.40 0.15 200 / 0.07) 0%, transparent 60%)",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className="font-orbitron text-xs tracking-[0.3em] uppercase mb-3"
            style={{ color: "oklch(0.55 0.25 290)" }}
          >
            ✦ The Crew ✦
          </p>
          <h2
            className="font-pixel text-xl sm:text-2xl md:text-3xl mb-4"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.55 0.25 290), oklch(0.72 0.18 195))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            STAFF TEAM
          </h2>
          <div
            className="h-px max-w-xs mx-auto"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.55 0.25 290 / 0.5), oklch(0.72 0.18 195 / 0.5), transparent)",
            }}
          />
          <p
            className="font-rajdhani text-base mt-4"
            style={{ color: "oklch(0.60 0.06 240)" }}
          >
            Meet the dedicated team keeping DomainMC running smoothly
          </p>
        </div>

        {/* Staff Cards */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-stretch">
          {staffMembers.map((member) => {
            const RoleIcon = member.roleIcon;
            return (
              <div
                key={member.name}
                className="flex-1 max-w-sm mx-auto sm:mx-0 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 group"
                style={{
                  background: `linear-gradient(135deg, ${member.bgColor}, oklch(0.10 0.04 280 / 0.95))`,
                  border: `1px solid ${member.borderColor}`,
                  boxShadow: "0 4px 20px oklch(0.06 0.025 280 / 0.5)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    `0 0 30px ${member.glowColor}, 0 8px 32px oklch(0.06 0.025 280 / 0.8)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 4px 20px oklch(0.06 0.025 280 / 0.5)";
                }}
              >
                {/* Avatar */}
                <div
                  className="mb-5 animate-float"
                  style={{
                    animationDelay: member.name === "tanjiro" ? "0s" : "1s",
                  }}
                >
                  <PixelAvatar
                    initial={member.avatarInitial}
                    bg={member.avatarBg}
                    color={member.color}
                  />
                </div>

                {/* Role Badge */}
                <div
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full mb-3"
                  style={{
                    background: member.badgeBg,
                    border: `1px solid ${member.badgeBorder}`,
                  }}
                >
                  <RoleIcon size={12} style={{ color: member.color }} />
                  <span
                    className="font-pixel text-[9px] tracking-widest"
                    style={{ color: member.color }}
                  >
                    {member.badge}
                  </span>
                </div>

                {/* Name */}
                <h3
                  className="font-orbitron text-lg font-bold mb-1 tracking-wide"
                  style={{ color: member.color }}
                >
                  {member.name}
                </h3>

                {/* Role */}
                <p
                  className="font-rajdhani text-xs font-semibold tracking-widest uppercase mb-4"
                  style={{ color: "oklch(0.55 0.08 240)" }}
                >
                  {member.role}
                </p>

                {/* Description */}
                <p
                  className="font-rajdhani text-sm leading-relaxed"
                  style={{ color: "oklch(0.62 0.05 240)" }}
                >
                  {member.description}
                </p>

                {/* Stars decoration */}
                <div className="flex gap-1 mt-5">
                  {(["s1", "s2", "s3", "s4", "s5"] as const).map((id) => (
                    <Star
                      key={id}
                      size={12}
                      fill={member.color}
                      style={{ color: member.color, opacity: 0.8 }}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Join Staff CTA */}
        <div
          className="mt-12 text-center rounded-2xl p-6"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.10 0.04 280 / 0.8), oklch(0.12 0.05 270 / 0.8))",
            border: "1px solid oklch(0.30 0.10 270 / 0.5)",
          }}
        >
          <p
            className="font-orbitron text-sm font-semibold mb-2"
            style={{ color: "oklch(0.75 0.08 220)" }}
          >
            Want to join the team?
          </p>
          <p
            className="font-rajdhani text-sm mb-4"
            style={{ color: "oklch(0.55 0.06 240)" }}
          >
            Apply for a staff position on our Discord server
          </p>
          <a
            href="https://discord.gg/Dfxu79Uk"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-discord inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold"
          >
            Apply on Discord
          </a>
        </div>
      </div>
    </section>
  );
}
