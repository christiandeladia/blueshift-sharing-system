import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Specifications } from './components/Specifications';
import { FaqSection } from './components/FaqSection';
import { DesignStudio } from './components/DesignStudio';
import { BentoGrid } from './components/BentoGrid';
import { MonitoringSection } from './components/MonitoringSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "DM Sans, sans-serif" }}>
      <Navbar />
      <div className="pt-20">
        <HeroSection />
        <Specifications />
        <MonitoringSection />
        <BentoGrid />
        <FaqSection />
        <DesignStudio />
      </div>
    </div>
  );
}