import react from 'react'
import { Link } from "react-router-dom"
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { textAnimation, imageAnimation, box, reveal, revealReverse, fromDown, fromUp } from "../Animation"
import { useScroll } from "../useScroll";

import "../../pages/Home.scss"

const cards = [
    {
        title: "Konsultacja",
        text: "Spersonalizowany program odzywiania",
        price: 60,
        img: "gym1.jpg",
        animate: fromDown,
    },
    {
        title: "Plan zywieniowy",
        text: "ok. 35 przepisów",
        price: 250,
        img: "gym2.jpg",
        animate: fromUp,

    },
    {
        title: "Trening personalny",
        text: "1 godz.",
        price: 100,
        img: "gym3.jpg",
        animate: fromDown,

    }
]

const CardsSection = () => {
    const [element, controls] = useScroll();
    return (
        <>
            <section id="cards-offer" ref={element}>
                {cards.map((card, index) => (
                    <motion.div animate={controls} variants={card.animate} transition={{ delay: 0.1, type: "tween" }} key={index} className="card" >
                        <div className="card-title">
                            <motion.img whileHover={{ scale: 1.2 }} src={card.img} alt="" className='card-img' />
                            <motion.h3 >{card.title}</motion.h3>
                            <motion.span >{card.text}</motion.span>
                        </div>
                        <div className="card-price">
                            <span>{card.price}zł</span>
                            <Link to="/" title={card.title}><button className='card-btn'>Wybierz</button></Link>
                        </div>
                    </motion.div>
                ))}
            </section>
        </>
    );
}

export default CardsSection;