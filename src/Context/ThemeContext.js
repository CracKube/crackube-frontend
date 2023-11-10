import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);

    return context;

}

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }
    const toggleLight = () => {
        setTheme("light");
    }
    const toggleDark = () => {
        setTheme("dark");
    }
    const themeMode = {
        mode: theme == "light" ? "light" : "dark",
        toggleLight,
        toggleDark,
    }

    return (
        <ThemeContext.Provider value={themeMode}>
            {children}
        </ThemeContext.Provider>
    )
}