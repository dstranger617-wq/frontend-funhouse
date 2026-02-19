import { Zap, Smartphone, Palette, Shield, Globe, Code2 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with blazing fast load times and smooth 60fps animations throughout.",
    color: "hsl(45 100% 60%)",
  },
  {
    icon: Smartphone,
    title: "Fully Responsive",
    description: "Perfect on every device — from mobile phones to ultrawide monitors, every pixel counts.",
    color: "hsl(185 100% 50%)",
  },
  {
    icon: Palette,
    title: "Beautiful UI",
    description: "Glassmorphism design with dynamic glow effects, smooth transitions, and a cohesive design system.",
    color: "hsl(280 100% 70%)",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description: "Built with React + TypeScript following best practices for maintainability and scalability.",
    color: "hsl(140 80% 55%)",
  },
  {
    icon: Globe,
    title: "Web Standards",
    description: "Semantic HTML, ARIA accessibility, and SEO-optimized structure for maximum compatibility.",
    color: "hsl(200 100% 60%)",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Security-first approach with input validation, safe rendering, and zero vulnerabilities.",
    color: "hsl(0 80% 65%)",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 neon-border rounded-full px-4 py-1.5 mb-4">
            <span className="font-mono text-xs text-primary tracking-widest uppercase">What We Built</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Key Features</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Every detail was crafted with intention. Here's what makes our project stand out.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="glass-card rounded-2xl p-6 group cursor-default transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `${feature.color}15`,
                    border: `1px solid ${feature.color}30`,
                    boxShadow: `0 0 20px ${feature.color}20`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: feature.color }} />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>

                {/* Hover accent line */}
                <div
                  className="h-0.5 w-0 group-hover:w-full transition-all duration-500 mt-4 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${feature.color}, transparent)` }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
