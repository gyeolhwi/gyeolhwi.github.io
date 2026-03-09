import { createGlobalStyle } from "styled-components";
/**
 *@description: 전역 스타일
 *@requires: theme를 사용하기 위한 styled.d.ts 파일 참조 필요
 */

export const GlobalStyle = createGlobalStyle`

/* #region: 폰트설정 */
/* 프로젝트에 따라 폰트를 변경할 수 있습니다. */

  /* Google Fonts CDN 사용 시 */
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');
  /* 로컬 폰트 파일 사용 시 */

  /* @font-face {
    font-family: 'Gamja Flower';
    src: url('/fonts/GamjaFlower-Regular.woff2') format('woff2'),
         url('/fonts/GamjaFlower-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  } */

  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/pretendard@1.0/Pretendard-Thin.woff2') format('woff2');
    font-weight: 100;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/pretendard@1.0/Pretendard-ExtraLight.woff2') format('woff2');
    font-weight: 200;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/pretendard@1.0/Pretendard-Regular.woff2') format('woff2');
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/pretendard@1.0/Pretendard-SemiBold.woff2') format('woff2');
    font-weight: 600;
    font-display: swap;
  }
/* #endregion: 폰트설정 */

/* #region: 기본 리셋 */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
    height: 100%;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.text};
    transition: color 0.5s ease;
    background: transparent;
    overflow-x: hidden;
    height: 100%;
    /* 폰트 렌더링 최적화 - macOS/iOS에서 텍스트를 더 부드럽게 보이게 함
       -webkit-font-smoothing: macOS/iOS Safari/Chrome에서 폰트를 안티앨리어싱 처리
       -moz-osx-font-smoothing: Firefox macOS에서 폰트를 그레이스케일 처리
       선택사항이지만 텍스트 가독성을 향상시킴 */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    height: 100%;
    isolation: isolate; // 배경 애니메이션 겹침 방지
  }
/* #endregion: 기본 리셋 */

/* #region: 요소 리셋 */
  a {
    color: inherit;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
  }

  /* h1, h2, h3, h4, h5, h6, p {
    font-family: ${({ theme }) => theme.fonts.primary};
  } */

  input, textarea, select {
    font-family: inherit;
  }

  input[type="text"],
  input[type="password"],
  input[type="number"] {
    outline: none;
  }

  /* Number Input 스피너 제거 - Chrome, Safari, Edge, Opera */
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Number Input 스피너 제거 - Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  code, pre {
    font-family: ${({ theme }) => theme.fonts.mono};
  }
/* #endregion: 요소 리셋 */

/* #region: 유틸리티 */
  ::selection {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.glass.border};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.borderLight};
  }

  section[id] {
    scroll-margin-top: 80px;
  }
/* #endregion: 유틸리티 */
`;
