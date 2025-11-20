import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { Specifications } from './components/Specifications';
import { NetMetering } from './components/NetMetering';
import { Monitoring } from './components/Monitoring';
import { FaqSection } from './components/FaqSection';
import { DesignStudio } from './components/DesignStudio';
import { BentoGrid } from './components/BentoGrid';
import { PricingCardsRow } from './components/PricingCardsRow';

export default function App() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "DM Sans, sans-serif" }}>
      <Header />
      <div className="pt-20">
        <HeroSection />
        <Specifications />
        {/* <NetMetering /> */}
        {/* <Monitoring /> */}
        <PricingCardsRow />
        <BentoGrid />
        <FaqSection />
        <DesignStudio />
      </div>
    </div>
  );
}