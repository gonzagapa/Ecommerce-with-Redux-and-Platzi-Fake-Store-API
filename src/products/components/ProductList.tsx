import { useGetAllProductsQuery } from "../service/productService"
import ProductItem from "./ProductItem";
import { usePaginationContext } from "../hooks/usePaginationContext";
import { NoProductsExistsLayout } from "../layout/NoProductsExistsLayout";
import { ProductShadowList } from "./ProductShadowList";
import { useSelector } from "react-redux";
import type { RootState } from "../../app";


export function ProductList() {

 

  const {limit,offset} = useSelector((s:RootState) => s.product); 


  const {refElement} = usePaginationContext();

  //todo:change the use of data
  const {data:products , isFetching} = useGetAllProductsQuery({limit,offset});
  //console.log(products);

  if(isFetching) {
      return (
          <ProductShadowList/>
      )
    }
  
  if(products?.length == 0 ){
    return (
      <NoProductsExistsLayout/>
    )
  }
  return (
    <article ref={refElement} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 w-full mt-5 px-10">
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
