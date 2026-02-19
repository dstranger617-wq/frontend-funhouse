import { Code2, Github, Twitter, Heart } from "lucide-react";

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
            <Code2 className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-bold text-foreground text-lg">
            Hack<span className="gradient-text">Fest</span>
          </span>
        </div>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-1">
          {[
            { label: "Features", id: "features" },
            { label: "Tech Stack", id: "tech" },
            { label: "Team", id: "team" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 font-medium"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:opacity-90 glow-primary"
          style={{ background: "var(--gradient-primary)" }}
        >
          <Github className="w-4 h-4" />
          <span className="hidden sm:inline">View Code</span>
        </a>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-primary" />
            <span className="font-bold text-foreground">
              Hack<span className="gradient-text">Fest</span> 2025
            </span>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground text-sm flex items-center gap-1.5">
              Built with
              <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
              in 24 hours · Frontend Hackathon
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground font-mono">
            © 2025 HackFest Team · All rights reserved · Made with React + TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Navbar, Footer };
