import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import "./ContactPage.css";

const contactInfo = [
  {
    icon: <Phone size={24} />,
    label: "Call / WhatsApp",
    value: "+91 98765 43210",
    sub: "Mon–Sat, 9am–7pm IST",
    color: "#FBBF24",
  },
  {
    icon: <Mail size={24} />,
    label: "Email Us",
    value: "info@eaglesonesolar.com",
    sub: "We reply within 4 hours",
    color: "#3B82F6",
  },
  {
    icon: <MapPin size={24} />,
    label: "Head Office",
    value: "123, Green Energy Park",
    sub: "Chennai, TN - 600001",
    color: "#10B981",
  },
  {
    icon: <Clock size={24} />,
    label: "Working Hours",
    value: "Mon–Sat: 9am–7pm",
    sub: "Sunday: Appointments only",
    color: "#8B5CF6",
  },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    bill: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-contact-unique">
      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero-glow"></div>
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1>
              Start Your Solar Journey Today.
              <br />
              <span className="text-gradient">
                Shield Your Costs. Power Your Growth.
              </span>
            </h1>
            <p className="contact-hero-sub">
              Ready to eliminate your electricity bills? Our solar experts are
              standing by to give you a free, no-obligation energy assessment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                className="contact-info-card glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div
                  className="cic-icon"
                  style={{ color: info.color, background: `${info.color}18` }}
                >
                  {info.icon}
                </div>
                <div className="cic-text">
                  <label>{info.label}</label>
                  <strong>{info.value}</strong>
                  <small>{info.sub}</small>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Form + Side Panel */}
      <section className="contact-main section">
        <div className="container">
          <div className="contact-layout">
            {/* Form Side */}
            <motion.div
              className="contact-form-wrapper glass-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {!submitted ? (
                <>
                  <div className="form-header">
                    <h2>Get Your Free Solar Audit</h2>
                    <p>
                      Fill in your details and our expert will contact you
                      within <strong>24 hours</strong>.
                    </p>
                  </div>

                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div
                        className={`floating-label-group ${focusedField === "name" || formData.name ? "active" : ""}`}
                      >
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          required
                        />
                        <label htmlFor="name">Full Name</label>
                      </div>
                      <div
                        className={`floating-label-group ${focusedField === "phone" || formData.phone ? "active" : ""}`}
                      >
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("phone")}
                          onBlur={() => setFocusedField(null)}
                          required
                        />
                        <label htmlFor="phone">Phone Number</label>
                      </div>
                    </div>

                    <div className="form-row">
                      <div
                        className={`floating-label-group ${focusedField === "email" || formData.email ? "active" : ""}`}
                      >
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                        />
                        <label htmlFor="email">Email Address</label>
                      </div>
                      <div
                        className={`floating-label-group ${focusedField === "location" || formData.location ? "active" : ""}`}
                      >
                        <input
                          type="text"
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("location")}
                          onBlur={() => setFocusedField(null)}
                        />
                        <label htmlFor="location">Your Location / City</label>
                      </div>
                    </div>

                    <div className="form-select-group">
                      <label className="select-label">
                        Monthly Electricity Bill (Approx.)
                      </label>
                      <select
                        name="bill"
                        value={formData.bill}
                        onChange={handleChange}
                        className="styled-select"
                      >
                        <option value="">Select your bill range</option>
                        <option value="under_5k">Under ₹5,000</option>
                        <option value="5k_to_15k">₹5,000 – ₹15,000</option>
                        <option value="15k_to_50k">₹15,000 – ₹50,000</option>
                        <option value="50k_to_2l">₹50,000 – ₹2 Lakhs</option>
                        <option value="above_2l">Above ₹2 Lakhs</option>
                      </select>
                    </div>

                    <div
                      className={`floating-label-group textarea-group ${focusedField === "message" || formData.message ? "active" : ""}`}
                    >
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                      />
                      <label htmlFor="message">
                        Tell us about your requirement...
                      </label>
                    </div>

                    <button type="submit" className="submit-btn">
                      <Send size={18} /> Send My Free Audit Request
                    </button>

                    <div className="form-trust">
                      <CheckCircle size={16} color="#10B981" />
                      <span>
                        100% Free. No obligation. Expert response in 24 hours.
                      </span>
                    </div>
                  </form>
                </>
              ) : (
                <motion.div
                  className="success-state"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <div className="success-icon">
                    <CheckCircle size={60} color="#10B981" />
                  </div>
                  <h2>Thank You, {formData.name}!</h2>
                  <p>
                    Your free solar audit request has been received. Our expert
                    will reach you at <strong>{formData.phone}</strong> within
                    24 hours.
                  </p>
                  <button
                    className="btn btn-primary mt-4"
                    onClick={() => setSubmitted(false)}
                  >
                    Submit Another Request <ArrowRight size={16} />
                  </button>
                </motion.div>
              )}
            </motion.div>

            {/* Right Side Info */}
            <motion.div
              className="contact-right-panel"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="why-contact glass-card">
                <h3>Why Request an Audit?</h3>
                <ul className="why-list">
                  {[
                    "Discover your exact savings potential",
                    "Understand the right system size for you",
                    "Learn about subsidies & EMI options",
                    "No obligation, completely free",
                    "On-site or virtual assessment available",
                  ].map((item, i) => (
                    <li key={i}>
                      <CheckCircle size={18} color="#FBBF24" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="testimonial-contact glass-card">
                <div className="quote-mark">"</div>
                <p>
                  Eagles One's team was incredibly professional. They handled
                  everything from design to installation in just 5 days. Our
                  monthly bill dropped from ₹18,000 to ₹1,500!
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">RK</div>
                  <div>
                    <strong>Rajan Kumar</strong>
                    <small>Factory Owner, Coimbatore</small>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="contact-map-section section">
        <div className="container">
          <div
            className="map-container glass-card"
            style={{ padding: "8px", overflow: "hidden" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7214774351333!2d80.2465365!3d13.0534293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b2ab1ffbb3%3A0xe96cd711f5fae8!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: "16px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Eagles One Head Office Map"
            ></iframe>
          </div>

          <div className="contact-footer-punchline text-center" style={{ marginTop: "5rem" }}>
            <h2 style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
              fontWeight: 800,
              color: "var(--accent-primary)",
              textShadow: "0 0 20px rgba(251, 191, 36, 0.2)",
              fontStyle: "italic",
            }}>
              "Freedom from EB, freedom for your life. Begin today."
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
