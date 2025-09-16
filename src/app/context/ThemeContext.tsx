import { createContext } from "react";

export type ThemeMode = "light"|"dark";
export interface ThemeContextValues {
    handleTheme: ()=>void,
}

export const ThemeContext = createContext<ThemeContextValues|null>(null)