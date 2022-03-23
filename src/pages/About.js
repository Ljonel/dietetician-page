import React from "react";
import Nav from "../components/Navbar/Nav";
import DescriptionSection from "../components/About/DescriptionSection";
import TrainingSection from "../components/About/TrainingSection";
import CertificateSection from "../components/About/CertificateSection";
import Footer from "../components/Footer/Footer";
import "./About.scss";
import { motion } from "framer-motion";
const About = () => {
  // const { pathname } = useLocation();

  return (
    <>
      <Nav />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <DescriptionSection />
        <TrainingSection />
        {/* <CertificateSection/> */}
        <div className="color-border"></div>
        <div className="color-border"></div>
        <div className="color-border"></div>
        <div className="color-border"></div>
        <CertificateSection />
        <Footer />
      </motion.div>
    </>
  );
};

export default About;
