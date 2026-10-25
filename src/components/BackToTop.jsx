import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import '../ressources/BackToTop.css';

const CIRC = 2 * Math.PI * 23;

export default function BackToTop() {
	const [visible, setVisible] = useState(false);
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const onScroll = () => {
			const max = document.documentElement.scrollHeight - window.innerHeight;
			setProgress(max > 0 ? window.scrollY / max : 0);
			setVisible(window.scrollY > window.innerHeight * 0.6);
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll);
		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
		};
	}, []);

	const toTop = () => {
		const reduce = window.matchMedia(
			'(prefers-reduced-motion: reduce)',
		).matches;
		window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
	};

	return (
		<button
			type="button"
			className={`btt ${visible ? 'btt--on' : ''}`}
			onClick={toTop}
			aria-label="Retour en haut"
		>
			<svg className="btt-ring" viewBox="0 0 50 50" aria-hidden="true">
				<circle cx="25" cy="25" r="23" className="btt-ring__bg" />
				<circle
					cx="25"
					cy="25"
					r="23"
					className="btt-ring__fg"
					style={{
						strokeDasharray: CIRC,
						strokeDashoffset: CIRC * (1 - progress),
					}}
				/>
			</svg>
			<ArrowUp size={18} />
		</button>
	);
}
