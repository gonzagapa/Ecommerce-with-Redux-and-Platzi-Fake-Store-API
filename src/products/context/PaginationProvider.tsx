import { useRef, useState } from "react"
import { PaginationContext, type PaginationType } from "./PaginationContext"

type Props = {
    children:React.ReactNode
}

export const PaginationProvider = ({children}:Props)=>{
    const [pagination,setPagination] = useState<PaginationType>({offset:0,limit:15})
    const refElement = useRef<HTMLElement>(null);

    return (
        <PaginationContext.Provider value={{pagination,setPagination,refElement}}>
            {children}
        </PaginationContext.Provider>
    )
}