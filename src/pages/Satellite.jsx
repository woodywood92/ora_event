import React from 'react';
import { Check } from 'lucide-react';
import { PHOTOS } from '../i18n';
import { useSite } from '../context/SiteContext';
import Reveal from '../components/Reveal';
import '../ressources/Satellite.css';
import Gallery from '../components/Gallery';

const MATTERPORT_EMBED_URL_LOUNGE_RDJ =
	'https://shoootin.com/scan/6ac4b57d7f82204a39d13980';
const HERO_IMG = PHOTOS.satellite_auditorium_face;
const SECTION_IMGS = [
	PHOTOS.reception,
	PHOTOS.meeting,
	PHOTOS.auditorium,
	PHOTOS.colline_amphi_full,
];

export default function Satellite() {
	const { t } = useSite();

	return (
		<div className="satellite">
			<section className="satellite-intro">
				<Reveal>
					<h1 className="satellite-title">{t.satellitePage.title}</h1>
				</Reveal>
				<Reveal className="satellite-intro-reveal">
					<p className="satellite-intro-text">{t.satellitePage.intro}</p>
				</Reveal>
			</section>

			{/* Texte à gauche / photo à droite */}
			<section className="satellite-hero">
				<Reveal className="satellite-text">
					<p className="satellite-eyebrow">
						{t.satellitePage.hero.headerTitle}
					</p>
					<h2 className="satellite-heading">{t.satellitePage.hero.title}</h2>
					{t.satellitePage.hero.paragraphs.map((p, i) => (
						<p key={i} className="satellite-paragraph">
							{p}
						</p>
					))}
				</Reveal>
				<Reveal className="satellite-frame">
					{/* <img
						src={HERO_IMG}
						alt={t.satellitePage.title}
						className="satellite-photo"
					/> */}
					<Gallery
						photos={[
							{ src: PHOTOS.auditorium, alt: "L'auditorium" },
							{ src: PHOTOS.meeting, alt: 'La Salle du Conseil' },
							{ src: PHOTOS.reception, alt: 'Le lounge' },
						]}
					/>
				</Reveal>
			</section>

			<section className="satellite-tour">
				<Reveal>
					<div className="satellite-virtual-header">
						<h2 className="satellite-virtual-title">
							{t.satellitePage.virtualTourTitle}
						</h2>
						<p className="satellite-virtual-address">
							{t.satellitePage.virtualTourSubTitle}
						</p>
					</div>

					{MATTERPORT_EMBED_URL_LOUNGE_RDJ ? (
						<div className="satellite-virtual-embed">
							<iframe
								title="Visite virtuelle Le Carré Vaugirard"
								src={MATTERPORT_EMBED_URL_LOUNGE_RDJ}
								className="w-full h-full"
								frameBorder="0"
								allow="xr-spatial-tracking; gyroscope; accelerometer; fullscreen"
								allowFullScreen
								loading="lazy"
							/>
						</div>
					) : (
						<div className="satellite-virtual-placeholder">
							<p className="satellite-virtual-placeholder-text">
								Visite virtuelle à venir — lien Matterport en attente
								d'intégration
							</p>
						</div>
					)}
				</Reveal>
			</section>

			{/* Sections alternées : description / photo, puis photo / description */}
			<section className="satellite-rows">
				{t.satellitePage.sections.map((s, i) => (
					<div
						key={s.title}
						className={`satellite-row ${i % 2 === 1 ? 'satellite-row--reverse' : ''}`}
					>
						<Reveal className="satellite-text">
							<h3 className="satellite-heading">{s.title}</h3>
							<p className="satellite-paragraph">{s.text}</p>
						</Reveal>
						<Reveal className="satellite-frame">
							<img
								src={SECTION_IMGS[i % SECTION_IMGS.length]}
								alt={s.title}
								className="satellite-photo"
							/>
						</Reveal>
					</div>
				))}
			</section>
		</div>
	);
}
