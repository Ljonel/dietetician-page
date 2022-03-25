import "./App.css";
import React, { useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Offer from "./pages/Offer";
import { AnimatePresence, motion } from "framer-motion";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
const App = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location]);
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/o-mnie" element={<About />} />
          <Route path="/oferta" element={<Offer />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
