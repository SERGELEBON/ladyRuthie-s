"use client";

import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { OFFERS } from "@/lib/site-data";

export function OffersSection() {
  const { t, lang } = useI18n();

  return (
    <section id="offers" className="w-full bg-[#FAF7F6]">
      <div className="container-edge py-16 md:py-28">
        {/* Heading */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="eyebrow mb-4">{t.offersEyebrow}</p>
          <h2 className="serif-h2 mb-6">{t.offersTitle}</h2>
          <div className="section-divider mb-6 max-w-[80px]" />
          <p className="body-text">{t.offersIntro}</p>
        </div>

        {/* Offers grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {OFFERS.map((o) => (
            <article
              key={o.id}
              className="group bg-white flex flex-col border border-[#4A1E3D]/10 hover:border-[#4A1E3D]/30 transition-colors"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F6EEF2]">
                <img
                  src={o.image}
                  alt={lang === "fr" ? o.frenchTitle : o.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/95 text-[#4A1E3D] nav-link text-[10px]">
                  {lang === "fr" ? o.frenchTag : o.tag}
                </span>
              </div>
              <div className="p-6 md:p-7 flex flex-col flex-1">
                <h3 className="font-serif text-[#4A1E3D] text-[24px] leading-tight mb-3">
                  {lang === "fr" ? o.frenchTitle : o.title}
                </h3>
                <p className="body-small flex-1 line-clamp-4">
                  {lang === "fr" ? o.frenchBlurb : o.blurb}
                </p>
                <a
                  href="#book"
                  className="mt-6 btn-jazcaf btn-jazcaf-outline inline-flex items-center gap-2 self-start"
                >
                  {t.bookTheOffer}
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#book" className="btn-jazcaf btn-jazcaf-primary">
            {t.bookNow}
          </a>
        </div>
      </div>
    </section>
  );
}
