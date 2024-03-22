import { useMemo, createContext, useEffect } from "react";

export const ThemeContext = createContext(null);

export function ThemeProvider({ variant, theme, toggleTheme, children }) {

    const contextValue = useMemo(() => {
        return {
            appTheme: theme,
            toogleTheme: toggleTheme
        }
    }, [theme, toggleTheme]);

    useEffect(() => {
        if (theme) {
            const themeAttr = `${variant}-${theme}`;
            document.documentElement.setAttribute('data-bs-theme', themeAttr);
        }
    }, [variant, theme]);

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )
}