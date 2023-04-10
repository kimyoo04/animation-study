"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

function RhinoModel() {
  let model = useLoader(OBJLoader, "/models/site_contour.obj");
  return <>{model ? <primitive object={model} /> : <boxGeometry />}</>;
}

export default function Obj() {
  return (
    <div className="w-screen h-screen">
      <Canvas camera={{ position: [150, 50, 0] }}>
        <ambientLight intensity={0.7} />
        <spotLight intensity={15} position={[600, 100, -600]} />
        <RhinoModel />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
