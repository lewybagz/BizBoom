import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeatureSection";
import ContactSection from "./components/ContactForm";
import TiersList from "./components/TierList";
import ContactInfo from "./components/ContactInfo";
import "./styles/main.css";

export default function App() {
  return (
    <div className="app">
      <div className="logo">
        <img src="/BizBoom/assets/bizboomLogo.png" alt="BizBoom Logo" />
      </div>
      <div className="dont-scroll">
        <HeroSection />
      </div>
      <div className="features">
        <FeaturesSection />
      </div>
      <div className="tiers">
        <TiersList />
      </div>
      <div className="contact">
        <div className="contact-info-section">
          <ContactInfo />
        </div>
        <div className="form-section" name="contactForm" id="contactForm">
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
