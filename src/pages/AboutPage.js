import React from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import Scene from "../components/Scene";

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
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: "spring",
        mass: 0.35,
        stiffness: 75,
        duration: 0.1,
      }}
      className="aboutPage"
    >
      <NavBar isShown />
      <Scene />
      <div className="aboutPage__container">
        <motion.div
          initial={{ x: 100 }}
          animate={animate}
          drag
          dragConstraints={dragConstraints}
          dragElastic={1}
          className="aboutPage__card"
        >
          BACKEND: NodeJs, Express, MongoDb, Firebase, MySql...
        </motion.div>
        <motion.div
          initial={{ y: 200, x: -100 }}
          animate={animate}
          drag
          dragConstraints={dragConstraints}
          dragElastic={1}
          className="aboutPage__card"
        >
          Je suis développeur basé à Saint Denis de la Réunion. J'utilise des
          technologies JavaScript modernes pour la création de sites web et
          applications mobiles. N'hésitez pas à me contacter pour parler de
          votre projet.
        </motion.div>
        <motion.div
          initial={{ x: 100 }}
          animate={animate}
          drag
          dragConstraints={dragConstraints}
          dragElastic={1}
          className="aboutPage__card"
        >
          FRONTEND: React, Redux, React-Native, NextJs, Vue, Nuxt, Sass,
          ThreeJS...
        </motion.div>
      </div>
    </motion.main>
  );
};

export default AboutPage;
