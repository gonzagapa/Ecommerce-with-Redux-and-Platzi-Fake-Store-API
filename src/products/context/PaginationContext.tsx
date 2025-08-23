import { createContext } from "react";

export type PaginationType = {
        offset:number,
        limit:number
}

export type PaginationContextType = {
    pagination:PaginationType
    setPagination: React.Dispatch<React.SetStateAction<PaginationType>>
}

export const PaginationContext = createContext<PaginationContextType|null>(null);