import React from "react";
import { useReveal } from "../useReveal";
import "../ressources/Motion.css";

export default function Reveal({ children, className = "", variant = "up", delay = 0 }) {
  const [ref, inView] = useReveal();
  return (
      <div
          ref={ref}
          className={`reveal reveal--${variant} ${inView ? "reveal--in" : ""} ${className}`}
          style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
  );
}