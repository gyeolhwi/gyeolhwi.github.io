/**
 *@description: 테마 설정
 *@requires: style-components dependency
 *@author: gyeolhwi
 *@version: 1.0.0
 */

// #region: 타입 정의
type Size = "xs" | "sm" | "md" | "lg" | "xl";
type SizeScale = Record<Size, string>;
type BaseSizeScale = Pick<SizeScale, "sm" | "md" | "lg">;
type FontSizeScale = Record<"caption" | "body" | "subtitle" | "title" | "headline" | "display", string>;
// #endregion: 타입 정의

export interface Theme {
  // #region: 타이포그래피
  fonts: {
    primary: string;
    mono: string;
  };
  fontSize: FontSizeScale;
  // #endregion: 타이포그래피

  // #region: 레이아웃
  spacing: SizeScale;
  borderRadius: BaseSizeScale & { rounded: string };
  breakpoints: Omit<SizeScale, "xs">;
  transition: {
    fast: string;
    medium: string;
    slow: string;
  };
  // #endregion: 레이아웃

  // #region: 스타일
  colors: {
    primary: string;
    primaryHover: string;
    secondary: string;
    accent: string;
    background: string;
    backgroundAlt: string;
    surface: string;
    surfaceHover: string;
    text: string;
    textMuted: string;
    textDim: string;
    success: string;
    warning: string;
    error: string;
    border: string;
    borderLight: string;
  };
  shadows: Omit<SizeScale, "xs"> & { glow: string };
  glass: {
    bg: string;
    border: string;
    blur: string;
    shadow: string;
    hoverShadow: string;
    tagBg: string;
  };
  gradient: {
    background: string;
  };
  // #endregion: 스타일
}

const common = {
  fonts: {
    primary: "'-apple-system, Pretendard', sans-serif",
    mono: "'JetBrains Mono', 'Fira Code'",
  },
  fontSize: {
    caption: "0.75rem",
    body: "1rem",
    subtitle: "1.125rem",
    title: "1.25rem",
    headline: "1.5rem",
    display: "2rem",
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
  },
  borderRadius: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "1.5rem",
    rounded: "9999px",
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  transition: {
    fast: "0.15s ease",
    medium: "0.3s ease",
    slow: "0.5s ease",
  },
};

export const lightTheme: Theme = {
  ...common,
  colors: {
    primary: "#000000",
    primaryHover: "#000000",
    secondary: "#000000",
    accent: "#000000",
    background: "#000000",
    backgroundAlt: "#000000",
    surface: "#000000",
    surfaceHover: "#000000",
    text: "#000000",
    textMuted: "#000000",
    textDim: "#000000",
    success: "#000000",
    warning: "#000000",
    error: "#000000",
    border: "#000000",
    borderLight: "#000000",
  },
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.07)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.07)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.07)",
    glow: "0 0 40px rgba(99, 102, 241, 0.1)",
  },
  glass: {
    bg: "rgba(255, 255, 255, 0.4)",
    border: "rgba(255, 255, 255, 0.6)",
    blur: "16px",
    shadow: "0 8px 32px 0 rgba(31, 38, 135, 0.1)",
    hoverShadow: "0 12px 40px 0 rgba(31, 38, 135, 0.15)",
    tagBg: "rgba(0, 0, 0, 0.06)",
  },
  gradient: {
    background: "linear-gradient(45deg, #ffdee9 0%, #b5fffc 33%, #ffefba 66%, #cfd9df 100%)",
  },
};

export const darkTheme: Theme = {
  ...common,
  colors: {
    primary: "#000000",
    primaryHover: "#000000",
    secondary: "#000000",
    accent: "#000000",
    background: "#000000",
    backgroundAlt: "#000000",
    surface: "#000000",
    surfaceHover: "#000000",
    text: "#000000",
    textMuted: "#000000",
    textDim: "#000000",
    success: "#000000",
    warning: "#000000",
    error: "#000000",
    border: "#000000",
    borderLight: "#000000",
  },
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
    glow: "0 0 40px rgba(99, 102, 241, 0.15)",
  },
  glass: {
    bg: "rgba(30, 41, 59, 0.7)",
    border: "rgba(255, 255, 255, 0.1)",
    blur: "16px",
    shadow: "0 8px 32px 0 rgba(0, 0, 0, 0.4)",
    hoverShadow: "0 12px 40px 0 rgba(0, 0, 0, 0.5)",
    tagBg: "rgba(255, 255, 255, 0.12)",
  },
  gradient: {
    background: "linear-gradient(45deg, #0f172a 0%, #1e1b4b 33%, #312e81 66%, #1e293b 100%)",
  },
};

export const theme = darkTheme;
