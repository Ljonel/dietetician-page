import React from "react";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { fromDown } from "./Animation";

export const Title = (props) => {
  const [element, controls] = useScroll();

  const word = `${props.word}`;
  const wordTab = [...word];

  return (
    <>
      <div className="title-wrapper" ref={element}>
        {wordTab.map((x, index) => (
          <motion.h1
            key={index}
            variants={fromDown}
            animate={controls}
            transition={{ delay: index / 90, type: "tween" }}
          >
            {x}
          </motion.h1>
        ))}
      </div>
    </>
  );
};

export default Title;
