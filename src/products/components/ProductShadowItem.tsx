

export function ProductShadowItem() {
  return (
    <div className="shadow-md dark:shadow-gray-600 shadow-gray-300 border-baby border-2 rounded-md p-3 flex flex-col gap-4 text-baby">
            <div className="w-full h-[240px] overflow-hidden rounded-md bg-gray-500 mx-auto"></div>
            <div className="bg-gray-300 dark:bg-gray-500 rounded py-1 h-5"></div>
            <div className="bg-gray-300 dark:bg-gray-500 rounded py-1 h-5"></div>
            <div className="mt-auto">
               <button className="button bg-gray-300 dark:bg-gray-500 h-10 w-[150px]"></button>
            </div>
    </div>
  )
}
