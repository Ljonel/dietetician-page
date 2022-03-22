import React from 'react'
import { motion } from 'framer-motion'
import { useScroll } from "../useScroll"
import { imageAnimation, reveal, revealReverse, fromDown } from "../Animation"
import Title from "./Title"

const TrainingSection = () => {

    const [element, controls] = useScroll();
    return (<>
        <section id="about-desc" ref={element}>
            <div  className="desc-img" >
                <motion.div animate={controls} variants={imageAnimation} transition={{ delay: 0.4, type: "tween" }} className="square"></motion.div>
                <motion.img animate={controls} variants={imageAnimation} transition={{ delay: 0.2, type: "tween" }} src="welcome-img.jpg" alt="" />
            </div>
            <div className="desc-text">
                <div className="desc-text-title">
                    {/* <h1>Hej! Jestem Asia</h1> */}
                    <Title word={"Trener Personalny"}/>
                </div>
                <div className="desc-text-content">
                    <motion.p animate={controls} variants={revealReverse} transition={{ delay: 0.2, type: "tween" }}>I’m a functional medicine dietitian and health strategist. I take a root-cause approach to hormone havoc, skin struggles, and helping your body hum like the happy machine it was meant to be. But, I'm personally no stranger to confusion & complete desperation with health struggles. Especially when it comes to skin & hormones. I caught the health bug from my dad at an early age and started studying nutrition in college. </motion.p>
                    <motion.p animate={controls} variants={revealReverse} transition={{ delay: 0.3, type: "tween" }}>I’m a functional medicine dietitian and health strategist. I take a root-cause approach to hormone havoc, skin struggles, and helping your body hum like the happy machine it was meant to be. But, I'm personally no stranger to confusion & complete desperation with health struggles. Especially when it comes to skin & hormones. I caught the health bug from my dad at an early age and started studying nutrition in college. </motion.p>
                    <motion.p animate={controls} variants={revealReverse} transition={{ delay: 0.4, type: "tween" }}>I’m a functional medicine dietitian and health strategist. I take a root-cause approach to hormone havoc, skin struggles, and helping your body hum like the happy machine it was meant to be. But, I'm personally no stranger to confusion & complete desperation with health struggles. Especially when it comes to skin & hormones. I caught the health bug from my dad at an early age and started studying nutrition in college. </motion.p>
                </div>
            </div>
        </section>
        
    </>);
}

export default TrainingSection;