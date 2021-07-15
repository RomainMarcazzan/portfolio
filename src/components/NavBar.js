import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
const NavBar = ({ isShown }) => {
  const activeStyle = {
    fontWeight: "700",
  };
  return (
    <motion.div
      initial={{ y: -180 }}
      animate={
        isShown && {
          y: 0,
          transition: {
            ease: "easeInOut",
            duration: 0.5,
          },
        }
      }
      // exit={{ opacity: 0 }}
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
        Profil
      </NavLink>
      <NavLink
        className="activeNav"
        activeClassName="noHover"
        activeStyle={activeStyle}
        to="/projects"
      >
        Projets
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
