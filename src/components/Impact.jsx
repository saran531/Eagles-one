import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Building, Map, Smile, Users, Leaf, Sun } from "lucide-react";
import "./Impact.css";

const stats = [
  {
    icon: Building,
    value: 1000,
    suffix: "+",
    label: "Projects Completed",
    color: "#FBBF24",
  },
  {
    icon: Map,
    value: 150,
    suffix: "+",
    label: "Cities Covered",
    color: "#3B82F6",
  },
  {
    icon: Smile,
    value: 500,
    suffix: "+",
    label: "Happy Clients",
    color: "#10B981",
  },
  {
    icon: Users,
    value: 120,
    suffix: "+",
    label: "Expert Team Members",
    color: "#8B5CF6",
  },
  {
    icon: Leaf,
    value: 90,
    suffix: "%",
    label: "Avg Bill Reduction",
    color: "#EF4444",
  },
  {
    icon: Sun,
    value: 25,
    suffix: "yr",
    label: "System Lifespan Guaranteed",
    color: "#F59E0B",
  },
];

const CountUp = ({ target, suffix, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;

    const timer = setInterval(() => {
      start += Math.ceil(target / (duration / 16));
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

const Impact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="impact-section" ref={sectionRef}>
      <div className="impact-bg-grid"></div>
      <div className="container">
        <motion.div
          className="impact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="impact-kicker">Our Impact In Numbers</div>
          <h2 className="impact-title">
            Delivering Impact,
            <br />
            <span>Powering Futures</span>
          </h2>
          <p className="impact-subtitle">
            A decade of transforming energy landscapes across India, one rooftop
            at a time.
          </p>
        </motion.div>

        <div className="impact-stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="impact-stat-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div
                className="impact-icon-ring"
                style={{ "--color": stat.color }}
              >
                <stat.icon size={28} strokeWidth={1.5} color={stat.color} />
              </div>
              <div className="impact-stat-value" style={{ color: stat.color }}>
                <CountUp
                  target={stat.value}
                  suffix={stat.suffix}
                  isVisible={isVisible}
                />
              </div>
              <div className="impact-stat-label">{stat.label}</div>
              <div
                className="impact-card-glow"
                style={{ background: `${stat.color}20` }}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
