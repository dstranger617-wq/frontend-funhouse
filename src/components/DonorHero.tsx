import donorHero from "@/assets/donor-hero.jpg";
import { Heart, ArrowRight, Shield, Eye } from "lucide-react";

const DonorHero = () => {
  return (
    <section className="relative overflow-hidden hero-bg pt-24 pb-16 px-6">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(152 65% 55%), transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(38 95% 65%), transparent 70%)" }} />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text side */}
        <div>
          {/* Chip */}
          <div className="section-chip mb-6 animate-fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-600 inline-block" />
            100% Transparent Giving
          </div>

          <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight mb-6 animate-fade-up delay-100">
            Know Exactly Where
            <br />
            Your{" "}
            <span className="gradient-text-amber">Donation</span>
            <br />
            <span className="gradient-text-primary">Goes</span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg animate-fade-up delay-200">
            Every rupee you donate is tracked, reported, and verified. See real-time 
            breakdowns of how funds are allocated, spent today, and planned for the future — 
            no hidden costs, no ambiguity.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3 mb-10 animate-fade-up delay-300">
            {[
              { icon: Shield, text: "Verified NGO" },
              { icon: Eye, text: "Real-time Tracking" },
              { icon: Heart, text: "Lives Impacted: 12,400+" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 bg-card rounded-full px-4 py-2 border border-border shadow-sm text-sm font-medium text-foreground">
                <Icon className="w-4 h-4 text-primary-600" />
                {text}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-400">
            <a
              href="#allocation"
              onClick={(e) => { e.preventDefault(); document.getElementById("allocation")?.scrollIntoView({ behavior: "smooth" }); }}
              className="btn-primary inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base"
            >
              See Fund Breakdown
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#impact"
              onClick={(e) => { e.preventDefault(); document.getElementById("impact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base text-primary-600 border-2 border-primary-200 hover:bg-primary-50 transition-colors"
            >
              View Impact Stories
            </a>
          </div>
        </div>

        {/* Image side */}
        <div className="relative animate-fade-up delay-200">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={donorHero}
              alt="Donation transparency visualization"
              className="w-full h-80 lg:h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-700/30 to-transparent" />
          </div>

          {/* Floating stat card */}
          <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-xl border border-border p-4 animate-fade-up delay-400">
            <div className="text-xs text-muted-foreground font-medium mb-1">Total Raised This Month</div>
            <div className="text-2xl font-display font-bold gradient-text-primary">₹ 24,80,000</div>
            <div className="flex items-center gap-1 mt-1">
              <span className="text-xs text-primary-600 font-semibold">↑ 18% vs last month</span>
            </div>
          </div>

          {/* Floating donors card */}
          <div className="absolute -top-4 -right-4 bg-card rounded-2xl shadow-xl border border-border p-4 animate-fade-up delay-300">
            <div className="text-xs text-muted-foreground font-medium mb-1">Active Donors</div>
            <div className="text-2xl font-display font-bold text-amber-500">3,842</div>
            <div className="text-xs text-muted-foreground">across 18 states</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonorHero;
