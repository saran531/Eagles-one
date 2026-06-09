import { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, BatteryCharging, Search, ArrowRight, Zap } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: Home,
    title: "Residential Solar",
    desc: "Eliminate your home electricity bill and achieve full ROI within 3 years. Premium panels with 25-year warranty.",
    image: "/assets/service_res.png",
    color: "#FBBF24",
    stats: "90% Bill Reduction",
    tag: "Most Popular"
  },
  {
    icon: Building2,
    title: "Commercial & Industrial",
    desc: "Slash your OPEX and boost business competitiveness with large-scale rooftop solar systems tailored for factories and offices.",
    image: "/assets/factory.png",
    color: "#3B82F6",
    stats: "₹1.2L+ Saved/Month",
    tag: "Best ROI"
  },
  {
    icon: BatteryCharging,
    title: "Hybrid & Battery Backup",
    desc: "Never face a power cut again. Intelligent hybrid systems store energy and deliver uninterrupted 24x7 power.",
    image: "/assets/school.png",
    color: "#10B981",
    stats: "24/7 Uptime",
    tag: "Recommended"
  },
  {
    icon: Search,
    title: "Solar Consultation & Audits",
    desc: "Our experts analyse your energy consumption pattern and design the perfect system to maximise your savings.",
    image: "/assets/hero1.png",
    color: "#8B5CF6",
    stats: "Free Site Visit",
    tag: "No Cost"
  }
];

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="services" className="services-section-new">
      {/* Animated background gradient */}
      <div className="services-bg-anim"></div>

      <div className="container">
        {/* Header */}
        <div className="services-header-new">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="services-kicker-new">
              <Zap size={14} /> Complete Solar Solutions
            </span>
            <h2 className="services-title-new">
              Smart Solar Solutions<br/>For <span className="text-gradient">Every Need</span>
            </h2>
          </motion.div>
          <motion.a
            href="#all-services"
            className="explore-link-new"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Explore All Services <ArrowRight size={18} />
          </motion.a>
        </div>

        {/* Cards */}
        <div className="services-grid-new">
          {services.map((srv, index) => (
            <motion.div
              key={index}
              className={`service-card-new ${hoveredCard === index ? 'hovered' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Tag */}
              <span className="service-tag-new" style={{ background: `${srv.color}22`, color: srv.color, borderColor: `${srv.color}44` }}>
                {srv.tag}
              </span>

              {/* Image */}
              <div className="service-img-wrapper-new">
                <img src={srv.image} alt={srv.title} className="service-img-new" />
                <div className="service-img-overlay" style={{ background: `linear-gradient(180deg, transparent 30%, ${srv.color}33 100%)` }}></div>

                {/* Icon badge */}
                <div className="service-icon-badge" style={{ background: srv.color }}>
                  <srv.icon size={22} color="#fff" />
                </div>
              </div>

              {/* Content */}
              <div className="service-card-body">
                <div className="service-stat-pill" style={{ color: srv.color }}>
                  <span className="stat-dot" style={{ background: srv.color }}></span>
                  {srv.stats}
                </div>
                <h3 className="service-card-title">{srv.title}</h3>
                <p className="service-card-desc">{srv.desc}</p>

                <a
                  href="#learn-more"
                  className="service-card-cta"
                  style={{ borderColor: srv.color, color: srv.color }}
                >
                  Learn More <ArrowRight size={16} />
                </a>
              </div>

              {/* Bottom accent */}
              <div className="service-card-accent" style={{ background: srv.color }}></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          className="services-cta-strip"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="cta-strip-text">
            <h3>Not sure which solution fits you?</h3>
            <p>Our experts will assess your needs and recommend the perfect solar system — completely free.</p>
          </div>
          <a href="/contact" className="btn btn-primary">
            Get Free Consultation <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
