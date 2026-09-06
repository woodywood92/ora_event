import React, { useEffect, useState } from "react";
import { ArrowRight, MapPin, Users, Building2, Sun, Moon } from "lucide-react";
import { dict, PHOTOS } from "./i18n";
import { useReveal, useCountUp } from "./useReveal";

// Nécessite tailwind.config.js avec: darkMode: 'class'
// et index.css avec les directives @tailwind (voir fichiers fournis)

const LIEUX_IMG = [PHOTOS.auditorium, PHOTOS.meeting, PHOTOS.reception];
const SLIDES_IMG = [PHOTOS.auditorium, PHOTOS.reception, PHOTOS.meeting];

function Reveal({ children, className = "" }) {
  const [ref, inView] = useReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function Stat({ icon: Icon, target, suffix, label, sub }) {
  const [ref, value] = useCountUp(target);
  return (
    <div ref={ref} className="px-6 md:px-10 py-10 flex items-center gap-4">
      <Icon className="text-[#8FA79B] dark:text-[#8FA79B]" size={22} />
      <div>
        <p className="font-display font-bold">
          {value.toLocaleString("fr-FR")}
          {suffix}
        </p>
        <p className="text-xs text-gray-500 dark:text-[#8a8a8a]">{sub}</p>
      </div>
    </div>
  );
}

export default function App() {
  const [dark, setDark] = useState(true);
  const [lang, setLang] = useState("fr");
  const [slide, setSlide] = useState(0);
  const t = dict[lang];

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const timer = setInterval(() => setSlide((s) => (s + 1) % 3), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF8] dark:bg-[#111113] text-[#15140f] dark:text-[#EDEDED] font-sans transition-colors duration-300">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/10 dark:border-white/10 backdrop-blur bg-[#FAFAF8]/75 dark:bg-[#111113]/70">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between gap-4">
          <div className="font-display font-bold tracking-tight">
            Le Carré <span className="text-[#5f7d6f] dark:text-[#8FA79B]">Vaugirard</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600 dark:text-[#B7B7B7]">
            <a href="#accueil" className="hover:text-current transition-colors">{t.nav.accueil}</a>
            <a href="#lieux" className="hover:text-current transition-colors">{t.nav.lieux}</a>
            <a href="#contact" className="hover:text-current transition-colors">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "fr" ? "en" : "fr")}
              className="text-xs font-semibold border border-black/15 dark:border-white/15 rounded-full px-3 py-1.5 hover:border-[#8FA79B] transition-colors"
            >
              {lang === "fr" ? "EN" : "FR"}
            </button>
            <button
              onClick={() => setDark(!dark)}
              aria-label="Changer de thème"
              className="w-9 h-9 rounded-full border border-black/15 dark:border-white/15 flex items-center justify-center hover:border-[#8FA79B] transition-colors"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a
              href="#contact"
              className="hidden sm:inline-block text-sm border border-black/15 dark:border-white/15 px-4 py-2 hover:border-[#8FA79B] transition-colors"
            >
              {t.nav.visite}
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="accueil" className="relative h-screen w-full overflow-hidden pt-16">
        {SLIDES_IMG.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
              i === slide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111113] via-[#111113]/60 to-transparent" />

        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-14 max-w-3xl text-white">
          <div key={slide} className="animate-[fadeInSlide_.7s_ease_forwards]">
            <div className="flex items-center gap-3 mb-6 text-[#8FA79B] text-sm">
              <span className="font-display">{t.slides[slide].n}</span>
              <span className="h-px w-10 bg-[#8FA79B]/50" />
              <span>Paris 15ᵉ</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.05]">
              {t.slides[slide].title}
            </h1>
            <a
              href="#lieux"
              className="mt-8 inline-flex items-center gap-2 text-sm border-b border-white/40 pb-1 hover:border-white transition-colors"
            >
              {t.heroCta} <ArrowRight size={15} />
            </a>
          </div>
        </div>

        {/* Points cliquables */}
        <div className="absolute bottom-8 left-6 md:left-14 flex items-center gap-3 z-10">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              aria-label={`Slide ${i + 1}`}
              className="relative flex items-center justify-center w-6 h-6"
            >
              <span
                className={`rounded-full transition-all duration-300 ${
                  i === slide ? "w-2.5 h-2.5 bg-white" : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
                }`}
              />
              {i === slide && (
                <span className="absolute inset-0 rounded-full border border-white/40 animate-ping" />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 md:px-10 py-24 max-w-4xl mx-auto text-center">
        <Reveal>
          <p className="text-xl md:text-2xl leading-relaxed">{t.intro.p1}</p>
        </Reveal>
        <Reveal className="mt-6">
          <p className="text-sm text-gray-500 dark:text-[#8a8a8a] max-w-xl mx-auto">{t.intro.p2}</p>
        </Reveal>
      </section>

      {/* STATS */}
      <section className="border-y border-black/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-3 divide-x divide-black/10 dark:divide-white/10">
          <Stat icon={Building2} target={2000} suffix=" m²" sub={t.stats.m2} />
          <Stat icon={Users} target={500} suffix={` ${t.stats.pers}`} sub={t.stats.cap} />
          <div className="px-6 md:px-10 py-10 flex items-center gap-4">
            <MapPin className="text-[#8FA79B]" size={22} />
            <div>
              <p className="font-display font-bold">Paris 15ᵉ</p>
              <p className="text-xs text-gray-500 dark:text-[#8a8a8a]">{t.stats.metro}</p>
            </div>
          </div>
        </div>
      </section>

      {/* NOS LIEUX */}
      <section id="lieux" className="px-6 md:px-10 py-24 max-w-7xl mx-auto">
        <Reveal className="flex items-end justify-between mb-12 gap-4 flex-wrap">
          <h2 className="font-display text-3xl md:text-4xl font-bold">{t.lieuxTitle}</h2>
          <p className="text-sm text-gray-500 dark:text-[#8a8a8a] max-w-sm md:text-right">{t.lieuxSub}</p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {t.lieux.map((l, i) => (
            <Reveal key={l.nom}>
              <div className="group relative overflow-hidden h-[380px]">
                <img
                  src={LIEUX_IMG[i]}
                  alt={l.nom}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-xs text-[#8FA79B] mb-1">{l.tag}</p>
                  <h3 className="font-display text-xl font-bold mb-2">{l.nom}</h3>
                  <p className="text-xs text-gray-200 max-w-[240px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {l.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 grid sm:grid-cols-3 gap-8 border-t border-black/10 dark:border-white/10 pt-10">
          <div>
            <p className="text-xs tracking-[0.15em] text-[#5f7d6f] dark:text-[#8FA79B] mb-2">{t.infos.equip.h}</p>
            <p className="text-sm text-gray-600 dark:text-[#B7B7B7]">{t.infos.equip.p}</p>
          </div>
          <div>
            <p className="text-xs tracking-[0.15em] text-[#5f7d6f] dark:text-[#8FA79B] mb-2">{t.infos.types.h}</p>
            <p className="text-sm text-gray-600 dark:text-[#B7B7B7]">{t.infos.types.p}</p>
          </div>
          <div>
            <p className="text-xs tracking-[0.15em] text-[#5f7d6f] dark:text-[#8FA79B] mb-2">{t.infos.avenir.h}</p>
            <p className="text-sm text-gray-600 dark:text-[#B7B7B7]">{t.infos.avenir.p}</p>
          </div>
        </Reveal>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 md:px-10 py-24 bg-black/[0.02] dark:bg-white/[0.03]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">{t.contact.title}</h2>
            <p className="text-sm text-gray-600 dark:text-[#B7B7B7] mb-8 max-w-sm">{t.contact.desc}</p>
            <div className="space-y-3 text-sm text-gray-600 dark:text-[#B7B7B7]">
              <p>255 rue de Vaugirard, 75015 Paris</p>
              <p>contact@ora-events.fr</p>
              <p>{t.contact.metro}</p>
              <p>{t.contact.gare}</p>
            </div>
          </Reveal>
          <Reveal>
            <form
              className="bg-[#FAFAF8] dark:bg-[#111113] border border-black/10 dark:border-white/10 p-8 space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                placeholder={t.form.name}
                className="w-full bg-transparent border border-black/15 dark:border-white/15 px-4 py-3 text-sm placeholder-gray-400 dark:placeholder-[#6b6b6b] focus:outline-none focus:border-[#8FA79B] transition-colors"
              />
              <input
                placeholder={t.form.email}
                className="w-full bg-transparent border border-black/15 dark:border-white/15 px-4 py-3 text-sm placeholder-gray-400 dark:placeholder-[#6b6b6b] focus:outline-none focus:border-[#8FA79B] transition-colors"
              />
              <textarea
                placeholder={t.form.msg}
                rows={4}
                className="w-full bg-transparent border border-black/15 dark:border-white/15 px-4 py-3 text-sm placeholder-gray-400 dark:placeholder-[#6b6b6b] focus:outline-none focus:border-[#8FA79B] transition-colors resize-none"
              />
              <button className="w-full bg-[#8FA79B] text-[#0d0d0d] font-medium text-sm px-6 py-3 hover:opacity-85 transition-opacity flex items-center justify-center gap-2">
                {t.form.send} <ArrowRight size={15} />
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <footer className="px-6 md:px-10 py-8 text-xs text-gray-500 dark:text-[#6b6b6b] flex justify-between max-w-7xl mx-auto border-t border-black/10 dark:border-white/10">
        <span>{t.footer}</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}
