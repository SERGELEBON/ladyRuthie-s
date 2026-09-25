"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";

type Consents = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "jazcaf-consent";

export function CookieBanner() {
  const { t, lang } = useI18n();
  const [open, setOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [consents, setConsents] = useState<Consents>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const t = setTimeout(() => setOpen(true), 1500);
      return () => clearTimeout(t);
    }
  }, []);

  const save = (c: Consents) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(c));
    setOpen(false);
  };

  const acceptAll = () =>
    save({ necessary: true, analytics: true, marketing: true });

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-label={t.cookieTitle}
      className="fixed inset-0 z-[130] flex items-end sm:items-center justify-center p-3 sm:p-6"
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      <div className="relative bg-white w-full max-w-lg border border-[#4A1E3D]/15 shadow-xl">
        <div className="p-6 md:p-8">
          <h3 className="font-serif text-[#4A1E3D] text-[24px] leading-tight mb-3">
            {t.cookieTitle}
          </h3>
          <p className="body-small text-[#434343] mb-5">{t.cookieBody}</p>

          {showDetails && (
            <div className="space-y-3 mb-5">
              <CookieRow
                label={t.cookieNecessary}
                alwaysOn
              />
              <CookieRow
                label={t.cookieAnalytics}
                checked={consents.analytics}
                onToggle={(v) => setConsents((c) => ({ ...c, analytics: v }))}
              />
              <CookieRow
                label={t.cookieMarketing}
                checked={consents.marketing}
                onToggle={(v) => setConsents((c) => ({ ...c, marketing: v }))}
              />
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={acceptAll}
              className="btn-jazcaf btn-jazcaf-primary flex-1"
            >
              {t.acceptAll}
            </button>
            {showDetails ? (
              <button
                type="button"
                onClick={() => save(consents)}
                className="btn-jazcaf btn-jazcaf-outline flex-1"
              >
                {t.saveSelection}
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setShowDetails(true)}
                className="btn-jazcaf btn-jazcaf-outline flex-1"
              >
                {lang === "fr" ? "Personnaliser" : "Customise"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function CookieRow({
  label,
  checked,
  onToggle,
  alwaysOn,
}: {
  label: string;
  checked?: boolean;
  onToggle?: (v: boolean) => void;
  alwaysOn?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-2 border-b border-[#4A1E3D]/10 last:border-0">
      <span className="body-small">{label}</span>
      {alwaysOn ? (
        <span className="nav-label text-[#4A1E3D] text-[10px]" style={{ fontFamily: "var(--font-work-sans)", textTransform: "uppercase", letterSpacing: "0.18em" }}>
          Always on
        </span>
      ) : (
        <button
          type="button"
          role="switch"
          aria-checked={checked}
          onClick={() => onToggle?.(!checked)}
          className={`relative w-11 h-6 rounded-full transition-colors ${
            checked ? "bg-[#4A1E3D]" : "bg-[#4A1E3D]/20"
          }`}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
              checked ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </button>
      )}
    </div>
  );
}
