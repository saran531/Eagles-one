import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import "./Contact.css";

const features = [
  "30+ Years Electrical Expertise",
  "End-to-End Solar Execution",
  "Dedicated After-Sales Service",
  "Trusted Solar Brands & Technology",
  "EMI & Loan Assistance",
  "Proven Track Record Across India",
];

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-container">
          <div className="contact-left">
            <img
              src="/assets/hero1.png"
              alt="Solar Panels"
              className="contact-bg"
            />
            <div className="contact-left-content">
              <div className="contact-kicker">WHY CHOOSE EAGLES ONE</div>
              <h2 className="contact-title">
                More Than Solar.
                <br />
                We Deliver Security.
              </h2>
              <div className="contact-features">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="feature-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle
                      className="feature-icon"
                      size={20}
                      fill="currentColor"
                      color="#111827"
                    />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-right">
            <h3 className="form-title">
              Get Your <span>Free</span> Solar Audit
            </h3>

            <form className="audit-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-input"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  className="form-input"
                  placeholder="Phone Number"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-input"
                  placeholder="Email Address"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-input"
                  placeholder="Your Location"
                />
              </div>
              <div className="form-group full">
                <select className="form-input" style={{ color: "#666" }}>
                  <option value="">Monthly EB Bill (Approx.)</option>
                  <option value="under_5k">Under ₹5,000</option>
                  <option value="5k_to_15k">₹5,000 - ₹15,000</option>
                  <option value="15k_to_50k">₹15,000 - ₹50,000</option>
                  <option value="above_50k">Above ₹50,000</option>
                </select>
              </div>
              <div className="form-group full">
                <textarea
                  className="form-input"
                  rows="3"
                  placeholder="Tell us about your requirement..."
                ></textarea>
              </div>
              <button type="submit" className="btn-submit">
                Submit Request <ArrowRight size={20} />
              </button>
              <div className="form-footer">
                <CheckCircle size={16} className="footer-check" />
                Our expert will contact you within 24 hours!
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
