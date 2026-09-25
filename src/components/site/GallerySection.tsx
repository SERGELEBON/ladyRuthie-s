"use client";

import { useState, useMemo } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { GALLERY, GALLERY_FILTERS } from "@/lib/site-data";

export function GallerySection() {
  const { t, lang } = useI18n();
  const [filter, setFilter] = useState<string>("all");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const visible = useMemo(
    () =>
      filter === "all"
        ? GALLERY
        : GALLERY.filter((g) => g.category === filter),
    [filter]
  );

  const closeLightbox = () => setLightboxIdx(null);
  const next = () =>
    setLightboxIdx((i) => (i === null ? i : (i + 1) % visible.length));
  const prev = () =>
    setLightboxIdx((i) => (i === null ? i : (i - 1 + visible.length) % visible.length));

  return (
    <section id="gallery" className="w-full bg-white">
      <div className="container-edge py-16 md:py-28">
        {/* Heading */}
        <div className="max-w-3xl mb-10 md:mb-14">
          <p className="eyebrow mb-4">{lang === "fr" ? "Galerie" : "Gallery"}</p>
          <h2 className="serif-h2 mb-6">
            {lang === "fr" ? t.galleryTitleFr : t.galleryTitle}
          </h2>
          <div className="section-divider mb-8 max-w-[80px]" />
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-10">
          {GALLERY_FILTERS.map((f) => {
            const isActive = filter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={`px-4 py-2 border nav-link text-[11px] transition-colors ${
                  isActive
                    ? "bg-[#4A1E3D] text-white border-[#4A1E3D]"
                    : "bg-white text-[#4A1E3D] border-[#4A1E3D]/30 hover:border-[#4A1E3D]"
                }`}
              >
                {lang === "fr" ? f.frenchLabel : f.label}
              </button>
            );
          })}
        </div>

        {/* Masonry-ish grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {visible.map((img, i) => (
            <button
              key={img.id}
              type="button"
              onClick={() => setLightboxIdx(i)}
              className="group relative aspect-square overflow-hidden bg-[#F6EEF2] block"
              aria-label={lang === "fr" ? img.frenchCaption : img.caption}
            >
              <img
                src={img.src}
                alt={lang === "fr" ? img.frenchCaption : img.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white text-[12px] leading-snug text-left">
                  {lang === "fr" ? img.frenchCaption : img.caption}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && visible[lightboxIdx] && (
        <div
          className="fixed inset-0 z-[120] bg-black/90 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
        >
          <button
            type="button"
            aria-label={t.close}
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2"
          >
            <X className="w-6 h-6" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="Previous"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2"
          >
            <ChevronLeft className="w-8 h-8" strokeWidth={1.3} />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2"
          >
            <ChevronRight className="w-8 h-8" strokeWidth={1.3} />
          </button>
          <figure className="max-w-5xl max-h-[88vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={visible[lightboxIdx].src}
              alt={lang === "fr" ? visible[lightboxIdx].frenchCaption : visible[lightboxIdx].caption}
              className="max-h-[78vh] w-auto object-contain"
            />
            <figcaption className="text-white/80 text-sm mt-4 text-center">
              {lang === "fr" ? visible[lightboxIdx].frenchCaption : visible[lightboxIdx].caption}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
