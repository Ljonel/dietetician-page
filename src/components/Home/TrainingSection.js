import react from 'react'
import { Link } from "react-router-dom"
import { motion } from 'framer-motion'
import { textAnimation, imageAnimation, box, reveal, revealReverse, fromDown, fromUp } from "../Animation"
import { useScroll } from "../useScroll";
import { ReactComponent as PersonalTrainer } from '../personal-trainer.svg'
import { IoBarbell } from 'react-icons/io5'

import "../../pages/Home.scss"
const IntroductionSection = () => {
    const [element, controls] = useScroll();
    return (
        <>
            <section id="training" ref={element}>
                <div className="training-text">
                    <PersonalTrainer className='svg-img' />
                    <motion.div animate={controls} variants={fromDown} transition={{ delay: 0.1, type: "tween" }} ><IoBarbell className='training-icon' /></motion.div>
                    <motion.h1 animate={controls} variants={reveal} transition={{ delay: 0.1, type: "tween" }} >Trener Personalny</motion.h1>
                    <motion.h5 animate={controls} variants={textAnimation} transition={{ delay: 0.1, type: "tween" }} >
                        Jestem certyfikowanym Trenerem Personalnym. Od dziecka mocno związana ze sportem, w tym od sześciu lat trenuję siłowo.
                        Swoją pasją do aktywności fizycznej zapragnęłam dzielić się z Wami. <br/> 
                        Miło mi Cię poznać!
                    </motion.h5>
                    <Link to="/about"><motion.button animate={controls} variants={fromDown} transition={{ delay: 0.1, type: "tween" }} className='introduction-btn'>Więcej o mnie</motion.button></Link>
                </div>
                <div className="training-img">
                    <div className="training-box">
                    </div>
                    <motion.div animate={controls} variants={box} transition={{ delay: 0.1, type: "tween" }} className="training-box">
                    </motion.div>
                    <motion.img animate={controls} variants={imageAnimation} transition={{ delay: 0.3, type: "tween" }} src="gym2.jpg" alt="" />
                </div>
            </section></>
    );
}

export default IntroductionSection;