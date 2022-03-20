import React from 'react'
import Nav from '../components/Navbar/Nav'
import WelcomeSection from '../components/Home/WelcomeSection'
import IntroductionSection from '../components/Home/IntroductionSection'
import TrainingSection from "../components/Home/TrainingSection"
import CardsSection from "../components/Home/CardsSection"
import Footer from "../components/Footer/Footer"
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import "./Home.scss"
import { motion } from 'framer-motion'
const About = () => {
    return (
        <>
            <Nav />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>

                <Footer />
            </motion.div>
        </>
    );
}

export default About;