"use client";

import { useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/site-data";

export function BrandStatement() {
  const { t } = useI18n();
  return (
    <section className="w-full bg-[#4A1E3D] text-white">
      <div className="container-edge py-20 md:py-32 text-center">
        <p className="nav-link text-[#D4B3C4] mb-6">{SITE.fullName}</p>
        <p className="font-serif italic text-white text-[26px] sm:text-[34px] md:text-[42px] leading-[1.25] max-w-4xl mx-auto text-balance">
          “{t.brandStatement}”
        </p>
        <div className="mt-10 inline-block w-12 h-px bg-white/40" />
      </div>
    </section>
  );
}
