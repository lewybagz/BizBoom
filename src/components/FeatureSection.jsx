// import css

export default function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="feature-column">
        {/* GoHighLevel */}
        <img src="/BizBoom/assets/rocket.png" alt="Rocket Icon" />
        <h3>Level Up Your Marketing</h3>
        <p>Google review automation, AI chatbots, and lead generation.</p>
      </div>

      <div className="feature-column">
        {/* Free Website */}
        <img src="/BizBoom/assets/3dweb.png" alt="Website Icon" />
        <h3>Get a Beautiful Website - Absolutely Free!</h3>
        <p>Mobile-friendly, and brand-aligned!</p>
      </div>

      <div className="feature-column">
        {/* Local Focus */}
        <img src="/BizBoom/assets/mappin.png" alt="Map Pin Icon" />
        <h3>Made for Local Businesses</h3>
        <p>We understand your local challenges and opportunities.</p>
      </div>
    </section>
  );
}
