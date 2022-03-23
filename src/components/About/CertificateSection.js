import React from "react";
import { motion } from "framer-motion";
import { useScroll } from "../useScroll";
import { imageAnimation, reveal, revealReverse, fromDown } from "../Animation";
import Title from "../Title";
import { certificates } from "../certificates";
import { SRLWrapper } from "simple-react-lightbox";
import "../../pages/About.scss";

const CertificateSection = () => {
  const [element, controls] = useScroll();

  return (
    <section id="certificates" ref={element}>
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
