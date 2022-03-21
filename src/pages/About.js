import React from 'react'
import Nav from '../components/Navbar/Nav'
import DescriptionSection from '../components/About/DescriptionSection'
import Footer from "../components/Footer/Footer"
import "./About.scss"
import { motion } from 'framer-motion'
const About = () => {
    return (
        <>
            <Nav />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                <DescriptionSection />
                <Footer />
            </motion.div>
        </>
    );
}

export default About;