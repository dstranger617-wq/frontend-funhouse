import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const allocation = [
  { name: "Education", value: 35, amount: "₹1.68 Cr", color: "#10b981", desc: "School kits, scholarships, tuition" },
  { name: "Healthcare", value: 25, amount: "₹1.20 Cr", color: "#f59e0b", desc: "Medical camps, medicines, check-ups" },
  { name: "Food & Nutrition", value: 20, amount: "₹96 L", color: "#3b82f6", desc: "Meals, nutrition packs for children" },
  { name: "Livelihood", value: 12, amount: "₹57.6 L", color: "#8b5cf6", desc: "Skill training & employment support" },
  { name: "Admin & Ops", value: 8, amount: "₹38.4 L", color: "#94a3b8", desc: "Staff, tech, compliance, audits" },
];

const RADIAN = Math.PI / 180;
const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  if (percent < 0.08) return null;
  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={13} fontWeight={700}>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload?.length) {
    const d = payload[0].payload;
    return (
      <div className="bg-card border border-border shadow-xl rounded-xl p-4 text-sm min-w-[180px]">
        <div className="font-display font-bold text-base mb-1" style={{ color: d.color }}>{d.name}</div>
        <div className="text-muted-foreground">{d.desc}</div>
        <div className="mt-2 font-semibold text-foreground">{d.amount} · {d.value}%</div>
      </div>
    );
  }
  return null;
};

const AllocationChart = () => {
  return (
    <section id="allocation" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="section-chip mb-4">📊 Fund Allocation</div>
          <h2 className="text-4xl font-display font-bold mb-3">
            Where Does Your Money <span className="gradient-text-primary">Actually Go?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Every rupee is accounted for. Here's the exact breakdown of how we allocate all donations — reviewed quarterly by an independent auditor.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Pie chart */}
          <div className="card-surface rounded-3xl p-8">
            <h3 className="font-display font-bold text-lg mb-6 text-foreground">Total Fund Allocation</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={allocation}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomLabel}
                    outerRadius={130}
                    innerRadius={50}
                    dataKey="value"
                    stroke="none"
                  >
                    {allocation.map((entry) => (
                      <Cell key={entry.name} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend
                    formatter={(value) => <span className="text-sm text-foreground font-medium">{value}</span>}
                    iconType="circle"
                    iconSize={10}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Breakdown cards */}
          <div className="space-y-4">
            {allocation.map((item) => (
              <div key={item.name} className="card-surface card-surface-hover rounded-2xl p-5 flex items-center gap-4">
                {/* Color dot */}
                <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: item.color }} />

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-semibold text-foreground text-sm">{item.name}</span>
                    <span className="font-display font-bold text-sm" style={{ color: item.color }}>{item.amount}</span>
                  </div>
                  <div className="progress-track h-2">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${item.value}%`, background: item.color }}
                    />
                  </div>
                  <div className="text-xs text-muted-foreground mt-1.5">{item.desc}</div>
                </div>

                <div className="text-right flex-shrink-0">
                  <div className="text-lg font-display font-bold text-muted-foreground">{item.value}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllocationChart;
