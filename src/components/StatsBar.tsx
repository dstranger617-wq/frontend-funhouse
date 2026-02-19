import { IndianRupee, Users, CheckCircle, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: IndianRupee,
    value: "₹4.8 Cr",
    label: "Total Donations Received",
    sub: "Since Jan 2023",
    color: "text-primary-600",
    bg: "bg-primary-50",
    border: "border-primary-100",
  },
  {
    icon: TrendingUp,
    value: "₹3.6 Cr",
    label: "Funds Utilized So Far",
    sub: "75% of total raised",
    color: "text-amber-500",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    icon: Users,
    value: "12,400+",
    label: "Beneficiaries Reached",
    sub: "Across 6 programs",
    color: "text-blue-500",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: CheckCircle,
    value: "96%",
    label: "Fund Efficiency",
    sub: "Only 4% admin overhead",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
];

const StatsBar = () => {
  return (
    <section className="py-12 px-6 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className={`flex items-start gap-4 p-5 rounded-2xl ${stat.bg} border ${stat.border} card-surface-hover`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center bg-card shadow-sm flex-shrink-0`}>
                <Icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div>
                <div className={`text-2xl font-display font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-sm font-semibold text-foreground leading-snug">{stat.label}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{stat.sub}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsBar;
