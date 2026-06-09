import { motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  Headphones,
  Settings,
  Landmark,
  CheckCircle,
} from "lucide-react";
import "./WhyEaglesOne.css";

const trustFactors = [
  { icon: Zap, title: "30+ Years Electrical Expertise" },
  { icon: Settings, title: "End-to-End Solar Execution" },
  { icon: Headphones, title: "Dedicated After-Sales Service" },
  { icon: ShieldCheck, title: "Trusted Solar Brands & Tech" },
  { icon: Landmark, title: "EMI & Loan Assistance" },
  {
    icon: CheckCircle,
    title: "Proven Track Record Across Homes, Schools, Hospitals & Industries",
  },
];

const WhyEaglesOne = () => {
  return (
    <section className="section why-eagles-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Why Eagles One?
        </motion.h2>

        <div className="why-eagles-grid">
          {trustFactors.map((factor, index) => (
            <motion.div
              key={index}
              className="trust-factor-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="trust-icon">
                <factor.icon size={28} />
              </div>
              <h3 className="trust-title">{factor.title}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="closing-punchline"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          “With Eagles One, you don’t just get solar. You get{" "}
          <span>security, savings, and peace of mind.</span>”
        </motion.div>
      </div>
    </section>
  );
};

export default WhyEaglesOne;
