// Import component files
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeatureSection";
import ContactSection from "./components/ContactForm";
import TiersList from "./components/TierList";
import "./styles/main.css";

export default function App() {
  return (
    <div className="app">
      <HeroSection />
      <FeaturesSection />
      <TiersList />
      <ContactSection />
    </div>
  );
}
