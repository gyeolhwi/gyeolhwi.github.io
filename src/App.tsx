import { ThemeProvider } from "styled-components";
import AppRoutes from "./router";
import { useThemeStore } from "./store/useThemeStore";
import { GlobalStyle } from "./styles/GlobalStyle";
import { darkTheme, darkThemeForest, lightTheme } from "./styles/theme";
import { MeshBackground } from "./components/common/MeshBackground";

function App() {
  const theme = useThemeStore((s) => s.mode);

  return (
    <ThemeProvider theme={theme === "dark" ? darkThemeForest: lightTheme}>
      <GlobalStyle />
      <MeshBackground />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
