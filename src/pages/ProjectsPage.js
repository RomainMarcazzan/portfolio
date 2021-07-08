import React, { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NavBar from "../components/NavBar";
import portfolio from "../assets/videos/portfolio.mp4";
import chess from "../assets/videos/chess.mp4";
import { Link } from "react-router-dom";
const ProjectsPage = () => {
  const videoRoutes = [
    {
      id: 0,
      title: "portfolio",
      ref: useRef(portfolio),
    },
    {
      id: 1,
      title: "chess",
      ref: useRef(chess),
    },
  ];
  const [selectedVideo, setSelectedVideo] = useState({
    show: false,
    video: chess,
    key: 0,
  });
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
      {/* <NavBar /> */}
      <div className="projectsPage__container">
        <div className="projectsPage__container__left">
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
              >
                {videoRoute.title}
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="projectsPage__container__right">
          <video src={selectedVideo.video} type="video/mp4" autoPlay loop muted>
            {console.log(selectedVideo)}
          </video>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
