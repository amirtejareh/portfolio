"use client";

import { useThemeStore } from "@/stores/darkmode.store";
import { useEffect } from "react";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isDarkMode, setDarkMode } = useThemeStore();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <body className={` ${isDarkMode ? "bg-background" : "bg-[#f9f9f9]"}`}>
      {children}
    </body>
  );
}
