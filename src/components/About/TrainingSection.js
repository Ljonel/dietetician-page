import React from "react";
import { motion } from "framer-motion";
import { useScroll } from "../useScroll";
import { imageAnimation, reveal, revealReverse, fromDown } from "../Animation";
import Title from "../Title";
import "../../pages/About.scss";

const TrainingSection = () => {
  const [element, controls] = useScroll();
  return (
    <>
      <section id="training-about" ref={element}>
        <div className="training-text">
          <div className="training-text-title">
            <Title word={"Jestem równiez..."} />
          </div>
          <div className="training-text-content">
            <motion.p
              animate={controls}
              variants={revealReverse}
              transition={{ delay: 0.2, type: "tween" }}
            >
              Absolwentką kursu na Trenera Personalnego i Instruktora siłowni.
              Od dziecka mocno związana ze sportem uwielbiam aktywnie spędzać
              czas. Uważam, że odpowiednia aktywność fizyczna to taka, która
              daje Ci radość i spełnienie.
            </motion.p>
            <motion.p
              animate={controls}
              variants={reveal}
              transition={{ delay: 0.2, type: "tween" }}
            >
              Od sześciu lat trenuję siłowo – siłownia to mój drugi dom, w
              którym czuję się najlepiej. Tam przełamuję swoje bariery i
              stopniowo spełniam założone cele. Wysiłek fizyczny nie tylko
              pozytywnie wpływa na nasz organizm, ale kształtuje nasz charakter.
            </motion.p>
            <motion.p
              animate={controls}
              variants={revealReverse}
              transition={{ delay: 0.2, type: "tween" }}
            >
              Co jest najważniejsze dla mnie w pracy Trenera? Potrzeby, cele i
              możliwości podopiecznego. Indywidualne podejście to dla mnie
              podstawa. <br /> <br />
              <b>Zapraszam, zróbmy razem trening!</b>
            </motion.p>
          </div>
        </div>
        <div className="training-img">
          <motion.div
            animate={controls}
            variants={imageAnimation}
            transition={{ delay: 0.4, type: "tween" }}
            className="training-square"
          ></motion.div>
          <motion.img
            animate={controls}
            variants={imageAnimation}
            transition={{ delay: 0.2, type: "tween" }}
            src="gym1.jpg"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default TrainingSection;
