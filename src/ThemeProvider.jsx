import React, { useState } from 'react';
import { ThemeContext } from './ThemeContext';
import { Theme } from '@radix-ui/themes';
export const ThemeProvider = ({ children }) => {
    const [isLightTheme, setIsLightTheme] = useState(true);

    // Toggle function to switch between themes
    const toggleTheme = () => setIsLightTheme((prev) => !prev);

    return (
        <ThemeContext.Provider value={{ isLightTheme, toggleTheme }}>
            <Theme appearance={isLightTheme ? 'dark' : 'light'}>
                {children}
            </Theme>
        </ThemeContext.Provider>
    );
};
