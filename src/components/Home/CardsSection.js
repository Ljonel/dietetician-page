import react from "react";
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
import { HashLink as Link } from "react-router-hash-link";

import "../../pages/Home.scss";

const cards = [
  {
    title: "Konsultacja Żywieniowa",
    text: "1 godz.",
    price: "120",
    imgUrl: "gym1.jpg",
    location: "/oferta#consultation",
    animate: fromDown,
  },
  {
    title: "Program odżywiania",
    text: "ok. 35 przepisów",
    price: "250",
    imgUrl: "fruits.png",
    location: "/oferta#program",
    animate: fromUp,
  },
  {
    title: "Trening Personalny",
    text: "1 godz.",
    price: "90/130",
    imgUrl: "gym3.jpg",
    location: "/oferta#training",

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
                <motion.img src={card.imgUrl} alt="" />
              </motion.div>
              <motion.h3>{card.title}</motion.h3>
              <motion.span>{card.text}</motion.span>
            </div>
            <div className="card-price">
              <Link to={card.location} title={card.title}>
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
