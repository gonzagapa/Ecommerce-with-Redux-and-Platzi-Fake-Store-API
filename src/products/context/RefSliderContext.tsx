import { createContext } from "react";

export type PaginationContextType = {
    refElement:React.RefObject<HTMLElement|null>
    hasProducts:boolean,
    setHasProducts:(value:boolean)=>void,
}

export const RefSliderContext = createContext<PaginationContextType|null>(null);