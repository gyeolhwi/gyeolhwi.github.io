import { create } from "zustand";

/**
 *@description: 테마 스토어
 *@requires: zustand dependency
 *@author: gyeolhwi
 *@version: 1.0.0
 */

type ThemeMode = "light" | "dark";

interface ThemeStore {
  mode: ThemeMode;
  isDark: boolean;
  toggle: () => void;
  reset: () => void;
}

const STORAGE_KEY = "theme-mode";

// 시스템 테마 설정 조회
function getSystemPreference(): ThemeMode {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

// localStorage에 저장된 사용자 테마 선택 조회
function getStoredTheme(): ThemeMode | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "light" || stored === "dark" ? stored : null;
}

export const useThemeStore = create<ThemeStore>((set) => {
  // 초기 테마 선택 우선순위: localStorage 저장값 > OS 설정
  const initial = getStoredTheme() ?? getSystemPreference();

  // OS 테마 변경 감지 (사용자가 직접 선택한 적 없을 때만 반영)
  if (typeof window !== "undefined") {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", (e) => {
      if (!getStoredTheme()) {
        const next = e.matches ? "dark" : "light";
        set({ mode: next, isDark: next === "dark" });
      }
    });
  }

  return {
    mode: initial,
    isDark: initial === "dark",

    // 라이트 <-> 다크 전환 후 localStorage에 저장
    toggle: () =>
      set((state) => {
        const next: ThemeMode = state.mode === "dark" ? "light" : "dark";
        localStorage.setItem(STORAGE_KEY, next);
        return { mode: next, isDark: next === "dark" };
      }),

    // localStorage 초기화 후 OS 설정으로 복귀
    reset: () => {
      localStorage.removeItem(STORAGE_KEY);
      const system = getSystemPreference();
      set({ mode: system, isDark: system === "dark" });
    },
  };
});
