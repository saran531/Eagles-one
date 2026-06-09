import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Zap,
  MapPin,
} from "lucide-react";
import "./CaseStudies.css";

const cases = [
  {
    image: "/assets/hero2.png",
    tag: "Industrial",
    tagColor: "#3B82F6",
    date: "May 12, 2024",
    title: "Factory in Madurai Saved ₹1.2 Lakh Every Month",
    desc: "A 50KW solar installation that cut OPEX by 60% and boosted net profitability within the first quarter.",
    capacity: "50 KW",
    savings: "₹1.2L/mo",
    location: "Madurai",
  },
  {
    image: "/assets/school.png",
    tag: "Education",
    tagColor: "#10B981",
    date: "Apr 28, 2024",
    title: "School in Sivakasi Cuts 80% EB Bill with Solar",
    desc: "30KW system helping redirect savings to education, not electricity bills — zero disruption.",
    capacity: "30 KW",
    savings: "₹60K/mo",
    location: "Sivakasi",
  },
  {
    image: "/assets/hero1.png",
    tag: "Residential",
    tagColor: "#FBBF24",
    date: "Apr 15, 2024",
    title: "Zero EB Bill in 3 Years – A Homeowner's Journey",
    desc: "A 5KW hybrid system gave this family complete energy independence and 24/7 backup power.",
    capacity: "5 KW",
    savings: "₹8K/mo",
    location: "Chennai",
  },
];

const CaseStudies = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + cases.length) % cases.length);
  const next = () => setCurrent((c) => (c + 1) % cases.length);

  return (
    <section id="case-studies" className="cs-home-section">
      <div className="container">
        {/* Header */}
        <div className="cs-home-header">
          <div>
            <span className="cs-home-eyebrow">Real Results</span>
            <h2 className="cs-home-title">
              Real Stories.
              <br />
              <span className="text-gradient">Real Impact.</span>
            </h2>
          </div>
          <div className="cs-home-actions">
            <a href="/case-studies" className="view-all-link">
              View All Stories <ArrowRight size={16} />
            </a>
            <div className="cs-nav-arrows">
              <button className="cs-arrow" onClick={prev}>
                <ChevronLeft size={20} />
              </button>
              <button className="cs-arrow" onClick={next}>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Featured Slide */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="cs-featured-card"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="cs-featured-img">
              <img src={cases[current].image} alt={cases[current].title} />
              <span
                className="cs-featured-tag"
                style={{ backgroundColor: cases[current].tagColor }}
              >
                {cases[current].tag}
              </span>
              <div className="cs-img-overlay"></div>
            </div>
            <div className="cs-featured-body">
              <div className="cs-featured-meta">
                <span>
                  <MapPin size={14} /> {cases[current].location}
                </span>
                <span>{cases[current].date}</span>
              </div>
              <h3 className="cs-featured-title">{cases[current].title}</h3>
              <p className="cs-featured-desc">{cases[current].desc}</p>

              <div className="cs-featured-metrics">
                <div className="cs-metric">
                  <Zap size={16} color="#FBBF24" />
                  <div>
                    <strong>{cases[current].capacity}</strong>
                    <small>Capacity</small>
                  </div>
                </div>
                <div className="cs-metric">
                  <TrendingUp size={16} color="#10B981" />
                  <div>
                    <strong>{cases[current].savings}</strong>
                    <small>Monthly Savings</small>
                  </div>
                </div>
              </div>

              <a href="/case-studies" className="cs-read-more">
                Read Full Story <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Thumbnail row */}
        <div className="cs-thumbnails">
          {cases.map((c, i) => (
            <button
              key={i}
              className={`cs-thumb ${i === current ? "active" : ""}`}
              onClick={() => setCurrent(i)}
            >
              <img src={c.image} alt={c.title} />
              <div className="cs-thumb-overlay">
                <span style={{ color: c.tagColor }}>{c.tag}</span>
                <p>{c.title}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Dots */}
        <div className="cs-dots">
          {cases.map((_, i) => (
            <button
              key={i}
              className={`cs-dot ${i === current ? "active" : ""}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
