const impacts = [
  {
    emoji: "🏫",
    title: "850 Children Back in School",
    desc: "Funded school re-enrollment, uniforms, books and stationery for drop-out children in rural Maharashtra.",
    amount: "₹42 Lakhs",
    date: "Sep 2024",
    tag: "Education",
    tagColor: "bg-primary-50 text-primary-700 border-primary-100",
  },
  {
    emoji: "🏥",
    title: "3 Free Medical Camps",
    desc: "Organised free health check-up camps in Rajasthan villages — 2,400 people received consultations and medicines.",
    amount: "₹18 Lakhs",
    date: "Oct 2024",
    tag: "Healthcare",
    tagColor: "bg-amber-50 text-amber-600 border-amber-100",
  },
  {
    emoji: "🍱",
    title: "1.2 Lakh Meals Distributed",
    desc: "Daily meal program for malnourished children under 5 across 6 districts in UP and Bihar.",
    amount: "₹31 Lakhs",
    date: "Nov 2024",
    tag: "Food & Nutrition",
    tagColor: "bg-blue-50 text-blue-600 border-blue-100",
  },
  {
    emoji: "👩‍💻",
    title: "200 Women Trained in Digital Skills",
    desc: "Computer literacy and digital finance training enabling women to earn an income independently.",
    amount: "₹12 Lakhs",
    date: "Dec 2024",
    tag: "Livelihood",
    tagColor: "bg-purple-50 text-purple-600 border-purple-100",
  },
];

const ImpactSection = () => {
  return (
    <section id="impact" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="section-chip mb-4">🌟 Real Impact</div>
          <h2 className="text-4xl font-display font-bold mb-3">
            What Your Money <span className="gradient-text-primary">Actually Did</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Not just numbers — here are real stories of change made possible because you donated.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {impacts.map((item) => (
            <div key={item.title} className="card-surface card-surface-hover rounded-3xl p-6 flex gap-5">
              {/* Emoji */}
              <div className="text-4xl flex-shrink-0 mt-1">{item.emoji}</div>

              <div className="flex-1">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-display font-bold text-foreground text-lg leading-snug">{item.title}</h3>
                  <span className={`flex-shrink-0 text-xs font-semibold px-3 py-1 rounded-full border ${item.tagColor}`}>
                    {item.tag}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-primary-600">{item.amount} utilized</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                </div>
                {/* Fund used bar */}
                <div className="progress-track h-1.5 mt-3">
                  <div className="progress-fill-green h-full" style={{ width: "100%" }} />
                </div>
                <div className="text-xs text-primary-600 font-medium mt-1">Fully disbursed ✓</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
