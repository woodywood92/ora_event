import { useEffect, useRef, useState } from "react";

// Renvoie un décalage vertical selon la position de l'élément dans la fenêtre
export function useParallax(speed = 0.15) {
    const ref = useRef(null);
    const [y, setY] = useState(0);

    useEffect(() => {
        let raf = 0;
        const update = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                const el = ref.current;
                if (!el) return;
                const r = el.getBoundingClientRect();
                const center = r.top + r.height / 2 - window.innerHeight / 2;
                setY(-center * speed);
            });
        };
        update();
        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, [speed]);

    return [ref, y];
}