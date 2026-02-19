import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, BarChart, Bar, Legend
} from "recharts";

const monthlyData = [
  { month: "Jan", raised: 28, spent: 18 },
  { month: "Feb", raised: 35, spent: 24 },
  { month: "Mar", raised: 42, spent: 31 },
  { month: "Apr", raised: 38, spent: 30 },
  { month: "May", raised: 55, spent: 40 },
  { month: "Jun", raised: 60, spent: 48 },
  { month: "Jul", raised: 72, spent: 58 },
  { month: "Aug", raised: 68, spent: 55 },
  { month: "Sep", raised: 80, spent: 65 },
  { month: "Oct", raised: 90, spent: 72 },
  { month: "Nov", raised: 85, spent: 70 },
  { month: "Dec", raised: 95, spent: 78 },
];

const categoryMonthly = [
  { month: "Q1", Education: 18, Healthcare: 12, Food: 9 },
  { month: "Q2", Education: 24, Healthcare: 17, Food: 13 },
  { month: "Q3", Education: 31, Healthcare: 22, Food: 18 },
  { month: "Q4", Education: 38, Healthcare: 28, Food: 22 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload?.length) {
    return (
      <div className="bg-card border border-border shadow-xl rounded-xl p-4 text-sm">
        <div className="font-display font-bold mb-2 text-foreground">{label}</div>
        {payload.map((p: any) => (
          <div key={p.name} className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: p.color }} />
            <span className="text-muted-foreground">{p.name}:</span>
            <span className="font-semibold text-foreground">₹{p.value}L</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const UtilizationTimeline = () => {
  return (
    <section id="utilization" className="py-20 px-6" style={{ background: "hsl(152 30% 97%)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="section-chip mb-4">📈 Utilization Over Time</div>
          <h2 className="text-4xl font-display font-bold mb-3">
            Funds Raised <span className="gradient-text-amber">vs Utilized</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We never hoard donations. See how quickly funds raised are put to work for the people who need it most.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Area chart */}
          <div className="card-surface rounded-3xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display font-bold text-foreground">Monthly Overview (₹ Lakhs)</h3>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-1.5 rounded-full bg-primary-600 inline-block" />
                  Raised
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-1.5 rounded-full bg-amber-500 inline-block" />
                  Spent
                </span>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyData} margin={{ top: 4, right: 4, bottom: 0, left: -16 }}>
                  <defs>
                    <linearGradient id="gradRaised" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(152,65%,36%)" stopOpacity={0.25} />
                      <stop offset="95%" stopColor="hsl(152,65%,36%)" stopOpacity={0.02} />
                    </linearGradient>
                    <linearGradient id="gradSpent" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(38,95%,52%)" stopOpacity={0.25} />
                      <stop offset="95%" stopColor="hsl(38,95%,52%)" stopOpacity={0.02} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(152,15%,90%)" />
                  <XAxis dataKey="month" tick={{ fontSize: 12, fill: "hsl(160,10%,48%)" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: "hsl(160,10%,48%)" }} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area type="monotone" dataKey="raised" name="Raised" stroke="hsl(152,65%,36%)" strokeWidth={2.5} fill="url(#gradRaised)" />
                  <Area type="monotone" dataKey="spent" name="Spent" stroke="hsl(38,95%,52%)" strokeWidth={2.5} fill="url(#gradSpent)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Bar chart by category */}
          <div className="card-surface rounded-3xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display font-bold text-foreground">Spending by Category (₹ Lakhs)</h3>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryMonthly} margin={{ top: 4, right: 4, bottom: 0, left: -16 }} barCategoryGap="30%">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(152,15%,90%)" vertical={false} />
                  <XAxis dataKey="month" tick={{ fontSize: 12, fill: "hsl(160,10%,48%)" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: "hsl(160,10%,48%)" }} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend formatter={(v) => <span className="text-xs font-medium text-foreground">{v}</span>} iconType="circle" iconSize={8} />
                  <Bar dataKey="Education" fill="hsl(152,65%,40%)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Healthcare" fill="hsl(38,95%,52%)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Food" fill="hsl(210,80%,58%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Key callout */}
        <div className="mt-8 card-surface rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 border-l-4 border-primary-600">
          <div className="text-4xl">✅</div>
          <div>
            <div className="font-display font-bold text-foreground text-lg mb-1">75% of all funds are deployed within 30 days of receipt</div>
            <div className="text-muted-foreground text-sm">
              Remaining 25% is held in a government-regulated reserve account for emergency relief — verified by our CA audit firm every quarter.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UtilizationTimeline;
