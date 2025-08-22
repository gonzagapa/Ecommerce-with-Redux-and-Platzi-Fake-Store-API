import { useGetAllProductsQuery } from "../service/productService"


export function ProductList() {

  const {data:products, isLoading,isError} = useGetAllProductsQuery();
  console.log(products);
  return (
    <article>
        
    </article>
  )
}
