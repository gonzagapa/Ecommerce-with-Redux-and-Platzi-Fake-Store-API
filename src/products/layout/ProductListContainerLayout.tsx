import { Modal } from "../../shared/components/Modal"
import { useModalContext } from "../../shared/hooks/useModalContext"


type Props ={
    children:React.ReactNode,
    ref:React.RefObject<HTMLElement | null>| null
}
export function ProductListContainerLayout({children,ref}:Props) {
  const {isVisible,ModalOpen} = useModalContext()

  return (
      <section ref={ref}  className="grid md:col-span-2 md:grid-cols-2 md:auto-rows-min lg:col-span-5 lg:grid-cols-3 xl:grid-cols-4 gap-3 w-full">
          {children}
        <Modal
        isVisible={isVisible}
        onClose={()=> ModalOpen(false)}
        type="success" 
        style="top-auto bottom-2" 
        title="Product added" />
        
      </section>
  )
}
