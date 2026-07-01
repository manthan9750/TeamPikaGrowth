"use client";

import { createContext, useContext, useEffect, useState } from "react";

// 1. Create the context
const ThemeContext = createContext(undefined);

// 2. Create the Provider component
export function ThemeProvider({ children }) {
  // Set default theme to 'light'
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if user has a previously saved theme in their browser
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Apply the dark class to the HTML root element
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    
    // Save preference
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Create the custom Hook
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}