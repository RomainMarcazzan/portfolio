import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import groupomania from "../assets/videos/groupomania.mp4";
import netflix_clone from "../assets/videos/netflix.mp4";
const ProjectsPage = () => {
  const videoRoutes = [
    {
      id: 0,
      title: "groupomania",
      ref: useRef(groupomania),
      technos: "React,Express,Sequelize,MySql...",
    },
    {
      id: 1,
      title: "netflix clone",
      ref: useRef(netflix_clone),
      technos: "React,Sass,Firebase,Stripe...",
    },
    {
      id: 2,
      title: "amazon clone",
      ref: useRef(netflix_clone),
      technos: "React,Sass,Firebase,Stripe...",
    },
  ];
  const [selectedVideo, setSelectedVideo] = useState({
    show: false,
    video: null,
    key: null,
  });
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{
        scaleX: 1,
        transition: { duration: 0.8 },
      }}
      exit={{ scaleX: 0, transition: { duration: 0.8 } }}
      className="projectsPage"
    >
      {selectedVideo.show ? <NavBar /> : <NavBar isShown />}
      <div className="projectsPage__container">
        <div className="projectsPage__container__top">
          <video
            src={selectedVideo.video}
            type="video/mp4"
            autoPlay
            loop
            muted
          ></video>
          <motion.div
            initial={{ height: "75%" }}
            animate={
              selectedVideo.show
                ? {
                    height: "0%",
                    transition: {
                      duration: 0.4,
                      // ease: [0.6, 0.05, -0.01, 0.9],
                      ease: "easeIn",
                    },
                  }
                : {
                    height: "75%",
                    transition: {
                      duration: 0.3,
                      // ease: [0.6, 0.05, -0.01, 0.9],
                      ease: "easeOut",
                    },
                  }
            }
            className="projectsPage__container__top--overlay"
          />
        </div>
        <div className="projectsPage__container__bottom">
          <ul>
            {videoRoutes.map((videoRoute) => (
              <motion.li
                key={videoRoute.id}
                onHoverStart={() => {
                  setSelectedVideo({
                    show: true,
                    video: videoRoute.ref.current,
                    key: videoRoute.id,
                  });
                }}
                onHoverEnd={() => {
                  setSelectedVideo({
                    show: false,
                    video: null,
                    key: null,
                  });
                }}
              >
                {videoRoute.title} <span>{videoRoute.technos}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
