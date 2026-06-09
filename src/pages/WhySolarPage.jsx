import { motion } from 'framer-motion';
import { ArrowRight, Info, Zap, DollarSign, Calendar, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';
import WhySolar from '../components/WhySolar';
import './WhySolarPage.css';

const WhySolarPage = () => {
  return (
    <div className="page-whysolar-unique">
      {/* Hero */}
      <section className="whysolar-hero">
        <div className="whysolar-hero-bg"></div>
        <div className="container whysolar-hero-inner text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="badge">The Financial Shield</span>
            <h1 className="text-gradient">Take Control Of Your Utility Bills</h1>
            <p className="whysolar-hero-sub">
              Electricity rates in Tamil Nadu increase by 5–7% annually. Solar is no longer just a green option — it is financial defense.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Interactive Why Solar Cards Section */}
      <WhySolar />

      {/* Calculator/Explanation details */}
      <section className="whysolar-roi-details section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">The Math Behind Your Return on Investment</h2>
            <p className="section-subtitle">Why solar is one of the highest-yielding financial decisions you can make.</p>
          </div>

          <div className="roi-details-grid">
            <div className="roi-info-card glass-card">
              <div className="roi-icon-wrap"><Zap size={24} color="var(--accent-primary)" /></div>
              <h3>1. Immediate EB Offset</h3>
              <p>From the day your net meter is turned on, your grid consumption drops by up to 90%. That capital is instantly redirected from utility payments back to your bank account.</p>
            </div>
            <div className="roi-info-card glass-card">
              <div className="roi-icon-wrap"><DollarSign size={24} color="var(--accent-primary)" /></div>
              <h3>2. Payback in 36–48 Months</h3>
              <p>With immediate savings of thousands of rupees each month, the total cost of installation is completely recovered in 3 to 4 years. Everything generated after that is pure profit.</p>
            </div>
            <div className="roi-info-card glass-card">
              <div className="roi-icon-wrap"><Calendar size={24} color="var(--accent-primary)" /></div>
              <h3>3. 25+ Years of Free Power</h3>
              <p>Solar cells are rated to perform for over 25 years. You get a guaranteed cost shield against all future electricity board price hikes for decades to come.</p>
            </div>
            <div className="roi-info-card glass-card">
              <div className="roi-icon-wrap"><Landmark size={24} color="var(--accent-primary)" /></div>
              <h3>4. Accelerated Tax Savings</h3>
              <p>For commercial and industrial installations, business entities can claim up to 40% accelerated depreciation, resulting in significant corporate tax write-offs in year one.</p>
            </div>
          </div>

          <motion.div 
            className="roi-disclaimer-box"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Info size={20} color="var(--accent-primary)" />
            <span><strong>Did you know?</strong> Every month you wait to go solar is another utility bill paid that you'll never get back. In financial terms, waiting is equivalent to paying a premium.</span>
          </motion.div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="whysolar-cta-section section">
        <div className="container">
          <div className="whysolar-cta-box glass-card text-center">
            <h2>Shield Your Costs. Power Your Growth.</h2>
            <p>Every roof is unique. Get a personalized layout and generation projection report based on your site coordinate parameters.</p>
            <Link to="/contact" className="btn btn-primary mt-6">
              Get Your Free Assessment <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhySolarPage;
