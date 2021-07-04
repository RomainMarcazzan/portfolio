import React from "react";
import { motion } from "framer-motion";
import Banner from "../components/Banner";
import NavBarHome from "../components/NavBarHome";

const HomePage = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{
        scaleY: 1,
        transition: { duration: 1 },
      }}
      exit={{ scaleY: 0, transition: { duration: 1 } }}
      className="homePage"
    >
      <Banner />
      <NavBarHome />
    </motion.div>
  );
};

export default HomePage;
