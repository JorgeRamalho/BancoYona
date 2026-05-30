"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type ParallaxGroupProps = {
  children: ReactNode;
  className?: string;
  intensity?: number;
};

export function ParallaxGroup({
  children,
  className = "",
  intensity = 18,
}: ParallaxGroupProps) {
  const groupRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  function handleMove(event: MouseEvent<HTMLDivElement>) {
    if (reducedMotion) return;

    const node = groupRef.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    node.style.setProperty("--px", `${x * intensity}px`);
    node.style.setProperty("--py", `${y * intensity}px`);
  }

  function handleLeave() {
    const node = groupRef.current;
    if (!node) return;

    node.style.setProperty("--px", "0px");
    node.style.setProperty("--py", "0px");
  }

  return (
    <div
      ref={groupRef}
      className={`parallax-group ${className}`.trim()}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  );
}
