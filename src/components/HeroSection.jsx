import "../styles/HeroSection.css";

const midgroundImagePath = "path/to/midground.jpg";
const backgroundImagePath = "path/to/background.jpg";

export default function HeroSection() {
  return (
    <SmoothScroll>
      <section className="hero-section">
        <div className="foreground">
          {/* Your Hero Section content goes here */}
          <h1 className="hero-headline">
            Thrive Online. Attract More Customers. Grow Your Local Business.
          </h1>
          <p className="hero-subhead">
            BizBoom by Bagz: Your one-stop shop for websites, marketing
            automation, and local online success.
          </p>
          <button className="hero-cta">Get Started Today</button>
        </div>
        <div className="midground">
          <img src={midgroundImagePath} alt="Midground Nebula" />
        </div>
        <div className="background">
          <img src={backgroundImagePath} alt="Background Nebula" />
        </div>
      </section>
    </SmoothScroll>
  );
}
