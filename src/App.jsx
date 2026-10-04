import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SiteProvider } from './context/SiteContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Accueil from './pages/Accueil';
import NosEspaces from './pages/NosEspaces';
import RSE from './pages/RSE';
import Contact from './pages/Contact';
import './ressources/App.css';

export default function App() {
	return (
		<SiteProvider>
			<div className="app-root">
				<Header />
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<Accueil />} />
					<Route path="/nos-espaces" element={<NosEspaces />} />
					<Route path="/rse" element={<RSE />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
				<Footer />
			</div>
		</SiteProvider>
	);
}
