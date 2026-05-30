"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
};

export function TiltCard({ children, className = "" }: TiltCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  function handleMove(event: MouseEvent<HTMLElement>) {
    if (reducedMotion) return;

    const node = cardRef.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    node.style.setProperty("--tilt-x", `${y * -8}deg`);
    node.style.setProperty("--tilt-y", `${x * 8}deg`);
    node.style.setProperty("--lift", "1");
  }

  function handleLeave() {
    const node = cardRef.current;
    if (!node) return;

    node.style.setProperty("--tilt-x", "0deg");
    node.style.setProperty("--tilt-y", "0deg");
    node.style.setProperty("--lift", "0");
  }

  return (
    <article
      ref={cardRef}
      className={`tilt-card ${className}`.trim()}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <span className="tilt-card-shine" aria-hidden="true" />
      {children}
    </article>
  );
}
