import Features from "./components/Features";
import Footer from "./components/Footer";
import GameModes from "./components/GameModes";
import Hero from "./components/Hero";
import HowToJoin from "./components/HowToJoin";
import Navigation from "./components/Navigation";
import Ranks from "./components/Ranks";
import StaffTeam from "./components/StaffTeam";
import StarfieldBackground from "./components/StarfieldBackground";

export default function App() {
  return (
    <div
      className="relative min-h-screen"
      style={{ background: "oklch(0.06 0.025 280)" }}
    >
      {/* Animated starfield background */}
      <StarfieldBackground />

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main className="relative" style={{ zIndex: 1 }}>
        <Hero />

        {/* Section divider */}
        <div className="section-divider mx-8" />

        <Features />

        <div className="section-divider mx-8" />

        <GameModes />

        <div className="section-divider mx-8" />

        <Ranks />

        <div className="section-divider mx-8" />

        <HowToJoin />

        <div className="section-divider mx-8" />

        <StaffTeam />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
