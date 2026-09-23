import React, { createContext, useContext, useEffect, useState } from 'react';
import { dict } from '../i18n';

const SiteContext = createContext(null);

export function SiteProvider({ children }) {
	const [dark, setDark] = useState(false);
	const [lang, setLang] = useState('fr');

	useEffect(() => {
		document.documentElement.classList.toggle('dark', dark);
	}, [dark]);

	const t = dict[lang];

	return (
		<SiteContext.Provider value={{ dark, setDark, lang, setLang, t }}>
			{children}
		</SiteContext.Provider>
	);
}

// Hook générique réutilisable dans n'importe quelle page/composant
export function useSite() {
	const ctx = useContext(SiteContext);
	if (!ctx)
		throw new Error(
			"useSite doit être utilisé à l'intérieur de <SiteProvider>",
		);
	return ctx;
}
