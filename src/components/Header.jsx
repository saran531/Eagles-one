import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, ArrowRight, X, Menu, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Problems & Solutions', path: '/solutions' },
  { name: 'Services', path: '/services' },
  { name: 'Why Solar', path: '/why-solar' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const winScroll = window.scrollY || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setScrollProgress(height > 0 ? Math.min((winScroll / height) * 100, 100) : 0);
        setScrolled(winScroll > 24);
        ticking = false;
      });
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('nav-open', mobileOpen);
    return () => document.body.classList.remove('nav-open');
  }, [mobileOpen]);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        {/* Scroll progress bar */}
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>

        <div className="container header-container">
          {/* Logo */}
          <Link to="/" className="logo">
            <div className="logo-icon-wrap">
              <Sun className="logo-sun-icon" size={22} fill="currentColor" />
            </div>
            <div className="logo-text">
              <div className="logo-top-text">EAGLES ONE</div>
              <div className="logo-sub-text">SOLAR</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="nav-links">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div className="nav-active-dot" layoutId="activeNavDot" />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Right CTAs */}
          <div className="header-right">
            <a href="tel:+919876543210" className="header-phone">
              <Phone size={16} /> +91 98765 43210
            </a>
            <Link to="/contact" className="btn-header">
              Free Audit <ArrowRight size={15} />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              id="mobile-navigation"
              className="mobile-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 35 }}
            >
              <div className="mobile-drawer-header">
                <Link to="/" className="logo">
                  <div className="logo-icon-wrap">
                    <Sun size={20} fill="currentColor" />
                  </div>
                  <div className="logo-text">
                    <div className="logo-top-text">EAGLES ONE</div>
                    <div className="logo-sub-text">SOLAR</div>
                  </div>
                </Link>
                <button className="mobile-close-btn" onClick={() => setMobileOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <nav className="mobile-nav">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                <Link
                  to={item.path}
                  className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                      {item.name}
                      <ArrowRight size={16} />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mobile-drawer-footer">
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Get Free Solar Audit
                </Link>
                <a href="tel:+919876543210" className="mobile-call-btn">
                  <Phone size={18} /> +91 98765 43210
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
