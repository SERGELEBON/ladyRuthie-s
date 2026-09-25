"use client";

import { useEffect } from "react";
import { X, Check, Phone } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { EVENT_SPACES, SITE } from "@/lib/site-data";

export function SpaceDetailsDialog({
  activeId,
  onClose,
}: {
  activeId: string | null;
  onClose: () => void;
}) {
  const { t, lang } = useI18n();
  const space = EVENT_SPACES.find((s) => s.id === activeId) || null;

  useEffect(() => {
    if (space) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [space]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!space) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-[110] flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={lang === "fr" ? space.frenchName : space.name}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white w-full max-w-4xl max-h-[92vh] overflow-y-auto scroll-styled">
        {/* Close */}
        <button
          type="button"
          aria-label={t.close}
          onClick={onClose}
          className="absolute top-4 right-4 z-10 inline-flex items-center justify-center w-10 h-10 bg-white/90 backdrop-blur-sm text-[#4A1E3D] hover:bg-white transition-colors"
        >
          <X className="w-5 h-5" strokeWidth={1.5} />
        </button>

        {/* Image */}
        <div className="relative aspect-[16/10] sm:aspect-[16/8] overflow-hidden bg-[#F6EEF2]">
          <img
            src={space.image}
            alt={lang === "fr" ? space.frenchName : space.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Body */}
        <div className="p-6 md:p-10">
          <p className="eyebrow mb-3">{t.spacesEyebrow}</p>
          <h3 className="serif-h3 mb-6">
            {lang === "fr" ? space.frenchName : space.name}
          </h3>
          <div className="section-divider mb-6 max-w-[60px]" />

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="border border-[#4A1E3D]/12 p-4">
              <div className="nav-link text-[#434343]">{t.capacity}</div>
              <div className="font-serif text-[#4A1E3D] text-[22px] mt-1">{space.capacity}</div>
            </div>
            <div className="border border-[#4A1E3D]/12 p-4">
              <div className="nav-link text-[#434343]">{t.area}</div>
              <div className="font-serif text-[#4A1E3D] text-[22px] mt-1">{space.area}</div>
            </div>
            <div className="border border-[#4A1E3D]/12 p-4">
              <div className="nav-link text-[#434343]">{t.bed}</div>
              <div className="font-serif text-[#4A1E3D] text-[20px] mt-1">{space.setup}</div>
            </div>
          </div>

          <p className="body-text mb-8">{lang === "fr" ? space.frenchDescription : space.description}</p>

          <h4 className="nav-link text-[#4A1E3D] mb-4">
            {lang === "fr" ? "Dans cet espace" : "In this space"}
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-10">
            {space.features.map((f) => (
              <li key={f} className="flex items-start gap-2 body-small text-[#434343]">
                <Check className="w-4 h-4 text-[#6B2A55] mt-0.5 shrink-0" strokeWidth={1.8} />
                {f}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#book" onClick={onClose} className="btn-jazcaf btn-jazcaf-primary">
              {t.bookNow}
            </a>
            <a href={`tel:${SITE.callPrimary}`} className="btn-jazcaf btn-jazcaf-outline">
              <Phone className="w-4 h-4" strokeWidth={1.5} />
              {SITE.callPrimary}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
