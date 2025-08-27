import { createContext } from "react";

export type PaginationType = {
        offset:string,
        limit:string
}

export type PaginationContextType = {
    pagination:PaginationType
    setPagination: React.Dispatch<React.SetStateAction<PaginationType>>
    refElement:React.RefObject<HTMLElement|null>
}

export const PaginationContext = createContext<PaginationContextType|null>(null);