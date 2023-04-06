"use client";

import * as THREE from "three";
import { useEffect, useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function Sphere(): JSX.Element {
  const sphereRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderer = new THREE.WebGLRenderer();
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75, // 시야각도
      window.innerWidth / window.innerHeight, // aspect
      0.1, // near: 최소 z
      100 // far: 최대 z
    );
    const light = new THREE.PointLight(0xffffff, 1, 100);
    const geometry = new THREE.SphereGeometry(1, 64, 64); // 반지름, 폭세그먼트 수, 높이세그먼트 수
    const material = new THREE.MeshStandardMaterial({ color: "#d3de0b" });
    const Mesh = new THREE.Mesh(geometry, material);

    renderer.setPixelRatio(2);

    camera.position.z = 4; // 카메라 깊이
    light.position.set(0, 10, 10); // x, y, z

    scene.add(camera);
    scene.add(light);
    scene.add(Mesh);

    function handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;

      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    sphereRef.current?.appendChild(renderer.domElement); // div 태그에 할당

    let controls: OrbitControls;

    if (sphereRef.current !== null) {
      controls = new OrbitControls(camera, sphereRef.current);
      controls.enableDamping = true;
      controls.enablePan = false;
      controls.enableZoom = false;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 5;
    }

    // 애니메이션 루프를 생성
    function animate() {
      controls && controls.update();
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();

    // 컴포넌트 언마운트 시 이벤트 제거
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <div ref={sphereRef} />;
}

// geometry > material > Mesh(geometry, material) > scene.add(mesh)
// > WebGLRenderer > renderer.setSize() > renderer.render(scene, camera)
