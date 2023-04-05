"use client";

import * as THREE from "three";
import { useEffect, useRef } from "react";

export default function Sphere(): JSX.Element {
  const sphereRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scene, camera, renderer를 생성합니다.
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    sphereRef.current?.appendChild(renderer.domElement);

    // Sphere를 생성합니다.
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      wireframe: true,
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // 카메라를 설정합니다.
    camera.position.z = 5;

    // 애니메이션 루프를 생성합니다.
    function animate() {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();
  }, []);

  return <div ref={sphereRef} />;
}
