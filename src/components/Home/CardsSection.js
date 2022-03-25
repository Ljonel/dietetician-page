import react from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  textAnimation,
  imageAnimation,
  box,
  reveal,
  revealReverse,
  fromDown,
  fromUp,
} from "../Animation";
import { useScroll } from "../useScroll";

import "../../pages/Home.scss";

const cards = [
  {
    title: "Konsultacja Żywieniowa",
    text: "1 godz.",
    price: "120",
    url: "gym1.jpg",
    animate: fromDown,
  },
  {
    title: "Program odżywiania",
    text: "ok. 35 przepisów",
    price: "250",
    url: "fruits.png",
    animate: fromUp,
  },
  {
    title: "Trening Personalny",
    text: "1 godz.",
    price: "90/130",
    url: "gym3.jpg",
    animate: fromDown,
  },
];

const CardsSection = () => {
  const [element, controls] = useScroll();
  return (
    <>
      <section id="cards-offer" ref={element}>
        {cards.map((card, index) => (
          <motion.div
            animate={controls}
            variants={card.animate}
            key={index}
            whileHover={{ scale: 1.1 }}
            className="card"
          >
            <div className="card-title">
              <motion.div className="card-img" whileHover={{ scale: 1.2 }}>
                {" "}
                <motion.img src={card.url} alt="" />
              </motion.div>
              <motion.h3>{card.title}</motion.h3>
              <motion.span>{card.text}</motion.span>
            </div>
            <div className="card-price">
              <Link to="/" title={card.title}>
                <button className="card-btn">Wybierz</button>
              </Link>
            </div>
          </motion.div>
        ))}
      </section>
    </>
  );
};

export default CardsSection;
