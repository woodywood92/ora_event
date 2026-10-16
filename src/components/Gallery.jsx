import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import '../ressources/Gallery.css';
import {useSite} from "../context/SiteContext.jsx";
import business_center_principal from "../ressources/images/Business Center/business_center_principal.jpg";
import business_center_canape from "../ressources/images/Business Center/business_center_canape.jpg";
import business_center_chaise from "../ressources/images/Business Center/business_center_chaise.jpg";
import colline_foyer_principal from "../ressources/images/Colline Foyer/colline_foyer_principal.jpg";
import colline_foyer_fixe from "../ressources/images/Colline Foyer/colline_foyer_fixe.jpg";
import colline_foyer_chaises from "../ressources/images/Colline Foyer/colline_foyer_chaises.jpg";
import salle_de_reunion_principal from "../ressources/images/Salle de Réunion Annexe/salle_de_reunion_principal.jpg";
import salle_de_reunion_1 from "../ressources/images/Salle de Réunion Annexe/salle_de_reunion_1.jpg";
import salle_de_reunion_2 from "../ressources/images/Salle de Réunion Annexe/salle_de_reunion_2.jpg";
import salle_de_reunion_3 from "../ressources/images/Salle de Réunion Annexe/salle_de_reunion_3.jpg";
import salle_de_reunion_4 from "../ressources/images/Salle de Réunion Annexe/salle_de_reunion_4.jpg";
import salle_de_reunion_5 from "../ressources/images/Salle de Réunion Annexe/salle_de_reunion_5.jpg";
import colline_patio_principal from "../ressources/images/Colline Patio/colline_patio_principal.jpg";
import colline_patio_ext_1 from "../ressources/images/Colline Patio/colline_patio_ext_1.jpg";
import colline_patio_ext_2 from "../ressources/images/Colline Patio/colline_patio_ext_2.jpg";
import colline_patio_ext_3 from "../ressources/images/Colline Patio/colline_patio_ext_3.jpg";
import fitness_principal from "../ressources/images/Fitness/Fitness.jpg";
import fitness_1 from "../ressources/images/Fitness/Fitness_1.jpg";
import fitness_2 from "../ressources/images/Fitness/Fitness_2.jpg";

export default function Gallery({ photos = [] }) {
	const {t} = useSite();
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
			<p className="gallery-hint">{t.nav.galleryAgrandir}</p>

			{open && createPortal(lightbox, document.body)}
		</div>
	);
}