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
      <section id="program" ref={element}>
        <motion.div
          animate={controls}
          variants={imageAnimation}
          transition={{ delay: 0.1, type: "tween" }}
          className="program-img"
        ></motion.div>
        <div className="program-text">
          <motion.h1
            animate={controls}
            variants={reveal}
            transition={{ delay: 0.2, type: "tween" }}
          >
            {" "}
            Spersonalizowany program odżywiania
          </motion.h1>
          <motion.p
            animate={controls}
            variants={reveal}
            transition={{ delay: 0.1, type: "tween" }}
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "20px",
              margin: "0",
            }}
          >
            250zł
          </motion.p>

          <ul>
            <motion.li
              animate={controls}
              variants={reveal}
              transition={{ delay: 0.1, type: "tween" }}
            >
              Jadłospis na 7 dni
            </motion.li>
            <motion.li
              animate={controls}
              variants={reveal}
              transition={{ delay: 0.2, type: "tween" }}
            >
              Sposób przygotowania posiłków
            </motion.li>
            <motion.li
              animate={controls}
              variants={reveal}
              transition={{ delay: 0.3, type: "tween" }}
            >
              Indywidualne zalecenia żywieniowe
            </motion.li>
            <motion.li
              animate={controls}
              variants={reveal}
              transition={{ delay: 0.4, type: "tween" }}
            >
              Raport z pierwszej wizyty
            </motion.li>
            <motion.li
              animate={controls}
              variants={reveal}
              transition={{ delay: 0.5, type: "tween" }}
            >
              Lista zakupów
            </motion.li>
          </ul>
          <motion.p
            animate={controls}
            variants={reveal}
            transition={{ delay: 0.1, type: "tween" }}
          >
            Jadłospis jest przygotowany na podstawie zebranych informacji
            podczas konsultacji żywieniowej oraz uwzględnia stan zdrowia,
            preferencje smakowe oraz dotychczasowy sposób odżywiania.
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default ProgramSection;
