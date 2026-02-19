const plans = [
  {
    emoji: "🏗️",
    title: "Build 2 Community Learning Centres",
    target: "₹80 Lakhs",
    raised: 62,
    timeline: "Mar 2025",
    category: "Education",
    desc: "Permanent infrastructure for after-school coaching, digital literacy, and skill development.",
    color: "hsl(152,65%,36%)",
    trackColor: "progress-fill-green",
  },
  {
    emoji: "🚌",
    title: "Mobile Healthcare Van for Remote Areas",
    target: "₹35 Lakhs",
    raised: 45,
    timeline: "Feb 2025",
    category: "Healthcare",
    desc: "A fully-equipped medical van to serve 40+ unreachable villages every month.",
    color: "hsl(38,95%,52%)",
    trackColor: "progress-fill-amber",
  },
  {
    emoji: "🌾",
    title: "Drought Relief — 500 Farmer Families",
    target: "₹55 Lakhs",
    raised: 28,
    timeline: "Jan 2025",
    category: "Livelihood",
    desc: "Emergency seed kits, soil testing, and irrigation support for drought-hit farmers in Vidarbha.",
    color: "hsl(210,80%,55%)",
    trackColor: "h-full rounded-full bg-blue-500 transition-all duration-1000",
  },
  {
    emoji: "🍼",
    title: "Nutrition Program — 10,000 Children",
    target: "₹45 Lakhs",
    raised: 71,
    timeline: "Apr 2025",
    category: "Food & Nutrition",
    desc: "Daily protein-rich meals and micronutrient supplements for severely malnourished children under 3.",
    color: "hsl(280,70%,60%)",
    trackColor: "h-full rounded-full bg-purple-500 transition-all duration-1000",
  },
];

const FuturePlans = () => {
  return (
    <section id="future" className="py-20 px-6" style={{ background: "hsl(38,40%,97%)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="section-chip mb-4">🗺️ Future Utilization Plan</div>
          <h2 className="text-4xl font-display font-bold mb-3">
            Where Will <span className="gradient-text-amber">Your Next Donation</span> Go?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We plan ahead publicly. See every upcoming project, its target, how much is funded, and when it will launch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {plans.map((plan) => (
            <div key={plan.title} className="card-surface card-surface-hover rounded-3xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">{plan.emoji}</div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display font-bold text-foreground text-base leading-snug">{plan.title}</h3>
                    <span className="flex-shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full bg-muted text-muted-foreground border border-border">
                      {plan.category}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{plan.desc}</p>
                </div>
              </div>

              {/* Progress */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-foreground">{plan.raised}% Funded</span>
                  <span className="text-muted-foreground">Target: {plan.target}</span>
                </div>
                <div className="progress-track h-3">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{ width: `${plan.raised}%`, background: plan.color }}
                  />
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Launching: {plan.timeline}</span>
                  <span className="font-medium" style={{ color: plan.color }}>
                    {100 - plan.raised}% still needed
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Donate CTA */}
        <div className="mt-12 card-surface rounded-3xl p-8 text-center"
          style={{ background: "linear-gradient(135deg, hsl(152 60% 95%), hsl(38 80% 96%))" }}>
          <div className="text-4xl mb-4">❤️</div>
          <h3 className="font-display font-bold text-2xl text-foreground mb-2">Ready to Make a Difference?</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Every rupee you give goes exactly where you see it. No hidden fees, no guesswork — just transparent impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary px-8 py-3.5 rounded-xl font-semibold text-base">
              Donate Now — Track Every Rupee
            </button>
            <button className="px-8 py-3.5 rounded-xl font-semibold text-base border-2 border-primary-200 text-primary-600 hover:bg-primary-50 transition-colors">
              Download Annual Report
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuturePlans;
