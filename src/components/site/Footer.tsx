"use client";

import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { NAV_LINKS, SITE } from "@/lib/site-data";
import { Logo } from "./Logo";

export function Footer() {
  const { t, lang } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1F0E19] text-white/80 mt-auto">
      <div className="container-edge py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex flex-col items-start gap-3">
              <div className="inline-flex items-center gap-2.5">
                <span className="inline-flex items-center justify-center w-9 h-9 border border-white/80 text-white">
                  <span className="font-serif text-[18px] leading-none tracking-tight">JC</span>
                </span>
                <span className="font-serif text-white text-[26px] leading-none tracking-[0.02em]">
                  {SITE.name}
                </span>
              </div>
              <span className="nav-link text-[#D4B3C4]">{SITE.baseline.toUpperCase()}</span>
            </div>
            <p className="body-small text-white/70 mt-5 max-w-sm">{t.footerAbout}</p>

            <div className="flex items-center gap-3 mt-6">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center justify-center w-10 h-10 border border-white/20 text-white hover:bg-white/10 transition-colors"
              >
                <Instagram className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="inline-flex items-center justify-center w-10 h-10 border border-white/20 text-white hover:bg-white/10 transition-colors"
              >
                <Facebook className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="md:col-span-3">
            <h4 className="nav-link text-white mb-5">{t.footerExplore}</h4>
            <ul className="space-y-3">
              {NAV_LINKS.filter((l) => l.id !== "home").map((link) => (
                <li key={link.id}>
                  <a
                    href={link.target}
                    className="body-small text-white/70 hover:text-white transition-colors"
                  >
                    {lang === "fr" ? link.frenchLabel : link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-5">
            <h4 className="nav-label text-white mb-5" style={{ fontFamily: "var(--font-work-sans)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" }}>
              {t.footerContact}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4B3C4] mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <div className="nav-label text-white/50" style={{ fontFamily: "var(--font-work-sans)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" }}>
                    {t.findUs}
                  </div>
                  <p className="body-small text-white/80 mt-1">{SITE.addressFull}</p>
                  <a
                    href={SITE.mapsLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[12px] text-[#D4B3C4] hover:text-white underline underline-offset-4 mt-1 inline-block"
                  >
                    {t.getDirections}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#D4B3C4] mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <div className="nav-label text-white/50" style={{ fontFamily: "var(--font-work-sans)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" }}>
                    {t.callUs}
                  </div>
                  <p className="body-small text-white/80 mt-1">
                    {SITE.phones.map((p, i) => (
                      <span key={p}>
                        <a href={`tel:${p}`} className="hover:text-white transition-colors">{p}</a>
                        {i < SITE.phones.length - 1 && <span className="mx-2 text-white/40">·</span>}
                      </span>
                    ))}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#D4B3C4] mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <div className="nav-label text-white/50" style={{ fontFamily: "var(--font-work-sans)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" }}>
                    Email
                  </div>
                  <a href={`mailto:${SITE.email}`} className="body-small text-white/80 hover:text-white transition-colors mt-1 inline-block">
                    {SITE.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[12px] text-white/50">
            © {year} {SITE.fullName} & Event Center. {t.footerRights}
          </p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <li>
              <a href="#book" className="text-[12px] text-white/60 hover:text-white transition-colors">
                {t.footerContactUs}
              </a>
            </li>
            <li><a href="#" className="text-[12px] text-white/60 hover:text-white transition-colors">{t.footerPrivacy}</a></li>
            <li><a href="#" className="text-[12px] text-white/60 hover:text-white transition-colors">{t.footerCookies}</a></li>
            <li><a href="#" className="text-[12px] text-white/60 hover:text-white transition-colors">{t.footerAccessibility}</a></li>
          </ul>
        </div>
        <p className="text-[11px] text-white/30 mt-4">{t.legalLine}</p>
      </div>
    </footer>
  );
}
