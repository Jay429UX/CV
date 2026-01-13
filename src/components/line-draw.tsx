"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface LineDrawProps {
  className?: string;
}

export function LineDraw({ className }: LineDrawProps) {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;

    // Set initial state - line starts from center, width 0
    gsap.set(line, {
      scaleX: 0,
    });

    // Animate on scroll
    const trigger = ScrollTrigger.create({
      trigger: line,
      start: "top 90%",
      onEnter: () => {
        gsap.to(line, {
          scaleX: 1,
          duration: 0.8,
          ease: "power2.out",
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div ref={lineRef} className={className}>
      <span className="separator-notched-right" />
    </div>
  );
}
