"use client";

import { useState } from "react";
import { Star, ChevronDown, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/site-data";

export function Hero() {
  const { t } = useI18n();
  const [faved, setFaved] = useState(false);

  return (
    <section id="top" className="relative w-full h-[88vh] min-h-[560px] max-h-[920px] overflow-hidden bg-black">
      {/* Background image with subtle ken burns */}
      <div className="absolute inset-0">
        <img
          src="/images/real-hero-canopy.jpg"
          alt="LadyRuthie's Events Center — a real garden reception setup at the venue in Haatso, Accra"
          className="w-full h-full object-cover animate-ken-burns"
          fetchPriority="high"
        />
        {/* gradient overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>

      {/* Favorite star (top-left) */}
      <button
        type="button"
        aria-label="Add to favourites"
        onClick={() => setFaved((f) => !f)}
        className="absolute top-5 left-5 md:top-8 md:left-8 z-20 inline-flex items-center justify-center w-11 h-11 bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 transition-colors"
      >
        <Star className={`w-5 h-5 ${faved ? "fill-[#D4A017] text-[#D4A017]" : ""}`} strokeWidth={1.5} />
      </button>

      {/* Hero content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="animate-fade-up">
          {/* Monogram emblem */}
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 border border-white/70 text-white mb-6 md:mb-8">
            <span className="font-serif text-[28px] md:text-[34px] leading-none tracking-tight">LR</span>
          </div>

          <p className="nav-link text-white/80 mb-4 md:mb-6">
            {t.heroEyebrow}
          </p>

          <h1 className="font-serif text-white text-[44px] sm:text-[56px] md:text-[72px] leading-[1.02] tracking-tight max-w-5xl">
            {SITE.fullName}
          </h1>

          <p className="mt-2 font-serif italic text-[#D4B3C4] text-[20px] md:text-[26px] tracking-wide">
            “{SITE.tagline}”
          </p>

          <p className="mt-6 md:mt-8 max-w-2xl mx-auto text-white/85 text-[15px] md:text-[16px] leading-[1.6]">
            {t.heroSubtitle}
          </p>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a href="#book" className="btn-jazcaf btn-jazcaf-primary">
              {t.bookNow}
            </a>
            <a href="#spaces" className="btn-jazcaf btn-jazcaf-light">
              {t.exploreSpaces}
            </a>
          </div>
        </div>
      </div>

      {/* Location chip */}
      <a
        href="#location"
        className="hidden md:inline-flex absolute bottom-28 right-10 z-20 items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-sm border border-white/20 text-white text-[11px] tracking-[0.18em] uppercase hover:bg-black/60 transition-colors"
      >
        <MapPin className="w-3.5 h-3.5" strokeWidth={1.6} />
        {SITE.area}, {SITE.country}
      </a>

      {/* Scroll chevron */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/80">
        <span className="nav-link hidden sm:block">{t.discoverMore}</span>
        <ChevronDown className="w-6 h-6 animate-scroll-chevron" strokeWidth={1.5} />
      </div>
    </section>
  );
}
