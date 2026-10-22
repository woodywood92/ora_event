import React, { useEffect, useRef, useState } from "react";

export default function Count({ to, suffix = "", duration = 1600 }) {
    const ref = useRef(null);
    const [value, setValue] = useState(0);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        let raf = 0;

        const run = () => {
            cancelAnimationFrame(raf);
            let start = null;
            const step = (t) => {
                if (start === null) start = t;
                const p = Math.min((t - start) / duration, 1);
                setValue(Math.floor(p * to));
                if (p < 1) raf = requestAnimationFrame(step);
            };
            raf = requestAnimationFrame(step);
        };

        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) run();
                else {
                    cancelAnimationFrame(raf);
                    setValue(0);
                }
            },
            { threshold: 0.5 }
        );
        io.observe(el);
        return () => {
            io.disconnect();
            cancelAnimationFrame(raf);
        };
    }, [to, duration]);

    return (
        <span ref={ref}>
			{value.toLocaleString("fr-FR")}
            {suffix}
		</span>
    );
}