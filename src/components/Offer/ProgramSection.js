import React from "react";
import { motion } from "framer-motion";
import { useScroll } from "../useScroll";
import { imageAnimation, reveal, revealReverse, fromDown } from "../Animation";
import "../../pages/Offer.scss";
import Title from "../Title";

const ProgramSection = () => {
  const [element, controls] = useScroll();

  return (
    <>
      <section id="program">x</section>
    </>
  );
};

export default ProgramSection;
