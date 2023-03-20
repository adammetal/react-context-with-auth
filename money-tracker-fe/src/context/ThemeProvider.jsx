import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext("dark");

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggle = () =>
    setTheme((current) => (current === "dark" ? "light" : "dark"));

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
};

export const useThemeToggle = () => useContext(ThemeContext).toggle;

export const useTheme = () => useContext(ThemeContext).theme;

export default ThemeProvider;
