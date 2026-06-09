import { motion } from "framer-motion";
import { ShieldCheck, Target, TrendingUp, Leaf, Quote } from "lucide-react";
import "./About.css";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity First",
    desc: "Honesty in every interaction, every installation.",
    color: "#3B82F6",
  },
  {
    icon: Target,
    title: "Quality Always",
    desc: "Premium materials and flawless execution guaranteed.",
    color: "#FBBF24",
  },
  {
    icon: TrendingUp,
    title: "Customer Growth",
    desc: "Your savings fuel your ambition and success.",
    color: "#10B981",
  },
  {
    icon: Leaf,
    title: "Sustainable Impact",
    desc: "Clean energy for a healthier tomorrow.",
    color: "#8B5CF6",
  },
];

const About = () => {
  return (
    <section id="about" className="about-section-new section">
      {/* Floating orbs */}
      <div className="about-orb about-orb-1"></div>
      <div className="about-orb about-orb-2"></div>

      <div className="container">
        {/* Top headline */}
        <motion.div
          className="about-headline"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="about-eyebrow">Our Story</span>
          <h2 className="section-title">
            Eagles One – Where Legacy
            <br />
            Meets <span className="text-gradient">Innovation</span>
          </h2>
        </motion.div>

        {/* Mission quote card */}
        <motion.div
          className="about-mission-card"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="mission-quote-icon">
            <Quote size={32} />
          </div>
          <p className="mission-lead">
            Rooted in decades of electrical supply excellence, Eagles One
            expanded into solar with one mission:
          </p>
          <blockquote className="mission-quote">
            "Deliver world-class solar solutions that safeguard costs, power
            stability, and create long-term growth for every customer we serve."
          </blockquote>
          <div className="mission-author">
            <div className="mission-author-avatar">EO</div>
            <div>
              <strong>Eagles One Solar</strong>
              <small>Founded • Tamil Nadu, India</small>
            </div>
          </div>
        </motion.div>

        {/* Values grid */}
        <div className="about-values-grid">
          {values.map((val, index) => (
            <motion.div
              key={index}
              className="about-value-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <div
                className="av-icon"
                style={{
                  background: `${val.color}18`,
                  border: `1px solid ${val.color}33`,
                }}
              >
                <val.icon size={26} color={val.color} />
              </div>
              <h3 className="av-title">{val.title}</h3>
              <p className="av-desc">{val.desc}</p>
              <div
                className="av-accent"
                style={{ background: val.color }}
              ></div>
            </motion.div>
          ))}
        </div>

        {/* Closing punchline */}
        <motion.div
          className="about-punchline-new"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Every solar panel we install isn't just power — it's{" "}
          <span className="text-gradient">protection for your future.</span>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
