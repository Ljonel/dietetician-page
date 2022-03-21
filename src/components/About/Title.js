import React from 'react'
import { motion } from 'framer-motion'
import { useScroll } from "../useScroll"
import { imageAnimation, reveal , fromDown} from "../Animation"


const word = "Hej! Jestem Asia";
const wordTab = [...word];

 const Title = () => {
    const [element, controls] = useScroll();
   
    return (<>
        <div className="title-wrapper" ref={element}>
            {wordTab.map((x, index) => (
            <motion.h1 
            key={index} 
            variants={fromDown}
            animate={controls} 
            transition={{ delay: index/100, type: "tween" }} 
            >
                {x}
            </motion.h1>))}
        </div>
    </>
    )
}

export default Title