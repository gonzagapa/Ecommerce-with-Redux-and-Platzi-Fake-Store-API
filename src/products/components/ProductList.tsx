import { useState } from "react";
import { useGetAllProductsQuery } from "../service/productService"
import type { PaginationAttributes } from "../service/types";
import ProductItem from "./ProductItem";
import { LoadingSpinner } from "../../shared/components";


export function ProductList() {

  const [pagination] = useState<PaginationAttributes>({offset:0,limit:10})

  const {data:products, isLoading,isError} = useGetAllProductsQuery(pagination);
  //console.log(products);

  if(isLoading) {
    return (
      <div className="grid content-center">
        <LoadingSpinner color="border-highlight" size="w-8 h-8" thickness="border-4"/>
      </div>
  )
  }
  return (
    <article className="grid grid-cols-3 gap-3 w-full mt-5 px-10">
        {
          products?.map((product) => (
            <ProductItem 
            key={product.id}
            imageURL={product.images[0]} 
            id={product.id} 
            category={product.category.name}
            price={product.price} 
            title={product.title}/>
          ))
        }
    </article>
  )
}
