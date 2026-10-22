import React, { useEffect, useRef, useState } from "react";
import { Building2, Users, MapPin } from "lucide-react";
import Count from "./Count";

// Option 2 : chiffres géants qui glissent en sens inverse au scroll
export function StatsParallax({ t }) {
    const ref = useRef(null);
    const [p, setP] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const el = ref.current;
            if (!el) return;
            const r = el.getBoundingClientRect();
            const vh = window.innerHeight;
            setP(Math.min(Math.max((vh - r.top) / (vh + r.height), 0), 1));
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);

    const rows = [
        { Icon: Building2, value: <Count to={2000} suffix=" m²" />, label: t.stats.m2, dir: -1 },
        { Icon: Users, value: <Count to={500} suffix={` ${t.stats.pers}`} />, label: t.stats.cap, dir: 1 },
        { Icon: MapPin, value: "Paris 15ᵉ", label: t.stats.metro, dir: -1 },
    ];

    return (
        <section ref={ref} className="sp">
            {rows.map((row, i) => {
                const x = (p - 0.5) * 1000 * row.dir;
                const { Icon } = row;
                return (
                    <div key={i} className="sp-row">
                        <div className="sp-track" style={{ transform: `translateX(${x}px)` }}>
                            <span className="sp-value">{row.value}</span>
                            <span className="sp-icon"><Icon size={56} /></span>
                        </div>
                        <p className="sp-label">{row.label}</p>
                    </div>
                );
            })}
        </section>
    );
}