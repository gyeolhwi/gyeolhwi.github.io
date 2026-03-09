/**
 *@description: 테마 설정
 *@requires: style-components dependency
 *@author: gyeolhwi
 *@version: 1.0.0
 */

/**
 *@note : 테마 색상 도출
 *@reference : Apple Developer의 "Meet Liquid Glass"를 참고해 글래스모피즘 톤에 맞도록 테마 색상을 재구성하고 보정했음
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
    mesh: {
      primary: string;
      secondary: string;
      accent: string;
    };
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
    primary: "#6b8dff",
    primaryHover: "#5a7ae0",
    secondary: "#52c7ea",
    accent: "#8d7dff",
    background: "#f4f7fb",
    backgroundAlt: "#edf2f8",
    surface: "#ffffff",
    surfaceHover: "#f8fbff",
    text: "#1f2937",
    textMuted: "#5f6f85",
    textDim: "#94a0b2",
    success: "#20b38e",
    warning: "#f0ad4e",
    error: "#ea667a",
    border: "#dbe4ef",
    borderLight: "#eef3f8",
  },
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.07)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.07)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.07)",
    glow: "0 0 40px rgba(107, 141, 255, 0.12)",
  },
  glass: {
    bg: "rgba(255, 255, 255, 0.56)",
    border: "rgba(255, 255, 255, 0.72)",
    blur: "20px",
    shadow: "0 10px 30px 0 rgba(120, 144, 178, 0.18)",
    hoverShadow: "0 16px 40px 0 rgba(120, 144, 178, 0.24)",
    tagBg: "rgba(36, 53, 78, 0.06)",
  },
  gradient: {
    background: "linear-gradient(145deg, #f8fbff 0%, #edf4ff 35%, #e8f6fb 68%, #f5f7fb 100%)",
    mesh: {
      primary: "rgba(107, 141, 255, 0.12)",
      secondary: "rgba(82, 199, 234, 0.12)",
      accent: "rgba(141, 125, 255, 0.1)",
    },
  },
};

// 다크테마 기본
export const darkTheme: Theme = {
  ...common,
  colors: {
    primary: "#8fb2ff",
    primaryHover: "#b3caff",
    secondary: "#7de3ff",
    accent: "#c7b8ff",
    background: "#0a0d14",
    backgroundAlt: "#111722",
    surface: "#171e2b",
    surfaceHover: "#202a3a",
    text: "#f5f7fb",
    textMuted: "#b4c0d1",
    textDim: "#7f8da3",
    success: "#59d7b6",
    warning: "#ffcc7a",
    error: "#ff8f9f",
    border: "#2a3446",
    borderLight: "#3a4660",
  },
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
    glow: "0 0 40px rgba(99, 102, 241, 0.15)",
  },
  glass: {
    bg: "rgba(20, 28, 40, 0.68)",
    border: "rgba(255, 255, 255, 0.14)",
    blur: "20px",
    shadow: "0 10px 36px 0 rgba(2, 6, 14, 0.42)",
    hoverShadow: "0 16px 48px 0 rgba(2, 6, 14, 0.5)",
    tagBg: "rgba(255, 255, 255, 0.1)",
  },
  gradient: {
    background: "linear-gradient(145deg, #090c14 0%, #11192a 38%, #18243a 68%, #0c1320 100%)",
    mesh: {
      primary: "rgba(143, 178, 255, 0.22)",
      secondary: "rgba(125, 227, 255, 0.18)",
      accent: "rgba(199, 184, 255, 0.12)",
    },
  },
};

// 다크테마 뮤트
export const darkThemeMuted: Theme = {
  ...darkTheme,
  colors: {
    ...darkTheme.colors,
    primary: "#7c86ff",
    primaryHover: "#98a0ff",
    secondary: "#4fb3a5",
    accent: "#c6a0ff",
    background: "#0d1320",
    backgroundAlt: "#151d2f",
    surface: "#182235",
    surfaceHover: "#22304a",
    text: "#edf2f7",
    textMuted: "#9fb0c3",
    textDim: "#718096",
    border: "#263246",
    borderLight: "#314056",
  },
  glass: {
    ...darkTheme.glass,
    bg: "rgba(24, 34, 53, 0.72)",
    border: "rgba(255, 255, 255, 0.08)",
    shadow: "0 8px 32px 0 rgba(0, 0, 0, 0.38)",
    hoverShadow: "0 12px 40px 0 rgba(0, 0, 0, 0.48)",
    tagBg: "rgba(255, 255, 255, 0.09)",
  },
  gradient: {
    background: "linear-gradient(45deg, #0d1320 0%, #1a1d36 35%, #1d2d3f 70%, #151d2f 100%)",
    mesh: {
      primary: "rgba(124, 134, 255, 0.20)",
      secondary: "rgba(79, 179, 165, 0.16)",
      accent: "rgba(198, 160, 255, 0.12)",
    },
  },
};

// 다크테마 포레스트
export const darkThemeForest: Theme = {
  ...darkTheme,
  colors: {
    ...darkTheme.colors,
    primary: "#2fa48f",
    primaryHover: "#4fbaa7",
    secondary: "#78c9b7",
    accent: "#a4e0d2",
    background: "#0d1513",
    backgroundAlt: "#14201d",
    surface: "#1a2825",
    surfaceHover: "#243632",
    text: "#ecf7f3",
    textMuted: "#a4c1b8",
    textDim: "#758d86",
    border: "#29403a",
    borderLight: "#35534c",
  },
  shadows: {
    ...darkTheme.shadows,
    glow: "0 0 40px rgba(120, 201, 183, 0.14)",
  },
  glass: {
    ...darkTheme.glass,
    bg: "rgba(23, 37, 34, 0.68)",
    border: "rgba(255, 255, 255, 0.12)",
    shadow: "0 10px 36px 0 rgba(6, 14, 12, 0.4)",
    hoverShadow: "0 16px 48px 0 rgba(6, 14, 12, 0.48)",
    tagBg: "rgba(255, 255, 255, 0.1)",
  },
  gradient: {
    background: "linear-gradient(145deg, #0c1412 0%, #13211e 35%, #19302b 68%, #101a18 100%)",
    mesh: {
      primary: "rgba(47, 164, 143, 0.18)",
      secondary: "rgba(120, 201, 183, 0.14)",
      accent: "rgba(164, 224, 210, 0.1)",
    },
  },
};

export const theme = darkThemeForest;
