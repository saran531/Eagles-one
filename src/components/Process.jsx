import { motion } from "framer-motion";
import { ClipboardCheck, PenTool, Sun, ThumbsUp } from "lucide-react";
import "./Process.css";

const steps = [
  {
    icon: ClipboardCheck,
    title: "1. Site Audit & Analysis",
    desc: "Our engineers analyze your energy needs, roof space, and shading to design the optimal system.",
  },
  {
    icon: PenTool,
    title: "2. Custom Design & Permitting",
    desc: "We handle all 3D modeling, component selection, and government approvals (CEIG/TANGEDCO).",
  },
  {
    icon: Sun,
    title: "3. Precision Installation",
    desc: "Seamless execution by certified experts using Tier-1 panels and robust mounting structures.",
  },
  {
    icon: ThumbsUp,
    title: "4. Handover & Support",
    desc: "System activation, app-based monitoring setup, and our 25-year performance guarantee.",
  },
];

const Process = () => {
  return (
    <section className="process-section">
      <div className="container">
        <motion.div
          className="process-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="process-kicker">How It Works</div>
          <h2 className="process-title">
            Your Journey to <span>Zero EB Bills</span>
          </h2>
        </motion.div>

        <div className="process-grid">
          <div className="process-line">
            <motion.div
              className="process-line-fill"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
            ></motion.div>
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="process-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="process-icon-wrapper">
                <step.icon size={32} />
                <div className="step-number">{index + 1}</div>
              </div>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-desc">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
