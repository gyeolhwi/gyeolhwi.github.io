import { ThemeProvider } from "styled-components";
import AppRoutes from "./router";
import { useThemeStore } from "./store/useThemeStore";
import { GlobalStyle } from "./styles/GlobalStyle";
import { darkTheme, lightTheme } from "./styles/theme";

function App() {
  // const location = useLocation();
  const theme = useThemeStore((s) => s.mode);

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
