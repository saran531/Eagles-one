import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Play, Shield, Zap, TrendingUp, Award, ChevronDown, X, Landmark, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

const images = [
  '/assets/hero1.png',
  '/assets/hero2.png'
];

const punchlines = [
  "Your hard-earned money shouldn't disappear in EB payments.",
  "Win the price war with lower energy costs.",
  "Freedom from EB, freedom for your life."
];

const highlights = [
  { icon: Award, title: "30+", desc: "Years of Trust", color: "#E0E7FF", iconColor: "#4F46E5" },
  { icon: Zap, title: "90%", desc: "Bill Savings", color: "#FEF3C7", iconColor: "#D97706" },
  { icon: Landmark, title: "EMI & Loan", desc: "Options", color: "#D1FAE5", iconColor: "#059669" },
  { icon: Shield, title: "Integrity-First", desc: "Service", color: "#F3E8FF", iconColor: "#7E22CE" }
];

const Hero = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const [currentPunchline, setCurrentPunchline] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const imgInterval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 5000);
    
    const punchlineInterval = setInterval(() => {
      setCurrentPunchline((prev) => (prev + 1) % punchlines.length);
    }, 4000);

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(imgInterval);
      clearInterval(punchlineInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section id="home" className="hero-section">
        <div className="hero-slider">
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`hero-slide ${index === currentImg ? 'active' : ''}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>
        <div className="hero-overlay"></div>

        {/* Animated particles */}
        <div className="hero-particles">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="hero-particle" style={{
              left: `${5 + (i * 8)}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + (i % 3) * 2}s`
            }}></div>
          ))}
        </div>
        
        <div className="container hero-content">
          <motion.div 
            className="hero-text-block"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="hero-eyebrow"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="eyebrow-dot"></span>
              Tamil Nadu's #1 Solar Company
            </motion.div>

            <h1 className="hero-title">
              Powering Stability.<br/>
              Shielding Costs.<br/>
              <span>Securing Growth.</span>
            </h1>
            <p className="hero-subtitle">
              Electricity costs are rising. Solar protects your future.
            </p>

            <div style={{ height: '34px', marginBottom: '2rem', color: '#FBBF24', fontSize: '1.1rem', fontStyle: 'italic' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPunchline}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  "{punchlines[currentPunchline]}"
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="hero-list">
              {[
                "Slash costs by up to 90%",
                "Lock-in savings for 25+ years",
                "Power your home or business 24x7"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="hero-list-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.15 }}
                >
                  <div className="hero-list-icon"><Check size={16} strokeWidth={3} /></div>
                  {item}
                </motion.div>
              ))}
            </div>

            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary hero-cta-btn">
                Get a Free Audit <TrendingUp size={20} />
              </Link>
              <Link to="/contact" className="btn-play" style={{ textDecoration: 'none' }}>
                <div className="play-icon-circle" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}><ArrowRight size={18} color="white" /></div>
                Contact Us
              </Link>
            </div>
          </motion.div>

          <motion.div 
            className="hero-card-block"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="savings-card floating">
              <div className="savings-header">
                <span className="savings-title">Monthly Savings</span>
                <span className="savings-live"><span className="live-dot"></span>LIVE</span>
              </div>
              <div className="savings-value">₹1.2 Lakh+</div>
              
              <div className="savings-graph">
                <svg className="graph-line" viewBox="0 0 100 30" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="graphGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10B981" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="#10B981" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  <path d="M0,25 Q10,25 20,20 T40,15 T60,20 T80,5 T100,2" fill="none" stroke="#10B981" strokeWidth="2"/>
                  <path d="M0,25 Q10,25 20,20 T40,15 T60,20 T80,5 T100,2 L100,30 L0,30 Z" fill="url(#graphGrad)"/>
                  {[{cx:20,cy:20},{cx:40,cy:15},{cx:60,cy:20},{cx:80,cy:5},{cx:100,cy:2}].map((p,i) => (
                    <circle key={i} cx={p.cx} cy={p.cy} r="2.5" fill="#10B981"/>
                  ))}
                </svg>
              </div>
              
              <div className="savings-footer">
                <span style={{color:'#10B981',fontWeight:700}}>↑ 23% ↑</span> Better than last month
              </div>
            </div>

            {/* Second floating card */}
            <div className="roi-card floating" style={{ animationDelay: '2s' }}>
              <div className="roi-icon"><Zap size={20} fill="#FBBF24" color="#FBBF24"/></div>
              <div>
                <div className="roi-value">3 Years</div>
                <div className="roi-label">Avg. ROI Period</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="highlights-wrapper">
          <div className="container">
            <motion.div 
              className="highlights-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {highlights.map((item, index) => (
                <div key={index} className="highlight-item">
                  <div className="hl-icon-bg" style={{ backgroundColor: item.color }}>
                    <item.icon size={22} color={item.iconColor} />
                  </div>
                  <div className="hl-text">
                    <span className="hl-title">{item.title}</span>
                    <span className="hl-desc">{item.desc}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0], opacity: scrolled ? 0 : 1 }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            className="video-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              className="video-modal"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="video-close" onClick={() => setShowVideo(false)}><X size={24} /></button>
              <div className="video-placeholder">
                <div className="video-play-big">
                  <Play size={48} fill="white" color="white" />
                </div>
                <p>Success Story: How a Madurai Factory Saved ₹1.2L/month</p>
                <small>Video player coming soon — embed your YouTube/Vimeo URL here</small>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;
