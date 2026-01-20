import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    toggleTheme:() => {},
})

export const ThemeProvider = ThemeContext.Provider;

export function useTheme() {
    return useContext(ThemeContext);
}