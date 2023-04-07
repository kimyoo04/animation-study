"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function SideBar() {
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  // gsap sidebar 애니메이션
  useEffect(() => {
    if (!tweenRef.current) {
      tweenRef.current = gsap.to(".nav", {
        duration: 0.5,
        x: 30,
        ease: "power2.inOut",
      });
    } else {
      tweenRef.current.restart();
    }
  }, []);

  return (
    <nav className="fixed h-screen p-8 text-lg nav">
      <ul className="flex flex-col justify-start gap-4 overflow-scroll">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/sphere">Sphere</Link>
        </li>
      </ul>
    </nav>
  );
}
