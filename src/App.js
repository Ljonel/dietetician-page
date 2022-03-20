import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Offer from "./pages/Offer";
import { AnimatePresence, motion } from 'framer-motion'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"

const App = () => {

  const location = useLocation();

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/offer' element={<Offer />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
