import { useRef, useState } from "react"
import { RefSliderContext } from "./RefSliderContext"

type Props = {
    children:React.ReactNode
}

export const RefSliderProvider = ({children}:Props)=>{
    const refElement = useRef<HTMLElement>(null);
    const [hasProducts, sethasProducts] = useState(true)
    const [isVisible,setIsVisible]= useState(false);
    
    const handleModalVisibility = (value:boolean)=>{
        setIsVisible(value)
    }

    const handleHasProduct = (value:boolean) =>{
        sethasProducts(value);
    }

    return (
        <RefSliderContext.Provider value={{isVisible,ModalOpen:handleModalVisibility,refElement,hasProducts,setHasProducts:handleHasProduct}}>
            {children}
        </RefSliderContext.Provider>
    )
}