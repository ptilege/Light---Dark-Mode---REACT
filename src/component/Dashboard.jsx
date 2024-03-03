import React, { useState, useEffect, createContext, useContext } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Dashboard.css';
import ThemeContext from '../context/ThemeContext';




export default function Dashboard() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const root = document.documentElement;
        const body = document.body;
        root.className = theme === 'light' ? 'light-theme' : 'dark-theme';
        body.className = theme === 'light' ? 'light-theme' : 'dark-theme'; 
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div>
                <div className="container">
                    <form className="toggle">
                        <input type="radio" id="choice1" name="choice" value="light" checked={theme === 'light'} onChange={() => setTheme('light')} />
                        <label htmlFor="choice1">Light</label>

                        <input type="radio" id="choice2" name="choice" value="dark" checked={theme === 'dark'} onChange={() => setTheme('dark')} />
                        <label htmlFor="choice2">Dark</label>

                        <div id="flap">
                            <span className="content"></span>
                        </div>
                    </form>
                </div>
            </div>
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
