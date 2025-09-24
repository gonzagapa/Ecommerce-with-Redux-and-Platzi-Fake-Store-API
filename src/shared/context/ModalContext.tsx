import { createContext, useState } from "react"

export interface ModalContextType {
    isVisible:boolean,
    ModalOpen: (value:boolean)=>void
}

export const ModalContext = createContext({} as ModalContextType);

type Props = {
    children:React.ReactNode
}

export  function ModalContextProvider({children}:Props) {

    const [isVisible,setIsVisible]= useState(false);
        
    const ModalOpen = (value:boolean)=>{
        setIsVisible(value)
    }

  return (
    <ModalContext.Provider value={{isVisible,ModalOpen}}>{children}</ModalContext.Provider>
  )
}
