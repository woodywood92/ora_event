import React from "react";
import {Check} from "lucide-react";
import {PHOTOS} from "../i18n";
import {useSite} from "../context/SiteContext";
import Reveal from "../components/Reveal";
import "../ressources/Colline.css";
import Gallery from "../components/Gallery.jsx";
import foyer_profil from "../ressources/images/Foyer/foyer_profil.jpg";
import foyer_principal from "../ressources/images/Foyer/foyer_principal.jpg";
import foyer_chaises from "../ressources/images/Foyer/foyer_chaises.jpg";
import foyer_full from "../ressources/images/Foyer/foyer_full.jpg";
import patio_satellite_1 from "../ressources/images/Patio/patio_satellite_1.jpg";
import patio_satellite_2 from "../ressources/images/Patio/patio_satellite_2.jpg";
import rooftop_principal from "../ressources/images/Rooftop/rooftop_principal.jpg";
import rooftop_effeil from "../ressources/images/Rooftop/rooftop_effeil.jpg";
import rooftop_ia from "../ressources/images/Rooftop/rooftop_ia.png";
import rooftop_pyramide from "../ressources/images/Rooftop/rooftop_pyramide.jpg";
import rooftop_montparnasse from "../ressources/images/Rooftop/rooftop_montparnasse.jpg";

const MATTERPORT_EMBED_URL_LOUNGE = "https://shoootin.com/scan/6ac4b4187f82204a39d13899";

// Photos provisoires : à remplacer par les vraies photos de La Colline
const HERO_IMG = PHOTOS.colline_amphi_full;
const SECTION_IMGS = [PHOTOS.reception, PHOTOS.meeting, PHOTOS.auditorium, PHOTOS.colline_amphi_full];

export default function Colline() {
    const {t} = useSite();

    return (
        <div className="colline">
            <section className="colline-intro">
                <Reveal>
                    <h1 className="colline-title">{t.collinePage.title}</h1>
                </Reveal>
                <Reveal className="colline-intro-reveal">
                    <p className="colline-intro-text">{t.collinePage.intro}</p>
                </Reveal>
            </section>

            <section className="colline-hero">
                <Reveal className="colline-text">
                    <p className="colline-eyebrow">{t.collinePage.hero.headerTitle}</p>
                    <h2 className="colline-heading">{t.collinePage.hero.title}</h2>
                    {t.collinePage.hero.paragraphs.map((p, i) => (
                        <p key={i} className="colline-paragraph">
                            {p}
                        </p>
                    ))}
                </Reveal>
                <Reveal>
                    <Gallery
                        photos={[
                            { src: PHOTOS.colline_amphi_full, alt: "" },
                            { src: PHOTOS.colline_amphi_bas, alt: "" },
                            { src: PHOTOS.colline_jardin_ext, alt: "" },
                            { src: PHOTOS.colline_facade_ext, alt: '' },
                            { src: PHOTOS.colline_facade, alt: '' },
                            { src: PHOTOS.colline_lustre, alt: '' },
                            { src: PHOTOS.colline_restaurant_principal, alt: '' },
                            { src: PHOTOS.colline_restaurant_profil, alt: '' },
                        ]}
                    />
                </Reveal>
            </section>

            <section className="colline-tour">
                <Reveal>
                    <div className="colline-virtual-header">
                        <h2 className="colline-virtual-title">{t.collinePage.virtualTourTitle}</h2>
                        <p className="colline-virtual-address">{t.collinePage.virtualTourSubTitle}</p>
                    </div>

                    {MATTERPORT_EMBED_URL_LOUNGE ? (
                        <div className="colline-virtual-embed">
                            <iframe
                                title="Visite virtuelle Le Carré Vaugirard"
                                src={MATTERPORT_EMBED_URL_LOUNGE}
                                className="w-full h-full"
                                frameBorder="0"
                                allow="xr-spatial-tracking; gyroscope; accelerometer; fullscreen"
                                allowFullScreen
                                loading="lazy"
                            />
                        </div>
                    ) : (
                        <div className="colline-virtual-placeholder">
                            <p className="colline-virtual-placeholder-text">
                                Visite virtuelle à venir — lien Matterport en attente d'intégration
                            </p>
                        </div>
                    )}
                </Reveal>
            </section>

            {/* Sections alternées : description / photo, puis photo / description */}
            <section className="colline-rows">
                {t.collinePage.sections.map((s, i) => (
                    <div
                        key={s.title}
                        className={`colline-row ${i % 2 === 1 ? 'colline-row--reverse' : ''}`}
                    >
                        <Reveal className="colline-text">
                            <h3 className="colline-heading">{s.title}</h3>
                            <p className="colline-paragraph">{s.text}</p>
                        </Reveal>
                        <Reveal>
                            <Gallery
                                photos={
                                    s.photos ?? [
                                        { src: SECTION_IMGS[i % SECTION_IMGS.length], alt: s.title },
                                    ]
                                }
                            />
                        </Reveal>
                    </div>
                ))}
            </section>
        </div>
    );
}