import { motion } from 'framer-motion';
import { Zap, Shield, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProblemsSolutions from '../components/ProblemsSolutions';
import './SolutionsPage.css';

const SolutionsPage = () => {
  return (
    <div className="page-solutions-unique">
      {/* 3D Parallax Hero */}
      <section className="solutions-hero">
        <div className="solutions-grid-bg"></div>
        <div className="container">
          <motion.div 
            className="solutions-hero-content"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="badge">Tailored Savings</span>
            <h1 className="text-gradient">Your Challenges are Real.<br/>Our Solutions are Proven.</h1>
            <p className="hero-subtitle">
              Electricity bills represent one of the largest controllable expenses. Whether for a manufacturing plant or a family household, we shield your costs and power stability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problems & Solutions Main Interactive Component */}
      <ProblemsSolutions />

      {/* Grid of Key Guarantees */}
      <section className="solutions-guarantees-section section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Solar Solves the Inflation Crisis</h2>
            <p className="section-subtitle">A one-time decision locks in decades of predictable energy costs.</p>
          </div>

          <div className="guarantees-grid">
            {[
              {
                icon: <Zap size={30} />,
                title: "90% Bill Reduction",
                desc: "Solar generation offsets your power consumption during peak hours, driving your EB bill to near zero."
              },
              {
                icon: <Shield size={30} />,
                title: "25-Year Protection",
                desc: "Lock-in fixed solar generation costs. While grid tariffs rise yearly, your solar fuel is free forever."
              },
              {
                icon: <TrendingUp size={30} />,
                title: "3-4 Year ROI",
                desc: "The system pays for itself through immediate EB bill savings, translating into high long-term profit margins."
              }
            ].map((g, i) => (
              <motion.div 
                key={i}
                className="guarantee-card glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="guarantee-icon">{g.icon}</div>
                <h3>{g.title}</h3>
                <p>{g.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Banner / Brand Partners */}
      <section className="tech-stack-banner">
        <div className="container text-center">
          <h2>We Partner with Tier-1 Approved Global Brands</h2>
          <p className="brand-partners-desc">Only approved components go onto your roof to ensure 25+ years of continuous performance.</p>
          <div className="tech-logos-marquee">
            <div className="marquee-track">
              {['Growatt', 'Waaree', 'Tata Power', 'Vikram Solar', 'Adani Solar', 'Fronius', 'Sungrow', 'GoodWe', 'Growatt', 'Waaree', 'Tata Power', 'Vikram Solar'].map((tech, i) => (
                <span key={i} className="tech-item">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="solutions-cta-section section">
        <div className="container">
          <div className="solutions-cta-box glass-card text-center">
            <h2>Let's Do a Free Energy Audit for Your Property</h2>
            <p>Our engineers will analyze your current EB bills, roof space, and shading patterns to design a system size optimized for maximum return on investment.</p>
            <Link to="/contact" className="btn btn-primary mt-6">
              Book a Free Audit Now <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
