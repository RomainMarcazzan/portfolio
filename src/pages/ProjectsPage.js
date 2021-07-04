import React from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";

const ProjectsPage = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{
        scaleY: 1,
        transition: { duration: 1 },
      }}
      exit={{ scaleX: 0, transition: { duration: 0.8 } }}
      className="projectsPage"
    >
      <NavBar />
    </motion.div>
  );
};

export default ProjectsPage;
