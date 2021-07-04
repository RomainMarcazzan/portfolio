import React from "react";
import AnimateLetters from "./AnimateLetters";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.div exit={{ opacity: 0 }} className="banner">
      <div className="banner__name">
        <AnimateLetters title={"Romain"} />
        <AnimateLetters title={"Marcazzan"} />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.5, duration: 1 } }}
        className="banner__title"
      >
        développeur Web & App
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 2, duration: 1 } }}
        className="banner__description"
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit rerum
        quod labore obcaecati soluta amet, veritatis at odit fuga hic, explicabo
        esse eveniet veniam, mollitia laborum quia sit omnis ex!
      </motion.div>
    </motion.div>
  );
};

export default Banner;
