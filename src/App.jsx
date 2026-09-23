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

// Nécessite tailwind.config.js avec: darkMode: 'class'
// et index.css avec les directives @tailwind (voir fichiers fournis)

export default function App() {
	return (
		<SiteProvider>
			<div className="min-h-screen bg-[#FAFAF8] dark:bg-[#111113] text-[#15140f] dark:text-[#EDEDED] font-sans transition-colors duration-300">
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
