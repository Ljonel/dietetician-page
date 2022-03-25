import React from "react";
import Nav from "../components/Navbar/Nav";
import Footer from "../components/Footer/Footer";
import { motion } from "framer-motion";
import ConsultationSection from "../components/Offer/ConsultationSection";
import ProgramSection from "../components/Offer/ProgramSection";
import TrainingSection from "../components/Offer/TrainingSection";

const Offer = () => {
  return (
    <>
      <Nav />
      <ConsultationSection />
      <ProgramSection />
      <TrainingSection />
      <Footer />
    </>
  );
};

export default Offer;
