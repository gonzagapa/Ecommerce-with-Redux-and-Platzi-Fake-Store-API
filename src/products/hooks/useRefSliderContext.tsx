import { useContext } from "react"
import { RefSliderContext } from "../context/RefSliderContext"


export function useRefSliderContext() {

    const currentPaginationContext = useContext(RefSliderContext);

    if(!currentPaginationContext){
        throw new Error("usePaginationContext has to be used within <PaginationProvider>")
    }
  return currentPaginationContext
}
