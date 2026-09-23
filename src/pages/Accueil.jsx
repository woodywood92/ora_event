import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Users, Building2 } from 'lucide-react';
import { PHOTOS } from '../i18n';
import { useSite } from '../context/SiteContext';
import Reveal from '../components/Reveal';
import './Accueil.css';

const SLIDES_IMG = [PHOTOS.auditorium, PHOTOS.reception, PHOTOS.meeting];
const LIEUX_IMG = [PHOTOS.auditorium, PHOTOS.meeting, PHOTOS.reception];

export default function Accueil() {
	const { t } = useSite();
	const [slide, setSlide] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => setSlide((s) => (s + 1) % 3), 5000);
		return () => clearInterval(timer);
	}, []);

	return (
		<div className="page-accueil">
			<Hero t={t} slide={slide} setSlide={setSlide} />
			<Presentation t={t} />
			<Stats t={t} />
			<NosLieux t={t} />
			<RSE t={t} />
			<Cta t={t} />
		</div>
	);
}

function Hero({ t, slide, setSlide }) {
	return (
		<section id="accueil" className="hero">
			{SLIDES_IMG.map((img, i) => (
				<img
					key={i}
					src={img}
					alt=""
					className={`hero__slide ${i === slide ? 'hero__slide--active' : ''}`}
				/>
			))}
			<div className="hero__overlay" />

			<div className="hero__content">
				<div key={slide}>
					<div className="hero__meta">
						<span>{t.slides[slide].n}</span>
						<span className="hero__line" />
						<span>Paris 15ᵉ</span>
					</div>
					<h1 className="hero__title">{t.slides[slide].title}</h1>

					<Link to="/nos-espaces" className="hero__cta">
						{t.heroCta} <ArrowRight size={15} />
					</Link>
				</div>
			</div>

			<div className="hero__dots">
				{[0, 1, 2].map((i) => (
					<button
						key={i}
						onClick={() => setSlide(i)}
						aria-label={`Slide ${i + 1}`}
						className={`hero__dot ${i === slide ? 'hero__dot--active' : ''}`}
					>
						<span />
					</button>
				))}
			</div>
		</section>
	);
}

function Presentation({ t }) {
	return (
		<section className="presentation">
			<Reveal>
				<h2 className="presentation__title">{t.presentation.title}</h2>
			</Reveal>
			{t.presentation.paragraphs.map((p, i) => (
				<Reveal key={i}>
					<p className="presentation__sub">{p}</p>
				</Reveal>
			))}
			<Reveal>
				<p className="presentation__tagline">{t.presentation.tagline}</p>
			</Reveal>
		</section>
	);
}

function Stats({ t }) {
	return (
		<section className="stats">
			<div className="stats__grid">
				<StatItem icon={Building2} label="2 000 m²" sub={t.stats.m2} />
				<StatItem
					icon={Users}
					label={`500 ${t.stats.pers}`}
					sub={t.stats.cap}
				/>
				<StatItem icon={MapPin} label="Paris 15ᵉ" sub={t.stats.metro} />
			</div>
		</section>
	);
}

function StatItem({ icon: Icon, label, sub }) {
	return (
		<div className="stat">
			<Icon className="stat__icon" size={22} />
			<div>
				<p className="stat__label">{label}</p>
				<p className="stat__sub">{sub}</p>
			</div>
		</div>
	);
}

function NosLieux({ t }) {
	return (
		<section id="lieux" className="lieux">
			<Reveal className="lieux__head">
				<div>
					<h2 className="lieux__title">{t.lieuxTitle}</h2>
					<p className="lieux__intro-title">{t.lieuxIntroTitle}</p>
					<p className="lieux__intro">{t.lieuxIntro}</p>

					<Link to="/nos-espaces" className="lieux__link">
						{t.lieuxDetail} →
					</Link>
				</div>
			</Reveal>

			<div className="lieux__grid">
				{t.lieux.map((l, i) => (
					<Reveal key={l.nom}>
						<Link to="/nos-espaces" className="lieu-card">
							<img src={LIEUX_IMG[i]} alt={l.nom} className="lieu-card__img" />
							<div className="lieu-card__overlay" />
							<div className="lieu-card__text">
								<p className="lieu-card__tag">{l.tag}</p>
								<h3 className="lieu-card__name">{l.nom}</h3>
							</div>
						</Link>
					</Reveal>
				))}
			</div>
		</section>
	);
}

function RSE({ t }) {
	return (
		<section id="rse" className="rse">
			<div className="rse__inner">
				<Reveal>
					<div className="rse__header">
						<div>
							<p className="rse__eyebrow">RSE</p>
							<h2 className="rse__title">{t.rsePage.title}</h2>
						</div>

						<div className="rse__score">
							<span>FairScore</span>
							<strong>A-</strong>
						</div>
					</div>
				</Reveal>

				<Reveal>
					<div className="rse__content">
						<div className="rse__intro">
							<p>{t.rsePage.intro}</p>

							<p>
								Notre démarche RSE s’inscrit dans nos choix quotidiens :
								partenaires, gestion des ressources et conception de chaque
								événement.
							</p>

							<Link to="/rse" className="rse__link">
								En savoir plus <ArrowRight size={15} />
							</Link>
						</div>

						<div className="rse__commitments">
							{t.rsePage.pillars.slice(0, 3).map((pillar, i) => (
								<div className="rse__item" key={pillar.title}>
									<span className="rse__icon">{['🤝', '♻️', '🥕'][i]}</span>

									<div>
										<h3>{pillar.title}</h3>
										<p>{pillar.desc}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</Reveal>
			</div>
		</section>
	);
}

function Cta({ t }) {
	return (
		<section className="cta">
			<Reveal>
				<h2 className="cta__title">{t.contact.title}</h2>
				<p className="cta__desc">{t.contact.desc}</p>
				<Link to="/contact" className="cta__btn">
					{t.form.send} <ArrowRight size={15} />
				</Link>
			</Reveal>
		</section>
	);
}
