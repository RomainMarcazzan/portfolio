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
    video: null,
    key: null,
    init: "100%",
  });

  return (
    <div className="projectsPage">
      <NavBar isShown />
      <div className="projectsPage__container">
        <div className="projectsPage__container__top">
          <ul>
            {videoRoutes.map((videoRoute) => (
              <motion.li
                key={videoRoute.id}
                onClick={() => {
                  setSelectedVideo({
                    video: videoRoute.ref.current,
                    key: videoRoute.id,
                    anim: "0%",
                  });
                }}
              >
                {videoRoute.title} <span>{videoRoute.technos}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="projectsPage__container__bottom">
          <video
            src={selectedVideo.video}
            type="video/mp4"
            autoPlay
            loop
            muted
            controls={devise <= 768 ? false : true}
          />

          <motion.div
            initial={{ height: selectedVideo.init }}
            animate={{
              height: selectedVideo.anim,
              transition: {
                ease: "easeInOut",
                duration: 0.8,
              },
            }}
            className="projectsPage__container__bottom--overlay"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
