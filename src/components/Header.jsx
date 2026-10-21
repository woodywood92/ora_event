import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useSite } from '../context/SiteContext';
import '../ressources/Header.css';
import logo from '../ressources/public/logo-carre-vaugirard.svg';

const NAV_ITEMS = [
	{ to: '/', key: 'accueil' },
	{ to: '/nos-espaces', key: 'espaces' },
	{ to: '/rse', key: 'rse' },
	{ to: '/contact', key: 'contact' },
];

export default function Header() {
	const { dark, setDark, lang, setLang, t } = useSite();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<>
			<header className="header">
				<div className="header__inner">
					<Link to="/" className="header__logo" aria-label="Le Carré ">
						<img
							src={logo}
							alt="Le Carré Vaugirard"
							className="header__logo-mark"
						/>
					</Link>
					<nav className="header__nav">
						{NAV_ITEMS.map((item) => (
							<Link key={item.to} to={item.to}>
								{t.nav[item.key]}
							</Link>
						))}
					</nav>
					<div className="header__actions">
						<button
							onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
							className="header__lang-btn"
						>
							{lang === 'fr' ? 'EN' : 'FR'}
						</button>
						<button
							onClick={() => setDark(!dark)}
							aria-label="Changer de thème"
							className="header__icon-btn"
						>
							{dark ? <Sun size={16} /> : <Moon size={16} />}
						</button>
						<Link to="/contact" className="header__cta">
							{t.nav.visite}
						</Link>
						<button
							onClick={() => setMobileMenuOpen(true)}
							aria-label="Ouvrir le menu"
							className="header__icon-btn header__burger"
						>
							<Menu size={18} />
						</button>
					</div>
				</div>
			</header>

			<div
				className={`mobile-menu ${mobileMenuOpen ? 'mobile-menu--open' : ''}`}
			>
				<div
					className="mobile-menu__overlay"
					onClick={() => setMobileMenuOpen(false)}
				/>
				<div className="mobile-menu__panel">
					<div className="mobile-menu__top">
						<button
							onClick={() => setMobileMenuOpen(false)}
							aria-label="Fermer le menu"
							className="header__icon-btn"
						>
							<X size={18} />
						</button>
					</div>
					<nav className="mobile-menu__nav">
						{NAV_ITEMS.map((item) => (
							<Link
								key={item.to}
								to={item.to}
								onClick={() => setMobileMenuOpen(false)}
							>
								{t.nav[item.key]}
							</Link>
						))}
					</nav>
					<div className="mobile-menu__cta-wrap">
						<Link
							to="/contact"
							onClick={() => setMobileMenuOpen(false)}
							className="mobile-menu__cta"
						>
							{t.nav.visite}
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
