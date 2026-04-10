"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";

interface ThemeContextValue {
  resolvedTheme: ResolvedTheme | undefined;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  resolvedTheme: undefined,
  setTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme | undefined>(undefined);

  // On mount: read localStorage and sync from DOM (anti-flicker script already set the class)
  useEffect(() => {
    const stored = (localStorage.getItem("theme") as Theme | null) ?? "system";
    setThemeState(stored);
    setResolvedTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);

  // React to system preference changes when theme is "system"
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if (theme === "system") {
        const resolved: ResolvedTheme = mq.matches ? "dark" : "light";
        setResolvedTheme(resolved);
        document.documentElement.classList.toggle("dark", resolved === "dark");
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [theme]);

  const setTheme = useCallback((next: Theme) => {
    const resolved: ResolvedTheme =
      next === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
        : next;
    setThemeState(next);
    setResolvedTheme(resolved);
    try { localStorage.setItem("theme", next); } catch { /* storage unavailable */ }
    // Apply to DOM — no-op when View Transition already toggled the class
    document.documentElement.classList.toggle("dark", resolved === "dark");
  }, []);

  return (
    <ThemeContext.Provider value={{ resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
