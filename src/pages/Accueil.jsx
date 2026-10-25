import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { PHOTOS } from '../i18n';
import { useSite } from '../context/SiteContext';
import Reveal from '../components/Reveal';
import '../ressources/Accueil.css';
import { useParallax } from '../useParallax';
import Galerie from '../components/Galerie';
import QuoteBand from '../components/QuoteBand';
import { StatsParallax } from '../components/StatsShowcase';
import BackToTop from '../components/BackToTop';
import '../ressources/MetroLine.css';
import {
	ArrowRight,
	MapPin,
	Users,
	Building2,
	Compass,
	Workflow,
	FileText,
	Sparkles,
	ChefHat,
	BellRing,
	Clock,
	Plane,
} from 'lucide-react';

import collineImg from '../ressources/images/Amphi/amphi_full.webp';
import satelliteImg from '../ressources/images/Auditorium/auditorium_face.webp';
import foyerImg from '../ressources/images/Foyer/foyer_principal.webp';
import loungeImg from '../ressources/images/Lounge/lounge_principal.webp';
import rooftopImg from '../ressources/images/Rooftop/rooftop_principal.webp';
import restoImg from '../ressources/images/Restaurant/restaurant_salle.webp';
import patioImg from '../ressources/images/Jardin/jardin_exterieur.webp';

const ACCOMP_IMG = [foyerImg, loungeImg, rooftopImg, restoImg, patioImg];
const SERVICE_ICONS = [
	Compass,
	Building2,
	Workflow,
	FileText,
	Sparkles,
	ChefHat,
	BellRing,
	Clock,
];

const ACCUEIL_IMG = [
	PHOTOS.facade_accueil,
	PHOTOS.colline_lustre,
	PHOTOS.salle_de_reunion_accueil,
];
const LIEUX_CARDS = [
	{ to: '/Colline', img: collineImg },
	{ to: '/Satellite', img: satelliteImg },
];

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
			<StatsParallax t={t} />
			<NosLieux t={t} />
			<Galerie t={t} />
			<QuoteBand t={t} />
			<Accompagnement t={t} />
			<Services t={t} />
			<RSE t={t} />
			<Cta t={t} />
			<BackToTop />
		</div>
	);
}

