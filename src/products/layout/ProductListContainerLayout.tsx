

type Props ={
    children:React.ReactNode,
    ref:React.RefObject<HTMLElement | null>| null
}
export function ProductListContainerLayout({children,ref}:Props) {

  return (
    <section ref={ref}  className="grid md:col-span-2 md:grid-cols-2 lg:col-span-5 lg:grid-cols-3 xl:grid-cols-4 gap-3 w-full">
        {children}
    </section>
  )
}
