"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export default function SideBar() {
  const app = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>();

  // 클릭시 애니메이션 실행
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    gsap.to(e.target, { rotation: "50", yoyo: true, repeat: 1 });
  };

  useLayoutEffect(() => {
    // context는 wrapper 역할
    let ctx = gsap.context(() => {
      tl.current = gsap
        .timeline() // 순서대로 1개씩 애니메이션 실행
        .fromTo(".nav", { x: -200 }, { opacity: 1, x: 0 }); // 해당 클래스에 애니메이션 설정
    }, app);

    return () => ctx.revert();
  }, [app]);

  return (
    <div ref={app} className="z-10 ">
      <nav className="fixed top-0 left-0 h-screen p-8 text-lg opacity-0 nav">
        <ul className="flex flex-col justify-start gap-4 overflow-scroll">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/sphere">Sphere</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