function Hero({ t, slide, setSlide }) {
	return (
		<section id="accueil" className="hero">
			{ACCUEIL_IMG.map((img, i) => (
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
		<section className="pres">
			<Reveal>
				<h2 className="pres-title">{t.presentation.title}</h2>
			</Reveal>
			<div className="pres-body">
				<Reveal className="pres-col">
					{t.presentation.paragraphs.slice(0, 2).map((p, i) => (
						<p key={i}>{p}</p>
					))}
				</Reveal>
				<Reveal className="pres-col" delay={150}>
					<p>{t.presentation.paragraphs[2]}</p>
					<p className="pres-tagline">{t.presentation.tagline}</p>
				</Reveal>
			</div>
		</section>
	);
}

function NosLieux({ t }) {
	return (
		<section id="lieux" className="lx">
			<Reveal>
				<div className="lx-head">
					<div className="lx-head__main">
						<h2 className="lx-title">{t.lieuxIntroTitle}</h2>
						<Link to="/nos-espaces" className="rse__link">
							{t.nav.enSavoirPlus} <ArrowRight size={15} />
						</Link>
						<p className="lx-intro">{t.lieuxIntro}</p>
					</div>
					<p className="lx-note">
						<strong>{t.lieuxAddress}</strong>
						{t.lieuxNote}
					</p>
				</div>
			</Reveal>

			<div className="lx-grid">
				{t.lieux.map((l, i) => (
					<Reveal key={l.nom} variant="up" delay={i * 200}>
						<Link to={LIEUX_CARDS[i].to} className="lx-card zoom-img">
							<img src={LIEUX_CARDS[i].img} alt={l.nom} />
							<span className="lx-name">{l.nom}</span>
						</Link>
					</Reveal>
				))}
			</div>
		</section>
	);
}

function Accompagnement({ t }) {
	const r = t.contactPage;
	return (
		<section className="accomp">
			<Reveal>
				<p className="accomp__eyebrow">{r.reasonsEyebrow}</p>
				<h2 className="accomp__title">{r.reasonsTitle}</h2>
			</Reveal>

			{r.reasons.map((item, i) => (
				<AccompRow
					key={item.title}
					item={item}
					index={i}
					reverse={i % 2 === 1}
				/>
			))}
		</section>
	);
}

function AccompRow({ item, index, reverse }) {
	const stackRef = useRef(null);
	const digitY = useDigitMove(stackRef);

	return (
		<div className={`accomp__row ${reverse ? 'accomp__row--reverse' : ''}`}>
			<Reveal variant={reverse ? 'right' : 'left'} className="accomp__text">
				<h3 className="accomp__heading">{item.title}</h3>
				<p className="accomp__paragraph">{item.text}</p>
			</Reveal>

			<div ref={stackRef} className="accomp__stack">
				<Reveal variant="zoom" className="accomp__frame">
					<ParallaxImg
						src={ACCOMP_IMG[index % ACCOMP_IMG.length]}
						alt={item.title}
					/>
				</Reveal>
				<span
					className="accomp__big"
					style={{ transform: `translateY(${digitY}px)` }}
					aria-hidden="true"
				>
					{index + 1}
				</span>
			</div>
		</div>
	);
}

// Renvoie le décalage vertical du chiffre selon la position de la ligne dans la fenêtre
function useDigitMove(ref) {
	const [y, setY] = useState(0);

	useEffect(() => {
		let raf = 0;
		const update = () => {
			cancelAnimationFrame(raf);
			raf = requestAnimationFrame(() => {
				const el = ref.current;
				if (!el) return;
				const rect = el.getBoundingClientRect();
				const vh = window.innerHeight;
				const p = Math.min(
					Math.max((vh - rect.top) / (vh + rect.height), 0),
					1,
				);
				const eased = p * p * (3 - 2 * p); // courbe douce début / fin
				setY(-eased * (el.offsetHeight + 40));
			});
		};
		update();
		window.addEventListener('scroll', update, { passive: true });
		window.addEventListener('resize', update);
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener('scroll', update);
			window.removeEventListener('resize', update);
		};
	}, [ref]);

	return y;
}

// Safari (et iOS) : on garde l'image fixe, sans décalage, pour éviter le défaut
const IS_SAFARI =
	typeof navigator !== 'undefined' &&
	/^((?!chrome|chromium|android).)*safari/i.test(navigator.userAgent);

function ParallaxImg({ src, alt }) {
	const [ref, y] = useParallax(0.15);
	const offset = IS_SAFARI ? 0 : Math.max(-40, Math.min(40, y));
	return (
		<div ref={ref} className="accomp__img-wrap">
			<img
				src={src}
				alt={alt}
				style={{ transform: `translate3d(0, ${offset}px, 0)` }}
			/>
		</div>
	);
}

// Progression de la section dans la fenêtre : 0 à l'entrée, 1 à la sortie
function useProgress(ref) {
	const [p, setP] = useState(0);

	useEffect(() => {
		let raf = 0;
		const update = () => {
			cancelAnimationFrame(raf);
			raf = requestAnimationFrame(() => {
				const el = ref.current;
				if (!el) return;
				const r = el.getBoundingClientRect();
				const vh = window.innerHeight;
				setP(Math.min(Math.max((vh - r.top) / (vh + r.height), 0), 1));
			});
		};
		update();
		window.addEventListener('scroll', update, { passive: true });
		window.addEventListener('resize', update);
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener('scroll', update);
			window.removeEventListener('resize', update);
		};
	}, [ref]);

	return p;
}

// Courbe de trajectoire (quadratique) en coordonnées 0-100
const P0 = [-5, 60];
const P1 = [40, 0];
const P2 = [105, 40];

function bezier(t) {
	const a = (1 - t) ** 2;
	const b = 2 * (1 - t) * t;
	const c = t ** 2;
	return {
		x: a * P0[0] + b * P1[0] + c * P2[0],
		y: a * P0[1] + b * P1[1] + c * P2[1],
	};
}

function tangent(t) {
	const dx = 2 * (1 - t) * (P1[0] - P0[0]) + 2 * t * (P2[0] - P1[0]);
	const dy = 2 * (1 - t) * (P1[1] - P0[1]) + 2 * t * (P2[1] - P1[1]);
	return (Math.atan2(dy, dx) * 180) / Math.PI;
}

function FlightPath({ progress: p }) {
	const pos = bezier(p);
	// +45 : l'icône Plane pointe vers le haut-droite. Si elle pointe dans le mauvais sens, mets 0.
	const angle = tangent(p) + 45;
	// L'avion apparaît et disparaît en douceur aux extrémités
	const fade = Math.min(1, p * 6) * Math.min(1, (1 - p) * 6);

	return (
		<>
			<svg
				className="svc-trail"
				viewBox="0 0 100 100"
				preserveAspectRatio="none"
				aria-hidden="true"
			>
				<path
					pathLength="1"
					d="M -5 60 Q 40 0 105 40"
					style={{ strokeDashoffset: 1 - p }}
				/>
			</svg>
			<span
				className="svc-plane"
				style={{
					left: `${pos.x}%`,
					top: `${pos.y}%`,
					opacity: fade,
					transform: `translate(-50%, -50%) rotate(${angle}deg)`,
				}}
			>
				<Plane size={40} strokeWidth={1.6} />
			</span>
		</>
	);
}

function Services({ t }) {
	const ref = useRef(null);
	const SPEED = 1.15; // 1 = vitesse normale, 1.15 = environ 15 % plus rapide
	const raw = useProgress(ref);
	const p = Math.min(raw * SPEED, 1);

	return (
		<section ref={ref} className="svc">
			<FlightPath progress={p} />

			<Reveal>
				<p className="svc-eyebrow">{t.services.eyebrow}</p>
				<h2 className="svc-title">{t.services.title}</h2>
			</Reveal>

			<div className="svc-grid">
				{t.services.items.map((s, i) => {
					const Icon = SERVICE_ICONS[i];
					return (
						<Reveal key={s.title} variant="up" delay={(i % 4) * 120}>
							<article className="svc-card">
								<span className="svc-num">
									{String(i + 1).padStart(2, '0')}
								</span>
								<span className="svc-icon">
									<Icon size={30} strokeWidth={1.6} />
								</span>
								<h3 className="svc-pill">{s.title}</h3>
								<p className="svc-desc">{s.desc}</p>
							</article>
						</Reveal>
					);
				})}
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
							<p>{t.rsePage.introHome}</p>

							<Link to="/rse" className="rse__link">
								{t.nav.enSavoirPlus} <ArrowRight size={15} />
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
