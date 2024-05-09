"use client";

import { Lines } from "./Lines";
import { useMemo, useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useMenuStore } from "../Navigation";
import { Text } from "../../components/Text";
import { Button } from "@/components/Button";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { Bloom, EffectComposer, Pixelation } from "@react-three/postprocessing";
import { Html, Cylinder, Stars } from "@react-three/drei";
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
    <>
      <div
        className="relative flex h-[200vh] items-start justify-center px-8 sm:h-[120vh] sm:px-0"
        ref={wrapper}
      >
        <div className=" sticky top-48 flex h-screen w-full max-w-[1400px] flex-col items-center justify-between gap-20 sm:top-0 sm:flex-row">
          <div className="flex flex-col items-start gap-10">
            <Text textStyle="headline1" className="text-text-white">
              Let&#8217;s build <br /> provable worlds.
            </Text>
            <p>Build worlds and games.</p>
            <Button>Ohayo</Button>
          </div>

          <Lines scrollProgress={scrollYProgress} />
        </div>
      </div>
      <div className="z-1 pointer-events-none absolute -right-32 top-72 flex  h-[150vh] w-screen justify-end sm:right-0 sm:top-0 sm:h-[200vh]">
        <div className="w-full ">
          <Canvas className="">
            <ambientLight intensity={0.1} />
            <directionalLight color="red" position={[0, 0, 5]} />
            <SpinningMesh />
          </Canvas>
        </div>
      </div>
    </>
  );
}

extend({ EffectComposer, Bloom });

function SpinningMesh() {
  const ref = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.LineSegments>(null);
  const targetScale = useRef(1.0); // Target scale
  const currentScale = useRef(1.0); // Current scale
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

  return (
    <mesh position={[1, 0, 0]}>
      {/* <Html
        as="div" // Wrapping element (default: 'div')
        position={[-0.1, 1.8, 0.2]} // Position in 3D space
      >
        {" "}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="">
          <path
            fill="#fff"
            d="M32.406 15.586c.498 0 .984-.214 1.344-.593l2.814-2.196a.832.832 0 0 0 .316-.65V10.64l-31.35-.095v1.332c0 .24.1.46.271.618l2.808 2.518c.366.41.871.644 1.395.644h2.227v5.048l-1.16-1.186a1.938 1.938 0 0 0-1.389-.587l-3.578-.019v4.556l6.121.07v8.922l1.073-1.066 3.47-3.458.184-.183v-8.544c-.026-.31-.05-.619-.089-.928-.038-.334-.1-.675-.145-1.01-.076-.51-.19-1.01-.303-1.508 0-.025-.012-.038 0-.063.057-.082.43-.17.524-.126.562.271 1.155.429 1.786.454.183.007.366.013.549.013l4.77-.013a4.55 4.55 0 0 0 1.774-.454c.094-.044.467.044.523.126.013.019 0 .038 0 .063a20.655 20.655 0 0 0-.303 1.508c-.05.335-.107.67-.145 1.01-.044.353-.069.713-.1 1.066v8.336l4.562 4.771v-8.923l6.443-.07v-4.555l-4.24.019a1.96 1.96 0 0 0-1.39.587l-.813.832v-4.751h2.05v-.007Z"
          />
          <path
            fill="#fff"
            d="M21.205 24.296a2.902 2.902 0 1 0 0-5.804 2.902 2.902 0 0 0 0 5.804Z"
          />
        </svg>
      </Html>
      <Html
        as="div" // Wrapping element (default: 'div')
        position={[-0.1, -1.6, 0.2]} // Position in 3D space
      >
        {" "}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none">
          <path
            fill="#fff"
            d="M16.719 14.26.285.316h9.79c1.642 0 3.231.533 4.483 1.503l10.92 8.466-4.273 3.9c-1.23 1.123-3.212 1.156-4.486.075ZM25.764 10.024 21.978 7.03c-1.267-1.002-1.277-2.792-.022-3.806L25.764.15v9.876ZM16.145 14.354l-3.68-3.176v10.544l3.644-3.05c1.383-1.157 1.4-3.142.036-4.319ZM26.133.065v3.154c0 1.848 1.64 3.346 3.665 3.346h3.456l-7.12-6.5Z"
          />
        </svg>
      </Html>
      <Html
        as="div" // Wrapping element (default: 'div')
        position={[-1.8, 0, 0.2]} // Position in 3D space
      >
        {" "}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none">
          <path
            fill="#fff"
            d="M6.324 5.242 10.092.1c.32.44.73.846 1.22 1.205 1.3.95 3.063 1.484 4.9 1.484 1.84 0 3.602-.534 4.902-1.484A7.094 7.094 0 0 0 22.34.099l3.612 5.246c-2.622 1.79-6.076 2.796-9.675 2.808h11.094c.398 0 .77.182.992.484l3.593 4.903H.42l3.42-4.884c.219-.313.598-.503 1.006-.503h11.302c-3.667-.012-7.184-1.056-9.824-2.91ZM6.812 17.134v6.373h5.972V14.17c-4.75.002-5.784 1.632-5.972 2.964ZM25.925 17.14c-.185-1.332-1.214-2.968-5.972-2.97v9.336h5.972v-6.365Z"
          />
        </svg>
      </Html>
      <Html
        as="div" // Wrapping element (default: 'div')
        position={[1.65, 0, 0]} // Position in 3D space
      >
        {" "}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none">
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M20.986 22.48c-2.379 2.197-5.796 3.174-9.123 2.608L2.361 23.47.389 14.823c-.674-3.028.342-6.163 2.71-8.37l3.05-2.839c2.38-2.197 5.798-3.173 9.124-2.607l9.503 1.618 1.972 8.647c.673 3.028-.343 6.163-2.712 8.369l-3.05 2.84ZM4.703 5.1l14.612 2.614 3.12 13.281-14.612-2.614L4.702 5.1Z"
            clipRule="evenodd"
          />
          <path
            fill="#fff"
            d="M13.588 16.293c-1.94 0-3.513-1.436-3.513-3.208 0-1.771 1.573-3.207 3.513-3.207s3.513 1.436 3.513 3.207c0 1.772-1.573 3.208-3.513 3.208Z"
          />
        </svg>
      </Html> */}
      <mesh
        ref={ref}
        onPointerOver={(e) => onHover(e, true)}
        onPointerOut={(e) => onHover(e, false)}
      >
        <sphereGeometry args={[1.5, 32, 32]} />
        <shaderMaterial args={[gradientShader]} />
      </mesh>
      {/* <GlobeLines /> */}
      <lineSegments ref={wireframeRef}>
        <wireframeGeometry args={[new THREE.SphereGeometry(1.53, 20, 20)]} />
        <lineBasicMaterial color="#FBCB4A" />
      </lineSegments>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <EffectComposer>
        <Bloom
          luminanceThreshold={0.4}
          luminanceSmoothing={0.2}
          height={100}
          intensity={0.5}
        />
      </EffectComposer>
    </mesh>
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
