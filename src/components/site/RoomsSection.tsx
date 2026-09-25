"use client";

import { useState } from "react";
import { ArrowRight, Users, MapPin, LayoutGrid } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { EVENT_SPACES } from "@/lib/site-data";
import { SpaceDetailsDialog } from "./SpaceDetailsDialog";

export function RoomsSection() {
  const { t, lang } = useI18n();
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="spaces" className="w-full bg-[#FAF7F8]">
      <div className="container-edge py-16 md:py-28">
        {/* Heading */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="eyebrow mb-4">{t.spacesEyebrow}</p>
          <h2 className="serif-h2 mb-6">{t.spacesTitle}</h2>
          <div className="section-divider mb-6 max-w-[80px]" />
          <p className="body-text">{t.spacesIntro}</p>
        </div>

        {/* Spaces grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {EVENT_SPACES.map((space) => (
            <article
              key={space.id}
              className="group bg-white flex flex-col border border-[#4A1E3D]/10 hover:border-[#4A1E3D]/30 transition-colors"
            >
              <button
                type="button"
                onClick={() => setActive(space.id)}
                className="block text-left w-full"
                aria-label={`${t.discoverMore} — ${lang === "fr" ? space.frenchName : space.name}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F6EEF2]">
                  <img
                    src={space.image}
                    alt={lang === "fr" ? space.frenchName : space.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 md:p-6 flex flex-col gap-3">
                  <h3 className="font-serif text-[#4A1E3D] text-[22px] leading-tight">
                    {lang === "fr" ? space.frenchName : space.name}
                  </h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[12px] text-[#434343]">
                    <span className="inline-flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#6B2A55]" strokeWidth={1.5} /> {space.capacity}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#6B2A55]" strokeWidth={1.5} /> {space.area}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <LayoutGrid className="w-3.5 h-3.5 text-[#6B2A55]" strokeWidth={1.5} /> {space.setup}
                    </span>
                  </div>
                  <p className="body-small line-clamp-3 mt-1">
                    {lang === "fr" ? space.frenchDescription : space.description}
                  </p>
                  <span className="mt-2 nav-link text-[#4A1E3D] inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    {t.discoverMore}
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </span>
                </div>
              </button>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#book" className="btn-jazcaf btn-jazcaf-outline">
            {t.bookNow}
          </a>
        </div>
      </div>

      <SpaceDetailsDialog activeId={active} onClose={() => setActive(null)} />
    </section>
  );
}
