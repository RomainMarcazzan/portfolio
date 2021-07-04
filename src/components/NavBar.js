import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  const activeStyle = {
    fontWeight: "700",
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          ease: "easeInOut",
          duration: 1,
          delay: 0.4,
        },
      }}
      exit={{ opacity: 0 }}
      className="navBar"
    >
      <NavLink
        className="activeNav"
        activeClassName="noHover"
        activeStyle={activeStyle}
        exact
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="activeNav"
        activeClassName="noHover"
        activeStyle={activeStyle}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className="activeNav"
        activeClassName="noHover"
        activeStyle={activeStyle}
        to="/projects"
      >
        Projects
      </NavLink>
      <NavLink
        className="activeNav"
        activeClassName="noHover"
        activeStyle={activeStyle}
        to="/contact"
      >
        Contact
      </NavLink>
    </motion.div>
  );
};

export default NavBar;
