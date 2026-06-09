import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  MessageCircle,
  Zap,
  DollarSign,
  Shield,
  Clock,
  HelpCircle,
} from "lucide-react";
import "./FAQ.css";

const faqs = [
  {
    icon: DollarSign,
    q: "How much can I save on my EB bill?",
    a: "Depending on your roof space and energy consumption, you can save up to 90% on your monthly EB bills. Most of our residential clients see an average saving of ₹5,000–₹15,000/month, while commercial clients save ₹50,000–₹5 Lakhs/month. ROI is typically achieved within 3–4 years.",
  },
  {
    icon: DollarSign,
    q: "Do you provide EMI or Loan options?",
    a: "Yes! We partner with leading NBFCs and nationalised banks to provide flexible EMI options starting as low as ₹2,500/month. Zero-cost EMI and government-subsidised loans are also available. Go solar today and pay with what you save!",
  },
  {
    icon: Shield,
    q: "What is the lifespan of the solar panels?",
    a: "We exclusively use Tier-1 solar panels from brands like Adani, Waaree, and Vikram Solar. These come with a 25-year linear performance warranty and a 10-year product warranty. The systems are tested to withstand cyclones, heavy rain, and extreme heat — built for Indian conditions.",
  },
  {
    icon: Zap,
    q: "Will the system work during power cuts?",
    a: "A standard Grid-Tied system shuts down during power cuts as a safety requirement. However, our Hybrid Solar Systems (with lithium-ion battery backup) provide seamless, uninterrupted power — even at night or during outages. Perfect for hospitals, businesses, and homes that can't afford downtime.",
  },
  {
    icon: Clock,
    q: "How long does installation take?",
    a: "A typical residential system (3–10 KW) is fully installed within 2–3 days. Commercial systems (25 KW and above) take 5–15 days depending on complexity. We handle everything — site survey, design, procurement, installation, testing, and net-metering connection.",
  },
  {
    icon: HelpCircle,
    q: "Do you handle government approvals and subsidies?",
    a: "Absolutely. We offer a fully managed end-to-end service. This includes all documentation, TANGEDCO net-metering approvals, DISCOM paperwork, and assistance with PM Surya Ghar Muft Bijli Yojana subsidies (up to ₹78,000 for residential customers). You sit back; we handle everything.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section-new">
      {/* BG accent */}
      <div className="faq-bg-accent"></div>

      <div className="container">
        <div className="faq-layout">
          {/* Left: Header */}
          <motion.div
            className="faq-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="faq-eyebrow">Got Questions?</span>
            <h2 className="faq-title-new">
              Frequently
              <br />
              Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="faq-desc-new">
              Everything you need to know about going solar with Eagles One.
              Can't find your answer? Chat with our experts directly.
            </p>

            <div className="faq-cta-group">
              <button className="btn btn-primary">
                <MessageCircle size={18} /> Chat With Us
              </button>
              <a href="/contact" className="faq-call-link">
                Or call: <strong>+91 98765 43210</strong>
              </a>
            </div>

            {/* Trust badge */}
            <div className="faq-trust-badge">
              <div className="trust-avatars">
                {["MK", "RP", "SK", "JV"].map((initials, i) => (
                  <div
                    key={i}
                    className="trust-avatar"
                    style={{ zIndex: 4 - i }}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <strong>500+ satisfied customers</strong>
                <small>Join them. Switch to solar today.</small>
              </div>
            </div>
          </motion.div>

          {/* Right: Accordion */}
          <div className="faq-right">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className={`faq-item-new ${activeIndex === index ? "active" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                <button
                  className="faq-question-new"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="faq-q-left">
                    <div className="faq-icon-circle">
                      <faq.icon size={16} />
                    </div>
                    <span>{faq.q}</span>
                  </div>
                  <motion.div
                    className="faq-chevron"
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      className="faq-answer-new"
                      initial={{
                        opacity: 0,
                        scaleY: 0.98,
                        transformOrigin: "top",
                      }}
                      animate={{
                        opacity: 1,
                        scaleY: 1,
                      }}
                      exit={{ opacity: 0, scaleY: 0.98 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="faq-answer-inner">{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
