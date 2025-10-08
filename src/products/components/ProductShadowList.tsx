import { LoadingLayout } from "../../shared/components/LoadingLayout";
import { ProductListContainerLayout } from "../layout/ProductListContainerLayout";
import { ProductShadowItem } from "./ProductShadowItem";


export function ProductShadowList() {
    const render = [1,2,3,4,5,6,7,8,9,10];

    return (
        <>
            <LoadingLayout/>
            <ProductListContainerLayout ref={null}>
                    {
                        render.map((index)=>(<ProductShadowItem key={index}/>))
                    }
            </ProductListContainerLayout>

        </>
  )
}
