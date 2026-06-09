import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XCircle, CheckCircle, ArrowRight } from "lucide-react";
import "./ProblemsSolutions.css";

const businessData = [
  {
    p: "Rising EB bills eating into margins",
    pSub: "“Every rupee lost to EB is a rupee lost from profit.”",
    s: "Slash costs by up to 90% with rooftop solar",
    sSub: "“Turn wasted overheads into lasting savings.”",
  },
  {
    p: "Losing competitive edge due to high production cost",
    pSub: "“Your competitor’s lower costs could be your lost customer.”",
    s: "Shield your costs & protect profitability",
    sSub: "“Win the price war with lower energy costs.”",
  },
  {
    p: "Tariff uncertainty & future hikes",
    pSub: "“EB bills only move in one direction — up.”",
    s: "Lock-in fixed solar costs for 25+ years",
    sSub: "“One decision today shields you for decades.”",
  },
  {
    p: "High upfront investment",
    pSub: "“Capital stuck in EB bills could fuel your growth.”",
    s: "Flexible EMI & loan plans",
    sSub: "“Go solar now, pay as you save.”",
  },
  {
    p: "Power outages disrupt operations",
    pSub: "“Every blackout is lost production, lost trust.”",
    s: "Hybrid solar + battery backup",
    sSub: "“Keep your business always-on, always-reliable.”",
  },
];

const homeData = [
  {
    p: "Hefty monthly EB bills draining income",
    pSub: "“Your hard-earned money shouldn’t disappear in EB payments.”",
    s: "Pay almost zero EB bill every month",
    sSub: "“More savings for your family’s future.”",
  },
  {
    p: "Frequent power cuts cause discomfort",
    pSub: "“Dark evenings should never disrupt your life.”",
    s: "Hybrid solar + storage for uninterrupted power",
    sSub: "“Enjoy peace of mind with 24x7 power.”",
  },
  {
    p: "Anxiety over rising tariffs",
    pSub: "“Every hike brings new stress to your monthly budget.”",
    s: "Future-proof stability with guaranteed savings",
    sSub: "“A fixed-cost future in an uncertain world.”",
  },
  {
    p: "Want eco-living but costs feel high",
    pSub: "“Green dreams shouldn’t feel like a luxury.”",
    s: "Affordable green lifestyle with fast ROI",
    sSub: "“Sustainability made practical and profitable.”",
  },
  {
    p: "Dependence on grid electricity",
    pSub: "“Being powerless is being dependent.”",
    s: "Energy independence for your family",
    sSub: "“Freedom from EB, freedom for your life.”",
  },
];

const ProblemsSolutions = () => {
  const [activeTab, setActiveTab] = useState("business");

  const currentData = activeTab === "business" ? businessData : homeData;

  return (
    <section id="problems" className="section ps-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Your Challenges are Real. <br />
          Our Solutions are Proven.
        </motion.h2>

        <div className="ps-tabs">
          <button
            className={`ps-tab ${activeTab === "business" ? "active" : ""}`}
            onClick={() => setActiveTab("business")}
          >
            For Businesses
          </button>
          <button
            className={`ps-tab ${activeTab === "home" ? "active" : ""}`}
            onClick={() => setActiveTab("home")}
          >
            For Homes
          </button>
        </div>

        <div className="ps-grid">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="ps-grid-inner"
            >
              {currentData.map((item, index) => (
                <motion.div
                  key={index}
                  className="ps-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="ps-problem">
                    <h4>
                      <XCircle size={20} /> Problem
                    </h4>
                    <p>{item.p}</p>
                    <span className="ps-punchline">{item.pSub}</span>
                  </div>

                  <div className="ps-divider">
                    <ArrowRight size={24} />
                  </div>

                  <div className="ps-solution">
                    <h4>
                      <CheckCircle size={20} /> Solution
                    </h4>
                    <p>{item.s}</p>
                    <span className="ps-punchline">{item.sSub}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSolutions;
