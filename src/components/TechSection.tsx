const techStack = [
  { name: "React", icon: "⚛️", category: "UI Framework" },
  { name: "TypeScript", icon: "📘", category: "Language" },
  { name: "Tailwind CSS", icon: "🎨", category: "Styling" },
  { name: "Vite", icon: "⚡", category: "Build Tool" },
  { name: "shadcn/ui", icon: "🧩", category: "Components" },
  { name: "React Router", icon: "🗺️", category: "Navigation" },
  { name: "Lucide Icons", icon: "✨", category: "Icons" },
  { name: "React Query", icon: "🔄", category: "Data Fetching" },
];

const TechSection = () => {
  return (
    <section id="tech" className="py-24 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(185 100% 50%), transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 neon-border rounded-full px-4 py-1.5 mb-4">
            <span className="font-mono text-xs text-primary tracking-widest uppercase">Stack</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built With <span className="gradient-text">Modern Tools</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Carefully chosen technologies that empower rapid development without sacrificing quality.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {techStack.map((tech, i) => (
            <div
              key={tech.name}
              className="glass-card rounded-2xl p-5 text-center group hover:-translate-y-2 transition-all duration-300 cursor-default"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300 inline-block">
                {tech.icon}
              </div>
              <div className="font-semibold text-foreground text-sm">{tech.name}</div>
              <div className="text-xs text-muted-foreground mt-1 font-mono">{tech.category}</div>
            </div>
          ))}
        </div>

        {/* Code snippet showcase */}
        <div className="mt-16 glass-card rounded-2xl p-6 overflow-hidden">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="font-mono text-xs text-muted-foreground ml-2">App.tsx</span>
          </div>
          <pre className="font-mono text-sm overflow-x-auto leading-relaxed">
            <code>
              <span className="text-primary">{"import "}</span>
              <span className="text-foreground">{"{ useState } "}</span>
              <span className="text-primary">{"from "}</span>
              <span className="text-yellow-400">{'"react"'}</span>
              <span className="text-foreground">{";"}</span>
              {"\n\n"}
              <span className="text-muted-foreground">{"// Hackathon project — built with 💙"}</span>
              {"\n"}
              <span className="text-primary">{"const "}</span>
              <span className="text-cyan-300">{"App "}</span>
              <span className="text-foreground">{"= () => {"}</span>
              {"\n  "}
              <span className="text-primary">{"return "}</span>
              <span className="text-foreground">{"("}</span>
              {"\n    "}
              <span className="text-primary">{"<"}</span>
              <span className="text-green-400">{"div"}</span>
              <span className="text-primary">{">"}</span>
              <span className="text-foreground">{"🚀 Hello, Hackathon!"}</span>
              <span className="text-primary">{"</"}</span>
              <span className="text-green-400">{"div"}</span>
              <span className="text-primary">{">"}</span>
              {"\n  "}
              <span className="text-foreground">{")"}</span>
              {"\n"}
              <span className="text-foreground">{"}"}</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
