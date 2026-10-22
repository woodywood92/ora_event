import { useEffect, useRef, useState } from "react";

// Ajoute une classe "in" quand l'élément entre dans le viewport (fade + translate en CSS via Tailwind)
export function useReveal() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.unobserve(el);
        }
      },
        { threshold: 0.05, rootMargin: "0px 0px -5% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return [ref, inView];
}

// Anime un nombre de 0 jusqu'à `target` quand l'élément devient visible
export function useCountUp(target, duration = 1200) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const t0 = performance.now();
          function step(t) {
            const p = Math.min((t - t0) / duration, 1);
            setValue(Math.floor(p * target));
            if (p < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
          io.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return [ref, value];
}
