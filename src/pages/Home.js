import React from "react";
import Nav from "../components/Navbar/Nav";
import WelcomeSection from "../components/Home/WelcomeSection";
import IntroductionSection from "../components/Home/IntroductionSection";
import TrainingSection from "../components/Home/TrainingSection";
import CardsSection from "../components/Home/CardsSection";
import Footer from "../components/Footer/Footer";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

import "./Home.scss";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <>
      <Nav />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <WelcomeSection />
        <IntroductionSection />
        <TrainingSection />
        <section id="gauge">
          <div className="gauge-el">
            <CountUp end={34} redraw={true}>
              {({ countUpRef, start }) => (
                <InView onChange={start}>
                  <span ref={countUpRef} />
                </InView>
              )}
            </CountUp>
            <h3>Rozpisane jadłospisy</h3>
          </div>
          <div className="gauge-el">
            <CountUp end={140} redraw={true}>
              {({ countUpRef, start }) => (
                <InView onChange={start}>
                  <span ref={countUpRef} />
                </InView>
              )}
            </CountUp>
            <h3>Przeprowadzone treningi</h3>
          </div>
          <div className="gauge-el">
            <CountUp end={52} redraw={true}>
              {({ countUpRef, start }) => (
                <InView onChange={start}>
                  <span ref={countUpRef} />
                </InView>
              )}
            </CountUp>
            <h3>Klienci</h3>
          </div>
        </section>
        <CardsSection />
        <Footer />
      </motion.div>
    </>
  );
};

export default Home;
