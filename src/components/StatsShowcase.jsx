import React, { useEffect, useRef, useState } from 'react';
import { Building2, Users, MapPin } from 'lucide-react';
import Count from './Count';
import logo12 from '../ressources/public/ligne-12.png';
import logo6 from '../ressources/public/ligne-6.png';

export function StatsParallax({ t }) {
	const ref = useRef(null);
	const trackRefs = useRef([]);
	const [p, setP] = useState(0);
	const [travel, setTravel] = useState([0, 0, 0]);

	const rows = [
		{
			Icon: Building2,
			value: <Count to={2000} suffix=" m²" />,
			label: t.stats.m2,
			dir: -1,
		},
		{
			Icon: Users,
			value: <Count to={1200} suffix={` ${t.stats.pers}`} />,
			label: t.stats.cap,
			dir: 1,
		},
		{
			Icon: MapPin,
			value: 'Paris 15ᵉ',
			label: t.stats.metro,
			dir: -1,
			logos: [logo12, logo6],
		},
	];

	useEffect(() => {
		const update = () => {
			const el = ref.current;
			if (!el) return;

			// Largeur réelle de l'écran (sans barre de défilement)
			const vw = document.documentElement.clientWidth;

			// Distance à parcourir : la ligne doit sortir complètement de l'écran des deux côtés
			setTravel(
				trackRefs.current.map(
					(track) => (vw + (track ? track.offsetWidth : 0)) / 2,
				),
			);

			const r = el.getBoundingClientRect();
			const vh = window.innerHeight;
			setP(Math.min(Math.max((vh - r.top) / (vh + r.height), 0), 1));
		};

		update();
		window.addEventListener('scroll', update, { passive: true });
		window.addEventListener('resize', update);
		window.addEventListener('orientationchange', update);
		return () => {
			window.removeEventListener('scroll', update);
			window.removeEventListener('resize', update);
			window.removeEventListener('orientationchange', update);
		};
	}, []);

	return (
		<section ref={ref} className="sp">
			{rows.map((row, i) => {
				const { Icon } = row;
				const x = (p - 0.5) * 2 * (travel[i] || 0) * row.dir;
				return (
					<div key={i} className="sp-row">
						<div
							ref={(el) => (trackRefs.current[i] = el)}
							className="sp-track"
							style={{ transform: `translateX(${x}px)` }}
						>
							<span className="sp-value">{row.value}</span>
							<span className="sp-icon">
								{row.img ? <img src={row.img} alt="" /> : <Icon />}
							</span>
						</div>
						<p className="sp-label">
							{row.label}
							{row.logos && (
								<span className="sp-logos">
									{row.logos.map((src) => (
										<span key={src} className="ml-logo-box sp-logo">
											<img src={src} alt="" />
										</span>
									))}
								</span>
							)}
						</p>
					</div>
				);
			})}
		</section>
	);
}
