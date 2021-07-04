import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import Model from "../utils/Scene";
import NavBar from "../components/NavBar";
import { OrbitControls, Center, Text } from "@react-three/drei";
const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 2.5 },
      }}
      exit={{ scaleY: 0, opacity: 0, transition: { duration: 0.8 } }}
      className="contactPage"
    >
      <NavBar />
      <Canvas>
        <directionalLight intensity={1} />
        <pointLight color="white" position={[0, 0, 2]} intensity={2} />
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Center>
            <Model className="contactPage__phone" rotation={[0, -1, 0]} />
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
          fontSize="0.7"
          position={[0, 2, 0]}
        >
          +33 (0)7.82.96.05.29
        </Text>
      </Canvas>
    </motion.div>
  );
};

export default ContactPage;
