

export function ProductShadowItem() {
  return (
    <div className="dark:border-baby border-highlight border-2 rounded-md p-3 flex flex-col gap-4 text-baby animate-pulse">
            <div className="w-full h-[240px] overflow-hidden rounded-md dark:bg-gray-500 mx-auto"></div>
            <div className="dark:bg-gray-500 rounded py-1 h-5"></div>
            <div className="dark:bg-gray-500 rounded py-1 h-5"></div>
            <div className="mt-auto">
               <button className="button dark:bg-gray-500 h-10 w-[150px]"></button>
            </div>
    </div>
  )
}
