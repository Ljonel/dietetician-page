import React from "react";
import { motion } from "framer-motion";
import Title from "../Title";
import { certificates } from "../certificates";
import { SRLWrapper } from "simple-react-lightbox";
import "../../pages/About.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactComponent as Opinions } from "../../assets/opinions2.svg";
import Slider from "react-slick";
const CertificateSection = () => {
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
    <section id="certificates">
      {/* <Title word={"Opinie"} /> */}
      {/* <div className="slider-container">
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
              Najlepsza Pani trener! Siła rośnie, centymetry w obwodach spadają!
              Trening jest indywidualnie dopasowany pod moje potrzeby. Asia
              zwraca szczególną uwagę, aby z każdym treningiem był progres i
              nowy bodziec dla mięśni, a także kontroluje technikę.
              Współpracujemy już długo i jestem bardzo zadowolona. Polecam
              wszystkim z czystym sumieniem.
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
              Świetne miejsce! Pani trener Asia to profesjonalistka ze świetnym
              podejściem do klienta, super trening, dieta cud! Polecam!
            </p>
          </div>
        </Slider>
      </div> */}
      <Title word={"Certyfikaty"} />

      <SRLWrapper>
        <div className="cert-container">
          {certificates.map((cert, index) => {
            return (
              <motion.div key={index} className="cert">
                <img src={cert.url} alt={cert.title} />
              </motion.div>
            );
          })}
        </div>
      </SRLWrapper>
    </section>
  );
};

export default CertificateSection;
