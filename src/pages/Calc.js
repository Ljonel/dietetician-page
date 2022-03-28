import React, { useState } from "react";
import Nav from "../components/Navbar/Nav";
import Footer from "../components/Footer/Footer";
import "./Calc.scss";
import { Link } from "react-router-dom";
import { FaCalculator } from "react-icons/fa";
import CalcForm from "../components/Calculator/CalcForm";

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
            <FaCalculator className="ppm-icon" />
            <p>
              Podstawowa Przemiana Materii (PPM) to ilość kalorii jaką
              potrzebuje Twój organizm aby podtrzymać podstawowe funkcje życiowe
              tj. praca narządów. Jest to dolna granica kaloryczności diety,
              poniżej której nie należy schodzić.
            </p>
            <div className="ppm-value">
              <h3>
                Twoja Podstawowa Przemiana Materii [wzór Harrisa-Benedicta]:
              </h3>
              <p> {ppm} kcal</p>
            </div>
            <p>
              Aby obliczyć Twoją Całkowitą Przemianę Materii (CPM) należy
              uwzględnić dzienną aktywność fizyczną. Ważne jest aby do Twojego
              PPM dodać aktywność zawodową, treningową i pozatreningową. Zróbmy
              to razem na{" "}
              <Link to="/oferta" style={{ color: "#f06f33" }}>
                wspólnej konsultacji
              </Link>
            </p>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
};

export default Calc;
