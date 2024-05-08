import { Canvas } from "@react-three/fiber";

export function Globe() {
  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <mesh>
        <sphereGeometry args={[4]} />
        <meshStandardMaterial />
      </mesh>
    </Canvas>
  );
}
