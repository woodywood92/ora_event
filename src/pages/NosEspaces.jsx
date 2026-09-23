import React from "react";
import { Check } from "lucide-react";
import { PHOTOS } from "../i18n";
import { useSite } from "../context/SiteContext";
import Reveal from "../components/Reveal";

const LIEUX_IMG = [PHOTOS.auditorium, PHOTOS.meeting, PHOTOS.reception];

export default function NosEspaces() {
  const { t } = useSite();

  return (
    <div className="pt-32 pb-24">
      <section className="px-6 md:px-10 max-w-3xl mx-auto text-center mb-16">
        <Reveal>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-6">{t.nosEspacesPage.title}</h1>
        </Reveal>
        <Reveal className="mt-4">
          <p className="text-gray-500 dark:text-[#8a8a8a] leading-relaxed">{t.nosEspacesPage.intro}</p>
        </Reveal>
      </section>

      <section className="px-6 md:px-10 max-w-7xl mx-auto">
        <Reveal>
          <h2 className="font-display text-xl font-bold mb-8">{t.nosEspacesPage.detailTitle}</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {t.lieux.map((l, i) => (
            <Reveal key={l.nom}>
              <div className="overflow-hidden mb-5 h-[300px]">
                <img src={LIEUX_IMG[i]} alt={l.nom} className="w-full h-full object-cover" />
              </div>
              <p className="text-xs text-[#5f7d6f] dark:text-[#8FA79B] mb-1">{l.tag}</p>
              <h3 className="font-display text-xl font-bold mb-3">{l.nom}</h3>
              <p className="text-sm text-gray-600 dark:text-[#B7B7B7] leading-relaxed">{l.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 grid sm:grid-cols-3 gap-8 border-t border-black/10 dark:border-white/10 pt-10">
          {[t.infos.capacite, t.infos.equip, t.infos.types].map((block) => (
            <div key={block.h}>
              <p className="text-xs tracking-[0.15em] text-[#5f7d6f] dark:text-[#8FA79B] mb-3">{block.h}</p>
              <ul className="space-y-2">
                {block.bullets.map((b, i) => (
                  <li key={i} className="text-sm text-gray-600 dark:text-[#B7B7B7] flex items-start gap-2">
                    <Check size={14} className="mt-0.5 shrink-0 text-[#5f7d6f] dark:text-[#8FA79B]" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </section>
    </div>
  );
}
