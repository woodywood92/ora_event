import React, { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useReveal } from '../useReveal';
import '../ressources/Galerie.css';

// Charge automatiquement toutes les photos du dossier galerie
const FILES = import.meta.glob(
	'../ressources/images/galerie/*.{webp,jpg,jpeg,png}',
	{
		eager: true,
		import: 'default',
	},
);

const ESPACES = ['colline', 'satellite', 'reception', 'rooftop', 'exterieur'];

const ITEMS = Object.entries(FILES)
	.sort(([a], [b]) => a.localeCompare(b))
	.map(([path, src]) => {
		const base = path
			.split('/')
			.pop()
			.replace(/\.[^.]+$/, '');
		const sizeMatch = base.match(/-(tall|wide|large)$/);
		const size = sizeMatch ? sizeMatch[1] : 'square';
		const clean = sizeMatch ? base.replace(/-(tall|wide|large)$/, '') : base;
		const [espaceRaw, ...rest] = clean.split('-');
		const espace = ESPACES.includes(espaceRaw) ? espaceRaw : 'exterieur';
		return { src, espace, size, alt: rest.join(' ') || espace };
	});

export default function Galerie({ t }) {
	const [filter, setFilter] = useState('all');
	const [open, setOpen] = useState(null);
	const [ref, inView] = useReveal();
	const g = t.galerie;

	const list = useMemo(
		() => (filter === 'all' ? ITEMS : ITEMS.filter((i) => i.espace === filter)),
		[filter],
	);

	return (
		<section className="gal">
			<div className="gal-head">
				<div>
					<p className="gal-eyebrow">{g.eyebrow}</p>
					<h2 className="gal-title">{g.title}</h2>
				</div>
				<div className="gal-filters">
					{['all', ...ESPACES].map((f) => (
						<button
							key={f}
							type="button"
							className={`gal-filter ${filter === f ? 'gal-filter--on' : ''}`}
							onClick={() => {
								setFilter(f);
								setOpen(null);
							}}
						>
							{g.filters[f]}
						</button>
					))}
				</div>
			</div>

			<div
				ref={ref}
				key={filter}
				className={`gal-grid ${inView ? 'gal--in' : ''}`}
			>
				{list.map((it, i) => (
					<button
						key={it.src}
						type="button"
						className={`gal-item gal-item--${it.size}`}
						style={{ '--i': i % 10 }}
						onClick={() => setOpen(i)}
						aria-label={it.alt}
					>
						<img src={it.src} alt={it.alt} loading="lazy" />
						<span className="gal-cap">{g.filters[it.espace]}</span>
					</button>
				))}
			</div>

			{open !== null && (
				<Lightbox
					items={list}
					index={open}
					setIndex={setOpen}
					onClose={() => setOpen(null)}
				/>
			)}
		</section>
	);
}

function Lightbox({ items, index, setIndex, onClose }) {
	const total = items.length;
	const cur = items[index];

	useEffect(() => {
		const onKey = (e) => {
			if (e.key === 'Escape') onClose();
			if (e.key === 'ArrowLeft') setIndex((index - 1 + total) % total);
			if (e.key === 'ArrowRight') setIndex((index + 1) % total);
		};
		window.addEventListener('keydown', onKey);
		document.body.style.overflow = 'hidden';
		return () => {
			window.removeEventListener('keydown', onKey);
			document.body.style.overflow = '';
		};
	}, [index, total, onClose, setIndex]);

	return createPortal(
		<div
			className="gal-lb"
			onClick={(e) => {
				if (!e.target.closest('img, button')) onClose();
			}}
		>
			<button
				type="button"
				className="gal-lb__btn gal-lb__close"
				onClick={onClose}
				aria-label="Fermer"
			>
				<X size={20} />
			</button>
			<button
				type="button"
				className="gal-lb__btn gal-lb__prev"
				onClick={() => setIndex((index - 1 + total) % total)}
				aria-label="Précédente"
			>
				<ChevronLeft size={22} />
			</button>
			<img className="gal-lb__img" src={cur.src} alt={cur.alt} />
			<button
				type="button"
				className="gal-lb__btn gal-lb__next"
				onClick={() => setIndex((index + 1) % total)}
				aria-label="Suivante"
			>
				<ChevronRight size={22} />
			</button>
			<p className="gal-lb__count">
				{index + 1} / {total}
			</p>
		</div>,
		document.body,
	);
}
