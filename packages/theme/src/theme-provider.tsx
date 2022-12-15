import { createContext, useContext } from "react";
import { lightTheme } from "./light.css";

export enum Theme {
  Light = "light",
}

const ThemeContext = createContext<Theme>(Theme.Light);

interface PropTypes {
  theme: Theme;
  children: React.ReactNode;
}

export const ThemeProvider = ({ theme, children }: PropTypes) => (
  <ThemeContext.Provider value={theme}>
    <div className={lightTheme}>{children}</div>
  </ThemeContext.Provider>
);

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
};
