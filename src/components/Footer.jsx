import React from 'react';
import { useSite } from '../context/SiteContext';
import '../ressources/Footer.css';

export default function Footer() {
	const { t } = useSite();
	return (
		<footer className="footer">
			<span>{t.footer}</span>
			<span>© {new Date().getFullYear()}</span>
		</footer>
	);
}
