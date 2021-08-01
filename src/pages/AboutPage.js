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
    <div className="aboutPage">
      <NavBar isShown />
      <div className="aboutPage__container">
        <motion.div
          initial={{ x: 100 }}
          animate={animate}
          drag
          dragConstraints={dragConstraints}
          dragElastic={1}
          className="aboutPage__card"
        >
          BACKEND: Express, Sequelize, MySql, MongoDb, Firebase...
        </motion.div>
        <motion.div
          initial={{ y: 200, x: -100 }}
          animate={animate}
          drag
          dragConstraints={dragConstraints}
          dragElastic={1}
          className="aboutPage__card"
        >
          Je suis développeur, diplômé Bac+2, basé à Saint Denis de la Réunion.
          J'utilise des technologies JavaScript modernes pour la création de
          sites web et applications mobiles. N'hésitez pas à me contacter pour
          parler de votre projet.
        </motion.div>
        <motion.div
          initial={{ x: 100 }}
          animate={animate}
          drag
          dragConstraints={dragConstraints}
          dragElastic={1}
          className="aboutPage__card"
        >
          FRONTEND: React, Redux, Context Api, hooks, React-Native, Sass,
          ThreeJS...
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
