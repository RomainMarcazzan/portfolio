import React from "react";
import { motion } from "framer-motion";

const AnimateLetters = ({ title }) => {
  const lettersContainer = {
    animate: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const letterAnim = {
    initial: { y: 400 },
    animate: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 0.5,
      },
    },
  };
  return (
    <motion.div
      className="animate-letters"
      variants={lettersContainer}
      initial="initial"
      animate="animate"
    >
      {[...title].map((letter, index) => (
        <motion.div key={index} className="letter" variants={letterAnim}>
          {letter}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimateLetters;
