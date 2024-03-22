import { Sun, Moon } from 'react-bootstrap-icons';

import { useThemeContext } from '../hooks';

export default function Header() {
    const { theme, toogleTheme } = useThemeContext();
    
    console.log('Header', theme);

    return (
        <div className="d-flex">
            <div className="col-6 variant-logo"></div>
            <div className="col-6 d-flex justify-content-end">
                <button className="btn" onClick={toogleTheme}>
                    {theme === 'light' && <Moon size={12} />}
                    {theme === 'dark' && <Sun size={12} />}
                </button>
            </div>
        </div>
    )
}