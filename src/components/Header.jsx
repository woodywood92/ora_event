import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useSite } from "../context/SiteContext";

const NAV_ITEMS = [
  { to: "/", key: "accueil" },
  { to: "/nos-espaces", key: "espaces" },
  { to: "/rse", key: "rse" },
  { to: "/contact", key: "contact" },
];

export default function Header() {
  const { dark, setDark, lang, setLang, t } = useSite();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/10 dark:border-white/10 backdrop-blur bg-[#FAFAF8]/75 dark:bg-[#111113]/70">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between gap-4">
          <Link to="/" className="font-display font-bold tracking-tight">
            Le Carré <span className="text-[#C47B3A]">Vaugirard</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600 dark:text-[#B7B7B7]">
            {NAV_ITEMS.map((item) => (
              <Link key={item.to} to={item.to} className="hover:text-current transition-colors">
                {t.nav[item.key]}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "fr" ? "en" : "fr")}
              className="text-xs font-semibold border border-black/15 dark:border-white/15 rounded-full px-3 py-1.5 hover:border-[#C47B3A] transition-colors"
            >
              {lang === "fr" ? "EN" : "FR"}
            </button>
            <button
              onClick={() => setDark(!dark)}
              aria-label="Changer de thème"
              className="w-9 h-9 rounded-full border border-black/15 dark:border-white/15 flex items-center justify-center hover:border-[#C47B3A] transition-colors"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <Link
              to="/contact"
              className="hidden sm:inline-block text-sm border border-black/15 dark:border-white/15 px-4 py-2 hover:border-[#C47B3A] transition-colors"
            >
              {t.nav.visite}
            </Link>
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Ouvrir le menu"
              className="md:hidden w-9 h-9 rounded-full border border-black/15 dark:border-white/15 flex items-center justify-center hover:border-[#C47B3A] transition-colors"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* MENU MOBILE */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
        <div
          className={`absolute top-0 right-0 h-full w-[78%] max-w-xs bg-[#FAFAF8] dark:bg-[#111113] border-l border-black/10 dark:border-white/10 flex flex-col transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-16 flex items-center justify-end px-6 border-b border-black/10 dark:border-white/10">
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Fermer le menu"
              className="w-9 h-9 rounded-full border border-black/15 dark:border-white/15 flex items-center justify-center"
            >
              <X size={18} />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-10 gap-8 text-lg font-display">
            {NAV_ITEMS.map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setMobileMenuOpen(false)}>
                {t.nav[item.key]}
              </Link>
            ))}
          </nav>
          <div className="mt-auto px-6 pb-10">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center text-sm border border-black/15 dark:border-white/15 px-4 py-3 hover:border-[#C47B3A] transition-colors"
            >
              {t.nav.visite}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
