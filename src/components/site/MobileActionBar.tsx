"use client";

import { Phone, Calendar, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/site-data";

export function MobileActionBar() {
  const { t } = useI18n();

  return (
    <nav
      aria-label="Quick actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-[80] bg-[#4A1E3D] text-white grid grid-cols-3 border-t border-[#341429] pb-[env(safe-area-inset-bottom,0px)]"
    >
      <a
        href={`tel:${SITE.callPrimary}`}
        className="flex flex-col items-center justify-center gap-1 py-3 hover:bg-[#6B2A55] transition-colors"
      >
        <Phone className="w-5 h-5" strokeWidth={1.5} />
        <span className="nav-label text-[10px] tracking-[0.18em]" style={{ fontFamily: "var(--font-work-sans)", textTransform: "uppercase" }}>
          {t.call}
        </span>
      </a>
      <a
        href="#book"
        className="flex flex-col items-center justify-center gap-1 py-3 border-x border-[#341429] hover:bg-[#6B2A55] transition-colors"
      >
        <Calendar className="w-5 h-5" strokeWidth={1.5} />
        <span className="nav-label text-[10px] tracking-[0.18em]" style={{ fontFamily: "var(--font-work-sans)", textTransform: "uppercase" }}>
          {t.book}
        </span>
      </a>
      <a
        href={SITE.mapsLink}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center justify-center gap-1 py-3 hover:bg-[#6B2A55] transition-colors"
      >
        <MapPin className="w-5 h-5" strokeWidth={1.5} />
        <span className="nav-label text-[10px] tracking-[0.18em]" style={{ fontFamily: "var(--font-work-sans)", textTransform: "uppercase" }}>
          {t.gps}
        </span>
      </a>
    </nav>
  );
}
