import { motion } from "framer-motion";
import { Sun, Phone, Mail, MapPin, ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Facebook = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Linkedin = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Youtube = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
    <polygon points="10 15 15 12 10 9" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Problems & Solutions", path: "/solutions" },
    { name: "Services", path: "/services" },
    { name: "Why Solar", path: "/why-solar" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Contact", path: "/contact" },
  ];

  const serviceLinks = [
    "Residential Solar",
    "Commercial & Industrial",
    "Hybrid & Battery Backup",
    "Solar Consultation",
    "Solar Maintenance",
    "Net Metering Support",
  ];

  const socials = [
    { Icon: Facebook, label: "Facebook", href: "#fb" },
    { Icon: Instagram, label: "Instagram", href: "#ig" },
    { Icon: Linkedin, label: "LinkedIn", href: "#in" },
    { Icon: Youtube, label: "YouTube", href: "#yt" },
  ];

  return (
    <footer className="footer-new">
      {/* Top CTA Banner */}
      <div className="footer-cta-banner">
        <div className="container">
          <div className="footer-cta-inner">
            <div className="footer-cta-text">
              <Zap size={28} fill="#FBBF24" color="#FBBF24" />
              <div>
                <h3>Ready to Go Solar?</h3>
                <p>
                  Join 500+ families & businesses saving big with Eagles One.
                </p>
              </div>
            </div>
            <Link to="/contact" className="btn btn-primary footer-cta-btn">
              Get Free Audit Today <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="footer-body">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-brand-col">
              <Link to="/" className="footer-logo">
                <div className="footer-logo-icon">
                  <Sun size={22} fill="currentColor" />
                </div>
                <div className="footer-logo-text">
                  <span className="f-logo-main">EAGLES ONE</span>
                  <span className="f-logo-sub">SOLAR</span>
                </div>
              </Link>
              <p className="footer-brand-desc">
                Powering Stability. Shielding Costs. Securing Growth. <br />
                <strong>
                  Freedom from EB, freedom for your life. Begin today.
                </strong>
              </p>

              {/* Social Icons */}
              <div className="footer-socials">
                {socials.map(({ Icon, label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    className="social-icon-btn"
                    aria-label={label}
                    whileHover={{ scale: 1.15, y: -3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>

              {/* Cert Badge */}
              <div className="footer-cert-badge">
                <Zap size={16} color="#FBBF24" />
                <span>MNRE Approved Installer</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-links-col">
              <h4 className="footer-col-heading">Quick Links</h4>
              <ul className="footer-link-list">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="footer-link">
                      <ArrowRight size={14} className="footer-link-arrow" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-links-col">
              <h4 className="footer-col-heading">Our Services</h4>
              <ul className="footer-link-list">
                {serviceLinks.map((s) => (
                  <li key={s}>
                    <a href="#services" className="footer-link">
                      <ArrowRight size={14} className="footer-link-arrow" />
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-links-col">
              <h4 className="footer-col-heading">Contact Info</h4>
              <div className="footer-contact-list">
                <a href="tel:+919876543210" className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <Phone size={16} />
                  </div>
                  <div>
                    <small>Call Us</small>
                    <span>+91 98765 43210</span>
                  </div>
                </a>
                <a
                  href="mailto:info@eaglesonesolar.com"
                  className="footer-contact-item"
                >
                  <div className="footer-contact-icon">
                    <Mail size={16} />
                  </div>
                  <div>
                    <small>Email Us</small>
                    <span>info@eaglesonesolar.com</span>
                  </div>
                </a>
                <div className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <small>Visit Us</small>
                    <span>
                      123, Green Energy Park,
                      <br />
                      Chennai, TN - 600001
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="container">
          <div className="footer-bottom-inner">
            <span className="footer-copyright">
              © {currentYear} Eagles One Solar. All Rights Reserved.
            </span>
            <div className="footer-bottom-links">
              <a href="#privacy" className="footer-bottom-link">
                Privacy Policy
              </a>
              <span className="footer-divider">·</span>
              <a href="#terms" className="footer-bottom-link">
                Terms & Conditions
              </a>
              <span className="footer-divider">·</span>
              <a href="#sitemap" className="footer-bottom-link">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
