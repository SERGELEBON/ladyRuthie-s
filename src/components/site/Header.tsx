"use client";

import { useEffect, useState } from "react";
import { Globe } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { FullScreenMenu } from "./FullScreenMenu";
import { Logo } from "./Logo";

export function Header() {
  const { t, toggle, lang } = useI18n();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm transition-shadow ${
        scrolled ? "shadow-[0_1px_0_rgba(107,28,17,0.12)]" : ""
      }`}
    >
      <div className="container-edge">
        <div className="grid grid-cols-3 items-center h-[68px] md:h-[88px]">
          {/* left: menu */}
          <div className="flex items-center justify-start">
            <FullScreenMenu />
          </div>

          {/* center: logo */}
          <div className="flex items-center justify-center">
            <Logo showBaseline={false} />
          </div>

          {/* right: language + book */}
          <div className="flex items-center justify-end gap-4 md:gap-6">
            <button
              type="button"
              onClick={toggle}
              className="inline-flex items-center gap-2 text-[#4A1E3D] hover:opacity-70 transition-opacity"
              aria-label={t.otherLanguage}
            >
              <Globe className="w-4 h-4" strokeWidth={1.4} />
              <span className="nav-link">{t.language}</span>
            </button>
            <a href="#book" className="btn-jazcaf btn-jazcaf-primary hidden md:inline-flex">
              {t.book}
            </a>
          </div>
        </div>
      </div>
      <div className="section-divider opacity-60" />
    </header>
  );
}
