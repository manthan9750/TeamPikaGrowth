import { createContext, useEffect, useState } from "react";

/**
 * TEAM PIKA GROWTH - THEME SYSTEM
 * --------------------------------
 * Purpose:
 * - global dark/light mode control
 * - persistent UI state across pages
 * - SaaS-grade user experience consistency
 */

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  /**
   * Load saved theme from localStorage (persistent UX)
   */
  useEffect(() => {
    const savedTheme = localStorage.getItem("pika-theme");

    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      applyTheme("dark"); // default SaaS dark mode
    }
  }, []);

  /**
   * Apply theme to document root
   */
  const applyTheme = (mode) => {
    const root = document.documentElement;

    if (mode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };

  /**
   * Toggle theme (used in navbar or future settings panel)
   */
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
    localStorage.setItem("pika-theme", newTheme);
    applyTheme(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        setTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
