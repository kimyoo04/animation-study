"use client";

import { Canvas } from "@react-three/fiber";

export default function easy() {
  return (
    <Canvas>
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <sphereGeometry />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </Canvas>
  );
}
