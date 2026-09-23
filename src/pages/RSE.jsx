import React from "react";
import { useSite } from "../context/SiteContext";
import Reveal from "../components/Reveal";

export default function RSE() {
  const { t } = useSite();

  return (
    <div className="pt-32 pb-24">
      <section className="px-6 md:px-10 max-w-3xl mx-auto text-center mb-16">
        <Reveal>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-6">{t.rsePage.title}</h1>
        </Reveal>
        <Reveal className="mt-4">
          <p className="text-gray-500 dark:text-[#8a8a8a] leading-relaxed">{t.rsePage.intro}</p>
        </Reveal>
      </section>

      <section className="px-6 md:px-10 max-w-5xl mx-auto grid sm:grid-cols-2 gap-8">
        {t.rsePage.pillars.map((p) => (
          <Reveal key={p.title}>
            <div className="border border-black/10 dark:border-white/10 p-6 h-full">
              <h3 className="font-display text-lg font-bold mb-2 text-[#5f7d6f] dark:text-[#8FA79B]">{p.title}</h3>
              <p className="text-sm text-gray-600 dark:text-[#B7B7B7] leading-relaxed">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="px-6 md:px-10 max-w-3xl mx-auto mt-16">
        <Reveal>
          <p className="text-xs text-gray-400 dark:text-[#6b6b6b] text-center italic">{t.rsePage.note}</p>
        </Reveal>
      </section>
    </div>
  );
}
