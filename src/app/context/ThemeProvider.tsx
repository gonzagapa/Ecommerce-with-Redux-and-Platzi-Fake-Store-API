import { useEffect, useState } from "react"
import { ThemeContext, type ThemeMode } from "./ThemeContext"
import { retrieveThemeFromStorage, saveThemeInStorage} from "./localStorageTheme"

type Props = {
    children:React.ReactNode
}

export function ThemeProvider({children}:Props) {
    const [theme,setTheme] = useState<ThemeMode>(()=>{
        if(window.matchMedia("(prefers-color-scheme: dark)").matches 
        && retrieveThemeFromStorage() === "dark"){
            return "dark"
        }
        return "light"
    })

    useEffect(()=>{
        const root = document.querySelector("html");
        if(theme == "dark"){
            root?.classList.add("dark")
        }else{
            root?.classList.remove("dark")
        }
    },[theme]) 

    const handleTogglingTheme = ()=>{
        setTheme((prevTheme) => {
            if(prevTheme === "light"){
                saveThemeInStorage("dark");
                return "dark";
            }
            saveThemeInStorage("light")
            return "light"
        })
    }

  return (
    <ThemeContext.Provider value={{handleTheme:handleTogglingTheme}}>{children}</ThemeContext.Provider>
  )
}

