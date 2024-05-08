"use client";

import { Globe } from "./Globe";
import { Lines } from "./Lines";
import { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useMenuStore } from "../Navigation";
import { LineParticles } from "./Particles";
import { Text } from "../../components/Text";
import { Button } from "@/components/Button";
import { Canvas, useFrame } from "@react-three/fiber";
import { div } from "three/examples/jsm/nodes/Nodes.js";

import * as THREE from "three";
export default function Hero() {
  const wrapper = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapper,
    offset: ["start start", "end end"],
  });
  const { decreasedPadding } = useMenuStore();

  useMotionValueEvent(scrollYProgress, "change", (latest: number) => {
    if (latest >= 1 && !decreasedPadding) {
      return useMenuStore.setState({ decreasedPadding: true });
    }

    if (latest < 1 && decreasedPadding) {
      return useMenuStore.setState({ decreasedPadding: false });
    }
  });

  return (
    <div className="relative ">
      <div
        className="relative z-10 flex h-[200vh] items-start justify-center px-8 sm:px-0"
        ref={wrapper}
      >
        <div className="sticky top-48 flex h-screen w-full max-w-[1400px] flex-col items-center justify-between gap-20 sm:top-0 sm:flex-row">
          <div className="flex flex-col items-start gap-10">
            <Text textStyle="headline1" className="text-text-white">
              Let&#8217;s build provable games.
            </Text>
            <Button>Learn more</Button>
          </div>

          <Lines scrollProgress={scrollYProgress} />
        </div>
      </div>
      <div className="z-1 absolute right-0 top-0  flex h-[200vh] w-screen justify-end ">
        <div className="w-full ">
          <Canvas className="sm:ml-96">
            <ambientLight intensity={0.1} />
            <directionalLight color="red" position={[0, 0, 5]} />
            <SpinningMesh />
          </Canvas>
        </div>
      </div>
    </div>
  );
}

function SpinningMesh() {
  const ref = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.001;
      ref.current.rotation.y += 0.01;
    }
    if (glowRef.current) {
      glowRef.current.rotation.x += 0.001;
      glowRef.current.rotation.y += 0.01;
    }
  });

  const gradientShader = {
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec2 vUv;
      void main() {
        gl_FragColor = vec4(vUv, 0.51, 1.0);
      }
    `,
    uniforms: {},
  };

  const glowShader = {
    vertexShader: `
      void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      void main() {
        float distanceFromCenter = distance(gl_PointCoord, vec2(0.5, 0.5));
        float intensity = 0.35 / (distanceFromCenter * distanceFromCenter + 0.01);
        gl_FragColor = vec4(1.0, 0.76, 0.3, intensity);
      }
    `,
    uniforms: {},
  };

  return (
    <>
      <mesh ref={ref}>
        <sphereGeometry args={[1, 32, 32]} />
        <shaderMaterial args={[gradientShader]} />
      </mesh>
      {/* <mesh ref={glowRef} scale={[1.5, 1.5, 1.5]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <shaderMaterial
          args={[glowShader]}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh> */}
    </>
  );
}
