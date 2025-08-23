import { useContext } from "react"
import { PaginationContext } from "../context/PaginationContext"


export function usePaginationContext() {

    const currentPaginationContext = useContext(PaginationContext);

    if(!currentPaginationContext){
        throw new Error("usePaginationContext has to be used within <PaginationProvider>")
    }
  return currentPaginationContext
}
