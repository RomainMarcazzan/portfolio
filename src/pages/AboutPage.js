import React from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";

const AboutPage = () => {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{
        scaleX: 1,
        transition: { duration: 1 },
      }}
      exit={{ scaleY: 0, transition: { duration: 0.8 } }}
      className="aboutPage"
    >
      <NavBar />
    </motion.div>
  );
};

export default AboutPage;
