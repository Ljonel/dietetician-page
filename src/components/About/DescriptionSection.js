import React from "react";
import { motion } from "framer-motion";
import { useScroll } from "../useScroll";
import { imageAnimation, reveal, revealReverse, fromDown } from "../Animation";
import Title from "../Title";
import "../../pages/About.scss";
const DescriptionSection = () => {
  const [element, controls] = useScroll();
  return (
    <>
      <section id="about-desc" ref={element}>
        <div className="desc-img">
          <motion.div
            animate={controls}
            variants={imageAnimation}
            transition={{ delay: 0.4, type: "tween" }}
            className="square"
          ></motion.div>
          <motion.img
            animate={controls}
            variants={imageAnimation}
            transition={{ delay: 0.2, type: "tween" }}
            src="/img/static/13.jpg"
            alt=""
          />
        </div>
        <div className="desc-text">
          <div className="desc-text-title">
            {/* <h1>Hej! Jestem Asia</h1> */}
            <Title word={"Hej! Jestem Asia"} />
          </div>
          <div className="desc-text-content">
            <motion.p
              animate={controls}
              variants={revealReverse}
              transition={{ delay: 0.2, type: "tween" }}
            >
              Jestem absolwentką Wyższej Szkoły Medycznej w Katowicach. Jestem
              dyplomowanym Dietetykiem Klinicznym i Sportowym. Uwielbiam
              gotować, a eksperymentowanie w kuchni daje mi dużą satysfakcję i
              radość. Uważam, że w codziennej diecie każdy z nas potrzebuję
              balansu, bez popadania w skrajności.
            </motion.p>
            <motion.p
              animate={controls}
              variants={reveal}
              transition={{ delay: 0.2, type: "tween" }}
            >
              Dieta to styl życia, który w ogromnym stopniu ma wpływ nie tylko
              na wygląd naszej sylwetki, ale również na to jak się czujemy. W
              mojej pracy stawiam na edukację i wykształcanie zdrowych nawyków
              żywieniowych.
            </motion.p>
            <motion.p
              animate={controls}
              variants={revealReverse}
              transition={{ delay: 0.2, type: "tween" }}
            >
              Produkty dobieram według Waszych preferencji i Waszego trybu
              życia. Swoim podopiecznym poświęcam zawsze 100% uwagi i
              zaangażowania w drodze do wymarzonej sylwetki. Dołącz do mojego
              Teamu, a ja zrobię wszystko, aby Ci pomóc!
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
};

export default DescriptionSection;
