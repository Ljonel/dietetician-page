import React, { useState } from "react";
import { motion } from "framer-motion";
import { useScroll } from "../useScroll";
import { imageAnimation, reveal, revealReverse, fromDown } from "../Animation";
import "../../pages/Offer.scss";
import Title from "../Title";
import { BsFillFileArrowDownFill, BsFillFileCheckFill } from "react-icons/bs";

const ConsultationSection = () => {
  const [element, controls] = useScroll();
  const [isSuccess, setIsSucces] = useState(false);

  const fileClickHandler = (e) => {
    console.log(isSuccess);
    e.preventDefault();
    if (isSuccess) {
    } else setIsSucces(!isSuccess);
  };

  const variants = {
    open: { opacity: 1, scale: 1.2, x: 1 },
    closed: { opacity: 0, scale: 1, x: 1 },
  };
  return (
    <>
      <section id="consultation">
        <Title word={"Oferta"} />
        <div className="consultation-wrapper">
          <div className="consultation-text">
            <div className="consultation-content">
              <h1>Konsultacja żywieniowa</h1>
              <ul>
                <li>Ustalenie celów i zasad współpracy</li>
                <li>Ocena sposobu odżywiania</li>
                <li>Wykonanie podstawowych pomiarów antropometrycznych</li>
                <li>Przeprowadzenie wywiadu zdrowotno – żywieniowego</li>
              </ul>
            </div>

            <h3 style={{ textAlign: "center" }}>
              Konsultacja Żywieniowa może być również przeprowadzona online{" "}
            </h3>
            <div className="consultation-visit">
              <p>
                <b>Jak prawidłowo przygotować się do pierwszej wizyty?</b>
              </p>
              <p>
                {" "}
                Zabierz ze sobą aktualne wyniki podstawowych badań krwi
                (morfologia, lipidogram, TSH, FT3, FT4, AlAT, AspAT, glukoza)
                oraz wypełniony dzienniczek żywieniowy uwzględniający wszystkie
                spożyte posiłki oraz wypite płyny z 3 dni poprzedzających
                wizytę.
              </p>
            </div>

            <a href="#" onClick={fileClickHandler}>
              <div className="icon-wrapper">
                <motion.div
                  className="downloadFile-icon"
                  animate={isSuccess ? "closed" : "open"}
                  variants={variants}
                >
                  <BsFillFileArrowDownFill />
                </motion.div>
                <motion.div
                  className="downloadFile-icon"
                  animate={isSuccess ? "open" : "closed"}
                  variants={variants}
                  style={{ color: "#ec9c76" }}
                  transition={isSuccess ? { delay: 1 } : { delay: 0 }}
                >
                  <BsFillFileCheckFill />
                </motion.div>
              </div>
              <p>Pobierz dziennieczek zywieniowy</p>
            </a>
          </div>
          <div className="consultation-img">
            <div className="square"></div>
            <img src="gym1.jpg" alt="" />
          </div>
        </div>
        <div className="program"></div>
      </section>
    </>
  );
};

export default ConsultationSection;
