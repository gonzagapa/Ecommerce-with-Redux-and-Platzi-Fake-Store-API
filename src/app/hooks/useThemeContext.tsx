import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"


export function useThemeContext() {
    const currentThemeContext = useContext(ThemeContext);

    if(!currentThemeContext){
        throw new Error("ThemeContext isnt exists");
    }
  return currentThemeContext;
}
