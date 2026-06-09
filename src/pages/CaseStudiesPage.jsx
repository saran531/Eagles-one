import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, MapPin, Calendar, TrendingUp, Zap } from "lucide-react";
import "./CaseStudiesPage.css";

const allCases = [
  {
    id: 1,
    tag: "Industrial",
    tagColor: "#3B82F6",
    date: "May 12, 2024",
    title: "Factory in Madurai Saved ₹1.2 Lakh Every Month",
    punchline: "From bill stress to growth freedom in one project.",
    desc: "A 50KW solar installation that transformed operations, cut OPEX by 60%, and boosted net profitability within the first quarter of deployment.",
    location: "Madurai, Tamil Nadu",
    capacity: "50 KW",
    savings: "₹1.2L/month",
    roi: "3.2 Years",
    image: "/assets/hero2.png",
    fullStory:
      "The client, a textile manufacturing unit, was spending over ₹2 lakhs monthly on electricity. After our comprehensive solar audit and a 50KW rooftop system installation, their bills dropped to under ₹80,000 in the first month itself. By month 3, production costs fell 60%, making them one of the most competitive units in the region.",
    beforeBill: 200000,
    afterBill: 80000,
  },
  {
    id: 2,
    tag: "Education",
    tagColor: "#10B981",
    date: "Apr 28, 2024",
    title: "School in Sivakasi Cuts 80% EB Bill with Solar",
    punchline: "Savings redirected to classrooms, not EB bills.",
    desc: "30KW system helping redirect savings to education rather than electricity bills, with zero disruption during installation.",
    location: "Sivakasi, Tamil Nadu",
    capacity: "30 KW",
    savings: "₹60K/month",
    roi: "4 Years",
    image: "/assets/school.png",
    fullStory:
      "Sri Vidya Matriculation School was allocating 15% of its budget to electricity. With our 30KW solar system and smart energy management, they now generate 90% of their own power. The savings are being reinvested into digital classrooms and laboratory equipment.",
    beforeBill: 75000,
    afterBill: 15000,
  },
  {
    id: 3,
    tag: "Residential",
    tagColor: "#FBBF24",
    date: "Apr 15, 2024",
    title: "Zero EB Bill in 3 Years – A Homeowner's Journey",
    punchline:
      "A one-time decision gave this family freedom from bills forever.",
    desc: "How a 5KW system gave this family complete freedom from rising monthly electricity bills with a hybrid battery backup system.",
    location: "Chennai, Tamil Nadu",
    capacity: "5 KW",
    savings: "₹8K/month",
    roi: "3 Years",
    image: "/assets/hero1.png",
    fullStory:
      "The Kumar family was paying ₹8,000-₹12,000 monthly in EB bills. Our 5KW hybrid solar system with a 10kWh battery backup eliminated their grid dependency entirely. During power cuts, they now have 12+ hours of backup power — a complete transformation of their daily life.",
    beforeBill: 10000,
    afterBill: 0,
  },
  {
    id: 4,
    tag: "Commercial",
    tagColor: "#8B5CF6",
    date: "Mar 10, 2024",
    title: "Mall in Coimbatore Achieves 70% Energy Independence",
    punchline: "High-volume generation turning vacant roof space into profit.",
    desc: "A large-scale 200KW rooftop installation delivering massive commercial ROI and helping the mall meet green energy mandates.",
    location: "Coimbatore, Tamil Nadu",
    capacity: "200 KW",
    savings: "₹4.5L/month",
    roi: "2.5 Years",
    image: "/assets/hero2.png",
    fullStory:
      "Nexus Shopping Centre partnered with Eagles One for a 200KW rooftop solar plant. The project was completed in 45 days with zero business interruption. The mall now exports surplus energy back to the grid, earning additional credits and becoming a net-zero-energy facility.",
    beforeBill: 640000,
    afterBill: 190000,
  },
  {
    id: 5,
    tag: "Agricultural",
    tagColor: "#EF4444",
    date: "Feb 20, 2024",
    title: "Farmer Eliminates Pump Operating Costs Entirely",
    punchline: "Clean, diesel-free irrigation for maximum seasonal yield.",
    desc: "Off-grid solar water pumping system for 50-acre farm, replacing costly diesel generators and unreliable grid power.",
    location: "Dindigul, Tamil Nadu",
    capacity: "15 KW",
    savings: "₹25K/month",
    roi: "2 Years",
    image: "/assets/hero1.png",
    fullStory:
      "Rajan's 50-acre farm was dependent on diesel generators for irrigation, costing ₹25,000 monthly. Our 15KW off-grid solar pump system completely replaced this with clean, free energy from the sun. Crop yield improved by 20% due to reliable, 24/7 irrigation availability.",
    beforeBill: 25000,
    afterBill: 0,
  },
  {
    id: 6,
    tag: "Healthcare",
    tagColor: "#06B6D4",
    date: "Jan 5, 2024",
    title: "Hospital Achieves 24/7 Power Reliability with Solar",
    punchline: "24x7 power security for critical life support systems.",
    desc: "Critical hybrid solar system ensuring continuous power for life-saving equipment with intelligent load management.",
    location: "Trichy, Tamil Nadu",
    capacity: "100 KW",
    savings: "₹2L/month",
    roi: "3.5 Years",
    image: "/assets/school.png",
    fullStory:
      "Siva Hospitals needed absolute power reliability. Our 100KW hybrid solar system with redundant battery banks ensures ICU and OT operations never face a power interruption. The system's intelligent load management prioritizes critical medical equipment, providing peace of mind to doctors and patients alike.",
    beforeBill: 280000,
    afterBill: 80000,
  },
];

const CaseStudiesPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedCase, setSelectedCase] = useState(null);
  const filters = [
    "All",
    "Residential",
    "Commercial",
    "Industrial",
    "Education",
    "Agricultural",
    "Healthcare",
  ];

  const filtered =
    activeFilter === "All"
      ? allCases
      : allCases.filter((c) => c.tag === activeFilter);

  return (
    <div className="page-cs-unique">
      {/* Hero */}
      <section className="cs-hero">
        <div className="cs-hero-particles">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${(i * 37) % 100}%`,
                top: `${(i * 59) % 100}%`,
                animationDelay: `${(i * 0.37) % 5}s`,
                animationDuration: `${3 + ((i * 0.53) % 5)}s`,
              }}
            ></div>
          ))}
        </div>
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="cs-badge">Real Results</span>
            <h1 className="cs-hero-title">
              Stories That <span className="text-gradient">Power</span> Change
            </h1>
            <p className="cs-hero-sub">
              Hundreds of families, businesses, and institutions have
              transformed their energy future.
              <br />
              Here are just a few of their stories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="cs-filter-section">
        <div className="container">
          <div className="filter-bar">
            {filters.map((f) => (
              <button
                key={f}
                className={`filter-btn ${activeFilter === f ? "active" : ""}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="cs-grid-section section">
        <div className="container">
          <motion.div className="cs-masonry-grid" layout>
            <AnimatePresence>
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  className="cs-card"
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedCase(item)}
                >
                  <div className="cs-card-img">
                    <img src={item.image} alt={item.title} />
                    <div className="cs-card-overlay">
                      <span className="read-more-hint">
                        Click to Read Full Story
                      </span>
                    </div>
                    <span
                      className="cs-card-tag"
                      style={{ backgroundColor: item.tagColor }}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <div className="cs-card-body">
                    <div className="cs-card-meta">
                      <span>
                        <MapPin size={14} /> {item.location}
                      </span>
                      <span>
                        <Calendar size={14} /> {item.date}
                      </span>
                    </div>
                    <h3 className="cs-card-title">{item.title}</h3>
                    <p className="cs-card-punchline">{item.punchline}</p>
                    <p className="cs-card-desc">{item.desc}</p>

                    {item.beforeBill !== undefined && (
                      <div className="bill-comparison-widget">
                        <div className="comparison-title">
                          Monthly EB Bill Comparison
                        </div>
                        <div className="comparison-bar-row">
                          <span className="comparison-label">Before:</span>
                          <div className="comparison-bar-container">
                            <div
                              className="comparison-bar before"
                              style={{ width: "100%" }}
                            >
                              ₹{item.beforeBill.toLocaleString("en-IN")}
                            </div>
                          </div>
                        </div>
                        <div className="comparison-bar-row">
                          <span className="comparison-label">After:</span>
                          <div className="comparison-bar-container">
                            <div
                              className="comparison-bar after"
                              style={{
                                width: `${Math.max(12, (item.afterBill / item.beforeBill) * 100)}%`,
                              }}
                            >
                              ₹{item.afterBill.toLocaleString("en-IN")}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="cs-metrics">
                      <div className="metric">
                        <Zap size={16} color="#FBBF24" />
                        <div>
                          <span>{item.capacity}</span>
                          <small>Capacity</small>
                        </div>
                      </div>
                      <div className="metric">
                        <TrendingUp size={16} color="#10B981" />
                        <div>
                          <span>{item.savings}</span>
                          <small>Savings</small>
                        </div>
                      </div>
                    </div>

                    <button className="cs-card-cta">
                      Read Full Story <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            className="cs-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCase(null)}
          >
            <motion.div
              className="cs-modal"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedCase(null)}
              >
                <X size={24} />
              </button>
              <div className="modal-img">
                <img src={selectedCase.image} alt={selectedCase.title} />
                <span
                  className="cs-card-tag"
                  style={{ backgroundColor: selectedCase.tagColor }}
                >
                  {selectedCase.tag}
                </span>
              </div>
              <div className="modal-body">
                <h2>{selectedCase.title}</h2>
                <p className="modal-punchline">{selectedCase.punchline}</p>
                <div className="modal-metrics">
                  {[
                    {
                      label: "Location",
                      value: selectedCase.location,
                      Icon: MapPin,
                    },
                    {
                      label: "Capacity",
                      value: selectedCase.capacity,
                      Icon: Zap,
                    },
                    {
                      label: "Monthly Savings",
                      value: selectedCase.savings,
                      Icon: TrendingUp,
                    },
                    {
                      label: "ROI Period",
                      value: selectedCase.roi,
                      Icon: ArrowRight,
                    },
                  ].map((m, i) => (
                    <div key={i} className="modal-metric">
                      <m.Icon size={18} color="var(--accent-primary)" />
                      <div>
                        <small>{m.label}</small>
                        <strong>{m.value}</strong>
                      </div>
                    </div>
                  ))}
                </div>

                {selectedCase.beforeBill !== undefined && (
                  <div className="modal-chart-box">
                    <h3>Savings Impact</h3>
                    <div className="bill-comparison-widget">
                      <div className="comparison-bar-row">
                        <span className="comparison-label">Before Solar:</span>
                        <div className="comparison-bar-container">
                          <div
                            className="comparison-bar before"
                            style={{ width: "100%" }}
                          >
                            ₹{selectedCase.beforeBill.toLocaleString("en-IN")} /
                            month
                          </div>
                        </div>
                      </div>
                      <div className="comparison-bar-row">
                        <span className="comparison-label">After Solar:</span>
                        <div className="comparison-bar-container">
                          <div
                            className="comparison-bar after"
                            style={{
                              width: `${Math.max(12, (selectedCase.afterBill / selectedCase.beforeBill) * 100)}%`,
                            }}
                          >
                            ₹{selectedCase.afterBill.toLocaleString("en-IN")} /
                            month
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <p className="modal-story">{selectedCase.fullStory}</p>

                <div
                  style={{
                    marginTop: "2rem",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <button
                    className="btn btn-primary"
                    onClick={() => setSelectedCase(null)}
                  >
                    Close Case Study
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CaseStudiesPage;
