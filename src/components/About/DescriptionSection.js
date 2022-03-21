import React from 'react'
import { motion } from 'framer-motion'

const word = "Hej! Jestem Asia";
const wordTab = [...word];
const Title = () => {
    return (<>
        <div className="title-wrapper">
            {wordTab.map(x => (<motion.h1 >{x}</motion.h1>))}
        </div>
    </>
    )
}

const DescriptionSection = () => {


    return (<>
        <section id="about-desc">
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