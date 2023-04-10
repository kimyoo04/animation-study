"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function cube() {
  return (
    <Canvas>
      <pointLight position={[10, 10, 10]} />

      <mesh position={[2, 2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="hotpink" />
        <OrbitControls />
      </mesh>
    </Canvas>
  );
}
