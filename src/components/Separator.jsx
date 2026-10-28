import React from "react";
import { useReveal } from "../useReveal";
import "../ressources/Separator.css";

export default function Separator() {
    const [ref, inView] = useReveal();

    return (
        <div ref={ref} className={`sep ${inView ? "sep--in" : ""}`} aria-hidden="true">
            <svg className="sep-flourish" viewBox="0 0 300 40" preserveAspectRatio="xMidYMid meet">
                <path
                    pathLength="1"
                    d="M10 25 C 80 5, 140 40, 200 18 S 280 10, 292 26"
                />
            </svg>
        </div>
    );
}