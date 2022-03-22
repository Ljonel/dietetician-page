import react from 'react'
import { Link } from "react-router-dom"
import { motion } from 'framer-motion'
import { textAnimation, reveal, fromDown } from "../Animation"
import { useScroll } from "../useScroll";
import "../../pages/Home.scss"
import { GiTreeBranch } from "react-icons/gi"
const IntroductionSection = () => {
    const [element, controls] = useScroll();
    return (
        <>
            <section id="introduction" ref={element}>
                <div className="introduction-img">
                    {/* <img src="welcome-img.jpg" alt="" /> */}
                </div>
                <div className="introduction-text">
                    <motion.div animate={controls} variants={fromDown} transition={{ delay: 0.2, type: "tween" }} ><GiTreeBranch className='introduction-icon' /></motion.div>
                    <motion.h1 animate={controls} variants={reveal} transition={{ delay: 0.2, type: "tween" }} >Poznajmy się</motion.h1>
                    <motion.h5 
                    animate={controls} variants={textAnimation} transition={{ delay: 0.4, type: "tween" }} >
                        Jestem Dyplomowanym Dietetykiem Sportowym i Klinicznym. 
                        Ukończyłam studia wyższe na Śląskiej Wyższej Szkole Medycznej w Katowicach.
                        Uwielbiam gotować, a w kuchni często eksperymentuję. 
                        
                    </motion.h5>
                    <Link to="/about">
                        <motion.button animate={controls} variants={fromDown} transition={{ delay: 0.1, type: "tween" }} className='introduction-btn'>Więcej o mnie</motion.button>
                    </Link>
                </div>
            </section></>
    );
}

export default IntroductionSection;