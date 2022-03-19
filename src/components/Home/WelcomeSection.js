import react from 'react'
import { Link } from "react-router-dom"
import { motion } from 'framer-motion'
import { imageAnimation, box, reveal, revealReverse, fromDown } from "../Animation"
import { useScroll } from "../useScroll";
import { IoIosArrowDown } from 'react-icons/io'
import "../../pages/Home.scss"

const WelcomeSection = () => {
    const [element, controls] = useScroll();
    return (
        <>
            <section id="welcome" ref={element}>
                <div className="welcome-text-wrapper">
                    <div className="welcome-text">
                        <motion.h3 variants={reveal} animate={controls} transition={{ delay: 0.2, type: "spring" }} >Dietetyk | Trener personalny</motion.h3>
                        <motion.h1 variants={revealReverse} animate={controls} transition={{ delay: 0.2, type: "spring" }}>Joanna Stopka</motion.h1>
                        <motion.p variants={reveal} animate={controls} transition={{ delay: 0.2, type: "spring" }}>Prosta i skuteczna metoda na wymarzoną sylwetkę</motion.p>
                        <motion.a variants={fromDown} animate={controls} transition={{ delay: 0.2, type: "spring" }} href="#introduction" className='arrow-down'><IoIosArrowDown /></motion.a>
                    </div>
                </div>
                <div className="welcome-img-wrapper">
                    <div className="welcome-img">
                    </div>
                    <motion.div className="welcome-img-half" variants={box} animate={controls} transition={{ delay: 0.2, type: "tween" }}>
                    </motion.div>
                    <motion.img src="welcome-img.jpg" alt="" variants={imageAnimation} animate={controls} transition={{ delay: 0.2, type: "tween" }} />

                </div>
            </section>
        </>);
}

export default WelcomeSection;