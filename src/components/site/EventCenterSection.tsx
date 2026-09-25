"use client";

import { Check, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/site-data";

export function EventCenterSection() {
  const { t, lang } = useI18n();
  const bullets =
    lang === "fr"
      ? [
          "Jusqu’à 300 invités · configuration flexible",
          "Restauration et bar en interne",
          "Son, scène et matériel audiovisuel",
          "Décoration et planification d’événement",
        ]
      : t.eventBullets;

  return (
    <section id="event-center" className="relative w-full bg-black overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/space-banquet.png"
          alt="LadyRuthie's Events Center banquet hall in Haatso, Accra"
          className="w-full h-full object-cover opacity-55"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative container-edge py-20 md:py-32">
        <div className="max-w-2xl text-white">
          <p className="nav-link text-[#D4B3C4] mb-4">{t.eventEyebrow}</p>
          <h2 className="font-serif text-white text-[34px] sm:text-[44px] md:text-[56px] leading-[1.05] mb-6">
            {t.eventTitle}
          </h2>
          <div className="w-12 h-px bg-white/40 mb-8" />
          <p className="text-white/85 text-[16px] md:text-[17px] leading-[1.65] mb-6">
            {t.eventIntro}
          </p>
          <p className="text-white/80 text-[15px] leading-[1.65] mb-10">
            {t.eventBody}
          </p>

          {/* Capacity badge */}
          <div className="inline-flex items-baseline gap-3 px-5 py-3 border border-white/30 mb-8">
            <span className="font-serif text-white text-[34px] leading-none">500</span>
            <span className="nav-link text-white/75">{lang === "fr" ? "invités max" : "max guests"}</span>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-10">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-white/90 text-[15px]">
                <Check className="w-4 h-4 text-[#D4A017] mt-0.5 shrink-0" strokeWidth={2} />
                {b}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#book" className="btn-jazcaf btn-jazcaf-primary">
              {t.inquireEvent}
            </a>
            <a href="#gallery" className="btn-jazcaf btn-jazcaf-light inline-flex items-center gap-2">
              {t.viewGallery}
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
