import react from 'react'
import { Link } from "react-router-dom"
import Cards from "./Cards"
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { textAnimation, imageAnimation, box, reveal, revealReverse, fromDown, fromUp } from "../Animation"
import { useScroll } from "../useScroll";

import "../../pages/Home.scss"

const cards = [
    {
        title: "Konsultacja online",
        text: "30 min.",
        price: 60,
        img: "gym1.jpg"
    },
    {
        title: "Plan zywieniowy",
        text: "ok. 35 przepisów",
        price: 250,
        img: "gym2.jpg"
    },
    {
        title: "Trening personalny",
        text: "1 godz.",
        price: 100,
        img: "gym3.jpg"
    }
]

const CardsSection = () => {
    const [element, controls] = useScroll();

    return (
        <>
            <section id="cards-offer">
                {cards.map((card, index) => (
                    <motion.div key={index} className="card" >
                        <div className="card-title">
                            <motion.img whileHover={{ scale: 1.2 }} src={card.img} alt="" className='card-img' />
                            <motion.h3 >{card.title}</motion.h3>
                            <motion.span >{card.text}</motion.span>
                        </div>
                        <div className="card-price">
                            <span>{card.price}</span>
                            <Link to="/" title={card.title}><button className='card-btn'>Wybierz</button></Link>
                        </div>
                    </motion.div>
                ))}
            </section>
        </>
    );
}

export default CardsSection;