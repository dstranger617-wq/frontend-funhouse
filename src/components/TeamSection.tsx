import { Github, Twitter, Linkedin } from "lucide-react";

const team = [
  {
    name: "Alex Kumar",
    role: "Frontend Lead",
    avatar: "AK",
    bio: "Loves crafting pixel-perfect UIs and smooth animations.",
    gradient: "from-cyan-400 to-blue-500",
    socials: { github: "#", linkedin: "#" },
  },
  {
    name: "Priya Singh",
    role: "UI/UX Designer",
    avatar: "PS",
    bio: "Turns ideas into intuitive, beautiful interfaces.",
    gradient: "from-purple-400 to-pink-500",
    socials: { github: "#", linkedin: "#" },
  },
  {
    name: "Ravi Sharma",
    role: "React Developer",
    avatar: "RS",
    bio: "Component wizard, hooks guru, performance optimizer.",
    gradient: "from-green-400 to-emerald-500",
    socials: { github: "#", linkedin: "#" },
  },
  {
    name: "Ananya Patel",
    role: "Full-Stack Dev",
    avatar: "AP",
    bio: "Bridges the gap between design and functionality.",
    gradient: "from-orange-400 to-red-500",
    socials: { github: "#", linkedin: "#" },
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 neon-border rounded-full px-4 py-1.5 mb-4">
            <span className="font-mono text-xs text-primary tracking-widest uppercase">The Builders</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet the <span className="gradient-text">Team</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Four passionate developers who turned an idea into reality in just 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="glass-card rounded-2xl p-6 text-center group hover:-translate-y-2 transition-all duration-300"
            >
              {/* Avatar */}
              <div className="relative mx-auto mb-4 w-20 h-20">
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-xl font-bold text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {member.avatar}
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse" />
                </div>
              </div>

              <h3 className="font-bold text-foreground text-lg">{member.name}</h3>
              <p className="text-primary text-sm font-mono mb-3">{member.role}</p>
              <p className="text-muted-foreground text-xs leading-relaxed mb-4">{member.bio}</p>

              {/* Social links */}
              <div className="flex items-center justify-center gap-3">
                <a
                  href={member.socials.github}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={member.socials.linkedin}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
