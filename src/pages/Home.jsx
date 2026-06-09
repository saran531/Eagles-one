import Hero from "../components/Hero";
import Services from "../components/Services";
import Impact from "../components/Impact";
import CaseStudies from "../components/CaseStudies";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="page-home">
      <Hero />
      <Services />
      <Impact />
      <CaseStudies />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;
