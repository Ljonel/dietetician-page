import React from "react";
import { motion } from "framer-motion";
import { useScroll } from "../useScroll";
import { imageAnimation, reveal, revealReverse } from "../Animation";
import Title from "../Title";
import "../../pages/About.scss";
import { ReactComponent as Opinions } from "../../assets/opinions2.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const TrainingSection = () => {
  const [element, controls] = useScroll();
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
  };

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
              Trenerem Personalnym i Instruktorem siłowni. Od dziecka mocno
              związana ze sportem, uwielbiam aktywnie spędzać czas. Uważam, że
              odpowiednia aktywność fizyczna to taka, która daje Ci radość i
              spełnienie.
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
            src="/img/static/gym1.jpg"
            alt=""
          />
        </div>
      </section>
      <section id="slider">
        <div className="slider-container">
          <Opinions className="svg-img" />
          <Slider {...settings}>
            <div className="slider-element">
              <h3>Adrianna</h3>
              <p>
                Plan treningowy dostosowany do indywidualnych potrzeb i super
                kontakt z trenerką. Polecam!{" "}
              </p>
            </div>
            <div className="slider-element">
              <h3>Mateusz</h3>
              <p>
                Kwintesencja optymalizacji zajęć treningu personalnego! Polecam
                Panią Joannę!
              </p>
            </div>
            <div className="slider-element">
              <h3>Olga</h3>
              <p>
                Najlepsza Pani trener! Siła rośnie, centymetry w obwodach
                spadają! Trening jest indywidualnie dopasowany pod moje
                potrzeby. Asia zwraca szczególną uwagę, aby z każdym treningiem
                był progres i nowy bodziec dla mięśni, a także kontroluje
                technikę. Współpracujemy już długo i jestem bardzo zadowolona.
                Polecam wszystkim z czystym sumieniem.
              </p>
            </div>
            <div className="slider-element">
              <h3>Julia</h3>
              <p>
                Polecam Asie! Super treningi, miła atmosfera! Dziewczyna zna się
                na rzeczy!{" "}
              </p>
            </div>
            <div className="slider-element">
              <h3>Patrycja</h3>
              <p>
                Polecam bardzo! Dziewczyna zna się na rzeczy, profesjonalne
                podejście!
              </p>
            </div>
            <div className="slider-element">
              <h3>Damian</h3>
              <p>
                Świetne miejsce! Pani trener Asia to profesjonalistka ze
                świetnym podejściem do klienta, super trening, dieta cud!
                Polecam!
              </p>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default TrainingSection;
