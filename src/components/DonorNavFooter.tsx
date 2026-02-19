import { Heart, Shield, FileText, Phone, Mail, MapPin } from "lucide-react";

const DonorNavbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div className="w-9 h-9 rounded-xl btn-primary flex items-center justify-center">
            <Heart className="w-4 h-4 text-primary-foreground fill-primary-foreground" />
          </div>
          <div>
            <div className="font-display font-bold text-foreground text-base leading-none">DonorSight</div>
            <div className="text-xs text-muted-foreground leading-none">100% Transparent</div>
          </div>
        </div>

        {/* Nav */}
        <div className="hidden md:flex items-center gap-1">
          {[
            { label: "Allocation", id: "allocation" },
            { label: "Timeline", id: "utilization" },
            { label: "Impact", id: "impact" },
            { label: "Future Plans", id: "future" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-primary-600 hover:bg-primary-50 transition-all duration-200 font-medium"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button className="btn-amber px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2">
          <Heart className="w-4 h-4" />
          Donate Now
        </button>
      </div>
    </nav>
  );
};

const DonorFooter = () => {
  return (
    <footer className="bg-foreground text-background/90 py-14 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary-600 flex items-center justify-center">
                <Heart className="w-4 h-4 text-white fill-white" />
              </div>
              <div className="font-display font-bold text-lg text-background">DonorSight</div>
            </div>
            <p className="text-background/60 text-sm leading-relaxed">
              India's most transparent donation platform. Every rupee tracked, every project audited, every impact reported.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <Shield className="w-4 h-4 text-primary-200" />
              <span className="text-xs text-background/60">Registered NGO · 80G Tax Exempt · FCRA Approved</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="font-display font-bold text-background mb-4">Transparency</div>
            <div className="space-y-2.5">
              {["Annual Audit Report", "Fund Utilisation Certificates", "Board Meeting Minutes", "CSR Compliance Reports", "Beneficiary Data"].map((item) => (
                <div key={item}>
                  <a href="#" className="flex items-center gap-2 text-sm text-background/60 hover:text-amber-400 transition-colors">
                    <FileText className="w-3.5 h-3.5" />
                    {item}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="font-display font-bold text-background mb-4">Contact Us</div>
            <div className="space-y-3">
              {[
                { icon: Phone, text: "+91 98765 43210" },
                { icon: Mail, text: "transparency@donorsight.in" },
                { icon: MapPin, text: "Mumbai, Maharashtra, India" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2.5 text-sm text-background/60">
                  <Icon className="w-4 h-4 text-primary-200 flex-shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-background/40">
          <span>© 2025 DonorSight. All rights reserved.</span>
          <span>Built with transparency, powered by React + Vite ⚡</span>
        </div>
      </div>
    </footer>
  );
};

export { DonorNavbar, DonorFooter };
