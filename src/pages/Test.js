import React from "react";
import { motion } from "framer-motion";

const transition = { duration: 1.5, ease: [0.6, 0.01, -0.05, 0.9] };

const variantContainerBottom = {
  animate: {
    transition: {
      delayChildren: 1.4,
      staggerChildren: 0.5,
    },
  },
};

const variantBottom = {
  initial: { height: "100%", width: window.innerWidth / 3 },
  animate: {
    height: "0%",
    width: window.innerWidth / 3,
    backgroundColor: "black",
    transition: { ...transition },
  },
};

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAnim = {
  initial: { y: 100 },
  animate: {
    y: 10,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const AnimateLetters = ({ title }) => (
  <motion.div
    className="row-title"
    variants={banner}
    initial="initial"
    animate="animate"
  >
    {[...title].map((letter) => (
      <motion.div className="row-letter" variants={letterAnim}>
        {letter}
      </motion.div>
    ))}
  </motion.div>
);

const Test = () => {
  return (
    <div className="home">
      <motion.div
        className="row-top"
        initial={{ scaleX: 0 }}
        animate={{
          backgroundColor: "black",
          scaleX: 1,
          transition: transition,
        }}
      ></motion.div>
      <AnimateLetters title={"Romain Marcazzan"} />

      <motion.div
        className="row-bottom"
        variants={variantContainerBottom}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={variantBottom}></motion.div>
        <motion.div variants={variantBottom}></motion.div>
        <motion.div variants={variantBottom}></motion.div>
      </motion.div>
    </div>
  );
};

export default Test;
