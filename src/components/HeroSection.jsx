import { CustomButton } from "./CustomButton";
import "../styles/CustomButton.css";
export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-headline">
            BizBoom: Digital Marketing Services for Local Businesses
          </h1>
          <h2>
            Thrive Online. Attract More Customers. Grow Your Local Business.
          </h2>
          <p className="hero-subhead">
            Your one-stop shop for websites, marketing automation, and local
            online success.
          </p>
        </div>
        <CustomButton
          className="hero-cta"
          text="Get Started Today"
          onClick={() => {
            document.getElementById("contactForm").scrollIntoView({
              behavior: "smooth",
            });
          }}
        />
      </div>
    </section>
  );
}
