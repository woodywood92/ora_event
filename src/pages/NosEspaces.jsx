import React from 'react';
import { Check } from 'lucide-react';
import { PHOTOS } from '../i18n';
import { useSite } from '../context/SiteContext';
import Reveal from '../components/Reveal';
import { Link } from 'react-router-dom';
import '../ressources/NosEspaces.css';

const LIEUX_IMG = [PHOTOS.auditorium, PHOTOS.meeting, PHOTOS.reception];
const MATTERPORT_EMBED_URL_PLATEAU =
	'https://shoootin.com/scan/6ac4b3117f82204a39d13809';

export default function NosEspaces() {
	const { t } = useSite();
	const routesCibles = ['/Colline', '/Satellite'];

	return (
		<div className="nos-espaces">
			<section className="nos-espaces-intro">
				<Reveal>
					<h1 className="nos-espaces-title">{t.nosEspacesPage.title}</h1>
				</Reveal>
				<Reveal className="nos-espaces-intro-reveal">
					<p className="nos-espaces-intro-text">{t.nosEspacesPage.intro}</p>
				</Reveal>
			</section>

			<section className="nos-espaces-content">
				<Reveal>
					<h2 className="nos-espaces-detail-title">
						{t.nosEspacesPage.detailTitle}
					</h2>
				</Reveal>

				<div className="nos-espaces-grid">
					{t.lieux.map((l, i) => {
						const destination = routesCibles[i] || '';

						return (
							<Reveal key={l.nom}>
								<Link
									to={destination}
									className="nos-espaces-card-link"
									style={{ textDecoration: 'none', color: 'inherit' }}
								>
									<div className="nos-espaces-image">
										<img src={LIEUX_IMG[i]} alt={l.nom} />
									</div>
									<p className="nos-espaces-tag">{l.tag}</p>
									<h3 className="nos-espaces-name">{l.nom}</h3>
									<p className="nos-espaces-description">{l.desc}</p>
								</Link>
							</Reveal>
						);
					})}
				</div>

				<Reveal className="nos-espaces-virtual-tour">
					<div className="nos-espaces-virtual-header">
						<h2 className="nos-espaces-virtual-title">
							{t.nosEspacesPage.virtualTourTitle}
						</h2>
						<p className="nos-espaces-virtual-address">
							255 rue de Vaugirard, 75015 Paris
						</p>
					</div>

					{MATTERPORT_EMBED_URL_PLATEAU ? (
						<div className="nos-espaces-virtual-embed">
							<iframe
								title="Visite virtuelle Le Carré Vaugirard"
								src={MATTERPORT_EMBED_URL_PLATEAU}
								className="w-full h-full"
								frameBorder="0"
								allow="xr-spatial-tracking; gyroscope; accelerometer; fullscreen"
								allowFullScreen
								loading="lazy"
							/>
						</div>
					) : (
						<div className="nos-espaces-virtual-placeholder">
							<p className="nos-espaces-virtual-placeholder-text">
								Visite virtuelle à venir — lien Matterport en attente
								d'intégration
							</p>
						</div>
					)}
				</Reveal>

				<Reveal className="nos-espaces-infos">
					{[t.infos.capacite, t.infos.equip, t.infos.types].map((block) => (
						<div key={block.h} className="nos-espaces-info-block">
							<p className="nos-espaces-info-title">{block.h}</p>
							<ul className="nos-espaces-list">
								{block.bullets.map((b, i) => (
									<li key={i} className="nos-espaces-list-item">
										<Check size={14} className="nos-espaces-check" />
										{b}
									</li>
								))}
							</ul>
						</div>
					))}
				</Reveal>
			</section>
		</div>
	);
}
