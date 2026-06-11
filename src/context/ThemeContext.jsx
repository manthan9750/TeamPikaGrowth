import React, { createContext, useEffect, useState, useCallback, useMemo } from "react";

/**
 * ==========================================================================
 * TEAM PIKA GROWTH - DESIGN SYSTEM THEME SPEC v3.0
 * ==========================================================================
 * Optimizes initialization routines to prevent DOM layout collapsing.
 */
export const ThemeContext = createContext(undefined);

export function ThemeProvider({ children }) {
  /**
   * LAZY INITIALIZATION PATTERN
   * Runs synchronously BEFORE the initial paint loop to stop layout shifting.
   */
  const [theme, setThemeState] = useState(() => {
    try {
      const savedTheme = localStorage.getItem("pika-theme");
      if (savedTheme === "light" || savedTheme === "dark") {
        return savedTheme;
      }
      
      // Fallback to system-level preference before defaulting to dark
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return systemPrefersDark ? "dark" : "dark"; // Default SaaS override target
    } catch (e) {
      console.warn("[THEME CORE] Local storage access restricted. Falling back to dark canvas target.");
      return "dark";
    }
  });

  /**
   * MEMOIZED UTILITY ELEMENT
   * Explicitly updates class assignments cleanly across document root nodes
   */
  const applyThemeToDOM = useCallback((currentMode) => {
    try {
      const rootElement = document.documentElement;
      if (currentMode === "dark") {
        rootElement.classList.add("dark");
        rootElement.style.colorScheme = "dark";
      } else {
        rootElement.classList.remove("dark");
        rootElement.style.colorScheme = "light";
      }
    } catch (error) {
      console.error("[THEME CORE INTERCEPT] Failed mutating DOM element structure token matrix:", error);
    }
  }, []);

  /**
   * LIFECYCLE SYNC LOOP
   * Guarantees the DOM class matching token configuration accurately tracks memory state
   */
  useEffect(() => {
    applyThemeToDOM(theme);
    
    // Optional: Realtime cross-tab orchestration sync listener
    const handleStorageChange = (e) => {
      if (e.key === "pika-theme" && (e.newValue === "light" || e.newValue === "dark")) {
        setThemeState(e.newValue);
      }
    };
    
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [theme, applyThemeToDOM]);

  /**
   * INTERACTIVE ACCESSIBLE SETTERS
   */
  const toggleTheme = useCallback(() => {
    setThemeState((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      try {
        localStorage.setItem("pika-theme", nextTheme);
      } catch (e) {
        console.error("[THEME STORAGE FAULT] Failed saving token choice layout configuration:", e);
      }
      return nextTheme;
    });
  }, []);

  const setTheme = useCallback((targetTheme) => {
    if (targetTheme !== "dark" && targetTheme !== "light") return;
    setThemeState(targetTheme);
    try {
      localStorage.setItem("pika-theme", targetTheme);
    } catch (e) {
      console.error("[THEME STORAGE FAULT] Failed updating runtime state layout choice:", e);
    }
  }, []);

  /**
   * DEPENDENCY OPTIMIZATION MATRIX
   * Saves rendering cycles by preventing child element cascades from updating randomly
   */
  const contextValueWrapper = useMemo(() => ({
    theme,
    toggleTheme,
    setTheme
  }), [theme, toggleTheme, setTheme]);

  return (
    <ThemeContext.Provider value={contextValueWrapper}>
      {children}
    </ThemeContext.Provider>
  );
}