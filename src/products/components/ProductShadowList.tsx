import { LoadingLayout } from "../layout/LoadingLayout";
import { ProductShadowItem } from "./ProductShadowItem";


export function ProductShadowList() {
    const render = [1,2,3,4,5,6,7,8,9,10];

    return (
        <>
            <LoadingLayout/>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 w-full mt-5 px-10">
                    {
                        render.map((index)=>(<ProductShadowItem key={index}/>))
                    }
            </div>
        </>
  )
}
