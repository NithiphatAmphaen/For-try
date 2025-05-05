import { useEffect, useState } from "react";

export function useDarkMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem("theme");
    const darkPref = stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);

    setIsDark(darkPref);
    root.classList.toggle("dark", darkPref);
  }, []);

  const toggleDarkMode = () => {
    const root = document.documentElement;
    root.classList.toggle("dark");
    const newMode = root.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", newMode);
    setIsDark(newMode === "dark");
  };

  return { isDark, toggleDarkMode };
}
