import react from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { textAnimation, reveal, revealReverse, fromDown } from "../Animation";
import { useScroll } from "../useScroll";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import "../../pages/Home.scss";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-logo">
          <h1>Joanna Stopka</h1>
          <h5>Dietetyk</h5>
          <h5>trener personalny</h5>
        </div>
        <div className="footer-menu">
          <ul>
            <li>
              <Link to="/" className="footer-link">
                Strona główna
              </Link>
            </li>
            <li>
              <Link to="/about" className="footer-link">
                O mnie
              </Link>
            </li>
            <li>
              <Link to="/offer" className="footer-link">
                Oferta
              </Link>
            </li>
            <li>
              <Link to="/calc" className="footer-link">
                Kalkulator kalorii
              </Link>
            </li>
            <li>
              <Link to="/contact" className="footer-link">
                Kontakt
              </Link>
            </li>
          </ul>
          <div className="footer-icons">
            <a href="https://www.facebook.com/stopkadietetyk">
              <BsFacebook />
            </a>
            <a href="https://instagram.com/joanna_stopka">
              {" "}
              <BsInstagram />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
