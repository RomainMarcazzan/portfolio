import React from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";

const AboutPage = () => {
  const animate = {
    y: 0,
    x: 0,
    transition: { duration: 0.5 },
  };

  const dragConstraints = {
    top: -50,
    left: -50,
    right: 50,
    bottom: 50,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: "spring",
        mass: 0.35,
        stiffness: 75,
        duration: 0.3,
      }}
      className="aboutPage"
    >
      <NavBar isShown />
      <div className="aboutPage__container">
        <motion.div
          initial={{ y: 200, x: -100 }}
          animate={animate}
          drag
          dragConstraints={dragConstraints}
          className="aboutPage__card"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
          dolor vel doloribus aliquid. Dolorem quo impedit illum aliquid ab,
          enim quibusdam harum delectus fugiat excepturi ea, architecto, minima
          esse quos.
        </motion.div>
        <motion.div
          initial={{ x: 100 }}
          animate={animate}
          drag
          dragConstraints={dragConstraints}
          className="aboutPage__card"
          style={{
            position: "absolute",
            top: "55vh",
            right: "20vw",
            zIndex: "2",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
          dolor vel doloribus aliquid. Dolorem quo impedit illum aliquid ab,
          enim quibusdam harum delectus fugiat excepturi ea, architecto, minima
          esse quos.
        </motion.div>
        <motion.div
          initial={{ x: 100 }}
          animate={animate}
          drag
          dragConstraints={dragConstraints}
          className="aboutPage__card"
          style={{
            position: "absolute",
            top: "20vh",
            left: "17vw",
            zIndex: "2",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
          dolor vel doloribus aliquid. Dolorem quo impedit illum aliquid ab,
          enim quibusdam harum delectus fugiat excepturi ea, architecto, minima
          esse quos.
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
