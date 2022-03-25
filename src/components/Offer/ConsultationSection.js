import React, { useState } from "react";
import { motion } from "framer-motion";
import { useScroll } from "../useScroll";
import { imageAnimation, reveal, revealReverse, fromDown } from "../Animation";
import "../../pages/Offer.scss";
import Title from "../Title";
import { BsFillFileArrowDownFill, BsFillFileCheckFill } from "react-icons/bs";

const variants = {
  open: { opacity: 1, scale: 1.2, x: 1 },
  closed: { opacity: 0, scale: 1, x: 1 },
};

const ConsultationSection = () => {
  const [element, controls] = useScroll();
  const [isSuccess, setIsSucces] = useState(false);

  const fileClickHandler = (e) => {
    console.log(isSuccess);
    e.preventDefault();
    if (isSuccess) {
    } else setIsSucces(!isSuccess);
  };

  return (
    <>
      <section id="consultation" ref={element}>
        <Title word={"Oferta"} />
        <div className="consultation-wrapper">
          <div className="consultation-text">
            <div className="consultation-content">
              <motion.h1
                animate={controls}
                variants={reveal}
                transition={{ delay: 0.1, type: "tween" }}
              >
                Konsultacja żywieniowa
              </motion.h1>
              <ul>
                <motion.li
                  animate={controls}
                  variants={reveal}
                  transition={{ delay: 0.2, type: "tween" }}
                >
                  Ustalenie celów i zasad współpracy
                </motion.li>
                <motion.li
                  animate={controls}
                  variants={reveal}
                  transition={{ delay: 0.3, type: "tween" }}
                >
                  Ocena sposobu odżywiania
                </motion.li>
                <motion.li
                  animate={controls}
                  variants={reveal}
                  transition={{ delay: 0.4, type: "tween" }}
                >
                  Wykonanie pomiarów antropometrycznych
                </motion.li>
                <motion.li
                  animate={controls}
                  variants={reveal}
                  transition={{ delay: 0.5, type: "tween" }}
                >
                  Przeprowadzenie wywiadu zdrowotno – żywieniowego
                </motion.li>
              </ul>
            </div>
            <motion.h3
              animate={controls}
              variants={fromDown}
              transition={{ delay: 0.2, type: "tween" }}
              style={{ textAlign: "center" }}
            >
              Konsultacja Żywieniowa może być również przeprowadzona online{" "}
            </motion.h3>
            <div className="consultation-visit">
              <motion.p
                animate={controls}
                variants={reveal}
                transition={{ delay: 0.1, type: "tween" }}
              >
                <b>Jak prawidłowo przygotować się do pierwszej wizyty?</b>
              </motion.p>
              <motion.p
                animate={controls}
                variants={reveal}
                transition={{ delay: 0.1, type: "tween" }}
              >
                {" "}
                Zabierz ze sobą aktualne wyniki podstawowych badań krwi
                (morfologia, lipidogram, TSH, FT3, FT4, AlAT, AspAT, glukoza)
                oraz wypełniony dzienniczek żywieniowy uwzględniający wszystkie
                spożyte posiłki oraz wypite płyny z 3 dni poprzedzających
                wizytę.
              </motion.p>
            </div>
            {/* <motion.a
              href="#"
              onClick={fileClickHandler}
              animate={controls}
              variants={fromDown}
              transition={{ delay: 0.1, type: "tween" }}
            >
              <motion.div className="icon-wrapper">
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
              </motion.div>
              <p>Pobierz dziennieczek żywieniowy</p>
            </motion.a> */}

            <motion.p
              animate={controls}
              variants={fromDown}
              transition={{ delay: 0.05, type: "tween" }}
            >
              Pobierz dzienniczek żywieniowy
            </motion.p>

            <motion.a
              animate={controls}
              variants={fromDown}
              transition={{ delay: 0.1, type: "tween" }}
              href="/Dzienniczek-Żywieniowy-Joanna-Stopka-Dietetyk-Trener-Personalny.pdf"
              download
              className="diary-link"
            >
              <motion.button whileTap={{ scale: 1.3 }} className="diary-btn">
                Pobierz
              </motion.button>
            </motion.a>
          </div>
          <div className="consultation-img">
            <motion.div
              className="square"
              animate={controls}
              variants={imageAnimation}
              transition={{ delay: 0.2, type: "tween" }}
            ></motion.div>
            <motion.img
              animate={controls}
              variants={imageAnimation}
              transition={{ delay: 0.4, type: "tween" }}
              src="dietetyk.png"
              alt=""
            />
          </div>
        </div>
        <div className="program"></div>
      </section>
    </>
  );
};

export default ConsultationSection;
