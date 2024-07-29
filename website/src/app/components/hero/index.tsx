"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import {
  Html,
  Cylinder,
  Stars,
  useDepthBuffer,
  Text3D,
  Clouds,
  Cloud,
  Center,
} from "@react-three/drei";
import * as THREE from "three";

import DojoLogo from "@/app/components/icons/dojo-logo.svg";
import { Button } from "../Button";

export default function Hero() {
  const handleScroll = () => {
    const element = document.getElementById("features");
    if (element) {
      const offset = 200; // Adjust this value as needed
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="z-1 relative  flex h-[100vh] w-screen justify-end sm:right-0 sm:top-0 sm:h-[120vh]">
      <div className="absolute z-10 flex h-[100vh] w-full flex-col justify-center px-8">
        <div className="mx-auto mb-8">
          <DojoLogo className="mb-4 w-64 sm:mb-8 sm:w-96" />
        </div>

        <p className="self-center text-center text-xl sm:w-1/2 sm:text-4xl">
          an open-source toolchain for building provable games and autonomous
          worlds
        </p>

        <div className="mt-8 space-x-2 text-center">
          <Button size={"lg"} onClick={handleScroll} variant={"default"}>
            toolchain
          </Button>
          <a href="https://book.dojoengine.org/">
            <Button size={"lg"} withArrow variant={"outline"}>
              docs
            </Button>
          </a>
        </div>
      </div>
      <div className=" w-full">
        <Canvas color="#1936A1" className="pointer-events-none">
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <SpinningMesh />
        </Canvas>
      </div>
    </div>
  );
}

extend({ EffectComposer, Bloom });

export function SpinningMesh() {
  const targetScale = useRef(1.0); // Target scale

  const onHover = (event: any, hovered: any) => {
    targetScale.current = hovered ? 1.05 : 1.0; // Set target scale
  };

  const cloud = useMemo(() => {
    return (
      <Clouds material={THREE.MeshBasicMaterial}>
        <Cloud
          // segments={15}
          bounds={[10, 2, 2]}
          volume={10}
          color="#FBCB4A"
          opacity={1}
          concentrate="inside"
          fade={100}
          scale={1}
          speed={1}
          position={[0, 2, 0]}
        />
        {/* <Cloud
          seed={1}
          scale={1}
          volume={5}
          color="#1936A1"
          concentrate="inside"
          fade={50}
          speed={1}
          opacity={0.8}
          position={[0, 1, 0]}
        /> */}
        <Cloud
          seed={1}
          scale={1}
          volume={10}
          concentrate="inside"
          color="#FD4544"
          fade={100}
          speed={0.5}
          opacity={0.8}
          position={[0, 2, 0]}
        />
      </Clouds>
    );
  }, []);

  return (
    <mesh position={[0, 0, 0]}>
      {cloud}
      <Stars
        radius={20}
        depth={100}
        count={10000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
    </mesh>
  );
}
