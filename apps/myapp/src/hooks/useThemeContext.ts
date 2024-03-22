import { useContext } from "react"
import { ThemeContext } from "../contexts"

const useThemeContext = () => {
    const context = useContext(ThemeContext);
    // console.log('useThemeContext', context);
    if (!context) {
        throw new Error('useThemeContext must be used within a ThemeContext');
    }
    return context;
}

export default useThemeContext;