import React, { useEffect, useState } from 'react';
import { useReveal } from '../useReveal';
import logo12 from '../ressources/public/ligne-12.png';
import logo6 from '../ressources/public/ligne-6.png';
import '../ressources/MetroLine.css';

const CYCLE = 8000; // durée d'un passage complet (ms)
const TRAVEL = 6000; // durée du trajet de la rame (ms), le reste est une pause

// Ligne 12 : ordre autour du Carré (à vérifier sur le plan officiel)
const LINE12 = [
	{ name: 'Montparnasse - Bienvenüe' },
	{ name: 'Falguière' },
	{ name: 'Pasteur' },
	{ name: 'Volontaires' },
	{ name: 'Vaugirard', home: true },
];

// Ligne 6 : ordre autour de Pasteur (à vérifier sur le plan officiel)
const LINE6 = [
	{ name: "Cambronne" },
	{ name: "Sèvres–Lecourbe" },
	{ name: "Pasteur", home: true},
	{ name: "Montparnasse" },
	{ name: "Edgar Quinet" },
];

// Allume les stations une à une, en boucle
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

// Une ligne : trait, rame, points et noms de stations
function Rail({ stations, num, line, animated, active }) {
	const lit = useLitLoop(animated && active, stations.length);
	const litCount = animated ? lit : stations.length;

	return (
		<div className="ml-rail" style={{ "--n": stations.length, "--line": line }}>
			<span className="ml-track">
				<span className="ml-fill" />
			</span>
			<span className="ml-train">{num}</span>

			<div className="ml-dots">
				{stations.map((s, i) => (
					<span key={s.name} className="ml-dot-wrap">
						<span
							className={`ml-dot ${s.home ? "ml-dot--home" : ""} ${i < litCount ? "ml-dot--on" : ""}`}
						/>
					</span>
				))}
			</div>

			<div className="ml-labels">
				{stations.map((s, i) => (
					<span
						key={s.name}
						className={`ml-name ${s.home ? "ml-name--home" : ""} ${i < litCount ? "ml-name--on" : ""}`}
					>
						{s.name}
					</span>
				))}
			</div>
		</div>
	);
}

// variant="animated" : rames qui roulent en boucle | variant="static" : infographie fixe
export default function MetroLine({ t, variant = "animated" }) {
	const [ref, inView] = useReveal();
	const m = t.metro;
	const reduce =
		typeof window !== "undefined" &&
		window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	const animated = variant === "animated" && !reduce;

	return (
		<div
			ref={ref}
			className={`ml ${animated ? "ml--animated" : "ml--static"} ${inView ? "ml--in" : ""}`}
		>
			<p className="ml-title">{m.title}</p>

			<div className="ml-line">
				<span className="ml-logo-box">
					<img src={logo12} alt="Ligne 12" />
				</span>
				<div className="ml-body">
					<Rail stations={LINE12} num="12" line="#007852" animated={animated} active={inView} />
					<p className="ml-desc">{m.l12Desc}</p>
				</div>
			</div>

			<div className="ml-line">
				<span className="ml-logo-box ml-logo-box--l6">
					<img src={logo6} alt="Ligne 6" />
				</span>
				<div className="ml-body">
					<Rail stations={LINE6} num="6" line="#6ECA97" animated={animated} active={inView} />
					<p className="ml-desc">{m.l6Desc}</p>
				</div>
			</div>
		</div>
	);
}