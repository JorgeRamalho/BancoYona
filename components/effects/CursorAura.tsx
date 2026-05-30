"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function CursorAura() {
  const reducedMotion = useReducedMotion();
  const [position, setPosition] = useState({ x: -200, y: -200 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;

    const finePointer = window.matchMedia("(pointer: fine)");
    if (!finePointer.matches) return;

    const onMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setActive(true);
    };

    const onLeave = () => setActive(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div
      className={`cursor-aura${active ? " is-active" : ""}`}
      aria-hidden="true"
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    />
  );
}
