"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { UI, type Lang } from "@/lib/site-data";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (typeof UI)["en"];
};

const I18nContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "ladyruthies-lang";
const listeners = new Set<() => void>();

function subscribe(cb: () => void) {
  listeners.add(cb);
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) cb();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", onStorage);
  };
}

function getSnapshot(): Lang {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "fr" ? "fr" : "en";
}

function getServerSnapshot(): Lang {
  return "en";
}

// Hydration gate.
// - On the server: returns false (via getServerSnapshot).
// - On the first client render (hydration): also returns false (React uses
//   getServerSnapshot for the initial client render to match the server).
// - After hydration completes: switches to true (via getSnapshot).
// This lets us render a stable value during hydration and only apply the
// user's stored language preference AFTER hydration — preventing any
// hydration mismatch.
const noopSubscribe = () => () => {};
const clientHydrated = () => true;
const serverNotHydrated = () => false;

const DEFAULT_LANG: Lang = "en";

export function I18nProvider({ children }: { children: ReactNode }) {
  const storedLang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const hydrated = useSyncExternalStore(noopSubscribe, clientHydrated, serverNotHydrated);
  const [override, setOverride] = useState<Lang | null>(null);

  // During SSR and the initial client render, `hydrated` is false, so we
  // render the default language — which matches the server output exactly.
  // Once hydrated, we apply the persisted / overridden language.
  const lang: Lang = hydrated ? (override ?? storedLang) : DEFAULT_LANG;

  const setLang = useCallback((l: Lang) => {
    setOverride(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
    listeners.forEach((fn) => fn());
  }, []);

  const toggle = useCallback(() => {
    setLang(lang === "en" ? "fr" : "en");
  }, [lang, setLang]);

  const t = UI[lang];

  return (
    <I18nContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
