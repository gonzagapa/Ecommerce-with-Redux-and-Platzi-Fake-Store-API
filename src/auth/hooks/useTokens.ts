import { useDispatch } from "react-redux";
import type { UserTokens } from "../services/types";
import { retrieveTokensInStorage, saveTokensInStorage } from "../helpers/localStorageOperations";
import { setTokens } from "../store/authSlice";
/**
 * TODO:
 * refresh logic and localStorage implementation
 */

export const useTokens = ()=>{

    const dispatch = useDispatch();

    const saveInLocalStorage = (tokens:UserTokens)=>{
        saveTokensInStorage(tokens);
        dispatch(setTokens(tokens));
    }


    const retrieveTokensFromStorage = ()=>{
        const tokens = retrieveTokensInStorage();
        if(tokens == null) return null;

        //if in the storage we have tokens, save them in the store
        dispatch(setTokens(tokens));
        console.log(tokens);
    }

    return {
        saveInLocalStorage,
        retrieveTokensFromStorage
    }
}