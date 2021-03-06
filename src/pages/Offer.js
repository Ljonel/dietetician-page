import React from "react";
import Nav from "../components/Navbar/Nav";
import Footer from "../components/Footer/Footer";
import { motion } from "framer-motion";
import ConsultationSection from "../components/Offer/ConsultationSection";
import ProgramSection from "../components/Offer/ProgramSection";
import TrainingSection from "../components/Offer/TrainingSection";
import { AnimatePresence } from "framer-motion";
const Offer = () => {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Nav />
        <ConsultationSection />
        <ProgramSection />
        <TrainingSection />
        <Footer />
      </AnimatePresence>
    </>
  );
};

export default Offer;
