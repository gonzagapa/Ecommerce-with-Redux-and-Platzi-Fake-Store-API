import { useState } from "react"
import { PaginationContext, type PaginationType } from "./PaginationContext"

type Props = {
    children:React.ReactNode
}

export const PaginationProvider = ({children}:Props)=>{
    const [pagination,setPagination] = useState<PaginationType>({offset:0,limit:15})

    return (
        <PaginationContext.Provider value={{pagination,setPagination}}>
            {children}
        </PaginationContext.Provider>
    )
}