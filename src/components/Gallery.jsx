import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import '../ressources/Gallery.css';

// photos : [{ src, alt }]
export default function Gallery({ photos = [] }) {
	const [index, setIndex] = useState(0);
	const [open, setOpen] = useState(false);
	const total = photos.length;

	const prev = () => setIndex((i) => (i - 1 + total) % total);
	const next = () => setIndex((i) => (i + 1) % total);

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
		<div className="gallery">
			<div className="gallery-slide">
				<img
					src={photos[index].src}
					alt={photos[index].alt}
					className="gallery-slide__img"
					onClick={() => setOpen(true)}
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
						onClick={() => setIndex(i)}
						aria-label={`Photo ${i + 1}`}
						className={`gallery-dot ${i === index ? 'gallery-dot--active' : ''}`}
					/>
				))}
			</div>
			<p className="gallery-hint">Cliquez sur la photo pour agrandir</p>

			{open && createPortal(lightbox, document.body)}
		</div>
	);
}
