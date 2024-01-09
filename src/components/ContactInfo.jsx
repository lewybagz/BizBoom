const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h2>Contact Us</h2>
      <p>
        At <span>BizBoom</span>, we believe in making connections that count.
        Whether you&rsquo;re taking the first steps in your business journey or
        you&rsquo;re looking to skyrocket your existing endeavors, our team is
        excited to hear from you. <br />
        <br />
        ✉️ Reach out to us! Share your dreams and challenges, and let&rsquo;s
        discuss how we can turn your aspirations into achievements. We&rsquo;re
        not just about strategies; we&rsquo;re about creating lasting
        partnerships. <br />
        <br />
        Together, let&rsquo;s launch your success story. 🚀
        <br />
        <br />
        <span>Contact us now</span> - let the magic begin!
      </p>
      <div className="info-item">
        <div className="icon-wrapper">
          <i className="fa-regular fa-envelope"></i>
        </div>
        <a href="mailto:themarketerstouch@gmail.com">
          themarketerstouch@gmail.com
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
