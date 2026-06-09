import { motion } from 'framer-motion';
import { Target, Eye, Shield, Award, Zap, TrendingUp, Leaf, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './AboutPage.css';

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const stats = [
    { label: "Years of Electrical & Solar Trust", value: "30+" },
    { label: "Bill Savings Guaranteed", value: "Up to 90%" },
    { label: "Happy Solar Customers", value: "500+" },
    { label: "Fixed Cost Protection", value: "25+ Yrs" }
  ];

  return (
    <div className="page-about-unique">
      {/* Animated Hero Section */}
      <section className="about-hero">
        <div className="about-hero-bg">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
        <div className="container">
          <motion.div 
            className="about-hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-gradient">Eagles One – Where Legacy Meets Innovation</h1>
            <p className="about-hero-sub">
              Rooted in decades of electrical supply excellence, Eagles One expanded into solar with a mission:
            </p>
            <div className="mission-quote-box">
              <p className="mission-quote">
                "Deliver world-class solar solutions that safeguard costs, power stability, and create long-term growth for our customers."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section — sits below hero, no overlap */}
      <section className="about-stats-section">
        <div className="container">
          <motion.div 
            className="stats-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {stats.map((stat, idx) => (
              <motion.div key={idx} className="stat-card glass-card" variants={itemVariants}>
                <h2 className="stat-value text-gradient">{stat.value}</h2>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Split */}
      <section className="mission-vision-section section">
        <div className="container">
          <div className="mv-grid">
            <motion.div 
              className="mv-card glass-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mv-icon"><Target size={40} /></div>
              <h3>Our Core Purpose</h3>
              <p>To shield families and businesses from unpredictable, rising energy costs by delivering reliable, high-performance solar infrastructure designed for decades of trouble-free service.</p>
            </motion.div>
            <motion.div 
              className="mv-card glass-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mv-icon"><Eye size={40} /></div>
              <h3>Our Future Vision</h3>
              <p>To lead Tamil Nadu's energy transition, building a network of decentralized solar power producers who enjoy complete energy independence and financial stability.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values-section section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Core Values
          </motion.h2>
          <motion.div 
            className="values-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: <Shield />, title: "Integrity First", desc: "Decades of trusted electrical supply history built on transparency and honesty." },
              { icon: <Award />, title: "Quality Always", desc: "Using only top-tier approved solar tech and meticulous structural installations." },
              { icon: <TrendingUp />, title: "Customer Growth", desc: "Unlocking wasted EB overheads to fuel direct savings and business margins." },
              { icon: <Leaf />, title: "Sustainable Impact", desc: "Creating a cleaner environment with affordable, green energy choices." }
            ].map((val, i) => (
              <motion.div key={i} className="value-item" variants={itemVariants}>
                <div className="value-icon-wrapper">{val.icon}</div>
                <h4>{val.title}</h4>
                <p>{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section Footer Callout */}
      <section className="about-footer-callout section">
        <div className="container">
          <motion.div 
            className="about-punchline-card glass-card text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Zap className="punchline-icon" size={32} color="var(--accent-primary)" />
            <h2>"Every solar panel we install isn't just power—it's protection for your future."</h2>
            <p>Join hundreds of clients who have secured their energy bills with Eagles One.</p>
            <Link to="/contact" className="btn btn-primary mt-6">
              Start Your Solar Journey <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
