import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TechSection from "@/components/TechSection";
import TeamSection from "@/components/TeamSection";
import { Navbar, Footer } from "@/components/NavFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Navbar */}
      <div className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-background/90 to-transparent backdrop-blur-sm border-b border-border/20">
        <Navbar />
      </div>

      {/* Main content */}
      <main>
        <HeroSection />
        <FeaturesSection />
        <TechSection />
        <TeamSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
