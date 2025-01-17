import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import { ThemeProvider } from "./context/theme";
import { useEffect } from "react";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex h-screen flex-col items-center justify-center gap-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <Button />
        <Card />
      </div>
    </ThemeProvider>
  );
}

export default App;
