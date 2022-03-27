import React, { useState, useEffect } from "react";
import Nav from "../components/Navbar/Nav";
import Footer from "../components/Footer/Footer";
import "./Calc.scss";
import { AnimatePresence, motion } from "framer-motion";
import CalcForm from "../components/Calculator/CalcForm";
import { useScroll } from "../components/useScroll";
import {
  imageAnimation,
  box,
  reveal,
  revealReverse,
  fromDown,
} from "../components/Animation";
const Calc = () => {
  let [ppm, setPPM] = useState(0);
  ppm = localStorage.getItem("ppm");
  return (
    <>
      <Nav />
      <CalcForm setPPM={setPPM} ppm={ppm} />
      {ppm === 0 || ppm === null ? null : (
        <section id="ppm-result">
          <div className="ppm-content">
            <motion.p>
              Podstawowa Przemiana Materii (PPM) to ilość kalorii, jaką
              potrzebuje Twoje ciało aby podtrzymać podstawowe funkcje życiowe
              tj. praca narządów czy utrzymanie odpowiedniej temperatury. Jest
              to dolna granica kaloryczności diety poniżej której nie należy
              schodzić.
            </motion.p>
            <div className="ppm-value">
              <h3>Twoja Podstawowa Przemiana Materii (PPM):</h3>
              <p> {ppm} kcal</p>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
};

export default Calc;
