import React, { useState } from "react";
import Nav from "../components/Navbar/Nav";
import Footer from "../components/Footer/Footer";
import "./Calc.scss";
import { motion } from "framer-motion";
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
  const [ppm, setPPM] = useState(0);
  const [element, controls] = useScroll();
  return (
    <>
      <Nav />
      <CalcForm ppm={ppm} setPPM={setPPM} />
      {ppm === 0 ? null : (
        <section id="ppm-result">
          <div className="ppm-content">
            <p>
              Podstawowa Przemiana Materii (PPM) to ilość kalorii, jaką
              potrzebuje Twoje ciało aby podtrzymać podstawowe funkcje życiowe
              tj. praca narządów czy utrzymanie odpowiedniej temperatury. Jest
              to dolna granica kaloryczności diety poniżej której nie należy
              schodzić.
            </p>
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