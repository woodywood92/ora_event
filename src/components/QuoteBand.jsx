import React from 'react';
import Reveal from './Reveal';
import quoteBg from '../ressources/images/Facade/shoootin-photo-71.webp';
import '../ressources/Galerie.css';

export default function QuoteBand({ t }) {
	return (
		<section className="quote" style={{ backgroundImage: `url(${quoteBg})` }}>
			<div className="quote__veil">
				<Reveal>
					<blockquote className="quote__text">« {t.quote.text} »</blockquote>
					<p className="quote__by">{t.quote.by}</p>
				</Reveal>
			</div>
		</section>
	);
}
