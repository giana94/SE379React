import { createContext } from 'react';


interface Theme {
    foreground: string;
    background: string;
    primaryColor: string;
    secondaryColor: string;
}


interface ThemeContextType {
    theme: Theme;
}


export const themes: Record<string, Theme> = {
    light: {
        foreground: '#242526',
        background: '#fff',
        primaryColor: '#f0eded',
        secondaryColor: '#3D4141'
    },
    dark: {
        foreground: '#fff',
        background: '#242526',
        primaryColor: 'rgb(84, 83, 83)',
        secondaryColor: '#616565'
    },
};


export const ThemeContext = createContext<ThemeContextType>({
    theme: themes.light,
});
