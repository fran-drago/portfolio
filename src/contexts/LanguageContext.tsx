"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { contentMap, Locale } from "@/lib/content";

type LanguageContextValue = {
  lang: Locale;
  setLang: (lang: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue>({
  lang: "es",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Locale>("es");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Locale | null;
    if (stored && stored in contentMap) {
      setLangState(stored);
    } else {
      const browser = navigator.language.startsWith("en") ? "en" : "es";
      setLangState(browser);
    }
  }, []);

  const setLang = (l: Locale) => {
    setLangState(l);
    localStorage.setItem("lang", l);
    document.cookie = `lang=${l};path=/;max-age=31536000`;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
export const useContent = () => contentMap[useContext(LanguageContext).lang];
