import React from 'react'
import { motion } from 'framer-motion'
import { useScroll } from "../useScroll"
import { imageAnimation, reveal } from "../Animation"
import Title from "./Title"




const DescriptionSection = () => {

    const [element, controls] = useScroll();

    return (<>
        <section id="about-desc" ref={element}>
            <div className="desc-img">
                <div className="square"></div>
                <img src="welcome-img.jpg" alt="" />
            </div>
            <div className="desc-text">
                <div className="desc-text-title">
                    {/* <h1>Hej! Jestem Asia</h1> */}
                    <Title />
                </div>
                <div className="desc-text-content">
                    <p>I’m a functional medicine dietitian and health strategist. I take a root-cause approach to hormone havoc, skin struggles, and helping your body hum like the happy machine it was meant to be. But, I'm personally no stranger to confusion & complete desperation with health struggles. Especially when it comes to skin & hormones. I caught the health bug from my dad at an early age and started studying nutrition in college. </p>
                    <p>I’m a functional medicine dietitian and health strategist. I take a root-cause approach to hormone havoc, skin struggles, and helping your body hum like the happy machine it was meant to be. But, I'm personally no stranger to confusion & complete desperation with health struggles. Especially when it comes to skin & hormones. I caught the health bug from my dad at an early age and started studying nutrition in college. </p>
                    <p>I’m a functional medicine dietitian and health strategist. I take a root-cause approach to hormone havoc, skin struggles, and helping your body hum like the happy machine it was meant to be. But, I'm personally no stranger to confusion & complete desperation with health struggles. Especially when it comes to skin & hormones. I caught the health bug from my dad at an early age and started studying nutrition in college. </p>
                </div>
            </div>
        </section>
    </>);
}

export default DescriptionSection;