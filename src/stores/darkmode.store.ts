import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type ThemeState = {
  isDarkMode: boolean;
  orientationDevice: "landscape" | "portrait";
  setOrientationDevice: (value: "landscape" | "portrait") => void;
  toggleDarkMode: () => void;
  setDarkMode: (value: boolean) => void;
};

export const useThemeStore = create<ThemeState>()(
  devtools(
    persist(
      (set) => ({
        isDarkMode: true,
        orientationDevice: "landscape",
        toggleDarkMode: () =>
          set((state) => {
            const newMode = !state.isDarkMode;
            if (newMode) {
              document.documentElement.classList.add("dark");
            } else {
              document.documentElement.classList.remove("dark");
            }
            return { isDarkMode: newMode };
          }),
        setOrientationDevice: (state) =>
          set(() => {
            return { orientationDevice: state };
          }),
        setDarkMode: (value) =>
          set(() => {
            if (value) {
              document.documentElement.classList.add("dark");
            } else {
              document.documentElement.classList.remove("dark");
            }
            return { isDarkMode: value };
          }),
      }),
      {
        name: "theme-storage",
      }
    )
  )
);
