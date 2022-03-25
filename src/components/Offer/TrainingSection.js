import React from "react";
import { motion } from "framer-motion";
import { useScroll } from "../useScroll";
import { imageAnimation, reveal, revealReverse, fromDown } from "../Animation";
import "../../pages/Offer.scss";
import Title from "../Title";

const TrainingSection = () => {
  const [element, controls] = useScroll();
  return (
    <>
      <section id={"training"} ref={element}>
        <div className="training-text">
          <h1>Trening personalny</h1>
          <ul>
            <motion.li
              animate={controls}
              variants={reveal}
              transition={{ delay: 0.1, type: "tween" }}
            >
              Wykonanie testów oceny zdrowia i sprawności fizycznej
            </motion.li>
            <motion.li
              animate={controls}
              variants={reveal}
              transition={{ delay: 0.2, type: "tween" }}
            >
              Korekcja wad postawy w płaszczyźnie strzałkowej
            </motion.li>
            <motion.li
              animate={controls}
              variants={reveal}
              transition={{ delay: 0.3, type: "tween" }}
            >
              Programowanie planów treningowych
            </motion.li>
            <motion.li
              animate={controls}
              variants={reveal}
              transition={{ delay: 0.4, type: "tween" }}
            >
              Dobór odpowiedniej suplementacji
            </motion.li>
          </ul>
          <motion.p
            animate={controls}
            variants={reveal}
            transition={{ delay: 0.1, type: "tween" }}
          ></motion.p>
        </div>
        <motion.div
          animate={controls}
          variants={imageAnimation}
          transition={{ delay: 0.1, type: "tween" }}
          className="training-offer-img"
        ></motion.div>
      </section>
    </>
  );
};

export default TrainingSection;
