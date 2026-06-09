import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Building2, BatteryCharging, ClipboardCheck, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ServicesPage.css';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 0,
      title: "Residential Solar",
      icon: <Home size={32} />,
      desc: "Cut your electricity bills to near zero and achieve complete return on investment in just 3 years. Transform your home into a self-sustaining power generator.",
      punchline: "“Your roof is your power plant. Make it earn for you.”",
      features: ["Up to 90% savings on monthly EB bills", "Tier-1 solar panels with 25-year warranty", "Net metering support to sell excess power back to grid", "Affordable green lifestyle with fast ROI options"]
    },
    {
      id: 1,
      title: "Commercial & Industrial Solar",
      icon: <Building2 size={32} />,
      desc: "Significantly reduce your OPEX, secure long-term tariff stability, and boost your business competitiveness. Protect your profit margins from rising utility costs.",
      punchline: "“Energy costs shouldn’t decide your business destiny.”",
      features: ["Slash peak industrial operational costs", "Accelerated depreciation tax benefits", "Lock-in fixed energy rates for 25+ years", "Zero-disruption seamless execution"]
    },
    {
      id: 2,
      title: "Hybrid & Battery Backup",
      icon: <BatteryCharging size={32} />,
      desc: "Ensure 100% uninterrupted power supply for your critical operations. Combine solar generation with high-capacity smart storage to defeat power outages.",
      punchline: "“Downtime costs more than power. Don’t risk it.”",
      features: ["24x7 continuous power with automatic transfer", "Smart energy storage management", "Load prioritization for critical appliances", "Protection against voltage fluctuations"]
    },
    {
      id: 3,
      title: "Solar Consultation & Audits",
      icon: <ClipboardCheck size={32} />,
      desc: "Get an accurate, data-driven analysis of your solar viability. We custom size your system based on bill analysis, shadow paths, and budget for maximum ROI.",
      punchline: "“One right decision today saves lakhs tomorrow.”",
      features: ["Detailed shade analysis & structural audit", "Accurate 25-year generation projections", "Comprehensive financial feasibility report", "Custom engineering design optimization"]
    }
  ];

  return (
    <div className="page-services-unique">
      {/* Dynamic Hero Section */}
      <section className="services-hero">
        <div className="services-bg-mesh"></div>
        <div className="container">
          <motion.div 
            className="services-hero-content text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="badge">Our Solar Solutions</span>
            <h1 className="section-title mt-4">Powering Stability.<br/>Shielding Costs.</h1>
            <p className="hero-subtitle">We deliver world-class solar engineering designed to secure your financial and energy future. Discover our key capabilities below.</p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Service Showcase */}
      <section className="services-showcase section">
        <div className="container">
          <div className="services-interactive-wrapper">
            {/* Left side: Navigation */}
            <div className="services-nav">
              {services.map((svc, index) => (
                <button 
                  key={svc.id}
                  className={`service-nav-btn ${activeService === index ? 'active' : ''}`}
                  onClick={() => setActiveService(index)}
                >
                  <span className="svc-nav-icon">{svc.icon}</span>
                  <span className="svc-nav-title">{svc.title}</span>
                  <ChevronRight className="svc-nav-arrow" size={20} />
                </button>
              ))}
            </div>

            {/* Right side: Detailed Content */}
            <div className="services-content-display glass-card">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="service-detail"
                >
                  <div className="service-detail-header">
                    <div className="service-detail-icon">
                      {services[activeService].icon}
                    </div>
                    <h2>{services[activeService].title}</h2>
                  </div>
                  
                  <p className="service-detail-desc">{services[activeService].desc}</p>
                  
                  <div className="service-punchline-box">
                    <p>{services[activeService].punchline}</p>
                  </div>

                  <div className="service-features">
                    <h3>Key Offerings:</h3>
                    <ul>
                      {services[activeService].features.map((feat, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 + 0.3 }}
                        >
                          <span className="bullet"></span>
                          {feat}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <Link to="/contact" className="btn btn-primary mt-6">
                    Book a Free Solar Audit <ArrowRight size={18}/>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Animated Grid */}
      <section className="process-section section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">How We Deliver Excellence</h2>
            <p className="section-subtitle">A proven, seamless execution methodology that guarantees results, on time and with zero hassle.</p>
          </div>

          <div className="process-steps">
            {['Audit & Consult', 'Design & Size', 'Execute & Install', 'Service & Support'].map((step, idx) => (
              <motion.div 
                key={idx} 
                className="process-step"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
              >
                <div className="step-number">0{idx + 1}</div>
                <h3>{step}</h3>
                <div className="step-line"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
