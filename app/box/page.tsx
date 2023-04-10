"use client";

import { Canvas } from "@react-three/fiber";

export default function cube() {
  return (
    <Canvas>
      <ambientLight intensity={0.2} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </Canvas>
  );
}
