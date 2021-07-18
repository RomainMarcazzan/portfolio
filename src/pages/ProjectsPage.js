import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import groupomania from "../assets/videos/groupomania.mp4";
import netflix_clone from "../assets/videos/netflix.mp4";
import meal_app from "../assets/videos/meal-app.mp4";

const ProjectsPage = () => {
  const devise = window.innerWidth;
  const videoRoutes = [
    {
      id: 0,
      title: "groupomania",
      ref: useRef(groupomania),
      technos: "React, Express, Sequelize, MySql...",
    },
    {
      id: 1,
      title: "netflix clone",
      ref: useRef(netflix_clone),
      technos: "React, Sass, Firebase, Stripe...",
    },
    {
      id: 2,
      title: "meal app",
      ref: useRef(meal_app),
      technos: "React Native, Expo, Redux...",
    },
  ];
  const [selectedVideo, setSelectedVideo] = useState({
    showVideo: false,
    showNav: true,
    video: null,
    key: null,
  });

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
      className="projectsPage"
    >
      {selectedVideo.showNav ? <NavBar isShown /> : <NavBar />}
      <div className="projectsPage__container">
        <div className="projectsPage__container__top">
          <video
            id="videoId"
            src={selectedVideo.video}
            type="video/mp4"
            autoPlay
            loop
            muted
            controls
          />
          <motion.div
            initial={{ height: "75%" }}
            animate={
              selectedVideo.showVideo
                ? {
                    height: "0%",
                    transition: {
                      ease: "easeIn",
                    },
                  }
                : {
                    height: "75%",
                    transition: {
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
                    showVideo: true,
                    showNav: false,
                    video: videoRoute.ref.current,
                    key: videoRoute.id,
                  });
                }}
                onHoverEnd={() => {
                  setSelectedVideo({
                    showVideo: false,
                    showNav: true,
                    video: null,
                    key: null,
                  });
                }}
                onClick={() => {
                  devise > 769
                    ? setSelectedVideo({
                        showVideo: true,
                        showNav: false,
                        video: videoRoute.ref.current,
                        key: videoRoute.id,
                      })
                    : setSelectedVideo({
                        showVideo: true,
                        showNav: true,
                        video: videoRoute.ref.current,
                        key: videoRoute.id,
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
