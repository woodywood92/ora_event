import React, { useEffect, useState } from "react";
import quoteBg from "../ressources/images/Facade/shoootin-photo-71.webp";
import "../ressources/Quote.css";

const CYCLE_MS = 9000; // durée d'un cycle complet (écriture, pause, fondu)

export default function QuoteBand({ t }) {
	const [cycle, setCycle] = useState(0);
	const words = t.quote.text.split(" ");

	useEffect(() => {
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (reduce) return;
		const id = setInterval(() => setCycle((c) => c + 1), CYCLE_MS);
		return () => clearInterval(id);
	}, []);

	return (
		<section className="quote" style={{ backgroundImage: `url(${quoteBg})` }}>
			<div className="quote__veil">
				{/* La clé change à chaque cycle : tout est remonté et l'animation repart */}
				<div key={cycle} className="quote__content">
					<blockquote className="quote__text" aria-label={t.quote.text}>
						{words.map((w, i) => (
							<React.Fragment key={i}>
								{i > 0 && " "}
								<span
									className="quote__word"
									style={{ animationDelay: `${i * 0.35}s` }}
									aria-hidden="true"
								>
									{w}
								</span>
							</React.Fragment>
						))}
					</blockquote>

					<div className="quote__foot">
						<svg className="quote__flourish" viewBox="0 0 64 64" aria-hidden="true">
							<defs>
								<linearGradient id="quoteGrad" x1="0" y1="0" x2="1" y2="0">
									<stop offset="0" stopColor="#6E4423"/>
									<stop offset="0.5" stopColor="#A66B36"/>
									<stop offset="1" stopColor="#D9A46B"/>
								</linearGradient>
							</defs>
							<g fill="none" stroke="url(#quoteGrad)" strokeWidth="2.6" strokeLinecap="round"
							   strokeLinejoin="round">
								<line pathLength="1" className="qf" style={{"--d": "0s"}} x1="4" y1="50" x2="60"
									  y2="50"/>
								<rect pathLength="1" className="qf" style={{"--d": "0.15s"}} x="6" y="30" width="7"
									  height="20"/>
								<rect pathLength="1" className="qf" style={{"--d": "0.25s"}} x="13" y="22" width="7"
									  height="28"/>
								<rect pathLength="1" className="qf" style={{"--d": "0.35s"}} x="20" y="34" width="6"
									  height="16"/>
								<rect pathLength="1" className="qf" style={{"--d": "0.45s"}} x="38" y="34" width="6"
									  height="16"/>
								<rect pathLength="1" className="qf" style={{"--d": "0.55s"}} x="44" y="24" width="7"
									  height="26"/>
								<rect pathLength="1" className="qf" style={{"--d": "0.65s"}} x="51" y="32" width="7"
									  height="18"/>
								<path pathLength="1" className="qf" style={{"--d": "0.75s"}} d="M26 50 V26 h12 V50"/>
								<line pathLength="1" className="qf" style={{"--d": "1.05s"}} x1="32" y1="22" x2="32"
									  y2="16"/>
								<circle className="qf-cap" style={{"--d": "1.2s"}} cx="32" cy="14" r="1.6"
										fill="url(#quoteGrad)"/>
							</g>
						</svg>
						<p className="quote__by">{t.quote.by}</p>
					</div>
				</div>
			</div>
		</section>
	);
}