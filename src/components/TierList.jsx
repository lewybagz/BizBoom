import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function TiersList() {
  const tierVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <section className="tiers-section">
      <div className="big-circle"></div>
      <h2>Our Service Tiers</h2>

      <motion.div
        className="tier tier1"
        ref={ref1}
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        variants={tierVariants}
      >
        <h3>The Spark</h3>
        <p>
          Ignite your online presence with a basic website and essential
          marketing tools.
        </p>
        <ul className="rocket-list">
          <li>
            <span>Free Website Design</span>: Choose from modern curated
            templates, responsive and mobile-friendly.
          </li>
          <li>
            <span>GoHighLevel Essentials</span>: Capture leads via forms,
            connect with email marketing tools, and schedule basic email
            sequences.
          </li>
        </ul>
      </motion.div>

      <motion.div
        className="tier tier2"
        ref={ref2}
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
        variants={tierVariants}
      >
        <h3>The Fuse</h3>
        <p>
          Aim for the Sky with website maintenance and expanded GoHighLevel
          features.
        </p>
        <ul className="rocket-list">
          <li>
            Everything in <span>The Spark +</span>
          </li>
          <li>
            <span>Advanced GoHighLevel Automation</span>: Automate appointments,
            customer interactions with chatbots, and design multi-step email
            campaigns.
          </li>
          <li>
            <span>Website Maintenance</span>: Benefit from ongoing website
            updates and security checks.
          </li>
        </ul>
      </motion.div>

      <motion.div
        className="tier tier3"
        ref={ref3}
        initial="hidden"
        animate={inView3 ? "visible" : "hidden"}
        variants={tierVariants}
      >
        <h3>The Big Boom</h3>
        <p>
          Reach the peak of online success with a content creation, full
          marketing suite, and personalized consultancy.
        </p>
        <ul className="rocket-list">
          <li>
            Everything in <span>The Climb +</span>
          </li>
          <li>
            <span>Premium Website Design</span>: Get a custom website design
            tailored to your brand and needs.
          </li>
          <li>
            <span>Content Creation</span>: Receive website content or blog posts
            to boost your online presence
          </li>
          <li>
            <span>GoHighLevel Pro Features</span>: Unlock CRM functionality,
            advanced reporting, and custom development options.
          </li>
        </ul>
      </motion.div>
    </section>
  );
}
