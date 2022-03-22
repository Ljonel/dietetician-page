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
        <svg className="welcome-svg"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#d4b895" fill-opacity="1" d="M0,160L40,170.7C80,181,160,203,240,181.3C320,160,400,96,480,69.3C560,43,640,53,720,64C800,75,880,85,960,106.7C1040,128,1120,160,1200,160C1280,160,1360,128,1400,112L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
</svg>
            <section id="welcome" ref={element}>
                <div className="welcome-text-wrapper">
                    <div className="welcome-text">
                        <motion.h3 variants={reveal}  animate={controls} transition={{ delay: 0.2, type: "spring" }} >Dietetyk | Trener personalny</motion.h3>
                        <motion.h1 variants={revealReverse} animate={controls} transition={{ delay: 0.2, type: "spring" }}>Joanna Stopka</motion.h1>
                        <motion.p variants={reveal} animate={controls} transition={{ delay: 0.2, type: "spring" }}>Moją misją jest pomóc Ci zadbać o Twoje zdrowie</motion.p>
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