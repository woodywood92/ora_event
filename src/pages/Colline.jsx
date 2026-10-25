import React from 'react';
import { Check } from 'lucide-react';
import { PHOTOS } from '../i18n';
import { useSite } from '../context/SiteContext';
import Reveal from '../components/Reveal';
import '../ressources/Colline.css';
import Gallery from '../components/Gallery.jsx';
import BackToTop from '../components/BackToTop';

const MATTERPORT_EMBED_URL_LOUNGE =
	'https://shoootin.com/scan/6ac4b4187f82204a39d13899';

export default function Colline() {
	const { t } = useSite();

	return (
		<div className="colline">
			<section className="colline-intro">
				<Reveal>
					<h1 className="colline-title">{t.collinePage.title}</h1>
				</Reveal>
				<Reveal className="colline-intro-reveal">
					<p className="colline-intro-text">{t.collinePage.intro}</p>
				</Reveal>
			</section>

			<section className="colline-hero">
				<Reveal className="colline-text">
					<p className="colline-eyebrow">{t.collinePage.hero.headerTitle}</p>
					<h2 className="colline-heading">{t.collinePage.hero.title}</h2>
					{t.collinePage.hero.paragraphs.map((p, i) => (
						<p key={i} className="colline-paragraph">
							{p}
						</p>
					))}
				</Reveal>
				<Reveal>
					<Gallery
						photos={[
							{ src: PHOTOS.colline_amphi_full, alt: '' },
							{ src: PHOTOS.colline_amphi_bas, alt: '' },
							{ src: PHOTOS.colline_jardin_ext, alt: '' },
							{ src: PHOTOS.colline_facade_ext, alt: '' },
							{ src: PHOTOS.colline_facade, alt: '' },
							{ src: PHOTOS.colline_lustre, alt: '' },
							{ src: PHOTOS.colline_restaurant_principal, alt: '' },
							{ src: PHOTOS.colline_restaurant_profil, alt: '' },
						]}
					/>
				</Reveal>
			</section>

			<section className="colline-tour">
				<Reveal>
					<div className="colline-virtual-header">
						<h2 className="colline-virtual-title">
							{t.collinePage.virtualTourTitle}
						</h2>
						<p className="colline-virtual-address">
							{t.collinePage.virtualTourSubTitle}
						</p>
					</div>

					{MATTERPORT_EMBED_URL_LOUNGE ? (
						<div className="colline-virtual-embed">
							<iframe
								title="Visite virtuelle Le Carré Vaugirard"
								src={MATTERPORT_EMBED_URL_LOUNGE}
								className="w-full h-full"
								frameBorder="0"
								allow="xr-spatial-tracking; gyroscope; accelerometer; fullscreen"
								allowFullScreen
								loading="lazy"
							/>
						</div>
					) : (
						<div className="colline-virtual-placeholder">
							<p className="colline-virtual-placeholder-text">
								Visite virtuelle à venir — lien Matterport en attente
								d'intégration
							</p>
						</div>
					)}
				</Reveal>
			</section>

			{/* Sections alternées : description / photo, puis photo / description */}
			<section className="colline-rows">
				{t.collinePage.sections.map((s, i) => (
					<div
						key={s.title}
						className={`colline-row ${i % 2 === 1 ? 'colline-row--reverse' : ''}`}
					>
						<Reveal className="colline-text">
							<h3 className="colline-heading">{s.title}</h3>
							<p className="colline-paragraph">{s.text}</p>
						</Reveal>
						<Reveal>
							<Gallery photos={s.photos} />
						</Reveal>
					</div>
				))}
			</section>
			<BackToTop />
		</div>
	);
}
