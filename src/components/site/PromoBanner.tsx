"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/site-data";

export function PromoBanner() {
  const { t, lang } = useI18n();
  const [closed, setClosed] = useState(false);
  const [idx, setIdx] = useState(0);

  const benefits =
    lang === "fr"
      ? [
          "Meilleur tarif en réservation directe",
          "Event Center dédié disponible",
          "Parking sécurisé offert",
          "Réception 24h/24 & navette aéroport",
        ]
      : [
          "Best rate when you book direct",
          "Dedicated Event Center available",
          "Complimentary secure parking",
          "24-hour front desk & airport shuttle",
        ];

  useEffect(() => {
    if (closed) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % benefits.length), 4000);
    return () => clearInterval(id);
  }, [closed, benefits.length]);

  if (closed) return null;

  return (
    <div className="bg-[#341429] text-white/95 text-[12px] tracking-wide">
      <div className="container-edge flex items-center justify-center gap-4 py-2.5 relative">
        <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-[#D4A017] shrink-0" />
        <p className="text-center flex-1 min-h-[18px] transition-opacity duration-500">
          <span className="font-medium">{benefits[idx]}</span>
          <span className="mx-2 text-white/40">·</span>
          <a
            href="#book"
            className="underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors"
          >
            {t.bookNow}
          </a>
        </p>
        <button
          type="button"
          aria-label={t.promoClose}
          onClick={() => setClosed(true)}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 p-1 text-white/60 hover:text-white transition-colors"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
