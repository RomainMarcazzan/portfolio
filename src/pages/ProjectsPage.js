import React, { useState, useRef, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import groupomania from "../assets/videos/groupomania.mp4";
import netflix from "../assets/videos/netflix.mp4";
import uber from "../assets/videos/uber.mp4";
import ecommerce from "../assets/videos/ecommerce.mp4";

// const groupomania = lazy(() => import("../assets/videos/groupomania.mp4"));
// const netflix = lazy(() => import("../assets/videos/netflix.mp4"));
// const uber = lazy(() => import("../assets/videos/uber.mp4"));
// const ecommerce = lazy(() => import("../assets/videos/ecommerce.mp4"));

const ProjectsPage = () => {
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
      ref: useRef(netflix),
      technos: "React, Sass, Firebase, Stripe...",
    },
    {
      id: 2,
      title: "Uber Drive clone",
      ref: useRef(uber),
      technos: "React Native, Expo, Redux, GoogleMapsAPI...",
    },
    {
      id: 3,
      title: "Ecommerce",
      ref: useRef(ecommerce),
      technos: "NextJs, MongoDB, contextAPI, Paypal...",
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
                // onMouseEnter={() => {
                //   setSelectedVideo({
                //     video: videoRoute.ref.current,
                //     key: videoRoute.id,
                //     init: "100%",
                //     anim: "0%",
                //   });
                // }}
                // onMouseLeave={() => {
                //   setSelectedVideo({
                //     video: videoRoute.ref.current,
                //     key: videoRoute.id,
                //     init: "0%",
                //     anim: "100%",
                //   });
                // }}
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
            controls
            src={selectedVideo.video}
            type="video/mp4"
            autoPlay
            loop
            muted
          />
          <motion.div
            initial={{ height: selectedVideo.init }}
            animate={{
              height: selectedVideo.anim,
              transition: {
                ease: "easeInOut",
                duration: 0.5,
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
