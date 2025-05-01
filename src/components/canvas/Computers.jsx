import React, { Suspense, useEffect, useState, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

// Tweak these constants:
const EMISSIVE_INTENSITY = 0.3;      // 0 = no glow, 1 = full glow
const ANISOTROPY_LEVEL = 7;         // desired anisotropy (will clamp to GPU max)

const Computers = ({ isMobile }) => {
  // load the GLTF model and your replacement image
  const computer = useGLTF("/desktop_pc/scene.gltf");
  const screenTex = useTexture("/monitor.png");
  const meshRef = useRef();
  const { gl } = useThree();

  // apply anisotropic filtering and correct encoding
  useEffect(() => {
    const maxAniso = gl.capabilities.getMaxAnisotropy();
    // clamp to GPU maximum
    screenTex.anisotropy = Math.min(ANISOTROPY_LEVEL, maxAniso);
    screenTex.encoding = THREE.sRGBEncoding;
    screenTex.needsUpdate = true;
  }, [screenTex, gl.capabilities]);

  // override the baked screen material once both are ready
  useEffect(() => {
    computer.scene.traverse((child) => {
      if (child.isMesh) {
        const name = child.name.toLowerCase();
        if (
          name.includes("screen") ||
          name.includes("monitor") ||
          /074_30/.test(name)
        ) {
          child.material.map = screenTex;
          child.material.emissiveMap = screenTex;
          child.material.emissive = new THREE.Color(0xffffff);
          child.material.emissiveIntensity = EMISSIVE_INTENSITY;
          child.material.needsUpdate = true;
        }
      }
    });
  }, [computer.scene, screenTex]);

  // optional rotation on mobile
  useFrame((_, delta) => {
    if (meshRef.current && isMobile) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh ref={meshRef}>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.75 : 0.75}
        position={isMobile ? [0, -3, 0] : [0, -3.25, -1.5]}
        rotation={isMobile ? [0, 0, 0] : [-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 500px)");
    setIsMobile(mql.matches);
    const handleChange = (e) => setIsMobile(e.matches);
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  return (
    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={
        isMobile
          ? { position: [0, 0, 20], fov: 50 }
          : { position: [20, 3, 5], fov: 25 }
      }
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {!isMobile && (
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            autoRotate
          />
        )}
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
