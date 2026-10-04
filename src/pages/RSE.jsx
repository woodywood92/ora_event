import React from 'react';
import { useSite } from '../context/SiteContext';
import Reveal from '../components/Reveal';
import '../ressources/RSE.css';
import fairscoreImg from '../ressources/images/fairscore.png';

export default function RSE() {
	const { t } = useSite();
	const r = t.rsePage;

	return (
		<div>
			<section className="rse-hero">
				<Reveal>
					<h1 className="rse-hero__title">{r.title}</h1>
				</Reveal>
				<Reveal>
					<p className="rse-hero__intro">{r.intro}</p>
				</Reveal>
			</section>

			<section className="rse-pillars">
				<Reveal>
					<h2 className="rse-pillars__title">{r.pillarsTitle}</h2>
				</Reveal>
				<div className="rse-pillars__grid">
					{r.pillars.map((p) => (
						<Reveal key={p.title}>
							<div className="rse-pillar">
								<span className="rse-pillar__icon">{p.icon}</span>
								<div>
									<p className="rse-pillar__title">{p.title}</p>
									<p className="rse-pillar__text">{p.desc}</p>
								</div>
							</div>
						</Reveal>
					))}
				</div>
			</section>

			<section className="rse-closing">
				<Reveal>
					<Reveal>
						<img
							src={fairscoreImg}
							alt={r.badge}
							className="mx-auto rounded-xl shadow-md"
						/>
					</Reveal>
					<h2 className="rse-closing__title">{r.closingTitle}</h2>
					<p className="rse-closing__text">{r.closingText}</p>
				</Reveal>
			</section>
		</div>
	);
}
