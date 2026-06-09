import { motion } from 'framer-motion';
import { TrendingUp, Clock, Leaf, DollarSign, ShieldCheck } from 'lucide-react';
import './WhySolar.css';

const reasons = [
  {
    icon: TrendingUp,
    color: "#EF4444",
    title: "EB costs rising 5–7% yearly",
    punchline: "Bills only move in one direction — up.",
    stat: "+7%/yr"
  },
  {
    icon: Clock,
    color: "#FBBF24",
    title: "ROI in just 3–4 years",
    punchline: "Every month you wait is another bill wasted.",
    stat: "~3 Years"
  },
  {
    icon: DollarSign,
    color: "#10B981",
    title: "Savings for 25+ years",
    punchline: "A one-time decision for lifetime stability.",
    stat: "25+ Years"
  },
  {
    icon: Leaf,
    color: "#3B82F6",
    title: "Green branding & customer trust",
    punchline: "Sustainability isn't just good — it's profitable.",
    stat: "Net Zero"
  },
  {
    icon: ShieldCheck,
    color: "#8B5CF6",
    title: "Shield your costs & secure growth",
    punchline: "Solar is no longer optional. It's survival.",
    stat: "90% Off"
  }
];

const WhySolar = () => {
  return (
    <section id="why-solar" className="why-solar-section-new section">
      <div className="container">
        <motion.div
          className="text-center mb-why"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="why-eyebrow">The Urgency</span>
          <h2 className="section-title">Why Solar. <span className="text-gradient">Why Now.</span></h2>
          <p className="section-subtitle">Every day without solar is money left on the table. Here's the data you need to act.</p>
        </motion.div>

        <div className="why-cards-grid">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="why-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="why-card-top">
                <div className="why-icon-wrap" style={{ background: `${reason.color}18`, border: `1px solid ${reason.color}33` }}>
                  <reason.icon size={24} color={reason.color} />
                </div>
                <div className="why-stat" style={{ color: reason.color }}>{reason.stat}</div>
              </div>
              <h3 className="why-card-title">{reason.title}</h3>
              <p className="why-card-punchline">{reason.punchline}</p>
              <div className="why-card-bar">
                <motion.div
                  className="why-card-bar-fill"
                  style={{ background: reason.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${60 + index * 8}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.8, ease: "easeOut" }}
                />
              </div>
              <span className="why-card-index">0{index + 1}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySolar;
