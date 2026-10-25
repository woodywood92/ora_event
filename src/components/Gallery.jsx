import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import '../ressources/Gallery.css';
import { useSite } from '../context/SiteContext.jsx';

export default function Gallery({ photos = [] }) {
	const { t } = useSite();
	const [index, setIndex] = useState(0);
	const [open, setOpen] = useState(false);
	const total = photos.length;
	const [tick, setTick] = useState(0);

	const prev = () => {
		pause();
		setIndex((i) => (i - 1 + total) % total);
	};
	const next = () => {
		pause();
		setIndex((i) => (i + 1) % total);
	};

	const AUTOPLAY_MS = 5000; // temps entre deux photos
	const RESUME_MS = 8000; // délai avant reprise après une interaction (null = pause définitive)

	const [paused, setPaused] = useState(false);
	const resumeTimer = useRef(null);

	// Met le diaporama en pause et planifie la reprise
	const pause = () => {
		setPaused(true);
		clearTimeout(resumeTimer.current);
		if (RESUME_MS) {
			resumeTimer.current = setTimeout(() => {
				setTick((t) => t + 1); // relance la barre de progression au même moment que le diaporama
				setPaused(false);
			}, RESUME_MS);
		}
	};
	// Nettoie le timer quand le composant disparaît
	useEffect(() => () => clearTimeout(resumeTimer.current), []);

	// Diaporama automatique
	useEffect(() => {
		if (total < 2 || paused || open) return;
		const reduce = window.matchMedia(
			'(prefers-reduced-motion: reduce)',
		).matches;
		if (reduce) return;
		const id = setInterval(() => setIndex((i) => (i + 1) % total), AUTOPLAY_MS);
		return () => clearInterval(id);
	}, [total, paused, open]);

	useEffect(() => {
		if (!open) return;
		const onKey = (e) => {
			if (e.key === 'Escape') setOpen(false);
			if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + total) % total);
			if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % total);
		};
		window.addEventListener('keydown', onKey);
		document.body.style.overflow = 'hidden';
		return () => {
			window.removeEventListener('keydown', onKey);
			document.body.style.overflow = '';
		};
	}, [open, total]);

	if (total === 0) return null;

	const lightbox = (
		<div
			className="gallery-lightbox"
			onClick={(e) => {
				if (!e.target.closest('img, button')) setOpen(false);
			}}
		>
			<button
				className="gallery-lightbox__close"
				onClick={() => setOpen(false)}
				aria-label="Fermer"
			>
				<X size={22} />
			</button>

			<div className="gallery-lightbox__stage">
				<button
					className="gallery-nav gallery-nav--prev"
					onClick={prev}
					aria-label="Précédente"
				>
					<ChevronLeft size={22} />
				</button>
				<img
					src={photos[index].src}
					alt={photos[index].alt}
					className="gallery-lightbox__img"
				/>
				<button
					className="gallery-nav gallery-nav--next"
					onClick={next}
					aria-label="Suivante"
				>
					<ChevronRight size={22} />
				</button>
			</div>

			<p className="gallery-lightbox__counter">
				{index + 1} / {total}
			</p>

			<div className="gallery-thumbs">
				{photos.map((p, i) => (
					<button
						key={i}
						onClick={() => setIndex(i)}
						className={`gallery-thumb ${i === index ? 'gallery-thumb--active' : ''}`}
						aria-label={`Miniature ${i + 1}`}
					>
						<img src={p.src} alt="" />
					</button>
				))}
			</div>
		</div>
	);

	return (
		<div className={`gallery ${paused ? 'gallery--paused' : ''}`}>
			<div className="gallery-slide">
				<img
					src={photos[index].src}
					alt={photos[index].alt}
					className="gallery-slide__img"
					onClick={() => {
						pause();
						setOpen(true);
					}}
				/>
				<button
					className="gallery-nav gallery-nav--prev"
					onClick={prev}
					aria-label="Précédente"
				>
					<ChevronLeft size={20} />
				</button>
				<button
					className="gallery-nav gallery-nav--next"
					onClick={next}
					aria-label="Suivante"
				>
					<ChevronRight size={20} />
				</button>
			</div>

			<div className="gallery-dots">
				{photos.map((_, i) => (
					<button
						key={i}
						type="button"
						onClick={() => {
							pause();
							setIndex(i);
						}}
						aria-label={`Photo ${i + 1}`}
						className={`gallery-dot ${i === index ? 'gallery-dot--active' : ''}`}
					>
						{i === index && total > 1 && (
							<span
								key={`${index}-${tick}`}
								className="gallery-dot__fill"
								style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
							/>
						)}
					</button>
				))}
			</div>
			<p className="gallery-hint">{t.nav.galleryAgrandir}</p>

			{open && createPortal(lightbox, document.body)}
		</div>
	);
}
