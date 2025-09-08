import { useGetAllProductsQuery } from "../service/productService"
import ProductItem from "./ProductItem";
import { useRefSliderContext } from "../hooks/useRefSliderContext";
import { NoProductsExistsLayout } from "../layout/NoProductsExistsLayout";
import { ProductShadowList } from "./ProductShadowList";
import { useSelector } from "react-redux";
import type { RootState } from "../../app";


export function ProductList() {
  const queryParams = useSelector((s:RootState) => s.product);
  
  const {refElement,setHasProducts} = useRefSliderContext();

  const {data:products , isFetching} = useGetAllProductsQuery(queryParams);
  console.log(products)

  if(isFetching) {
      setHasProducts(true)
      return (
          <ProductShadowList/>
      )
    }
  
  if(products?.length == 0 ){
    setHasProducts(false)
    return (
      <NoProductsExistsLayout/>
    )
  }
  return (
    <article ref={refElement} className="grid col-span-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 w-full">
        {
          products?.map((product) => (
            <ProductItem 
            key={product.id}
            imageURL={product.images[0]} 
            category={product.category.name}
            price={product.price} 
            title={product.title}/>
          ))
        }
    </article>
  )
}
