import { useRef, useState } from "react"
import { RefSliderContext } from "./RefSliderContext"

type Props = {
    children:React.ReactNode
}

export const RefSliderProvider = ({children}:Props)=>{
    const refElement = useRef<HTMLElement>(null);
    const [hasProducts, sethasProducts] = useState(true)

    const handleHasProduct = (value:boolean) =>{
        sethasProducts(value);
    }

    return (
        <RefSliderContext.Provider value={{refElement,
        hasProducts,
        setHasProducts:handleHasProduct}}>
            {children}
        </RefSliderContext.Provider>
    )
}