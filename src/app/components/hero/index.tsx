"use client";

import { Lines } from "./Lines";
import { useMemo, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useMenuStore } from "../Navigation";
import { Text } from "../Text";
import { Button } from "@/app/components/Button";
import { Canvas, useFrame, extend, useThree } from "@react-three/fiber";
import { Bloom, EffectComposer, Pixelation } from "@react-three/postprocessing";
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
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import * as THREE from "three";

export default function Hero() {
  return (
    <div className="z-1 flex  h-[100vh] w-screen justify-end sm:right-0 sm:top-0 sm:h-[130vh]">
      <div className="w-full ">
        <Canvas color="#1936A1" className="">
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <SpinningMesh />
        </Canvas>
      </div>
    </div>
  );
}

extend({ EffectComposer, Bloom });
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
      vec3 lightPurple = vec3(0.135, 0.18, 0.89); // RGB for light purple
      vec3 softPink = vec3(0.5, 0.10, 0.16); // RGB for soft pink
      gl_FragColor = vec4(mix(lightPurple, softPink, vUv.y), 1.0);
    }
  `,
  uniforms: {},
};
function SpinningMesh() {
  const ref = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.LineSegments>(null);
  const targetScale = useRef(1.0); // Target scale
  const currentScale = useRef(1.0); // Current scale

  const depthBuffer = useDepthBuffer({ frames: 2 });
  useFrame(() => {
    if (ref.current) {
      // Gradually adjust currentScale towards targetScale
      currentScale.current +=
        (targetScale.current - currentScale.current) * 0.1;
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
      ref.current.scale.set(
        currentScale.current,
        currentScale.current,
        currentScale.current,
      );
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.x += 0.001;
      wireframeRef.current.rotation.y += 0.0045;
      wireframeRef.current.scale.set(
        currentScale.current,
        currentScale.current,
        currentScale.current,
      );
    }
  });
  const onHover = (event: any, hovered: any) => {
    targetScale.current = hovered ? 1.05 : 1.0; // Set target scale
  };

  const cloud = useMemo(() => {
    return (
      <Clouds material={THREE.MeshBasicMaterial}>
        {/* <Cloud
          // segments={15}
          bounds={[10, 2, 2]}
          volume={2}
          color="#FD4544"
          opacity={1}
          concentrate="inside"
          fade={100}
          scale={1}
          speed={0.5}
          position={[0, 1, 0]}
        /> */}
        <Cloud
          seed={1}
          scale={1}
          volume={5}
          color="#1936A1"
          concentrate="inside"
          fade={50}
          speed={1}
          opacity={0.8}
          position={[0, 1, 0]}
        />
        <Cloud
          seed={1}
          scale={1}
          volume={3}
          concentrate="inside"
          color="#FD4544"
          fade={100}
          speed={0.5}
          opacity={0.8}
          position={[0, 1, 0]}
        />
      </Clouds>
    );
  }, []);

  return (
    <mesh position={[0, 0, 0]}>
      <mesh
        ref={ref}
        onPointerOver={(e) => onHover(e, true)}
        onPointerOut={(e) => onHover(e, false)}
      >
        <sphereGeometry args={[2, 32, 32]} />
        <shaderMaterial args={[gradientShader]} depthWrite={true} />
      </mesh>
      {cloud}
      {/* <lineSegments ref={wireframeRef}>
        <wireframeGeometry args={[new THREE.SphereGeometry(2.03, 100, 50)]} />
        <shaderMaterial args={[gradientShader]} depthWrite={true} />
      </lineSegments> */}
      {/* <Html position={[0, 1, 0]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width="200"
          height="200"
        >
          <g fill="#fff" clipPath="url(#a)">
            <path d="M9.01 8.443a1.674 1.674 0 1 0 0-3.348 1.674 1.674 0 0 0 0 3.348Z" />
            <path d="M.132.997h17.76v.752a.475.475 0 0 1-.154.35l-1.59 1.43a1.064 1.064 0 0 1-.79.364h-1.261s-.003 1.045-.003 1.656c0 .61-.25 1.27-.25 1.27l.17.17c.183-.25.99-1.244 1.525-1.244l2.024-.011v2.583l-3.469.04v5.058c-.893-.889-1.788-1.775-2.679-2.666v-4.84c0-.72.16-1.307.307-1.95v-.002l.001-.004.001-.004a.045.045 0 0 0 .002-.014.027.027 0 0 0-.004-.013c-.018-.027-.093-.055-.165-.068-.055-.011-.108-.013-.131-.002-.385.188-.794.258-1.217.265-.798.013-1.597.013-2.395 0-.423-.007-.831-.077-1.216-.265-.054-.027-.264.022-.296.07-.008.014-.003.022 0 .035v.002c.147.643.307 1.236.307 1.95v4.84c-.891.89-1.786 1.777-2.68 2.666V8.357l-3.468-.04V5.734l2.024.01c.535 0 1.342.994 1.524 1.245l.17-.17s-.25-.66-.25-1.27l-.002-1.656H2.666c-.297 0-.583-.132-.79-.364l-1.59-1.43a.475.475 0 0 1-.154-.35V.997Z" />
            <path
              fillRule="evenodd"
              d="M44.962.639c-4 0-7.264 2.529-7.264 6.238 0 3.71 3.218 6.223 7.264 6.223s7.264-2.543 7.264-6.223c0-3.68-3.264-6.238-7.264-6.238Zm.016 2.56c2.483 0 4.275 1.64 4.275 3.678 0 2.1-1.884 3.664-4.275 3.664-2.39 0-4.32-1.534-4.32-3.664S42.495 3.2 44.977 3.2ZM23.814.884v11.957h5.73c4.17 0 6.636-2.5 6.636-6.055 0-3.236-2.021-5.902-6.803-5.902h-5.563Zm5.393 9.442c-.795 0-1.671 0-2.62.428v.003l-.32-.307c.611-2.362.595-4.8-.017-7.312l.337-.154c.795.413 1.426.413 2.084.413 1.808 0 4.552 0 4.552 3.51 0 2.928-2.024 3.419-4.016 3.419ZM65.987 6.877c0-3.71 3.264-6.238 7.264-6.238s7.264 2.558 7.264 6.238c0 3.68-3.218 6.223-7.264 6.223s-7.264-2.513-7.264-6.223Zm11.555 0c0-2.038-1.792-3.677-4.275-3.677-2.482 0-4.32 1.547-4.32 3.677s1.93 3.664 4.32 3.664c2.391 0 4.275-1.563 4.275-3.664Z"
              clipRule="evenodd"
            />
            <path d="m53.978.884 9.944.014V8.1c0 1.335 0 5.012-4.703 5.012-2.941 0-5.24-1.531-5.24-4.214V6.907l2.79-.04V8.5c0 1.135.873 2.055 2.312 2.055 1.884 0 2.038-1.243 2.038-2.07V5.383c0-.798.142-1.432.393-2.187.003-.008 0-.013-.008-.016-.062-.027-.304-.186-.364-.156-.678.35-1.407.436-2.159.436h-5.003V.884Z" />
          </g>
        </svg>
      </Html> */}
      <TextWithShader
        text="e2e toolkit
        for onchain games"
        position={[-2, 0, 0]}
        depthBuffer={depthBuffer}
      />{" "}
      {/* <TextWithShader
        text="Verifiable "
        position={[-1.5, -0.5, 0]}
        depthBuffer={depthBuffer}
      />{" "}
      <TextWithShader
        text="Worlds "
        position={[-1.5, -1, 0]}
        depthBuffer={depthBuffer}
      />{" "} */}
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      {/* <EffectComposer>
        <Bloom
          luminanceThreshold={0.4}
          luminanceSmoothing={0.2}
          height={1}
          intensity={0.01}
        />
      </EffectComposer> */}
    </mesh>
  );
}

extend({ TextGeometry });

function TextWithShader({ text, position, depthBuffer }: any) {
  const textOptions = useMemo(
    () => ({
      size: 0.2,
      height: 0.05,
    }),
    [],
  );

  const textShader = useMemo(
    () => ({
      vertexShader: `
      varying vec2 vUv;
      varying vec4 vPosition;
      void main() {
        vUv = uv;
        vPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * vPosition;
      }
    `,
      fragmentShader: `
      varying vec2 vUv;
      varying vec4 vPosition;
      uniform sampler2D globeDepthTexture;
      uniform float cameraNear;
      uniform float cameraFar;

      float readDepth(sampler2D depthSampler, vec2 coord) {
        float fragCoordZ = texture2D(depthSampler, coord).x;
        float z = fragCoordZ * 2.0 - 1.0;
        return (2.0 * cameraNear * cameraFar) / (cameraFar + cameraNear - z * (cameraFar - cameraNear));
      }

      void main() {
        float globeDepth = readDepth(globeDepthTexture, vUv);
        float textDepth = vPosition.z / vPosition.w;
        vec3 textColor = textDepth < globeDepth ? vec3(1.0, 1.0, 1.0) : vec3(0.0, 0.0, 0.0); // White if in front, Black if behind
        gl_FragColor = vec4(textColor, 1.0);
      }
    `,
      uniforms: {
        globeDepthTexture: { value: depthBuffer },
        cameraNear: { value: 10 }, // Adjust based on your camera settings
        cameraFar: { value: 10 }, // Adjust based on your camera settings
      },
    }),
    [depthBuffer],
  );

  return (
    <Center>
      <Text3D
        position={position}
        lineHeight={0.5}
        letterSpacing={0.01}
        font={"./Agrandir-Heavy_Regular.json"}
        {...textOptions}
        renderOrder={1} // Ensure text is rendered after the globe
      >
        {text}
        <shaderMaterial
          args={[textShader]}
          depthTest={false} // Disable depth testing for the text material
        />
      </Text3D>
    </Center>
  );
}

export function GlobeLines() {
  const GLOBE_RADIUS = 1.501; // Define the radius of the globe
  const GRID_COLOR = "purple"; // Define the grid color
  const LINE_THICKNESS = 0.01;
  const HAG = 0.01; // Slight distance above globe that longitude/latitude lines are drawn.
  const PI = Math.PI;
  const cos = Math.cos;
  const sin = Math.sin;

  const longitudeLines = useMemo(() => {
    const lines = [];
    for (let n = 0; n < 24; ++n) {
      const rotationY = (n * PI) / 12;
      lines.push(
        <Cylinder
          key={`longitude-${n}`}
          args={[
            GLOBE_RADIUS + HAG,
            GLOBE_RADIUS + HAG,
            LINE_THICKNESS,
            50,
            1,
            true,
          ]}
          position={[0, -LINE_THICKNESS / 2, 0]}
          rotation={[PI / 2, rotationY, 0]}
          material={new THREE.MeshBasicMaterial({ color: GRID_COLOR })}
        />,
      );
    }
    return lines;
  }, []);

  const latitudeLines = useMemo(() => {
    const lines = [];
    for (let n = 1; n < 12; ++n) {
      const lat = ((n - 6) * PI) / 12;
      const r = GLOBE_RADIUS * cos(lat);
      const y = GLOBE_RADIUS * sin(lat);
      const r1 = r - (LINE_THICKNESS * sin(lat)) / 2;
      const r2 = r + (LINE_THICKNESS * sin(lat)) / 2;
      lines.push(
        <Cylinder
          key={`latitude-${n}`}
          args={[r1 + HAG, r2 + HAG, cos(lat) * LINE_THICKNESS, 50, 8, true]}
          position={[0, (-cos(lat) * LINE_THICKNESS) / 2 + y, 0]}
          material={new THREE.MeshBasicMaterial({ color: GRID_COLOR })}
        />,
      );
    }
    return lines;
  }, []);

  return (
    <>
      {longitudeLines}
      {latitudeLines}
    </>
  );
}
