"use client";

import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  MeshReflectorMaterial,
  MeshWobbleMaterial,
  Sphere,
  Stage,
  Text,
  Text3D,
} from "@react-three/drei";
import { Vector3 } from "three";

// Modify SpinningSphere to accept a size prop
const SpinningSphere = ({ size = 1, position = new Vector3() }) => {
  const meshRef = useRef<any>();
  const [isHovered, setIsHovered] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={(event) => setIsHovered(true)}
      onPointerOut={(event) => setIsHovered(false)}
    >
      {/* Pass size as args to Sphere */}
      <Sphere position={position} args={[size, 32, 32]}>
        <MeshWobbleMaterial
          wireframe
          factor={1}
          speed={1}
          color={isHovered ? "hotpink" : "orange"}
        />
      </Sphere>
    </mesh>
  );
};

export const Globe = () => {
  return (
    <div className="h-screen bg-transparent">
      <Canvas className="bg-transparent">
        <pointLight position={[10, 10, 10]} />
        <Stage>
          <Text color="white" anchorX="center" anchorY="middle">
            ohayo!
          </Text>
          {/* Render multiple spheres with different sizes */}
          <SpinningSphere position={new Vector3(1, 2, -1)} size={0.3} />
          <SpinningSphere position={new Vector3(1, 2, -2)} size={0.2} />
          {/* <SpinningSphere position={new Vector3(0, 0, 0)} size={1} /> */}
          <SpinningSphere position={new Vector3(2, 2, 2)} size={0.5} />
        </Stage>
      </Canvas>
    </div>
  );
};
