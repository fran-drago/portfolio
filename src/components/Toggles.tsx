"use client";

import { useTheme } from "next-themes";
import { useLanguage } from "@/contexts/LanguageContext";

export function Toggles() {
  const { resolvedTheme, setTheme } = useTheme();
  const { lang, setLang } = useLanguage();
  const isDark = resolvedTheme === "dark";

  const btnClass =
    "flex items-center justify-center w-10 h-10 rounded-full border border-border-subtle bg-background text-foreground transition-colors duration-150 ease-in hover:bg-background hover:border-border-default hover:text-primary";

  return (
    <div className="flex items-center gap-[var(--spacing-10)]">
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className={btnClass}
        aria-label={isDark ? "Activar modo claro" : "Activar modo oscuro"}
      >
        {isDark ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </svg>
        )}
      </button>

      <button
        onClick={() => setLang(lang === "es" ? "en" : "es")}
        className={`${btnClass} type-body-sm font-medium`}
        aria-label={lang === "es" ? "Switch to English" : "Cambiar a Español"}
      >
        {lang.toUpperCase()}
      </button>
    </div>
  );
}
