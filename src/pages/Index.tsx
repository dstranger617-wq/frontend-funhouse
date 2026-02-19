import DonorHero from "@/components/DonorHero";
import StatsBar from "@/components/StatsBar";
import AllocationChart from "@/components/AllocationChart";
import UtilizationTimeline from "@/components/UtilizationTimeline";
import ImpactSection from "@/components/ImpactSection";
import FuturePlans from "@/components/FuturePlans";
import { DonorNavbar, DonorFooter } from "@/components/DonorNavFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DonorNavbar />
      <main>
        <DonorHero />
        <StatsBar />
        <AllocationChart />
        <UtilizationTimeline />
        <ImpactSection />
        <FuturePlans />
      </main>
      <DonorFooter />
    </div>
  );
};

export default Index;
