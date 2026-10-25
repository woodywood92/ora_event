import React, { useEffect, useState } from 'react';
import { useReveal } from '../useReveal';
import logo12 from '../ressources/public/ligne-12.png';
import logo6 from '../ressources/public/ligne-6.png';
import '../ressources/MetroLine.css';

const CYCLE = 8000; // durée d'un passage complet (ms)
const TRAVEL = 6000; // durée du trajet de la rame (ms), le reste est une pause

// Ligne 12 : ordre autour du Carré (à vérifier sur le plan officiel)
const LINE12 = [
	{ name: 'Falguière' },
	{ name: 'Pasteur' },
	{ name: 'Volontaires' },
	{ name: 'Vaugirard', home: true },
	{ name: 'Convention' },
];

// Allume les stations une à une, et recommence à chaque cycle
function useLitLoop(active, n) {
	const [lit, setLit] = useState(0);

	useEffect(() => {
		if (!active) return;
		let timers = [];

		const run = () => {
			timers.forEach(clearTimeout);
			timers = [];
			setLit(0);
			for (let i = 0; i < n; i++) {
				timers.push(setTimeout(() => setLit(i + 1), (i / (n - 1)) * TRAVEL));
			}
		};

		run();
		const id = setInterval(run, CYCLE);
		return () => {
			clearInterval(id);
			timers.forEach(clearTimeout);
		};
	}, [active, n]);

	return lit;
}

function Rail({ stations, lit }) {
	return (
		<div className="ml-rail" style={{ '--n': stations.length }}>
			<span className="ml-track">
				<span className="ml-fill" />
			</span>
			<span className="ml-train">12</span>

			<div className="ml-dots">
				{stations.map((s, i) => (
					<span key={s.name} className="ml-dot-wrap">
						<span
							className={`ml-dot ${s.home ? 'ml-dot--home' : ''} ${i < lit ? 'ml-dot--on' : ''}`}
						/>
					</span>
				))}
			</div>

			<div className="ml-labels">
				{stations.map((s, i) => (
					<span
						key={s.name}
						className={`ml-name ${s.home ? 'ml-name--home' : ''} ${i < lit ? 'ml-name--on' : ''}`}
					>
						{s.name}
					</span>
				))}
			</div>
		</div>
	);
}

// variant="animated" : rame qui roule en boucle | variant="static" : infographie fixe
export default function MetroLine({ t, variant = 'animated' }) {
	const [ref, inView] = useReveal();
	const m = t.metro;
	const reduce =
		typeof window !== 'undefined' &&
		window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	const animated = variant === 'animated' && !reduce;
	const lit = useLitLoop(animated && inView, LINE12.length);
	const litCount = animated ? lit : LINE12.length;

	return (
		<div
			ref={ref}
			className={`ml ${animated ? 'ml--animated' : 'ml--static'} ${inView ? 'ml--in' : ''}`}
		>
			<div className="ml-line">
				<span className="ml-logo-box">
					<img src={logo12} alt="Ligne 12" />
				</span>
				<div className="ml-body">
					<p className="ml-title">{m.title}</p>
					<Rail stations={LINE12} lit={litCount} />
					<p className="ml-desc">{m.l12Desc}</p>
				</div>
			</div>

			<div className="ml-near">
				<span className="ml-logo-box">
					<img src={logo6} alt="Ligne 6" />
				</span>{' '}
				<p className="ml-desc">{m.l6Desc}</p>
			</div>
		</div>
	);
}
