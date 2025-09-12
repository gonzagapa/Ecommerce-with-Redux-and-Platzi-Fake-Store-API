import type { UserTokens } from "../services/types";


export const saveTokensInStorage = (tokens:UserTokens)=>{
    localStorage.setItem("tokens",JSON.stringify(tokens));
}

export const removeTokensFromStorage = ()=>{
    localStorage.removeItem("tokens");
}
export const retrieveTokensInStorage = ():UserTokens | null =>{
    const token = localStorage.getItem("tokens");
    if( token === null ) return null 

    return (JSON.parse(token) as UserTokens) 
}
