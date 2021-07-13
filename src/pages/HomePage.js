import React from "react";
import { motion } from "framer-motion";
import Banner from "../components/Banner";
import NavBarHome from "../components/NavBarHome";
const HomePage = () => {
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
      className="homePage"
    >
      <Banner />
      <NavBarHome />
    </motion.div>
  );
};

export default HomePage;
