

export const saveThemeInStorage = (themeValue:string)=>{
    localStorage.setItem("theme",themeValue);
}

export const retrieveThemeFromStorage = ():string | null =>{
    const themeValue = localStorage.getItem("theme");
    if( themeValue === null ) return null 

    return themeValue;
}