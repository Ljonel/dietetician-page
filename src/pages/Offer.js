import React from "react";
import Nav from "../components/Navbar/Nav";
import Footer from "../components/Footer/Footer";
import { motion } from "framer-motion";
import ConsultationSection from "../components/Offer/ConsultationSection";
import ProgramSection from "../components/Offer/ProgramSection";
import "./Offer.scss";

const Offer = () => {
  return (
    <>
      <Nav />
      <ConsultationSection />
      <ProgramSection />
    </>
  );
};

export default Offer;
