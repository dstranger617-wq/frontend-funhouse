import heroBanner from "@/assets/hero-banner.jpg";
import { Github, ExternalLink, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden scanline">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Hero background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Grid bg overlay */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
           style={{ background: "radial-gradient(circle, hsl(185 100% 50%), transparent)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-8"
           style={{ background: "radial-gradient(circle, hsl(200 100% 60%), transparent)" }} />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 neon-border rounded-full px-4 py-2 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          <span className="font-mono text-sm text-primary tracking-widest uppercase">Hackathon 2025</span>
        </div>

        {/* Main heading */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-slide-up"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          <span className="gradient-text glow-text">HackFest</span>
          <br />
          <span className="text-foreground">Project Showcase</span>
        </h1>

        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up"
          style={{ animationDelay: "0.25s", opacity: 0 }}
        >
          A cutting-edge web application built during a 24-hour hackathon — 
          designed beautifully, built with passion, powered by the web.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          <a
            href="#features"
            onClick={(e) => { e.preventDefault(); scrollToFeatures(); }}
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-primary-foreground overflow-hidden transition-all duration-300 hover:scale-105"
            style={{ background: "var(--gradient-primary)", boxShadow: "var(--glow-primary)" }}
          >
            <span>Explore Project</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#team"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-primary border border-primary/30 hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
          >
            <Github className="w-4 h-4" />
            <span>View on GitHub</span>
          </a>
        </div>

        {/* Stats row */}
        <div
          className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-slide-up"
          style={{ animationDelay: "0.55s", opacity: 0 }}
        >
          {[
            { value: "24h", label: "Build Time" },
            { value: "100%", label: "Frontend" },
            { value: "🏆", label: "Goal: Win" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider font-mono">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToFeatures}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default HeroSection;
