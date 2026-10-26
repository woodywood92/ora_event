import React, { useEffect, useRef, useState } from "react";
import quoteBg from "../ressources/images/Facade/shoootin-photo-71.webp";
import "../ressources/Quote.css";

const isReduced = () =>
	typeof window !== "undefined" &&
	window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function QuoteBand({ t }) {
	const sectionRef = useRef(null);
	const textRef = useRef(null);
	const wordRefs = useRef([]);
	const [p, setP] = useState(0); // progression de la section, 0 → 1
	const [geo, setGeo] = useState([]); // position de chaque mot
	const reduce = isReduced();
	const words = t.quote.text.split(" ");

	useEffect(() => {
		if (reduce) return;

		let raf = 0;
		const onScroll = () => {
			cancelAnimationFrame(raf);
			raf = requestAnimationFrame(() => {
				const el = sectionRef.current;
				if (!el) return;
				const total = el.offsetHeight - window.innerHeight;
				setP(Math.min(Math.max(-el.getBoundingClientRect().top / total, 0), 1));
			});
		};
		const measure = () => {
			setGeo(
				wordRefs.current.map((w) =>
					w ? { x: w.offsetLeft, y: w.offsetTop, w: w.offsetWidth, h: w.offsetHeight } : null
				)
			);
		};
		const onResize = () => {
			onScroll();
			measure();
		};

		onScroll();
		measure();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onResize);
		window.addEventListener("load", measure);
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onResize);
			window.removeEventListener("load", measure);
		};
	}, [reduce]);

	// Écriture : 0 → 70 % du scroll, puis le trait et l'auteur apparaissent
	const write = reduce ? 1 : Math.min(p / 0.7, 1);
	const pos = write * words.length;
	const active = Math.min(Math.floor(pos), words.length - 1);
	const activeFrac = reduce ? 0 : Math.min(Math.max(pos - active, 0), 1);
	const draw = reduce ? 1 : Math.min(Math.max((p - 0.6) / 0.3, 0), 1);
	const by = reduce ? 1 : Math.min(Math.max((p - 0.72) / 0.18, 0), 1);
	const showNib = !reduce && p < 0.7 && geo[active];

	// Parallaxe : le fond ralentit, l'ornement monte plus vite, le texte se soulève doucement
	const bgY = reduce ? 0 : p * 90;
	const ornY = reduce ? 0 : p * -160;
	const textY = reduce ? 0 : (0.5 - p) * 60;

	const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
	const pinHeight = reduce ? "auto" : isMobile ? "240vh" : "300vh";

	return (
		<section ref={sectionRef} className="quote" style={{ height: pinHeight }}>
			<div className="quote__sticky">
				<img
					className="quote__bg"
					src={quoteBg}
					alt=""
					style={{ transform: `translate3d(0, ${bgY}px, 0) scale(1.18)` }}
				/>
				<div className="quote__veil" />

				<div className="quote__orn" aria-hidden="true" style={{ transform: `translate3d(0, ${ornY}px, 0)` }}>
					<span>“</span>
				</div>

				<div className="quote__inner" style={{ transform: `translate3d(0, ${textY}px, 0)` }}>
					<blockquote ref={textRef} className="quote__text" aria-label={t.quote.text}>
						<span className="quote__ghost" aria-hidden="true">
							{t.quote.text}
						</span>

						{words.map((w, i) => {
							const prog = reduce ? 1 : Math.min(Math.max(pos - i, 0), 1);
							return (
								<React.Fragment key={i}>
									<span
										ref={(el) => (wordRefs.current[i] = el)}
										className="quote__word"
										style={{
											clipPath: `inset(0 ${(1 - prog) * 100}% 0 0)`,
											transform: `translate3d(0, ${(1 - prog) * 0.15}em, 0)`,
											opacity: prog > 0 ? 1 : 0,
										}}
									>
										{w}
									</span>
									{i < words.length - 1 && " "}
								</React.Fragment>
							);
						})}

						{showNib && (
							<span
								className="quote__nib"
								style={{
									left: geo[active].x + geo[active].w * activeFrac,
									top: geo[active].y + geo[active].h * 0.82,
								}}
							/>
						)}
					</blockquote>

					<div
						className="quote__foot"
						style={{
							opacity: by,
							transform: `translate3d(0, ${(1 - by) * 20}px, 0)`,
						}}
					>
						<svg className="quote__flourish" viewBox="0 0 300 40" aria-hidden="true">
							<path
								pathLength="1"
								d="M10 25 C 80 5, 140 40, 200 18 S 280 10, 292 26"
								style={{ strokeDashoffset: 1 - draw }}
							/>
						</svg>
						<p className="quote__by">{t.quote.by}</p>
					</div>
				</div>
			</div>
		</section>
	);
}