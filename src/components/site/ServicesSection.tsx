"use client";

import { ArrowRight, Check } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { FACILITIES, QUICK_SERVICES } from "@/lib/site-data";

export function ServicesSection() {
  const { t, lang } = useI18n();

  return (
    <section id="services" className="w-full bg-white">
      <div className="container-edge py-16 md:py-28">
        {/* Heading */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="eyebrow mb-4">{t.servicesEyebrow}</p>
          <h2 className="serif-h2 mb-6">{t.servicesTitle}</h2>
          <div className="section-divider mb-6 max-w-[80px]" />
          <p className="body-text">{t.servicesIntro}</p>
        </div>

        {/* Facilities grid: 2 large + 2 stacked */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {FACILITIES.map((f, i) => (
            <article
              key={f.id}
              className={`group relative overflow-hidden bg-[#FAF7F6] ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className={`relative ${i === 0 ? "aspect-[16/8] md:aspect-[2/1]" : "aspect-[4/3]"} overflow-hidden`}>
                <img
                  src={f.image}
                  alt={lang === "fr" ? f.frenchName : f.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 md:p-8">
                  <h3 className="font-serif text-white text-[24px] md:text-[30px] leading-tight">
                    {lang === "fr" ? f.frenchName : f.name}
                  </h3>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="body-small">
                  {lang === "fr" ? f.frenchDescription : f.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Quick services list */}
        <div className="mt-14 border-t border-[#4A1E3D]/12 pt-10">
          <h3 className="nav-link text-[#4A1E3D] mb-6">
            {lang === "fr" ? "Autres services" : "Additional services"}
          </h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-6">
            {QUICK_SERVICES.map((s) => (
              <li key={s} className="flex items-start gap-2 body-small text-[#434343]">
                <Check className="w-4 h-4 text-[#6B2A55] mt-0.5 shrink-0" strokeWidth={1.8} />
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <a href="#event-center" className="btn-jazcaf btn-jazcaf-outline inline-flex items-center gap-2">
            {t.discoverMore}
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
