import { useGetAllProductsQuery } from "../service/productService"
import ProductItem from "./ProductItem";
import { useRefSliderContext } from "../hooks/useRefSliderContext";
import { NoProductsExistsLayout } from "../layout/NoProductsExistsLayout";
import { ProductShadowList } from "./ProductShadowList";
import { useSelector } from "react-redux";
import type { RootState } from "../../app";
import { ProductListContainerLayout } from "../layout/ProductListContainerLayout";


export function ProductList() {
  const queryParams = useSelector((s:RootState) => s.product);
  
  const {refElement,setHasProducts} = useRefSliderContext();

  const {data:products , isFetching} = useGetAllProductsQuery(queryParams);
  

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
    <ProductListContainerLayout ref={refElement}>
      {
        products?.map((product) => (
          <ProductItem 
          id={product.id}
          key={product.id}
          imageURL={product.images[0]} 
          category={product.category.name}
          price={product.price} 
          title={product.title}/>
        ))
      }
    </ProductListContainerLayout>
  )
}
