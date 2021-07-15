import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import Model from "../utils/Scene";
import NavBar from "../components/NavBar";
import { OrbitControls, Center, Text } from "@react-three/drei";
const ContactPage = () => {
  const devise = window.innerWidth;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        delay: 0.4,
        type: "spring",
        mass: 0.35,
        stiffness: 75,
        duration: 0.3,
      }}
      className="contactPage"
    >
      <NavBar isShown />
      <Canvas style={{ cursor: "grab" }}>
        <directionalLight intensity={1} />
        <pointLight color="white" position={[0, 0, 2]} intensity={1} />
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Center>
            <Model
              className="contactPage__phone"
              scale={devise <= 768 ? [8, 8, 8] : [12, 12, 12]}
              rotation={[0, -1.2, 0]}
            />
          </Center>
        </Suspense>
        <OrbitControls
          enablePan={true}
          enableZoom={false}
          enableRotate={true}
        />
        <Text
          color="white" // default
          anchorX="center" // default
          anchorY="middle"
          fontSize={devise <= 768 ? "0.3" : "0.4"}
          position={[0, 2, 0]}
          rotation={[0, 0, 0]}
        >
          +262 (0)6.92.25.32.94
        </Text>
      </Canvas>
      <div className="contactPage__info">
        <motion.div
          initial={{ x: -150 }}
          animate={{ x: 0, transition: { duration: 0.5 } }}
          className="contactPage__info__email"
        >
          <a href="mailto: romain.marcazzan@hotmail.com">
            romain.marcazzan@hotmail.com
          </a>
        </motion.div>
        <motion.div
          initial={{ x: 150 }}
          animate={{ x: 0, transition: { duration: 0.5 } }}
          className="contactPage__info__address"
        >
          <span>30 rue de l'Abattoir</span>
          <span>97400 Saint Denis</span>
          <span>La Réunion</span>
        </motion.div>
        <div className="contactPage__info__social">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <motion.path
              stroke="white"
              fill="none"
              strokeWidth="20"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
            ></motion.path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <motion.path
              stroke="white"
              fill="none"
              strokeWidth="20"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"
            ></motion.path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <motion.path
              stroke="white"
              fill="none"
              strokeWidth="20"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
            ></motion.path>
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
