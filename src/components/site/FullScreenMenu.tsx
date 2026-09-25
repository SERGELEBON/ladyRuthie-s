"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { Menu, X, ChevronDown, Phone, Globe } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { NAV_LINKS, SITE } from "@/lib/site-data";
import { Logo } from "./Logo";

// Hydration-safe "is client" flag (no setState-in-effect).
const noopSubscribe = () => () => {};
const clientTrue = () => true;
const serverFalse = () => false;

export function FullScreenMenu() {
  const { t, lang, toggle } = useI18n();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const mounted = useSyncExternalStore(noopSubscribe, clientTrue, serverFalse);

  // Lock scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const overlay = (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 w-full h-full z-[100] bg-white flex flex-col"
        >
          {/* top bar */}
          <div className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-[#4A1E3D]/10">
            <Logo />
            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={toggle}
                className="inline-flex items-center gap-2 text-[#4A1E3D] hover:opacity-70 transition-opacity"
                aria-label={t.otherLanguage}
              >
                <Globe className="w-4 h-4" strokeWidth={1.4} />
                <span className="nav-link">{t.otherLanguage}</span>
              </button>
              <button
                type="button"
                aria-label={t.close}
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center w-10 h-10 text-[#4A1E3D] hover:bg-[#F6EEF2] transition-colors"
              >
                <X className="w-6 h-6" strokeWidth={1.4} />
              </button>
            </div>
          </div>

          {/* nav list */}
          <nav className="flex-1 overflow-y-auto scroll-styled">
            <div className="mx-auto max-w-4xl px-6 md:px-10 py-10 md:py-16">
              <ul className="flex flex-col">
                {NAV_LINKS.map((link, i) => {
                  const hasChildren = !!link.children?.length;
                  const isExpanded = expanded === link.id;
                  return (
                    <li key={link.id} className="border-b border-[#4A1E3D]/10">
                      <div className="flex items-center justify-between py-4 md:py-5">
                        <a
                          href={link.target}
                          onClick={() => setOpen(false)}
                          className="font-serif text-[28px] md:text-[40px] leading-tight text-[#4A1E3D] hover:text-[#6B2A55] transition-colors"
                          style={{ animation: `fadeUp 0.5s ease ${i * 0.04}s both` }}
                        >
                          {lang === "fr" ? link.frenchLabel : link.label}
                        </a>
                        {hasChildren && (
                          <button
                            type="button"
                            aria-label="Toggle submenu"
                            onClick={() => setExpanded(isExpanded ? null : link.id)}
                            className="p-2 text-[#4A1E3D] hover:bg-[#F6EEF2] transition-colors"
                          >
                            <ChevronDown
                              className={`w-5 h-5 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                              strokeWidth={1.5}
                            />
                          </button>
                        )}
                      </div>
                      {hasChildren && (
                        <div
                          className="overflow-hidden transition-all duration-300"
                          style={{ maxHeight: isExpanded ? 400 : 0 }}
                        >
                          <ul className="pb-4 pl-4 md:pl-6 flex flex-col gap-2">
                            {link.children!.map((c) => (
                              <li key={c.label}>
                                <a
                                  href={c.target}
                                  onClick={() => setOpen(false)}
                                  className="body-small text-[#434343] hover:text-[#4A1E3D] transition-colors"
                                >
                                  — {lang === "fr" ? c.frenchLabel : c.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* CTA row */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <a
                  href="#book"
                  onClick={() => setOpen(false)}
                  className="btn-jazcaf btn-jazcaf-primary"
                >
                  {t.bookNow}
                </a>
                <a href={`tel:${SITE.callPrimary}`} className="inline-flex items-center gap-2 text-[#4A1E3D] hover:opacity-70 transition-opacity">
                  <Phone className="w-4 h-4" strokeWidth={1.5} />
                  <span className="body-small font-medium">{SITE.callPrimary}</span>
                </a>
              </div>
            </div>
          </nav>

          {/* footer strip */}
          <div className="border-t border-[#4A1E3D]/10 px-6 md:px-10 py-5 flex flex-wrap items-center justify-between gap-3">
            <span className="nav-link text-[#434343]">{SITE.addressFull}</span>
            <div className="flex items-center gap-4">
              <a href={SITE.instagram} target="_blank" rel="noreferrer" className="nav-link text-[#4A1E3D] hover:opacity-70">Instagram</a>
              <a href={SITE.facebook} target="_blank" rel="noreferrer" className="nav-link text-[#4A1E3D] hover:opacity-70">Facebook</a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <button
        type="button"
        aria-label={t.menu}
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 text-[#4A1E3D] hover:opacity-70 transition-opacity"
      >
        <Menu className="w-6 h-6" strokeWidth={1.4} />
        <span className="nav-link hidden sm:inline">{t.menu}</span>
      </button>

      {mounted && createPortal(overlay, document.body)}
    </>
  );
}
