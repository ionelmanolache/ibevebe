import { useMemo, createContext, useEffect } from "react";

// const x = { theme: '', toogleTheme: () => {}};

export const ThemeContext = createContext(null);

export function ThemeProvider({ variant, theme, toggleTheme, children }) {

    const contextValue = useMemo(() => {
        return {
            theme: theme,
            toogleTheme: toggleTheme
        }
    }, [theme]);

    useEffect(() => {
        if (theme) {
            const variantTheme = `${variant}-${theme}`;
            document.documentElement.setAttribute('data-bs-theme', variantTheme);
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )
}